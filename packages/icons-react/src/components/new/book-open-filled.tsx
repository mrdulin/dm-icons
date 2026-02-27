import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBookOpenFilled = ({
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
    <path d="M384 85.312H42.688V896h42.688c125.568 0 219.264 10.496 280.96 20.736 30.848 5.12 53.76 10.24 68.672 14.016a455 455 0 0 1 20.096 5.504l.768.256h.064l6.464 2.176h99.2l6.464-2.176h.128l.704-.256 3.712-1.152c3.52-.96 8.96-2.56 16.448-4.352 14.912-3.776 37.76-8.832 68.672-14.016C719.424 906.496 813.056 896 938.688 896h42.688V85.312H640a170.24 170.24 0 0 0-128 57.792 170.24 170.24 0 0 0-128-57.792m-256 725.76V170.688h256c47.168 0 85.376 38.208 85.376 85.312v595.52a972 972 0 0 0-88.96-18.944c-58.88-9.792-143.04-19.456-252.416-21.504m682.688-384.384H640v-85.376h170.688zm0 128H640v-85.376h170.688z" />
  </svg>
);
export default SvgBookOpenFilled;
