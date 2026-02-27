import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlipToBack = ({
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
    <path d="M298.688 128H448v85.312h-64v64h-85.312zm234.624 0h128v85.312h-128zm213.376 0H896v149.312h-85.312v-64h-64zM213.312 320v490.688H704V896H128V320zM384 362.688v128h-85.312v-128zm512 0v128h-85.312v-128zM384 576v64h64v85.312H298.688V576zm512 0v149.312H746.688V640h64v-64zm-362.688 64h128v85.312h-128z" />
  </svg>
);
export default SvgFlipToBack;
