"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[2780],{"./packages/react/src/_lib/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}function mergeRefs(...refs){return value=>{for(const ref of refs)"function"==typeof ref?ref(value):null!==ref&&(ref.current=value)}}function countCodePointsInString(string){return Array.from(string).length}__webpack_require__.d(__webpack_exports__,{$j:()=>countCodePointsInString,lq:()=>mergeRefs,t1:()=>unreachable})},"./packages/react/src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/_lib/index.ts"),_Clickable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Button({children,variant="Default",size="M",fullWidth:fixed=!1,disabled=!1,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledButton,{...rest,disabled,$background:variantToBackground(variant),$color:variantToFont(variant),$size:size,$fullWidth:fixed,ref,children})})),__WEBPACK_DEFAULT_EXPORT__=Button,horizontalPaddingSmall=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  padding-right: 16px;
  padding-left: 16px;
`,horizontalPaddingMedium=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  padding-right: 24px;
  padding-left: 24px;
`,StyledButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Clickable__WEBPACK_IMPORTED_MODULE_3__.Z)`
  width: ${p=>p.$fullWidth?"stretch":"min-content"};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  border-radius: 999999px;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;

  ${p=>"M"===p.$size?horizontalPaddingMedium:horizontalPaddingSmall}

  color: var(--charcoal-${p=>p.$color});
  background-color: var(--charcoal-${p=>p.$background});
  transition: 0.2s color, 0.2s background-color, 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }

    &:hover {
      color: var(--charcoal-${p=>p.$color}-hover);
      background-color: var(--charcoal-${p=>p.$background}-hover);
    }
    &:active {
      color: var(--charcoal-${p=>p.$color}-press);
      background-color: var(--charcoal-${p=>p.$background}-press);
    }
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }

  /* よく考えたらheight=32って定義が存在しないな... */
  height: ${p=>"M"===p.$size?40:32}px;
`;function variantToBackground(variant){switch(variant){case"Overlay":return"surface4";case"Default":return"surface3";case"Primary":return"brand";case"Navigation":return"surface6";case"Danger":return"assertive";default:return(0,_lib__WEBPACK_IMPORTED_MODULE_4__.t1)(variant)}}function variantToFont(variant){switch(variant){case"Overlay":case"Primary":case"Navigation":case"Danger":return"text5";case"Default":return"text2";default:return(0,_lib__WEBPACK_IMPORTED_MODULE_4__.t1)(variant)}}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"Default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Overlay"'},{value:'"Primary"'},{value:'"Danger"'},{value:'"Navigation"'}]}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/react/src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Clickable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Clickable});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultLink=react.forwardRef((function DefaultLink({to,children,...rest},ref){return(0,jsx_runtime.jsx)("a",{href:to,ref,...rest,children})})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react.createContext(DefaultValue);function ComponentAbstraction({children,components}){return(0,jsx_runtime.jsx)(ComponentAbstractionContext.Provider,{value:{...DefaultValue,...components},children})}ComponentAbstraction.displayName="ComponentAbstraction";try{ComponentAbstraction.displayName="ComponentAbstraction",ComponentAbstraction.__docgenInfo={description:"",displayName:"ComponentAbstraction",props:{components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Partial<Components>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"]={docgenInfo:ComponentAbstraction.__docgenInfo,name:"ComponentAbstraction",path:"packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"})}catch(__react_docgen_typescript_loader_error){}try{DefaultLink.displayName="DefaultLink",DefaultLink.__docgenInfo={description:"",displayName:"DefaultLink",props:{to:{defaultValue:null,description:"リンクのURL",name:"to",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"]={docgenInfo:DefaultLink.__docgenInfo,name:"DefaultLink",path:"packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const Clickable=react.forwardRef((function Clickable(props,ref){const{Link}=function useComponentAbstraction(){return(0,react.useContext)(ComponentAbstractionContext)}(),isLink="to"in props,as=isLink?Link:"button",ariaDisabled=!(!isLink||!0!==props.disabled)||void 0;let rest=props;if(isLink){const{disabled,..._rest}=props;rest=_rest}return(0,jsx_runtime.jsx)(StyledClickableDiv,{...rest,ref,as,"aria-disabled":ariaDisabled})})),components_Clickable=Clickable,StyledClickableDiv=styled_components_browser_esm.ZP.div`
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
`;try{Clickable.displayName="Clickable",Clickable.__docgenInfo={description:"",displayName:"Clickable",props:{disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Clickable/index.tsx#Clickable"]={docgenInfo:Clickable.__docgenInfo,name:"Clickable",path:"packages/react/src/components/Clickable/index.tsx#Clickable"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/DropdownMenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DropdownMenuItem});var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuItem/index.tsx"),_MenuList_MenuListContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/MenuListContext.ts"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/styled.ts"),_Icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/components/Icon/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function DropdownMenuItem(props){const{value:ctxValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MenuList_MenuListContext__WEBPACK_IMPORTED_MODULE_2__.b),isSelected=props.value===ctxValue,{children,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.Z,{...rest,children:[isSelected&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text2ColorIcon,{name:"16/Check"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledSpan,{isSelected,children:props.children})]})}DropdownMenuItem.displayName="DropdownMenuItem";const StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.span`
  ${(0,_styled__WEBPACK_IMPORTED_MODULE_5__.r)((o=>[o.typography(14),o.font.text2]))};
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: ${({isSelected})=>!0===isSelected?0:20}px;
`,Text2ColorIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(_Icon__WEBPACK_IMPORTED_MODULE_6__.Z)`
  ${(0,_styled__WEBPACK_IMPORTED_MODULE_5__.r)((o=>[o.font.text2]))}
  padding-right: 4px;
`;try{DropdownMenuItem.displayName="DropdownMenuItem",DropdownMenuItem.__docgenInfo={description:"DropdownSelectorの選択肢として使うMenuItem",displayName:"DropdownMenuItem",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/DropdownMenuItem.tsx#DropdownMenuItem"]={docgenInfo:DropdownMenuItem.__docgenInfo,name:"DropdownMenuItem",path:"packages/react/src/components/DropdownSelector/DropdownMenuItem.tsx#DropdownMenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/ListItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItem});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ListItem(props){const{children,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledLi,{role:"option",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ItemDiv,{...rest,children:props.children})})}ListItem.displayName="ListItem";const StyledLi=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.li`
  list-style: none;
