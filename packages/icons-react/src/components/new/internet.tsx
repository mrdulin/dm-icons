import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInternet = ({
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
    <path d="M130.368 469.312a384.38 384.38 0 0 1 267.712-324.16 721.3 721.3 0 0 0-98.24 324.16h-169.6zM468.992 44.608a469.376 469.376 0 0 0 0 934.784l.384.384 18.112.896a488 488 0 0 0 49.024 0l18.176-.896.32-.384a469.376 469.376 0 0 0 0-934.784l-.32-.448-18.176-.896a476 476 0 0 0-48.96 0l-18.176.896zM512.064 128a636.5 636.5 0 0 1 126.528 341.312H385.408A636.5 636.5 0 0 1 512 128zm-212.16 426.688a721.3 721.3 0 0 0 98.24 324.16 384.38 384.38 0 0 1-267.776-324.16h169.6zM512 896a636.5 636.5 0 0 1-126.592-341.312h253.184A636.5 636.5 0 0 1 512.064 896zm113.92-17.152a721.4 721.4 0 0 0 98.176-324.16h169.6a384.38 384.38 0 0 1-267.84 324.16zm98.176-409.536a721.4 721.4 0 0 0-98.176-324.16 384.38 384.38 0 0 1 267.84 324.16h-169.6z" />
  </svg>
);
export default SvgInternet;
