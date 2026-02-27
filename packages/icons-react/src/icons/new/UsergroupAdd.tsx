// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UsergroupAdd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M384 213.312a128 128 0 0 0 0 256v85.376A213.31 213.31 0 0 0 170.624 768v170.688H85.312V768a298.62 298.62 0 0 1 160-264.576A213.312 213.312 0 0 1 384 128h42.624v85.312zm256 0a128 128 0 1 0 0 256 128 128 0 0 0 0-256m-213.376 128a213.312 213.312 0 1 1 426.688 0 213.312 213.312 0 0 1-426.688 0m-128 469.376A213.31 213.31 0 0 1 512 597.312h128v85.376H512a128 128 0 0 0-128 128v42.624h256v85.376H298.624zM896 597.312v128h128v85.376H896v128h-85.376v-128h-128v-85.376h128v-128z" })))
        } />;
      }

      export default UsergroupAdd;