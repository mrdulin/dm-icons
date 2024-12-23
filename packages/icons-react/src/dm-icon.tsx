import React from 'react';

export type DMIconProps = React.HTMLProps<HTMLSpanElement> & {
  icon: React.ComponentType;
};
export const DMIcon = ({ icon: Icon, ...restProps }: DMIconProps) => {
  return (
    <span role="img" className="dmicon" {...restProps}>
      <Icon />
    </span>
  );
};
