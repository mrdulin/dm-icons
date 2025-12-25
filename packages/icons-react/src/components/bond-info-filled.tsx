import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBondInfoFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.857 4h16.286c.473 0 .857.373.857.833v8.334c0 .46-.384.833-.857.833H3.857A.845.845 0 0 1 3 13.167V4.833c0-.46.384-.833.857-.833M12 12.333c1.894 0 3.429-1.492 3.429-3.333 0-1.84-1.535-3.333-3.429-3.333S8.571 7.159 8.571 9c0 1.84 1.535 3.333 3.429 3.333m4.25 6.167a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5zm2-3a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zM12 7.333c.947 0 1.714.747 1.714 1.667s-.767 1.667-1.714 1.667S10.286 9.92 10.286 9 11.053 7.333 12 7.333" />
  </svg>
);
export default SvgBondInfoFilled;
