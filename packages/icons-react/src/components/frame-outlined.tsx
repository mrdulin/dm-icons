import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFrameOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillOpacity={0.8}
      d="M1.167 1.167h11.666v11.666H1.167zm1.166 1.166v4.084h4.084V2.333zm5.25 0v4.084h4.084V2.333zm4.084 5.25H7.583v4.084h4.084zm-5.25 4.084V7.583H2.333v4.084z"
    />
  </svg>
);
export default SvgFrameOutlined;
