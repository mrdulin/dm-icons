import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgModeLightFilled = ({
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
    <path d="M469.224 0h85.552v85.488h-85.552zM180.19 119.722l60.405 60.468-60.405 60.405-60.468-60.405zm663.556 0 60.468 60.468-60.404 60.405-60.469-60.405 60.469-60.468zM170.72 512.096a341.248 341.248 0 1 1 682.56 0 341.248 341.248 0 0 1-682.56 0M0 469.224h85.488v85.552H0zm938.512 0H1024v85.552h-85.488zM180.19 783.405l60.405 60.405-60.405 60.468-60.468-60.468 60.468-60.469zm663.556 0 60.468 60.405-60.404 60.468-60.469-60.468 60.469-60.469zM469.224 938.512h85.552V1024h-85.552z" />
  </svg>
);
export default SvgModeLightFilled;
