import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNumberOne = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.625 13.313H7.018l1.013-7.21q.072-.396.131-.824.077-.427.14-.76-.142.096-.385.348a3.2 3.2 0 0 1-.461.429L6.109 6.34 5 4.9 8.975 2h2.24z" />
  </svg>
);
export default SvgNumberOne;
