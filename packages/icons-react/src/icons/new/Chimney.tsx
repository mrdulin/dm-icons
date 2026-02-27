// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Chimney = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M73.344 85.312h493.312L512.512 302.08l15.232 175.68L640 421.632l298.688 149.312v367.744H82.176l45.44-636.288L73.344 85.376zm137.088 256-36.608 512h167.552V571.008l104.32-52.096-15.488-177.472H210.432zM436.032 256l21.312-85.312H182.656L204.032 256zm-9.344 597.376h170.688v-128h85.312v128h170.688V623.68L640 517.056 426.688 623.744z" })))
        } />;
      }

      export default Chimney;