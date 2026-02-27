import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFunctionCurve = ({
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
    <path d="M341.312 85.312V640h375.04c5.056-11.008 9.856-22.4 14.528-34.112 50.88-128.64 74.24-287.552 79.808-394.752l2.24-42.624 85.184 4.48-2.176 42.56c-5.824 112.64-30.272 281.6-85.76 421.76-.32.896-.64 1.792-1.088 2.688h129.536v85.376H768.64a433.2 433.2 0 0 1-71.296 95.68c-49.472 48.768-112.192 79.36-188.16 74.432-66.944-4.352-122.24-32.96-167.872-75.328v118.528H256V725.376H85.312V640h136.64a851 851 0 0 1-8.128-19.456C158.4 482.816 133.888 321.92 128.064 215.68l-2.368-42.56 85.184-4.736 2.368 42.624c3.968 71.68 17.024 169.28 42.752 265.344V85.312zm28.16 640c40.896 50.688 89.216 81.344 145.28 85.056 46.912 3.008 86.912-14.784 122.688-50.112 10.432-10.24 20.416-21.952 29.952-34.88H369.408z" />
  </svg>
);
export default SvgFunctionCurve;
