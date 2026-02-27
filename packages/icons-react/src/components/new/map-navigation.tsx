import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapNavigation = ({
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
    <path d="M341.376 85.312v128H768v-128h85.376v128h85.312v85.376h-85.312V640h85.312v85.376h-85.312V896H768V725.376h-85.312V640H768V298.688H341.376v170.688H256V298.688H85.376v-85.312H256v-128h85.376zM622.08 444.608l-186.688 560.064-128.384-245.056L62.08 631.232l560-186.688zm-342.784 204.16 90.944 47.68 47.616 90.88 69.312-207.808z" />
  </svg>
);
export default SvgMapNavigation;
