import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBugReport = ({
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
    <path d="M304.093 67.896 404.945 188.97a319.5 319.5 0 0 1 106.995-18.302c37.436 0 73.464 6.4 106.932 18.302L719.788 67.896l65.529 54.65-88.886 106.611a320.8 320.8 0 0 1 117.234 154.798h124.85v85.302H831.263c.448 7.04.64 14.207.64 21.374v213.287c0 7.167-.192 14.27-.64 21.31H938.58v85.366H813.793a320.09 320.09 0 0 1-603.577 0H85.302v-85.366h107.38a325 325 0 0 1-.704-21.31V490.631c0-7.167.192-14.27.64-21.374H85.366v-85.302h124.85A320.86 320.86 0 0 1 327.45 229.157L238.5 122.546zM511.94 255.97a234.66 234.66 0 0 0-234.66 234.661v213.287a234.66 234.66 0 0 0 469.257 0V490.631a234.66 234.66 0 0 0-234.597-234.66M383.955 426.638h255.97v85.302h-255.97zm0 255.97h255.97v85.303h-255.97z" />
  </svg>
);
export default SvgBugReport;
