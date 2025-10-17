import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmojiFaceCelebrationColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    viewBox="0 0 51 50"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={25.578} cy={25} r={19} fill="url(#a)" />
    <circle cx={25.578} cy={25} r={19} fill="url(#b)" />
    <circle cx={25.578} cy={25} r={17} fill="url(#c)" />
    <path fill="url(#d)" d="M3.828 21.5h35V32h-35z" />
    <ellipse cx={11.578} cy={38.5} fill="url(#e)" rx={5} ry={5.5} />
    <path fill="url(#f)" d="M5.578 32h11.5v11.5h-11.5z" />
    <ellipse
      cx={5}
      cy={5.5}
      fill="url(#g)"
      rx={5}
      ry={5.5}
      transform="matrix(-1 0 0 1 43.578 33)"
    />
    <path
      fill="url(#h)"
      d="M0 0h11.5v11.5H0z"
      transform="matrix(-1 0 0 1 44.578 32)"
    />
    <path
      fill="#6C4325"
      d="M25.645 23.96a1 1 0 0 1 1 1c0 2.544-2.43 4.29-5 4.29s-5-1.746-5-4.29a1 1 0 0 1 2 0c0 1.09 1.151 2.29 3 2.29s3-1.199 3-2.29a1 1 0 0 1 1-1m-14.211-5.802a1 1 0 0 1 1.341-.447l4 2a1.001 1.001 0 0 1 .05 1.762l-3.5 2a1 1 0 0 1-.993-1.736l1.877-1.073-2.328-1.164a1 1 0 0 1-.447-1.342m19.947-.447a1 1 0 0 1 .894 1.789l-2.328 1.164 1.877 1.073a1 1 0 1 1-.992 1.736l-3.5-2a1.001 1.001 0 0 1 .049-1.762z"
    />
    <path
      fill="url(#i)"
      d="M7.02 6.883h1.791v2.724H7.02z"
      transform="rotate(-29.523 7.02 6.883)"
    />
    <path
      fill="url(#j)"
      d="M41.273 29.926h1.791v2.724h-1.791z"
      transform="rotate(-29.523 41.273 29.926)"
    />
    <path
      fill="url(#k)"
      d="M46.171 16.569h1.791v2.724h-1.791z"
      transform="rotate(30 46.17 16.569)"
    />
    <path
      fill="url(#l)"
      d="m43.174.162-.826 16.87c-2.224-.086-5.519-1.68-8.398-3.697-2.879-2.016-6.028-4.82-6.347-6.627.009.006 15.571-6.546 15.571-6.546"
    />
    <mask
      id="n"
      width={17}
      height={18}
      x={27}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="url(#m)"
        d="m43.174.162-.826 16.87c-2.224-.086-5.519-1.68-8.398-3.697-2.879-2.016-6.028-4.82-6.347-6.627.009.006 15.571-6.546 15.571-6.546"
      />
    </mask>
    <g strokeWidth={1.788} mask="url(#n)">
      <path
        stroke="url(#o)"
        d="M47.265 12.402c-1.69 2.413-6.85 1.716-11.524-1.557C31.066 7.572 28.647 2.962 30.337.55"
      />
      <path
        stroke="url(#p)"
        d="M50.117 8.327c-1.69 2.414-6.85 1.717-11.524-1.556S31.5-1.112 33.19-3.526"
      />
      <path
        stroke="url(#q)"
        d="M52.654 4.705c-1.69 2.413-6.849 1.716-11.523-1.557-4.675-3.273-7.094-7.883-5.404-10.296"
      />
    </g>
    <path
      fill="url(#r)"
      d="M4.961 32.296h1.791v2.724H4.961z"
      transform="rotate(25.453 4.96 32.296)"
    />
    <defs>
      <linearGradient
        id="c"
        x1={25.578}
        x2={25.578}
        y1={8}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEE2AD" />
        <stop offset={1} stopColor="#FEE2AD" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="i"
        x1={7.915}
        x2={7.915}
        y1={6.883}
        y2={9.606}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8CDBF9" />
        <stop offset={1} stopColor="#468DDC" />
      </linearGradient>
      <linearGradient
        id="j"
        x1={42.168}
        x2={42.168}
        y1={29.926}
        y2={32.65}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8CDBF9" />
        <stop offset={1} stopColor="#468DDC" />
      </linearGradient>
      <linearGradient
        id="k"
        x1={47.066}
        x2={47.066}
        y1={16.569}
        y2={19.293}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFABAB" />
        <stop offset={1} stopColor="#FF4C4B" />
      </linearGradient>
      <linearGradient
        id="l"
        x1={48.977}
        x2={33.19}
        y1={30.474}
        y2={-3.382}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.613} stopColor="#134BFE" />
        <stop offset={0.87} stopColor="#7CC9F5" />
      </linearGradient>
      <linearGradient
        id="m"
        x1={48.977}
        x2={33.19}
        y1={30.474}
        y2={-3.382}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.613} stopColor="#134BFE" />
        <stop offset={0.87} stopColor="#7CC9F5" />
      </linearGradient>
      <linearGradient
        id="o"
        x1={28.807}
        x2={45.735}
        y1={2.734}
        y2={14.587}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B5E2FB" />
        <stop offset={1} stopColor="#227CFD" />
      </linearGradient>
      <linearGradient
        id="p"
        x1={31.66}
        x2={48.587}
        y1={-1.341}
        y2={10.512}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B5E2FB" />
        <stop offset={1} stopColor="#227CFD" />
      </linearGradient>
      <linearGradient
        id="q"
        x1={34.197}
        x2={51.124}
        y1={-4.963}
        y2={6.889}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B5E2FB" />
        <stop offset={1} stopColor="#227CFD" />
      </linearGradient>
      <linearGradient
        id="r"
        x1={5.119}
        x2={6.735}
        y1={32.487}
        y2={35.028}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE8F2" />
        <stop offset={1} stopColor="#FD6BAD" />
      </linearGradient>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(78.559 2.853 16.898)scale(33.9241)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA9F" />
        <stop offset={0.123} stopColor="#FFE380" />
        <stop offset={0.416} stopColor="#FFD250" />
        <stop offset={0.644} stopColor="#FFC122" />
        <stop offset={1} stopColor="#FFB422" />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(78.559 2.853 16.898)scale(33.9241)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.557} stopColor="#E35D12" stopOpacity={0} />
        <stop offset={1} stopColor="#FF24F6" stopOpacity={0.3} />
      </radialGradient>
      <radialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 6.5 -5.90909 0 11.578 37.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD217" />
        <stop offset={1} stopColor="#FBBF56" />
      </radialGradient>
      <radialGradient
        id="g"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 6.5 -5.90909 0 5 4.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD217" />
        <stop offset={1} stopColor="#FBBF56" />
      </radialGradient>
      <pattern
        id="d"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#s" transform="scale(.01429 .04762)" />
      </pattern>
      <pattern
        id="f"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#t" transform="scale(.04348)" />
      </pattern>
      <pattern
        id="h"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#t" transform="scale(.04348)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAVCAYAAAD7NJjdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjbSURBVHgB7Vg5bxzJGX1VfQ5nOBIpEVoRMqBdbGBwQkUbLKBAqRMD3L+j4d9Z/gUBpqNNzEwUHAiyvCBI0RKvOfuqKr+vqoccCisbMKmNXFKxp7vrePW+u4H/t/+tOeeUc1Dh2nYsPRsOdbhfvAvP8Tu2a2xYwvrfrgHrl9b8zRd+AlcIr3nd/UnjzcelsXvAY77cfxZuN1cdtjac/7094HXolKzQEqSUcvgKLazP/zvDgO3ggNddYPA83D/eUzgeKBzlzmP0Y4hzsBt+v4RbnPhzjOqznSh7FUjZ2VHY4kaekI8amLK/Z9/QmBFQxyrMdVjMRhabiUV8aPEaFi+2Ld54gri5c1+DGE/KDrHKHhgS1yBg7DckotboEd+M2B/w9Ww9YL1IDbq8fpsT59trnC+HDi1HC6w3iPGaMmyfPX4W4fW+RvxE45sixnkdo294dRGSqUIq41ZkCYtUGVTaII8MorTBEUn642GD4+dc8rn16718eWcEiTl4LdlifwWN7Hv2cYzoJEanH6G0ETLihCNZM6BacejOLOqeQxHVfGzxkDinHUNhN9jadp6g4UvnSSBOdVMCrZa8eqfxw36Ef27EKKoEuiENln2ecmgMk0b8q1o2LUxleK2Qs49XK2yMaxSbNU5XDP78xOCve1Y0Z1kityKGfi1o826EyycR+rMEkzpFZpKAswg4U5JWywzeNh5jg7xToVIkJ6pgxhVlW9MtGLyi9gyC9ojNxNfbyTmH8KazeUpSuHBZZMhNBpgVGNfhgBwJd6lsgoibNp6YBjqpoOsSTVogqecYdeeYzUSNK5JC/+P19E40pjUheE3pCimHJKOXI57kcFlOu6YaJzm0S1DwDJqmZa1DFteoVcWzFNBqDjcruJzGKc0M/Sr4nYFb2NASMa2zFad6zAk8IqImR2E7SMpV6sUqWe5yWAeuyVBHup1WE0QBFU9hqyk0tclyz/syMjaYP6UdP7WLQ92KHNdO3SLGU5pPckG9XU1RjzN0Usq+7COKuxRij7tnFF7qD2+dQWNES+YkZoo4mVCLIswih7R2mMwNSs74cOBCyFAqvrHxwbbC+i6dK5e0PTI+yZAkPR66T+bvE06f6HivKR1KhOLhswpWzUjWmKBoZhRKTCc3i6hPVUNn2ODv4+Aor6LAbVor0gfUBDQ8nEmxknVgKDzBWRNnFFGIpstR1HatEZEYpyvuPkUZXTJgR4hIyErWoDKGmGs8eGrwoyxMdXQ3TIltsKvwDzpbN4mgyoS6QcZpQgnJqCOSY9Zg9SplIGaViCzgbEmiMi4WJBPFDRpqkHYlnWCJURlhc9+ImSo1vBUxPjjseGYUuu8jHPU1VnjIyqU8Sk4N75GUexTaPRJCraG2K/7T9CGWOqEoTPpdLkQ8MX1MSbvoFEjP6ag7i5TE+xh9tas43gN65z/ItlaTEnr2lDZKAqxXy5ykrHCbFS7cFWjcmF13+V7CE99Lb8T/JIgLkjsJoR0D3F0bSsRUOJEdGX3UnNHIyZ6ZNx+4vMUTsFH1eR7RHiGJbkCzRzKWGp/EaOYkhaecmDYtGXpjuiZGYvmAjI0OW10Vc6wUElqElklGprNZ7RdaXMNf5VVWpGMj5Q2shMfm22kZ8o1bGtK1f9oHeFx6NyXygISeWHBGAbtgEjeqbMBlW2xBe4BoaVGTc8wq8Ii/jw7ayLmsMQvUl8K7ZP0d6yOOoQM1EtroM4LZiDcvOHXODQt6fDoV0mBtGRyxhELOowtEOqUdf3J4kIVk75aFgo9IzId8xj0RT8AcyhVMF+jTSkYdJw6OeEQsSvAQoxMJMxo4EZVgVZWn1NH3oZ0v1ykd8eZzKRh8nqRv7LzF0Prt9xZnl7RITTFkFSKGtkiJOx5TIiOOuiDr59SKc27Eqz73zxKMRCFhGhlfou5wfp8EPXI+Jb+LpkIF4NN78RrJmGrcYbpQldQYCiye8emYuEYcd0ZBXnic0hV/C0553/A8SAqUJCkSdRtZ9Nssvs17bzpfbAOv33HQowbzWeM9eVOSddqiI8Exs0bYWbBRZsGKpYA2kkLNGSCmUGbsQ2FNSel5hTnD4GXfLuqU24ZrFZJe+kLC/5ECPHzb0MdUyHJqQzHlEZldxdQgxwhkOsQbwjWI0xqSR5xWMaVgBGX9AJ2XXrsZ0+hCDLZ+cIuN4uVdMZQkh2raO2F0WWtgx4wuufYJkqKzMW5O06JRSyYseYyRwCZpXum1pDIzJJpSKwrk/RpdSvNX1iVSuO2yJBjePsEL5FCA2TtxscyT1pjJVjpkLJS6dWLaNJ8445FjapL2UQk0NRYuMLSAPJ1TeCSGOA3nfzhneUCKDuB1Q2HZx3jIQ+DFd5KMWVTdipuVKJIp0moCW1MN9RkP/pHvTyiRE8rnA0k64fNPXOqMan0JW04IZI7uqMSvJw0evDWSaivcUZ0kuCV1X/M4KSzWPLNpiUmPAqlGMPqC5vwJjf4Xh56gSY7ZT+g1PrKfUnvOqfEjBiQKea1AhyZ/b2Dwgmf++We7JIB2Q3FsXmuoqltM9N68iXy12mU4mzKnKRmG1YThjXSoTiC04ZxeYVCzJnI0PfKP/jrVO2+wfmTw+hnN6E9muTjDHbTryvo5U/q9yBe6ySFTi3sxS5gEFwzjKfMb1WZcEg7oDDDT9HnshRS8aY1+ZvALTWh7m32JFOKMl2/C9w2fdzvmNbzuaUxZAL5nVvhwXqM3Yfhe1z7PKTh2lQedd3joc4uNR5bVLT89nIVPDwfsu/tc429eyBICcUctYJUff+GBfqL2MFvfpNQvDxpfn80kgVgLOC8undQn+OaCEfKhxX1GsF9Si6ddi9EGC8dD+fSAzzGqL4ikzTIl6RuGMQPeHzGxOt9XdHzh2ZmE4YMw5+iZw/l3gfVdYX/hKr/eR6orYXpNl8qSgpSPaG3GdZVYrjOPEqyPGR2PKSxJZBc4PcF+if/woeoLAK6Gyhld+1Vv+cuZtPZ7i7cYF4LH79muvzq2WKUJPsl7RMCLNhz6ROW3yFhu/wbrJNfTzPmz9wAAAABJRU5ErkJggg=="
        id="s"
        width={70}
        height={21}
        preserveAspectRatio="none"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP1SURBVHgBtVVLbhtHEH39mRl+RJoSRHnhADYMJQsFXukAySWY8yiXyCGiA2TrC2gVJIvAMILEcWAolkRpqOH0dHfl9YxEkYoleJMBmj3srn71pupVNfA/PuqxTRF5dH8FopR8NvgaKOdjjpcaeMv5ay5VgpMT4PArAn4bk/lDTtSngb/n+IaAlQH2OJYcjcHFjdEkC/iwiKjeB7x4FeiYTmbxUfAbxhwnBEOGiz9zOF1g1OMMi57VWJJ5FI9cOwTjMFY1MG9oH+47UBvAx8caM4bgw8ccg7yPzA/g6yF0NuDRglYGVkdIcKhDhb4pMdfXePq8InsHlF6p78Itpt2IyWyq8Pf7DKPJALYeoa63YewYQU0gTR/GGLKO8HGJPL/i2hwDd4HFO4XhGHjTkhSyjyvwVTje/Gyw/yrHshkghgmybA9edqFlQtMhQrQ8EaFshejnUKbPdTqsBaWL2Pdk/TrcOBC7Ef/hC4NFKCB+C8rvIOgp2e7R+zalsAVRhqyF8xJaDfkVWff9xkOJw8WowaRKYWlVtAZ+olFYCycFjBtA9UZUyDZi3CHwNh0MCGghOhCIjPlOdM4OTl2jH0u4S8b+mWPuvHQGtw91rKeajC0yqiMSTBmyI0ORYQsoDAsYT4Ws1bfomr9jaLcFP+hhVFicXmlMp+q/CVULRX+6ja0ylvHOuq9rSVCeWrfhk5jAC34RFRQ5G+apzpkbC6M0Rnu0EegV8K+3muSnJrkFqkKjk5Xusp8OdCTujnX+Ek1u9nrd++FVa3hndfBS8GQ3EMDDxYaAFZlxYMm1hu9pzdNDcuh50jEkHLJsdS/Wt/kI/YjXXStYo3AYcfoHNcyqiywQjQUPlgS/4igJdE3gijNHvG73RKh1XSLmJQzPxMsG0yLg9AdZS2iK/5Fg+tzjaicxWtD1JRfPKKqCjlTLXsC4Jp2z5IX7Wn3k2hlyO4drlkwLq3QaMfsxMnmdFFU6KskDm1D9l8OgWFDj5/Auh7Wq7SWJvWKfYTIYTYYCLKJ4xuP/0G4OGxa4fFbjyTuG7csVZWxUKX5iw+r3yXcLwU3aAkLkTEkalSMQXBM8RoZLz+noHLVwrkvs7rOJHfgEt1Gh6Y/IUWq1ARMm8YL9NR/GtvNpAsXQRxMyGCrJsHAUHRhbsu8sqPMKO2N2xl/I+kBuO+Mn+vkRk3yg8Ps0w7jKGeWCHTDH0GZkSK1nLB4XkNOpR426cJhXDfZL/2DLvQNPa2mf7feE7ffpW4svpgbn3kCV3GMPi1XEjiHLnGP0eZfFvfh3+8e85lIrxm83a9uqVQROBcf8O5vFZJZEcR/n8Qu6LXW5ycetQ4W1a/PByzk9/wKjUwS37YBQQAAAAABJRU5ErkJggg=="
        id="t"
        width={23}
        height={23}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgEmojiFaceCelebrationColored;
