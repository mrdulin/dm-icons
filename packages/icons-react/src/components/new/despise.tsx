import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDespise = ({
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
    <path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0M256 384h170.688v85.312H384v85.376h-85.312v-85.376H256zm341.376 0H768v85.312h-42.624v85.376H640v-85.376h-42.624zm-270.08 277.312a213.248 213.248 0 0 1 369.472 0l21.376 36.928-73.856 42.752L622.912 704a127.936 127.936 0 0 0-221.824 0l-21.312 36.992-73.856-42.752 21.312-36.928z" />
  </svg>
);
export default SvgDespise;
