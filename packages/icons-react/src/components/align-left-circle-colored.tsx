import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignLeftCircleColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={12} cy={12} r={12} fill="#37465c" />
    <path
      fill="#8aaee6"
      d="M7.714 6H12a.857.857 0 0 1 0 1.714H7.714a.857.857 0 1 1 0-1.714m0 3.429h8.572a.857.857 0 0 1 0 1.714H7.714a.857.857 0 1 1 0-1.714m0 3.428h6.857a.857.857 0 1 1 0 1.714H7.714a.857.857 0 0 1 0-1.714m0 3.429h8.572a.857.857 0 1 1 0 1.714H7.714a.857.857 0 1 1 0-1.714"
    />
  </svg>
);
export default SvgAlignLeftCircleColored;
