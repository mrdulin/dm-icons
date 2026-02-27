import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStreetRoad = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312V85.376zm85.312 85.376v682.624h682.688v-682.56H170.624zm613.248 99.968L284.032 570.56l-43.904-73.152 90.048-54.08-89.6-161.28L315.2 240.64l88.192 158.72 336.576-201.92zm0 256-90.112 54.016 89.6 161.28-74.624 41.408-88.192-158.72-336.512 201.92-43.904-73.152 499.84-299.968z" />
  </svg>
);
export default SvgStreetRoad;
