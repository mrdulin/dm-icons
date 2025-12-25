import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAhfgHkOutlined = ({
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
    <g fill="none">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        d="M13.52 10.66 16 15q-4.048-2.572-8.095-2.572T0 15l.405-.706q3.039-2.953 6.235-3.68 3.315-.752 6.88.046m-2.435-4.263 1.691 2.961-.442-.033q-3.752-.255-6.2.42-2.258.622-4.334 2.104l1.74-3.044.071-.05q3.14-2.21 7.474-2.358M8.002 1l2.519 4.41-.328.01q-3.253.146-5.625 1.584z"
      />
    </g>
  </svg>
);
export default SvgAhfgHkOutlined;
