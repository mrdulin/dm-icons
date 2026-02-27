import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPinFilled = ({
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
    <path d="m771.2 41.856 211.2 211.2-271.552 331.648 90.496 90.496-226.368 226.368L378.88 705.472 92.288 992.064l-60.352-60.288L318.528 645.12 122.432 449.024 348.8 222.72l90.496 90.496 331.968-271.36z" />
  </svg>
);
export default SvgPinFilled;
