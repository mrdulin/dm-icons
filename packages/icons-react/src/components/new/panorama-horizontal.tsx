import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPanoramaHorizontal = ({
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
    <path d="M981.376 134.656v754.688l-54.912-16.448h-.128l-.32-.128-1.664-.512-6.72-1.92a1808 1808 0 0 0-120.64-28.48C718.464 826.112 614.848 810.688 512 810.688c-102.784 0-206.4 15.424-284.928 31.168a1809 1809 0 0 0-120.64 28.48l-6.72 1.92-1.664.512-.448.128-54.912 16.448V134.656L97.6 151.104h.064l.384.192 1.664.448 6.72 1.92a1801 1801 0 0 0 120.64 28.48C305.6 197.888 409.216 213.312 512 213.312c102.848 0 206.464-15.424 284.992-31.168a1800 1800 0 0 0 127.36-30.4l1.664-.448.32-.128h.064zM896 247.488c-22.08 5.504-50.112 11.904-82.304 18.368-81.472 16.256-191.168 32.832-301.696 32.832s-220.16-16.576-301.696-32.832c-32.192-6.4-60.16-12.864-82.304-18.368v529.024a1978 1978 0 0 1 82.304-18.368c81.472-16.256 191.168-32.832 301.696-32.832s220.224 16.576 301.696 32.832c32.192 6.4 60.16 12.864 82.304 18.368z" />
  </svg>
);
export default SvgPanoramaHorizontal;
