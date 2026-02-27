import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgConstraint = ({
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
    <path d="M426.688 341.312H264.576C163.456 342.4 85.376 420.288 85.376 512s78.08 169.6 179.2 170.624h162.112V768H263.936C119.872 766.592 0 654.4 0 512s119.872-254.592 263.936-256h162.752zM597.312 256h160C902.592 256 1024 368.64 1024 512S902.656 768 757.312 768h-160v-85.312h160c102.144 0 181.376-78.336 181.376-170.688 0-92.288-79.232-170.688-181.376-170.688h-160zM298.688 469.312h426.624v85.376H298.688z" />
  </svg>
);
export default SvgConstraint;
