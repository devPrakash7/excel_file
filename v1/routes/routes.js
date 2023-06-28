
const router = require("express").Router();
const {  uploads_Excel_File } = require("../controller/create");
const { upload } = require("../../middleware/midFile");
const { read_excel_file } = require("../controller/ExcelFileRead");



router.post("/upload_File" , upload.single("file") , uploads_Excel_File );
router.post("/read_excel_file" , upload.single("file") , read_excel_file );

module.exports = router;