`,ItemDiv=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  cursor: pointer;
  outline: none;

  ${(0,_styled__WEBPACK_IMPORTED_MODULE_2__.r)((o=>[o.padding.horizontal(16),o.disabled]))}

  &[aria-disabled="true"] {
    cursor: default;
  }

  :hover,
  :focus,
  :focus-within {
    ${(0,_styled__WEBPACK_IMPORTED_MODULE_2__.r)((o=>[o.bg.surface3]))}
  }
`;try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"リストのある要素を示すコンポーネント\n\nasを用いて拡張することができる",displayName:"ListItem",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"CustomJSXElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/ListItem/index.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"packages/react/src/components/DropdownSelector/ListItem/index.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/MenuItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MenuItem});var ListItem=__webpack_require__("./packages/react/src/components/DropdownSelector/ListItem/index.tsx"),react=__webpack_require__("./node_modules/react/index.js");function handleFocusByKeyBoard(element,parent){if(parent.scrollHeight>parent.clientHeight){const rect=element.getBoundingClientRect(),parentRect=parent.getBoundingClientRect();rect.bottom>parentRect.bottom?parent.scrollTo({top:parent.scrollTop+rect.bottom-parentRect.bottom}):rect.top<parentRect.top&&parent.scrollTo({top:parent.scrollTop-(parentRect.top-rect.top)})}else!function scrollIfNeeded(element){const elementRect=element.getBoundingClientRect();elementRect.top>=0&&elementRect.bottom<=(window.innerHeight||document.documentElement.clientHeight)||element.scrollIntoView({block:"nearest"})}(element)}try{handleFocusByKeyBoard.displayName="handleFocusByKeyBoard",handleFocusByKeyBoard.__docgenInfo={description:"elementをparentのスクロールビューに入るようにスクロールする\nparentがスクロール可能でなければelementが見えるようにスクロールする",displayName:"handleFocusByKeyBoard",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuItem/internals/handleFocusByKeyBoard.tsx#handleFocusByKeyBoard"]={docgenInfo:handleFocusByKeyBoard.__docgenInfo,name:"handleFocusByKeyBoard",path:"packages/react/src/components/DropdownSelector/MenuItem/internals/handleFocusByKeyBoard.tsx#handleFocusByKeyBoard"})}catch(__react_docgen_typescript_loader_error){}var MenuListContext=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/MenuListContext.ts");function useMenuItemHandleKeyDown(value){const{setValue,root,values}=(0,react.useContext)(MenuListContext.b),setContextValue=(0,react.useCallback)((()=>{void 0!==value&&setValue(value)}),[value,setValue]);return[(0,react.useCallback)((e=>{if("Enter"===e.key)setContextValue();else if("ArrowUp"===e.key||"ArrowDown"===e.key){if(e.preventDefault(),!values||void 0===value)return;const index=values.indexOf(value);if(-1===index)return;const focusValue="ArrowUp"===e.key?index-1<0?values[values.length-1]:values[index-1]:index+1>=values.length?values[0]:values[index+1],next=root?.current?.querySelector(`[data-key='${focusValue}']`);next instanceof HTMLElement&&(next.focus({preventScroll:!0}),root?.current?.parentElement&&handleFocusByKeyBoard(next,root.current.parentElement))}}),[setContextValue,value,root,values]),setContextValue]}try{useMenuItemHandleKeyDown.displayName="useMenuItemHandleKeyDown",useMenuItemHandleKeyDown.__docgenInfo={description:"MenuListContextに含まれるvalue間で上下キーでfocusを移動できる\nEnterキーでMenuListContextに値を設定する\n上記2つの処理を含む処理(handleKeyDown)と、Enterキーを押下した処理(setContextValue)を配列で返す",displayName:"useMenuItemHandleKeyDown",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuItem/internals/useMenuItemHandleKeyDown.tsx#useMenuItemHandleKeyDown"]={docgenInfo:useMenuItemHandleKeyDown.__docgenInfo,name:"useMenuItemHandleKeyDown",path:"packages/react/src/components/DropdownSelector/MenuItem/internals/useMenuItemHandleKeyDown.tsx#useMenuItemHandleKeyDown"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MenuItem(props){const{children,as,...rest}=props,[handleKeyDown,setContextValue]=useMenuItemHandleKeyDown(props.value);return(0,jsx_runtime.jsx)(ListItem.Z,{...rest,as,"data-key":props.value,onKeyDown:handleKeyDown,onClick:!0===props.disabled?void 0:setContextValue,tabIndex:-1,"aria-disabled":props.disabled,children:props.children})}MenuItem.displayName="MenuItem";try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"上下キーでフォーカス移動でき、エンターキーで選択できるリストの項目\n基本的に`<MenuList>`, `<MenuGroup>`と合わせて使用する",displayName:"MenuItem",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"CustomJSXElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuItem/index.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"packages/react/src/components/DropdownSelector/MenuItem/index.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/MenuList/MenuListContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>MenuListContext});const MenuListContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({root:void 0,value:"",values:[],setValue:_v=>{}})},"./packages/react/src/components/DropdownSelector/MenuList/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MenuList});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),MenuListContext=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/MenuListContext.ts");function getValuesRecursive(children,values=[]){const childArray=react.Children.toArray(children);for(let i=0;i<childArray.length;i++){const child=childArray[i];if(react.isValidElement(child)){const props=child.props;if("value"in props&&"string"==typeof props.value){const childValue=props.value;values.push(childValue)}"children"in props&&props.children&&getValuesRecursive(props.children,values)}}}try{getValuesRecursive.displayName="getValuesRecursive",getValuesRecursive.__docgenInfo={description:"valueというpropsを持つ子要素の値を再起的に探索して配列にする",displayName:"getValuesRecursive",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuList/internals/getValuesRecursive.tsx#getValuesRecursive"]={docgenInfo:getValuesRecursive.__docgenInfo,name:"getValuesRecursive",path:"packages/react/src/components/DropdownSelector/MenuList/internals/getValuesRecursive.tsx#getValuesRecursive"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MenuList(props){const root=(0,react.useRef)(null),values=[];return getValuesRecursive(props.children,values),(0,jsx_runtime.jsx)(StyledUl,{ref:root,children:(0,jsx_runtime.jsx)(MenuListContext.b.Provider,{value:{value:props.value??"",root,values,setValue:v=>{props.onChange?.(v)}},children:props.children})})}MenuList.displayName="MenuList";const StyledUl=styled_components_browser_esm.ZP.ul`
  padding: 0;
  margin: 0;
`;try{MenuList.displayName="MenuList",MenuList.__docgenInfo={description:"上下キーでフォーカス移動でき、エンターキーで選択できるリストの項目\n基本的に`<MenuItem>`, `<MenuGroup>`と合わせて使用する",displayName:"MenuList",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((v: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuList/index.tsx#MenuList"]={docgenInfo:MenuList.__docgenInfo,name:"MenuList",path:"packages/react/src/components/DropdownSelector/MenuList/index.tsx#MenuList"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/Popover/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Popover});var react=__webpack_require__("./node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled=__webpack_require__("./packages/react/src/styled.ts"),ModalBackgroundContext=__webpack_require__("./packages/react/src/components/Modal/ModalBackgroundContext.tsx");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _empty=()=>null;function Popover(props){const defaultPopoverRef=(0,react.useRef)(null),finalPopoverRef=void 0===props.popoverRef?defaultPopoverRef:props.popoverRef,{popoverProps,underlayProps}=(0,dist_import.Sv)({triggerRef:props.triggerRef,popoverRef:finalPopoverRef,containerPadding:16},{close:props.onClose,isOpen:props.isOpen,open:_empty,setOpen:_empty,toggle:_empty});return function usePreventScroll(element,isOpen){(0,react.useEffect)((()=>{if(isOpen&&element){const defaultPaddingRight=element.style.paddingRight,defaultOverflow=element.style.overflow;return element.style.paddingRight=window.innerWidth-element.clientWidth+"px",element.style.overflow="hidden",()=>{element.style.paddingRight=defaultPaddingRight,element.style.overflow=defaultOverflow}}}),[element,isOpen])}((0,react.useContext)(ModalBackgroundContext.C),props.isOpen),props.isOpen?(0,jsx_runtime.jsxs)(dist_import.aV,{portalContainer:document.body,children:[(0,jsx_runtime.jsx)("div",{...underlayProps,style:{position:"fixed",zIndex:"number"==typeof popoverProps.style?.zIndex?popoverProps.style.zIndex-1:99999,inset:0}}),(0,jsx_runtime.jsxs)(DropdownPopoverDiv,{...popoverProps,ref:finalPopoverRef,children:[(0,jsx_runtime.jsx)(dist_import.U4,{onDismiss:()=>props.onClose()}),props.children,(0,jsx_runtime.jsx)(dist_import.U4,{onDismiss:()=>props.onClose()})]})]}):null}Popover.displayName="Popover";const DropdownPopoverDiv=styled_components_browser_esm.ZP.div`
  margin: 4px 0;
  list-style: none;
  overflow: auto;
  max-height: inherit;

  ${(0,styled.r)((o=>[o.bg.background1,o.border.default,o.borderRadius(8),o.padding.vertical(8)]))}
`;try{Popover.displayName="Popover",Popover.__docgenInfo={description:"画面の全面に動的に開くことができるコンテナ要素\n外の要素をクリックしたり、内部からフォーカスを移動した場合に自動的に閉じる\n\ntriggerRefの付近に画面内に収まるように表示される",displayName:"Popover",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<Element>"}},popoverRef:{defaultValue:null,description:"",name:"popoverRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/Popover/index.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"packages/react/src/components/DropdownSelector/Popover/index.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DropdownSelector});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),Icon=__webpack_require__("./packages/react/src/components/Icon/index.tsx"),FieldLabel=__webpack_require__("./packages/react/src/components/FieldLabel/index.tsx"),styled=__webpack_require__("./packages/react/src/styled.ts"),Popover=__webpack_require__("./packages/react/src/components/DropdownSelector/Popover/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DropdownPopover({children,...props}){const ref=(0,react.useRef)(null);return(0,react.useEffect)((()=>{props.isOpen&&ref.current&&props.triggerRef.current&&(ref.current.style.width=`${props.triggerRef.current.clientWidth}px`)}),[props.triggerRef,props.isOpen]),(0,react.useEffect)((()=>{if(props.isOpen&&void 0!==props.value){const windowScrollY=window.scrollY,windowScrollX=window.scrollX,selectedElement=document.querySelector(`[data-key="${props.value.toString()}"]`);selectedElement?.focus(),window.scrollTo(windowScrollX,windowScrollY)}}),[props.value,props.isOpen]),(0,jsx_runtime.jsx)(Popover.Z,{isOpen:props.isOpen,onClose:props.onClose,popoverRef:ref,triggerRef:props.triggerRef,children})}DropdownPopover.displayName="DropdownPopover";try{DropdownPopover.displayName="DropdownPopover",DropdownPopover.__docgenInfo={description:"DropdownSelectorの選択肢をを表示するためのPopover\ntriggerRefの要素と同じ幅になる\n表示の際にvalueが等しいDropdownMenuItemを中央に表示する",displayName:"DropdownPopover",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<Element>"}},popoverRef:{defaultValue:null,description:"",name:"popoverRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Key"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/DropdownPopover.tsx#DropdownPopover"]={docgenInfo:DropdownPopover.__docgenInfo,name:"DropdownPopover",path:"packages/react/src/components/DropdownSelector/DropdownPopover.tsx#DropdownPopover"})}catch(__react_docgen_typescript_loader_error){}function findPreviewRecursive(children,value){const childArray=react.Children.toArray(children);for(let i=0;i<childArray.length;i++){const child=childArray[i];if(react.isValidElement(child)){if("value"in child.props){if(child.props.value===value&&"children"in child.props){return child.props.children}}if("children"in child.props){const children=findPreviewRecursive(child.props.children,value);if(void 0!==children)return children}}}}try{findPreviewRecursive.displayName="findPreviewRecursive",findPreviewRecursive.__docgenInfo={description:"DropdownSelectorの選択中の要素をレンダリングするため、\n選択中のMenuItemを再帰的に探索しReactNodeを返す。",displayName:"findPreviewRecursive",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/utils/findPreviewRecursive.tsx#findPreviewRecursive"]={docgenInfo:findPreviewRecursive.__docgenInfo,name:"findPreviewRecursive",path:"packages/react/src/components/DropdownSelector/utils/findPreviewRecursive.tsx#findPreviewRecursive"})}catch(__react_docgen_typescript_loader_error){}var MenuList=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/index.tsx");const defaultRequiredText="*必須";function DropdownSelector(props){const triggerRef=(0,react.useRef)(null),[isOpen,setIsOpen]=(0,react.useState)(!1),preview=findPreviewRecursive(props.children,props.value);return(0,jsx_runtime.jsxs)(DropdownSelectorRoot,{"aria-disabled":props.disabled,children:[!0===props.showLabel&&(0,jsx_runtime.jsx)(DropdownFieldLabel,{label:props.label,required:props.required,requiredText:props.requiredText??defaultRequiredText,subLabel:props.subLabel}),(0,jsx_runtime.jsxs)(DropdownButton,{invalid:props.invalid,disabled:props.disabled,onClick:()=>{!0!==props.disabled&&setIsOpen(!0)},ref:triggerRef,type:"button",children:[(0,jsx_runtime.jsx)(DropdownButtonText,{children:void 0!==props.placeholder&&void 0===preview?props.placeholder:preview}),(0,jsx_runtime.jsx)(DropdownButtonIcon,{name:"16/Menu"})]}),isOpen&&(0,jsx_runtime.jsx)(DropdownPopover,{isOpen,onClose:()=>setIsOpen(!1),triggerRef,value:props.value,children:(0,jsx_runtime.jsx)(MenuList.Z,{value:props.value,onChange:v=>{props.onChange(v),setIsOpen(!1)},children:props.children})}),void 0!==props.assistiveText&&(0,jsx_runtime.jsx)(AssertiveText,{invalid:props.invalid,children:props.assistiveText})]})}DropdownSelector.displayName="DropdownSelector";const DropdownSelectorRoot=styled_components_browser_esm.ZP.div`
  display: inline-block;
  width: 100%;

  ${index_esm.t0} {
    cursor: default;
    ${(0,styled.r)((o=>o.disabled))}
  }
`,DropdownFieldLabel=(0,styled_components_browser_esm.ZP)(FieldLabel.Z)`
  width: 100%;

  ${(0,styled.r)((o=>o.margin.bottom(8)))}
`,DropdownButton=styled_components_browser_esm.ZP.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;

  ${index_esm.t0} {
    cursor: default;
  }

  ${({invalid})=>(0,styled.r)((o=>[o.padding.horizontal(8),o.outline.default.focus,o.bg.surface3,o.borderRadius(4),!0===invalid&&o.outline.assertive]))}
`,DropdownButtonText=styled_components_browser_esm.ZP.span`
  text-align: left;

  ${(0,styled.r)((o=>[o.typography(14),o.font.text2]))}
`,DropdownButtonIcon=(0,styled_components_browser_esm.ZP)(Icon.Z)`
  ${(0,styled.r)((o=>[o.font.text2]))}
`,AssertiveText=styled_components_browser_esm.ZP.div`
  ${({invalid})=>(0,styled.r)((o=>[o.typography(14),o.margin.top(8),!0===invalid?o.font.assertive:o.font.text2]))}
`;try{DropdownSelector.displayName="DropdownSelector",DropdownSelector.__docgenInfo={description:"",displayName:"DropdownSelector",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/index.tsx#DropdownSelector"]={docgenInfo:DropdownSelector.__docgenInfo,name:"DropdownSelector",path:"packages/react/src/components/DropdownSelector/index.tsx#DropdownSelector"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/FieldLabel/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FieldLabel=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldLabel({style,className,label,required=!1,requiredText,subLabel,...labelProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FieldLabelWrapper,{style,className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label,{ref,...labelProps,children:label}),required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RequiredText,{children:requiredText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SubLabelClickable,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:subLabel})})]})})),__WEBPACK_DEFAULT_EXPORT__=FieldLabel,Label=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
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
`;try{FieldLabel.displayName="FieldLabel",FieldLabel.__docgenInfo={description:"",displayName:"FieldLabel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/FieldLabel/index.tsx#FieldLabel"]={docgenInfo:FieldLabel.__docgenInfo,name:"FieldLabel",path:"packages/react/src/components/FieldLabel/index.tsx#FieldLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./packages/icons/dist/index.esm.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Icon=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function IconInner({name,scale,unsafeNonGuidelineScale,className,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pixiv-icon",{ref,name,scale,"unsafe-non-guideline-scale":unsafeNonGuidelineScale,class:className,...rest})})),__WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{unsafeNonGuidelineScale:{defaultValue:null,description:"",name:"unsafeNonGuidelineScale",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"16/Add"'},{value:'"16/Archive"'},{value:'"16/ArrowDown"'},{value:'"16/Artwork"'},{value:'"16/Back"'},{value:'"16/Book"'},{value:'"16/BookmarkOff"'},{value:'"16/BookmarkOn"'},{value:'"16/Check"'},{value:'"16/Comment"'},{value:'"16/Dot"'},{value:'"16/Error"'},{value:'"16/Filter"'},{value:'"16/ImageResponse"'},{value:'"16/Info"'},{value:'"16/Like"'},{value:'"16/Menu"'},{value:'"16/More"'},{value:'"16/Nextworks"'},{value:'"16/Pencil"'},{value:'"16/Question"'},{value:'"16/Ranking"'},{value:'"16/Remove"'},{value:'"16/Search"'},{value:'"16/Smile"'},{value:'"16/Speaker"'},{value:'"16/View"'},{value:'"24/Add"'},{value:'"24/AddImage"'},{value:'"24/AddModel"'},{value:'"24/AddPeople"'},{value:'"24/AddRubi"'},{value:'"24/AddText"'},{value:'"24/Alart"'},{value:'"24/Announcement"'},{value:'"24/Ar"'},{value:'"24/Archive"'},{value:'"24/ArrowDown"'},{value:'"24/ArrowUp"'},{value:'"24/Binet"'},{value:'"24/Body"'},{value:'"24/BodyEdit"'},{value:'"24/Book"'},{value:'"24/BringBackward"'},{value:'"24/BringForward"'},{value:'"24/Calendar"'},{value:'"24/Camera"'},{value:'"24/CameraVideo"'},{value:'"24/ChangeCharactor"'},{value:'"24/ChatBot"'},{value:'"24/Check"'},{value:'"24/ChromaticAberration"'},{value:'"24/Close"'},{value:'"24/Codes"'},{value:'"24/Collapse"'},{value:'"24/CommentFill"'},{value:'"24/CommentOutline"'},{value:'"24/Contest"'},{value:'"24/Contrast"'},{value:'"24/Description"'},{value:'"24/DeviceRotation"'},{value:'"24/Discovery"'},{value:'"24/Dot"'},{value:'"24/DotAlt"'},{value:'"24/Down"'},{value:'"24/DownloadAlt"'},{value:'"24/Duplicate"'},{value:'"24/Dust"'},{value:'"24/Emoji"'},{value:'"24/Error"'},{value:'"24/ErrorOctagon"'},{value:'"24/Events"'},{value:'"24/Expand"'},{value:'"24/FaceEdit"'},{value:'"24/Fashion"'},{value:'"24/Feed"'},{value:'"24/File"'},{value:'"24/Filter"'},{value:'"24/Flare"'},{value:'"24/FormatAlignCenter"'},{value:'"24/FormatAlignLeft"'},{value:'"24/FormatAlignRight"'},{value:'"24/FormatColorFill"'},{value:'"24/FormatColorFillNoColor"'},{value:'"24/FormatFontFamily"'},{value:'"24/FormatFontSize"'},{value:'"24/FormatLetterSpacing"'},{value:'"24/FormatLineSpacing"'},{value:'"24/Fov"'},{value:'"24/FrameEffect"'},{value:'"24/FrameSize"'},{value:'"24/Gift"'},{value:'"24/Glow"'},{value:'"24/Groups"'},{value:'"24/HairEdit"'},{value:'"24/Hashtag"'},{value:'"24/Hide"'},{value:'"24/Home"'},{value:'"24/Hue"'},{value:'"24/Idea"'},{value:'"24/Image"'},{value:'"24/ImageAlt"'},{value:'"24/ImageHidden"'},{value:'"24/ImageReplace"'},{value:'"24/Images"'},{value:'"24/ImgContain"'},{value:'"24/ImgCover"'},{value:'"24/Index"'},{value:'"24/Info"'},{value:'"24/Invalid"'},{value:'"24/Invoice"'},{value:'"24/ItemRemove"'},{value:'"24/LatestWorks"'},{value:'"24/LikeOff"'},{value:'"24/LikeOn"'},{value:'"24/Link"'},{value:'"24/List"'},{value:'"24/LockLock"'},{value:'"24/LockUnlock"'},{value:'"24/Logout"'},{value:'"24/Manga"'},{value:'"24/Menu"'},{value:'"24/Message"'},{value:'"24/Microphone"'},{value:'"24/MobilePhone"'},{value:'"24/Move1"'},{value:'"24/Next"'},{value:'"24/NoImage"'},{value:'"24/Notification"'},{value:'"24/NotificationOff"'},{value:'"24/Novels"'},{value:'"24/OpenInNew"'},{value:'"24/Options"'},{value:'"24/OptionsAlt"'},{value:'"24/Overlay"'},{value:'"24/Palette"'},{value:'"24/Pause"'},{value:'"24/PauseAlt"'},{value:'"24/Pencil"'},{value:'"24/PencilDraw"'},{value:'"24/PencilLive"'},{value:'"24/PencilText"'},{value:'"24/Person"'},{value:'"24/Play"'},{value:'"24/Pose"'},{value:'"24/Prev"'},{value:'"24/Projects"'},{value:'"24/PullDown"'},{value:'"24/PullUp"'},{value:'"24/Question"'},{value:'"24/QuestionOutline"'},{value:'"24/Ranking"'},{value:'"24/ReadHorizontalLeft"'},{value:'"24/ReadHorizontalRight"'},{value:'"24/ReadVertical"'},{value:'"24/Reload"'},{value:'"24/ReloadLoop"'},{value:'"24/Reorder"'},{value:'"24/Roll"'},{value:'"24/Rotate90DegreesC"'},{value:'"24/Rotate90DegreesCc"'},{value:'"24/RotateRight"'},{value:'"24/Saturation"'},{value:'"24/Save"'},{value:'"24/Search"'},{value:'"24/Send"'},{value:'"24/Services"'},{value:'"24/Set"'},{value:'"24/Settings"'},{value:'"24/ShareAndroid"'},{value:'"24/ShareIos"'},{value:'"24/Shopping"'},{value:'"24/Show"'},{value:'"24/ShowOutline"'},{value:'"24/Shutter"'},{value:'"24/Star"'},{value:'"24/Subtract"'},{value:'"24/Sun"'},{value:'"24/Temperature"'},{value:'"24/Text"'},{value:'"24/Trash"'},{value:'"24/TrashAlt"'},{value:'"24/Up"'},{value:'"24/Upload"'},{value:'"24/UploadAlt"'},{value:'"24/Usagi"'},{value:'"24/UsagiAlt"'},{value:'"24/Users"'},{value:'"24/Video"'},{value:'"24/ViewGrid2Columns"'},{value:'"24/ViewGrid3Columns"'},{value:'"24/ViewList"'},{value:'"24/Warning"'},{value:'"32/BookmarkOff"'},{value:'"32/BookmarkOn"'},{value:'"32/Camera"'},{value:'"32/Close"'},{value:'"32/Collapse"'},{value:'"32/CommentOff"'},{value:'"32/CommentOn"'},{value:'"32/Delete"'},{value:'"32/Dot"'},{value:'"32/Edit"'},{value:'"32/Expand"'},{value:'"32/Gift"'},{value:'"32/Home"'},{value:'"32/HorizontalWriting"'},{value:'"32/Index"'},{value:'"32/LikeOff"'},{value:'"32/LikeOn"'},{value:'"32/LikeOnPrivate"'},{value:'"32/Message"'},{value:'"32/Next"'},{value:'"32/Notification"'},{value:'"32/NotificationOff"'},{value:'"32/NovelViewerSettings"'},{value:'"32/Pan"'},{value:'"32/Prev"'},{value:'"32/PullDown"'},{value:'"32/PullUp"'},{value:'"32/ReadHorizontalLeft"'},{value:'"32/ReadHorizontalRight"'},{value:'"32/ReadVertical"'},{value:'"32/RollHorizontal"'},{value:'"32/RollVertical"'},{value:'"32/SansSerif"'},{value:'"32/Serif"'},{value:'"32/ShareAndroid"'},{value:'"32/ShareIos"'},{value:'"32/Shopping"'},{value:'"32/Upload"'},{value:'"32/User"'},{value:'"32/VerticalWriting"'},{value:'"32/ZoomIn"'},{value:'"Inline/Add"'},{value:'"Inline/BookmarkOff"'},{value:'"Inline/BookmarkOn"'},{value:'"Inline/Breadcrumbs"'},{value:'"Inline/Check"'},{value:'"Inline/Comment"'},{value:'"Inline/ContextMenu"'},{value:'"Inline/External"'},{value:'"Inline/Filter"'},{value:'"Inline/Folder"'},{value:'"Inline/ImageResponse"'},{value:'"Inline/Images"'},{value:'"Inline/Like"'},{value:'"Inline/LikeOff"'},{value:'"Inline/List"'},{value:'"Inline/Location"'},{value:'"Inline/Lock"'},{value:'"Inline/More"'},{value:'"Inline/Nextworks"'},{value:'"Inline/OpenInNew"'},{value:'"Inline/Pencil"'},{value:'"Inline/Remove"'},{value:'"Inline/Smile"'},{value:'"Inline/SmileOn"'},{value:'"Inline/Users"'},{value:'"Inline/View"'},{value:'"Inline/ViewOutline"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"packages/react/src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/IconButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Clickable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function IconButtonInner({variant="Default",size="M",icon,...rest},ref){return function validateIconSize(size,icon){let requiredIconSize;switch(size){case"XS":requiredIconSize="16";break;case"S":case"M":requiredIconSize="24"}const result=/^\d*/u.exec(icon);if(null==result)throw new Error("Invalid icon name");const[iconSize]=result;iconSize!==requiredIconSize&&console.warn(`IconButton with size "${size}" expect icon size "${requiredIconSize}, but got "${iconSize}"`)}(size,icon),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledIconButton,{...rest,ref,$size:size,$variant:variant,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pixiv-icon",{name:icon})})})),__WEBPACK_DEFAULT_EXPORT__=IconButton,StyledIconButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Clickable__WEBPACK_IMPORTED_MODULE_3__.Z).attrs((function styledProps({$size,$variant}){return{...variantToProps($variant),...sizeToProps($size)}}))`
  user-select: none;

  width: ${p=>p.$width}px;
  height: ${p=>p.$height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(${({$font})=>`--charcoal-${$font}`});
  background-color: var(${({$background})=>`--charcoal-${$background}`});
  border-radius: 999999px;
  transition: 0.2s background-color, 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      background-color: var(
        ${({$background})=>`--charcoal-${$background}-hover`}
      );
    }
    &:active {
      background-color: var(
        ${({$background})=>`--charcoal-${$background}-press`}
      );
    }
    &:focus,
    &:active,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
`;function variantToProps(variant){switch(variant){case"Default":return{$font:"text3",$background:"transparent"};case"Overlay":return{$font:"text5",$background:"surface4"}}}function sizeToProps(size){switch(size){case"XS":return{$width:20,$height:20};case"S":return{$width:32,$height:32};case"M":return{$width:40,$height:40}}}try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{variant:{defaultValue:{value:"Default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Overlay"'}]}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'},{value:'"XS"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"16/Add"'},{value:'"16/Archive"'},{value:'"16/ArrowDown"'},{value:'"16/Artwork"'},{value:'"16/Back"'},{value:'"16/Book"'},{value:'"16/BookmarkOff"'},{value:'"16/BookmarkOn"'},{value:'"16/Check"'},{value:'"16/Comment"'},{value:'"16/Dot"'},{value:'"16/Error"'},{value:'"16/Filter"'},{value:'"16/ImageResponse"'},{value:'"16/Info"'},{value:'"16/Like"'},{value:'"16/Menu"'},{value:'"16/More"'},{value:'"16/Nextworks"'},{value:'"16/Pencil"'},{value:'"16/Question"'},{value:'"16/Ranking"'},{value:'"16/Remove"'},{value:'"16/Search"'},{value:'"16/Smile"'},{value:'"16/Speaker"'},{value:'"16/View"'},{value:'"24/Add"'},{value:'"24/AddImage"'},{value:'"24/AddModel"'},{value:'"24/AddPeople"'},{value:'"24/AddRubi"'},{value:'"24/AddText"'},{value:'"24/Alart"'},{value:'"24/Announcement"'},{value:'"24/Ar"'},{value:'"24/Archive"'},{value:'"24/ArrowDown"'},{value:'"24/ArrowUp"'},{value:'"24/Binet"'},{value:'"24/Body"'},{value:'"24/BodyEdit"'},{value:'"24/Book"'},{value:'"24/BringBackward"'},{value:'"24/BringForward"'},{value:'"24/Calendar"'},{value:'"24/Camera"'},{value:'"24/CameraVideo"'},{value:'"24/ChangeCharactor"'},{value:'"24/ChatBot"'},{value:'"24/Check"'},{value:'"24/ChromaticAberration"'},{value:'"24/Close"'},{value:'"24/Codes"'},{value:'"24/Collapse"'},{value:'"24/CommentFill"'},{value:'"24/CommentOutline"'},{value:'"24/Contest"'},{value:'"24/Contrast"'},{value:'"24/Description"'},{value:'"24/DeviceRotation"'},{value:'"24/Discovery"'},{value:'"24/Dot"'},{value:'"24/DotAlt"'},{value:'"24/Down"'},{value:'"24/DownloadAlt"'},{value:'"24/Duplicate"'},{value:'"24/Dust"'},{value:'"24/Emoji"'},{value:'"24/Error"'},{value:'"24/ErrorOctagon"'},{value:'"24/Events"'},{value:'"24/Expand"'},{value:'"24/FaceEdit"'},{value:'"24/Fashion"'},{value:'"24/Feed"'},{value:'"24/File"'},{value:'"24/Filter"'},{value:'"24/Flare"'},{value:'"24/FormatAlignCenter"'},{value:'"24/FormatAlignLeft"'},{value:'"24/FormatAlignRight"'},{value:'"24/FormatColorFill"'},{value:'"24/FormatColorFillNoColor"'},{value:'"24/FormatFontFamily"'},{value:'"24/FormatFontSize"'},{value:'"24/FormatLetterSpacing"'},{value:'"24/FormatLineSpacing"'},{value:'"24/Fov"'},{value:'"24/FrameEffect"'},{value:'"24/FrameSize"'},{value:'"24/Gift"'},{value:'"24/Glow"'},{value:'"24/Groups"'},{value:'"24/HairEdit"'},{value:'"24/Hashtag"'},{value:'"24/Hide"'},{value:'"24/Home"'},{value:'"24/Hue"'},{value:'"24/Idea"'},{value:'"24/Image"'},{value:'"24/ImageAlt"'},{value:'"24/ImageHidden"'},{value:'"24/ImageReplace"'},{value:'"24/Images"'},{value:'"24/ImgContain"'},{value:'"24/ImgCover"'},{value:'"24/Index"'},{value:'"24/Info"'},{value:'"24/Invalid"'},{value:'"24/Invoice"'},{value:'"24/ItemRemove"'},{value:'"24/LatestWorks"'},{value:'"24/LikeOff"'},{value:'"24/LikeOn"'},{value:'"24/Link"'},{value:'"24/List"'},{value:'"24/LockLock"'},{value:'"24/LockUnlock"'},{value:'"24/Logout"'},{value:'"24/Manga"'},{value:'"24/Menu"'},{value:'"24/Message"'},{value:'"24/Microphone"'},{value:'"24/MobilePhone"'},{value:'"24/Move1"'},{value:'"24/Next"'},{value:'"24/NoImage"'},{value:'"24/Notification"'},{value:'"24/NotificationOff"'},{value:'"24/Novels"'},{value:'"24/OpenInNew"'},{value:'"24/Options"'},{value:'"24/OptionsAlt"'},{value:'"24/Overlay"'},{value:'"24/Palette"'},{value:'"24/Pause"'},{value:'"24/PauseAlt"'},{value:'"24/Pencil"'},{value:'"24/PencilDraw"'},{value:'"24/PencilLive"'},{value:'"24/PencilText"'},{value:'"24/Person"'},{value:'"24/Play"'},{value:'"24/Pose"'},{value:'"24/Prev"'},{value:'"24/Projects"'},{value:'"24/PullDown"'},{value:'"24/PullUp"'},{value:'"24/Question"'},{value:'"24/QuestionOutline"'},{value:'"24/Ranking"'},{value:'"24/ReadHorizontalLeft"'},{value:'"24/ReadHorizontalRight"'},{value:'"24/ReadVertical"'},{value:'"24/Reload"'},{value:'"24/ReloadLoop"'},{value:'"24/Reorder"'},{value:'"24/Roll"'},{value:'"24/Rotate90DegreesC"'},{value:'"24/Rotate90DegreesCc"'},{value:'"24/RotateRight"'},{value:'"24/Saturation"'},{value:'"24/Save"'},{value:'"24/Search"'},{value:'"24/Send"'},{value:'"24/Services"'},{value:'"24/Set"'},{value:'"24/Settings"'},{value:'"24/ShareAndroid"'},{value:'"24/ShareIos"'},{value:'"24/Shopping"'},{value:'"24/Show"'},{value:'"24/ShowOutline"'},{value:'"24/Shutter"'},{value:'"24/Star"'},{value:'"24/Subtract"'},{value:'"24/Sun"'},{value:'"24/Temperature"'},{value:'"24/Text"'},{value:'"24/Trash"'},{value:'"24/TrashAlt"'},{value:'"24/Up"'},{value:'"24/Upload"'},{value:'"24/UploadAlt"'},{value:'"24/Usagi"'},{value:'"24/UsagiAlt"'},{value:'"24/Users"'},{value:'"24/Video"'},{value:'"24/ViewGrid2Columns"'},{value:'"24/ViewGrid3Columns"'},{value:'"24/ViewList"'},{value:'"24/Warning"'},{value:'"32/BookmarkOff"'},{value:'"32/BookmarkOn"'},{value:'"32/Camera"'},{value:'"32/Close"'},{value:'"32/Collapse"'},{value:'"32/CommentOff"'},{value:'"32/CommentOn"'},{value:'"32/Delete"'},{value:'"32/Dot"'},{value:'"32/Edit"'},{value:'"32/Expand"'},{value:'"32/Gift"'},{value:'"32/Home"'},{value:'"32/HorizontalWriting"'},{value:'"32/Index"'},{value:'"32/LikeOff"'},{value:'"32/LikeOn"'},{value:'"32/LikeOnPrivate"'},{value:'"32/Message"'},{value:'"32/Next"'},{value:'"32/Notification"'},{value:'"32/NotificationOff"'},{value:'"32/NovelViewerSettings"'},{value:'"32/Pan"'},{value:'"32/Prev"'},{value:'"32/PullDown"'},{value:'"32/PullUp"'},{value:'"32/ReadHorizontalLeft"'},{value:'"32/ReadHorizontalRight"'},{value:'"32/ReadVertical"'},{value:'"32/RollHorizontal"'},{value:'"32/RollVertical"'},{value:'"32/SansSerif"'},{value:'"32/Serif"'},{value:'"32/ShareAndroid"'},{value:'"32/ShareIos"'},{value:'"32/Shopping"'},{value:'"32/Upload"'},{value:'"32/User"'},{value:'"32/VerticalWriting"'},{value:'"32/ZoomIn"'},{value:'"Inline/Add"'},{value:'"Inline/BookmarkOff"'},{value:'"Inline/BookmarkOn"'},{value:'"Inline/Breadcrumbs"'},{value:'"Inline/Check"'},{value:'"Inline/Comment"'},{value:'"Inline/ContextMenu"'},{value:'"Inline/External"'},{value:'"Inline/Filter"'},{value:'"Inline/Folder"'},{value:'"Inline/ImageResponse"'},{value:'"Inline/Images"'},{value:'"Inline/Like"'},{value:'"Inline/LikeOff"'},{value:'"Inline/List"'},{value:'"Inline/Location"'},{value:'"Inline/Lock"'},{value:'"Inline/More"'},{value:'"Inline/Nextworks"'},{value:'"Inline/OpenInNew"'},{value:'"Inline/Pencil"'},{value:'"Inline/Remove"'},{value:'"Inline/Smile"'},{value:'"Inline/SmileOn"'},{value:'"Inline/Users"'},{value:'"Inline/View"'},{value:'"Inline/ViewOutline"'}]}},disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/IconButton/index.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"packages/react/src/components/IconButton/index.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Modal/ModalBackgroundContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ModalBackgroundContext});const ModalBackgroundContext=__webpack_require__("./node_modules/react/index.js").createContext(null);try{ModalBackgroundContext.displayName="ModalBackgroundContext",ModalBackgroundContext.__docgenInfo={description:"ModalBackgroundのElementが入ったコンテキスト",displayName:"ModalBackgroundContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/ModalBackgroundContext.tsx#ModalBackgroundContext"]={docgenInfo:ModalBackgroundContext.__docgenInfo,name:"ModalBackgroundContext",path:"packages/react/src/components/Modal/ModalBackgroundContext.tsx#ModalBackgroundContext"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Modal/ModalPlumbing.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BT:()=>ModalAlign,Zf:()=>ModalButtons,fe:()=>ModalBody,xB:()=>ModalHeader});var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/Modal/index.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/utils/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ModalHeader(){const modalCtx=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.tC);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ModalHeaderRoot,{$bottomSheet:modalCtx.bottomSheet,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledModalTitle,{})})}ModalHeader.displayName="ModalHeader";const ModalHeaderRoot=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  height: 64px;
  display: grid;
  align-content: center;
  justify-content: center;
  @media ${({theme})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.kk)(theme.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
        height: 48px;
      `}
  }
`,StyledModalTitle=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(___WEBPACK_IMPORTED_MODULE_2__.r6)`
  color: var(--charcoal-text1);
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  display: flow-root;

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
`,ModalAlign=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  padding-left: 16px;
  padding-right: 16px;
`,ModalBody=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  padding-bottom: 40px;
`,ModalButtons=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;

  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;try{ModalAlign.displayName="ModalAlign",ModalAlign.__docgenInfo={description:"",displayName:"ModalAlign",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/ModalPlumbing.tsx#ModalAlign"]={docgenInfo:ModalAlign.__docgenInfo,name:"ModalAlign",path:"packages/react/src/components/Modal/ModalPlumbing.tsx#ModalAlign"})}catch(__react_docgen_typescript_loader_error){}try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/ModalPlumbing.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"packages/react/src/components/Modal/ModalPlumbing.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}try{ModalButtons.displayName="ModalButtons",ModalButtons.__docgenInfo={description:"",displayName:"ModalButtons",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/ModalPlumbing.tsx#ModalButtons"]={docgenInfo:ModalButtons.__docgenInfo,name:"ModalButtons",path:"packages/react/src/components/Modal/ModalPlumbing.tsx#ModalButtons"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tC:()=>ModalContext,t5:()=>ModalDismissButton,r6:()=>ModalTitle,ZP:()=>components_Modal});var react=__webpack_require__("./node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),dist_index_esm=__webpack_require__("./packages/styled/dist/index.esm.js"),react_spring_esm=__webpack_require__("./node_modules/react-spring/dist/react-spring.esm.js"),Button=__webpack_require__("./packages/react/src/components/Button/index.tsx"),IconButton=__webpack_require__("./packages/react/src/components/IconButton/index.tsx"),utils_dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),dialog_dist_import=__webpack_require__("./node_modules/@react-aria/dialog/dist/import.mjs"),foundation_dist_index_esm=__webpack_require__("./packages/foundation/dist/index.esm.js"),_lib=__webpack_require__("./packages/react/src/_lib/index.ts");function useForwardedRef(ref){const innerRef=react.useRef(null);return react.useEffect((()=>{ref&&("function"==typeof ref?ref(innerRef.current):ref.current=innerRef.current)})),innerRef}try{useForwardedRef.displayName="useForwardedRef",useForwardedRef.__docgenInfo={description:"",displayName:"useForwardedRef",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/_lib/useForwardedRef.tsx#useForwardedRef"]={docgenInfo:useForwardedRef.__docgenInfo,name:"useForwardedRef",path:"packages/react/src/_lib/useForwardedRef.tsx#useForwardedRef"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dialog=(0,react.forwardRef)((function Dialog(props,forwardRef){const ref=useForwardedRef(forwardRef),{dialogProps}=(0,dialog_dist_import.R)({role:"dialog"},ref);return(0,jsx_runtime.jsx)(AnimatedStyledDialogDiv,{...props,role:dialogProps.role,tabIndex:dialogProps.tabIndex,"aria-labelledby":dialogProps["aria-labelledby"],onBlur:dialogProps.onBlur,ref})})),AnimatedStyledDialogDiv=(0,react_spring_esm.animated)(styled_components_browser_esm.ZP.div`
  margin: auto;
  position: relative;
  height: fit-content;
  width: ${p=>{switch(p.size){case"S":return(0,foundation_dist_index_esm.iH)(3,foundation_dist_index_esm.hw,foundation_dist_index_esm.K_)+2*foundation_dist_index_esm.K_;case"M":return(0,foundation_dist_index_esm.iH)(4,foundation_dist_index_esm.hw,foundation_dist_index_esm.K_)+2*foundation_dist_index_esm.K_;case"L":return(0,foundation_dist_index_esm.iH)(6,foundation_dist_index_esm.hw,foundation_dist_index_esm.K_)+2*foundation_dist_index_esm.K_;default:return(0,_lib.t1)(p.size)}}}px;

  background-color: var(--charcoal-surface1);
  border-radius: 24px;

  @media ${({theme})=>(0,index_esm.kk)(theme.breakpoint.screen1)} {
    max-width: 440px;
    width: calc(100% - 48px);
    ${p=>!1!==p.bottomSheet&&styled_components_browser_esm.iv`
        max-width: unset;
        width: 100%;
        border-radius: 0;
        margin: auto 0 0 0;
        ${"full"===p.bottomSheet&&styled_components_browser_esm.iv`
          min-height: 100%;
        `}
      `}
  }
  :focus {
    outline: none;
  }
`);try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/Dialog/index.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"packages/react/src/components/Modal/Dialog/index.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}var ModalBackgroundContext=__webpack_require__("./packages/react/src/components/Modal/ModalBackgroundContext.tsx");const Modal=(0,react.forwardRef)((function ModalInner({children,zIndex=10,portalContainer,...props},external){const{title,size="M",bottomSheet=!1,isDismissable,onClose,className,isOpen=!1}=props,ref=(0,utils_dist_import.B3)(external),{modalProps,underlayProps}=(0,dist_import.NE)(props,{close:onClose,isOpen,open:()=>{},setOpen:()=>{},toggle:()=>{}},ref),theme=(0,styled_components_browser_esm.Fg)(),isMobile=(0,dist_index_esm.GS)((0,index_esm.kk)(theme.breakpoint.screen1))??!1,transitionEnabled=isMobile&&!1!==bottomSheet,showDismiss=!isMobile||!0!==bottomSheet,transition=(0,react_spring_esm.useTransition)(isOpen,{from:{transform:"translateY(100%)",backgroundColor:"rgba(0, 0, 0, 0)",overflow:"hidden"},enter:{transform:"translateY(0%)",backgroundColor:"rgba(0, 0, 0, 0.4)"},update:{overflow:"auto"},leave:{transform:"translateY(100%)",backgroundColor:"rgba(0, 0, 0, 0)",overflow:"hidden"},config:transitionEnabled?{duration:400,easing:react_spring_esm.easings.easeOutQuart}:{duration:0}}),bgRef=react.useRef(null);return transition((({backgroundColor,overflow,transform},item)=>item&&(0,jsx_runtime.jsx)(dist_import.aV,{portalContainer,children:(0,jsx_runtime.jsx)(ModalBackground,{ref:bgRef,zIndex,...underlayProps,style:transitionEnabled?{backgroundColor,overflow}:{},$bottomSheet:bottomSheet,children:(0,jsx_runtime.jsx)(ModalBackgroundContext.C.Provider,{value:bgRef.current,children:(0,jsx_runtime.jsx)(Dialog,{ref,...modalProps,style:transitionEnabled?{transform}:{},size,bottomSheet,className,children:(0,jsx_runtime.jsxs)(ModalContext.Provider,{value:{titleProps:{},title,close:onClose,showDismiss,bottomSheet},children:[children,!0===isDismissable&&(0,jsx_runtime.jsx)(ModalCrossButton,{size:"S",icon:"24/Close",onClick:onClose})]})})})})})))})),components_Modal=(0,react.memo)(Modal),ModalContext=react.createContext({titleProps:{},title:"",close:void 0,showDismiss:!0,bottomSheet:!1}),ModalBackground=(0,react_spring_esm.animated)(styled_components_browser_esm.ZP.div`
  z-index: ${({zIndex})=>zIndex};
  overflow: auto;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  width: -moz-available;
  height: 100%;
  justify-content: center;
  padding: 40px 0;
  box-sizing: border-box;

  background-color: var(--charcoal-surface4);

  @media ${({theme})=>(0,index_esm.kk)(theme.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components_browser_esm.iv`
        padding: 0;
      `}
  }
`),ModalCrossButton=(0,styled_components_browser_esm.ZP)(IconButton.Z)`
  position: absolute;
  top: 8px;
  right: 8px;

  color: var(--charcoal-text3);
  transition: 0.2s color;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      color: var(--charcoal-text3-hover);
    }
    &:active {
      color: var(--charcoal-text3-press);
    }
  }
`;function ModalTitle(props){const{titleProps,title}=(0,react.useContext)(ModalContext);return(0,jsx_runtime.jsx)(ModalHeading,{...titleProps,...props,children:title})}ModalTitle.displayName="ModalTitle";const ModalHeading=styled_components_browser_esm.ZP.h3`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`;function ModalDismissButton({children,...props}){const{close,showDismiss}=(0,react.useContext)(ModalContext);return showDismiss?(0,jsx_runtime.jsx)(Button.Z,{...props,onClick:close,fullWidth:!0,children}):null}ModalDismissButton.displayName="ModalDismissButton";try{ModalTitle.displayName="ModalTitle",ModalTitle.__docgenInfo={description:"",displayName:"ModalTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/index.tsx#ModalTitle"]={docgenInfo:ModalTitle.__docgenInfo,name:"ModalTitle",path:"packages/react/src/components/Modal/index.tsx#ModalTitle"})}catch(__react_docgen_typescript_loader_error){}try{ModalDismissButton.displayName="ModalDismissButton",ModalDismissButton.__docgenInfo={description:"",displayName:"ModalDismissButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Overlay"'},{value:'"Primary"'},{value:'"Danger"'},{value:'"Navigation"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/index.tsx#ModalDismissButton"]={docgenInfo:ModalDismissButton.__docgenInfo,name:"ModalDismissButton",path:"packages/react/src/components/Modal/index.tsx#ModalDismissButton"})}catch(__react_docgen_typescript_loader_error){}try{Modal.displayName="Modal",Modal.__docgenInfo={description:"モーダルコンポーネント。",displayName:"Modal",props:{zIndex:{defaultValue:{value:"10"},description:"",name:"zIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'},{value:'"L"'}]}},bottomSheet:{defaultValue:null,description:"",name:"bottomSheet",required:!1,type:{name:"BottomSheet"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},portalContainer:{defaultValue:null,description:"https://github.com/adobe/react-spectrum/issues/3787\nNext.jsで使用する際に発生するエラーの一時的な回避策でdocument.bodyを指定する必要がある",name:"portalContainer",required:!1,type:{name:"HTMLElement"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"packages/react/src/components/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)}}]);
//# sourceMappingURL=2780.b8ef0a7c.iframe.bundle.js.map