import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgActivity = ({
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
    <path d="M938.624 85.312H85.312v853.376h853.312zm-85.312 85.376v298.624H744.32L658.112 607.36l-250.24-333.696-171.264 195.712h-65.92V170.688zm-682.688 384h104.704L402.752 408.96l261.76 348.992 127.104-203.328h61.696v298.624H170.624z" />
  </svg>
);
export default SvgActivity;
