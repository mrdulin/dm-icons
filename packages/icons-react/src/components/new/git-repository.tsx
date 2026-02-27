import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitRepository = ({
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
    <path d="M128 234.688a192 192 0 0 1 192-192h576v938.624H320a192 192 0 0 1-192-192zm85.312 395.008A191.1 191.1 0 0 1 320 597.312h490.688V128H320c-58.88 0-106.688 47.744-106.688 106.688zm128 52.992H320A106.688 106.688 0 0 0 320 896h490.688V682.688H597.312V879.68l-128-64-128 64zm170.688 0h-85.312v58.944l42.624-21.312L512 741.632zM341.312 213.312h85.568v85.568h-85.568zm0 128h85.568v85.568h-85.568z" />
  </svg>
);
export default SvgGitRepository;
