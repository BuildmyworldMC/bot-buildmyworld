const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
	level: 'info',
	format: combine(
		timestamp(),
		prettyPrint()
	),
	transports: [
		new transports.File({ filename: './logs/logs.log' })
	]
});

if (env.NODE_ENV !== 'production') {
	logger.add(new transports.Console({
		format: format.simple()
	}));
}

module.exports = logger;