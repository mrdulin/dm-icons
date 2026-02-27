import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIndentRight = ({
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
    <path d="M128 170.688H85.376V256h853.312v-85.312zm256 298.624h-42.624v85.376h597.312v-85.376zM85.376 768h853.312v85.312H85.376zM247.68 542.144l30.144-30.08-30.08-30.208L172.16 406.4l-30.08-30.144-60.416 60.352 30.208 30.144L157.12 512l-45.248 45.248-30.208 30.208 60.352 60.288 30.208-30.144z" />
  </svg>
);
export default SvgIndentRight;
