// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const CircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("circle", { cx: 12, cy: 12, r: 12 }),
    React.createElement("path", { d: "M7.293 16.707h10.79a.317.317 0 1 1 0 .635H7.293v.74a.317.317 0 1 1-.635 0v-.74h-.74a.317.317 0 0 1 0-.635h.74V5.917a.317.317 0 1 1 .635 0zm2.856-6.294c.146 0 .264.119.264.265v4.76a.265.265 0 0 1-.264.264H8.562a.265.265 0 0 1-.264-.264v-4.76c0-.146.118-.265.264-.265zm6.347-1.587c.146 0 .264.119.264.265v6.347a.265.265 0 0 1-.264.264h-1.587a.265.265 0 0 1-.264-.264V9.091c0-.146.118-.265.264-.265zm-3.174-2.644c.146 0 .265.118.265.264v8.992a.265.265 0 0 1-.265.264h-1.586a.265.265 0 0 1-.265-.264V6.446c0-.146.119-.264.265-.264z" })))
        } />;
      }

      export default CircleFilled;