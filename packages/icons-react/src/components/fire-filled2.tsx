import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFireFilled2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M10.236 3.87A11.7 11.7 0 0 0 6.478.125a.653.653 0 0 0-.98.797 6.61 6.61 0 0 1-1.42 6.452s-.872-.94-.729-2.828a.653.653 0 0 0-1.136-.506A8.03 8.03 0 0 0 .058 8.494c-.48 3.615 2.08 7 5.522 7.18 3.38.177 6.174-2.677 6.174-6.223a10.95 10.95 0 0 0-1.518-5.58"
    />
  </svg>
);
export default SvgFireFilled2;
