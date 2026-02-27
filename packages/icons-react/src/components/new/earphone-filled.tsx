import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEarphoneFilled = ({
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
    <path d="M512 170.688c-188.224 0-341.376 153.792-341.376 344.128v39.872H256a128 128 0 0 1 128 128V768a128 128 0 0 1-128 128H85.312V514.816c0-236.864 190.72-429.44 426.688-429.44 235.904 0 426.624 192.576 426.624 429.44V896H768a128 128 0 0 1-128-128v-85.312a128 128 0 0 1 128-128h85.312v-39.872c0-190.336-153.088-344.128-341.312-344.128" />
  </svg>
);
export default SvgEarphoneFilled;
