"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[3050],{"./packages/react/src/components/MultiSelect/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Invalid:()=>Invalid,Overlay:()=>Overlay,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),warning=__webpack_require__("./node_modules/warning/warning.js"),warning_default=__webpack_require__.n(warning),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const MultiSelectGroupContext=(0,react.createContext)({name:void 0,selected:[],disabled:!1,readonly:!1,invalid:!1,onChange(){throw new Error("Cannot find `onChange()` handler. Perhaps you forgot to wrap it with `<MultiSelectGroup />` ?")}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MultiSelect=(0,react.forwardRef)((function MultiSelectInner({value,disabled=!1,onChange,variant="default",className,children},ref){const{name,selected,disabled:parentDisabled,readonly,invalid,onChange:parentOnChange}=(0,react.useContext)(MultiSelectGroupContext);warning_default()(void 0!==name,'"name" is not Provided for <MultiSelect>. Perhaps you forgot to wrap with <MultiSelectGroup> ?');const isSelected=selected.includes(value),isDisabled=disabled||parentDisabled||readonly,handleChange=(0,react.useCallback)((event=>{event.currentTarget instanceof HTMLInputElement&&(onChange&&onChange({value,selected:event.currentTarget.checked}),parentOnChange({value,selected:event.currentTarget.checked}))}),[onChange,parentOnChange,value]);return(0,jsx_runtime.jsxs)(MultiSelectRoot,{"aria-disabled":isDisabled,className,children:[(0,jsx_runtime.jsx)(MultiSelectInput,{name,value,invalid,checked:isSelected,disabled:isDisabled,onChange:handleChange,overlay:"overlay"===variant,"aria-invalid":invalid,ref}),(0,jsx_runtime.jsx)(MultiSelectInputOverlay,{overlay:"overlay"===variant,invalid,"aria-hidden":!0,children:(0,jsx_runtime.jsx)("pixiv-icon",{name:"24/Check","unsafe-non-guideline-scale":16/24})}),Boolean(children)&&(0,jsx_runtime.jsx)(MultiSelectLabel,{children})]})})),components_MultiSelect=(0,react.memo)(MultiSelect),MultiSelectRoot=styled_components_browser_esm.ZP.label`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: ${({theme})=>(0,index_esm.px)(theme.spacing[4])};
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`,MultiSelectLabel=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text2);

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`,MultiSelectInput=styled_components_browser_esm.ZP.input.attrs({type:"checkbox"})`
  &[type='checkbox'] {
    appearance: none;
    display: block;
    width: 20px;
    height: 20px;
    margin: 0;
    background-color: var(--charcoal-text3);
    border-radius: 999999px;
    transition: 0.2s background-color, 0.2s box-shadow;

    &:checked {
      background-color: var(--charcoal-brand);
      &:hover {
        &:not(:disabled):not([aria-disabled]),
        &[aria-disabled='false'] {
          background-color: var(--charcoal-brand-hover);
        }
      }

      &:active {
        &:not(:disabled):not([aria-disabled]),
        &[aria-disabled='false'] {
          background-color: var(--charcoal-brand-press);
        }
      }
    }

    &:hover {
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        background-color: var(--charcoal-text3-hover);
      }
    }

    &:active {
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        background-color: var(--charcoal-text3-press);
      }
    }

    ${({invalid,overlay})=>invalid&&!overlay&&styled_components_browser_esm.iv`
        &:not(:disabled):not([aria-disabled]),
        &[aria-disabled='false'] {
          box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
        }
      `}
    ${({overlay})=>overlay&&styled_components_browser_esm.iv`
        background-color: var(--charcoal-surface4);
      `}
  }
