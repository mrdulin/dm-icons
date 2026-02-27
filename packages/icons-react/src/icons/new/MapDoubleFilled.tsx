// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapDoubleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m320 78.592 195.2 113.856L746.56 96v272l192-80v520.512L704 945.408l-195.2-113.92L277.312 928V656l-192 80V215.488zm426.624 381.824v361.28l106.688-62.208V416zm-85.312 361.28V456.512L554.624 394.24v365.184l106.688 62.208zm-192-66.176V394.304l-106.688 62.208V800z" })))
        } />;
      }

      export default MapDoubleFilled;