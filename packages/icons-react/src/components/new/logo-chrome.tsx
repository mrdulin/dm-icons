import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoChrome = ({
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
    <path d="M512 42.688a469.312 469.312 0 1 1 0 938.624 469.312 469.312 0 0 1 0-938.624M220.16 262.4l94.848 164.224 9.088-15.68a213.89 213.89 0 0 1 192.768-112.32H831.36A383.62 383.62 0 0 0 512 128c-116.736 0-221.376 52.096-291.84 134.4m-52.48 79.552A384.128 384.128 0 0 0 441.856 889.6l94.848-164.288h-21.12a213.38 213.38 0 0 1-191.616-112.64l-156.352-270.72zm369.6 553.216A384 384 0 0 0 874.176 384H684.544l10.24 17.728a213.5 213.5 0 0 1 0 220.48l-157.568 272.96zM401.28 576A127.87 127.87 0 0 0 512 640h1.856a127.36 127.36 0 0 0 62.272-17.152 127.36 127.36 0 0 0 45.568-44.672l1.28-2.176a128.7 128.7 0 0 0 6.016-116.16 129 129 0 0 0-6.016-11.84l-1.28-2.176a127.36 127.36 0 0 0-45.568-44.672C556.8 390.016 535.936 384.512 515.2 384H512a127.81 127.81 0 0 0-110.72 64l-2.368 3.968c-9.472 17.92-14.848 38.4-14.848 60.032 0 21.568 5.312 41.856 14.72 59.712z" />
  </svg>
);
export default SvgLogoChrome;
