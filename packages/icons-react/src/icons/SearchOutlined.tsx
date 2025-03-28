// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const SearchOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "4 4 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m15.649 14.507 3.124 3.155a.783.783 0 0 1-.01 1.112.797.797 0 0 1-1.12-.01l-3.122-3.151a5.95 5.95 0 0 1-3.577 1.187C7.661 16.8 5 14.16 5 10.9 5 7.642 7.661 5 10.944 5s5.945 2.642 5.945 5.9c0 1.359-.463 2.61-1.24 3.607m-4.705.72c2.408 0 4.36-1.937 4.36-4.327s-1.952-4.327-4.36-4.327c-2.407 0-4.359 1.938-4.359 4.327s1.952 4.327 4.36 4.327" })))
        } />;
      }

      export default SearchOutlined;