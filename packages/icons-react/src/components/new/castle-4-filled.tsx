import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCastle4Filled = ({
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
    <path d="M597.312 85.312h341.312v853.376h-384V725.312h-85.312v213.376h-384V85.312h341.312v270.592a251.7 251.7 0 0 1 42.688-11.008v-46.208h85.312v46.208a248.6 248.6 0 0 1 42.688 11.008zM256 597.312c0-75.84 33.024-144 85.312-190.72V170.624H170.624v682.624H256v-256zm426.624-190.72A255.42 255.42 0 0 1 768 597.248v256h85.312v-682.56H682.624v235.84zM346.688 554.624h330.56A170.88 170.88 0 0 0 409.6 460.8c-30.592 22.976-53.12 55.872-62.912 93.888z" />
  </svg>
);
export default SvgCastle4Filled;
