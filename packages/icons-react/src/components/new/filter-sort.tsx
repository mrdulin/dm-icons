import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterSort = ({
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
    <path d="M109.696 128h804.672l-295.68 418.88V896H405.376V546.88zm164.672 85.312 216.32 306.496v290.88h42.688v-290.88l216.32-306.496zm509.952 527.04 69.056 69.184 69.056-69.184 60.416 60.224-129.472 129.792-129.472-129.792zm-.064-30.528 69.12-69.12 69.12 69.12 60.352-60.288-129.472-129.664-129.472 129.664z" />
  </svg>
);
export default SvgFilterSort;
