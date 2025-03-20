import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBondFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.5 17.5"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.765 4.405H15.69c.405 0 .733.322.733.72v7.194c0 .397-.328.72-.733.72H1.765a.726.726 0 0 1-.732-.72V5.124c0-.397.328-.72.732-.72m6.963 7.194c1.619 0 2.932-1.288 2.932-2.877 0-1.59-1.313-2.878-2.932-2.878-1.62 0-2.932 1.288-2.932 2.878 0 1.589 1.313 2.877 2.932 2.877m0-1.439c.81 0 1.466-.644 1.466-1.438 0-.795-.657-1.44-1.466-1.44-.81 0-1.466.645-1.466 1.44s.656 1.438 1.466 1.438" />
  </svg>
);
export default SvgBondFilled;
