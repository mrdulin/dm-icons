import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGamma = ({
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
    <path d="m267.2 62.144 280.32 543.872L789.44 71.552l77.696 35.2-274.56 606.464v225.408h-85.248v-224.32L263.808 241.92 186.88 378.176l-74.304-41.984L267.2 62.08z" />
  </svg>
);
export default SvgGamma;
