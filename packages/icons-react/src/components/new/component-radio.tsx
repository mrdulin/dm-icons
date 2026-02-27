import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentRadio = ({
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
    <path d="M512 170.688a341.312 341.312 0 1 0 0 682.624 341.312 341.312 0 0 0 0-682.624M85.312 512a426.688 426.688 0 1 1 853.312 0 426.688 426.688 0 0 1-853.312 0M512 341.312a170.688 170.688 0 1 0 0 341.376 170.688 170.688 0 0 0 0-341.312zM256 512a256 256 0 1 1 512 0 256 256 0 0 1-512 0" />
  </svg>
);
export default SvgComponentRadio;
