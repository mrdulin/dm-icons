import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCopyFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.6 6.4a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7.4a1 1 0 0 1 1-1zm2.002-2.8c.883 0 1.598.716 1.598 1.6v7.052a.6.6 0 1 1-1.198 0V5.2a.4.4 0 0 0-.4-.4H4.2l-.108-.008c-.689-.104-.653-1.192.108-1.192zm2.8-2.6C14.285 1 15 1.716 15 2.6v7.052a.6.6 0 1 1-1.198 0V2.6a.4.4 0 0 0-.4-.4H7l-.108-.008C6.202 2.088 6.238 1 6.999 1z" />
  </svg>
);
export default SvgCopyFilled;
