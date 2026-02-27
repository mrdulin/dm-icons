import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTaskAddFilled = ({
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
    <path d="M682.688 42.688H341.312v170.624h341.376zM256 128H128v853.312h464a277.312 277.312 0 0 1 304-434.624V128H768v170.688H256zm768 725.312H853.312V1024H768V853.312H597.312V768H768V597.312h85.312V768H1024z" />
  </svg>
);
export default SvgTaskAddFilled;
