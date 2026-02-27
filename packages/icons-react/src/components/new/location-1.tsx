import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocation1 = ({
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
    <path d="M512 128a128 128 0 1 0 0 256 128 128 0 0 0 0-256M298.624 256a213.312 213.312 0 1 1 256 209.088v260.224h-85.312V465.088A213.376 213.376 0 0 1 298.624 256M132.48 469.312h208.832v85.376h-132.48L175.68 853.312h672.64l-33.216-298.624h-132.48v-85.376H891.52l52.16 469.376H80.32z" />
  </svg>
);
export default SvgLocation1;
