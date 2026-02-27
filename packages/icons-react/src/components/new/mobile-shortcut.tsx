import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobileShortcut = ({
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
    <path d="M853.376 981.312H170.688V42.688h682.688V256H768V128H256v768h512V768h85.376zM554.88 810.88h-85.504v-85.504h85.504zm378.944-115.904 66.944-33.28-66.944-33.344-33.28-66.944-33.28 66.944-67.008 33.28 66.944 33.28 33.28 67.008zM685.12 652.864l-46.784-94.016L544.256 512l94.08-46.848 46.784-94.08 46.848 94.08L825.92 512l-94.08 46.784zm248.704-256.96 66.944-33.28-66.944-33.344-33.28-66.944-33.28 66.944-67.008 33.28 66.944 33.28 33.28 67.008z" />
  </svg>
);
export default SvgMobileShortcut;
