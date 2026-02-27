import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgControlPlatformFilled = ({
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
    <path d="M896 241.216 511.936 19.2l-384 221.952L512 462.72zm42.56 73.92-384 221.504v443.52l384-221.952zM469.248 979.84v-443.2l-384-221.632V755.2z" />
  </svg>
);
export default SvgControlPlatformFilled;
