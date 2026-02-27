import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMathematicsFilled = ({
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
    <path d="M938.624 42.688H512v459.52L85.312 65.984v915.264h853.312V874.56H768v-85.312h170.624V714.56H768v-85.248h170.624v-74.688H768v-85.312h170.624v-74.688H768v-85.312h170.624v-74.688H768v-85.312h170.624zM512 624.192V896H170.624V275.2z" />
  </svg>
);
export default SvgMathematicsFilled;
