import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTower3 = ({
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
    <path d="M469.376 133.376V42.688h85.312v90.688a170.752 170.752 0 0 1 67.2 295.872l66.24 552.064H335.936l66.24-552.064a170.752 170.752 0 0 1 67.2-295.936zm14.208 333.568L432.128 896h159.808L540.48 466.944a171.5 171.5 0 0 1-56.896 0M512 213.312A85.312 85.312 0 1 0 512 384a85.312 85.312 0 0 0 0-170.688" />
  </svg>
);
export default SvgTower3;
