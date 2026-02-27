import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEducation = ({
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
    <path d="m512 34.432 504.96 328.256-78.272 50.88v269.12h-85.312V469.056l-42.688 27.712v249.92c0 62.72-43.264 111.616-96.128 142.464-53.952 31.424-125.632 49.536-202.56 49.536-76.864 0-148.544-18.112-202.496-49.536-52.864-30.848-96.128-79.744-96.128-142.464v-249.92L7.04 362.688zm-213.312 517.76v194.496c0 19.776 14.08 45.504 53.76 68.736 38.784 22.592 95.104 37.952 159.552 37.952 64.512 0 120.832-15.36 159.552-37.952 39.744-23.232 53.76-48.96 53.76-68.736V552.256L512 690.88 298.688 552.32zm561.728-189.504L512 136.256 163.648 362.688 512 589.12z" />
  </svg>
);
export default SvgEducation;
