import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemCodeFilled = ({
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
    <path d="M981.376 85.312H42.688V768h938.688zM377.344 593.28 244.032 426.624l133.312-166.592 66.624 53.312-90.688 113.28 90.688 113.344zm202.688-53.312 90.624-113.28-90.624-113.344 66.624-53.312 133.312 166.592L646.656 593.28zM896 853.312H128v85.376h768z" />
  </svg>
);
export default SvgSystemCodeFilled;
