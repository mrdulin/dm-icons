import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBridge1 = ({
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
    <path d="M42.688 85.312h256v150.656c8.896 6.592 22.4 15.488 40.384 24.512 37.504 18.752 94.976 38.144 172.928 38.144s135.488-19.392 172.928-38.144c18.048-9.024 31.552-17.92 40.448-24.512V85.376h256v853.312h-256V725.312H298.688v213.376h-256zm256 554.688h170.688V382.272a456.2 456.2 0 0 1-170.688-46.592zm256-257.728V640h170.688V335.68l-2.24 1.152a456.3 456.3 0 0 1-168.448 45.44M128 170.624v682.688h85.376V170.624zm682.688 0v682.752H896V170.688h-85.312z" />
  </svg>
);
export default SvgBridge1;
