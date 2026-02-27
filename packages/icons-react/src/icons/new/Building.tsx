// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Building = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.624 85.312h426.688v128h128V384h85.312v85.312H896v384h42.624v85.376H85.312v-85.312H128v-384H85.312V384h85.312V213.312h128zm85.376 128h256v-42.624H384v42.688zm-170.688 256v384h128v-256h341.312v256h128v-384zM768 384v-85.312H256V384zM597.312 853.376V682.688H426.624v170.688z" })))
        } />;
      }

      export default Building;