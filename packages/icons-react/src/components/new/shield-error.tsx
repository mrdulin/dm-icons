import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShieldError = ({
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
    <path d="m512 914.24.32-.128a757.5 757.5 0 0 0 165.824-94.528C769.408 750.464 853.312 649.536 853.312 512V228.672L512 109.184 170.624 228.672V512c0 137.536 83.904 238.464 175.104 307.584A757.6 757.6 0 0 0 512 914.304zm-217.792-26.624C193.408 811.2 85.312 688 85.312 512V168.128L512 18.816l426.624 149.312V512c0 176.064-108.096 299.2-208.896 375.616A842.7 842.7 0 0 1 544.64 993.088c-10.752 4.416-21.76 8.32-32.64 12.16-11.008-3.84-21.888-7.744-32.64-12.16a842.7 842.7 0 0 1-185.152-105.536zM469.312 704V426.688h85.312V704zm85.312-341.312H469.12V277.12h85.504v85.504z" />
  </svg>
);
export default SvgShieldError;
