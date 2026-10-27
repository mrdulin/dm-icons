import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTemplateMarketColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="#0E65E7" d="M7.5 2v4H2V2zM3 5h3.5V3H3z" />
    <path fill="#1777FF" fillOpacity={0.7} d="M2 7h5.5v7H2z" />
    <path fill="#1777FF" d="M8.5 10H14v4H8.5z" />
    <path fill="#1777FF" fillOpacity={0.3} d="M8.5 2H14v7H8.5z" />
  </svg>
);
export default SvgTemplateMarketColored;
