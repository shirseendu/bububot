var http = require('http')
 var port = process.env.PORT || 1337;
 http.createServer(function(req, res) {
   res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>Euro 2012 teams</h1>\n' + 
    '\n\n<h1><a href="https://join.skype.com/bot/9862d53f-fe24-4359-9f42-9f6145b7a0f6"><img src="https://dev.botframework.com/Client/Images/Add-To-Skype-Buttons.png"/></a></h1>\n' + 
    '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' + 
    '\n\n');
  res.end();
 }).listen(port);
