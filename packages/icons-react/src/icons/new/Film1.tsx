// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Film1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v853.376H85.312zm85.312 85.376V256H256v-85.312zm170.688 0v298.624h341.312V170.688zm426.688 0V256h85.312v-85.312zm85.312 170.624H768v128h85.312zm0 213.376H768v128h85.312zm0 213.312H768v85.312h85.312zm-170.688 85.312V554.688H341.312v298.624zm-426.624 0V768h-85.376v85.312zm-85.376-170.624H256v-128h-85.376zm0-213.376H256v-128h-85.376z" })))
        } />;
      }

      export default Film1;