import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity3 = ({
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
    <path d="M938.624 85.312H640v213.376H384V85.376H85.312v853.312h853.312V85.376zM384 384h256v469.376h-85.376V682.688h-85.312v170.688H384zm-85.376 469.376h-128V170.688h128zm426.688 0V170.688h128v682.688zm-128-384H426.624v85.312h170.688z" />
  </svg>
);
export default SvgCity3;
