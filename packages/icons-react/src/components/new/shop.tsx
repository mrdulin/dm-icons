import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShop = ({
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
    <path d="M320 234.688a192 192 0 1 1 384 0v64h192v682.624H128V298.688h192zM320 384H213.312v512h597.376V384H704v128h-85.312V384H405.312v128H320zm298.688-85.312v-64a106.688 106.688 0 0 0-213.376 0v64z" />
  </svg>
);
export default SvgShop;
