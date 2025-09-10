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
    viewBox="0 0 31 17"
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
      d="M7.168 3.477c-.11.363-.22.715-.342 1.066h5.633v.771h-5.93A12.7 12.7 0 0 1 5.022 7.92v5.6h-.77V8.867c-.373.407-.759.792-1.177 1.166l-.494-.627a12.2 12.2 0 0 0 3.08-4.092H2.986v-.77H5.98c.143-.385.275-.77.385-1.167z"
    />
    <path
      fill="currentColor"
      d="M11.876 7.393a16 16 0 0 1-2.014 1.573v.693h2.75v.758h-2.75v2.08c0 .649-.33.979-.978.98H7.509l-.21-.749c.397.011.815.021 1.265.021.33 0 .506-.175.506-.505v-1.826H5.88v-.76h3.19V8.637c.627-.352 1.221-.759 1.793-1.243H6.728v-.737h5.148z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.48 10.835h-3.455v.617h3.73v.528h-3.73v.648h4.533v.617h-9.834v-.617h4.51v-.648h-3.685v-.528h3.684v-.617h-3.41V8.031h7.657zm-6.897-.494h2.65V9.67h-2.65zm3.442 0h2.696V9.67h-2.696zm-3.442-1.133h2.65v-.682h-2.65zm3.442 0h2.696v-.682h-2.696z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M25.967 11.1a.64.64 0 0 1 .67.649.64.64 0 0 1-.187.473.7.7 0 0 1-.483.187.63.63 0 0 1-.462-.187.64.64 0 0 1-.198-.473.6.6 0 0 1 .198-.462.59.59 0 0 1 .462-.187M26.318 10.296h-.681l-.176-5.74h1.022zM23.568 7.481h-9.855v-.594h9.855z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.249 6.315h-7.184V3.598h7.184zm-6.413-.473h5.643v-.65h-5.643zm0-1.122h5.643v-.638h-5.643z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M28.5 15.334v1h-26v-1zm1-1v-12a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1l-.204-.011A2 2 0 0 1 .5 14.333v-12a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v12a2 2 0 0 1-1.796 1.99l-.204.01v-1a1 1 0 0 0 1-1"
    />
  </svg>
);
export default SvgStockSquareOutlined;
