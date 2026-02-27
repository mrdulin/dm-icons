import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrendingUp = ({
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
    <path d="m88.96 704 273.728-273.664L533.312 600.96 750.336 384H576v-85.312h320v320h-85.312V444.352L533.312 721.664 362.688 551.04 149.312 764.416 89.024 704z" />
  </svg>
);
export default SvgTrendingUp;
