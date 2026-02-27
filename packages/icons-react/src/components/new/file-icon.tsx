import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileIcon = ({
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
    <path d="M128 42.688h529.664L896 280.96v188.288h-85.312V384h-256V128H213.312v768H896v85.312H128zm512 103.04v152.96h152.96zM341.312 512v341.312H256V512zm21.376 85.312C362.688 550.208 400.896 512 448 512h64v85.312h-64V768h64v85.312h-64A85.31 85.31 0 0 1 362.688 768zm170.624 0c0-47.104 38.208-85.312 85.376-85.312h42.624c47.168 0 85.376 38.208 85.376 85.312V768c0 47.104-38.208 85.312-85.376 85.312h-42.624A85.31 85.31 0 0 1 533.312 768zM768 512h128c47.104 0 85.312 38.208 85.312 85.312v256H896v-256h-42.688v256H768zm-149.312 85.312V768h42.624V597.312z" />
  </svg>
);
export default SvgFileIcon;
