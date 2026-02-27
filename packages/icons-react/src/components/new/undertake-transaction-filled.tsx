import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUndertakeTransactionFilled = ({
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
    <path d="M426.688 234.688A192 192 0 0 1 704 62.656a192 192 0 1 1 0 344.064 192 192 0 0 1-277.312-172.032m352 106.112a106.688 106.688 0 1 0 0-212.288c20.16 30.4 32 66.88 32 106.176 0 39.232-11.84 75.712-32 106.112M359.872 565.312a53.3 53.3 0 0 0-37.76 15.552l-87.424 87.488V832h240l247.68-61.888 150.72-64.32a23.68 23.68 0 0 0-7.04-44.032 23.74 23.74 0 0 0-10.752.448l-.896.192-273.536 62.912H426.688V640H560a37.312 37.312 0 1 0 0-74.688zm322.24 49.152 151.552-34.816a109.12 109.12 0 0 1 76.672 202.944l-1.152.64-159.552 68.032-264.32 66.048H0V608h174.336l87.552-87.552A138.7 138.7 0 0 1 360.064 480H560a122.69 122.69 0 0 1 122.112 134.464m-532.8 78.848h-64V832h64z" />
  </svg>
);
export default SvgUndertakeTransactionFilled;
