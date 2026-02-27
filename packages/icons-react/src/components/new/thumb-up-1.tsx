import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbUp1 = ({
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
    <path d="m450.368 75.264 73.152 24.384a157.89 157.89 0 0 1 107.968 149.76v104.704h165.056a128 128 0 0 1 126.528 147.456l-50.56 328.576a128 128 0 0 1-126.528 108.544H128V430.912h164.288zm46.464 105.472-149.12 335.552h-134.4v337.024h532.672c21.12 0 38.976-15.36 42.176-36.16l50.56-328.512a42.688 42.688 0 0 0-42.24-49.152H546.176v-190.08c0-31.104-19.84-58.688-49.28-68.672z" />
  </svg>
);
export default SvgThumbUp1;
