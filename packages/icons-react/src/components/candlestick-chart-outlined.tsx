import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCandlestickChartOutlined = ({
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
    <path d="M1.71 1c.36 0 .66.27.703.62l.005.09v11.695c0 .081.056.15.13.17l.048.007H14.29a.71.71 0 0 1 .089 1.412l-.09.006H2.597a1.596 1.596 0 0 1-1.59-1.465L1 13.405V1.709A.71.71 0 0 1 1.71 1m7.165 3.54c.138 0 .25.089.25.199v1.79h.75c.138 0 .25.088.25.198V9.91c0 .11-.112.199-.25.199h-.75v1.193c0 .11-.112.199-.25.199s-.25-.089-.25-.199v-1.193h-.75c-.138 0-.25-.09-.25-.199V6.727c0-.11.112-.199.25-.199h.75v-1.79c0-.11.112-.198.25-.198m4-1.79c.138 0 .25.089.25.199v1.989h.75c.138 0 .25.089.25.198V9.71c0 .11-.112.2-.25.2h-.75v.993c0 .11-.112.2-.25.2s-.25-.09-.25-.2V9.91h-.75c-.138 0-.25-.089-.25-.199V5.136c0-.11.112-.199.25-.199h.75V2.95c0-.11.112-.199.25-.199m-8 0c.138 0 .25.089.25.199v.596h.75c.138 0 .25.09.25.2v4.772c0 .11-.112.199-.25.199h-.75v1.59c0 .11-.112.2-.25.2s-.25-.09-.25-.2v-1.59h-.75c-.138 0-.25-.09-.25-.199V3.744c0-.11.112-.199.25-.199h.75V2.95c0-.11.112-.199.25-.199" />
  </svg>
);
export default SvgCandlestickChartOutlined;
