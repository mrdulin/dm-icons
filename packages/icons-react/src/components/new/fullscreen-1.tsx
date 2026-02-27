import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFullscreen1 = ({
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
    <path d="M170.688 170.688h256V256H256v170.688h-85.312zm426.688 0h256v256H768V256H597.376zM256 597.312V768h170.688v85.312h-256v-256zm597.376 0v256h-256V768H768V597.312z" />
  </svg>
);
export default SvgFullscreen1;
