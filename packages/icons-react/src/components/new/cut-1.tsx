import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCut1 = ({
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
    <path d="M554.624 42.688v106.624h-85.312V42.688zm359.04 106.624L640 423.04l-60.352-60.288L853.312 89.024l60.352 60.352zM170.624 88.96 681.28 599.616a170.752 170.752 0 1 1-60.352 60.352L512 550.976 403.008 659.968a170.752 170.752 0 1 1-60.352-60.352l108.992-108.928-341.312-341.376zm384 124.352V320h-85.312V213.312zm-238.336 472.96a85.312 85.312 0 1 0-120.64 120.704 85.312 85.312 0 0 0 120.64-120.64zm512 0a85.312 85.312 0 1 0-120.64 120.704 85.312 85.312 0 0 0 120.704-120.64z" />
  </svg>
);
export default SvgCut1;
