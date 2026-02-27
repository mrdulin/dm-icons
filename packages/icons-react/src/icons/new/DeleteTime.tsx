// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const DeleteTime = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M320 42.688h384v128h234.624V256h-86.528l-6.976 235.904-85.248-2.56L766.72 256H257.28l18.816 640h214.528v85.312H193.28L171.904 256H85.312v-85.312H320zm85.312 128h213.312V128H405.312zm149.312 170.624V640h-85.312V341.312zM789.312 640a149.312 149.312 0 1 0 0 298.688 149.312 149.312 0 0 0 0-298.688M554.624 789.312a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.376 0M832 693.44v78.208L892.352 832 832 892.352l-85.376-85.376V693.44z" })))
        } />;
      }

      export default DeleteTime;