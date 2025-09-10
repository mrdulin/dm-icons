import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTaxExemptSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 17 17"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.735 3.554q-.264.429-.561.824h3.795v.606a12 12 0 0 1-1.364 1.452H12.3v3.333H9.792v2.244c0 .363.154.55.473.55h1.771c.198 0 .33-.077.418-.209.11-.176.176-.671.21-1.496l.758.242c-.077 1.056-.21 1.705-.407 1.936-.176.198-.451.297-.836.297h-2.156q-1.022 0-1.023-1.155V9.77h-.572c-.077.209-.165.407-.253.604-.594 1.277-1.969 2.322-4.103 3.147l-.506-.627c1.914-.704 3.19-1.595 3.806-2.651.077-.154.143-.319.21-.473H4.896V6.667q-.429.313-.858.594l-.506-.605a10.5 10.5 0 0 0 3.41-3.29zM5.667 9.021h2.156c.143-.56.231-1.177.253-1.848H5.667zm3.201-1.848a9.5 9.5 0 0 1-.22 1.848h2.893V7.173zM6.591 5.105c-.43.484-.89.924-1.397 1.331h3.399c.462-.385.903-.825 1.343-1.331z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M14.5 15.334v1h-12v-1zm1-1v-12a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1"
    />
  </svg>
);
export default SvgTaxExemptSquareOutlined;
