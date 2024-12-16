import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgServer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path d="M0 0h16v16H0z" />
      <path
        fill="#B8CAE6"
        d="M3.333 1.333h9.334c.736 0 1.333.597 1.333 1.334V4c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 4V2.667c0-.737.597-1.334 1.333-1.334m4 1.334a.667.667 0 1 0 0 1.333h3.334a.667.667 0 0 0 0-1.333zM4.667 4a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333"
        opacity={0.3}
      />
      <path
        fill="#B8CAE6"
        d="M3.333 6h9.334C13.403 6 14 6.597 14 7.333v1.334C14 9.403 13.403 10 12.667 10H3.333A1.333 1.333 0 0 1 2 8.667V7.333C2 6.597 2.597 6 3.333 6m4 1.333a.667.667 0 0 0 0 1.334h3.334a.667.667 0 0 0 0-1.334zM4.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M3.333 10.667h9.334c.736 0 1.333.597 1.333 1.333v1.333c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 0 1 2 13.333V12c0-.736.597-1.333 1.333-1.333m4 1.333a.667.667 0 1 0 0 1.333h3.334a.667.667 0 1 0 0-1.333zm-2.666 1.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333"
      />
    </g>
  </svg>
);
export default SvgServer;
