import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWifi1 = ({
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
    <path d="M146.304 327.936 512 785.024l365.632-457.088a640.64 640.64 0 0 0-731.328 0m-87.424-40.96a725.57 725.57 0 0 1 906.368 0l33.28 26.624L512 921.6l-486.4-608 33.216-26.688z" />
  </svg>
);
export default SvgWifi1;
