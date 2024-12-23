import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShrink = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.5 8.5h-4v5a1 1 0 0 0 1 1h5v-4a2 2 0 0 0-2-2m8.281-6.28a.75.75 0 0 0-1.06 0L9.26 5.68 9.26 4l-.007-.102A.75.75 0 0 0 7.76 4v2.654c0 1.207.401 1.596 1.75 1.596H12l.102-.007a.75.75 0 0 0-.101-1.493h-1.688l3.468-3.47.073-.084a.75.75 0 0 0-.073-.976" />
  </svg>
);
export default SvgShrink;
