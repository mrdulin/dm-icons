import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrightness1Filled = ({
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
    <path d="M660.928 152.576 512 3.648 363.136 152.576h-210.56v210.56L3.712 512l148.864 148.864v210.56h210.56L512 1020.352l148.928-148.928h210.56v-210.56L1020.352 512 871.488 363.136v-210.56zM512 725.376c-26.88 0-52.608-4.992-76.288-14.08A297.6 297.6 0 0 0 511.936 512a297.6 297.6 0 0 0-76.16-199.296A213.312 213.312 0 1 1 512 725.312z" />
  </svg>
);
export default SvgBrightness1Filled;
