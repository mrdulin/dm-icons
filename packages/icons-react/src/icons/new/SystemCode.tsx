// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemCode = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 85.312h938.688V768H42.688zM128 170.688v512h768v-512zm315.968 142.656-90.624 113.28 90.624 113.344-66.56 53.312-133.376-166.592 133.312-166.656zm202.688-53.312 133.312 166.656L646.656 593.28l-66.56-53.312 90.624-113.28-90.688-113.344zM128 853.312h768v85.376H128z" })))
        } />;
      }

      export default SystemCode;