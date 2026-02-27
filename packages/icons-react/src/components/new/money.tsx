import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoney = ({
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
    <path d="M512 533.312A149.312 149.312 0 1 0 512 832a149.312 149.312 0 0 0 0-298.688m-64 149.376a64 64 0 1 1 128 0 64 64 0 0 1-128 0M747.776 218.24 612.16 28.16 113.408 426.496l-27.648-.256v.448H64v512h896v-512h-41.024l-81.664-238.912-89.536 30.528zM828.8 426.688H400.896l318.72-108.672 64.896-20.736zM663.488 247.04l-328.96 112.128 260.48-208.128zM149.312 775.168V590.08a128.38 128.38 0 0 0 78.08-78.08h569.216c12.8 36.352 41.664 65.216 78.08 78.08v185.216c-36.416 12.8-65.216 41.664-78.08 78.08H227.456a128.45 128.45 0 0 0-78.08-78.208z" />
  </svg>
);
export default SvgMoney;
