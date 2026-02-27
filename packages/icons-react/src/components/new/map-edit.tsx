import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapEdit = ({
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
    <path d="M384 78.592 643.2 229.76l295.424-123.072v362.624h-85.312V234.624l-170.688 71.168v248.832h-85.312v-252.8l-170.688-99.52v519.872l79.68 46.464-42.944 73.728-82.56-48.192L85.312 917.312V252.8zm-42.688 639.616V202.304l-170.688 99.52v487.488l170.688-71.04zm502.912-202.56 176.128 176.128-310.912 310.848H533.376l-.064-176.064zm-39.36 160 55.424 55.424 39.36-39.296-55.424-55.424zm-4.928 115.84L744.512 736 618.624 861.888v55.424h55.488l125.824-125.888z" />
  </svg>
);
export default SvgMapEdit;
