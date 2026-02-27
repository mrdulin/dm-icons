import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserVip = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m357.632 256h308.736l88.768 177.6-243.2 270.144L524.8 753.6zm52.736 85.312-39.232 78.4 140.8 156.48L908.8 739.712l-39.168-78.4zm-325.056 21.376a170.69 170.69 0 0 0-170.688 170.624h300.8v85.376H85.376v-85.376a256 256 0 0 1 256-256h128v85.376h-128z" />
  </svg>
);
export default SvgUserVip;
