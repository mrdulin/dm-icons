import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderUnlockedFilled = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52v235.584a277.312 277.312 0 0 0-426.688 233.728V896h-512zm736 522.624a53.312 53.312 0 0 1 90.88-37.76l30.336 30.08 60.16-60.608-30.272-30.08a138.688 138.688 0 0 0-236.416 98.368v32H640v277.376h384V661.312H778.688z" />
  </svg>
);
export default SvgFolderUnlockedFilled;
