// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Film = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 1 1 0 768 384 384 0 0 1 0-768m269.952 768a471 471 0 0 0 65.28-55.488A469.312 469.312 0 1 0 512 981.312h512V896H781.888zM512 256a42.688 42.688 0 1 0 0 85.312A42.688 42.688 0 0 0 512 256m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0m-85.312 170.624a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0m554.688-42.688a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0M512 682.688A42.688 42.688 0 1 0 512 768a42.688 42.688 0 0 0 0-85.312m-128 42.624a128 128 0 1 1 256 0 128 128 0 0 1-256 0" })))
        } />;
      }

      export default Film;