import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCompass = ({
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
    <path d="M896 512a384 384 0 1 0-768 0 384 384 0 0 0 768 0M512 42.688a469.312 469.312 0 1 1 0 938.624 469.312 469.312 0 0 1 0-938.624m231.872 237.44-112.64 351.168-351.104 112.64 112.64-351.168 351.168-112.64zm-283.264 180.48-48.576 151.36 151.36-48.576 48.576-151.36z" />
  </svg>
);
export default SvgCompass;
