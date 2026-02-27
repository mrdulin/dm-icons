import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileImport = ({
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
    <path d="M128 42.688h529.664L896 280.96v700.288H512V896h298.624V384h-256V128H213.312v426.688H128zm512 103.04v152.96h152.96zM300.8 601.024l207.296 209.664-207.36 209.664-60.672-59.968L345.92 853.376H42.56V768h303.36L240 661.12l60.736-59.968z" />
  </svg>
);
export default SvgFileImport;
