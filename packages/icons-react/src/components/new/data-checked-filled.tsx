import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDataCheckedFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1088 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M85.312 85.312h853.312v384H85.312zm256.064 149.376h-85.504v85.504h85.504zm-256.064 320h853.312v68.224a234.688 234.688 0 0 0-315.712 315.776h-537.6zM341.376 704h-85.504v85.504h85.504zM786.56 985.6l241.344-241.28-60.288-60.352L786.56 864.96l-90.496-90.496-60.352 60.352z" />
  </svg>
);
export default SvgDataCheckedFilled;
