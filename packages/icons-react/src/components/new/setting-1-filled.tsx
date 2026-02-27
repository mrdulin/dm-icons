import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSetting1Filled = ({
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
    <path d="M632.32 42.688H391.68L364.032 180.8c-23.04 10.24-44.672 22.912-64.832 37.504L165.696 173.12 45.376 381.504l105.856 93.056a366.4 366.4 0 0 0 0 74.88L45.376 642.56l120.32 208.384L299.2 805.76c20.16 14.656 41.856 27.2 64.832 37.504l27.648 138.112h240.64l27.584-138.112c23.04-10.24 44.736-22.848 64.896-37.504l133.504 45.184 120.32-208.384-105.92-93.056a366 366 0 0 0 0-74.88l105.92-93.056-120.32-208.384L724.8 218.368a362.4 362.4 0 0 0-64.896-37.504zm-120.32 640a170.688 170.688 0 1 1 0-341.376 170.688 170.688 0 0 1 0 341.376" />
  </svg>
);
export default SvgSetting1Filled;
