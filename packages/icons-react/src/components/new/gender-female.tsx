import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGenderFemale = ({
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
    <path d="M512 170.688a213.312 213.312 0 0 1 10.688 426.368h-21.44A213.312 213.312 0 0 1 512 170.688m42.624 508.992a298.752 298.752 0 1 0-85.312 0v45.824h-128v85.312h128v128h85.312v-128h128v-85.312h-128z" />
  </svg>
);
export default SvgGenderFemale;
