import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFullscreen2 = ({
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
    <path d="M170.688 170.688h256V256H316.352l128 128L384 444.352l-128-128v110.336h-85.312zm426.688 0h256v256H768V316.352l-128 128L579.712 384l128-128h-110.4v-85.312zM444.416 640l-128 128h110.272v85.312h-256v-256H256v110.336l128-128L444.352 640zM640 579.648l128 128V597.312h85.376v256h-256V768h110.272l-128-128z" />
  </svg>
);
export default SvgFullscreen2;
