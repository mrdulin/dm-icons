import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserListFilled = ({
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
    <path d="M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m245.312 618.688h-416v-85.376a256 256 0 0 1 256-256h160zm85.312-341.376h362.688v85.376H586.624zm0 128h362.688v85.376H586.624zm0 128h362.688v85.376H586.624z" />
  </svg>
);
export default SvgUserListFilled;
