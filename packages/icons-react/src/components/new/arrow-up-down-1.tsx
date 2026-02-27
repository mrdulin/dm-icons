import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpDown1 = ({
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
    <path d="M704 871.04 494.336 661.312l60.288-60.288 106.688 106.624V192h85.312v515.648l106.688-106.624 60.352 60.288zM277.312 832V316.352L170.624 422.976l-60.288-60.288L320 152.96l209.664 209.664-60.352 60.288-106.688-106.624V832z" />
  </svg>
);
export default SvgArrowUpDown1;
