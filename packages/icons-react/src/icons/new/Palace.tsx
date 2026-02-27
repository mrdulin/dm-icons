// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Palace = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.624 85.312v48.064c73.6 18.944 128 85.76 128 165.312h128V384H768v42.688h170.624V512H896v341.376h42.624v85.312H85.312v-85.312H128V512H85.312v-85.312H256V384h-42.688v-85.312h128c0-79.552 54.4-146.368 128-165.312v-48h85.312zM341.312 384v42.688h341.312V384zm256-85.312a85.312 85.312 0 0 0-170.688 0zM213.312 512v341.376h128V768a170.688 170.688 0 1 1 341.312 0v85.376h128V512zm384 341.376V768a85.312 85.312 0 1 0-170.688 0v85.376z" })))
        } />;
      }

      export default Palace;