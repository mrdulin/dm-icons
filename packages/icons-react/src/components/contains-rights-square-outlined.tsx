import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgContainsRightsSquareOutlined = ({
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
      fillRule="evenodd"
      d="M12.705 4.058c-.348 2.244-1.033 4.176-2.04 5.784a13.2 13.2 0 0 0 2.903 2.94l-.588.696c-1.128-.888-2.075-1.86-2.82-2.904-.84 1.14-1.871 2.1-3.083 2.892l-.553-.696c1.26-.84 2.304-1.824 3.12-2.964C8.576 8.078 7.953 6.17 7.784 4.07h-.48v-.828h5.4zm-4.08.012c.143 1.848.647 3.504 1.523 4.968.864-1.44 1.429-3.096 1.717-4.968z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M5.432 4.862h1.584v.828H5.432v.684c.6.575 1.212 1.236 1.824 1.956l-.492.732a30 30 0 0 0-1.332-1.8v6.204h-.864V7.238a13 13 0 0 1-1.752 3.432l-.384-.972A10.65 10.65 0 0 0 4.544 5.69h-1.86v-.828h1.884v-2.34h.864z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M14 15v1H2v-1zm1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1"
    />
  </svg>
);
export default SvgContainsRightsSquareOutlined;
