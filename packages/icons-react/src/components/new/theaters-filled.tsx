import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTheatersFilled = ({
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
    <path d="M938.624 938.688H85.312V85.312h853.312zm-85.312-768H746.624v106.624h106.688zm0 192H746.624v106.624h106.688zm0 192H746.624v106.624h106.688zm-106.688 192v106.624h106.688V746.688zm-469.312-576H170.624v106.624h106.688zm0 192H170.624v106.624h106.688zm0 192H170.624v106.624h106.688zm0 192H170.624v106.624h106.688z" />
  </svg>
);
export default SvgTheatersFilled;
