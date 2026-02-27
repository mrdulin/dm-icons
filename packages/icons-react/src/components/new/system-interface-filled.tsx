import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemInterfaceFilled = ({
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
    <path d="M981.376 42.688H42.688v234.624h938.688zM42.688 362.432v618.88h938.688v-618.88zM213.376 512h85.504v85.504h-85.504zM384 512h85.504v85.504H384zm170.688 0h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgSystemInterfaceFilled;
