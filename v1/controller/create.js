const { userModels } = require("../../models/user");
const xlsx = require("xlsx");
const checkValidation = require("../../validations/validator");

exports.uploads_Excel_File = async (req, res) => {

  try {

    
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0]; // assume the first sheet is the one we want to read
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);
    console.log(data)

    let arr = []; let startRow = 2;

    let chunk_size = 100; let endRow = chunk_size + 1;

    for (const input of data) {

      const row = {};

      for (const key in input) {

        row[key.replace(/\s+/, "")] = input[key];

      }

      if (
        !checkValidation.isString(row.asset_name) ||
        row.asset_name.trim() === ""
      ) {
        console.error("Invalid : asset_name");
        continue;
      }

      if (!checkValidation.isNumber(row.floor)) {
        console.error("Invalid : floor");
        continue;
      }

      if (!checkValidation.isNumber(row.room_number)) {
        console.error("Invalid : room_number");
        continue;
      }

      if (!checkValidation.isString(row.department)) {
        console.error("Invalid : department");
        continue;
      }

      if (!checkValidation.check_date_formate(row.installation_date)) {
        console.error("Invalid : installation_date");
        continue;
      }

      if (!checkValidation.isString(row.brand)) {
        console.error("Invalid : brand ");
        continue;
      }

      if (!checkValidation.isString(row.model)) {
        console.error("Invalid : model");
        continue;
      }

      if (!checkValidation.isString(row.description)) {
        console.error("Invalid : description");
        continue;
      }

      if (!checkValidation.isString(row.assets_type_name)) {
        console.error("Invalid : assets_type_name");
        continue;
      }

      if (!checkValidation.isString(row.client_critical_asset)) {
        console.error("Invalid : client_critical_asset");
        continue;
      }

      if (
        !checkValidation.isString(row.strategic_asset) ||
        !checkValidation.isValidStatus(row.strategic_asset)
      ) {
        console.error("Invalid : strategic_asset");
        continue;
      }

      if (!checkValidation.isString(row.replacement_cost)) {
        console.error("Invalid : replacement_cost");
        continue;
      }

      if (
        !checkValidation.isString(row.tenant_email) ||
        !checkValidation.isEmail(row.tenant_email)
      ) {
        console.error("Invalid : tenant_email");
        continue;
      }

      arr.push(row);

    }
  
    res.status(201).send({ msg: "sucessfully data inserted" });

  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ status: false, msg: err.message });
  }
};
