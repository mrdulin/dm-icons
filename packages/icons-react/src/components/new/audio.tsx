import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAudio = ({
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
    <path d="M128 42.688h768v938.624H128zM213.312 128v768h597.376V128zm255.872 85.12h85.504v85.568H469.12V213.12zM512 469.376a128 128 0 1 0 0 256 128 128 0 0 0 0-256m-213.312 128a213.312 213.312 0 1 1 426.624 0 213.312 213.312 0 0 1-426.624 0" />
  </svg>
);
export default SvgAudio;
