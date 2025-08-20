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
      d="M9.611 8.61c-.132 1.298-.528 2.3-1.21 2.982-.682.693-1.738 1.242-3.157 1.638l-.56-.967c1.275-.308 2.222-.737 2.827-1.298.605-.572.968-1.376 1.089-2.421zM9.59 10.733c1.21.43 2.3.958 3.289 1.574l-.572.901a15.5 15.5 0 0 0-3.245-1.693z"
    />
    <path
      fill="currentColor"
      d="M12.384 4.001c-2.2.374-4.676.595-7.404.639v.813h3.455c.044-.297.077-.583.11-.869l1.045.133a15 15 0 0 1-.088.736h3.365v.968h-3.53c-.066.275-.122.54-.188.804h2.784v3.839h-1.001V8.192H6.828v2.882h-1v-3.85h2.266c.066-.274.12-.54.176-.803H4.98v.837c-.055 2.463-.527 4.421-1.43 5.895l-.726-.77c.704-1.231 1.09-2.948 1.155-5.125V3.76q4.422-.05 7.887-.694z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1.2a.8.8 0 0 0-.8.8v12a.8.8 0 0 0 .8.8h12a.8.8 0 0 0 .8-.8V2a.8.8 0 0 0-.8-.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPledgeSquareOutlined;
