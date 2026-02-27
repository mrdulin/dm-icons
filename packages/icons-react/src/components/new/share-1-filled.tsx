import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShare1Filled = ({
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
    <path d="M490.688 78.976 1004.928 512l-514.24 433.024v-265.6c-178.944 8.512-301.76 72.512-391.936 198.72l-76.544-33.152c22.336-111.68 67.456-225.92 148.352-318.4 75.2-85.952 179.648-151.168 320.128-178.624z" />
  </svg>
);
export default SvgShare1Filled;
