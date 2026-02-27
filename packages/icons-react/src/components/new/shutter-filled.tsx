import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShutterFilled = ({
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
    <path d="M631.808 58.112 490.56 307.392h443.904a470.4 470.4 0 0 0-302.656-249.28m333.248 331.072H673.92l221.696 393.152A467.4 467.4 0 0 0 981.312 512c0-42.432-5.632-83.648-16.256-122.816M839.04 848.576 696.128 595.328 479.104 980.224A467.84 467.84 0 0 0 839.04 848.576M393.088 966.144l140.8-249.6H89.472a470.34 470.34 0 0 0 303.68 249.6zM58.88 634.688h291.072l-221.312-393.6A467.4 467.4 0 0 0 42.624 512c0 42.432 5.632 83.584 16.192 122.688zm126.464-459.712A467.84 467.84 0 0 1 545.856 43.904l-217.92 384.704z" />
  </svg>
);
export default SvgShutterFilled;
