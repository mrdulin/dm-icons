import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPerpetualSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 17 17"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M9.11 6.458c.21.56.462 1.1.748 1.606 1.012-.572 1.903-1.386 2.65-2.42l.606.506c-.836 1.1-1.793 1.936-2.893 2.508.836 1.309 1.947 2.409 3.311 3.3l-.561.649q-2.54-1.881-3.86-4.62v4.598c0 .615-.364.935-1.068.935h-1.44l-.21-.77 1.42.033c.33 0 .494-.155.494-.451V6.348H5.019v-.76H9.11z"
    />
    <path
      fill="currentColor"
      d="M7.493 8.35c-.605 1.88-1.804 3.31-3.586 4.278l-.472-.626c1.561-.825 2.65-2.002 3.255-3.52H3.698v-.748h3.795zM7.383 3.377c1.034.264 2.013.661 2.948 1.178l-.286.715a13.8 13.8 0 0 0-2.98-1.254z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M14.5 15.334v1h-12v-1zm1-1v-12a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1"
    />
  </svg>
);
export default SvgPerpetualSquareOutlined;
