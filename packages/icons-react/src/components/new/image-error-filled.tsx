import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageErrorFilled = ({
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
    <path d="M938.624 85.312H85.312v853.376h479.232a276.16 276.16 0 0 1-31.232-128c0-81.088 34.816-154.048 90.24-204.8L384 366.336 170.624 579.648v-408.96h682.688v365.888c30.336 4.672 59.072 14.336 85.312 27.968zM682.624 224a117.312 117.312 0 1 0 0 234.688 117.312 117.312 0 0 0 0-234.688m248.704 767.68 60.352-60.352-120.64-120.64 120.64-120.704-60.352-60.352-120.64 120.704-120.704-120.704-60.352 60.352 120.704 120.704-120.704 120.64 60.352 60.352 120.704-120.704z" />
  </svg>
);
export default SvgImageErrorFilled;
