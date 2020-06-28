const winston = require('winston');
require('winston-daily-rotate-file');
const path = require('path');


const transport = new (winston.transports.DailyRotateFile)({
	dirname:"logs",
	frequency:"1m",
	filename: 'a.log',
	datePattern: "YYYY-MM-DD HH",
	zippedArchive: false,
	maxsize: 1000,
	level:"debug"
});

transport.on('rotate', function(oldFilename, newFilename) {
	console.log('oldFilename',oldFilename);
	console.log('newFilename',newFilename);

});

const logger = winston.createLogger({
	transports: [	transport	]
});





var recursive = function () {
	logger.debug('log to file');
	logger.info("127.0.0.1 - there's no place like home");
	logger.warn("127.0.0.1 - there's no place like home");
	logger.error("127.0.0.1 - there's no place like home");
	setTimeout(recursive,1000);
}
recursive();
// process.stdin.setRawMode(true);
// process.stdin.resume();
// process.stdin.on('data', process.exit.bind(process, 0));