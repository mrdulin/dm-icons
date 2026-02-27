import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoFacebook = ({
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
    <path d="M341.312 256a256 256 0 0 1 256-256h213.312v277.312H640v85.376h181.12L759.616 640H640v384H341.312V640h-160V362.688h160zm256-170.688A170.69 170.69 0 0 0 426.624 256v192h-160v106.688h160v384h128v-384h136.448L714.752 448H554.688V277.312C554.624 230.208 592.832 192 640 192h85.312V85.312z" />
  </svg>
);
export default SvgLogoFacebook;
