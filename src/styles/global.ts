import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-gradient: linear-gradient(274.05deg, #007cff 33.64%, #dfb5eb 122.13%);
    --secondary-gradient: linear-gradient(237.41deg, #A0B8FF -47.44%, #F3FEFF 69.81%), #F0F4F9;
    --primary-color: #203C87;
    --secondary-color: #007CFF;
    --tertiary-color: #EDF1F8;
    --details-color: #8f93f1;
    --base-color: #ffffff;
    --text-color-2: #434343;
    --text-color-3: #7e7f81;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root {
    width: 100vw;
    height: 100%;    
  }

  #root{
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
