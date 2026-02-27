import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserError1 = ({
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
    <path d="M362.688 170.688a128 128 0 1 0 0 256 128 128 0 0 0 0-256m-213.376 128a213.312 213.312 0 1 1 426.688 0 213.312 213.312 0 0 1-426.688 0m592.192-22.848L832 366.336l90.496-90.496 60.352 60.288-90.496 90.56 90.496 90.496-60.352 60.352L832 486.976l-90.496 90.56-60.352-60.352 90.496-90.496-90.496-90.56zM0 810.688a213.31 213.31 0 0 1 213.312-213.376H512a213.31 213.31 0 0 1 213.312 213.376V896H640v-85.312a128 128 0 0 0-128-128H213.312a128 128 0 0 0-128 128V896H0z" />
  </svg>
);
export default SvgUserError1;
