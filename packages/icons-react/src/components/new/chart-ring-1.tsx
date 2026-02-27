import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartRing1 = ({
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
    <path d="m476.8 127.296-41.792 8.576a384 384 0 1 0 455.168 443.584l7.552-41.984 83.968 14.976-7.488 42.048a469.504 469.504 0 0 1-921.92 11.712A469.31 469.31 0 0 1 417.856 52.224l41.792-8.512zm91.136-83.328 41.728 8.896A469.44 469.44 0 0 1 971.84 417.856l8.576 41.792-83.648 17.152-8.512-41.792A384.13 384.13 0 0 0 591.872 136.32l-41.728-8.896zm111.36 433.792a170.688 170.688 0 1 0-334.4 68.48 170.688 170.688 0 0 0 334.4-68.48m-218.56-216.512a256 256 0 1 1 102.72 501.568 256 256 0 0 1-102.72-501.568" />
  </svg>
);
export default SvgChartRing1;
