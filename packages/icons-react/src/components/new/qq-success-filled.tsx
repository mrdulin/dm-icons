import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQqSuccessFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#clip0_321_19796)">
      <path d="M8.2.326c.097-.003 4.729-.097 4.881 5.293.006.002.725.315.528 2.05.014.013 1.387 1.267 1.716 3.176 0 0 .176 3.242-1.583.398a9.1 9.1 0 0 1-1.122 2.05c.01.004 1.297.446 1.188 1.588 0 .013.03 1.278-2.772 1.19 0 0-1.98-.153-2.574-.992h-.523c-.59.832-2.542.99-2.575.993-2.802.087-2.773-1.178-2.772-1.19-.11-1.14 1.171-1.583 1.187-1.589a9.1 9.1 0 0 1-1.122-2.05c-1.76 2.844-1.584-.398-1.584-.398C1.403 8.927 2.79 7.67 2.79 7.67c-.195-1.724.514-2.044.528-2.05C3.47.23 8.098.323 8.2.326m3.16 5.783a.596.596 0 0 0-.813 0L7.904 8.576a.1.1 0 0 1-.136 0L6.619 7.503a.597.597 0 0 0-.814.872l1.348 1.26a1 1 0 0 0 1.366 0L11.36 6.98a.597.597 0 0 0 0-.872" />
    </g>
    <defs>
      <clipPath id="clip0_321_19796">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQqSuccessFilled;
