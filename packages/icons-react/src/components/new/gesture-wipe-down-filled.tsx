import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureWipeDownFilled = ({
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
    <path d="m222.885 137.472 30.208-30.144-60.352-60.352-30.208 30.144a554.88 554.88 0 0 0-61.376 711.68H21.35v85.312h243.2V661.376h-85.312v89.6a469.44 469.44 0 0 1 43.648-613.504m117.44 60.416A96.45 96.45 0 0 0 305.061 329.6L477.03 627.52l-110.144 37.568c-30.72 10.496-52.032 38.4-54.144 70.72l-4.672 72.96 278.144 114.88a117.63 117.63 0 0 0 103.68-6.848l261.824-151.168a117.63 117.63 0 0 0 56.448-125.44l-48.32-235.712a117.63 117.63 0 0 0-114.688-94.08l-179.072-.832a117.63 117.63 0 0 0-59.328 15.808l-61.12 35.2-73.6-127.36a96.45 96.45 0 0 0-131.712-35.328" />
  </svg>
);
export default SvgGestureWipeDownFilled;
