const { userModels } = require("../../models/user");
const XLSX = require("xlsx");
const { validateRow } = require("../../validations/newValidation");

exports.read_excel_file = async (req, res) => {

  try {

    const workbook = XLSX.readFile(req.file.path);
    
    const sheetName = workbook.SheetNames[0];
   
    const worksheet = workbook.Sheets[sheetName];
    

    // read data in chunks of 100 rows
    const chunkSize = 100;
    const range = worksheet["!ref"];
  
    const totalRows = range ? range.split(":")[1].replace(/\D/g, "") : 0;
    console.log(totalRows)
    let startRow = 1;

   
    while (startRow <= totalRows) {

      const endRow = Math.min(startRow + chunkSize - 1, totalRows);
      const range = `A${startRow}:C${endRow}`;
      const chunk = XLSX.utils.sheet_to_json(worksheet, { range: range });
      const validRows = [];
      const errors = [];

      // validate data
      for (const row of chunk) {
        // validate row data
       const error = validateRow(row);

        if (error) {
          errors.push(error);
        } else {
          // create a new Row document and save it to the database
          const newRow = new userModels({
            asset_name: row.asset_name,
            floor: row.floor,
            room_number: row.room_number,
            department: row.department,
            installation_date: row.installation_date,
            brand: row.brand,
            model: row.model,
            description: row.description,
            assets_type_name: row.assets_type_name,
            client_critical_asset: row.client_critical_asset,
            strategic_asset: row.strategic_asset,
            replacement_cost: row.replacement_cost,
            tenant_email: row.tenant_email,
          });

        await  newRow.save((err, savedRow) => {
            if (err) {
              console.error(err);
            } else {
              validRows.push(savedRow);
            }
          });
        }
      }

      // display errors
      if (errors.length > 0) {
        console.error(
          `Validation errors in chunk starting at row ${startRow}:`
        );
        console.error(errors);

      }

      startRow += chunkSize;

    }

    for (let i = 0; i < validRows.length; i++) {

      // code to check each row goes here
      
      const error = validateRow(row);

      if (error) {
        
        console.error(`Error in row ${i + 1}: ${error}`);

      }

    }
    
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ status: false, msg: err.message });
  }
};
