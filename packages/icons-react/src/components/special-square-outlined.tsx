import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpecialSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 17 16"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M14.5 15v1h-12v-1zm1-1V2a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1"
    />
    <path
      fill="currentColor"
      d="M8.302 2.923c-.088.44-.165.87-.253 1.266h4.74v.736H7.885c-.11.484-.22.936-.33 1.365h5.885v.77H7.345c-.154.516-.32 1-.473 1.451h5.236v.683c-.528.814-1.354 1.639-2.486 2.453.66.242 1.298.517 1.903.803l-.44.692a28 28 0 0 0-5.104-1.925l.418-.616c.825.22 1.617.473 2.376.737 1.012-.66 1.815-1.363 2.398-2.09H5.74c.264-.703.517-1.43.748-2.189H3.56v-.77h3.146q.178-.673.341-1.364H4.31V4.19h2.904c.1-.45.187-.891.275-1.331z"
    />
  </svg>
);
export default SvgSpecialSquareOutlined;
