import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCityAncientFilled = ({
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
    <path d="m512 2.816-36.48 60.416v.128l-.256.384-1.088 1.664a961 961 0 0 1-19.52 30.72c-13.184 20.288-31.552 47.424-52.352 75.392-20.928 28.16-43.776 56.32-65.792 78.976-23.232 23.872-41.344 37.12-52.608 41.344-14.464 5.312-23.68 6.848-27.904 6.848h-42.688V384h42.752v85.312H768V384h42.624v-85.312H768c-4.224 0-13.44-1.536-27.84-6.848-11.264-4.16-29.44-17.408-52.608-41.28a806 806 0 0 1-65.728-78.976 1537 1537 0 0 1-71.936-106.176l-1.024-1.664-.256-.384-36.544-60.544zM85.312 554.688h853.312V640H896v298.688H682.624V725.312H341.312v213.376H128V640H85.312zm341.312 384v-128h170.688v128z" />
  </svg>
);
export default SvgCityAncientFilled;
