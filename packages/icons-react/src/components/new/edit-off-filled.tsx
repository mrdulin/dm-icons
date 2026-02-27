import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEditOffFilled = ({
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
    <path d="M671.872 125.76c33.344-33.344 87.36-33.344 120.704 0l105.6 105.6c33.28 33.28 33.28 87.36 0 120.64l-194.24 194.24-60.352-60.288 63.808-63.872-105.6-105.6-63.808 63.872L477.632 320zm-501.248-15.424 743.04 743.04-60.352 60.288-258.368-258.368-204.224 204.16-272.192 45.952 45.888-272.256 204.224-204.16-258.304-258.304zm258.368 379.008-184.96 184.96-21.44 126.976 127.04-21.44 184.96-184.96-105.6-105.6z" />
  </svg>
);
export default SvgEditOffFilled;
