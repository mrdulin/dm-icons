import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSunnyFilled = ({
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
    <path d="M554.688 42.688v128h-85.312v-128zm319.36 167.552-90.496 90.56-60.352-60.352 90.496-90.496zm-663.68-60.288 90.432 90.496-60.288 60.352-90.56-90.496 60.352-60.352zM256 512a256 256 0 1 1 512 0 256 256 0 0 1-512 0M42.688 469.312h128v85.376h-128zm810.688 0h128v85.376h-128zM300.8 783.552l-90.496 90.432-60.352-60.288 90.56-90.56 60.288 60.352zm482.752-60.416 90.496 90.56-60.352 60.288-90.496-90.496zM554.688 853.312v128h-85.312v-128z" />
  </svg>
);
export default SvgSunnyFilled;
