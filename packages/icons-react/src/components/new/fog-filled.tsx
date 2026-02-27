import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFogFilled = ({
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
    <path d="M85.312 554.688c0-70.72 48-135.936 115.2-156.992a256 256 0 0 1 0-5.12C200.512 244.864 324.288 128 473.6 128c23.296 0 45.952 2.816 67.648 8.192 91.584 22.656 165.504 90.432 193.408 178.624 30.848 3.904 59.84 13.632 85.76 28.032 73.024 40.512 118.208 130.112 118.208 211.84zm0 85.312h256v85.312h-256zm341.312 0h512v85.312h-512zm298.688 170.688h213.312V896H725.312zM85.312 896v-85.312H640V896z" />
  </svg>
);
export default SvgFogFilled;
