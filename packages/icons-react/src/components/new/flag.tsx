import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlag = ({
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
    <path d="M128 85.312h359.04l85.312 85.376H914.24L813.44 448l100.864 277.312h-377.28L451.648 640H213.312v320H128zm85.312 469.376H487.04L572.352 640h220.096L722.56 448l69.76-192H536.96l-85.312-85.312H213.312z" />
  </svg>
);
export default SvgFlag;
