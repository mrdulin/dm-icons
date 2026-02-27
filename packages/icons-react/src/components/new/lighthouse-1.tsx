import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLighthouse1 = ({
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
    <path d="m512 39.36 268.8 107.52-31.68 79.232-23.808-9.472v210.048h85.376V512h-81.344c6.976 81.28 22.208 168 37.76 241.92a3041 3041 0 0 0 41.024 169.856l.64 2.432.192.576v.128l15.616 54.4H564.032l-42.688-170.624h-18.688l-42.688 170.624h-260.48l15.488-54.4v-.128l.192-.64.64-2.368a1627 1627 0 0 0 12.16-45.696c7.936-30.848 18.432-74.24 28.928-124.16C272.448 680 287.68 593.28 294.656 512h-81.28v-85.312h85.312V216.64l-23.808 9.472-31.68-79.232zM384 182.464v244.224h256V182.4l-128-51.2-128 51.2zM643.712 512H380.288c-7.168 88.96-23.68 182.592-39.872 259.456A3125 3125 0 0 1 311.488 896h81.92l42.624-170.688h151.936L630.656 896h81.856a3133 3133 0 0 1-28.928-124.544C667.392 694.592 650.88 601.024 643.712 512m-174.4-256.064h85.568v85.504h-85.568z" />
  </svg>
);
export default SvgLighthouse1;
