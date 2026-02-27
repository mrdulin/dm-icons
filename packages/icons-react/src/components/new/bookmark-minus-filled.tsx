import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBookmarkMinusFilled = ({
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
    <path d="M576 170.688c0-14.592 1.344-28.8 3.84-42.688H170.752v850.944L512 735.104l341.376 243.84V401.472A234.688 234.688 0 0 1 576 170.688M981.376 128H640v85.312h341.376z" />
  </svg>
);
export default SvgBookmarkMinusFilled;
