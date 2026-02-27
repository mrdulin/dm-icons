import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitRepositoryCommits = ({
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
    <path d="M128 234.688a192 192 0 0 1 192-192h576v938.624H682.688V896h128V682.688H704v-85.376h106.688V128H320c-58.88 0-106.688 47.744-106.688 106.688v395.008A191.1 191.1 0 0 1 320 597.312h85.312v85.376H320A106.688 106.688 0 0 0 320 896h106.688v85.312H320a192 192 0 0 1-192-192zm213.312-21.376h85.568v85.568h-85.568zm0 128h85.568v85.568h-85.568zm213.376 282.24 166.976 160-59.008 61.632-65.28-62.528v198.656H512V782.72l-65.28 62.528-59.072-61.632 167.04-160z" />
  </svg>
);
export default SvgGitRepositoryCommits;
