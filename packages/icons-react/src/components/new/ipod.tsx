import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIpod = ({
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
    <path d="M128 42.688h768v938.624H128zM213.312 128v426.688h85.376V384H384v170.688h85.312V213.312h85.376v341.376H640v-256h85.312v256h85.376V128zm597.376 512H213.312v256h597.376zm-384 128a85.312 85.312 0 1 1 170.624 0 85.312 85.312 0 0 1-170.624 0" />
  </svg>
);
export default SvgIpod;
