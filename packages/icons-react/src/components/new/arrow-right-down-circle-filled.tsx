import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowRightDownCircleFilled = ({
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
    <path d="M180.16 843.84a469.312 469.312 0 1 1 663.68-663.68 469.312 469.312 0 0 1-663.68 663.68m211.2-211.2 309.248 67.904-67.904-309.248-90.496 90.624L361.152 300.8l-60.288 60.352 180.992 180.992-90.496 90.56z" />
  </svg>
);
export default SvgArrowRightDownCircleFilled;
