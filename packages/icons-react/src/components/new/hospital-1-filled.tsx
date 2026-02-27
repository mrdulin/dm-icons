import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHospital1Filled = ({
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
    <path d="M956.224 465.792 512 70.848l-326.848 291.84L67.84 465.28l56.192 64.256 46.656-40.832v449.92h192v-256h298.624v256h192V488.448l46.272 41.088 56.704-63.744zM554.624 384H640v85.312h-85.376v85.312h-85.312v-85.312H384V384h85.312v-85.312h85.312zM448 938.624V768h128v170.624z" />
  </svg>
);
export default SvgHospital1Filled;
