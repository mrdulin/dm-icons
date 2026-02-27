import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCurrencyExchange = ({
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
    <path d="M874.624 248.96A448 448 0 0 0 66.432 464.896l-4.48 42.432 84.928 8.896 4.48-42.432A362.752 362.752 0 0 1 819.648 320H746.56v85.312H960V106.688h-85.376zM469.312 256v42.688a128 128 0 1 0 0 256h85.312a42.688 42.688 0 1 1 0 85.312h-192v85.312h106.688V768h85.312v-42.688a128 128 0 1 0 0-256h-85.312a42.688 42.688 0 1 1 0-85.312h192v-85.312H554.624V256zM877.12 507.776l-4.48 42.432A362.688 362.688 0 0 1 204.224 704h73.088v-85.312H64v298.624h85.312V775.04a448 448 0 0 0 808.192-215.936l4.48-42.432z" />
  </svg>
);
export default SvgCurrencyExchange;
