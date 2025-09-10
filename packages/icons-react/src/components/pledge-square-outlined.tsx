import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPledgeSquareOutlined = ({
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
      d="M9.611 8.61c-.132 1.298-.528 2.3-1.21 2.982-.682.693-1.738 1.242-3.157 1.638l-.56-.967c1.275-.308 2.22-.737 2.826-1.298.605-.572.968-1.376 1.089-2.421zM9.589 10.733c1.21.43 2.299.958 3.289 1.574l-.572.901a15.5 15.5 0 0 0-3.244-1.693z"
    />
    <path
      fill="currentColor"
      d="M12.383 4.001c-2.2.374-4.675.595-7.403.639v.813h3.455c.044-.297.076-.583.109-.869l1.045.133c-.022.253-.055.494-.088.736h3.366v.968H9.336c-.066.275-.12.54-.187.804h2.783v3.839H10.93V8.192H6.828v2.882h-1v-3.85h2.265c.066-.274.122-.54.177-.803H4.98v.837c-.055 2.464-.528 4.421-1.43 5.895l-.726-.77c.704-1.231 1.09-2.947 1.155-5.125V3.76q4.422-.05 7.887-.694z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 .8A1.2 1.2 0 0 0 .8 2v12A1.2 1.2 0 0 0 2 15.2h12a1.2 1.2 0 0 0 1.2-1.2V2A1.2 1.2 0 0 0 14 .8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPledgeSquareOutlined;
