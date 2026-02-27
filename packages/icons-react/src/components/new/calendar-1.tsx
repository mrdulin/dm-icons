import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendar1 = ({
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
    <path d="M341.312 42.688v128h341.312v-128H768v128h170.624v768H85.312v-768H256v-128zM170.624 256v128h682.688V256zm682.688 213.312H170.624v384h682.688zm-554.688 85.376h85.504v85.504h-85.504zm170.688 0h85.504v85.504h-85.504zm170.688 0h85.504v85.504H640zm-341.376 128h85.504v85.504h-85.504zm170.688 0h85.504v85.504h-85.504zm170.688 0h85.504v85.504H640z" />
  </svg>
);
export default SvgCalendar1;
