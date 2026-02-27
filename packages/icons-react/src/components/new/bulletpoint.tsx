import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBulletpoint = ({
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
    <path d="M128 256.064H85.312V170.56h85.504v85.504zm0 298.688H85.312v-85.504h85.504v85.504zM85.312 853.44h85.504v-85.504H85.312zm256-682.88h-42.688V256h640v-85.44zm-42.688 298.688h640v85.312h-640zM341.312 768h-42.688v85.312h640V768z" />
  </svg>
);
export default SvgBulletpoint;
