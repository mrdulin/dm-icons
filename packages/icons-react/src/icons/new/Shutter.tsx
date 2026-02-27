// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Shutter = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m225.664 256.192 94.528 168.768 167.424-296.192a382.98 382.98 0 0 0-261.952 127.36zM582.4 134.4l-92.8 164.288h341.76A384.26 384.26 0 0 0 582.4 134.4M874.176 384H680.96l171.776 305.28C880.384 636.288 896 576 896 512c0-44.992-7.68-88.064-21.76-128zM798.72 767.36 704 599.04 537.472 895.168A382.98 382.98 0 0 0 798.72 767.424zM442.56 889.664l92.48-164.416h-342.4a384.2 384.2 0 0 0 249.92 164.48zM149.888 640H343.04l-60.16-107.136-111.36-198.656A382.2 382.2 0 0 0 128 512c0 44.928 7.68 88 21.76 128zm291.072 0h142.08l72-128-72-128H441.408l-72.384 128zM140.352 225.408a468.61 468.61 0 0 1 424.064-179.84 469.76 469.76 0 0 1 377.856 278.656c25.152 57.6 39.04 121.088 39.04 187.776a467.46 467.46 0 0 1-97.216 286.08A468.61 468.61 0 0 1 460.8 978.56 469.7 469.7 0 0 1 81.728 699.776 467.9 467.9 0 0 1 42.688 512c0-107.84 36.48-207.36 97.664-286.592" })))
        } />;
      }

      export default Shutter;