import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUninstallFilled = ({
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
    <path d="M721.664 275.264 512 67.968l-209.664 207.36L362.304 336l107.008-105.792v303.296h85.312v-303.36L661.632 336zM320 85.312H85.312v853.376h853.312V85.312H704v85.376h149.312v426.624H170.624V170.688H320zm21.376 639.936v85.504h-85.504v-85.504zm128 0v85.504h-85.504v-85.504z" />
  </svg>
);
export default SvgUninstallFilled;
