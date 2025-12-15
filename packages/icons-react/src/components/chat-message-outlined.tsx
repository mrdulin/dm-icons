import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatMessageOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 14 14"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.875 13.244V1.167h12.25V10.5H4.011zm1.167-2.571 1.53-1.34h8.386v-7H2.042zm5.544-4.256h-1.17v-1.17h1.17zm-2.917 0H3.5v-1.17h1.169zm5.833 0H9.333v-1.17h1.17z" />
  </svg>
);
export default SvgChatMessageOutlined;
