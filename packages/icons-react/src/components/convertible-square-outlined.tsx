import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgConvertibleSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
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
      d="M10.469 3.144c-.077.44-.154.857-.22 1.264h2.552V5.42H10.04q-.115.528-.23 1.023h3.266v1.001h-3.52c-.121.418-.242.814-.352 1.177h3.432v.858c-.352.704-.88 1.397-1.606 2.101.396.242.77.507 1.133.77l-.583.902c-1.133-.88-2.288-1.572-3.476-2.078l.561-.825a14 14 0 0 1 1.519.748c.572-.506 1.034-1.024 1.375-1.552H7.906c.22-.67.419-1.375.616-2.1H7.224V6.442h1.551q.116-.528.23-1.023H7.544V4.408h1.661c.088-.45.165-.902.242-1.364z"
    />
    <path
      fill="currentColor"
      d="M5.387 3.198c-.088.418-.176.825-.264 1.21h1.98V5.42H4.86a21 21 0 0 1-.77 2.244h.924v-1.55h1v1.55h1.145V8.6H6.014v1.254c.495-.1.968-.21 1.408-.32v.99c-.451.11-.924.22-1.408.33v2.343H5.013v-2.144c-.638.11-1.31.22-2.002.307l-.132-1.023a48 48 0 0 0 2.134-.297V8.6h-1.76l-.22-.924c.286-.594.56-1.343.814-2.256h-.968V4.408H4.11c.1-.429.198-.88.286-1.352z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 .8A1.2 1.2 0 0 0 .8 2v12A1.2 1.2 0 0 0 2 15.2h12a1.2 1.2 0 0 0 1.2-1.2V2A1.2 1.2 0 0 0 14 .8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgConvertibleSquareOutlined;
