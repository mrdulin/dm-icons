import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMediaLibrary = ({
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
    <path d="M213.376 85.312h597.312v85.376H213.376zM128 234.688h768V320H128zM42.688 384h938.688v554.688H42.688zM128 469.312v384h768v-384zm288 62.72 224 129.28-224 129.344z" />
  </svg>
);
export default SvgMediaLibrary;
