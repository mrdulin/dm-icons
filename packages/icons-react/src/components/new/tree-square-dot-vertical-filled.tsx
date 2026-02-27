import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreeSquareDotVerticalFilled = ({
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
    <path d="M682.624 256v85.312h256v-256h-256v85.376h-199.04v298.624H341.248V384h-256v256h256v-85.312h142.208v298.624H682.56v85.376h256v-256h-256V768h-113.6V256h113.728z" />
  </svg>
);
export default SvgTreeSquareDotVerticalFilled;
