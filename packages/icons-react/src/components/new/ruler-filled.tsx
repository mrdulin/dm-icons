import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRulerFilled = ({
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
    <path d="M715.968 85.312H286.656l-48 192h182.656v85.376H217.344l-26.688 106.688h182.656v85.312H169.344l-26.688 106.688h182.656v85.312H121.344l-48 192h865.28v-85.312h-414.72l192-768z" />
  </svg>
);
export default SvgRulerFilled;
