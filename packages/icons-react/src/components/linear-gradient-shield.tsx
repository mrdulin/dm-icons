import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinearGradientShield = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 44 51"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="linearGradient-1"
        x1="20.229%"
        x2="72.072%"
        y1="4.142%"
        y2="60.395%"
      >
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="linearGradient-2"
        x1="21.668%"
        x2="75.518%"
        y1="3.851%"
        y2="73.948%"
      >
        <stop offset="0%" stopColor="currentColor" stopOpacity={0.6} />
        <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="nonzero" opacity={0.997}>
      <path
        fill="url(#linearGradient-1)"
        d="M22 50.284a1.7 1.7 0 0 1-.436-.038 35.3 35.3 0 0 1-13.018-6.53C2.967 39.362 0 34.283 0 29.05V7.093a1.9 1.9 0 0 1 .584-1.366c.373-.36.875-.555 1.394-.543A39.7 39.7 0 0 0 21.13.258a2.03 2.03 0 0 1 1.979 0 39.24 39.24 0 0 0 18.914 4.926 1.94 1.94 0 0 1 1.394.543c.372.36.582.851.584 1.366V29.05c0 5.232-2.929 10.308-8.429 14.666-.849.65-2.062.532-2.769-.268a1.877 1.877 0 0 1 .277-2.673c3.205-2.52 7.003-6.568 7.003-11.685V8.966a43.45 43.45 0 0 1-17.924-4.85A44 44 0 0 1 3.996 9.005v20.124c0 9.433 13.216 16.306 18.479 17.452a1.94 1.94 0 0 1 1.234.835c.283.43.38.955.27 1.456a2.08 2.08 0 0 1-1.98 1.412"
      />
      <path
        fill="url(#linearGradient-2)"
        d="M33.079 40.775c3.205-2.52 7.003-6.568 7.003-11.685V8.966a43.45 43.45 0 0 1-17.924-4.85A44 44 0 0 1 3.996 9.005v20.124c0 9.433 13.216 16.306 18.479 17.452.507.104 10.206-5.49 10.604-5.806"
      />
    </g>
  </svg>
);
export default SvgLinearGradientShield;
