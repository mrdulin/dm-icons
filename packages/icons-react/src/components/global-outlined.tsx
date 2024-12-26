import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGlobalOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 19a9 9 0 0 1 0-18h.154l.041.002.07.002h.017L10.04 1a8.93 8.93 0 0 1 6.43 2.701.5.5 0 0 1 .104.151 9 9 0 0 1-6.025 15.132l-.062.003-.195.009-.094.002-.044.002H10m-2.846-4.56-.18.061c.593 1.785 1.516 3.034 2.536 3.357L9.51 14.1c-.967.027-1.693.13-2.355.34m3.644-.33-.002 3.585c.87-.522 1.792-1.805 2.285-3.184-.657-.235-1.359-.36-2.283-.402m3.252.837-.066.181a8.5 8.5 0 0 1-1.334 2.298 7.6 7.6 0 0 0 2.4-1.579l.194-.194-.162-.097-.195-.118-.072-.044-.1-.061-.072-.044q-.305-.188-.593-.342m-8.048-.012-.089.048c-.21.114-.423.241-.649.382l-.054.035-.276.172-.112.068.208.207a7.7 7.7 0 0 0 2.186 1.49c-.483-.652-.894-1.467-1.214-2.402m-.739-4.018H2.111a7.9 7.9 0 0 0 1.714 4.077l-.08.043c.238-.125.442-.246.809-.476l.149-.093c.346-.217.672-.406.995-.568-.23-.92-.38-1.925-.435-2.983m12.626 0h-3.15a21 21 0 0 1-.347 2.813l-.039.181c.275.14.552.297.842.474l.245.15c.323.198.539.323.756.433a7.9 7.9 0 0 0 1.693-4.05m-4.21 0h-2.883l.002 2.133c1.024.043 1.821.18 2.562.437l-.008.044c.167-.87.277-1.746.327-2.614m-4.169 0H6.324c.05.913.177 1.776.363 2.564.798-.274 1.665-.41 2.822-.44zm-5.43-6.21-.087.099A7.9 7.9 0 0 0 2.067 9.63h3.176c.029-1.387.22-2.697.54-3.858a10 10 0 0 1-.765-.47l-.398-.265-.054-.036a8 8 0 0 0-.486-.295m6.718 2.01-.002 2.914h2.913a15 15 0 0 0-.353-3.145l-.06-.248c-.725.271-1.517.427-2.498.478m5.15-1.98-.09.05a9 9 0 0 0-.343.215l-.61.404a10 10 0 0 1-.631.38q.06.228.114.467c.243 1.075.366 2.213.38 3.379h3.165a7.9 7.9 0 0 0-1.986-4.895M6.758 6.228l-.056.226c-.233.96-.375 2.035-.4 3.177H9.51l-.001-2.905c-1.099-.038-1.962-.2-2.75-.498m.366-1.152-.05.139c.69.27 1.446.415 2.434.452l.001-3.525c-.937.297-1.793 1.375-2.385 2.934m3.672-2.84.001 3.42c.873-.049 1.56-.19 2.194-.436-.54-1.523-1.335-2.583-2.195-2.984m1.979.321.117.156c.41.565.768 1.253 1.056 2.039q.187-.108.379-.234c.048-.03.15-.098.257-.17l.21-.14.347-.224.025-.015a8 8 0 0 0-2.391-1.412m-5.46-.022-.082.03a7.8 7.8 0 0 0-2.165 1.237l-.18.151.05.031.205.131.057.038.295.195c.107.072.21.14.257.17q.184.12.365.227c.324-.864.73-1.614 1.198-2.21" />
  </svg>
);
export default SvgGlobalOutlined;
