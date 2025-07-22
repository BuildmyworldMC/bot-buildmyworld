import { config } from 'dotenv';
const env = config().parsed;

import { createLogger, format, transports } from 'winston';
const { combine, timestamp, prettyPrint } = format;

const logger = createLogger({
	level: 'info',
	format: combine(
		timestamp(),
		prettyPrint()
	),
	transports: [
		new transports.File({ filename: './logs/logs.log', handleExceptions: true })
	]
});

if (env.NODE_ENV !== 'production') {
	logger.add(new transports.Console({
		format: format.simple()
	}));
}

export default logger;