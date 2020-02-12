import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
    color: white;
    background-color: #2a2b30;
}

a {
    text-decoration: none;
    color: inherit;
}
    
`;

export default GlobalStyles;
