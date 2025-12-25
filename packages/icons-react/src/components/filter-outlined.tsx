import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15 0a1.001 1.001 0 0 1 .8 1.6L10 8v7c0 .553-.404 1-.979 1L7 15c-.492-.26-1-.447-1-1V8L.2 1.6A1.001 1.001 0 0 1 1 0zm-1.36 1.6H2.359l4.826 5.326.415.457-.001 6.125.039.02.057.03.014.008.69.34V7.383l.415-.457z" />
  </svg>
);
export default SvgFilterOutlined;
