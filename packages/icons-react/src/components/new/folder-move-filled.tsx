import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderMoveFilled = ({
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
    <path d="M404.48 106.688H42.752V896H981.44V213.312H489.92l-85.376-106.624zm135.68 405.248-62.72-65.216 61.632-59.008 160 166.976-160 167.04-61.632-59.072 62.592-65.28H341.376v-85.44h198.72z" />
  </svg>
);
export default SvgFolderMoveFilled;
