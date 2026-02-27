// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AddressBookFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.688 85.312A170.69 170.69 0 0 0 128 256v512a170.69 170.69 0 0 0 170.688 170.688H896V85.312zM725.312 416l-106.624-88L512 416V170.688h213.312zm-512 352c0-47.104 38.208-85.312 85.376-85.312h512v170.624h-512A85.31 85.31 0 0 1 213.312 768" })))
        } />;
      }

      export default AddressBookFilled;