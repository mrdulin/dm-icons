import * as path from 'path';
import * as legacyIconDefs from '../src/components';
import * as iconDefs from '../src/components/new';
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

function walkLegacy<T>(fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>) {
  return Promise.all(
    Object.keys(legacyIconDefs).map((svgIdentifier) => {
      const legacyIconDef = (legacyIconDefs as { [id: string]: React.ComponentType })[svgIdentifier];

      return fn({ svgIdentifier, iconDef: legacyIconDef });
    }),
  );
}

function walk<T>(fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>) {
  return Promise.all(
    Object.keys(iconDefs).map((svgIdentifier) => {
      const iconDef = (iconDefs as { [id: string]: React.ComponentType })[svgIdentifier];

      return fn({ svgIdentifier, iconDef });
    }),
  );
}

async function generateIcons() {
  const legacyIconsDir = path.join(__dirname, '../src/icons/legacy');
  const newIconsDir = path.join(__dirname, '../src/icons/new');
  try {
    await promisify(fs.access)(legacyIconsDir);
    await promisify(fs.access)(newIconsDir);
  } catch {
    await promisify(fs.mkdir)(legacyIconsDir, { recursive: true });
    await promisify(fs.mkdir)(newIconsDir, { recursive: true });
  }

  const render = _.template(
    `
    // GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const <%= svgIdentifier %> = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          <%= iconDef %>
        } />;
      }

      export default <%= svgIdentifier %>;
    `.trim(),
  );

  await walkLegacy(async (item) => {
    await writeFile(path.resolve(__dirname, `../src/icons/legacy/${item.svgIdentifier}.tsx`), render(item));
  });

  await walk(async (item) => {
    await writeFile(path.resolve(__dirname, `../src/icons/new/${item.svgIdentifier}.tsx`), render(item));
  });

  const legacyEntryFileContent = Object.keys(legacyIconDefs)
    .sort()
    .map((svgIdentifier) => `export { default as ${svgIdentifier} } from './${svgIdentifier}';`)
    .join('\n');

  const entryFileContent = Object.keys(iconDefs)
    .sort()
    .map((svgIdentifier) => `export { default as ${svgIdentifier} } from './${svgIdentifier}';`)
    .join('\n');

  await promisify(fs.appendFile)(
    path.resolve(__dirname, '../src/icons/legacy/index.ts'),
    `
      // GENERATE BY ./scripts/generate.ts
      // DON NOT EDIT IT MANUALLY
      ${legacyEntryFileContent}
    `.trim(),
  );

  await promisify(fs.appendFile)(
    path.resolve(__dirname, '../src/icons/new/index.ts'),
    `
      // GENERATE BY ./scripts/generate.ts
      // DON NOT EDIT IT MANUALLY
      ${entryFileContent}
    `.trim(),
  );

  await promisify(fs.appendFile)(
    path.resolve(__dirname, '../src/icons/index.ts'),
    `
      // GENERATE BY ./scripts/generate.ts
      // DON NOT EDIT IT MANUALLY
      export * from './legacy';
      export * as new from './new';
    `.trim(),
  );
}

generateIcons();
