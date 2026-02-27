import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilePowerpointFilled = ({
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
    <path d="M554.688 665.6h-85.376v-68.288h85.376zM128 42.688h426.688V384H896v597.312H128zM554.688 512H384v341.312h85.312v-102.4h85.376c47.104 0 85.312-38.208 85.312-85.312v-68.288C640 550.208 601.792 512 554.688 512M896 280.96v17.728H640v-256h17.664z" />
  </svg>
);
export default SvgFilePowerpointFilled;
