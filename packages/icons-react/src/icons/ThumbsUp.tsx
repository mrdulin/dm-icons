import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const ThumbsUp = (props: DMIconProps) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M13.28 6c.799 0 1.597.3 2.096 1 .5.5.699 1.3.6 2.1l-.8 4.6C14.978 15 13.88 16 12.583 16H4V8C4.1 8 6.395.5 6.395.5c0-.3.3-.5.599-.5C8.19 0 8.99.5 8.99 2v4zM0 8h2v8H0z" })))
        } />;
      }

      export default ThumbsUp;