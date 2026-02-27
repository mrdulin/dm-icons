import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEducationFilled = ({
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
    <path d="M1016.96 362.688 512 34.432 7.04 362.688 512 690.88l341.376-221.888v213.632h85.312V413.568zM213.376 746.624V590.272L512 784.448l298.688-194.176v156.352c0 62.72-43.264 111.616-96.128 142.464-53.952 31.488-125.632 49.536-202.56 49.536-76.864 0-148.544-18.048-202.496-49.536-52.864-30.848-96.128-79.744-96.128-142.464" />
  </svg>
);
export default SvgEducationFilled;
