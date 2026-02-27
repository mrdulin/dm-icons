import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoonFallFilled = ({
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
    <path d="m465.728 72.192-19.2 71.424c-12.8 47.616-11.52 99.712 3.008 153.792a298.688 298.688 0 0 0 419.84 190.976l65.792-32.128-4.48 73.024c-2.624 44.16-16 87.872-39.168 134.4l-11.776 23.552H627.072L512 764.032l-115.072-76.8H120.704l-12.992-31.872-4.864-12.288a348 348 0 0 1-10.24-29.184 426.69 426.69 0 0 1 301.696-522.56l71.488-19.2zM42.688 772.48h354.24L512 849.28l115.072-76.736h354.304v85.312H652.928L512 951.808l-140.928-93.952H42.688v-85.312z" />
  </svg>
);
export default SvgMoonFallFilled;
