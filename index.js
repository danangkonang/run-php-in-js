const { exec } = require("child_process");

module.exports.init = () => {
  let pin = "testing123";
  let userId = "kjhkhk";
  exec(`php -r "require 'file.php'; isPassword1('${pin}','${userId}');"`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};