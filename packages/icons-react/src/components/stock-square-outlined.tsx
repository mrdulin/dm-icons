import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStockSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 16"
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
      d="M7.8 3.11c-.088.32-.187.639-.286.947h5.489v1.022H7.106A13 13 0 0 1 5.61 7.664v5.556H4.588V8.886c-.286.308-.584.593-.892.868l-.648-.836C4.302 7.807 5.28 6.531 5.974 5.079H3.499V4.057h2.903c.132-.363.242-.716.341-1.068z"
    />
    <path
      fill="currentColor"
      d="M12.441 7.18a16 16 0 0 1-1.958 1.573v.474h2.662v1.011h-2.662v1.793c0 .76-.374 1.145-1.122 1.145H7.998l-.275-.99q.56.032 1.22.033c.33 0 .506-.177.506-.518v-1.463H6.348V9.227h3.101v-.892q.875-.495 1.684-1.154h-3.95v-.957h5.258z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M23.067 10.535h-3.42v.485h3.64v.67h-3.64v.517h4.444v.792h-9.9v-.792h4.421v-.517h-3.596v-.67h3.596v-.485h-3.377v-2.86h7.832zm-6.841-.616h2.386v-.527h-2.386zm3.42 0h2.431v-.527h-2.43zm-3.42-1.1h2.386v-.528h-2.386zm3.42 0h2.431v-.528h-2.43z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M26.467 10.502c.23 0 .429.067.583.22a.73.73 0 0 1 .23.561.77.77 0 0 1-.23.572.87.87 0 0 1-.583.22.76.76 0 0 1-.562-.23.74.74 0 0 1-.242-.562c0-.23.078-.417.242-.56a.76.76 0 0 1 .562-.221M26.906 9.854h-.869l-.253-5.632h1.375zM24.09 7.225h-9.9v-.748h9.9z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.837 6.015h-7.36V3.22h7.36zm-6.358-.595h5.357v-.506h-5.357zm0-1.1h5.357v-.495h-5.357z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M30 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2l-.204-.01A2 2 0 0 1 0 14V2A2 2 0 0 1 1.796.01L2 0zM2 .8A1.2 1.2 0 0 0 .8 2v12A1.2 1.2 0 0 0 2 15.2h28a1.2 1.2 0 0 0 1.2-1.2V2A1.2 1.2 0 0 0 30 .8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStockSquareOutlined;
