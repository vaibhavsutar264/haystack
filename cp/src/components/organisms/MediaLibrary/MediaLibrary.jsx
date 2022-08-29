/* eslint-disable react/jsx-pascal-case */
import { useListData } from "@react-stately/data";
import { useListState } from "@react-stately/list";
import { chunk } from "lodash";
import { memo, useEffect, useMemo } from "react";
import { Grid } from "react-virtualized";
import { AutoSizer } from "react-virtualized";
import { Container } from "../../atoms";
import MediaItem from "./MediaItem";
import StyledMediaLibrary from "./StyledMediaLibrary";
import { useMutateMediaLibrary } from "./useMediaLibraryQuery";

const MediaLibrary = ({ onSelect, children, ...props }) => {
   const { items: data, isLoading } = useMutateMediaLibrary()
   const selectedItems = useListData({
      initialItems: [],
      getKey: row => row.id
   })
   useEffect(() => {
      // onSelect && onSelect(selectedItems.items)
      console.log({ selectedItems })
   }, [selectedItems])
   const addItem = (_row) => {
      console.log({ _row })
      selectedItems.append(_row)
   }
   const items = useMemo(() => {
      return chunk(data, 6)
   }, [data])

   function CellRenderer(cellProps) {
      // console.info({ cssC: cellProps.style })
      const { rowIndex, columnIndex } = cellProps
      return (
         <div key={CellRenderer.key} {...cellProps}>
            <MediaItem isSelected={selectedItems.getItem(items[rowIndex][columnIndex].path)} onSelect={() => addItem(items[rowIndex][columnIndex])} item={items[rowIndex][columnIndex]} />
         </div>
      )
   }
   if (isLoading) {
      return null;
   }
   return (
      <StyledMediaLibrary open>
         <Container className={'list-container'}>
            {/* <ErrorBoundary>
               <Fileupload />
            </ErrorBoundary> */}
            {items?.length && (
            <div style={{ overflow: 'hidden' }}>
               <AutoSizer style={{ minHeight: '300px', marginBottom: '100px', }}>
                  {({ width, height }) => (
                  <Grid
                     width={width}
                     height={500}
                     cellRenderer={CellRenderer}
                     rowCount={items?.length}
                     rowHeight={150}
                     columnCount={items[0]?.length}
                     columnWidth={parseInt(width / 6)}
                  />
                  )}
               </AutoSizer>
            </div>
            )}
         </Container>
      </StyledMediaLibrary>
   )
}

export default memo(MediaLibrary)
