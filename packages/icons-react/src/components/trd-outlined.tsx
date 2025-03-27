import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrdOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 10"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.956 9.5h-1.4V2.135H.036V.934h6.44v1.2h-2.52zm5.232-4.582h.973q.978 0 1.418-.363.44-.364.44-1.078 0-.727-.475-1.043-.474-.317-1.43-.317h-.926zm0 1.16V9.5h-1.4V.934h2.42q1.658 0 2.455.62.797.622.797 1.876 0 1.6-1.664 2.279l2.42 3.791h-1.594l-2.05-3.422zm13.237-.943q0 2.121-1.178 3.243T17.854 9.5h-2.396V.934h2.648q2.046 0 3.182 1.101 1.137 1.102 1.137 3.1m-1.477.047q0-3.077-2.877-3.077h-1.213v6.217h.996q3.094 0 3.094-3.14" />
  </svg>
);
export default SvgTrdOutlined;
