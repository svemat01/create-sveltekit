import { createLogger } from '@lvksh/logger';
import chalk from 'chalk';

const logger = createLogger(
    {
        info: {
            label: chalk.cyan`[INFO]`,
            newLine: chalk.cyan`⮡`,
            newLineEnd: chalk.cyan`⮡`,
        },
        warn: {
            label: chalk.yellow`[WARN]`,
            newLine: chalk.yellow`⮡`,
            newLineEnd: chalk.yellow`⮡`,
        },
        empty: {
            label: '',
            divider: '',
        },
    },
    { padding: 'PREPEND' },
    console.log
);

logger.warn(chalk.redBright.bold`Unofficial SvelteKit CLI!`);
logger.info(`You are most likely looking for the ${chalk.bold`OFFICIAL`} ${chalk.cyan('create-svelte')} package`, 'https://www.npmjs.com/package/create-svelte');
logger.empty();
logger.info(`${chalk.bold`Getting started:`} https://kit.svelte.dev/docs/introduction`)