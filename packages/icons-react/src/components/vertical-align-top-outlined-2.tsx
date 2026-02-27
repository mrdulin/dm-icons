import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVerticalAlignTopOutlined2 = ({
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
    <path d="m9.007 4.44 3.271 4.181a.746.746 0 0 1 0 1.061.78.78 0 0 1-.552.22H9.288l-.527.001-.003 4.215c0 .487-.339.882-.756.882-.418 0-.757-.395-.757-.882l-.003-4.213H5.635l-.23.001H4.234a.76.76 0 0 1-.523-.224.746.746 0 0 1 0-1.06l3.288-4.183c.59-.585 1.417-.585 2.008 0M12.257 1c.41 0 .743.336.743.75 0 .38-.28.693-.643.743l-.1.007H3.743A.747.747 0 0 1 3 1.75c0-.38.28-.693.643-.743l.1-.007z" />
  </svg>
);
export default SvgVerticalAlignTopOutlined2;
