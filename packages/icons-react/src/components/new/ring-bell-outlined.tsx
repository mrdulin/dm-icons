import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRingBellOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="currentColor" clipPath="url(#clip0_25098_15612)">
      <path d="M9.909 14.003c-.353.612-1.035 1.16-1.782 1.16s-1.429-.548-1.781-1.16z" />
      <path
        fillRule="evenodd"
        d="M8 1.809c.337 0 .636.3.636.637v.21l.151.026a4.62 4.62 0 0 1 3.81 4.212l.01.204v3.712c0 .713.5 1.285 1.13 1.49l.024.007h.026a.63.63 0 0 1 .569.395.51.51 0 0 1-.506.482H2.504a.51.51 0 0 1-.509-.508c0-.228.14-.402.358-.442l.014-.002.015-.005c.593-.214.94-.802.94-1.431V7.099c.069-2.182 1.697-3.994 3.893-4.417l.15-.028v-.208c0-.337.299-.637.635-.637m0 2.162c-.882 0-1.748.36-2.376.987a3.36 3.36 0 0 0-.987 2.376V11.8h6.74V7.334a3.36 3.36 0 0 0-.986-2.376A3.36 3.36 0 0 0 8 3.971"
        clipRule="evenodd"
      />
      <path d="M4.466 1.639C2.99 2.774 2.058 4.529 1.949 6.345H.85c.156-2.19 1.186-4.15 2.83-5.451zM12.324.898c1.641 1.3 2.67 3.26 2.826 5.447h-1.104c-.158-1.815-1.088-3.57-2.454-4.705z" />
    </g>
    <defs>
      <clipPath id="clip0_25098_15612">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRingBellOutlined;
