import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import BebasNeue from "./fonts/BebasNeue-Regular.ttf";
import NotoSansKRBold from "./fonts/NotoSansKR-Bold.otf";
import NotoSansKRRegular from "./fonts/NotoSansKR-Regular.otf";
import NotoSansKRLight from "./fonts/NotoSansKR-Light.otf";

const GlobalStyles = createGlobalStyle`
    ${reset}
    @font-face {
       font-family: "Bebas Neue";
       src: url(${BebasNeue}) format('truetype')
    }
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansKRBold});
        font-weight: 700;
    }
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansKRRegular});
        font-weight: medium;
    }
    @font-face {
        font-family: "NotoSans";
        src: url(${NotoSansKRLight});
        font-weight: 300;
    }
    * {
        box-sizing: border-box
    }
    body {
        color: white;
        background-color: #141414;
        font-family: "NotoSans";
        /* margin-left: 8%; */
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
`;

export default GlobalStyles;
