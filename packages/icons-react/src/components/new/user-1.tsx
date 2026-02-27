import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUser1 = ({
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
    <path d="M512 170.688a128 128 0 1 0 0 256 128 128 0 0 0 0-256m-213.376 128a213.312 213.312 0 1 1 426.688 0 213.312 213.312 0 0 1-426.688 0m-149.312 512a213.31 213.31 0 0 1 213.312-213.376h298.688a213.31 213.31 0 0 1 213.312 213.376V896h-85.312v-85.312a128 128 0 0 0-128-128H362.624a128 128 0 0 0-128 128V896h-85.312z" />
  </svg>
);
export default SvgUser1;
