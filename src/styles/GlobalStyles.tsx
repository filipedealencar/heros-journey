import { createGlobalStyle } from "styled-components";
import backGroundImg from "../../public/images/background.jpg";

const GlobalStyle = createGlobalStyle`

html,body {

  @font-face {
  font-family: 'KungFuMaster';
  src: url('"../../public/fonts/KungFuMaster.otf"') format('opentype');
  font-weight: normal;
  font-style: normal;
}

    font-family: 'Open Sans',sans-serif;
    line-height: 20px;
   
    background-image: url(${backGroundImg.src}); 
  background-size: cover;
  background-position: center;


    font-size: 16px;
    font-weight: 700;
    color: #8ea2ab;
    font-style: normal;
    scroll-behavior: smooth;
    scroll-snap-align: center;
    margin: 0px auto;
    width: auto;
    -webkit-font-smoothing: antialiased;
    
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    color: #fff;
    font-weight: 700;   
     line-height: 2rem;
    margin: 0 !important;
    font-family: 'Open Sans', sans-serif;
  }

    ::-webkit-scrollbar {
      width: 5px;
    height: 5px;
}

 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #c3c3c3; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #8ea2ab; 
}
`;

export default GlobalStyle;
