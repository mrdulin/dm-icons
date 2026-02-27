import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArtboard = ({
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
    <path d="M341.312 85.312V256h341.312V85.312H768V256h170.624v85.312H768v341.376h170.624V768H768v170.688h-85.376V768H341.312v170.688H256V768H85.312v-85.312H256V341.376H85.312V256H256V85.312zm0 256v341.376h341.312V341.376H341.312z" />
  </svg>
);
export default SvgArtboard;
