// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const GesturePress = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M469.312 106.688A213.312 213.312 0 0 1 639.36 448.896l-3.072-.064H586.88v-126.08a117.568 117.568 0 0 0-235.136 0v175.296a213.312 213.312 0 0 1 117.568-391.36M721.472 480A298.688 298.688 0 1 0 351.68 594.56v49.92l-91.52-20.416a80.13 80.13 0 0 0-84.096 33.792l-40.128 60.288L319.36 956.672c22.208 28.992 56.704 45.952 93.248 45.952H714.88c50.624 0 95.616-32.384 111.616-80.448l76.032-228.288a117.63 117.63 0 0 0-52.288-138.752L721.536 480zm-252.16-189.44c17.792 0 32.256 14.464 32.256 32.256v211.328h134.72a32.3 32.3 0 0 1 16.256 4.48l154.688 90.24c13.184 7.68 19.2 23.552 14.336 38.08l-76.032 228.288a32.26 32.26 0 0 1-30.656 22.08H412.608a32.32 32.32 0 0 1-25.6-12.608l-146.176-190.08 4.288-6.464 191.936 42.688V322.816c0-17.792 14.464-32.256 32.256-32.256" })))
        } />;
      }

      export default GesturePress;