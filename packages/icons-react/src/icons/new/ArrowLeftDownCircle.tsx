// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ArrowLeftDownCircle = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 512a384 384 0 1 0 768 0 384 384 0 0 0-768 0m384 469.312a469.312 469.312 0 1 1 0-938.624 469.312 469.312 0 0 1 0 938.624m-178.432-290.88v-326.72h85.376v180.992L647.808 315.84l60.352 60.352-228.864 228.864h180.992v85.376z" })))
        } />;
      }

      export default ArrowLeftDownCircle;