// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Secured = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m512 18.816 426.624 149.312V512c0 176.064-108.096 299.2-208.896 375.616a842.7 842.7 0 0 1-139.072 84.864c-25.6 12.48-51.84 23.296-78.72 32.704-26.88-9.408-52.992-20.224-78.592-32.704-37.76-18.368-88.32-46.336-139.136-84.864C193.408 811.2 85.312 688 85.312 512V168.128zm0 895.424.32-.128a757.5 757.5 0 0 0 165.824-94.528C769.408 750.464 853.312 649.536 853.312 512V228.672L512 109.184 170.624 228.672V512c0 137.536 83.904 238.464 175.104 307.584A757.6 757.6 0 0 0 512 914.304zm259.072-558.272L469.376 657.664 288.32 476.672l60.352-60.352 120.704 120.64 241.28-241.408 60.416 60.352z" })))
        } />;
      }

      export default Secured;