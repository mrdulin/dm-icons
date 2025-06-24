import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdobeReaderColored = ({
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
    <g fill="none" fillRule="nonzero">
      <path d="M0 0h16v16H0z" />
      <g opacity={0.99}>
        <path
          fill="#D93838"
          d="M13.6 1H2.4C1.63 1 1 1.63 1 2.4v11.2c0 .77.63 1.4 1.4 1.4h11.2c.77 0 1.4-.63 1.4-1.4V2.4c0-.77-.63-1.4-1.4-1.4"
        />
        <path
          fill="#FFF"
          d="M13.6 9.694c0 1.057-1.029 1.057-1.554 1.057a4 4 0 0 1-2.303-.931c-1.274.28-2.485.686-3.703 1.183-.966 1.708-1.869 2.583-2.646 2.583-.154 0-.343-.028-.469-.126a.92.92 0 0 1-.532-.84c0-.28.063-1.057 3.017-2.331a22 22 0 0 0 1.645-3.857c-.371-.749-1.183-2.583-.623-3.514a.99.99 0 0 1 .966-.497c.308 0 .623.154.812.406.406.56.371 1.743-.154 3.486a9.4 9.4 0 0 0 1.925 2.485c.651-.126 1.309-.217 1.96-.217 1.47.028 1.687.714 1.659 1.113"
        />
        <path
          fill="#D93838"
          d="m7.685 7.86-.028.063-.028-.028c-.28.714-.588 1.428-.931 2.114l.063-.028v.063a17 17 0 0 1 2.114-.623l-.028-.028h.091A9.5 9.5 0 0 1 7.685 7.86m-.217-4.508h-.091c-.028 0-.091 0-.126.028-.126.532-.028 1.092.189 1.589a2.66 2.66 0 0 0 .028-1.617m-4.137 9.331.091-.028c.434-.154.777-.469 1.029-.868a2.43 2.43 0 0 0-1.12.896m8.589-3.171c-.28 0-.532 0-.812.063.308.154.623.217.931.252.217.028.434 0 .623-.063 0-.098-.119-.252-.742-.252"
        />
      </g>
    </g>
  </svg>
);
export default SvgAdobeReaderColored;
