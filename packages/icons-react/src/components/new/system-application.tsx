import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemApplication = ({
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
    <path d="M938.624 554.688v384H85.312v-384zM853.312 640H170.624v213.312h682.688zm85.312-554.688v384H85.312v-384zm-85.312 85.376H170.624V384h682.688zM320.192 704v85.504H234.56V704h85.504zm0-469.312v85.504H234.56v-85.504h85.504zm170.624 85.504v-85.504h-85.504v85.504zm0 469.312V704h-85.504v85.504z" />
  </svg>
);
export default SvgSystemApplication;
