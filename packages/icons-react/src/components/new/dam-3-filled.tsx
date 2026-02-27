import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDam3Filled = ({
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
    <path d="M938.624 853.312H896V426.688c0-238.976-193.28-384-384-384-190.784 0-384 145.024-384 384v426.624H85.312v85.376h341.312v-85.376H384v-384h256v384h-42.688v85.376h341.312zm-213.312-384h85.312v384h-85.312zm-512 0h85.312v384h-85.312zm384-170.624H426.624v-85.376h170.688z" />
  </svg>
);
export default SvgDam3Filled;
