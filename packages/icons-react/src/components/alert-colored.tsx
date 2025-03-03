import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlertColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <path
        fill="#F0BB0E"
        d="M8.672 2.826V1H7.328v1.826zm-.6.913C5.473 3.74 3.367 5.647 3.367 8l-.117 5.75-1.54.033c-.37 0-.672.272-.672.608s.301.609.672.609h12.424c.37 0 .672-.273.672-.609s-.301-.608-.672-.608l-1.384-.033.027-5.75c0-1.13-.496-2.214-1.378-3.013s-2.08-1.248-3.327-1.248m4.355.913 1.623-1.47.95.861-1.623 1.47zm-2.653 1.7a.61.61 0 0 1 0 .861L8.378 8.609h.965a.609.609 0 0 1 .43 1.039L7.34 12.083a.609.609 0 0 1-.86-.861l1.395-1.396H6.91a.609.609 0 0 1-.43-1.039l2.434-2.435a.61.61 0 0 1 .86 0M1.95 3.182l1.623 1.47-.95.86L1 4.044l.95-.86z"
      />
    </g>
  </svg>
);
export default SvgAlertColored;
