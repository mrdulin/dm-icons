import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSupport = ({
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
    <path d="m272.32 211.968 122.048 122.048a213.57 213.57 0 0 1 235.328 0l122.048-122.048a384.13 384.13 0 0 0-479.424 0m539.712 60.352L690.048 394.368a213.57 213.57 0 0 1 0 235.264L812.032 751.68a384.13 384.13 0 0 0 0-479.36m-60.288 539.712L629.696 689.984a213.63 213.63 0 0 1-235.328 0L272.32 812.032a384.13 384.13 0 0 0 479.36 0zM211.968 751.68 334.08 629.632a213.57 213.57 0 0 1 0-235.264L211.968 272.32a384.13 384.13 0 0 0 0 479.36M180.16 180.16a469.312 469.312 0 1 1 663.68 663.68 469.312 469.312 0 0 1-663.68-663.68m422.4 241.28a128 128 0 1 0-181.056 181.12A128 128 0 0 0 602.56 421.44" />
  </svg>
);
export default SvgSupport;
