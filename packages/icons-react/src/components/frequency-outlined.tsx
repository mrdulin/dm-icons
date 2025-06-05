import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFrequencyOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M14.5 9.53a.55.55 0 0 1 .55.55v2.34c0 1.44-1.063 2.63-2.407 2.63H3.357C2.013 15.05.95 13.86.95 12.42v-2.34a.55.55 0 0 1 1.1 0v2.34c0 .858.6 1.53 1.307 1.53h9.286c.707 0 1.307-.672 1.307-1.53v-2.34a.55.55 0 0 1 .55-.55M4.538 3.853l2.244 6.89 1.88-3.238 1.177 1.48 1.803-3.97 1.316 2.788h.956v.781h-1.45l-.807-1.71-1.635 3.595-1.26-1.583-2.184 3.76-2.132-6.548-1.038 2.488H2.085v-.781h.803zM12.643.95c1.344 0 2.407 1.19 2.407 2.63v2.34a.55.55 0 0 1-1.1 0V3.58c0-.858-.6-1.53-1.307-1.53H3.357c-.707 0-1.307.672-1.307 1.53v2.34a.55.55 0 1 1-1.1 0V3.58C.95 2.14 2.013.95 3.357.95z"
      />
    </g>
  </svg>
);
export default SvgFrequencyOutlined;
