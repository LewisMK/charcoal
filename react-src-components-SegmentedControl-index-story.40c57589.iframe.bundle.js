"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[9536],{"./packages/react/src/components/SegmentedControl/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ObjectSegments:()=>ObjectSegments,StringSegments:()=>StringSegments,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-stately/radio/dist/import.mjs"),radio_dist_import=__webpack_require__("./node_modules/@react-aria/radio/dist/import.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioContext=(0,react.createContext)(null),RadioProvider=({value,children})=>(0,jsx_runtime.jsx)(RadioContext.Provider,{value,children});RadioProvider.displayName="RadioProvider";try{RadioProvider.displayName="RadioProvider",RadioProvider.__docgenInfo={description:"",displayName:"RadioProvider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"RadioGroupState"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/SegmentedControl/RadioGroupContext.tsx#RadioProvider"]={docgenInfo:RadioProvider.__docgenInfo,name:"RadioProvider",path:"packages/react/src/components/SegmentedControl/RadioGroupContext.tsx#RadioProvider"})}catch(__react_docgen_typescript_loader_error){}var styled=__webpack_require__("./packages/react/src/styled.ts");const SegmentedControl=(0,react.forwardRef)((function SegmentedControlInner(props,ref){const ariaRadioGroupProps=(0,react.useMemo)((()=>({...props,isDisabled:props.disabled,isReadOnly:props.readonly,isRequired:props.required,"aria-label":props.name})),[props]),state=(0,dist_import.w)(ariaRadioGroupProps),{radioGroupProps}=(0,radio_dist_import.a)(ariaRadioGroupProps,state),segmentedControlItems=(0,react.useMemo)((()=>props.data.map((d=>"string"==typeof d?{value:d,label:d}:d))),[props.data]);return(0,jsx_runtime.jsx)(SegmentedControlRoot,{ref,...radioGroupProps,className:props.className,children:(0,jsx_runtime.jsx)(RadioProvider,{value:state,children:segmentedControlItems.map((item=>(0,jsx_runtime.jsx)(Segmented,{value:item.value,disabled:item.disabled,children:item.label},item.value)))})})})),components_SegmentedControl=(0,react.memo)(SegmentedControl),Segmented=props=>{const state=(()=>{const state=(0,react.useContext)(RadioContext);if(null===state)throw new Error("`<RadioProvider>` is not likely mounted.");return state})(),ref=(0,react.useRef)(null),ariaRadioProps=(0,react.useMemo)((()=>({value:props.value,isDisabled:props.disabled,children:props.children})),[props]),{inputProps,isDisabled,isSelected}=(0,radio_dist_import.x)(ariaRadioProps,state,ref);return(0,jsx_runtime.jsxs)(SegmentedRoot,{"aria-disabled":isDisabled||state.isReadOnly,checked:isSelected,children:[(0,jsx_runtime.jsx)(SegmentedInput,{...inputProps,ref}),(0,jsx_runtime.jsx)(RadioLabel,{children:(0,jsx_runtime.jsx)(SegmentedLabelInner,{children:props.children})})]})};Segmented.displayName="Segmented";const SegmentedControlRoot=styled_components_browser_esm.ZP.div`
  display: inline-flex;
  align-items: center;

  ${(0,styled.r)((o=>[o.bg.surface3,o.borderRadius(16)]))}
`,SegmentedRoot=styled_components_browser_esm.ZP.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 32px;

  ${index_esm.t0} {
    cursor: default;
  }

  ${({checked})=>(0,styled.r)((o=>[o.padding.horizontal(16),o.borderRadius(16),o.disabled,!0===checked&&o.bg.brand,!0===checked?o.font.text5:o.font.text2]))}
`,SegmentedInput=styled_components_browser_esm.ZP.input`
  position: absolute;

  height: 0px;
  width: 0px;
  padding: 0;
  margin: 0;

  appearance: none;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
`,RadioLabel=styled_components_browser_esm.ZP.div`
  background: transparent;
  display: flex;
  align-items: center;
  height: 22px;
`,SegmentedLabelInner=styled_components_browser_esm.ZP.div`
  ${(0,styled.r)((o=>[o.typography(14)]))}
`;try{SegmentedControl.displayName="SegmentedControl",SegmentedControl.__docgenInfo={description:"",displayName:"SegmentedControl",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string[] | SegmentedControlItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/SegmentedControl/index.tsx#SegmentedControl"]={docgenInfo:SegmentedControl.__docgenInfo,name:"SegmentedControl",path:"packages/react/src/components/SegmentedControl/index.tsx#SegmentedControl"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"SegmentedControl",component:components_SegmentedControl},StringSegments=props=>(0,jsx_runtime.jsx)(components_SegmentedControl,{...props,onChange:(0,dist.aD)("change")});StringSegments.displayName="StringSegments",StringSegments.args={name:"test",data:["option1","option2","option3"],disabled:!1,readonly:!1,required:!1};const ObjectSegments=props=>(0,jsx_runtime.jsx)(components_SegmentedControl,{...props,onChange:(0,dist.aD)("change")});ObjectSegments.displayName="ObjectSegments",ObjectSegments.args={name:"test",data:[{label:"選択肢1",value:"option1"},{label:"選択肢2",value:"option2"},{label:"選択肢3",value:"option3"},{label:"選択肢4",value:"option4",disabled:!0}],disabled:!1,readonly:!1,required:!1},StringSegments.parameters={...StringSegments.parameters,docs:{...StringSegments.parameters?.docs,source:{originalSource:"props => {\n  return <SegmentedControl {...props} onChange={action('change')} />;\n}",...StringSegments.parameters?.docs?.source}}},ObjectSegments.parameters={...ObjectSegments.parameters,docs:{...ObjectSegments.parameters?.docs,source:{originalSource:"props => {\n  return <SegmentedControl {...props} onChange={action('change')} />;\n}",...ObjectSegments.parameters?.docs?.source}}};const __namedExportsOrder=["StringSegments","ObjectSegments"]},"./packages/react/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)}}]);
//# sourceMappingURL=react-src-components-SegmentedControl-index-story.40c57589.iframe.bundle.js.map