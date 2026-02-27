import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageFilled = ({
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
    <path d="M682.624 224a117.312 117.312 0 1 0 0 234.688 117.312 117.312 0 0 0 0-234.688m256-138.688H85.312v853.376h853.312zm-85.312 85.376v664.96L384 366.336 170.624 579.648v-408.96z" />
  </svg>
);
export default SvgImageFilled;
