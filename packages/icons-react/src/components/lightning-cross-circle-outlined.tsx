import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLightningCrossCircleOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 24"
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
      d="M15.629 0 5.4 10.971l3-.457L4.571 16.2l2.915-.371L2.57 23.6l9.943-10.229-3 .258 4.657-5.943-3.657 1zM9.143 2.571C4.114 2.571 0 6.686 0 11.714c0 3.2 1.56 5.954 4.029 7.6.182-.364.446-.75.628-1.114.093-.182.2-.279.2-.371-1.921-1.372-3.2-3.554-3.2-6.115 0-4.114 3.286-7.4 7.4-7.4.364 0 .714-.007 1.172.086L11.6 2.943c-.732-.275-1.543-.372-2.457-.372m5.114 1.543L13.343 5.6c1.921 1.371 3.2 3.554 3.2 6.114 0 4.115-3.286 7.4-7.4 7.4-.275 0-.64.007-.914-.085L6.77 20.486c.733.182 1.55.285 2.372.285 5.028 0 9.143-4.114 9.143-9.142 0-3.108-1.65-5.868-4.029-7.515"
    />
  </svg>
);
export default SvgLightningCrossCircleOutlined;
