import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity11 = ({
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
    <path d="M597.312 85.312h-512v853.376h853.312v-414.72L640 424.32l-42.688 14.208V85.248zM512 467.072l-170.688 56.96V853.44H170.624V170.688H512v296.32zM426.624 853.44V585.344L640 514.368l213.312 71.04v267.968H682.624V682.688h-85.312v170.688H426.624z" />
  </svg>
);
export default SvgCity11;
