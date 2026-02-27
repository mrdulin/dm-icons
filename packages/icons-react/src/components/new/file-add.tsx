import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileAdd = ({
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
    <path d="M128 42.688h529.664L896 280.96V512h-85.312V384h-256V128H213.312v768H512v85.248H128zm512 103.04v152.96h152.96zm213.312 451.584V768H1024v85.312H853.312V1024H768V853.312H597.312V768H768V597.312z" />
  </svg>
);
export default SvgFileAdd;
