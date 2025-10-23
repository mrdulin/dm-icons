import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnorderedListSquareOutlined = ({
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
    <path
      fill="currentColor"
      d="M1.75 3.501h-.583V2.332h1.169v1.169H1.75m0 4.084h-.583V6.416h1.169v1.169H1.75m-.583 4.083h1.169v-1.169H1.167v1.169m3.5-9.336h-.584V3.5h8.75V2.332H4.667m-.584 4.084h8.75v1.166h-8.75zm.584 4.083h-.584v1.167h8.75v-1.167H4.667"
    />
  </svg>
);
export default SvgUnorderedListSquareOutlined;
