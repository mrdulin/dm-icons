import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPersonalInformationFilled = ({
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
    <path d="M636.16 42.688H128v938.624h768V302.528zM640 448a128 128 0 1 1-256 0 128 128 0 0 1 256 0M256 810.688A170.69 170.69 0 0 1 426.688 640h170.624A170.69 170.69 0 0 1 768 810.688v42.624H256z" />
  </svg>
);
export default SvgPersonalInformationFilled;
