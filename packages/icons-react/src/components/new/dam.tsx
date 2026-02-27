import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDam = ({
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
    <path d="m512 28.608 384 336v488.704h42.624v85.312h-384v-85.312h42.688V426.624H426.624v426.688h42.688v85.312h-384v-85.312H128V364.608zM213.376 853.312h127.872l.064-426.688h-128v426.688zm70.848-512h455.552L511.936 142.08 284.288 341.312zm526.4 85.312h-128v426.688h128z" />
  </svg>
);
export default SvgDam;
