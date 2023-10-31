import { createGlobalStyle } from "styled-components";
import backGroundImg from "../../public/images/background.jpg";

const GlobalStyle = createGlobalStyle`
#__next{
  display: flex;
  align-items: center;
  justify-content: center;
}

html{
  width: 100vw;
    height: 100vh;

}


html,body {

  @font-face {
  font-family: 'KungFuMaster';
  src: url('"../../public/fonts/KungFuMaster.otf"') format('opentype');
  font-weight: normal;
  font-style: normal;
}

    font-family: 'Open Sans',sans-serif;
    line-height: 20px;
   
    background: linear-gradient(90deg, rgba(0,182,242,1) 0%, rgba(153,246,255,1) 50%, rgba(0,130,227,1) 100%) !important; 



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
