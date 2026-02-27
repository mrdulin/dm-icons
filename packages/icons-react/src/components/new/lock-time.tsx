import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLockTime = ({
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
    <path d="M512 128a170.69 170.69 0 0 1 170.624 170.688v128H341.312v-128A170.69 170.69 0 0 1 512 128m256 298.688v-128a256 256 0 0 0-512 0v128H149.312v512h341.312v-85.376h-256V512h640v-85.312zM789.312 640a149.312 149.312 0 1 0 0 298.688 149.312 149.312 0 0 0 0-298.688M554.624 789.312a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.376 0M384 640h106.624v85.312H384zm448 53.44v78.208L892.352 832 832 892.352l-85.376-85.376V693.44z" />
  </svg>
);
export default SvgLockTime;
