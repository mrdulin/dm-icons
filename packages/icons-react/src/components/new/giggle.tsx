import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGiggle = ({
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
    <path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0M740.8 378.88l-77.696 43.776 79.36 59.52-51.2 68.224L554.624 448v-62.272l144.256-81.152 41.856 74.368zM384 341.376V512h-85.312V341.312H384zm-85.312 213.312h426.688v42.624a213.312 213.312 0 0 1-426.688 0zM391.296 640a128 128 0 0 0 241.472 0z" />
  </svg>
);
export default SvgGiggle;
