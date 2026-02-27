import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudUpload = ({
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
    <path d="M196.896 268.11a320.058 320.058 0 0 1 631.541 0 277.435 277.435 0 0 1 44.992 512.31l-38.016 19.392-38.847-75.967 38.015-19.391a191.997 191.997 0 0 0-52.735-359.994l-32.895-6.016-2.112-33.28a234.684 234.684 0 0 0-468.344 0l-2.112 33.28-32.895 6.016a192.06 192.06 0 0 0-52.735 359.994l38.015 19.391-38.847 75.967-38.016-19.392a277.307 277.307 0 0 1 44.991-512.31m315.77 140.86 231.037 231.037-60.351 60.35L555.354 572.36v408.953H469.98V572.36L341.982 700.358l-60.287-60.351z" />
  </svg>
);
export default SvgCloudUpload;
