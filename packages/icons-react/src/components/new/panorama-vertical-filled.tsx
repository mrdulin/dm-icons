import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPanoramaVerticalFilled = ({
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
    <path d="M134.656 42.688h754.688L872.832 97.6v.064l-.128.384-.448 1.664-1.92 6.72a1803 1803 0 0 0-28.48 120.64C826.112 305.536 810.624 409.216 810.624 512s15.488 206.464 31.168 284.992a1802 1802 0 0 0 28.48 120.576l1.92 6.784.512 1.6.128.384v.064l16.512 54.912H134.656l16.448-54.912.128-.448.512-1.6 1.92-6.784a1801 1801 0 0 0 28.48-120.64c15.68-78.464 31.168-182.144 31.168-284.928s-15.488-206.464-31.168-284.992a1802 1802 0 0 0-30.4-127.36l-.512-1.6-.128-.384V97.6z" />
  </svg>
);
export default SvgPanoramaVerticalFilled;
