import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestionOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.117 4c.778 0 1.41.183 1.886.552.504.376.76.905.76 1.564 0 .525-.156.972-.483 1.344-.127.124-.446.376-.976.774a1.2 1.2 0 0 0-.366.393.96.96 0 0 0-.131.49H7.043c0-.414.084-.768.251-1.048.162-.294.607-.71 1.327-1.259l.128-.128c.156-.164.228-.328.228-.5 0-.235-.074-.414-.22-.55-.156-.133-.391-.204-.717-.204-.413 0-.685.102-.842.3-.14.165-.215.417-.215.766v.25H5.23v-.25c0-.779.27-1.4.804-1.84Q6.824 4 8.117 4m-.143 6q.438 0 .722.271.284.284.284.697a.92.92 0 0 1-.297.71.99.99 0 0 1-.71.27 1.02 1.02 0 0 1-.71-.283.92.92 0 0 1-.283-.697.92.92 0 0 1 .284-.697q.297-.27.71-.271"
    />
  </svg>
);
export default SvgQuestionOutlined;
