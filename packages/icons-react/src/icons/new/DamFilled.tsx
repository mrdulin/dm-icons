// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const DamFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m512 28.672 384 336v488.64h42.624v85.376h-384v-85.376h42.688V426.688H426.624v426.624h42.688v85.376h-384v-85.376H128v-488.64zm-298.624 824.64h127.872l.064-426.624h-128v426.624zm597.248-426.624h-128v426.624h128z" })))
        } />;
      }

      export default DamFilled;