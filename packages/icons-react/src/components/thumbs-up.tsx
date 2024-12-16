import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbsUp = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.28 6c.799 0 1.597.3 2.096 1 .5.5.699 1.3.6 2.1l-.8 4.6C14.978 15 13.88 16 12.583 16H4V8C4.1 8 6.395.5 6.395.5c0-.3.3-.5.599-.5C8.19 0 8.99.5 8.99 2v4zM0 8h2v8H0z" />
  </svg>
);
export default SvgThumbsUp;
