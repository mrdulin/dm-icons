import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendarEditFilled = ({
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
    <path d="M682.624 170.688H341.312v-128H256v128H85.312V384h853.312V170.688H768v-128h-85.376zm256 384v-85.376H85.312v469.376H512V896a341.31 341.31 0 0 1 341.312-341.312zm60.416 222.4L822.848 600.96l-225.6 225.6v176.128h176.128l225.536-225.6zm-265.152 33.6 55.424 55.424-51.2 51.2h-55.424v-55.424z" />
  </svg>
);
export default SvgCalendarEditFilled;
