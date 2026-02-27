import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChimney = ({
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
    <path d="M73.344 85.312h493.312L512.512 302.08l15.232 175.68L640 421.632l298.688 149.312v367.744H82.176l45.44-636.288L73.344 85.376zm137.088 256-36.608 512h167.552V571.008l104.32-52.096-15.488-177.472H210.432zM436.032 256l21.312-85.312H182.656L204.032 256zm-9.344 597.376h170.688v-128h85.312v128h170.688V623.68L640 517.056 426.688 623.744z" />
  </svg>
);
export default SvgChimney;
