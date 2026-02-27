import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextformatWrap = ({
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
    <path d="M85.312 170.688h853.312V256H85.312zm0 298.624h640c48.96 0 101.504 12.16 142.912 43.2 43.136 32.32 70.4 82.56 70.4 148.8 0 66.304-27.264 116.48-70.4 148.8-41.408 31.104-93.952 43.2-142.912 43.2h-231.04l72.896-72.832 85.312-85.312 30.144-30.208 60.352 60.352-30.144 30.208-12.48 12.48h24.96c36.352 0 69.12-9.216 91.712-26.112 20.928-15.68 36.288-40.192 36.288-80.576 0-40.32-15.36-64.832-36.288-80.512-22.528-16.96-55.36-26.112-91.712-26.112h-640zM128 768H85.312v85.312h341.312V768z" />
  </svg>
);
export default SvgTextformatWrap;
