// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CalendarEdit = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M341.312 42.688v128h341.312v-128H768v128h170.624V256h.064v298.624h-85.376v-85.376H170.624v384H512v85.376H85.312v-768H256v-128h85.312zM170.624 384h682.688V256H170.624zm652.224 216.96 176.128 176.128-225.536 225.6H597.376l-.064-176.128 225.536-225.536zM794.24 750.336l55.424 55.424 28.608-28.672-55.424-55.424zm-4.928 115.776-55.424-55.424-51.2 51.2v55.424h55.424z" })))
        } />;
      }

      export default CalendarEdit;