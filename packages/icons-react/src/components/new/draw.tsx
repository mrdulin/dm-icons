import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDraw = ({
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
    <path d="M930.944 148.608a119.04 119.04 0 0 1-11.712 167.68L455.424 719.232a119.04 119.04 0 0 1-49.536 25.856l-283.392 67.776a47.616 47.616 0 0 1-55.168-63.744l106.24-271.488a119.04 119.04 0 0 1 32.768-45.44L669.248 29.184a119.04 119.04 0 0 1 167.808 11.712zm-154.752 39.808.64.256a47.616 47.616 0 0 0-62.464-71.872L282.56 492.16a47.616 47.616 0 0 0 61.824 71.616zm-664.64 834.496c-26.24 0-47.552-23.424-47.552-52.288 0-28.8 21.312-52.224 47.552-52.224h800.896c26.24 0 47.552 23.424 47.552 52.224 0 28.864-21.312 52.288-47.552 52.288z" />
  </svg>
);
export default SvgDraw;
