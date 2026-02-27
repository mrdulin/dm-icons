import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoCameraDollar = ({
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
    <path d="M0 170.56h725.312v189.184L1024 180.544v660.864L725.312 670.784v182.464H0zm725.312 401.92L938.688 694.4V331.264l-213.376 128v113.28zM85.312 256v512H640V256zm320 42.752v42.624h85.376v85.376H320v42.624h85.312c47.168 0 85.376 38.208 85.376 85.376v42.624c0 47.168-38.208 85.376-85.376 85.376v42.624H320v-42.624h-85.312v-85.44h170.624v-42.624H320a85.31 85.31 0 0 1-85.312-85.376v-42.624c0-47.168 38.208-85.376 85.312-85.376v-42.624h85.312z" />
  </svg>
);
export default SvgVideoCameraDollar;
