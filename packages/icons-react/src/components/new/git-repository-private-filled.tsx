import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitRepositoryPrivateFilled = ({
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
    <path d="M512 42.688A277.31 277.31 0 0 0 234.688 320v64H128v597.312h768V384H789.312v-64A277.31 277.31 0 0 0 512 42.688M704 320v64H320v-64a192 192 0 0 1 384 0M298.688 533.504h85.504V640h-85.504zm0 170.496h85.504v106.88h-85.504z" />
  </svg>
);
export default SvgGitRepositoryPrivateFilled;
