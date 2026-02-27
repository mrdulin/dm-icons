import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignVertical = ({
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
    <path d="M554.688 280.96V0h-85.376v281.024l-55.168-55.168L384 195.648 323.648 256l30.208 30.144 128 128L512 444.352l30.144-30.208 128-128L700.352 256 640 195.648l-30.144 30.208-55.168 55.168zM896 554.752H128v-85.44h768v85.376zm-384 24.96 30.144 30.208 128 128 30.208 30.144L640 828.416l-30.144-30.208-55.168-55.104V1024h-85.376V743.04l-55.168 55.104L384 828.352 323.648 768l30.208-30.144 128-128L512 579.648z" />
  </svg>
);
export default SvgAlignVertical;
