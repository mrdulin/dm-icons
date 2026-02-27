import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitMergeFilled = ({
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
    <path d="M85.312 256a149.312 149.312 0 1 1 199.104 140.8C297.6 426.944 327.68 448 362.624 448h298.688A170.69 170.69 0 0 1 832 618.688v6.144a149.376 149.376 0 1 1-85.376 0v-6.144c0-47.168-38.208-85.376-85.312-85.376H362.624c-31.04 0-60.16-8.32-85.312-22.784v114.304a149.376 149.376 0 1 1-85.312 0V399.168A149.38 149.38 0 0 1 85.312 256" />
  </svg>
);
export default SvgGitMergeFilled;
