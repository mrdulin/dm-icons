import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDefaultSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
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
      d="M5.574 10.953c.044.044.1.088.155.154.241.297.505.518.78.66.319.155.792.253 1.43.275.616.011 1.342.023 2.189.023.528 0 1.079-.012 1.64-.023.55-.011.978-.033 1.275-.055l-.253 1.034h-2.518c-.595 0-1.244-.011-1.937-.022-.704-.011-1.276-.077-1.727-.187-.44-.131-.814-.396-1.144-.77-.143-.187-.275-.274-.407-.274-.22 0-.617.495-1.177 1.484l-.77-.715c.55-.89 1.045-1.452 1.485-1.672V7.752H3.11v-.968h2.464z"
    />
    <path
      fill="currentColor"
      d="M9.798 4.2h2.618v.935H9.798v.88h2.332v.913H9.798v.901h2.816c-.033 1.298-.132 2.123-.308 2.464-.198.418-.66.628-1.375.639-.154 0-.319-.022-.494-.044l-.298-.892c.264.033.485.056.672.056.362-.011.593-.122.681-.32.055-.143.088-.462.11-.967H9.798v2.859H8.786v-2.86H6.18V7.83h2.607v-.901h-2.09v-.913h2.09v-.88H6.268v-.936h2.518V3.033h1.012zM3.98 3.165a14 14 0 0 1 1.847 1.717l-.748.747c-.429-.55-1.034-1.133-1.826-1.77z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 .8A1.2 1.2 0 0 0 .8 2v12A1.2 1.2 0 0 0 2 15.2h12a1.2 1.2 0 0 0 1.2-1.2V2A1.2 1.2 0 0 0 14 .8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDefaultSquareOutlined;
