import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileSafetyFilled = ({
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
    <path d="M554.688 42.688H128v938.624h440.64a213.38 213.38 0 0 1-78.08-164.928v-325.76H896V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zM959.936 576h-384v240.384A128 128 0 0 0 633.92 923.52l134.016 87.552 133.952-87.552A128 128 0 0 0 960 816.384V576z" />
  </svg>
);
export default SvgFileSafetyFilled;
