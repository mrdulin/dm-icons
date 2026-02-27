import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrafficEventsFilled = ({
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
    <path d="M629.824 362.688 512 81.664l-117.824 280.96H629.76zM665.6 448H358.4l-66.752 159.168h440.704zm102.528 244.48h-512.32l-49.536 118.144H128V896h768v-85.376h-78.272L768.192 692.48z" />
  </svg>
);
export default SvgTrafficEventsFilled;
