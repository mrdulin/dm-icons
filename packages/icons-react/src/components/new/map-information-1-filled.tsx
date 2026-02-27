import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapInformation1Filled = ({
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
    <path d="m512 606.464.64-.448c18.112-12.48 36.096-24.96 53.12-38.912 17.088-14.08 40-34.432 63.04-59.648 44.544-48.704 96.512-122.88 96.512-208.768a213.312 213.312 0 1 0-426.688 0c0 85.824 51.968 160 96.512 208.768 23.04 25.216 45.952 45.568 63.04 59.648 17.024 14.016 35.008 26.432 53.12 38.912l.64.448zm64-307.84a64 64 0 1 1-128 0 64 64 0 0 1 128 0M298.624 426.688H85.312v490.56l295.488-123.2L640 945.408 938.624 771.2V426.688H725.312V512h128v210.176L640 846.592 387.2 698.944l-216.576 90.24v-277.12h128v-85.44z" />
  </svg>
);
export default SvgMapInformation1Filled;
