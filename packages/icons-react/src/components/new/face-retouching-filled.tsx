import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFaceRetouchingFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M170.496 341.12A170.688 170.688 0 0 0 317.952 84.48 469.312 469.312 0 1 1 84.544 317.888c25.28 14.848 54.656 23.296 85.952 23.296zm534.208 40.064H619.2v85.504h85.504zM443.648 599.808l-20.8-37.248-74.496 41.728 20.864 37.248a163.584 163.584 0 0 0 285.696 0l20.8-37.248-74.432-41.728-20.864 37.248a78.272 78.272 0 0 1-136.768 0M318.464 381.184v85.504h85.504v-85.504zM170.56 29.632l46.784 94.08 94.08 46.784-94.08 46.848-46.784 94.016-46.848-94.08-94.08-46.72 94.08-46.848zM888.832 888.32l-66.944 33.28 66.944 33.28 33.28 66.944 33.344-66.944 66.944-33.28-66.944-33.28-33.28-67.008-33.344 66.944z" />
  </svg>
);
export default SvgFaceRetouchingFilled;
