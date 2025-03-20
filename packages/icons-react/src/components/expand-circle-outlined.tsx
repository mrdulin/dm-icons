import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExpandCircleOutlined = ({
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
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 .8a7.2 7.2 0 1 0 0 14.4A7.2 7.2 0 0 0 8 .8M3.457 11.883l.65-4.913c.104-.45.516-.583.86-.24l4.342 4.338c.343.343.211.755-.24.859l-4.956.623c-.343.092-.803-.11-.656-.667m9.086-7.766-.65 4.913c-.104.45-.516.583-.86.24L6.691 4.932c-.343-.343-.211-.755.24-.859l4.956-.623c.343-.092.803.11.656.667" />
  </svg>
);
export default SvgExpandCircleOutlined;
