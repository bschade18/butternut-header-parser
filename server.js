
// init project
var express = require('express');
var app = express();

app.get("/api/whoami", function (req, res) {
var ipAddress;
var forwardedIpsStr = req.header('X-Forwarded-For'); 
if (forwardedIpsStr) {
var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
if (!ipAddress) {
    ipAddress = req.connection.remoteAddress;
  }

  var software = req.header('User-Agent');
  var language = req.header('Accept-Language');
  
  res.json({"ipaddress": ipAddress, "language": language, "software": software})
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

