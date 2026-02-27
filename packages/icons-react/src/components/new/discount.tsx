import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiscount = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m490.56 50.752 448.256 34.496 34.432 448.192-466.432 466.432L24.128 517.184zm32.576 88.064L144.832 517.184l361.984 362.048 378.368-378.368-25.856-336.192zm164.736 197.312a42.688 42.688 0 1 0-60.352 60.352 42.688 42.688 0 0 0 60.352-60.352m-120.704-60.352A128 128 0 1 1 748.16 456.832a128 128 0 0 1-180.992-181.056" />
  </svg>
);
export default SvgDiscount;
