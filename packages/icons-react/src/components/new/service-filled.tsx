import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgServiceFilled = ({
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
    <path d="M85.312 469.312a426.688 426.688 0 0 1 853.312 0v219.904c0 70.272-60.544 121.472-128 121.472h-128V469.312h170.688a341.312 341.312 0 1 0-682.688 0h170.688v341.376h-82.624c9.472 36.8 42.88 64 82.624 64H408c13.504-19.392 35.968-32 61.312-32h85.312a74.688 74.688 0 0 1 0 149.312h-85.312c-25.344 0-47.808-12.672-61.312-32h-66.688a170.69 170.69 0 0 1-170.048-156.16c-48.64-16.128-85.952-59.52-85.952-114.56V469.248z" />
  </svg>
);
export default SvgServiceFilled;
