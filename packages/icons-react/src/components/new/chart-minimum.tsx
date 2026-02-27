import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartMinimum = ({
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
    <path d="M170.624 85.312v768h768v85.376H85.312V85.312zM853.312 128v42.688c0 87.36-10.752 200.96-51.52 294.336-20.48 47.04-49.6 91.008-90.752 123.328-41.728 32.832-93.76 51.84-156.416 51.84-62.656-.064-114.688-19.2-156.416-51.968-41.088-32.256-70.144-76.16-90.752-123.2C266.752 371.712 256 258.304 256 170.88v-42.624h85.312v42.624c0 82.752 10.496 182.528 44.352 259.968 16.768 38.336 38.4 69.12 65.28 90.24 26.24 20.672 59.584 33.664 103.68 33.728 44.16 0 77.44-12.928 103.68-33.6 26.944-21.12 48.512-51.968 65.28-90.368C757.504 353.344 768 253.44 768 170.688V128zm-597.44 554.56h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgChartMinimum;
