import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMeasurement1Filled = ({
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
    <path d="M512 85.312H85.312v192h85.504v85.376H85.312v106.624h85.504v85.376H85.312v106.624h85.504v85.376H85.312v192h192V854.72h85.312v83.968h106.688V854.72h85.312v83.968h106.688V854.72h85.312v83.968h192V512H512z" />
  </svg>
);
export default SvgMeasurement1Filled;
