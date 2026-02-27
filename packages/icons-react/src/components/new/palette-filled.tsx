import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaletteFilled = ({
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
    <path d="M512 42.688A469.31 469.31 0 0 0 42.688 512c0 257.792 193.92 464.96 454.528 464.96 22.592 0 45.44-3.2 63.552-14.976 21.952-14.144 30.464-36.224 29.824-57.088a105.2 105.2 0 0 0-12.352-43.2 313 313 0 0 0-15.04-25.792l-1.152-1.856c-10.432-16.576-16-34.368-14.912-50.56.896-14.784 7.488-32.704 29.952-51.52 17.28-14.464 40-17.792 79.168-16.256 5.824.192 12.224.64 19.072.96 33.088 1.984 75.776 4.48 115.52-6.208 109.056-29.44 183.04-109.056 190.4-218.496C999.168 225.536 765.056 42.688 512 42.688m-96 256.128a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0m-201.408 128a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0m490.176-85.312a85.312 85.312 0 1 1 0 170.688 85.312 85.312 0 0 1 0-170.688" />
  </svg>
);
export default SvgPaletteFilled;
