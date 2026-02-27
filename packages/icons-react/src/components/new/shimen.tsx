import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShimen = ({
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
    <path d="m512 85.12 469.312 46.976V337.28l-125.12 12.48L899.2 938.624H593.6l46.72-566.912-26.432 2.56-5.12.448c-29.248 2.816-60.096 5.76-92.544 9.024l-4.288.448-124.288-12.416 42.24 566.848H124.8l43.008-588.864-125.12-12.48V132.096L512 85.184zM252.608 358.4l-36.16 495.04H337.92L301.376 363.2zm474.048 4.8-40.448 490.24H807.36L771.2 358.4l-18.56 1.92-.64.064-25.344 2.688zm-598.72-153.92v50.752l384 38.4c31.168-3.136 60.672-5.952 88.64-8.64l5.12-.512c27.264-2.56 52.992-5.12 77.12-7.488 21.056-2.112 40.576-4.16 60.416-6.272h.512a7549 7549 0 0 1 62.656-6.528l89.6-8.96V209.28l-384-38.4-384 38.4z" />
  </svg>
);
export default SvgShimen;
