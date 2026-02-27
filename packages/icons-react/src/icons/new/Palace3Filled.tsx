// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Palace3Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.752 131.584V85.44l-85.248-.192-.128 46.272A256.064 256.064 0 0 0 256 384H85.312v554.688H320V832c0-82.88 41.344-145.152 75.52-182.72a367 367 0 0 1 64.32-55.808l8.256-5.312L512 561.792l43.904 26.368 8.256 5.312a367 367 0 0 1 64.32 55.808C662.592 686.848 704 749.12 704 832v106.688h234.624V384H768a256.064 256.064 0 0 0-213.248-252.416m0 167.04V384h-85.504v-85.44h85.504zM405.312 832C405.312 725.312 512 661.312 512 661.312s106.624 64 106.624 170.688v106.688H405.312z" })))
        } />;
      }

      export default Palace3Filled;