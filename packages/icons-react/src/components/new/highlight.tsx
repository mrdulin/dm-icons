import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHighlight = ({
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
    <path d="M85.312 85.312h149.312v85.376h-64v64H85.312zm234.688 0h128v85.376H320zm213.312 0h128v85.376h-128zm213.312 0H896v149.376h-85.376v-64h-64zM170.624 320v128H85.312V320zM896 320v128h-85.376V320zM170.624 533.312v128H85.312v-128zm682.688 64v85.376H742.976l170.688 170.624-60.352 60.352L682.624 743.04v110.272h-85.312v-256zM170.624 746.688v64h64V896H85.312V746.688zm149.376 64h128V896H320z" />
  </svg>
);
export default SvgHighlight;
