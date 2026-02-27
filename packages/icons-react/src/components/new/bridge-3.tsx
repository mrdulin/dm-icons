import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBridge3 = ({
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
    <path d="M170.688 85.312v147.84l298.688 199.104V85.376h85.312v346.88l298.688-199.04V85.376h85.312V640h42.688v85.376h-42.688v213.312h-85.312V725.376H170.688v213.312H85.376V725.376H42.688V640h42.688V85.312zm0 554.688h298.688V534.848L170.688 335.744zm384 0h298.688V335.744l-298.688 199.04z" />
  </svg>
);
export default SvgBridge3;
