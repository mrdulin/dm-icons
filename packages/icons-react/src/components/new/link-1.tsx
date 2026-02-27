import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLink1 = ({
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
    <path d="M843.84 210.304a149.31 149.31 0 0 0-211.2 0L542.208 300.8l-60.288-60.352 90.496-90.496a234.688 234.688 0 0 1 331.84 331.904L768.448 617.6a234.69 234.69 0 0 1-331.84 0L371.2 552.192l60.352-60.352 65.344 65.408a149.31 149.31 0 0 0 211.2 0L843.84 421.504a149.31 149.31 0 0 0 0-211.2m-316.8 256.448a149.31 149.31 0 0 0-211.2 0L180.16 602.496a149.312 149.312 0 0 0 211.2 211.2l90.432-90.496 60.288 60.352-90.496 90.496A234.688 234.688 0 1 1 119.808 542.08L255.552 406.4a234.69 234.69 0 0 1 331.904 0l55.296 55.232-60.352 60.352-55.296-55.296z" />
  </svg>
);
export default SvgLink1;
