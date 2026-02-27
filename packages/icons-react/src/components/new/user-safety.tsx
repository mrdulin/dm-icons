import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserSafety = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m448 341.312v155.072c0 14.4 7.232 27.84 19.328 35.712l87.296 57.024 87.36-57.024a42.69 42.69 0 0 0 19.328-35.712V661.312zM618.624 576h384v240.384A128 128 0 0 1 944.64 923.52l-134.016 87.552-134.016-87.552a128 128 0 0 1-57.984-107.136zM341.312 682.688a170.69 170.69 0 0 0-170.688 170.624h364.8v85.376H85.376v-85.376a256 256 0 0 1 256-256h192v85.376h-192z" />
  </svg>
);
export default SvgUserSafety;
