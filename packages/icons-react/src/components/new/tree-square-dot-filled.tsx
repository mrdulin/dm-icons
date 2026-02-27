import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreeSquareDotFilled = ({
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
    <path d="M768 682.688h-85.376v256h256v-256h-85.312V483.52H554.624V341.312H640v-256H384v256h85.312V483.52H170.624v199.168H85.312v256h256v-256H256V568.896h512z" />
  </svg>
);
export default SvgTreeSquareDotFilled;
