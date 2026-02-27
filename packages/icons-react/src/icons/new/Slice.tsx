// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Slice = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m7.936 809.024 340.224 114.56L546.88 724.8l50.56 50.56 343.744-343.808A196.48 196.48 0 0 0 663.232 153.6L7.936 808.96zm432.256-311.552 283.392-283.52A111.168 111.168 0 1 1 880.896 371.2L597.44 654.72zm46.336 167.04-161.28 161.28-159.68-53.76L379.84 557.824z" })))
        } />;
      }

      export default Slice;