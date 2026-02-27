// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Dashboard = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1066 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.205 128a384 384 0 0 0-192 716.608l36.928 21.376-42.688 73.856-36.928-21.376A469.312 469.312 0 1 1 701.34 66.176l40.512 13.376-26.752 81.024-40.512-13.376a383.6 383.6 0 0 0-120.32-19.2zm383.232 60.352-236.48 236.416a170.688 170.688 0 1 1-60.544-60.16L877.085 128zm49.28 136 13.312 40.512c15.296 46.336 23.552 95.808 23.552 147.136a469.12 469.12 0 0 1-234.496 406.4l-36.928 21.376-42.752-73.856 36.928-21.376A383.81 383.81 0 0 0 938.205 512c0-42.112-6.72-82.56-19.2-120.384l-13.44-40.512 81.088-26.752zM554.205 426.688a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624" })))
        } />;
      }

      export default Dashboard;