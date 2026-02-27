import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStore = ({
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
    <path d="M149.312 106.688h725.376V192H149.312zm-34.944 128h795.264L960 486.4V576h-64v341.312h-85.312V576H597.312v341.312H128V576H64v-89.6zM213.312 576v256H512V576zm660.48-85.312L839.68 320H184.32l-34.112 170.688z" />
  </svg>
);
export default SvgStore;
