import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVerifyFilled = ({
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
    <path d="M42.688 128v768h938.688V128zm170.688 256h192v85.312h-192zm0 170.688h192V640h-192zm554.624-128c0 40.64-22.784 76.032-56.32 94.08a149.38 149.38 0 0 1 99.008 140.544V704H512v-42.688c0-64.768 41.28-119.936 99.008-140.608A106.624 106.624 0 1 1 768 426.624z" />
  </svg>
);
export default SvgVerifyFilled;
