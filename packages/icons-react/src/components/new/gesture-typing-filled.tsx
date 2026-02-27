import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureTypingFilled = ({
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
    <path d="M170.859 0a85.253 85.253 0 1 0 0 170.57 85.253 85.253 0 0 0 0-170.57M469.34 0a85.253 85.253 0 1 0 0 170.57 85.253 85.253 0 0 0 0-170.57m298.483 0a85.253 85.253 0 1 0 0 170.57 85.253 85.253 0 0 0 0-170.57M170.86 255.824a85.253 85.253 0 1 0 0 170.57 85.253 85.253 0 0 0 0-170.57m596.965 0a85.253 85.253 0 1 0 0 170.57 85.253 85.253 0 0 0 0-170.57m-298.483-29.42c-53.211 0-96.381 43.17-96.381 96.382v343.828L258.862 644.1a80.07 80.07 0 0 0-82.183 34.153l-40.485 60.758 183.298 238.364c22.193 28.972 56.665 45.92 93.184 45.92h302.065c50.589 0 95.55-32.361 111.539-80.392l75.98-228.131a117.55 117.55 0 0 0-52.252-138.657L695.49 485.938c-18.036-10.553-38.438-16.053-59.287-16.053h-70.48V322.786c0-53.211-43.17-96.318-96.382-96.318z" />
  </svg>
);
export default SvgGestureTypingFilled;
