import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBellFilled = ({
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
    <path d="M5.4 14.2 4.73 16H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3.925l-1.8 1.647V3A1.2 1.2 0 0 0 9 1.8H3A1.2 1.2 0 0 0 1.8 3v10A1.2 1.2 0 0 0 3 14.2zm10.34-3.922a.997.997 0 0 1-.104 1.441l-4.141 3.465a1.1 1.1 0 0 1-.443.223l-2.53.582a.44.44 0 0 1-.418-.13.4.4 0 0 1-.075-.418l.95-2.334c.063-.15.164-.285.292-.39l4.133-3.466a1.09 1.09 0 0 1 1.498.1z" />
  </svg>
);
export default SvgBellFilled;
