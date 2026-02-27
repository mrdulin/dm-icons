import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRollbackOff = ({
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
    <path d="m954.816 186.816-768 768L128 896l768-768zm-124.16 181.568a297.34 297.34 0 0 1 65.28 186.304v42.624h-3.008a298.69 298.69 0 0 1-295.616 256h-251.52L430.976 768h166.272a213.312 213.312 0 0 0 172.48-338.816l60.8-60.8zM401.6 149.312 295.04 256h302.336c35.712 0 69.952 6.272 101.696 17.728l-70.016 69.952a215 215 0 0 0-31.744-2.368H294.976L401.6 448l-60.288 60.288-209.664-209.6L341.312 89.024z" />
  </svg>
);
export default SvgRollbackOff;
