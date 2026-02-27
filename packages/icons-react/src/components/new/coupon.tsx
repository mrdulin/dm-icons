import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoupon = ({
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
    <path d="M170.688 896H128V48.256l66.304 44.224 102.08 68.032 82.304-65.792 26.624-21.312L432 94.72l80 64 80-64 26.688-21.312 26.624 21.312 82.304 65.92 102.08-68.096L896 48.32V896zm42.624-688.256v602.88h597.376v-602.88l-61.696 41.088-25.92 17.28-24.384-19.456-80-64-80 64L512 267.968l-26.624-21.312-80-64-80 64-24.448 19.52-25.92-17.28zm128 474.88h-42.624v-85.248h426.624v85.376h-384zm128-170.624h256v-85.312h-256zm-128-85.312h-42.624v85.504h85.504v-85.504z" />
  </svg>
);
export default SvgCoupon;
