// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserAvatar = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v853.376H85.312zm746.688 768h21.312v-682.56H170.624v682.624H192A213.31 213.31 0 0 1 405.312 640h213.312A213.31 213.31 0 0 1 832 853.376zm-320-554.56A106.688 106.688 0 1 0 512 512a106.688 106.688 0 0 0 0-213.312zM320 405.376a192 192 0 1 1 384 0 192 192 0 0 1-384 0m85.312 320a128 128 0 0 0-128 128h469.312a128 128 0 0 0-128-128z" })))
        } />;
      }

      export default UserAvatar;