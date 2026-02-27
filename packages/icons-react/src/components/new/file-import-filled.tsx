import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileImportFilled = ({
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
    <path d="M554.624 42.688H128V564.48a277.312 277.312 0 0 1 346.624 416.768H896V384H554.624zm341.376 256V280.96L657.664 42.688H640v256zM508.096 810.752l-207.36-209.664-60.672 59.968L345.92 768.064H42.56v85.376h303.36L240 960.448l60.736 59.968 207.296-209.664z" />
  </svg>
);
export default SvgFileImportFilled;
