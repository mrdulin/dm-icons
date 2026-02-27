import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWifiOff1 = ({
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
    <path d="M128 67.648 956.352 896 896 956.352l-228.736-228.8L512 921.664 25.6 313.6l33.216-26.688c31.872-25.6 65.472-48 100.288-67.456l-91.456-91.52L128 67.712zm94.144 214.848a635 635 0 0 0-75.84 45.44L512 785.024l94.528-118.144L222.08 282.496zm655.488 45.44a640.13 640.13 0 0 0-476.16-105.024l-41.984 7.296-14.72-84.096 42.048-7.296a724.93 724.93 0 0 1 578.368 148.096l33.28 26.688-233.28 291.52-66.624-53.248z" />
  </svg>
);
export default SvgWifiOff1;
