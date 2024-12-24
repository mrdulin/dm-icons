import * as path from 'path';
import * as iconDefs from '../src/components';
import * as fs from 'fs';
import { promisify } from 'util';
import * as url from 'url';
import _ from 'lodash';

const writeFile = promisify(fs.writeFile);
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type IconDefinitionWithIdentifier = {
  svgIdentifier: string;
  iconDef: React.ComponentType;
};

function walk<T>(fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>) {
  return Promise.all(
    Object.keys(iconDefs).map((svgIdentifier) => {
      const iconDef = (iconDefs as { [id: string]: React.ComponentType })[svgIdentifier];

      return fn({ svgIdentifier, iconDef });
    }),
  );
}

async function generateIcons() {
  const iconsDir = path.join(__dirname, '../src/icons');
  try {
    await promisify(fs.access)(iconsDir);
  } catch {
    await promisify(fs.mkdir)(iconsDir);
  }

  const render = _.template(
    `
    // GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const <%= svgIdentifier %> = (props: DMIconProps) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          <%= iconDef %>
        } />;
      }

      export default <%= svgIdentifier %>;
    `.trim(),
  );

  await walk(async (item) => {
    await writeFile(path.resolve(__dirname, `../src/icons/${item.svgIdentifier}.tsx`), render(item));
  });

  const entryText = Object.keys(iconDefs)
    .sort()
    .map((svgIdentifier) => `export { default as ${svgIdentifier} } from './${svgIdentifier}';`)
    .join('\n');

  await promisify(fs.appendFile)(
    path.resolve(__dirname, '../src/icons/index.ts'),
    `
      // GENERATE BY ./scripts/generate.ts
      // DON NOT EDIT IT MANUALLY
      ${entryText}
    `.trim(),
  );
}

generateIcons();
