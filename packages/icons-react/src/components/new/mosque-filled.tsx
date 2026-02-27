import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMosqueFilled = ({
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
    <path d="m554.816 85.44-85.376-.192-.064 46.272c-107.264 17.92-192 102.656-209.92 209.92h504.96a256.19 256.19 0 0 0-209.728-209.92zm383.808 341.248H85.312V512H128v426.688h213.312v-256h341.312v256H896V512h42.624zm-512 512V768h170.688v170.688z" />
  </svg>
);
export default SvgMosqueFilled;
