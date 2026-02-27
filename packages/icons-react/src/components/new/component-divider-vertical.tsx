import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentDividerVertical = ({
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
    <path d="M213.312 85.312h597.312V384H213.312zm85.312 85.376v128h426.688v-128zM85.312 469.376h853.312v85.312H85.312zm128 170.624h597.312v298.688H213.312zm85.312 85.376v128h426.688v-128z" />
  </svg>
);
export default SvgComponentDividerVertical;
