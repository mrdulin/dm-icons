import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartRing1Filled = ({
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
    <path d="M135.872 589.12a384 384 0 0 1 299.136-453.248l41.792-8.576-17.152-83.584-41.728 8.512a469.312 469.312 0 1 0 556.352 542.272l7.488-42.048-83.968-14.976-7.552 41.984a384.128 384.128 0 0 1-754.304 9.6zM609.664 52.864l-41.728-8.96-17.792 83.52 41.728 8.896a384.13 384.13 0 0 1 296.32 298.688l8.576 41.792 83.648-17.152-8.576-41.792A469.44 469.44 0 0 0 609.6 52.864zM512 725.376a213.312 213.312 0 1 0 0-426.688 213.312 213.312 0 0 0 0 426.688" />
  </svg>
);
export default SvgChartRing1Filled;
