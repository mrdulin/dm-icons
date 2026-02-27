// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ViewInAr = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M64 64h213.312v85.312h-128v128H64zm682.688 0H960v213.312h-85.312v-128h-128zM512 164.096l301.312 173.952v347.904L512 859.968 210.688 685.952V337.984zM296 436.48v200.128l173.312 100.096V536.576L296 436.544zm258.688 300.16L728 636.608V436.544L554.624 536.576v200.192zM512 462.72l173.312-100.032L512 262.592 338.688 362.624zM149.312 746.688v128h128V960H64V746.688zm810.688 0V960H746.688v-85.312h128v-128z" })))
        } />;
      }

      export default ViewInAr;