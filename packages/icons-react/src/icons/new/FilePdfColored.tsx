// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FilePdfColored = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "#E24E4D", d: "M10.833.833H2.5v18.333h1.667V11.25h5.178q.346.001.655.115v-.115h3.095c.493 0 .942.187 1.28.494a1.9 1.9 0 0 1 1.28-.494H17.5V7.5h-6.667z" }),
    React.createElement("path", { fill: "#E24E4D", d: "M17.5 5.833v-.345L12.845.833H12.5v5z" }),
    React.createElement("path", { fill: "currentColor", d: "M8.512 12.5H5.416v6.667h1.667v-2.5h1.429c.591 0 1.071-.48 1.071-1.072v-2.024c0-.591-.48-1.071-1.071-1.071M7.916 15h-.833v-.833h.833zM13.095 12.5H10v6.667h3.095c.592 0 1.071-.48 1.071-1.072v-4.524c0-.591-.48-1.071-1.07-1.071m-1.429 5v-3.333h.834V17.5zM15.655 12.5c-.592 0-1.072.48-1.072 1.071v5.596h1.667v-2.5h2.222V15H16.25v-.833h2.222V12.5z" })))
        } />;
      })

      export default FilePdfColored;