// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Dam = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m512 28.608 384 336v488.704h42.624v85.312h-384v-85.312h42.688V426.624H426.624v426.688h42.688v85.312h-384v-85.312H128V364.608zM213.376 853.312h127.872l.064-426.688h-128v426.688zm70.848-512h455.552L511.936 142.08 284.288 341.312zm526.4 85.312h-128v426.688h128z" })))
        } />;
      }

      export default Dam;