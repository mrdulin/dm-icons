import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotificationCircleFilled = ({
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
    <path d="M981.376 512a469.312 469.312 0 1 1-938.688 0 469.312 469.312 0 0 1 938.688 0m-704 192h144.128a96 96 0 0 0 181.056 0h144.128v-69.056L704 549.632V448a192 192 0 1 0-384 0v101.632l-42.624 85.312z" />
  </svg>
);
export default SvgNotificationCircleFilled;
