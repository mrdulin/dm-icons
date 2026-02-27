import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFactCheckFilled = ({
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
    <path d="M981.376 128H42.688v768h938.688zM849.728 448 640 657.664 515.712 533.312 576 473.024l64 64 149.376-149.376zM469.376 725.312h-256V640h256zm0-341.312h-256v-85.312h256zm0 170.688h-256v-85.376h256z" />
  </svg>
);
export default SvgFactCheckFilled;
