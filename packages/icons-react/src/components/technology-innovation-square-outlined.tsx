import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTechnologyInnovationSquareOutlined = ({
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
      d="M7.757 4.29c-.473.133-.968.243-1.496.342v1.76h1.518v.759H6.261v.539a28 28 0 0 1 1.892 1.672l-.45.67C7.13 9.363 6.656 8.835 6.26 8.45v5.027h-.792V8.338a10.8 10.8 0 0 1-1.77 2.938l-.342-.88a8.5 8.5 0 0 0 2.024-3.245H3.665v-.759h1.804V4.764c-.528.077-1.067.142-1.639.197l-.154-.748c1.43-.11 2.706-.34 3.806-.67zM12.432 9.55l.99-.166.121.77-1.111.176v3.146h-.803v-3.015l-3.432.562-.11-.77 3.542-.572V3.466h.803z"
    />
    <path
      fill="currentColor"
      d="M8.802 6.568c.803.594 1.485 1.177 2.035 1.77l-.56.562C9.78 8.339 9.098 7.745 8.24 7.107zM9.132 4.038c.792.56 1.452 1.122 1.991 1.694l-.539.55q-.726-.812-2.013-1.705z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M14.5 15.334v1h-12v-1zm1-1v-12a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1"
    />
  </svg>
);
export default SvgTechnologyInnovationSquareOutlined;
