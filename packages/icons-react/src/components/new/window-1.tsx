import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWindow1 = ({
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
    <path d="m469.312 26.112 469.312 156.48v756.032H85.312V128h384zm0 187.2H170.624v640h462.4L469.312 798.72zm384 623.488V585.408l-298.688-99.584v251.392zm0-341.312V244.096l-298.688-99.584v251.392z" />
  </svg>
);
export default SvgWindow1;
