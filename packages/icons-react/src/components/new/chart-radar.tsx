import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartRadar = ({
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
    <path d="m512 32.64 477.248 346.688-182.272 561.024H216.96L34.752 379.328zM151.36 462.08l111.36 342.784 180.224-248-291.584-94.72zm180.48 392.96h360.384L512 606.976 331.776 855.04zM580.992 556.8l180.224 248.064 111.36-342.784-291.52 94.72zm265.216-175.872-291.584-211.84v306.56zm-376.96-211.84-291.584 211.84 291.584 94.72z" />
  </svg>
);
export default SvgChartRadar;
