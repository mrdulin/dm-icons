import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDashboardFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1066 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M554.753 128a384 384 0 0 0-192 716.608l36.928 21.376-42.688 73.856-36.928-21.312A469.312 469.312 0 1 1 701.889 66.24L742.4 79.552l-26.752 81.024-40.512-13.312a383.6 383.6 0 0 0-120.32-19.2zm383.232 60.352-236.48 236.416a170.688 170.688 0 1 1-60.544-60.16L877.633 128zm49.28 136 13.312 40.512c15.296 46.336 23.552 95.808 23.552 147.2a469.12 469.12 0 0 1-234.496 406.4l-36.928 21.376-42.752-73.856 36.928-21.376A383.81 383.81 0 0 0 938.753 512c0-42.112-6.72-82.56-19.2-120.384l-13.44-40.512 81.088-26.752z" />
  </svg>
);
export default SvgDashboardFilled;
