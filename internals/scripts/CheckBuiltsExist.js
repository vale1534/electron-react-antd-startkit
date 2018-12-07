// @flow
// Check if the renderer and main bundles are built
import path from 'path';
import chalk from 'chalk';
import fs from 'fs';

const redBold = text => chalk.whiteBright.bgRed.bold(text);

function CheckBuildsExist() {
  const mainPath = path.join(__dirname, '../../app/main.prod.js');
  const rendererPath = path.join(__dirname, '../../app/dist/renderer.prod.js');

  if (!fs.existsSync(mainPath)) {
    throw new Error(redBold('Running "yarn build-main"'));
  }

  if (!fs.existsSync(rendererPath)) {
    throw new Error(redBold('Running "yarn build-renderer"'));
  }
}

CheckBuildsExist();
