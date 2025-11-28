import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineFibonacciExtensionOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17 4.5a1.5 1.5 0 0 1-2.546 1.075L5.99 8.325Q6 8.412 6 8.5a1.5 1.5 0 0 1-1 1.415v1.17c.426.151.764.489.915.915H19.5a.5.5 0 0 1 0 1H5.915A1.5 1.5 0 1 1 4 11.085v-1.17A1.5 1.5 0 1 1 5.54 7.42l8.47-2.752A1.5 1.5 0 1 1 17 4.5m-13 11a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5" />
  </svg>
);
export default SvgKlineFibonacciExtensionOutlined;
