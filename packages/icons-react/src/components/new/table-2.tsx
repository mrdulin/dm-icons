import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTable2 = ({
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
    <path d="M64 149.312h896v725.376H64V149.376zm85.312 85.376v128h320v-128zm405.376 0v128h320v-128zm320 213.312h-320v128h320zm0 213.376h-320v128h320zm-405.376 128v-128h-320v128zM149.312 576h320V448h-320z" />
  </svg>
);
export default SvgTable2;
