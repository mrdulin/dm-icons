import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCamera1 = ({
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
    <path d="M512 128a298.688 298.688 0 1 0 0 597.312A298.688 298.688 0 0 0 512 128M128 426.688a384 384 0 1 1 560.96 340.864L716.992 896h93.696v85.312H213.312V896h93.632l28.096-128.448A384 384 0 0 1 128 426.688m287.616 371.776L394.24 896h235.52l-21.312-97.536a384.5 384.5 0 0 1-192.768 0zM512 341.312A85.312 85.312 0 1 0 512 512a85.312 85.312 0 0 0 0-170.688m-170.688 85.376a170.688 170.688 0 1 1 341.376 0 170.688 170.688 0 0 1-341.376 0" />
  </svg>
);
export default SvgCamera1;
