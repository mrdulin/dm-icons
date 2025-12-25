import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTaxExemptOutlined = ({
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
      d="M2.029 16.472q-.345-.562-.805-1.233 2.498-.93 3.958-2.071t2.146-2.726h-4.46v-4.47l-.948.755q-.294-.41-.78-1.04Q2.809 4.43 3.982 3.156 5.106 1.94 6.003.472l1.342.302a2 2 0 0 1-.117.176q-.495.772-.755 1.123h6.197v1.074l-1.903 1.996h3.823v5.3H8.67a8 8 0 0 1-2.264 3.43q-1.551 1.4-4.377 2.599m8.805-.495q-1.09 0-1.585-.478-.487-.478-.487-1.51v-2.926h1.241v2.641q0 .604.269.856.284.25 1.023.251h2.28q.63 0 .948-.251.328-.252.436-.822.177-1.107.244-2.063.705.26 1.232.394a27 27 0 0 1-.344 2.214q-.2.898-.73 1.291-.526.403-1.509.403zM4.083 9.319h3.648l.142-.545q.21-1.057.294-2.508H4.083zm4.94 0h4.326V6.266H9.425a21 21 0 0 1-.294 2.575zm-5.25-4.176h5.392l1.878-1.98H5.651q-1.09 1.275-1.878 1.98"
    />
  </svg>
);
export default SvgTaxExemptOutlined;
