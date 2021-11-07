var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
const path = require('path');
 
var config = {
    user: "", //log
    // Password optional, prompted if none given
    password: "", //pass
    host: "", //ip host
    port: 21, // port host
    localRoot: path.join(__dirname, '../dist'), //local path
    remoteRoot: "/www/", //server path
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*", "**/*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};
 
// use with promises
ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
 
// use with callback
// ftpDeploy.deploy(config, function(err, res) {
//     if (err) console.log(err);
//     else console.log("finished:", res);
// });

