import { Fragment } from "react";
/**
export default function docs() {
   return (
      <Fragment>
         <Section title={'Form'}>
            <Form primaryAction={{ title: 'Confirm' }}>
               {(formprops) => (
                  <>
                     <Form.Field label={'Your name'} name={'name'} Component={TextInput} />
                     <Form.Field label={'E-mail'} name={'email'} Component={EmailInput} required />
                     <Form.Field label={'Phone number'} name={'phone_number'} Component={PhoneNumberInput} />
                     <Form.Field label={'Number'} name={'number'} Component={NumberInput} />
                     <Form.Field label={'Search'} name={'q'} Component={SearchInput} />
                     <Form.Field label={'tags'} name={'tags'} Component={TagsInput} />
                     <Form.Field label={'Agreed'} name={'agreed'} Component={Checkbox} value={'sdf'} />
                     {JSON.stringify(formprops)}
                  </>
               )}
            </Form>
         </Section>
         <Section title={'Content'}>
            <textarea />
         </Section>
         <Section title={'Buttons'}>
            <Button title={'Submit'} variant={'primary'} />
            <Button title={'Submit'} variant={'primary'} disabled />
            <Button title={'Submit'} variant={'primary'} loading />
            <Button title={'Submit'} variant={'primary'} disabled loading />
         </Section>

         <Section title={'Datepicker'}>
            <Datepicker />
         </Section>
         <Section title={'Datepicker range'}>
            <DateRangePicker />
         </Section>
         <Section title={'Timepicker'}>
            <Timepicker />
         </Section>
         <Section title={'Form controls'}>
            <Switch children={'Label for on'} />
            <Checkbox children={'Label for on'} />
            <Radio label="Favorite pet">
               <Radio.Item value="dogs">Dogs</Radio.Item>
               <Radio.Item value="cats">Cats</Radio.Item>
            </Radio>
         </Section>
         <Section inline title={'Menu'}>
            <Menu onAction={globalThis.alert} aria-label="Actions">
               <Menu.Item textValue="Copy" key="copy">
                  <div>Copy the selected text</div>
               </Menu.Item>
               <Menu.Item textValue="Cut" key="cut">
                  <div>Cut the selected text</div>
               </Menu.Item>
               <Menu.Item textValue="Paste" key="paste">
                  <div>Paste the copied text</div>
               </Menu.Item>
            </Menu>
            <hr />
            <Menu onAction={globalThis.alert} aria-label="Actions">
               <Menu.Item textValue="Dashboard" key="Dashboard">
                  <div>Dashboard</div>
               </Menu.Item>
               <Menu.Item textValue="Analytics" key="Analytics">
                  <div>Analytics</div>
               </Menu.Item>
               <Menu.Item textValue="Actions" key="Actions">
                  <Menu onAction={globalThis.alert} aria-label="Actions">
                     <Menu.Item textValue="Copy" key="copy">
                        <div>Copy the selected text</div>
                     </Menu.Item>
                     <Menu.Item textValue="Cut" key="cut">
                        <div>Cut the selected text</div>
                     </Menu.Item>
                     <Menu.Item textValue="Paste" key="paste">
                        <div>Paste the copied text</div>
                     </Menu.Item>
                  </Menu>
               </Menu.Item>
               <Menu.Item leftIcon={'photo'} textValue="Users" key="Users">
                  <div>Users</div>
               </Menu.Item>
               <Menu.Item leftIcon={'upload'} textValue="Notifications" key="Notifications">
                  <div>Notifications</div>
               </Menu.Item>
               <Menu.Item leftIcon={'search'} textValue="Settings" key="Settings">
                  <div>Settings</div>
               </Menu.Item>
            </Menu>
            <hr />
            <div>

               <Menu inline={true} onAction={globalThis.alert} aria-label="Actions">
                  <Menu.Item textValue="Copy" key="copy">
                     <div>Copy the selected text</div>
                  </Menu.Item>
                  <Menu.Item textValue="Cut" key="cut">
                     <div>Cut the selected text</div>
                  </Menu.Item>
                  <Menu.Item textValue="Paste" key="paste">
                     <div>Paste the copied text</div>
                  </Menu.Item>
               </Menu>
            </div>

         </Section>
         <Section title={'Popover'}>
            <Popover />
            <UserPersonaMenu />
         </Section>
         <Section title={'Dropdowns'}>
            <Select label="Choose an option" selectionMode="single">
               <Select.Item>Red</Select.Item>
               <Select.Item>Orange</Select.Item>
               <Select.Item>Yellow</Select.Item>
               <Select.Item>Green</Select.Item>
               <Select.Item>Blue</Select.Item>
               <Select.Item>Purple</Select.Item>
               <Select.Item>Black</Select.Item>
               <Select.Item>White</Select.Item>
               <Select.Item>Lime</Select.Item>
               <Select.Item>Fushsia</Select.Item>
            </Select>
         </Section>
         <Section inline title={'ComboBox'}>
            <ComboBox label="Favorite Animal">
               <ComboBox.Item key="red panda">Red Panda</ComboBox.Item>
               <ComboBox.Item key="cat">Cat</ComboBox.Item>
               <ComboBox.Item key="dog">Dog</ComboBox.Item>
               <ComboBox.Item key="aardvark">Aardvark</ComboBox.Item>
               <ComboBox.Item key="kangaroo">Kangaroo</ComboBox.Item>
               <ComboBox.Item key="snake">Snake</ComboBox.Item>
            </ComboBox>
            <div style={{ margin: '2rem 0' }}>
               <hr />
            </div>
            <ComboBox label="Favorite Animal (async)">
               <ComboBox.Item key="red panda">Red Panda</ComboBox.Item>
               <ComboBox.Item key="cat">Cat</ComboBox.Item>
               <ComboBox.Item key="dog">Dog</ComboBox.Item>
               <ComboBox.Item key="aardvark">Aardvark</ComboBox.Item>
               <ComboBox.Item key="kangaroo">Kangaroo</ComboBox.Item>
               <ComboBox.Item key="snake">Snake</ComboBox.Item>
            </ComboBox>
         </Section>
         <Section inline title={'Toast'}>
            <Button title={'Trigger toast'} onClick={() => toast(`Toast message...`)} />
         </Section>
         <Section inline title={'Meter'}>
            <Meter
               label="Storage space"
               value={250}
               maxValue={1000} />
         </Section>
         <Section inline title={'Loading indicator'}>
            <Spinner />
         </Section>
         <hr />
         <Section title={'Tabs'}>
            <Tabs aria-label="History of Ancient Rome" disabledKeys={['Emp']}>
               <Tabs.Item key="FoR" title="Founding of Rome">
                  Arma virumque cano, Troiae qui primus ab oris.
               </Tabs.Item>
               <Tabs.Item key="MaR" title="Monarchy and Republic">
                  Senatus Populusque Romanus.
               </Tabs.Item>
               <Tabs.Item key="Emp" title="Empire">Alea jacta est.</Tabs.Item>
            </Tabs>
         </Section>
         <Section title={'Avatars'}>
            <div class="group flex items-center">
               <img class="shrink-0 h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
               <div class="ltr:ml-3 rtl:mr-3">
                  <p class="text-sm font-medium text-slate-300 group-hover:text-white">Tom Cook</p>
                  <p class="text-sm font-medium text-slate-500 group-hover:text-slate-300">Director of Operations</p>
               </div>
            </div>
         </Section>
         <Section title={'Modal'}>

         </Section>
         <Section title={'Dialog'}>

         </Section>
         <Section title={'Dialog'}>

         </Section>
         <Section title={'Card buttons'}>
            <div className='grid grid-cols-2 gap-4'>
               <a href="#" className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-sm space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                  <div className="flex items-center space-x-3">
                     <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                     <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
               </a>
               <a href="#" className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-sm space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                  <div className="flex items-center space-x-3">
                     <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                     <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
               </a>
               <a href="#" className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-sm space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                  <div className="flex items-center space-x-3">
                     <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                     <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
               </a>
               <a href="#" className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-sm space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                  <div className="flex items-center space-x-3">
                     <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                     <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
               </a>
            </div>
         </Section>
         <Section inline title={'Cards'} description={'Cards, stats, panels and for dialog & modals'}>
            <Card className="mb-8" shadow>
               <main><Text>Cards, stats, panels and for dialog &mp; modals</Text></main>
            </Card>
            <Card className="mb-8" shadow>
               <Card.Header>
                  <Text heading>Cards</Text>
               </Card.Header>
               <main><Text>Cards, stats, panels and for dialog &mp; modals</Text></main>
            </Card>
            <Card className="mb-8" >
               <Card.Header>
                  <Text heading>Cards</Text>
               </Card.Header>
               <Text>Stripe dashboards facilitate an interesting way to configure and manage your Stripe account. You can readily track payments, refunds, monetary integrations, and other activities in a consolidated space with easy access and integration to other platforms. Also read Stripe to BigQuery Integration.</Text>

               <Card.Footer>
                  <Text small>Card description here...</Text>
               </Card.Footer>
            </Card>
            <Card className="mb-8" >
               <Text>Stripe dashboards facilitate an interesting way to configure and manage your Stripe account. You can readily track payments, refunds, monetary integrations, and other activities in a consolidated space with easy access and integration to other platforms. Also read Stripe to BigQuery Integration.</Text>
               <Card.Footer>
                  <Text small>Card description here...</Text>
               </Card.Footer>
            </Card>
            <Card className="mb-8" >
               <Text>Stripe dashboards facilitate an interesting way to configure and manage your Stripe account. You can readily track payments, refunds, monetary integrations, and other activities in a consolidated space with easy access and integration to other platforms. Also read Stripe to BigQuery Integration.</Text>
               <Card.Footer>
                  <Flex style={{ gap: '0.5rem', }}>
                     <Button title={'Cancel'} />
                     <Button variant={'danger'} title={'Confirm'} />
                  </Flex>
               </Card.Footer>
            </Card>
         </Section>
         <Section title={'Prompt'}>
            <Prompt renderTrigger={promptProps => <Button {...promptProps} title={'Open prompt'} />} />
         </Section>
         <Section inline title={'File upload'}>
            <MediaPicker />
            <Card>
               <MediaLibrary />
            </Card>
         </Section>
      </Fragment>
   )
}
*/
