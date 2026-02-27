import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemLogFilled = ({
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
    <path d="M42.688 42.688V320h938.688V42.688zm170.688 95.872h85.504v85.504h-85.504zM42.688 405.504v575.808h938.688V405.504zM256 565.44h512v85.312H256zM256 736h256v85.376H256z" />
  </svg>
);
export default SvgSystemLogFilled;
