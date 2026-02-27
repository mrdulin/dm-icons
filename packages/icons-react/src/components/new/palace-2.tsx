import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPalace2 = ({
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
    <path d="m554.816 85.44-.064 46.08A256.064 256.064 0 0 1 768 384h85.312V128h85.312v810.688H85.312V128h85.312v256H256a256.064 256.064 0 0 1 213.376-252.48l.128-46.272zM341.312 384h341.312a170.688 170.688 0 1 0-341.312 0m-170.688 85.312v384h170.688v-70.208c0-103.872 58.688-198.784 151.616-245.248l19.072-9.6 19.072 9.6a274.24 274.24 0 0 1 151.552 245.248v70.208h170.688v-384zm426.688 384v-70.208A188.93 188.93 0 0 0 512 625.152a188.93 188.93 0 0 0-85.376 157.952v70.208zM469.248 256h85.504v85.504h-85.504v-85.568z" />
  </svg>
);
export default SvgPalace2;
