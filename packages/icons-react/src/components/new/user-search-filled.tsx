import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserSearchFilled = ({
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
    <path d="M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376m64 672a202.688 202.688 0 1 1 372.928 110.016l71.424 71.296-60.288 60.352-71.488-71.36a202.688 202.688 0 0 1-312.576-170.304M757.312 640a117.312 117.312 0 1 0 0 234.688 117.312 117.312 0 0 0 0-234.688M544 597.312a265.47 265.47 0 0 0-53.376 160c0 70.016 27.008 133.76 71.168 181.376H85.312v-85.376a256 256 0 0 1 256-256h202.624z" />
  </svg>
);
export default SvgUserSearchFilled;
