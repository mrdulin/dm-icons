import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWindy = ({
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
    <path d="M554.624 213.312a42.688 42.688 0 0 0 0 85.376h384V384h-384a128 128 0 1 1 0-256h170.688v85.312zm-320 128a64 64 0 0 0 0 128h704v85.376h-704a149.312 149.312 0 0 1 0-298.688h106.688v85.312zM213.312 768a128 128 0 0 1 128-128H768v85.312H341.312a42.688 42.688 0 0 0 0 85.376h192V896h-192a128 128 0 0 1-128-128" />
  </svg>
);
export default SvgWindy;
