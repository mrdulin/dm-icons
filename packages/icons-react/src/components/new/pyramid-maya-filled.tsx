import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPyramidMayaFilled = ({
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
    <path d="M256 85.312h512v85.376h-42.688v170.688H298.624V170.688H256V85.376zM469.312 192v85.504h85.504v-85.568h-85.504zm-256 234.688h128v554.624h-256V810.688H128v-128h42.624v-128h42.688zm384 0H426.624v554.624h170.688v-554.56zm213.312 0h-128v554.624h256V810.688H896v-128h-42.688v-128h-42.688z" />
  </svg>
);
export default SvgPyramidMayaFilled;
