import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEyeOutlined2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 14 14"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1.228 7A6.128 6.128 0 0 0 12.78 7 6.128 6.128 0 0 0 1.228 7M.057 6.823a7.295 7.295 0 0 1 13.895 0l.057.177-.057.177a7.295 7.295 0 0 1-13.895 0L0 7zM7.004 5.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M4.088 7A2.917 2.917 0 1 1 9.92 7a2.917 2.917 0 0 1-5.833 0"
    />
  </svg>
);
export default SvgEyeOutlined2;
