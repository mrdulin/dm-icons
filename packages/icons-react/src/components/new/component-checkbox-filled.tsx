import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentCheckboxFilled = ({
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
    <path d="M640 85.312H85.312V640H320v-85.312H170.624v-384h384V320H640zM938.624 384H384v554.688h554.624zM576 600.96l64 64 128-128 60.352 60.416L640 785.664 515.648 661.376z" />
  </svg>
);
export default SvgComponentCheckboxFilled;
