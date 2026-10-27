import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownCircleFilled = ({
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
    <g fill="none" fillRule="evenodd" transform="rotate(-180 8 8)">
      <circle cx={8} cy={8} r={8} fill="currentColor" />
      <path
        fill="#FFF"
        d="M8.776 5.435 10.218 7a.745.745 0 0 0 1.062 0 .766.766 0 0 0 0-1.074L8.821 3.334A1.1 1.1 0 0 0 8.024 3c-.3 0-.584.119-.796.333L4.72 5.925A.77.77 0 0 0 4.72 7a.746.746 0 0 0 1.062 0l1.49-1.564v6.814a.752.752 0 0 0 1.503 0z"
      />
    </g>
  </svg>
);
export default SvgArrowDownCircleFilled;
