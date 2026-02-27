import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSailingHotel = ({
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
    <path d="m298.688 34.56 49.92 8.704c170.176 29.632 280.96 119.552 347.904 233.792 41.6 70.976 65.664 150.208 77.76 228.416 11.968 77.312 12.416 154.624 5.76 223.872-5.888 62.464-17.728 120.32-33.024 166.656H896v85.312H170.688V896h128zM384 896h272.064c12.736-30.208 25.088-74.56 33.28-128h-305.28v128zm0-213.376h313.92c2.048-41.152 1.28-84.48-3.264-128H384zm0-213.312h296.512a547.1 547.1 0 0 0-46.016-128H384zM384 256h192.64C530.112 203.52 467.648 161.856 384 138.56z" />
  </svg>
);
export default SvgSailingHotel;
