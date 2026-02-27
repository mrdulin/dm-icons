// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Calculation = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M320 85.312v149.376h149.312V320H320v149.312h-85.376V320H85.312v-85.312h149.312V85.312zm234.624 149.376h384V320h-384zm-94.848 405.76L339.072 761.152 466.624 888.64l-60.352 60.352L278.72 821.504 158.08 942.08l-60.352-60.352 120.64-120.64-113.792-113.856 60.352-60.352L278.72 700.8l120.704-120.768 60.352 60.352zM704 597.248h85.504v85.504H704zM554.624 725.312h384v85.376h-384zM704 853.248h85.504v85.504H704z" })))
        } />;
      }

      export default Calculation;