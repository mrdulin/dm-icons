import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFloatRateSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
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
      d="M5.53 9.204A35 35 0 0 1 4.034 13.1l-.957-.43a32 32 0 0 0 1.53-3.827zM12.13 7.61c-.561.417-1.2.868-1.914 1.374v.374h2.806v1.024h-2.806v1.561c0 .76-.374 1.144-1.11 1.144H7.63l-.286-.979a26 26 0 0 0 1.353.055c.32 0 .484-.176.484-.517v-1.264H5.959V9.358h3.223v-.725c.33-.21.781-.484 1.342-.825H6.597V6.84h5.533zM3.67 5.75a12.3 12.3 0 0 1 1.74 1.728l-.716.714c-.407-.539-.99-1.122-1.738-1.738zM12.548 4.563a8.3 8.3 0 0 1-1.001 2.056l-.902-.318c.364-.528.683-1.188.957-1.991zM7.07 4.728c.242.483.473 1.034.671 1.66l-.89.22a10 10 0 0 0-.65-1.594zM9.347 4.606c.275.583.484 1.111.638 1.584l-.858.32a13 13 0 0 0-.671-1.661zM3.814 3.177c.748.55 1.386 1.11 1.903 1.66l-.715.716c-.462-.528-1.09-1.09-1.903-1.684zM12.604 3.825c-1.595.418-3.708.638-6.348.638l-.297-.858c2.442 0 4.5-.209 6.16-.605z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1.2a.8.8 0 0 0-.8.8v12a.8.8 0 0 0 .8.8h12a.8.8 0 0 0 .8-.8V2a.8.8 0 0 0-.8-.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFloatRateSquareOutlined;
