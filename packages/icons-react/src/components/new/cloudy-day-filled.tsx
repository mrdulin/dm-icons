import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudyDayFilled = ({
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
    <path d="M401.728 256.192a213.376 213.376 0 0 1 391.232-.128A192 192 0 0 1 981.376 448c0 51.84-26.368 99.392-59.2 132.8a211.6 211.6 0 0 1-72.128 48.64 230.7 230.7 0 0 1 3.328 39.04c0 124.8-99.52 227.52-224 227.52H230.4c-104.448 0-187.712-86.08-187.712-190.592 0-76.352 44.352-142.72 109.056-173.056a273 273 0 0 1-.256-11.84c0-141.888 110.4-258.944 250.24-264.32m10.048 85.12c-95.872 0-174.976 79.488-174.976 179.2 0 11.392 1.024 22.4 3.008 33.088l7.232 39.936-39.488 9.28A104.704 104.704 0 0 0 128 705.408c0 58.88 46.656 105.28 102.4 105.28h398.976c75.776 0 138.624-62.912 138.624-142.272 0-19.584-3.84-38.08-10.688-54.912a138.75 138.75 0 0 0-130.24-87.232l-36.864.576-5.952-36.352c-13.12-79.872-77.632-141.056-156.416-148.416a173 173 0 0 0-16.064-.768" />
  </svg>
);
export default SvgCloudyDayFilled;
