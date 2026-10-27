import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNumberTen = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M12.719 2q1.312 0 2.062.696.753.681.968 1.997.233 1.3-.025 3.137a14 14 0 0 1-.551 2.44q-.343 1.076-.915 1.838-.568.745-1.343 1.14-.777.397-1.833.397-1.312 0-2.062-.697t-.967-1.997.039-3.12q.258-1.839.81-3.138.549-1.3 1.479-1.997Q11.327 2 12.719 2m-.271 1.932q-.48 0-.815.444-.332.428-.566 1.3-.216.855-.399 2.154-.18 1.284-.207 2.155-.008.855.201 1.3a.72.72 0 0 0 .692.427q.48 0 .797-.427.33-.429.564-1.284.25-.872.433-2.17.182-1.3.175-2.155.01-.872-.202-1.3-.194-.444-.674-.444"
      clipRule="evenodd"
    />
    <path d="M4.626 13.487H2.018l1.013-7.21q.071-.396.131-.824.077-.427.14-.76-.142.096-.385.348a3.2 3.2 0 0 1-.461.429L1.11 6.515 0 5.073l3.976-2.899h2.24z" />
  </svg>
);
export default SvgNumberTen;
