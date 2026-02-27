import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitCommit = ({
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
    <path d="M512 384a128 128 0 1 0 0 256 128 128 0 0 0 0-256m-209.024 85.312a213.376 213.376 0 0 1 418.112 0h260.288v85.376H721.088a213.44 213.44 0 0 1-418.112 0H42.688v-85.376z" />
  </svg>
);
export default SvgGitCommit;
