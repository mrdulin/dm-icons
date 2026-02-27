import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgToolsCircleFilled = ({
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
    <path d="M512 981.312a469.312 469.312 0 1 1 0-938.624 469.312 469.312 0 0 1 0 938.624m-16-364.608 173.504 173.44L790.208 669.44 616.768 496a192 192 0 0 0-258.176-237.632l-15.744 6.784 6.72 34.56 89.088 89.088-49.728 49.728-89.152-89.088-34.56-6.656-6.784 15.744a192 192 0 0 0 237.632 258.176z" />
  </svg>
);
export default SvgToolsCircleFilled;
