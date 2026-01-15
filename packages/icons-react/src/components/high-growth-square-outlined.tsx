import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHighGrowthSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M12.782 12.524c0 .756-.444 1.14-1.32 1.14h-1.008l-.204-.78.96.036c.492 0 .744-.192.744-.576V9.08H4.227v4.62h-.829V8.324h9.384z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.454 12.248H5.738v-2.4h4.716zM6.52 11.6h3.168v-1.104H6.519zM11.45 7.604H4.742V5.276h6.708zm-5.868-.672h5.028v-.984H5.582z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M8.246 2.624c.132.324.264.684.384 1.08h4.753v.792H2.786v-.792h4.92a7 7 0 0 0-.408-.912z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M14 15v1H2v-1zm1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1"
    />
  </svg>
);
export default SvgHighGrowthSquareOutlined;
