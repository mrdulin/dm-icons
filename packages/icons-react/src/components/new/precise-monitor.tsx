import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPreciseMonitor = ({
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
    <path d="M554.624 85.312v256h-85.312v-256zm-384 24.96 252.416 252.48-60.352 60.288L110.4 170.752l60.288-60.352zm743.04 60.416L661.312 422.976l-60.352-60.288 252.352-252.352zM438.08 469.312a85.312 85.312 0 1 1 0 85.376H85.312v-85.376zm244.544 0h256v85.376h-256zm-259.648 192L170.624 913.664l-60.288-60.352L362.624 600.96zm238.336-60.352 252.352 252.352-60.352 60.352L600.96 661.312zm-106.688 81.728v256h-85.312v-256z" />
  </svg>
);
export default SvgPreciseMonitor;
