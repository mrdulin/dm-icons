import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZoomIn = ({
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
    <path d="M644.096 251.904a277.312 277.312 0 1 0-392.192 392.192 277.312 277.312 0 0 0 392.192-392.192m-452.544-60.352a362.688 362.688 0 0 1 541.312 480.96l228.032 228.032-60.352 60.352-228.032-228.032a362.752 362.752 0 0 1-480.96-541.312m299.072 85.76v128h128v85.376h-128v128h-85.312v-128h-128v-85.376h128v-128z" />
  </svg>
);
export default SvgZoomIn;
