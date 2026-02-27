import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhoneSearch = ({
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
    <path d="M170.688 42.688h682.688v426.624H768V128H256v768h277.376v85.312H170.688zm565.312 576a117.312 117.312 0 0 1 83.072 200.192l-.384.384A117.312 117.312 0 1 1 736 618.688m170.368 227.2a202.688 202.688 0 1 0-60.352 60.352l71.296 71.424 60.416-60.224z" />
  </svg>
);
export default SvgPhoneSearch;
