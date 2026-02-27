import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMemberFilled = ({
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
    <path d="M149.312 298.688a213.312 213.312 0 1 1 426.688 0 213.312 213.312 0 0 1-426.688 0m64 298.624A213.31 213.31 0 0 0 0 810.688V896h725.312v-85.312A213.31 213.31 0 0 0 512 597.312zM1024 896H810.688v-85.312a297.73 297.73 0 0 0-89.6-213.376h89.6A213.31 213.31 0 0 1 1024 810.688zM661.376 512c-26.88 0-52.608-4.992-76.224-14.08a297.6 297.6 0 0 0 76.16-199.232 297.6 297.6 0 0 0-76.16-199.36A213.312 213.312 0 1 1 661.376 512" />
  </svg>
);
export default SvgMemberFilled;
