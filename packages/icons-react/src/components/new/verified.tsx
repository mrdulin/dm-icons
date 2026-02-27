import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVerified = ({
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
    <path d="M512 7.936 666.24 139.52l202.112 16.128L884.48 357.76 1016.064 512l-131.52 154.304-16.128 202.112-202.112 16.128L512 1016.064 357.696 884.48l-202.176-16-16.128-202.112L7.936 512l131.52-154.304 16.128-202.112 202.112-16.128 154.24-131.52zm0 112.128L392 222.336 234.88 234.88 222.336 392 120.064 512l102.272 120 12.544 157.12L392 801.664l120 102.272 120-102.272 157.12-12.544L801.664 632l102.272-120-102.272-120-12.544-157.12L632 222.336zm252.352 285.248-295.04 295.04L280.96 512l60.352-60.352 128 128L704 345.024z" />
  </svg>
);
export default SvgVerified;
