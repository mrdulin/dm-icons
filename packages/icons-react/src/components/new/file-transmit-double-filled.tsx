import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileTransmitDoubleFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M204.608 694.976 259.712 640l-55.04-54.976 60.224-60.416L380.544 640 264.896 755.392zM0 128h316.352l152.96 152.96V128h213.376v341.312H1024V896H0zm469.312 682.688V469.312h-256v-256h-128v597.376zM298.688 230.976V384h152.96l-152.96-152.96zm520.704 464-55.104-55.04 55.04-54.912-60.224-60.416L643.456 640l115.648 115.392zM1024 384v-17.664L785.664 128H768v256z" />
  </svg>
);
export default SvgFileTransmitDoubleFilled;
