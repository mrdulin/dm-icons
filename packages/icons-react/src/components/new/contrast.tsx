import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgContrast = ({
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
    <path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0m426.688-320H512a320 320 0 0 1 0 640h-42.624zm85.312 89.216v461.568a234.752 234.752 0 0 0 0-461.568" />
  </svg>
);
export default SvgContrast;
