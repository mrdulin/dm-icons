import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoCamera1 = ({
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
    <path d="M0 170.688h725.312v189.184L1024 180.672v660.864L725.312 670.848v182.464H0zm725.312 401.92 213.376 121.856V331.392l-213.376 128zM85.312 256v512H640V256zm85.376 85.312h256v85.376h-256z" />
  </svg>
);
export default SvgVideoCamera1;
