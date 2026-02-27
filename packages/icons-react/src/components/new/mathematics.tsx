import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMathematics = ({
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
    <path d="M512 42.688h426.624v938.624H85.312V66.048L512 502.144V42.624zM597.312 896h256v-56.96h-134.4v-85.248h134.4v-56.96h-134.4v-85.248h134.4v-56.896h-134.4v-85.376h134.4v-56.896h-134.4v-85.312h134.4v-56.896h-134.4V184.96h134.4V128h-256zM512 896V624.192L170.624 275.264V896z" />
  </svg>
);
export default SvgMathematics;
