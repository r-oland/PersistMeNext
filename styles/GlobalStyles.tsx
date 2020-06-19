// Components==============
import { createGlobalStyle } from "styled-components";
// =========================

const GlobalStyles = createGlobalStyle`
   
   /* =========================================*/
   /* Global style ============================*/
   /* =========================================*/
   
   html {
      font-family: 'Raleway', sans-serif;
      background: ${({ theme: { color } }) => color.offWhite};

      input, select, textarea, label{
      font-family: 'Raleway', sans-serif;
         font-size: 14px;
      }
   }


   body {
      color: ${({ theme: { color } }) => color.black};
   }

   #gatsby-focus-wrapper{
      position: relative;
   }

   svg{
      display: block;
   }


   h1 {
      ${({ theme: { fontSize } }) => fontSize.h1}
   }

   h2 {
      ${({ theme: { fontSize } }) => fontSize.h2}
   }

   h3 {
      ${({ theme: { fontSize } }) => fontSize.h3}
   }

   h4 {
      ${({ theme: { fontSize } }) => fontSize.h4}
   }

   h5 {
      ${({ theme: { fontSize } }) => fontSize.h4}
   }

   h6 {
      ${({ theme: { fontSize } }) => fontSize.h4}
   }

   p,
   a,
   strong,
   span, 
   li
    {
      ${({ theme: { fontSize } }) => fontSize.m}
   }

   /* =========================================*/
   /* Reset ===================================*/
   /* =========================================*/

   *,
   ::before,
   ::after {
      box-sizing: border-box;
   }


   body,
   h1,
   h2,
   h3,
   h4,
   p,
   ul,
   ol,
   li,
   figure,
   figcaption,
   blockquote,
   dl,
   dd {
   margin: 0;
   }

   p,
   ul,
   ol,
   dl,
   address,
   button
    {
      line-height:1.4;
      padding: 0;
   }

   button {
      background: none;
      color: ${({ theme: { color } }) => color.black};
      border: none;
      padding: 0;
      cursor: pointer;
      font-family: inherit;
      outline: inherit;
      ${({ theme: { fontSize } }) => fontSize.m}
   }

   pre {
      white-space: pre-wrap;
   }

   hr {
      border: 0.5px solid;
   }

   ul {
      list-style: none;
   }

   ol {
      padding-left: 1em;
   }

   a {
      color: ${({ theme: { color } }) => color.black};
      text-decoration: none;
   }

   img,
   video,
   canvas,
   audio,
   iframe,
   embed,
   object {
      display: block;
   }

   img,
   video,
   canvas,
   audio,
   iframe,
   embed,
   object {
      vertical-align: middle;
   }

   img,
   video {
      max-width: 100%;
      height: auto;
   }

   img {
      border-style: none;
   }
   `;

export default GlobalStyles;
