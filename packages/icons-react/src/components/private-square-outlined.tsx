import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPrivateSquareOutlined = ({
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
      d="M10.667 3.495 8.39 11.592a61 61 0 0 0 3.08-.518 40 40 0 0 0-.968-3.245l.924-.318c.594 1.584 1.111 3.388 1.573 5.433l-1.034.264c-.088-.396-.165-.78-.253-1.154-1.43.275-2.98.527-4.642.77l-.198-1.002c.286-.077.451-.197.495-.351l2.255-8.118zM7.796 4.057q-.808.197-1.716.362v1.519h1.694v1H6.08v.352a23 23 0 0 1 1.607 1.661l-.595.88c-.396-.638-.726-1.166-1.012-1.561v4.906H5.035V8.533a11.2 11.2 0 0 1-1.628 2.574L2.935 9.92c.923-.88 1.605-1.87 2.023-2.98H3.165V5.937h1.87V4.573c-.517.066-1.056.132-1.606.176l-.22-1q2.377-.166 4.225-.661z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1.2a.8.8 0 0 0-.8.8v12a.8.8 0 0 0 .8.8h12a.8.8 0 0 0 .8-.8V2a.8.8 0 0 0-.8-.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPrivateSquareOutlined;
