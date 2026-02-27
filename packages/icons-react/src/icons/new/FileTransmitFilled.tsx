// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileTransmitFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h426.688V384H896v597.312H128zm533.312 558.784-91.2-106.944-64.896 55.36 22.4 26.24H362.688v85.376h298.624zm-.128 102.336H362.688v59.968l91.2 107.008 64.96-55.36-22.464-26.304h164.8zM896 280.96v17.728H640v-256h17.664z" })))
        } />;
      }

      export default FileTransmitFilled;