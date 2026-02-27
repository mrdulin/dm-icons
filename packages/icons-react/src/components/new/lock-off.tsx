import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLockOff = ({
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
    <path d="M512 128.064a170.69 170.69 0 0 0-170.688 170.688v128h533.312v512H149.312v-512H256v-128a256 256 0 0 1 500.224-76.8l12.8 40.704-81.408 25.6-12.8-40.704A170.69 170.69 0 0 0 512 128.128zm-277.376 384V853.44h554.688V512H234.624zm149.376 128h256v85.376H384V640z" />
  </svg>
);
export default SvgLockOff;
