import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlarm = ({
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
    <path d="M295.04 106.688 64 337.728 3.712 277.312l231.04-231.04zm494.336-60.352 231.04 231.04L960 337.664l-230.976-231.04zM512 213.376A341.312 341.312 0 1 0 512 896a341.312 341.312 0 0 0 0-682.688zM85.376 554.624a426.688 426.688 0 1 1 853.312 0 426.688 426.688 0 0 1-853.312 0M554.688 320v216.96l145.664 145.728L640 743.04 469.376 572.352V320z" />
  </svg>
);
export default SvgAlarm;
