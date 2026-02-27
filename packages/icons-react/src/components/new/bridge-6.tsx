import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBridge6 = ({
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
    <path d="M42.688 74.88 512 497.28l469.376-422.4V896H896V597.376h-85.312V896h-85.312V597.376H298.688V896h-85.312V597.376H128V896H42.688zM128 512h272.832L128 266.496zm495.232 0H896V266.496z" />
  </svg>
);
export default SvgBridge6;
