// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Map3D = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 78.592 810.688 252.8v230.464c43.904 19.328 82.176 43.392 111.36 72 35.328 34.56 59.328 77.824 59.328 127.36 0 83.84-66.816 148.16-148.608 189.056-84.288 42.112-197.76 66.944-320.768 66.944s-236.48-24.832-320.768-66.944C109.504 830.72 42.688 766.464 42.688 682.624c0-49.536 23.936-92.8 59.264-127.36 29.184-28.608 67.456-52.672 111.36-72v-230.4L512 78.528zM213.376 578.496a249 249 0 0 0-51.712 37.76C137.6 639.808 128 662.4 128 682.624c0 34.048 28.736 76.416 101.376 112.704C299.52 830.4 399.36 853.312 512 853.312s212.48-22.912 282.624-57.984C867.328 759.04 896 716.672 896 682.688c0-20.288-9.536-42.88-33.6-66.432a249 249 0 0 0-51.712-37.76v22.016L512 774.72 213.376 600.512zm512-27.008v-194.56l-170.688 94.784v199.232l170.688-99.52zm-256 99.52V451.84l-170.688-94.976v194.56zM336 280l176 97.856L687.936 280 512 177.408 336.064 280z" })))
        } />;
      }

      export default Map3D;