import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShop1Filled = ({
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
    <path d="M938.624 85.312H85.312v128A170.688 170.688 0 0 0 384 326.208 170.24 170.24 0 0 0 512 384a170.24 170.24 0 0 0 128-57.792 170.688 170.688 0 0 0 298.688-112.896v-128zM85.312 938.688V404.16A255.04 255.04 0 0 0 256 469.376c46.592 0 90.304-12.544 128-34.304 37.632 21.76 81.344 34.304 128 34.304 46.592 0 90.304-12.544 128-34.304 37.632 21.76 81.344 34.304 128 34.304a255.04 255.04 0 0 0 170.624-65.216v534.528H704V597.376H320v341.312zm320-256v256h213.312v-256z" />
  </svg>
);
export default SvgShop1Filled;
