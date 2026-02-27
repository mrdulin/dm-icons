import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonument = ({
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
    <path d="M384 42.688v42.624h256V42.688h85.312v92.224l-42.688 128V640h42.688v128h85.312v213.312H213.312V768h85.312V640h42.688V262.912l-42.688-128V42.688zm42.624 256V640h170.688V298.688zm182.656-85.376 14.208-42.688H400.512l14.208 42.688zm-225.28 512V768h256v-42.688zm341.376 128H298.624V896h426.688v-42.688z" />
  </svg>
);
export default SvgMonument;
