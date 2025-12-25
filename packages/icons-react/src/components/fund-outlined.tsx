import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFundOutlined = ({
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
        d="M13 1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1.1H3a.9.9 0 0 0-.9.9v7a.9.9 0 0 0 .9.9h10a.9.9 0 0 0 .9-.9V3a.9.9 0 0 0-.9-.9m.08.96a.55.55 0 0 1 .11.77l-3 4a.55.55 0 0 1-.686.162l-3.099-1.55L3.932 9.59a.55.55 0 0 1-.689.147l-.083-.055a.55.55 0 0 1-.092-.772l2.75-3.5a.55.55 0 0 1 .678-.152l3.089 1.545L12.31 3.17a.55.55 0 0 1 .77-.11m1.17 10.84a.55.55 0 0 1 0 1.1H1.75a.55.55 0 0 1 0-1.1z"
      />
    </g>
  </svg>
);
export default SvgFundOutlined;
