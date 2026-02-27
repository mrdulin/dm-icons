// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileImageFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h426.688V384H896v597.312H128zm298.88 426.624h-85.632v85.568h85.632zM656 785.664l60.416-60.352L543.04 552l-62.912 62.976-26.88-32.192-96.448 93.312-49.28 49.28 60.352 60.288 48.768-48.768 29.824-28.8 27.84 33.408 68.8-68.8 112.96 112.96zM896 280.96v17.728H640v-256h17.664z" })))
        } />;
      }

      export default FileImageFilled;