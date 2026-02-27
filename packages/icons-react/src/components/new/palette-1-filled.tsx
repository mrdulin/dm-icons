import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPalette1Filled = ({
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
    <path d="M303.424 296c0-115.84 92.928-210.688 208.64-210.688C627.712 85.312 720.64 180.16 720.64 296S627.712 506.688 512 506.688 303.424 411.84 303.424 296M42.688 728c0-115.84 92.864-210.624 208.64-210.624 115.648 0 208.576 94.784 208.576 210.624s-92.928 210.688-208.64 210.688S42.688 843.84 42.688 728m521.472 0c0-115.84 92.928-210.624 208.64-210.624 115.648 0 208.576 94.784 208.576 210.624s-92.928 210.688-208.64 210.688C657.088 938.688 564.16 843.84 564.16 728" />
  </svg>
);
export default SvgPalette1Filled;
