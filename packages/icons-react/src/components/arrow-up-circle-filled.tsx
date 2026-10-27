import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpCircleFilled = ({
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
        d="M8.776 10.565 10.218 9a.745.745 0 0 1 1.062 0 .766.766 0 0 1 0 1.074l-2.459 2.591c-.209.215-.497.335-.797.334-.3 0-.584-.119-.796-.333L4.72 10.075A.77.77 0 0 1 4.72 9a.746.746 0 0 1 1.062 0l1.49 1.564V3.75a.752.752 0 0 1 1.503 0z"
      />
    </g>
  </svg>
);
export default SvgArrowUpCircleFilled;
