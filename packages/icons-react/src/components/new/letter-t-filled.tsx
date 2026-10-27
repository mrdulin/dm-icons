import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLetterTFilled = ({
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
    <path
      fill="currentColor"
      d="M13.43 1a1.62 1.62 0 0 1 1.622 1.621v10.81a1.62 1.62 0 0 1-1.622 1.62H2.621A1.62 1.62 0 0 1 1 13.432V2.62A1.62 1.62 0 0 1 2.621 1zM8.747 12.169l.067-.004a.54.54 0 0 0-.067-1.077h-.18V5.864l-.005-.068a.5.5 0 0 0-.027-.113h1.832v.541l.005.068a.54.54 0 0 0 1.077-.068v-1.08l-.005-.069a.54.54 0 0 0-.536-.472H5.143l-.068.004a.54.54 0 0 0-.472.536v1.081l.004.068a.54.54 0 0 0 .536.473l.068-.004a.54.54 0 0 0 .473-.537v-.54h1.832a.5.5 0 0 0-.03.18v5.224h-.181l-.068.004a.54.54 0 0 0 .068 1.077z"
    />
  </svg>
);
export default SvgLetterTFilled;
