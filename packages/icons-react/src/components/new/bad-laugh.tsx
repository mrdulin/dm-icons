import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBadLaugh = ({
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
    <path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0m246.144-164.928 147.84 85.312-42.688 73.92-147.84-85.376zm489.152 73.856-147.84 85.376-42.688-73.92 147.84-85.312zm-479.296 133.76h426.688v42.624a213.312 213.312 0 0 1-426.688 0zM391.296 640a128 128 0 0 0 241.472 0z" />
  </svg>
);
export default SvgBadLaugh;
