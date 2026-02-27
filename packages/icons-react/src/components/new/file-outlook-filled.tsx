import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileOutlookFilled = ({
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
    <path d="M448 597.312h128V768H448zM128 42.688h426.688V384H896v597.312H128zM448 512c-47.104 0-85.312 38.208-85.312 85.312V768c0 47.104 38.208 85.312 85.312 85.312h128c47.104 0 85.312-38.208 85.312-85.312V597.312C661.312 550.208 623.104 512 576 512zm448-231.04v17.728H640v-256h17.664z" />
  </svg>
);
export default SvgFileOutlookFilled;
