import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpecialSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M7.917 3.044c-.077.407-.154.804-.22 1.178h4.598V5.2H7.488c-.088.385-.176.76-.264 1.112h5.72v1H6.95c-.132.44-.253.847-.385 1.232h5.093v.902c-.506.748-1.287 1.496-2.343 2.255q.891.33 1.716.694l-.572.9a28.5 28.5 0 0 0-5.038-1.824l.55-.815c.77.198 1.507.408 2.21.65.936-.594 1.674-1.189 2.213-1.805H5.068c.264-.704.506-1.43.737-2.188H3V6.312h3.09c.089-.374.188-.738.276-1.112H3.748v-.978h2.838c.088-.418.165-.848.253-1.266z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1.2a.8.8 0 0 0-.8.8v12a.8.8 0 0 0 .8.8h12a.8.8 0 0 0 .8-.8V2a.8.8 0 0 0-.8-.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpecialSquareOutlined;
