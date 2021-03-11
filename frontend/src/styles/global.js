import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
      margin:0;
      padding:0;
      outline:0;
      box-sizing:border-box;
    }

  body{

    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body , input, button{
    font-family:Nunito ,sans-serif;;
    font-size:16px;
  }

  #root{
    max-width:100vw;
    margin: 0 auto;
  }
  button{
    cursor: pointer;
  }

`;
