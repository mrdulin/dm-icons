import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHashtag = ({
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
    <path d="M452.48 90.304 426.88 320h212.864l26.56-239.104 84.8 9.408L725.568 320h213.12v85.312H716.096l-23.68 213.376h246.208V704H682.88l-26.56 239.104-84.8-9.408L597.12 704H384.256l-26.56 239.104-84.864-9.408L298.432 704H85.312v-85.312H307.84l23.68-213.376H85.376V320H341.12l26.56-239.104zm-35.072 315.008-23.68 213.376h212.8l23.68-213.376z" />
  </svg>
);
export default SvgHashtag;
