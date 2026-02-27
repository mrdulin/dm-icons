import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobileList = ({
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
    <path d="M170.688 42.688h682.688V256H768V128H256v768h512V682.688h85.376v298.624H170.688zm384 298.624H1024v85.376H554.688zm0 170.688H896v85.312H554.688zm-85.312 213.312h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgMobileList;
