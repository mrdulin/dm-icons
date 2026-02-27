import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHotspotWave = ({
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
    <path d="M554.688 0H512v85.312h42.688A298.69 298.69 0 0 1 853.376 384v42.688h85.312V384a384 384 0 0 0-384-384m-128 85.312h-256V1024h682.688V512H768v426.688H256v-768h170.688zm128 85.376H512V256h42.688a128 128 0 0 1 128 128v42.688H768V384a213.31 213.31 0 0 0-213.312-213.312m42.816 170.624H512v85.568h85.504zM554.88 768h-85.504v85.504h85.504z" />
  </svg>
);
export default SvgHotspotWave;
