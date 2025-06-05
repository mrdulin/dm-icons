import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnglishLanguageCodeOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M6.17 3.5v1.332H1.833v2.496H5.25v1.288H1.833v2.546H6.17V12.5H0v-9zm2.53 0q.122 0 .203.01a.49.49 0 0 1 .27.118q.061.053.136.14l5.135 6.018a6 6 0 0 1-.037-.426 8 8 0 0 1-.01-.389V3.5H16v9h-.94a.9.9 0 0 1-.359-.062.8.8 0 0 1-.277-.224L9.309 6.22a8 8 0 0 1 .04.753V12.5H7.747v-9z"
      />
    </g>
  </svg>
);
export default SvgEnglishLanguageCodeOutlined;
