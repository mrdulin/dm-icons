import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArchway = ({
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
    <path d="M256 85.312V128h512V85.312h85.312V128H896v85.312h-33.28l25.6 128h50.304v85.376H896v426.688h42.624v85.312H85.312v-85.312H128V426.688H85.312v-85.312h50.368l25.6-128H128V128h42.624V85.312zm-7.68 128-25.6 128h578.56l-25.6-128zm562.304 213.376h-128v426.688h128zM597.312 853.376V426.688H426.624v426.688zm-256 0V426.688h-128v426.688z" />
  </svg>
);
export default SvgArchway;
