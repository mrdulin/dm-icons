import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitRepositoryFilled = ({
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
    <path d="M128 213.312A170.69 170.69 0 0 1 298.688 42.688H896v938.624H298.688A170.69 170.69 0 0 1 128 810.688zm298.88 0h-85.632v85.568h85.632zm0 128h-85.632v85.568h85.632zM320 682.688A106.688 106.688 0 0 0 320 896h490.688V682.688H512v160l-85.312-57.408-85.376 57.408v-160z" />
  </svg>
);
export default SvgGitRepositoryFilled;
