// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskVisibleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M682.688 42.688H341.312v170.624h341.376zM256 128H128v853.312h380.16a377 377 0 0 1-23.68-23.424 413 413 0 0 1-51.84-69.376c-10.624-17.92-18.56-35.84-25.728-52.48l-11.008-25.408 10.944-25.408c7.296-16.896 15.232-34.752 25.792-52.48 11.136-18.688 28.16-43.84 51.84-69.312 47.168-50.816 126.848-108.672 240.768-108.8 69.568 0 126.336 21.504 170.752 49.856V128H768v170.688H256zm663.424 578.944c-39.68-42.752-103.616-88.32-194.048-88.32-90.432.064-154.24 45.632-193.92 88.32a349.3 349.3 0 0 0-54.528 78.208 287 287 0 0 0-7.04 15.616l-4.224 9.856 4.224 9.92c2.048 4.8 4.352 10.24 7.04 15.616a349.3 349.3 0 0 0 54.464 78.208c39.68 42.752 103.616 88.32 193.984 88.32 90.496 0 154.368-45.568 194.048-88.32a349 349 0 0 0 54.4-78.272c2.752-5.312 5.056-10.752 7.04-15.552l4.288-9.92-4.224-9.856c-2.048-4.8-4.352-10.24-7.04-15.616a349 349 0 0 0-54.464-78.272zM778.624 768v85.312H672V768h106.688z" })))
        } />;
      }

      export default TaskVisibleFilled;