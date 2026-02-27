import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileBlocked = ({
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
    <path d="M128 42.688h529.664L896 280.96v188.288h-85.312V384h-256V128H213.312v768h256v85.312H128zm512 103.04v152.96h152.96zm128 472.96A149.312 149.312 0 0 0 636.608 839.04L839.04 636.608a148.54 148.54 0 0 0-71.04-17.92m131.392 78.272L696.96 899.392A149.312 149.312 0 0 0 899.392 696.96M533.312 768a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.376 0" />
  </svg>
);
export default SvgFileBlocked;
