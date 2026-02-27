import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserTalk = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m553.92 233.92 25.728 34.048a298.69 298.69 0 0 1-.128 360.128l-25.728 34.048-68.096-51.52 25.728-33.984a213.31 213.31 0 0 0 .128-257.28l-25.728-34.048zM341.312 682.688a170.69 170.69 0 0 0-170.688 170.688H556.8v85.312H85.312v-85.312a256 256 0 0 1 256-256h213.312v85.312zm349.44-38.784 25.728 34.048a149.31 149.31 0 0 1 0 180.032l-25.792 34.048-68.032-51.456 25.728-34.048a64 64 0 0 0 0-77.184l-25.728-34.048z" />
  </svg>
);
export default SvgUserTalk;
