import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExtension = ({
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
    <path d="M341.312 170.688a128 128 0 1 1 256 0h256v256a128 128 0 1 1 0 256v256H580.16l-5.248-36.672a106.688 106.688 0 0 0-211.2 0l-5.248 36.672H85.312V665.472l36.608-5.248a106.688 106.688 0 0 0 0-211.2l-36.608-5.12v-273.28h256zm128-42.688a42.69 42.69 0 0 0-42.688 42.688V256h-256v117.632a192 192 0 0 1 0 362.112v117.568h117.632a192 192 0 0 1 362.112 0H768v-256h85.312a42.688 42.688 0 1 0 0-85.312H768V256H512v-85.312A42.69 42.69 0 0 0 469.312 128" />
  </svg>
);
export default SvgExtension;
