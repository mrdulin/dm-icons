import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoCameraDollarFilled = ({
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
    <path d="M725.312 170.688H0v682.624h725.312v-182.4L1024 841.472v-660.8l-298.688 179.2zm-320 170.624h85.376v85.376H320v42.624h85.312c47.168 0 85.376 38.208 85.376 85.376v42.624c0 47.168-38.208 85.376-85.376 85.376v42.624H320v-42.624h-85.312v-85.376h170.624v-42.624H320a85.31 85.31 0 0 1-85.312-85.376v-42.624c0-47.168 38.208-85.376 85.312-85.376v-42.624h85.312z" />
  </svg>
);
export default SvgVideoCameraDollarFilled;
