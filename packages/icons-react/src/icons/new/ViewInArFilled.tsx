// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ViewInArFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M277.312 64H64v213.312h85.312v-128h128zM960 64H746.688v85.312h128v128H960zM770.368 313.216 512 164.096l-258.304 149.12 258.24 149.056zm42.944 73.728L554.624 536.192v299.136l258.688-149.376zm-344 448.32V536.192l-258.56-149.248-.064 299.008 258.56 149.312zm-320 39.424v-128H64V960h213.312v-85.312zM960 960V746.688h-85.312v128h-128V960z" })))
        } />;
      }

      export default ViewInArFilled;