import { css, Global } from "@emotion/react";

export default function GlobalStyle() {
   return (
      <Global
         styles={css`
            textarea {
               width: 100%;
            }
         `}
      />
   )
}
