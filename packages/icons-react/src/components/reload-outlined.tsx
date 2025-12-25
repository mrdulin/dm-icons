import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReloadOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15 0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.797a5.93 5.93 0 0 0-4.843-2.478c-3.247 0-5.879 2.564-5.879 5.728s2.632 5.728 5.88 5.728c.572 0 1.037.453 1.037 1.011S8.527 16 7.954 16C3.561 16 0 12.53 0 8.25S3.561.5 7.954.5a8.04 8.04 0 0 1 6.047 2.713L14 1a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgReloadOutlined;
