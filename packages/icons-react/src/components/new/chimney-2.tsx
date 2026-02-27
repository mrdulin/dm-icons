import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChimney2 = ({
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
    <path d="M469.312 85.312H170.624v252.8L78.272 938.688h860.352v-512h-455.68l-13.632-88.576zM384 170.688v173.888l12.608 82.112h-55.296v426.688H177.728L256 344.576V170.688zm42.624 682.624V512h426.688v341.376H682.624V682.688h-85.312v170.688H426.624z" />
  </svg>
);
export default SvgChimney2;
