import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssignmentUser = ({
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
    <path d="M512 106.688a64 64 0 0 0-58.688 38.4l-11.136 25.6H192v682.624h640V170.688H581.888l-11.2-25.6a64 64 0 0 0-58.688-38.4M389.44 85.312a149.12 149.12 0 0 1 122.56-64 149.12 149.12 0 0 1 122.56 64h282.816v853.376H106.688V85.312zm122.56 256a64 64 0 1 0 0 128 64 64 0 0 0 0-128m-149.312 64a149.312 149.312 0 1 1 298.688 0 149.312 149.312 0 0 1-298.688 0M256 768a170.69 170.69 0 0 1 170.688-170.688h170.688A170.69 170.69 0 0 1 768 768v42.688h-85.312V768c0-47.104-38.208-85.312-85.312-85.312H426.688c-47.104 0-85.312 38.208-85.312 85.312v42.688H256z" />
  </svg>
);
export default SvgAssignmentUser;