`,MultiSelectInputOverlay=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999999px;
  color: var(--charcoal-text5);
  transition: 0.2s box-shadow;
  ${({invalid,overlay})=>invalid&&overlay&&styled_components_browser_esm.iv`
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
      }
    `}

  ${({overlay})=>overlay&&styled_components_browser_esm.iv`
      border-color: var(--charcoal-text5);
      border-width: 2px;
      border-style: solid;
    `}
`;function MultiSelectGroup({className,name,label,selected,onChange,disabled=!1,readonly=!1,invalid=!1,children}){const handleChange=(0,react.useCallback)((payload=>{const index=selected.indexOf(payload.value);payload.selected?index<0&&onChange([...selected,payload.value]):index>=0&&onChange([...selected.slice(0,index),...selected.slice(index+1)])}),[onChange,selected]);return(0,jsx_runtime.jsx)(MultiSelectGroupContext.Provider,{value:{name,selected:Array.from(new Set(selected)),disabled,readonly,invalid,onChange:handleChange},children:(0,jsx_runtime.jsx)("div",{className,"aria-label":label,"data-testid":"SelectGroup",children})})}MultiSelectGroup.displayName="MultiSelectGroup";try{MultiSelectGroup.displayName="MultiSelectGroup",MultiSelectGroup.__docgenInfo={description:"",displayName:"MultiSelectGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selected: string[]) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/MultiSelect/index.tsx#MultiSelectGroup"]={docgenInfo:MultiSelectGroup.__docgenInfo,name:"MultiSelectGroup",path:"packages/react/src/components/MultiSelect/index.tsx#MultiSelectGroup"})}catch(__react_docgen_typescript_loader_error){}try{MultiSelect.displayName="MultiSelect",MultiSelect.__docgenInfo={description:"",displayName:"MultiSelect",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"overlay"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((payload: { value: string; selected: boolean; }) => void)"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/MultiSelect/index.tsx#MultiSelect"]={docgenInfo:MultiSelect.__docgenInfo,name:"MultiSelect",path:"packages/react/src/components/MultiSelect/index.tsx#MultiSelect"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"MultiSelect",component:components_MultiSelect,argTypes:{name:{control:{type:"text"}},label:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},invalid:{control:{type:"boolean"}},variant:{control:{type:"inline-radio",options:["default","overlay"]}}}},StyledMultiSelectGroup=(0,styled_components_browser_esm.ZP)(MultiSelectGroup)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`,Template=({name,label,selected,onChange,disabled,readonly,invalid,variant,className})=>(0,jsx_runtime.jsx)(StyledMultiSelectGroup,{name,label,onChange,disabled,readonly,invalid,selected:selected?["選択肢1","選択肢3"]:[],children:[1,2,3,4].map((idx=>(0,jsx_runtime.jsxs)(components_MultiSelect,{value:`選択肢${idx}`,variant,className,children:["選択肢",idx]},idx)))});Template.displayName="Template";const Default=Template.bind({});Default.args={name:"",label:"",selected:!0,disabled:!1,readonly:!1,invalid:!1,variant:"default",onChange:selected=>console.log(selected)};const Playground=({className,...props})=>{const[selected,setSelected]=(0,react.useState)([]);return(0,jsx_runtime.jsx)(StyledMultiSelectGroup,{...props,selected,onChange:setSelected,children:[1,2,3,4].map((idx=>(0,jsx_runtime.jsxs)(components_MultiSelect,{value:`選択肢${idx}`,variant:props.variant,className,children:["選択肢",idx]},idx)))})};Playground.displayName="Playground",Playground.args={name:"defaultName",label:"",disabled:!1,readonly:!1,invalid:!1,variant:"default"};const Invalid=({className,...props})=>{const[selected,setSelected]=(0,react.useState)([]);return(0,jsx_runtime.jsx)(StyledMultiSelectGroup,{...props,selected,onChange:setSelected,invalid:!0,children:[1,2,3,4].map((idx=>(0,jsx_runtime.jsxs)(components_MultiSelect,{value:`選択肢${idx}`,variant:props.variant,className,children:["選択肢",idx]},idx)))})};Invalid.displayName="Invalid",Invalid.args={name:"defaultName",label:"",disabled:!1,readonly:!1,variant:"default"};const Overlay=({className,...props})=>{const[selected,setSelected]=(0,react.useState)([]);return(0,jsx_runtime.jsx)(StyledMultiSelectGroup,{...props,selected,onChange:setSelected,children:[1,2,3,4].map((idx=>(0,jsx_runtime.jsxs)(components_MultiSelect,{value:`選択肢${idx}`,variant:"overlay",className,children:["選択肢",idx]},idx)))})};Overlay.displayName="Overlay",Overlay.args={name:"defaultName",label:"",disabled:!1,readonly:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  name,\n  label,\n  selected,\n  onChange,\n  disabled,\n  readonly,\n  invalid,\n  variant,\n  className\n}) => {\n  return <StyledMultiSelectGroup {...{\n    name,\n    label,\n    onChange,\n    disabled,\n    readonly,\n    invalid\n  }} selected={selected ? ['選択肢1', '選択肢3'] : []}>\n      {[1, 2, 3, 4].map(idx => <MultiSelect value={`選択肢${idx}`} variant={variant} key={idx} className={className}>\n          選択肢{idx}\n        </MultiSelect>)}\n    </StyledMultiSelectGroup>;\n}",...Default.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  className,\n  ...props\n}) => {\n  const [selected, setSelected] = useState<string[]>([]);\n  return <StyledMultiSelectGroup {...props} selected={selected} onChange={setSelected}>\n      {[1, 2, 3, 4].map(idx => <MultiSelect value={`選択肢${idx}`} variant={props.variant} key={idx} className={className}>\n          選択肢{idx}\n        </MultiSelect>)}\n    </StyledMultiSelectGroup>;\n}",...Playground.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"({\n  className,\n  ...props\n}) => {\n  const [selected, setSelected] = useState<string[]>([]);\n  return <StyledMultiSelectGroup {...props} selected={selected} onChange={setSelected} invalid>\n      {[1, 2, 3, 4].map(idx => <MultiSelect value={`選択肢${idx}`} variant={props.variant} key={idx} className={className}>\n          選択肢{idx}\n        </MultiSelect>)}\n    </StyledMultiSelectGroup>;\n}",...Invalid.parameters?.docs?.source}}},Overlay.parameters={...Overlay.parameters,docs:{...Overlay.parameters?.docs,source:{originalSource:'({\n  className,\n  ...props\n}) => {\n  const [selected, setSelected] = useState<string[]>([]);\n  return <StyledMultiSelectGroup {...props} selected={selected} onChange={setSelected}>\n      {[1, 2, 3, 4].map(idx => <MultiSelect value={`選択肢${idx}`} variant="overlay" key={idx} className={className}>\n          選択肢{idx}\n        </MultiSelect>)}\n    </StyledMultiSelectGroup>;\n}',...Overlay.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Playground","Invalid","Overlay"];try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selected: string[]) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"overlay"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/MultiSelect/index.story.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"packages/react/src/components/MultiSelect/index.story.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=react-src-components-MultiSelect-index-story.fc5d99f7.iframe.bundle.js.map