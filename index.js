var sys = require('sys');
var exec = require('child_process').exec;
var child;
var start = Date.now();

var startTime = '00:00:00.000';
var endTime = '00:00:30.000';
var height = '360';
var width = '480';
var video = 'http://www.w3schools.com/html/mov_bbb.mp4';
var outputDirectory = 'files/gif/';
var outputName = 'output-' + start + '.gif';
var fps = 24;
var command = 'ffmpeg -i ' + video + ' -ss ' + startTime + ' -r ' + fps + ' -s ' + width + 'x' + height + ' -t ' + endTime + ' ' + outputDirectory + outputName;

child = exec(command, function (err, stdout, stderr) {
  if (err) {
    console.log('Exec error: ' + err);
    return;
  }
  console.log('Converted video in ' + (Date.now() - start) + 'ms');
});
