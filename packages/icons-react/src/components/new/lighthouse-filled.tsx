import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLighthouseFilled = ({
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
    <path d="M384 85.312V42.688h-85.312v384c0 102.08-20.608 226.56-41.792 327.168a3038 3038 0 0 1-41.024 169.92l-.64 2.432-.192.576-.064.128-15.552 54.4h239.232l42.688-170.688h61.376l42.624 170.688h239.232l-15.552-54.4v-.128l-.192-.64-.64-2.368-2.688-9.6a3038 3038 0 0 1-38.4-160.32c-21.184-100.608-41.792-225.088-41.792-327.168v-384H640v42.624zm256 85.376v42.624H384v-42.688h256zm-85.12 213.184v85.44h-85.504V384h85.504z" />
  </svg>
);
export default SvgLighthouseFilled;
