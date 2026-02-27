import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentBreadcrumb = ({
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
    <path d="M85.312 277.312v469.376h337.664L657.664 512 422.976 277.312zm85.312 85.376h216.96L536.96 512 387.648 661.312h-216.96V362.688zM622.336 320l192 192-192 192 60.288 60.352L935.04 512 682.688 259.648z" />
  </svg>
);
export default SvgComponentBreadcrumb;
