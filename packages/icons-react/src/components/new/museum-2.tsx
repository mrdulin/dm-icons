import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMuseum2 = ({
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
    <path d="m256 76.736 170.624 113.792v271.104l512-85.312v562.368h-256V768h-85.312v170.688h-512v-748.16zM170.624 236.16v617.152H512V682.688h256v170.624h85.312v-376.32l-512 85.376V236.16L256 179.264l-85.376 56.96z" />
  </svg>
);
export default SvgMuseum2;
