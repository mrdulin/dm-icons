import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignTop = ({
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
    <path d="M128 128h768v85.312H128zm384 110.336-30.144 30.144-170.688 170.688-30.144 30.144 60.288 60.352 30.208-30.144 97.792-97.856V896h85.376V401.664l97.792 97.856 30.208 30.144 60.352-60.352-30.208-30.144L542.144 268.48z" />
  </svg>
);
export default SvgAlignTop;
