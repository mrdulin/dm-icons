import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderLockedFilled = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52v235.584a277.312 277.312 0 0 0-426.688 233.728V896h-512zm928 522.624v32H1024v277.376H640V661.312h53.376v-32a138.688 138.688 0 1 1 277.312 0m-85.312 0a53.312 53.312 0 0 0-106.688 0v32h106.688z" />
  </svg>
);
export default SvgFolderLockedFilled;
