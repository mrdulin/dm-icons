import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDataChecked = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1028 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M85.312 85.312h853.312v533.376h-85.312v-64H170.624v298.688h384v85.312H85.312zm85.312 384h682.688V170.688H170.624zm85.248-192h85.504v85.568h-85.504zm0 384h85.504v85.504h-85.504zm772.224 82.752L786.752 985.408 635.84 834.56l60.352-60.288 90.56 90.496 180.992-181.056z" />
  </svg>
);
export default SvgDataChecked;
