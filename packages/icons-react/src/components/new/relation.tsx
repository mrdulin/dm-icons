import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRelation = ({
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
    <path d="M436.864 69.696 512 199.872l75.2-130.176 73.856 42.688-99.776 172.8 254.08 440.128h166.016v85.376H864.64l48.128 83.328-73.92 42.688-72.768-126.08H257.92l-72.768 126.08-73.92-42.688 48.128-83.328H42.688v-85.376H208.64l254.08-440.128-99.776-172.8zM512 370.496 307.2 725.312h409.6z" />
  </svg>
);
export default SvgRelation;
