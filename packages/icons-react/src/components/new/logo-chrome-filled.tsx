import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoChromeFilled = ({
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
    <path d="M480.192 983.296a469.312 469.312 0 0 0 451.648-597.44H652.608l10.24 17.728a213.4 213.4 0 0 1 30.72 110.208 211.97 211.97 0 0 1-30.72 110.272L455.872 982.656c8.064.448 16.192.64 24.32.64M365.12 969.088l139.712-241.92h-21.184a213.38 213.38 0 0 1-191.616-112.64L86.4 258.496a469.568 469.568 0 0 0 278.72 710.592M143.616 186.88a467.97 467.97 0 0 1 336.64-142.272A469.31 469.31 0 0 1 898.304 300.48H484.928A213.57 213.57 0 0 0 292.16 412.8l-9.024 15.68zm272.576 437.888a128 128 0 1 1 128-221.696 128 128 0 0 1-128 221.696" />
  </svg>
);
export default SvgLogoChromeFilled;
