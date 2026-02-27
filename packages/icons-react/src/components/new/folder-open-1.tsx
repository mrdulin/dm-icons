import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderOpen1 = ({
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
    <path d="m1017.344 384-153.6 512H0V106.688h314.112l128 106.624h432.576V384zm-228.032 0v-85.312H411.2L283.2 192H85.312v370.624l53.632-178.56h650.368zm-689.28 426.688h700.224l102.4-341.376H202.432z" />
  </svg>
);
export default SvgFolderOpen1;
