import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m16.444 9.5 1.043.27c.25.065.454.247.548.49l3.91 10.14c.237.614-.316 1.24-.948 1.073l-4.705-1.243-4.017 1.234a.8.8 0 0 1-.348.027l-.114-.026-4.096-1.236-4.715 1.244c-.598.157-1.125-.395-.979-.974l.033-.102 2.92-7.454c.448.799.96 1.562 1.503 2.23l-.785.323-1.571 4.015 2.83-.746.418-2.613c.48.464.97.836 1.448 1.08l-.253 1.572 2.633.793.001-2.374c.53-.274 1.072-.703 1.6-1.24v3.634l2.57-.79-.698-4.168-.981.3a16.6 16.6 0 0 0 2.07-3.498l.251 1.513 1.522.439-.842-2.184-.754-.194c.208-.521.38-1.038.506-1.535m-.137 5.236.671 4.009 2.909.768-1.625-4.212zM10 2.5a5.29 5.29 0 0 1 5.288 5.288c0 2.764-3.404 8.312-5.288 8.312s-5.288-5.548-5.288-8.312A5.29 5.29 0 0 1 10 2.5m0 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />
  </svg>
);
export default SvgMapOutlined;
