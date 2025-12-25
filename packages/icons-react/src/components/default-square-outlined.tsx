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
      fillOpacity={0.5}
      d="M14 15v1H2v-1zm1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v1l-.204-.01A2 2 0 0 1 0 14V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-1.796 1.99L14 16v-1a1 1 0 0 0 1-1"
    />
    <path
      fill="currentColor"
      d="M5.156 11.144c.096.072.191.168.287.276.288.348.59.6.925.756.36.168.9.264 1.596.288.624.012 1.404.025 2.328.025.564 0 1.14-.013 1.728-.025a28 28 0 0 0 1.344-.048l-.204.865h-2.748c-.648 0-1.356-.013-2.112-.025-.768-.012-1.38-.084-1.86-.216-.468-.143-.888-.444-1.26-.875-.156-.204-.312-.3-.456-.3-.288 0-.757.551-1.416 1.655l-.648-.588q.954-1.512 1.692-1.836V7.45H2.636v-.792h2.52z"
    />
    <path
      fill="currentColor"
      d="M9.764 3.836h2.952v.78H9.764v1.2h2.64v.757h-2.64v1.199h3.084c-.024 1.272-.12 2.1-.276 2.473q-.288.72-1.476.756c-.144 0-.324-.013-.516-.037l-.252-.744c.264.024.48.048.672.048.48-.012.78-.18.888-.491.072-.204.108-.613.12-1.225H9.764v3.336h-.84V8.552h-2.94v-.78h2.94v-1.2H6.548v-.756h2.376v-1.2H6.08v-.78h2.844V2.48h.84zM3.44 2.684c.803.624 1.488 1.236 2.04 1.86l-.625.613c-.48-.588-1.151-1.224-2.003-1.908z"
    />
  </svg>
);
export default SvgDefaultSquareOutlined;
