import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPalace3 = ({
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
    <path d="m554.816 85.44-.064 46.08A256.064 256.064 0 0 1 768 384h170.624v554.688H85.312V384H256a256.064 256.064 0 0 1 213.376-252.48l.128-46.272zm-42.88 127.872A170.69 170.69 0 0 0 341.376 384v85.312H170.624v384h170.688v-70.208c0-103.872 58.688-198.784 151.616-245.248l19.072-9.6 19.072 9.6a274.24 274.24 0 0 1 151.552 245.248v70.208h170.688v-384H682.624V384A170.69 170.69 0 0 0 512 213.312zm85.376 640v-70.208A188.93 188.93 0 0 0 512 625.152a188.93 188.93 0 0 0-85.376 157.952v70.208zM469.248 341.248h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgPalace3;
