import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileAttachment = ({
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
    <path d="M128 42.688h529.664L896 280.96V512h-85.312V384h-256V128H213.312v768h341.376v85.312H128zm512 103.04v152.96h152.96zm0 515.584a106.688 106.688 0 1 1 213.312 0v192H768v-192a21.312 21.312 0 1 0-42.688 0v192a85.312 85.312 0 0 0 170.688 0v-192h85.312v192a170.688 170.688 0 0 1-341.312 0z" />
  </svg>
);
export default SvgFileAttachment;
