import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDam1Filled = ({
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
    <path d="M896 853.312v-422.4c0-213.76-168.96-388.224-384-388.224-215.168 0-384 174.528-384 388.224v422.4H85.312v85.376h341.312v-85.376H384v-422.4a128 128 0 0 1 256 0v422.4h-42.688v85.376h341.312v-85.376z" />
  </svg>
);
export default SvgDam1Filled;
