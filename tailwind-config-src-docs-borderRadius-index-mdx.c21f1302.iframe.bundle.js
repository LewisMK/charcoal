"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[7821],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./packages/tailwind-config/src/docs/borderRadius/index.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>docs_borderRadius});__webpack_require__("./packages/tailwind-config/node_modules/react/index.js");var jsx_runtime=__webpack_require__("./packages/tailwind-config/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const borderRadius=__webpack_require__("./packages/tailwind-config/src/index.ts").v.theme.borderRadius??{},BorderRadius=()=>(0,jsx_runtime.jsx)("div",{className:"space-y-40",children:Object.entries(borderRadius).map((([key,value])=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("p",{className:"typography-14 text-text2",children:["rounded-",key]}),(0,jsx_runtime.jsxs)("div",{className:"space-x-16 flex",children:[(0,jsx_runtime.jsx)("div",{className:`bg-surface4 rounded-${key} h-64`,style:{width:"64px"}}),(0,jsx_runtime.jsx)("div",{className:`bg-surface4 rounded-${key} h-64`,style:{width:"272px"}})]}),(0,jsx_runtime.jsxs)("p",{className:"typography-12 text-text3",children:["border-radius: ",(0,jsx_runtime.jsx)("span",{className:"text-text2",children:value})]})]},key)))});BorderRadius.displayName="BorderRadius";try{BorderRadius.displayName="BorderRadius",BorderRadius.__docgenInfo={description:"",displayName:"BorderRadius",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tailwind-config/src/docs/borderRadius/BorderRadius.tsx#BorderRadius"]={docgenInfo:BorderRadius.__docgenInfo,name:"BorderRadius",path:"packages/tailwind-config/src/docs/borderRadius/BorderRadius.tsx#BorderRadius"})}catch(__react_docgen_typescript_loader_error){}function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"tailwind-config/BorderRadius",component:[BorderRadius]}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"border-radius",children:"Border radius"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(BorderRadius,{})]})}const docs_borderRadius=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);