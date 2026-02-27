import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShopFilled = ({
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
    <path d="M512 42.688a192 192 0 0 0-192 192v64H128v682.624h768V298.688H704v-64a192 192 0 0 0-192-192m106.688 192v64H405.312v-64a106.688 106.688 0 0 1 213.376 0M320 512V384h85.312v128zm298.688 0V384H704v128z" />
  </svg>
);
export default SvgShopFilled;
