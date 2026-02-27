import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderSharedFilled = ({
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
    <path d="M404.48 106.688H42.752V896H981.44V213.312H489.92l-85.376-106.624zm214.208 384c0 31.552-13.696 59.904-35.52 79.488a170.69 170.69 0 0 1 99.52 155.136V768H341.376v-42.688c0-68.864 40.768-128.192 99.52-155.136a106.688 106.688 0 1 1 177.792-79.488" />
  </svg>
);
export default SvgFolderSharedFilled;
