// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Wealth = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M288 106.688h448V224c0 67.008-29.44 127.168-76.032 168.192a385.47 385.47 0 0 1 188.16 168.576l20.608 37.312-74.624 41.408-20.672-37.376a298.688 298.688 0 0 0-560.128 144.512V768c0 47.104 38.208 85.312 85.376 85.312h298.624v85.376H298.688A170.69 170.69 0 0 1 128 768v-21.312a384.13 384.13 0 0 1 236.032-354.496A223.49 223.49 0 0 1 288 224zm224 256c76.608 0 138.688-62.08 138.688-138.688v-32H373.312v32c0 76.608 62.08 138.688 138.688 138.688m170.688 320h298.624V768H682.688zm0 170.624h298.624v85.376H682.688z" })))
        } />;
      }

      export default Wealth;