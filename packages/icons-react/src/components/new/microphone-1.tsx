import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrophone1 = ({
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
    <path d="M298.688 256a213.312 213.312 0 0 1 426.688 0v213.312a213.312 213.312 0 0 1-426.688 0zM512 128a128 128 0 0 0-128 128v213.312a128 128 0 0 0 256 0V256a128 128 0 0 0-128-128M256 426.688v42.624a256 256 0 0 0 512 0v-42.624h85.376v42.624a341.376 341.376 0 0 1-298.688 338.752v45.248H768v85.376H256v-85.376h213.376v-45.248a341.376 341.376 0 0 1-298.688-338.752v-42.624z" />
  </svg>
);
export default SvgMicrophone1;
