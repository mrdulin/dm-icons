import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfoCircleFilled = ({
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
    <path d="M512 981.312a469.312 469.312 0 1 0 0-938.624 469.312 469.312 0 0 0 0 938.624m-42.816-618.624V277.12h85.504v85.504H469.12zm85.504 64v320h-85.312v-320z" />
  </svg>
);
export default SvgInfoCircleFilled;
