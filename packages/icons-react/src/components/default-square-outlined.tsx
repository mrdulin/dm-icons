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
    viewBox="0 0 17 17"
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
      d="M5.953 11.353c.088.066.176.154.264.253.264.319.539.55.847.693.33.154.825.242 1.463.264a78.159 78.159 0 0 0 3.718 0c.528-.011.946-.022 1.232-.044l-.187.792h-2.519c-.594 0-1.243-.011-1.936-.022-.703-.011-1.265-.077-1.705-.198-.429-.132-.814-.407-1.155-.803-.143-.187-.286-.275-.418-.275-.264 0-.693.506-1.298 1.518l-.593-.54q.874-1.385 1.55-1.682V7.965H3.643V7.24h2.31z"
    />
    <path
      fill="currentColor"
      d="M10.177 4.654h2.706v.715h-2.706v1.1h2.42v.693h-2.42v1.1h2.827c-.022 1.166-.11 1.925-.252 2.266q-.265.66-1.354.693c-.132 0-.297-.011-.473-.033l-.231-.683c.242.022.44.045.616.045.44-.01.715-.165.814-.45.066-.188.099-.562.11-1.123h-2.057v3.058h-.77V8.977H6.712v-.715h2.695v-1.1H7.229v-.693h2.178v-1.1H6.8v-.715h2.607V3.41h.77zM4.38 3.598c.737.572 1.365 1.133 1.87 1.705l-.572.56c-.44-.538-1.056-1.121-1.837-1.748z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M14.5 15.334v1h-12v-1zm1-1v-12a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1"
    />
  </svg>
);
export default SvgDefaultSquareOutlined;
