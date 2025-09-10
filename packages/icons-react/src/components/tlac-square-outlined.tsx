import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTlacSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 30 17"
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
      d="M25.634 5.127q.693 0 1.19.055.499.043 1.007.162L27.6 6.752l-.038.022a6.4 6.4 0 0 0-.866-.151 8 8 0 0 0-1.047-.054q-.506 0-.848.075-.33.065-.551.272-.221.206-.364.606-.133.401-.243 1.072-.117.706-.122 1.138.006.422.158.639.15.216.458.293.317.075.823.075.616 0 1.05-.033.448-.043.906-.15l.048.042-.226 1.365a12 12 0 0 1-1.061.163q-.515.053-1.208.053-.891 0-1.482-.151-.58-.152-.891-.53-.299-.39-.347-1.095-.049-.704.134-1.809.175-1.061.453-1.744t.702-1.05a2.4 2.4 0 0 1 1.065-.52q.64-.152 1.532-.153M8.66 6.688H6.68l-.893 5.395h-1.76l.892-5.395h-1.98l.242-1.463H8.9zM10.541 10.609h3.3l-.243 1.473h-5.06l1.134-6.857h1.76z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m20.756 12.05-.005.032h-1.87a20 20 0 0 0-.089-.595 30 30 0 0 0-.102-.716h-2.376q-.344.758-.623 1.311h-1.87l.003-.022 3.385-6.835h2.42zm-2.563-5.59q-.201.553-.54 1.343-.34.791-.708 1.614h1.574a55 55 0 0 1-.185-1.614 21 21 0 0 1-.097-1.343z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillOpacity={0.5}
      d="M28.125 15.334v1H1.875v-1zm.875-1v-12c0-.615-.452-1-.875-1H1.875c-.423 0-.875.385-.875 1v12c0 .614.452 1 .875 1v1c-1.036 0-1.875-.896-1.875-2v-12c0-1.105.84-2 1.875-2h26.25c1.035 0 1.875.895 1.875 2v12c0 1.104-.84 2-1.875 2v-1c.423 0 .875-.386.875-1"
    />
  </svg>
);
export default SvgTlacSquareOutlined;
