import styled from "@emotion/styled";
import { useListData } from "@react-stately/data";
import { useState } from "react";
import { Button, IconButton, TextInput } from "../../atoms";

const StyledTagsInput = styled.div`
   ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0.5rem 0;
      gap: 0.8rem;
      li {
         .tags__item {
            background: var(--dark-2);
            color: var(--dark-6);
            padding: 0.4rem 1rem;
            font-size: var(--text-sm, 13px);
            border-radius: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
         }
      }
   }
`

export default function TagsInput({ values, onChange, placeholder, ...props }) {
   const [value, setValue] = useState('')
   let list = useListData({
      initialItems: [
         { label: 'Aardvark' },
         { label: 'Kangaroo' },
         { label: 'Snake' }
      ],
      // initialSelectedKeys: ['Kangaroo'],
      getKey: item => item.key ?? item.value ?? item.label
   });
   function addItem(newItem) {
      if (newItem.label) {
         list.append(newItem);
         setValue('')
      }
   }

   const renderValues = list.items && list.items.map((val, valIndex) => (
      <li key={`tas_val_${valIndex}`}>
         <div className="tags__item">
            {val.label}
            <IconButton name={'close'} size={'sm'} onClick={() => list.remove(val.label)} />
         </div>
      </li>
   ))
   return (
      <StyledTagsInput className="tags">
         <TextInput
            value={value}
            onChange={({ target }) => setValue(target.value)}
            placeholder={placeholder} {...props}
            append={() => (
               <Button size={'xs'} title={'Add'} name={'plus'} onClick={() => addItem({ label: value })} />
            )}
         />
         <ul className="tags__list">{renderValues}</ul>
      </StyledTagsInput>
   )
}
