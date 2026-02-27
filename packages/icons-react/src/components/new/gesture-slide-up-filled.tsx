import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureSlideUpFilled = ({
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
    <path d="m264.474 64.64-243.2-.128v85.376h79.872a554.88 554.88 0 0 0 61.312 711.68l30.208 30.208 60.352-60.352-30.208-30.208a469.44 469.44 0 0 1-43.584-613.44v89.6h85.312V64.64zM340.25 283.2a96.45 96.45 0 0 0-35.264 131.712l171.968 297.984-110.144 37.568c-30.72 10.432-52.032 38.4-54.144 70.72l-4.672 72.96 278.144 114.816a117.63 117.63 0 0 0 103.68-6.848l261.824-151.104a117.63 117.63 0 0 0 56.448-125.44l-48.32-235.776a117.63 117.63 0 0 0-114.688-94.08l-179.072-.768a117.63 117.63 0 0 0-59.328 15.744l-61.12 35.264-73.6-127.424A96.45 96.45 0 0 0 340.25 283.2" />
  </svg>
);
export default SvgGestureSlideUpFilled;
