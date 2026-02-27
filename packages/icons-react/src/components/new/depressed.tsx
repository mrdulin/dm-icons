import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDepressed = ({
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
    <path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0m393.92-91.072-147.84 85.376-42.624-73.92 147.84-85.312zm193.536-73.856 147.84 85.312-42.688 73.92-147.84-85.376zm-302.912 314.24a213.248 213.248 0 0 1 369.536 0l21.376 36.928-73.856 42.752L622.912 704a127.936 127.936 0 0 0-221.824 0l-21.312 36.992-73.856-42.752z" />
  </svg>
);
export default SvgDepressed;
