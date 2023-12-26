"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[3846],{"./packages/react/src/components/TextArea/TextArea.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoHeight:()=>AutoHeight,Default:()=>Default,HasCount:()=>HasCount,HasLabel:()=>HasLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_story});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Clickable=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),dist_import=__webpack_require__("./node_modules/@react-aria/textfield/dist/import.mjs"),visually_hidden_dist_import=__webpack_require__("./node_modules/@react-aria/visually-hidden/dist/import.mjs"),react=__webpack_require__("./node_modules/react/index.js"),_lib=__webpack_require__("./packages/react/src/_lib/index.ts"),TextField=__webpack_require__("./packages/react/src/components/TextField/index.tsx"),useFocusWithClick=__webpack_require__("./packages/react/src/components/TextField/useFocusWithClick.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextArea=(0,react.forwardRef)((function TextAreaInner({onChange,...props},forwardRef){const{className,showCount=!1,showLabel=!1,label,requiredText,subLabel,disabled=!1,required,invalid=!1,assistiveText,maxLength,autoHeight=!1,rows:initialRows=4}=props,{visuallyHiddenProps}=(0,visually_hidden_dist_import.S)(),textareaRef=(0,react.useRef)(null),ariaRef=(0,react.useRef)(null),[count,setCount]=(0,react.useState)((0,_lib.$j)(props.value??"")),[rows,setRows]=(0,react.useState)(initialRows),syncHeight=(0,react.useCallback)((textarea=>{const rows=(`${textarea.value}\n`.match(/\n/gu)?.length??0)||1;setRows(initialRows<=rows?rows:initialRows)}),[initialRows]),nonControlled=void 0===props.value,handleChange=(0,react.useCallback)((value=>{const count=(0,_lib.$j)(value);void 0!==maxLength&&count>maxLength||(nonControlled&&setCount(count),autoHeight&&null!==textareaRef.current&&syncHeight(textareaRef.current),onChange?.(value))}),[autoHeight,maxLength,nonControlled,onChange,syncHeight]);(0,react.useEffect)((()=>{setCount((0,_lib.$j)(props.value??""))}),[props.value]);const{inputProps,labelProps,descriptionProps,errorMessageProps}=(0,dist_import.E)({inputElementType:"textarea",isDisabled:disabled,isRequired:required,validationState:invalid?"invalid":"valid",description:!invalid&&assistiveText,errorMessage:invalid&&assistiveText,onChange:handleChange,...props},ariaRef);(0,react.useEffect)((()=>{autoHeight&&null!==textareaRef.current&&syncHeight(textareaRef.current)}),[autoHeight,syncHeight]);const containerRef=(0,react.useRef)(null);return(0,useFocusWithClick.Q)(containerRef,ariaRef),(0,jsx_runtime.jsxs)(TextFieldRoot,{className,isDisabled:disabled,children:[(0,jsx_runtime.jsx)(TextField.pU,{label,requiredText,required,subLabel,...labelProps,...showLabel?{}:visuallyHiddenProps}),(0,jsx_runtime.jsxs)(StyledTextareaContainer,{ref:containerRef,invalid,rows:showCount?rows+1:rows,"aria-disabled":!0===disabled?"true":void 0,children:[(0,jsx_runtime.jsx)(StyledTextarea,{ref:(0,_lib.lq)(textareaRef,forwardRef,ariaRef),rows,noBottomPadding:showCount,...inputProps}),showCount&&(0,jsx_runtime.jsx)(MultiLineCounter,{children:void 0!==maxLength?`${count}/${maxLength}`:count})]}),null!=assistiveText&&0!==assistiveText.length&&(0,jsx_runtime.jsx)(TextField.TT,{invalid,...invalid?errorMessageProps:descriptionProps,children:assistiveText})]})})),components_TextArea=TextArea,TextFieldRoot=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;

  ${p=>p.isDisabled&&{opacity:p.theme.elementEffect.disabled.opacity}}
`,StyledTextareaContainer=styled_components_browser_esm.ZP.div`
  position: relative;
  overflow: hidden;

  color: var(--charcoal-text2);
  background-color: var(--charcoal-surface3);
  border-radius: 4px;
  transition: 0.2s background-color, 0.2s box-shadow;

  ${({rows})=>styled_components_browser_esm.iv`
    height: calc(22px * ${rows} + 18px);
  `};

  :not([aria-disabled]):hover,
  [aria-disabled='false']:hover {
    background-color: var(--charcoal-surface3-hover);
  }
  :focus-within {
    outline: none;
    box-shadow: 0 0 0 4px
      ${p=>p.invalid?"rgba(255,43,0,0.32)":"rgba(0, 150, 250, 0.32);"};
  }

  ${p=>p.invalid&&styled_components_browser_esm.iv`
      box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
    `}
`,StyledTextarea=styled_components_browser_esm.ZP.textarea`
  border: none;
  outline: none;
  resize: none;
  font-family: inherit;
  color: inherit;
  box-sizing: border-box;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding: calc(9px / 0.875) calc(8px / 0.875)
    ${p=>p.noBottomPadding?0:""};

  ${({rows=1,noBottomPadding})=>styled_components_browser_esm.iv`
    height: calc(22px / 0.875 * ${rows} + ${noBottomPadding?9:20}px);
  `};

  /* Display box-shadow for iOS Safari */
  appearance: none;

  background: none;

  &::placeholder {
    color: var(--charcoal-text3);
  }
`,MultiLineCounter=styled_components_browser_esm.ZP.span`
  position: absolute;
  bottom: 9px;
  right: 8px;

  line-height: 22px;
  font-size: 14px;
  color: var(--charcoal-text3);
`;try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<Element>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<Element>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<Element>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<Element>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextArea/index.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"packages/react/src/components/TextArea/index.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const TextArea_story={title:"TextArea",component:components_TextArea,argTypes:{},args:{showLabel:!1,label:"Label",assistiveText:"",disabled:!1,required:!1,invalid:!1}},Container=styled_components_browser_esm.ZP.div`
  display: grid;
  gap: ${({theme})=>(0,index_esm.px)(theme.spacing[24])};
`,Template=args=>(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(components_TextArea,{label:"Label",requiredText:"*必須",subLabel:(0,jsx_runtime.jsx)(Clickable.Z,{onClick:(0,dist.aD)("label-click"),children:"Text Link"}),placeholder:"Text Area",...args})});Template.displayName="Template";const Default=Template.bind({}),HasLabel=Template.bind({});HasLabel.args={showLabel:!0,assistiveText:"Assistive text",required:!0};const HasCount=Template.bind({});HasCount.args={showCount:!0,maxLength:100};const AutoHeight=args=>(0,jsx_runtime.jsx)(components_TextArea,{label:"Label",placeholder:"TextArea",...args});AutoHeight.displayName="AutoHeight",AutoHeight.args={autoHeight:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <Container>\n    <TextArea label="Label" requiredText="*必須" subLabel={<Clickable onClick={action(\'label-click\')}>Text Link</Clickable>} placeholder="Text Area" {...args} />\n  </Container>',...Default.parameters?.docs?.source}}},HasLabel.parameters={...HasLabel.parameters,docs:{...HasLabel.parameters?.docs,source:{originalSource:'args => <Container>\n    <TextArea label="Label" requiredText="*必須" subLabel={<Clickable onClick={action(\'label-click\')}>Text Link</Clickable>} placeholder="Text Area" {...args} />\n  </Container>',...HasLabel.parameters?.docs?.source}}},HasCount.parameters={...HasCount.parameters,docs:{...HasCount.parameters?.docs,source:{originalSource:'args => <Container>\n    <TextArea label="Label" requiredText="*必須" subLabel={<Clickable onClick={action(\'label-click\')}>Text Link</Clickable>} placeholder="Text Area" {...args} />\n  </Container>',...HasCount.parameters?.docs?.source}}},AutoHeight.parameters={...AutoHeight.parameters,docs:{...AutoHeight.parameters?.docs,source:{originalSource:'args => <TextArea label="Label" placeholder="TextArea" {...args} />',...AutoHeight.parameters?.docs?.source}}};const __namedExportsOrder=["Default","HasLabel","HasCount","AutoHeight"];try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<Element>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<Element>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<Element>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextArea/TextArea.story.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"packages/react/src/components/TextArea/TextArea.story.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{HasLabel.displayName="HasLabel",HasLabel.__docgenInfo={description:"",displayName:"HasLabel",props:{autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<Element>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<Element>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<Element>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextArea/TextArea.story.tsx#HasLabel"]={docgenInfo:HasLabel.__docgenInfo,name:"HasLabel",path:"packages/react/src/components/TextArea/TextArea.story.tsx#HasLabel"})}catch(__react_docgen_typescript_loader_error){}try{HasCount.displayName="HasCount",HasCount.__docgenInfo={description:"",displayName:"HasCount",props:{autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<Element>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<Element>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<Element>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextArea/TextArea.story.tsx#HasCount"]={docgenInfo:HasCount.__docgenInfo,name:"HasCount",path:"packages/react/src/components/TextArea/TextArea.story.tsx#HasCount"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/_lib/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}function mergeRefs(...refs){return value=>{for(const ref of refs)"function"==typeof ref?ref(value):null!==ref&&(ref.current=value)}}function countCodePointsInString(string){return Array.from(string).length}__webpack_require__.d(__webpack_exports__,{$j:()=>countCodePointsInString,lq:()=>mergeRefs,t1:()=>unreachable})},"./packages/react/src/components/Clickable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Clickable});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultLink=react.forwardRef((function DefaultLink({to,children,...rest},ref){return(0,jsx_runtime.jsx)("a",{href:to,ref,...rest,children})})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react.createContext(DefaultValue);function ComponentAbstraction({children,components}){return(0,jsx_runtime.jsx)(ComponentAbstractionContext.Provider,{value:{...DefaultValue,...components},children})}ComponentAbstraction.displayName="ComponentAbstraction";try{ComponentAbstraction.displayName="ComponentAbstraction",ComponentAbstraction.__docgenInfo={description:"",displayName:"ComponentAbstraction",props:{components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Partial<Components>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"]={docgenInfo:ComponentAbstraction.__docgenInfo,name:"ComponentAbstraction",path:"packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"})}catch(__react_docgen_typescript_loader_error){}try{DefaultLink.displayName="DefaultLink",DefaultLink.__docgenInfo={description:"",displayName:"DefaultLink",props:{to:{defaultValue:null,description:"リンクのURL",name:"to",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"]={docgenInfo:DefaultLink.__docgenInfo,name:"DefaultLink",path:"packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const Clickable=react.forwardRef((function Clickable(props,ref){const{Link}=function useComponentAbstraction(){return(0,react.useContext)(ComponentAbstractionContext)}(),isLink="to"in props,as=isLink?Link:"button",ariaDisabled=!(!isLink||!0!==props.disabled)||void 0;let rest=props;if(isLink){const{disabled,..._rest}=props;rest=_rest}return(0,jsx_runtime.jsx)(StyledClickableDiv,{...rest,ref,as,"aria-disabled":ariaDisabled})})),components_Clickable=Clickable,StyledClickableDiv=styled_components_browser_esm.ZP.div`
  cursor: pointer;

  ${index_esm.t0} {
    cursor: default;
  }

  /* Reset button appearance */
  appearance: none;
  background: transparent;
  padding: 0;
  border-style: none;
  outline: none;
  color: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  /* Change the font styles in all browsers. */
  font: inherit;

  /* Remove the margin in Firefox and Safari. */
  margin: 0;

  /* Show the overflow in Edge. */
  overflow: visible;

  /* Remove the inheritance of text transform in Firefox. */
  text-transform: none;

  /* Remove the inner border and padding in Firefox. */
  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
`;try{Clickable.displayName="Clickable",Clickable.__docgenInfo={description:"",displayName:"Clickable",props:{disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Clickable/index.tsx#Clickable"]={docgenInfo:Clickable.__docgenInfo,name:"Clickable",path:"packages/react/src/components/Clickable/index.tsx#Clickable"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/FieldLabel/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FieldLabel=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldLabel({style,className,label,required=!1,requiredText,subLabel,...labelProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FieldLabelWrapper,{style,className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label,{ref,...labelProps,children:label}),required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RequiredText,{children:requiredText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SubLabelClickable,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:subLabel})})]})})),__WEBPACK_DEFAULT_EXPORT__=FieldLabel,Label=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  display: flow-root;
  color: var(--charcoal-text1);

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
`,RequiredText=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
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
`,SubLabelClickable=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text3);
  transition: 0.2s color, 0.2s box-shadow;

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

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      color: var(--charcoal-text3-hover);
    }
    &:active {
      color: var(--charcoal-text3-press);
    }
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }
  }
`,FieldLabelWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-flex;
  align-items: center;

  > ${RequiredText} {
    margin-left: 4px;
  }

  > ${SubLabelClickable} {
    margin-left: auto;
  }
`;try{FieldLabel.displayName="FieldLabel",FieldLabel.__docgenInfo={description:"",displayName:"FieldLabel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/FieldLabel/index.tsx#FieldLabel"]={docgenInfo:FieldLabel.__docgenInfo,name:"FieldLabel",path:"packages/react/src/components/FieldLabel/index.tsx#FieldLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/TextField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TT:()=>AssistiveText,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,pU:()=>TextFieldLabel});var _react_aria_textfield__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-aria/textfield/dist/import.mjs"),_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/visually-hidden/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_FieldLabel__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/components/FieldLabel/index.tsx"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/_lib/index.ts"),_useFocusWithClick__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/components/TextField/useFocusWithClick.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function SingleLineTextFieldInner({onChange,...props},forwardRef){const{className,showLabel=!1,showCount=!1,label,requiredText,subLabel,disabled=!1,required,invalid=!1,assistiveText,maxLength,prefix=null,suffix=null}=props,{visuallyHiddenProps}=(0,_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__.S)(),ariaRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_lib__WEBPACK_IMPORTED_MODULE_3__.$j)(props.value??"")),nonControlled=void 0===props.value,handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{const count=(0,_lib__WEBPACK_IMPORTED_MODULE_3__.$j)(value);void 0!==maxLength&&count>maxLength||(nonControlled&&setCount(count),onChange?.(value))}),[maxLength,nonControlled,onChange]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setCount((0,_lib__WEBPACK_IMPORTED_MODULE_3__.$j)(props.value??""))}),[props.value]);const{inputProps,labelProps,descriptionProps,errorMessageProps}=(0,_react_aria_textfield__WEBPACK_IMPORTED_MODULE_4__.E)({inputElementType:"input",isDisabled:disabled,isRequired:required,validationState:invalid?"invalid":"valid",description:!invalid&&assistiveText,errorMessage:invalid&&assistiveText,onChange:handleChange,...props},ariaRef),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,_useFocusWithClick__WEBPACK_IMPORTED_MODULE_5__.Q)(containerRef,ariaRef),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(TextFieldRoot,{className,isDisabled:disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextFieldLabel,{label,requiredText,required,subLabel,...labelProps,...showLabel?{}:visuallyHiddenProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledInputContainer,{ref:containerRef,invalid,"aria-disabled":!0===disabled||void 0,hasPrefix:null!=prefix,hasSuffix:null!=suffix||showCount,children:[prefix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PrefixContainer,{children:prefix}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledInput,{ref:(0,_lib__WEBPACK_IMPORTED_MODULE_3__.lq)(forwardRef,ariaRef),invalid,...inputProps}),(suffix||showCount)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SuffixContainer,{children:[suffix,showCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SingleLineCounter,{children:void 0!==maxLength?`${count}/${maxLength}`:count})]})]}),null!=assistiveText&&0!==assistiveText.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AssistiveText,{invalid,...invalid?errorMessageProps:descriptionProps,children:assistiveText})]})})),__WEBPACK_DEFAULT_EXPORT__=TextField,TextFieldRoot=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div`
  display: flex;
  flex-direction: column;

  ${p=>p.isDisabled&&{opacity:p.theme.elementEffect.disabled.opacity}}
`,TextFieldLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(_FieldLabel__WEBPACK_IMPORTED_MODULE_7__.Z)`
  margin-bottom: 8px;
`,StyledInputContainer=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div`
  display: grid;
  grid-template-columns: ${p=>[p.hasPrefix&&"auto","1fr",p.hasSuffix&&"auto"].filter(Boolean).join(" ")};
  height: 40px;
  transition: 0.2s background-color, 0.2s box-shadow;
  color: var(--charcoal-text2);
  background-color: var(--charcoal-surface3);
  border-radius: 4px;
  gap: 4px;
  padding: 0 8px;
  line-height: 22px;
  font-size: 14px;

  :not(:disabled):not([aria-disabled]):hover,
  [aria-disabled='false']:hover {
    background-color: var(--charcoal-surface3-hover);
  }

  :not(:disabled):not([aria-disabled]):active,
  [aria-disabled='false']:active {
    outline: none;
    box-shadow: 0 0 0 4px
      ${p=>p.invalid?"rgba(255,43,0,0.32)":"rgba(0, 150, 250, 0.32);"};
  }

  :focus-within {
    outline: none;
    box-shadow: 0 0 0 4px
      ${p=>p.invalid?"rgba(255,43,0,0.32)":"rgba(0, 150, 250, 0.32);"};
  }

  ${p=>p.invalid&&styled_components__WEBPACK_IMPORTED_MODULE_6__.iv`
      box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
    `}
`,PrefixContainer=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div`
  display: flex;
  align-items: center;
`,SuffixContainer=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.span`
  display: flex;
  align-items: center;
  gap: 8px;
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.input`
  border: none;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  height: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding-left: 0;
  padding-right: 0;
  border-radius: calc(4px / 0.875);

  /* Display box-shadow for iOS Safari */
  appearance: none;
  background: transparent;

  color: var(--charcoal-text2);
  &::placeholder {
    color: var(--charcoal-text3);
  }
`,SingleLineCounter=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.span`
  line-height: 22px;
  font-size: 14px;
  color: var(--charcoal-text3);
`,AssistiveText=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 4px;
  margin-bottom: -4px;
  color: ${p=>`var(--charcoal-${p.invalid?"assertive":"text2"})`};
`;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<Element>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<Element>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<Element>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<Element>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"packages/react/src/components/TextField/index.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}try{TextFieldLabel.displayName="TextFieldLabel",TextFieldLabel.__docgenInfo={description:"",displayName:"TextFieldLabel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#TextFieldLabel"]={docgenInfo:TextFieldLabel.__docgenInfo,name:"TextFieldLabel",path:"packages/react/src/components/TextField/index.tsx#TextFieldLabel"})}catch(__react_docgen_typescript_loader_error){}try{AssistiveText.displayName="AssistiveText",AssistiveText.__docgenInfo={description:"",displayName:"AssistiveText",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#AssistiveText"]={docgenInfo:AssistiveText.__docgenInfo,name:"AssistiveText",path:"packages/react/src/components/TextField/index.tsx#AssistiveText"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/TextField/useFocusWithClick.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>useFocusWithClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useFocusWithClick(containerRef,inputRef){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const el=containerRef.current;if(el){const handleDown=e=>{e.target!==inputRef.current&&inputRef.current?.focus()};return el.addEventListener("click",handleDown),()=>{el.removeEventListener("click",handleDown)}}}))}}}]);
//# sourceMappingURL=react-src-components-TextArea-TextArea-story.22ce2e15.iframe.bundle.js.map