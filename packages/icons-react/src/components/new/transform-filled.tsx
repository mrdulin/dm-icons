import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTransformFilled = ({
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
    <path d="M42.688 170.688A128 128 0 0 1 291.392 128h441.216A128 128 0 1 1 896 291.392v441.216A128 128 0 1 1 732.608 896H291.392A128 128 0 1 1 128 732.608V291.392a128 128 0 0 1-85.312-120.704m170.688 120.704v441.216c36.352 12.864 65.152 41.728 78.08 78.08h441.152c12.864-36.416 41.728-65.216 78.08-78.08V291.392a128.32 128.32 0 0 1-78.08-78.08H291.392a128.38 128.38 0 0 1-78.08 78.08z" />
  </svg>
);
export default SvgTransformFilled;
