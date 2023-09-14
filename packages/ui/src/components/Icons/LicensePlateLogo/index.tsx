type LicensePlateLogoProps = {
  height: number,
  width: number,
  fillColor: string,
}

export const LicensePlateLogo = (props: LicensePlateLogoProps) => {
  const { fillColor, height, width } = props
  
  return (
    <svg width={width} height={height} viewBox="0 0 60 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M2.87278 0.772366C1.28056 0.77397 -0.00561503 2.06922 1.84355e-05 3.66539L0.0570715 19.8306C0.0627049 21.4267 1.35802 22.7194 2.95024 22.7178L57.1272 22.6632C58.7194 22.6616 60.0056 21.3663 60 19.7702L59.9429 3.60498C59.9373 2.00882 58.642 0.716171 57.0498 0.717775L2.87278 0.772366ZM33.8305 18.7983C33.7282 18.7983 33.637 18.765 33.5568 18.6986C33.5523 18.6948 33.5481 18.6906 33.5443 18.686C33.478 18.606 33.4449 18.5204 33.4449 18.4293C33.4449 18.3473 33.4682 18.277 33.515 18.2184L38.2119 11.5511C38.24 11.5112 38.24 11.458 38.212 11.418L33.8004 5.1195C33.7971 5.11481 33.7941 5.10989 33.7916 5.10473C33.7591 5.03702 33.7428 4.96931 33.7428 4.90159C33.7428 4.80788 33.7779 4.72587 33.848 4.65559C33.9181 4.57358 34.0058 4.53258 34.1109 4.53258H36.6526C36.7928 4.53258 36.9096 4.56773 37.0031 4.63801C37.0966 4.7083 37.1842 4.79616 37.266 4.90159L40.1821 8.88088C40.228 8.94354 40.3213 8.9438 40.3676 8.88139L43.318 4.90159C43.4699 4.65559 43.6744 4.53258 43.9315 4.53258H46.3504C46.4413 4.53258 46.5211 4.57135 46.5899 4.64888C46.5939 4.6533 46.5981 4.65751 46.6025 4.66144C46.6798 4.73041 46.7185 4.81047 46.7185 4.90159C46.7185 4.9836 46.6951 5.05388 46.6484 5.11246L42.2151 11.3996C42.1867 11.4399 42.1869 11.494 42.2158 11.534L46.9464 18.1028C46.9814 18.1496 46.9989 18.2199 46.9989 18.3137C46.9989 18.4074 46.9639 18.4952 46.8938 18.5772C46.8237 18.6475 46.736 18.6827 46.6308 18.6827H44.0191C43.7737 18.6827 43.5692 18.5655 43.4056 18.3312L40.2628 14.1568C40.2163 14.0949 40.1233 14.0956 40.0777 14.1582L36.9505 18.4468C36.822 18.6811 36.6233 18.7983 36.3546 18.7983H33.8305ZM20.1361 17.7578C20.0192 17.7578 19.9141 17.7168 19.8206 17.6348C19.7388 17.5411 19.6979 17.4357 19.6979 17.3185V13.5699C19.6979 13.5506 19.6931 13.5317 19.684 13.5148L15.6361 6.02864C15.6329 6.02271 15.6302 6.01651 15.6281 6.0101C15.5952 5.91037 15.5787 5.84914 15.5787 5.82644C15.5787 5.73272 15.6138 5.65072 15.6839 5.58043C15.7657 5.49843 15.8592 5.45742 15.9643 5.45742H18.1554C18.3891 5.45742 18.5936 5.58043 18.7689 5.82644L21.1749 10.1782C21.2188 10.2575 21.3324 10.2577 21.3765 10.1785L23.7995 5.82644C23.9398 5.58043 24.1443 5.45742 24.413 5.45742H26.6041C26.7093 5.45742 26.7969 5.49843 26.867 5.58043C26.9371 5.65072 26.9722 5.73272 26.9722 5.82644C26.9722 5.88232 26.9615 5.94354 26.9403 6.01008C26.9382 6.01651 26.9355 6.02271 26.9323 6.02864L22.8845 13.5148C22.8753 13.5317 22.8705 13.5506 22.8705 13.5699V17.3185C22.8705 17.4474 22.8238 17.5528 22.7303 17.6348C22.6485 17.7168 22.5433 17.7578 22.4148 17.7578H20.1361ZM4.07787 17.6348C4.17136 17.7168 4.27653 17.7578 4.39339 17.7578H6.4968C6.62534 17.7578 6.73051 17.7168 6.81231 17.6348C6.89411 17.5411 6.93501 17.4357 6.93501 17.3185V11.1859C6.93501 11.0659 7.09484 11.0254 7.15177 11.1309L8.91572 14.4016C8.98583 14.5304 9.06763 14.63 9.16112 14.7003C9.2546 14.7706 9.3773 14.8057 9.52921 14.8057H10.4407C10.6978 14.8057 10.9023 14.671 11.0542 14.4016L12.8004 11.1349C12.8571 11.0289 13.0174 11.0693 13.0174 11.1895V17.3185C13.0174 17.4474 13.0583 17.5528 13.1401 17.6348C13.2336 17.7168 13.3446 17.7578 13.4731 17.7578H15.559C15.6875 17.7578 15.7927 17.7168 15.8745 17.6348C15.968 17.5528 16.0147 17.4474 16.0147 17.3185V9.15455C16.0147 9.03475 15.9838 8.91699 15.9249 8.81274L14.1999 5.75918C14.0945 5.57268 13.8972 5.45741 13.6835 5.45742C13.403 5.45742 13.1985 5.58629 13.07 5.84401L10.0856 11.1986C10.0416 11.2775 9.92829 11.2775 9.88428 11.1986L6.89995 5.84401C6.77141 5.58629 6.56691 5.45742 6.28646 5.45742H4.39339C4.27653 5.45742 4.17136 5.49843 4.07787 5.58043C3.99608 5.66243 3.95518 5.76786 3.95518 5.89672V17.3185C3.95518 17.4357 3.99608 17.5411 4.07787 17.6348ZM30.9561 17.7578C30.8392 17.7578 30.734 17.7168 30.6406 17.6348C30.5588 17.5411 30.5179 17.4357 30.5179 17.3185V15.4485C30.5179 15.3846 30.4662 15.3329 30.4025 15.3329H25.0665C24.938 15.3329 24.8328 15.2919 24.751 15.2099C24.6692 15.1279 24.6283 15.0224 24.6283 14.8936V13.2242C24.6283 13.0485 24.6926 12.8669 24.8211 12.6795L29.9219 5.75615C30.0855 5.557 30.3017 5.45742 30.5704 5.45742H33.1296C33.2581 5.45742 33.3633 5.49843 33.4451 5.58043C33.5269 5.66243 33.5678 5.76786 33.5678 5.89672V12.5991C33.5678 12.6629 33.6194 12.7147 33.6831 12.7147H35.1103C35.2505 12.7147 35.3615 12.7615 35.4433 12.8552C35.5251 12.9372 35.566 13.0368 35.566 13.154L35.5783 13.3485C35.5884 13.5085 35.5429 13.6671 35.4495 13.7973L34.5549 15.0443C34.4249 15.2255 34.2158 15.3329 33.9932 15.3329H33.6831C33.6194 15.3329 33.5678 15.3846 33.5678 15.4485V16.1018C33.5678 16.2474 33.5221 16.3893 33.4372 16.5074L32.7451 17.4698C32.6151 17.6507 32.4063 17.7578 32.1839 17.7578H30.9561ZM30.3787 8.98537C30.4438 8.89367 30.588 8.93985 30.588 9.05241V12.7221C30.588 12.7859 30.5363 12.8377 30.4727 12.8377H27.8668C27.7731 12.8377 27.7185 12.7315 27.7729 12.655L30.3787 8.98537ZM50.7661 17.6348C50.8595 17.7168 50.9647 17.7578 51.0816 17.7578H53.2551C53.3836 17.7578 53.4888 17.7168 53.5706 17.6348C53.6524 17.5411 53.6933 17.4357 53.6933 17.3185V15.4485C53.6933 15.3846 53.7449 15.3329 53.8086 15.3329H55.2533C55.3819 15.3329 55.487 15.2919 55.5688 15.2099C55.6506 15.1279 55.6915 15.0224 55.6915 14.8936V13.154C55.6915 13.0368 55.6506 12.9372 55.5688 12.8552C55.487 12.7615 55.376 12.7147 55.2358 12.7147H53.8086C53.7449 12.7147 53.6933 12.6629 53.6933 12.5991V5.89672C53.6933 5.76786 53.6524 5.66243 53.5706 5.58043C53.4888 5.49843 53.3836 5.45742 53.2551 5.45742H50.6959C50.4272 5.45742 50.211 5.557 50.0474 5.75615L44.9466 12.6795C44.8181 12.8669 44.7538 13.0485 44.7538 13.2242V13.369C44.7538 13.5165 44.8007 13.6601 44.8877 13.7791L45.8165 15.0493C45.9468 15.2276 46.1541 15.3329 46.3745 15.3329H50.528C50.5917 15.3329 50.6434 15.3846 50.6434 15.4485V17.3185C50.6434 17.4357 50.6843 17.5411 50.7661 17.6348ZM50.7135 9.05241C50.7135 8.93985 50.5693 8.89367 50.5042 8.98537L47.8984 12.655C47.8441 12.7315 47.8986 12.8377 47.9923 12.8377H50.5982C50.6618 12.8377 50.7135 12.7859 50.7135 12.7221V9.05241Z" 
        fill={fillColor}
      />
    </svg>
  )
}
