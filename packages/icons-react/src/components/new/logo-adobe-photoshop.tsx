import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoAdobePhotoshop = ({
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
    <path d="M341.312 554.688V768H256V256h149.312a149.312 149.312 0 1 1 0 298.688zm0-213.312v128h64a64 64 0 0 0 0-128zM576 531.328c0-57.792 46.848-104.64 104.64-104.64H768V512h-87.36a19.328 19.328 0 0 0-6.144 37.632l43.264 14.464A104.64 104.64 0 0 1 684.672 768H576v-85.312h108.672a19.328 19.328 0 0 0 6.08-37.632l-43.2-14.464a104.64 104.64 0 0 1-71.552-99.2zM938.624 85.312H85.312v853.376h853.312V85.376zm-768 768v-682.56h682.688V853.44H170.624z" />
  </svg>
);
export default SvgLogoAdobePhotoshop;
