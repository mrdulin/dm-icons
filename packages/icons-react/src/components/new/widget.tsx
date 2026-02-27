import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWidget = ({
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
    <path d="M228.288 128h567.488l185.6 417.6v393.088H42.688V545.6zm55.488 85.312L150.976 512h722.048L740.288 213.312zm612.224 384H128v256h768zm-682.624 85.376h85.504v85.504h-85.504zm170.624 0h85.504v85.504H384z" />
  </svg>
);
export default SvgWidget;
