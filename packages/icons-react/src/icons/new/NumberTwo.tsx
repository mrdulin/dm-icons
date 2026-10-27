// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const NumberTwo = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M9.516 2q1.073 0 1.799.412.728.396 1.047 1.093.336.681.213 1.553a4.2 4.2 0 0 1-.39 1.3 5.8 5.8 0 0 1-.772 1.156q-.464.57-1.094 1.188-.629.601-1.408 1.362L7.58 11.35l-.032.11h4.384l-.283 2.012H4l.234-1.663 3.06-2.868A34 34 0 0 0 8.78 7.466q.564-.601.823-1.077.276-.492.355-1.046.097-.681-.194-1.014-.273-.333-.785-.333-.56 0-1.162.302-.587.3-1.32.855L5.305 3.616q.54-.428 1.12-.792.578-.364 1.33-.586Q8.509 2 9.516 2" })))
        } />;
      })

      export default NumberTwo;