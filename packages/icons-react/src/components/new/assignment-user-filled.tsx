import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssignmentUserFilled = ({
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
    <path d="M512 21.312a149.12 149.12 0 0 0-122.56 64H106.688v853.376h810.688V85.312H634.56a149.12 149.12 0 0 0-122.56-64m-128 384a128 128 0 1 1 256 0 128 128 0 0 1-256 0M256 768a170.69 170.69 0 0 1 170.688-170.688h170.688A170.69 170.69 0 0 1 768 768v42.688H256z" />
  </svg>
);
export default SvgAssignmentUserFilled;
