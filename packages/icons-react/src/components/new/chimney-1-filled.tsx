import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChimney1Filled = ({
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
    <path d="M73.344 85.312h493.248L512.64 301.568l13.888 125.12h412.16v512h-256v-256h-85.376v256h-515.2l45.44-636.288zm367.232 341.376-9.472-85.376h-220.8l-36.48 512h167.488V426.688zm-257.92-256L203.904 256h232l21.376-85.312H182.592z" />
  </svg>
);
export default SvgChimney1Filled;
