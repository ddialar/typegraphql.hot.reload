import log4js from 'log4js';

var loggerConfiguration = {
    appenders: {
        out: { 
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '[%r] [%[%5.5p%]] - %[%m%]'
            }
        },
        app: {
            type: 'file',
            layout: {
                type: 'pattern',
                pattern: '[%d] [%5.5p] - %m%'
            },
            filename: `${process.env.LOGGER_FOLDER}${process.env.LOGGER_FILE}`
        },
    },
    categories: {
        default: { 
            appenders: process.env.NODE_ENV !== 'production' ? ['out', 'app'] : ['app'],
            level: process.env.LOGGER_LEVEL_FOR_CONSOLE
        }
    }
};

log4js.configure(loggerConfiguration);
const logger = log4js.getLogger();

export default logger;