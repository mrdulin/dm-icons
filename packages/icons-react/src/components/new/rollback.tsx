import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRollback = ({
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
    <path d="M892.928 597.312a298.75 298.75 0 0 1-295.68 256h-362.56V768h362.688a213.312 213.312 0 0 0 0-426.688h-302.4L401.664 448l-60.352 60.352-209.664-209.664L341.312 88.96l60.352 60.288L294.976 256h302.336a298.69 298.69 0 0 1 298.624 298.688v42.624z" />
  </svg>
);
export default SvgRollback;
