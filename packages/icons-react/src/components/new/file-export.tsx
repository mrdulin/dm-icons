import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileExport = ({
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
    <path d="M128 42.688h529.664L896 280.96V512h-85.312V384h-256V128H213.312v768h256v85.248H128zm512 103.04v152.96h152.96zm172.8 455.36 207.296 209.664L812.8 1020.416l-60.672-59.968L857.92 853.44H554.56V768h303.36L752.128 660.992l60.672-59.968z" />
  </svg>
);
export default SvgFileExport;
