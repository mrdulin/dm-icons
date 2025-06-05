import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReloadOutlined2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h32v32H0z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M23.551 14.22h-4.444a.444.444 0 0 1-.445-.445v-.258a.44.44 0 0 1 .134-.32l1.582-1.582a6.16 6.16 0 0 0-4.382-1.84 6.222 6.222 0 1 0 6.222 6.64.444.444 0 0 1 .444-.418h.89a.46.46 0 0 1 .32.142c.08.09.123.208.115.329a8 8 0 1 1-2.33-6.124l1.325-1.325a.44.44 0 0 1 .311-.133h.258c.246 0 .445.199.445.444v4.445a.444.444 0 0 1-.445.444"
      />
    </g>
  </svg>
);
export default SvgReloadOutlined2;
