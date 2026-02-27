// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserInvisible = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376M341.312 320A149.312 149.312 0 1 1 640 320a149.312 149.312 0 0 1-298.688 0M170.624 853.312a170.69 170.69 0 0 1 170.688-170.624h128v-85.376h-128a256 256 0 0 0-256 256v85.376h386.112v-85.376zM1006.464 768s-71.296 192-259.84 192a249.15 249.15 0 0 1-107.84-23.808l-41.472 41.472-60.352-60.352 30.656-30.592C510.72 832.512 486.784 768 486.784 768s71.424-192 259.84-192c41.472 0 77.248 9.28 107.904 23.808L896 558.336l60.352 60.352-30.72 30.656A354.6 354.6 0 0 1 1006.528 768zm-140.928-58.56L705.408 869.568c12.736 3.2 26.432 5.12 41.152 5.12C858.176 874.688 911.68 768 911.68 768s-15.104-30.272-46.08-58.56zm-77.632-43.008c-12.8-3.2-26.56-5.12-41.344-5.12C634.752 661.312 581.44 768 581.44 768s15.232 30.272 46.272 58.56z" })))
        } />;
      }

      export default UserInvisible;