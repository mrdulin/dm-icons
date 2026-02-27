import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCommand = ({
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
    <path d="M277.376 192c47.104 0 85.312 38.208 85.312 85.312v85.376h-85.312a85.312 85.312 0 0 1 0-170.688M448 362.688v-85.376A170.688 170.688 0 1 0 277.376 448h85.312v128h-85.312A170.688 170.688 0 1 0 448 746.688v-85.376h128v85.376A170.688 170.688 0 1 0 746.688 576h-85.312V448h85.312A170.688 170.688 0 1 0 576 277.312v85.376zM448 448h128v128H448zm213.376-85.312v-85.376a85.312 85.312 0 1 1 85.312 85.376zm0 298.624h85.312a85.312 85.312 0 1 1-85.312 85.376zm-298.688 0v85.376a85.312 85.312 0 1 1-85.312-85.376z" />
  </svg>
);
export default SvgCommand;
