import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserAddFilled = ({
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
    <path d="M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376m490.688 725.376H810.624v170.624h-85.312V810.688H554.624v-85.376h170.688V554.688h85.312v170.624h170.688zM549.376 597.312A276.16 276.16 0 0 0 490.624 768c0 64.384 21.952 123.584 58.752 170.688H85.312v-85.376a256 256 0 0 1 256-256h208z" />
  </svg>
);
export default SvgUserAddFilled;
