import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiscountSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.63 8.768c-.024 1.332-.24 2.388-.624 3.18-.384.744-1.02 1.32-1.896 1.74l-.467-.732c.827-.396 1.404-.912 1.74-1.56.312-.671.467-1.548.491-2.628v-3.96h.756z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.79 4.88h2.76v.816h-2.76v2.34h2.269v5.628h-.828v-.54H9.026v.54H8.21V8.036h1.728v-5.34h.852zm-1.764 7.428h3.204V8.84H9.026z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6.038 11.048a14.4 14.4 0 0 1 1.68 1.992l-.623.612c-.396-.648-.936-1.332-1.62-2.064zM7.406 10.689h-.78V3.967H3.902v6.72H3.11V3.177h4.296z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M14 15v1H2v-1zm1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1"
    />
  </svg>
);
export default SvgDiscountSquareOutlined;
