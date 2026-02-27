import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoAndroid = ({
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
    <path d="m186.56 155.136 90.24 157.952C347.264 276.608 427.264 256 512 256s164.736 20.608 235.2 57.088l90.24-157.952 74.112 42.304-92.096 161.152A511.3 511.3 0 0 1 1024 768v85.312H0V768a511.3 511.3 0 0 1 204.544-409.408L112.448 197.44zM512 341.376A426.304 426.304 0 0 0 85.312 768h853.376A426.304 426.304 0 0 0 512 341.248zM256 554.624h85.504v85.504H256v-85.44zm426.688 0h85.504v85.504h-85.504v-85.44z" />
  </svg>
);
export default SvgLogoAndroid;
