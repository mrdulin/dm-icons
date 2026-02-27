import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboard = ({
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
    <path d="M42.688 128h938.688v768H42.688zM128 213.312v597.376h768V213.312zM213.184 320h85.504v85.504h-85.504zm170.688 0h85.504v85.504h-85.504zm170.624 0H640v85.504h-85.504zm170.688 0h85.504v85.504h-85.504zm-512 128h85.504v85.504h-85.504zm170.688 0h85.504v85.504h-85.504zm170.624 0H640v85.504h-85.504zm170.688 0h85.504v85.504h-85.504zM213.376 640h597.312v85.312H213.376z" />
  </svg>
);
export default SvgKeyboard;
