// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UsergroupFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.688 213.312a128 128 0 1 0 0 256v85.376A213.31 213.31 0 0 0 85.312 768v170.688H0V768a298.62 298.62 0 0 1 160-264.576A213.312 213.312 0 0 1 298.624 128h42.624v85.312A213 213 0 0 1 512 128c69.76 0 131.776 33.536 170.688 85.312V128h42.624a213.312 213.312 0 0 1 138.752 375.424A298.62 298.62 0 0 1 1024 768v170.688h-85.312V768a213.31 213.31 0 0 0-213.376-213.312v-85.376a128 128 0 1 0 0-256h-42.624a213.312 213.312 0 1 1-341.312 0zm-128 597.376A213.31 213.31 0 0 1 384 597.312h256a213.31 213.31 0 0 1 213.312 213.376v128H170.688z" })))
        } />;
      }

      export default UsergroupFilled;