import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFocusFilled = ({
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
    <path d="M554.688 173.312V42.688h-85.312v130.56a341.504 341.504 0 0 0-296.064 296.064H42.688v85.312h130.624a341.504 341.504 0 0 0 296.064 296.064v130.624h85.312V850.688a341.504 341.504 0 0 0 296-296.064h130.688v-85.312H850.688a341.504 341.504 0 0 0-296-296M512 426.624a85.312 85.312 0 1 1 0 170.688 85.312 85.312 0 0 1 0-170.688" />
  </svg>
);
export default SvgFocusFilled;
