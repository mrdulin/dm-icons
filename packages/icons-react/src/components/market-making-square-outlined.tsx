import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMarketMakingSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 27 16"
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
      d="M5.894 3.54q-.33 1.135-.859 2.189v7.512H4.023v-5.82c-.274.375-.572.75-.88 1.112l-.341-1.122C3.77 6.18 4.496 4.738 4.958 3.088z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.887 3.363c-.066.462-.143.902-.23 1.309h2.287v.98h-.45c-.045 1.902-.342 3.498-.903 4.785.407.77.925 1.44 1.552 2.035l-.727.692a8.9 8.9 0 0 1-1.342-1.737 6.4 6.4 0 0 1-1.682 1.793l-.606-.792c.737-.495 1.331-1.166 1.782-2.002-.407-.924-.682-1.948-.836-3.059a5.6 5.6 0 0 1-.43.715l-.604-.748C9.292 6.3 9.7 4.925 9.92 3.188zm-.528 2.453c.077 1.276.308 2.432.693 3.444.33-1.034.506-2.234.528-3.609h-1.177z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18.994 2.956c.165.385.319.814.473 1.276h4.41v1.001H19.5v1.2h3.575v4.08c0 .704-.374 1.067-1.1 1.067h-1.11l-.264-.99 1.044.056c.264 0 .396-.133.396-.375V7.435H19.5v5.763h-1.056V7.434h-2.409v4.223h-1.023V6.433h3.432v-1.2h-4.378v-1H18.4a10 10 0 0 0-.528-1.1z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.796 5.146h1.342v.957H7.796v1.935h1.166v3.96h-2.31v.65h-.98v-4.61h1.134V6.103h-1.33v-.957h1.33V3.209h.99zm-1.144 5.939h1.32V8.962h-1.32z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M25.204.01A2 2 0 0 1 27 2v12a2 2 0 0 1-1.796 1.99L25 16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h23zM2 .8A1.2 1.2 0 0 0 .8 2v12A1.2 1.2 0 0 0 2 15.2h23a1.2 1.2 0 0 0 1.2-1.2V2A1.2 1.2 0 0 0 25 .8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMarketMakingSquareOutlined;
