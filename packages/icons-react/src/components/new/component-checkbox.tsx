import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentCheckbox = ({
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
    <path d="M85.312 85.312H640V320h-85.376V170.688h-384v384H320V640H85.312V85.376zM384 384h554.624v554.688H384zm85.312 85.312v384h384v-384zm359.04 128L640 785.728 515.648 661.44 576 600.96l64 64 128-128z" />
  </svg>
);
export default SvgComponentCheckbox;
