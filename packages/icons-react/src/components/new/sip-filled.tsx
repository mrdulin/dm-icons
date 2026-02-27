import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSipFilled = ({
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
    <path d="M706.432 527.168 499.84 320.64 88.32 732.16v206.592h206.72l411.392-411.52zm180.16-180.16A146.112 146.112 0 1 0 680 140.416l-74.56 74.56-54.912-54.848-60.288 60.352 316.288 316.288 60.352-60.352-54.848-54.848z" />
  </svg>
);
export default SvgSipFilled;
