import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChimneyFilled = ({
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
    <path d="M566.592 85.312H73.344L127.552 302.4l-45.44 636.288h515.2V725.312h85.312v213.376h256V570.88L639.936 421.632 527.68 477.76l-15.232-175.68zm-392.832 768 36.608-512H430.08l15.488 177.472-104.32 52.16v282.368zm283.52-682.624L436.032 256H203.968l-21.376-85.312h274.752z" />
  </svg>
);
export default SvgChimneyFilled;
