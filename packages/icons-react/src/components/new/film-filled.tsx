import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilmFilled = ({
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
    <path d="M847.168 840.512A471 471 0 0 1 781.888 896H1024v85.312H512a469.312 469.312 0 1 1 335.168-140.8M512 213.312A85.312 85.312 0 1 0 512 384a85.312 85.312 0 0 0 0-170.688m213.376 213.376a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624m-512 85.312A85.312 85.312 0 1 0 384 512a85.312 85.312 0 0 0-170.624 0M512 640a85.312 85.312 0 1 0 0 170.688A85.312 85.312 0 0 0 512 640" />
  </svg>
);
export default SvgFilmFilled;
