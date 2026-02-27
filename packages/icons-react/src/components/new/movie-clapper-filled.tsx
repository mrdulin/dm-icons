import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMovieClapperFilled = ({
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
    <path d="M938.624 85.312H85.312v853.376h853.312zm-768 256V170.688h65.344L378.24 341.312zm318.72 0L347.008 170.688h187.584L676.8 341.312H489.28zm298.624 0L645.76 170.688h207.552v170.624zM384 597.312V512h256v85.312z" />
  </svg>
);
export default SvgMovieClapperFilled;
