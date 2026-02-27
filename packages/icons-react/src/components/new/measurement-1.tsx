import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMeasurement1 = ({
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
    <path d="M85.312 85.312H512V512h426.624v426.688H85.312zm85.312 85.376v106.624h85.504v85.376h-85.504v106.624h85.504v85.376h-85.504v106.624h85.504v85.376h-85.504v106.624h106.688v-83.904h85.312v83.904h106.688v-83.904h85.312v83.904h106.688v-83.904h85.312v83.904h106.688v-256H426.624V170.688z" />
  </svg>
);
export default SvgMeasurement1;
