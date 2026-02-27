import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSaturation = ({
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
    <path d="m512 2.944 301.504 298.688a420.48 420.48 0 0 1 0 598.592c-166.592 164.992-436.48 164.992-603.072 0a420.48 420.48 0 0 1 0-598.592zm0 120.128L270.464 362.24a335.17 335.17 0 0 0 0 477.312 343.936 343.936 0 0 0 483.008 0 335.17 335.17 0 0 0 0-477.312zm-42.688 262.4H512a233.856 233.856 0 1 1 0 467.776h-42.688zm85.312 91.52v284.672a148.608 148.608 0 0 0 0-284.608z" />
  </svg>
);
export default SvgSaturation;
