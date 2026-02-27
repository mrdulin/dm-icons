import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbDown1 = ({
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
    <path d="m573.632 948.736-73.152-24.384a157.89 157.89 0 0 1-107.968-149.76V669.888H227.456a128 128 0 0 1-126.528-147.456l50.56-328.576A128 128 0 0 1 278.016 85.312H896v507.776H731.712zm-46.464-105.472 149.12-335.552h134.4V170.688H278.016a42.69 42.69 0 0 0-42.176 36.16L185.28 535.36a42.688 42.688 0 0 0 42.24 49.152h250.368v190.08c0 31.104 19.84 58.752 49.28 68.672" />
  </svg>
);
export default SvgThumbDown1;
