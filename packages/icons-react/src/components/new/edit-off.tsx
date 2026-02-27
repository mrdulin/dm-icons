import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEditOff = ({
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
    <path d="M671.872 125.76c33.344-33.28 87.36-33.28 120.704 0l105.6 105.6c33.28 33.28 33.28 87.36 0 120.64L797.888 452.288 704 546.304l-60.352-60.352 63.808-63.808-105.6-105.6-63.808 63.808L477.632 320l94.016-94.016zm-9.728 130.432 105.6 105.6 70.08-70.08-105.6-105.6zm-491.52-145.92 743.04 743.04-60.352 60.352-258.368-258.368-204.224 204.16-272.192 45.952 45.888-272.192L368.64 428.992 110.336 170.688l60.288-60.352zm258.368 379.072-184.96 184.96-21.44 126.976 127.04-21.44 184.96-184.96-105.6-105.6z" />
  </svg>
);
export default SvgEditOff;
