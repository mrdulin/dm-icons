import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiscountFilled = ({
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
    <path d="M702.848 321.024a64 64 0 1 0-90.496 90.56 64 64 0 0 0 90.56-90.56zM938.816 85.248l34.432 448.192-466.432 466.432L24.128 517.184 490.56 50.752zM567.04 275.776a128 128 0 1 0 181.056 181.056A128 128 0 0 0 567.04 275.776" />
  </svg>
);
export default SvgDiscountFilled;
