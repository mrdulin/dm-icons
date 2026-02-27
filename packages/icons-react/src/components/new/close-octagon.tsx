import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseOctagon = ({
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
    <path d="M697.6 64 960 326.4v371.2L697.6 960H326.4L64 697.6V326.4L326.4 64zm-35.392 85.312H361.792l-212.48 212.48v300.416l212.48 212.48h300.416l212.48-212.48V361.792zm45.888 226.944-135.744 135.68 135.68 135.808-60.288 60.352L512 572.352 376.192 708.096l-60.288-60.352L451.648 512 315.904 376.192l60.288-60.352L512 451.648l135.744-135.744z" />
  </svg>
);
export default SvgCloseOctagon;
