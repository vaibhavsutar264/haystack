import { useListData } from "@react-stately/data";
import { useOverlayTriggerState } from "@react-stately/overlays";
import { AspectRatio, Button, IconButton, Image, List, Text } from "../../atoms";
import { MediaLibrary, ModalDialog } from "../../organisms";
import styled from '@emotion/styled'

const StyledMediaPicker = styled.div`
   .list {
      margin-top: 0.5rem;
      .tags__item {
         display: flex;
         align-items: center;
         gap: 1rem;
      }
   }
`

export default function MediaPicker({ values, }) {
   const modal = useOverlayTriggerState({})
   let list = useListData({
      initialItems: [
         { label: 'Aardvark' },
         { label: 'Kangaroo' },
         { label: 'Snake' }
      ],
      // initialSelectedKeys: ['Kangaroo'],
      getKey: item => item.key ?? item.value ?? item.label
   });

   function handleSelectedFiles(medias) {
      console.log({ medias })
   }

   const primaryAction = {
      title: 'Done choosing files',
      onClick: () => {
         if (!window.confirm('Confirm')) {
            return
         }
         modal.close()
      }
   }

   const renderValues = list.items && list.items.map((val, valIndex) => (
      <List.Item key={`tas_val_${valIndex}`}>
         <div className="tags__item">
            <Image src={val.label} style={{ width: '64px' }} />
            <Text>{val.label}</Text>
            <IconButton name={'close'} size={'sm'} onClick={() => list.remove(val.label)} />
         </div>
      </List.Item>
   ))

   return (
      <StyledMediaPicker>
         <div>
            <div style={{ marginBottom: '0.5rem' }}>
               <Button title={'Choose file'} onClick={() => modal.open()} />
            </div>
            <Text small variant="caption">Caption for file </Text>
         </div>
         <List unstyled>
            {renderValues}
         </List>
         {modal.isOpen && (
            <ModalDialog isOpen title={'Media'} onClose={modal.close} primaryAction={primaryAction}>
               <MediaLibrary onSelect={handleSelectedFiles} />
            </ModalDialog>
         )}
      </StyledMediaPicker>
   )
}
