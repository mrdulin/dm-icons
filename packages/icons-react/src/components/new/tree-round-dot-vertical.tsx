import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreeRoundDotVertical = ({
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
    <path d="M645.376 170.688a170.752 170.752 0 1 1 0 85.312h-48a42.69 42.69 0 0 0-42.688 42.688v426.624c0 23.616 19.072 42.688 42.688 42.688h48a170.752 170.752 0 1 1 0 85.312h-48a128 128 0 0 1-128-128V554.688h-90.752a170.752 170.752 0 1 1 0-85.376h90.752V298.688a128 128 0 0 1 128-128zM810.688 128a85.312 85.312 0 1 0 0 170.688 85.312 85.312 0 0 0 0-170.688M213.376 426.688a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624m597.312 298.624a85.312 85.312 0 1 0 0 170.688 85.312 85.312 0 0 0 0-170.688" />
  </svg>
);
export default SvgTreeRoundDotVertical;
