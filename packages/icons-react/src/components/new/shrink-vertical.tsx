import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShrinkVertical = ({
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
    <path d="M554.688 64v216.96l106.624-106.624 60.352 60.352L512 444.352 302.336 234.688l60.352-60.352L469.312 280.96V64zM896 554.688H128v-85.376h768zm-384 24.96 209.664 209.664-60.352 60.352L554.688 743.04V960h-85.376V743.04L362.688 849.664l-60.352-60.352z" />
  </svg>
);
export default SvgShrinkVertical;
