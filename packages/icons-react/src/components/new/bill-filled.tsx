import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBillFilled = ({
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
    <path d="M85.312 85.312v85.376h85.312V942.08l147.904-118.272L416 910.4l96-85.312 96 85.312 97.408-86.592L853.312 942.08V170.688h85.312V85.312zM682.624 384H341.312v-85.312h341.312zM384 554.688v-85.376h256v85.376z" />
  </svg>
);
export default SvgBillFilled;
