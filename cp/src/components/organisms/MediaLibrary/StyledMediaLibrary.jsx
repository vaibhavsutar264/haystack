import styled from "@emotion/styled"

const StyledMediaLibrary = styled.div`
   width: 100%;
   margin: 0 auto;
   min-height: 40vh;
   background: white;
   .list-container {
      gap: 1rem;
   }
   .list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
      padding: 0;
      margin: 0;
      font-size: 14px;
      max-height: 50vh;
      overflow: auto;
      > li {
         overflow: hidden;
         border-radius: var(--rounded-md);
         overflow: hidden;
      }
   }
   .MediaList__Footer {
      font-size: 13px;
      background: var(--dark-2);
      padding: 0.5rem 1rem;
   }
   .MediaItem {
      min-height: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
      padding: 0.5rem;
      text-align: center;
      picture {
         --size: 64px;
         width: var(--size);
         height: var(--size);
         display: flex;
         border-radius: var(--rounded-sm);
         overflow: hidden;
         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: var(--dark-3);
            outline: none;
            border: none;
         }
      }
      figcaption {
         font-size: 13.5px;
         p {
            margin: 0;
            a {
               text-decoration: none;
               &:hover {
                  text-decoration: underline;
               }
            }
         }
      }
      .actions {
         opacity: 0;
         small {
            font-size: 13px;
         }
      }
      &:hover .actions {
         opacity: 1;
      }
   }

   .MediaInfoPanel {
      background: var(--dark-1);
      padding: 1rem 1.5rem;
   }
   .ReactVirtualized__Grid__innerScrollContainer {
      margin-top: -150px;
   }
`
export default StyledMediaLibrary
