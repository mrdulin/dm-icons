import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderDetailsFilled = ({
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
    <path d="M404.48 106.688H42.752V896H981.44V213.312H489.92l-85.376-106.624zM298.688 511.936h85.504v85.504h-85.568v-85.504zm170.624 0h85.504v85.504h-85.568v-85.504zm256.192 0v85.504h-85.568v-85.504h85.504z" />
  </svg>
);
export default SvgFolderDetailsFilled;
