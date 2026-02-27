import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileAttachmentFilled = ({
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
    <path d="M554.55 42.55H129.236v935.605h436.16c-7.017-19.968-10.844-41.402-10.844-63.794V659.184a191.382 191.382 0 0 1 340.214-120.251V382.765H554.55zm340.215 255.177v-17.67L657.195 42.55h-17.607v255.176zM745.933 552.904c-58.69 0-106.345 47.59-106.345 106.28v191.383a170.139 170.139 0 1 0 340.214 0V659.184h-85.037v191.383a85.038 85.038 0 1 1-170.14 0V659.184a21.243 21.243 0 0 1 42.551 0v191.383h85.038V659.184c0-58.69-47.59-106.28-106.281-106.28" />
  </svg>
);
export default SvgFileAttachmentFilled;
