import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDevice = ({
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
    <path d="M42.688 85.312h938.688V256H896v-85.312H128v554.624h384v85.376H42.688zm554.688 256H1024v597.376H597.376zm85.312 85.376v426.624h256V426.688zm85.248 298.56h85.504v85.504h-85.504zm-554.56 128.064H512v85.376H213.376z" />
  </svg>
);
export default SvgDevice;
