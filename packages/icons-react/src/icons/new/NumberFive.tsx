// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const NumberFive = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M11.817 4.028H8.072l-.487 2.218.525-.095q.281-.064.825-.063.944 0 1.624.395.697.396 1.021 1.157.342.76.184 1.886-.172 1.22-.776 2.107a3.9 3.9 0 0 1-1.632 1.363q-1.026.474-2.466.475a8 8 0 0 1-1.626-.158A4.5 4.5 0 0 1 4 12.853l.29-2.06q.517.302 1.27.524.771.206 1.443.206.609 0 1.05-.19.444-.192.707-.587.28-.396.367-1.014.118-.84-.302-1.268-.418-.443-1.41-.443-.416 0-.845.095-.428.078-.743.158l-.92-.506L6.134 2H12.1z" })))
        } />;
      })

      export default NumberFive;