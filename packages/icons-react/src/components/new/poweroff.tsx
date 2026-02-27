import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPoweroff = ({
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
    <path d="M554.688 85.312V512h-85.312V85.312zm161.28 73.728 34.56 25.152a405.312 405.312 0 1 1-476.928 0l34.432-25.152 50.24 68.992-34.432 25.088a320 320 0 1 0 376.448 0l-34.56-25.088z" />
  </svg>
);
export default SvgPoweroff;
