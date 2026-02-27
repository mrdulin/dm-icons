import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTableSplitFilled = ({
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
    <path d="M938.624 85.312v853.376H85.312V85.312zM170.624 256h298.688v-85.312H170.624zm384 0h298.688v-85.312H554.624zm.128 202.688h-85.504v85.504h85.504zm-256 128h-85.504v85.44h85.504v-85.376zm128 0h-85.504v85.44h85.504v-85.376zm128 0h-85.504v85.44h85.504v-85.376zm128 0h-85.504v85.44h85.504v-85.376zm128 0h-85.504v85.44h85.504v-85.376zm-256 128h-85.504v85.44h85.504z" />
  </svg>
);
export default SvgTableSplitFilled;
