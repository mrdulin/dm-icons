// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Gamepad = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M87.936 128h848.192l48 768H694.592l-42.624-128H372.096l-42.688 128H40l48-768zm80.192 85.312-37.376 597.376h137.152l42.688-128h402.88l42.624 128h137.152l-37.312-597.376zM384 320v85.312h85.376v85.376H384V576h-85.312v-85.312h-85.312v-85.376h85.312V320zm298.688 0h85.504v85.504h-85.504zm0 170.496h85.504V576h-85.504z" })))
        } />;
      }

      export default Gamepad;