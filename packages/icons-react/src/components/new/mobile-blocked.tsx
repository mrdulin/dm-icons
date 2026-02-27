import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobileBlocked = ({
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
    <path d="M170.688 42.688h682.688v170.624H768V128H256v768h512v-85.312h85.376v170.624H170.688zm597.312 320A149.312 149.312 0 0 0 636.608 583.04l202.496-202.432a148.6 148.6 0 0 0-71.04-17.92zm131.392 78.272L696.96 643.392A149.312 149.312 0 0 0 899.392 440.96M533.312 512a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.312 0zm-64 213.312h85.568v85.504h-85.504v-85.504z" />
  </svg>
);
export default SvgMobileBlocked;
