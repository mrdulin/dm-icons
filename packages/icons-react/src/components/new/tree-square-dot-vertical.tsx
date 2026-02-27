import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreeSquareDotVertical = ({
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
    <path d="M725.312 170.688h128v128h-128zM640 277.312V384h298.624V85.312H640V192H483.52v277.312H384V362.688H85.312v298.624H384V554.688h99.52V832H640v106.688h298.624V640H640v106.688h-71.104V277.312h71.04zm85.312 576v-128h128v128zM298.624 448v128h-128V448z" />
  </svg>
);
export default SvgTreeSquareDotVertical;
