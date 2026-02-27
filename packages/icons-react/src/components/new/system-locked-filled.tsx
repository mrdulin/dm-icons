import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemLockedFilled = ({
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
    <path d="M981.376 85.312H42.688V768h512v-85.312c0-29.824 4.672-58.56 13.44-85.44H128V170.56h768V412.8a277.9 277.9 0 0 1 85.376 36.16V85.44zM128 853.312h426.688v85.376H128zm842.752-224v32H1024v277.376H640V661.312h53.44v-32a138.688 138.688 0 0 1 277.312 0m-85.312 0a53.312 53.312 0 1 0-106.688 0v32H885.44z" />
  </svg>
);
export default SvgSystemLockedFilled;
