import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoWechatStrokeFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1088 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M746.752 329.152c6.272 0 12.48.128 18.752.384-43.392-133.504-188.16-231.68-360.128-231.68C199.232 97.92 32.064 239.04 32.064 413.12c0 94.848 49.6 179.84 128.064 237.696l-14.976 115.712 121.024-60.8a429.8 429.8 0 0 0 116.032 22.016A294.4 294.4 0 0 1 373.376 656c0-189.888 177.28-326.848 373.376-326.848m-458.688 14.08a42.688 42.688 0 1 0 0-85.376 42.688 42.688 0 0 0 0 85.376m234.688.32a42.688 42.688 0 1 0 0-85.376 42.688 42.688 0 0 0 0 85.376M1056.064 656c0 72.64-34.688 138.368-90.688 185.984v118.272l-104-60.032a356.7 356.7 0 0 1-114.624 18.624c-170.88 0-309.376-117.696-309.376-262.848s138.496-262.848 309.376-262.848c170.816 0 309.312 117.696 309.312 262.848m-456.128-85.44a42.688 42.688 0 1 0 85.376 0 42.688 42.688 0 0 0-85.376 0m208.256 0a42.688 42.688 0 1 0 85.312 0 42.688 42.688 0 0 0-85.312 0" />
  </svg>
);
export default SvgLogoWechatStrokeFilled;
