import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobileListFilled = ({
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
    <path d="M170.688 42.688h682.688v170.624H768V128H256v597.312h512V640h85.376v341.312H170.688zm384.192 768h-85.504v85.504h85.504zm469.12-512H554.688V384H1024zM896 469.312H554.688v85.376H896z" />
  </svg>
);
export default SvgMobileListFilled;
