import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrightness = ({
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
    <path d="m512 3.648 148.928 148.928h210.56v210.56L1020.352 512 871.488 660.864v210.56h-210.56L512 1020.352 363.136 871.424h-210.56v-210.56L3.712 512l148.864-148.864v-210.56h210.56zm0 120.704L398.464 237.888H237.888v160.576L124.352 512l113.536 113.536v160.576h160.64L512 899.648l113.6-113.536h160.512V625.536L899.776 512 786.24 398.464v-160.64H625.6L512 124.416zm0 216.96a170.688 170.688 0 1 0 0 341.376 170.688 170.688 0 0 0 0-341.376M256 512a256 256 0 1 1 512 0 256 256 0 0 1-512 0" />
  </svg>
);
export default SvgBrightness;
