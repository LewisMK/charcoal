"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[8963],{"./node_modules/@react-aria/overlays/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U4:()=>$86ea4cb521eb2e37$export$2317d149ed6f78c4,aV:()=>$337b884510726a0d$export$c6fdb837b070b4ff,N3:()=>$f57aed4a881a3485$export$bf688221f59024e5,RP:()=>$5e3802645cc19319$export$1c3ebcada18427bf,Ir:()=>$a11501f3d1d39e6c$export$ea8f71083e90600f,Bq:()=>$337b884510726a0d$export$14c98a7594375490,Sv:()=>$f2f8a6077418541e$export$542a6fd13ac93354});var $773d5888b972f1cf$exports;$773d5888b972f1cf$exports={dismiss:"تجاهل"};var $d11f19852b941573$exports;$d11f19852b941573$exports={dismiss:"Отхвърляне"};var $b983974c2ee1efb3$exports;$b983974c2ee1efb3$exports={dismiss:"Odstranit"};var $5809cc9d4e92de73$exports;$5809cc9d4e92de73$exports={dismiss:"Luk"};var $c68c2e4fc74398d1$exports;$c68c2e4fc74398d1$exports={dismiss:"Schließen"};var $0898b4c153db2b77$exports;$0898b4c153db2b77$exports={dismiss:"Απόρριψη"};var $6d74810286a15183$exports;$6d74810286a15183$exports={dismiss:"Dismiss"};var $309d73dc65f78055$exports;$309d73dc65f78055$exports={dismiss:"Descartar"};var $44ad94f7205cf593$exports;$44ad94f7205cf593$exports={dismiss:"Lõpeta"};var $7c28f5687f0779a9$exports;$7c28f5687f0779a9$exports={dismiss:"Hylkää"};var $e6d75df4b68bd73a$exports;$e6d75df4b68bd73a$exports={dismiss:"Rejeter"};var $87505c9dab186d0f$exports;$87505c9dab186d0f$exports={dismiss:"התעלם"};var $553439c3ffb3e492$exports;$553439c3ffb3e492$exports={dismiss:"Odbaci"};var $74cf411061b983a2$exports;$74cf411061b983a2$exports={dismiss:"Elutasítás"};var $e933f298574dc435$exports;$e933f298574dc435$exports={dismiss:"Ignora"};var $ac91fc9fe02f71f6$exports;$ac91fc9fe02f71f6$exports={dismiss:"閉じる"};var $52b96f86422025af$exports;$52b96f86422025af$exports={dismiss:"무시"};var $c0d724c3e51dafa6$exports;$c0d724c3e51dafa6$exports={dismiss:"Atmesti"};var $c92899672a3fe72e$exports;$c92899672a3fe72e$exports={dismiss:"Nerādīt"};var $9f576b39d8e7a9d6$exports;$9f576b39d8e7a9d6$exports={dismiss:"Lukk"};var $9d025808aeec81a7$exports;$9d025808aeec81a7$exports={dismiss:"Negeren"};var $fce709921e2c0fa6$exports;$fce709921e2c0fa6$exports={dismiss:"Zignoruj"};var $2599cf0c4ab37f59$exports;$2599cf0c4ab37f59$exports={dismiss:"Descartar"};var $3c220ae7ef8a35fd$exports;$3c220ae7ef8a35fd$exports={dismiss:"Dispensar"};var $93562b5094072f54$exports;$93562b5094072f54$exports={dismiss:"Revocare"};var $cd9e2abd0d06c7b4$exports;$cd9e2abd0d06c7b4$exports={dismiss:"Пропустить"};var $45375701f409adf1$exports;$45375701f409adf1$exports={dismiss:"Zrušiť"};var $27fab53a576de9dd$exports;$27fab53a576de9dd$exports={dismiss:"Opusti"};var $4438748d9952e7c7$exports;$4438748d9952e7c7$exports={dismiss:"Odbaci"};var $0936d7347ef4da4c$exports;$0936d7347ef4da4c$exports={dismiss:"Avvisa"};var $29700c92185d38f8$exports;$29700c92185d38f8$exports={dismiss:"Kapat"};var $662ccaf2be4c25b3$exports;$662ccaf2be4c25b3$exports={dismiss:"Скасувати"};var $d80a27deda7cdb3c$exports;$d80a27deda7cdb3c$exports={dismiss:"取消"};var $2b2734393847c884$exports;$2b2734393847c884$exports={dismiss:"關閉"};var react=__webpack_require__("./node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs"),utils_dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),real_module=__webpack_require__("./node_modules/@react-aria/i18n/dist/real-module.mjs"),focus_dist_import=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),interactions_dist_import=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),ssr_dist_import=__webpack_require__("./node_modules/@react-aria/ssr/dist/import.mjs"),visually_hidden_dist_import=__webpack_require__("./node_modules/@react-aria/visually-hidden/dist/import.mjs");function $parcel$interopDefault(a){return a&&a.__esModule?a.default:a}const $edcf132a9284368a$var$AXIS={top:"top",bottom:"top",left:"left",right:"left"},$edcf132a9284368a$var$FLIPPED_DIRECTION={top:"bottom",bottom:"top",left:"right",right:"left"},$edcf132a9284368a$var$CROSS_AXIS={top:"left",left:"top"},$edcf132a9284368a$var$AXIS_SIZE={top:"height",left:"width"},$edcf132a9284368a$var$TOTAL_SIZE={width:"totalWidth",height:"totalHeight"},$edcf132a9284368a$var$PARSED_PLACEMENT_CACHE={};let $edcf132a9284368a$var$visualViewport="undefined"!=typeof document&&window.visualViewport;function $edcf132a9284368a$var$getContainerDimensions(containerNode){let width=0,height=0,totalWidth=0,totalHeight=0,top=0,left=0,scroll={};if("BODY"===containerNode.tagName){let documentElement=document.documentElement;var _visualViewport_width,_visualViewport_height;totalWidth=documentElement.clientWidth,totalHeight=documentElement.clientHeight,width=null!==(_visualViewport_width=null==$edcf132a9284368a$var$visualViewport?void 0:$edcf132a9284368a$var$visualViewport.width)&&void 0!==_visualViewport_width?_visualViewport_width:totalWidth,height=null!==(_visualViewport_height=null==$edcf132a9284368a$var$visualViewport?void 0:$edcf132a9284368a$var$visualViewport.height)&&void 0!==_visualViewport_height?_visualViewport_height:totalHeight,scroll.top=documentElement.scrollTop||containerNode.scrollTop,scroll.left=documentElement.scrollLeft||containerNode.scrollLeft}else({width,height,top,left}=$edcf132a9284368a$var$getOffset(containerNode)),scroll.top=containerNode.scrollTop,scroll.left=containerNode.scrollLeft,totalWidth=width,totalHeight=height;return{width,height,totalWidth,totalHeight,scroll,top,left}}function $edcf132a9284368a$var$getDelta(axis,offset,size,boundaryDimensions,containerDimensions,padding){let containerScroll=containerDimensions.scroll[axis],boundaryHeight=boundaryDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]],startEdgeOffset=offset-padding-containerScroll,endEdgeOffset=offset+padding-containerScroll+size;return startEdgeOffset<0?-startEdgeOffset:endEdgeOffset>boundaryHeight?Math.max(boundaryHeight-endEdgeOffset,-startEdgeOffset):0}function $edcf132a9284368a$var$parsePlacement(input){if($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input])return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];let[placement,crossPlacement]=input.split(" "),axis=$edcf132a9284368a$var$AXIS[placement]||"right",crossAxis=$edcf132a9284368a$var$CROSS_AXIS[axis];$edcf132a9284368a$var$AXIS[crossPlacement]||(crossPlacement="center");let size=$edcf132a9284368a$var$AXIS_SIZE[axis],crossSize=$edcf132a9284368a$var$AXIS_SIZE[crossAxis];return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]={placement,crossPlacement,axis,crossAxis,size,crossSize},$edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]}function $edcf132a9284368a$var$computePosition(childOffset,boundaryDimensions,overlaySize,placementInfo,offset,crossOffset,containerOffsetWithBoundary,isContainerPositioned,arrowSize,arrowBoundaryOffset){let{placement,crossPlacement,axis,crossAxis,size,crossSize}=placementInfo,position={};position[crossAxis]=childOffset[crossAxis],"center"===crossPlacement?position[crossAxis]+=(childOffset[crossSize]-overlaySize[crossSize])/2:crossPlacement!==crossAxis&&(position[crossAxis]+=childOffset[crossSize]-overlaySize[crossSize]),position[crossAxis]+=crossOffset;const minPosition=childOffset[crossAxis]-overlaySize[crossSize]+arrowSize+arrowBoundaryOffset,maxPosition=childOffset[crossAxis]+childOffset[crossSize]-arrowSize-arrowBoundaryOffset;if(position[crossAxis]=(0,dist_import.uZ)(position[crossAxis],minPosition,maxPosition),placement===axis){const containerHeight=isContainerPositioned?containerOffsetWithBoundary[size]:boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE[size]];position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]]=Math.floor(containerHeight-childOffset[axis]+offset)}else position[axis]=Math.floor(childOffset[axis]+childOffset[size]+offset);return position}function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions,containerOffsetWithBoundary,childOffset,margins,padding,placementInfo){let{placement,axis,size}=placementInfo;return placement===axis?Math.max(0,childOffset[axis]-boundaryDimensions[axis]-boundaryDimensions.scroll[axis]+containerOffsetWithBoundary[axis]-margins[axis]-margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]]-padding):Math.max(0,boundaryDimensions[size]+boundaryDimensions[axis]+boundaryDimensions.scroll[axis]-containerOffsetWithBoundary[axis]-childOffset[axis]-childOffset[size]-margins[axis]-margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]]-padding)}function $edcf132a9284368a$export$6839422d1f33cee9(placementInput,childOffset,overlaySize,scrollSize,margins,padding,flip,boundaryDimensions,containerDimensions,containerOffsetWithBoundary,offset,crossOffset,isContainerPositioned,userSetMaxHeight,arrowSize,arrowBoundaryOffset){let placementInfo=$edcf132a9284368a$var$parsePlacement(placementInput),{size,crossAxis,crossSize,placement,crossPlacement}=placementInfo,position=$edcf132a9284368a$var$computePosition(childOffset,boundaryDimensions,overlaySize,placementInfo,offset,crossOffset,containerOffsetWithBoundary,isContainerPositioned,arrowSize,arrowBoundaryOffset),normalizedOffset=offset,space=$edcf132a9284368a$var$getAvailableSpace(boundaryDimensions,containerOffsetWithBoundary,childOffset,margins,padding+offset,placementInfo);if(flip&&scrollSize[size]>space){let flippedPlacementInfo=$edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`),flippedPosition=$edcf132a9284368a$var$computePosition(childOffset,boundaryDimensions,overlaySize,flippedPlacementInfo,offset,crossOffset,containerOffsetWithBoundary,isContainerPositioned,arrowSize,arrowBoundaryOffset);$edcf132a9284368a$var$getAvailableSpace(boundaryDimensions,containerOffsetWithBoundary,childOffset,margins,padding+offset,flippedPlacementInfo)>space&&(placementInfo=flippedPlacementInfo,position=flippedPosition,normalizedOffset=offset)}let delta=$edcf132a9284368a$var$getDelta(crossAxis,position[crossAxis],overlaySize[crossSize],boundaryDimensions,containerDimensions,padding);position[crossAxis]+=delta;let maxHeight=function $edcf132a9284368a$var$getMaxHeight(position,boundaryDimensions,containerOffsetWithBoundary,childOffset,margins,padding){return null!=position.top?Math.max(0,boundaryDimensions.height+boundaryDimensions.top+boundaryDimensions.scroll.top-(containerOffsetWithBoundary.top+position.top)-(margins.top+margins.bottom+padding)):Math.max(0,childOffset.top+containerOffsetWithBoundary.top-(boundaryDimensions.top+boundaryDimensions.scroll.top)-(margins.top+margins.bottom+padding))}(position,boundaryDimensions,containerOffsetWithBoundary,childOffset,margins,padding);userSetMaxHeight&&userSetMaxHeight<maxHeight&&(maxHeight=userSetMaxHeight),overlaySize.height=Math.min(overlaySize.height,maxHeight),position=$edcf132a9284368a$var$computePosition(childOffset,boundaryDimensions,overlaySize,placementInfo,normalizedOffset,crossOffset,containerOffsetWithBoundary,isContainerPositioned,arrowSize,arrowBoundaryOffset),delta=$edcf132a9284368a$var$getDelta(crossAxis,position[crossAxis],overlaySize[crossSize],boundaryDimensions,containerDimensions,padding),position[crossAxis]+=delta;let arrowPosition={},preferredArrowPosition=childOffset[crossAxis]+.5*childOffset[crossSize]-overlaySize[crossAxis];const arrowMinPosition=arrowSize/2+arrowBoundaryOffset,arrowMaxPosition=overlaySize[crossSize]-arrowSize/2-arrowBoundaryOffset,arrowOverlappingChildMinEdge=childOffset[crossAxis]-overlaySize[crossAxis]+arrowSize/2,arrowOverlappingChildMaxEdge=childOffset[crossAxis]+childOffset[crossSize]-overlaySize[crossAxis]-arrowSize/2,arrowPositionOverlappingChild=(0,dist_import.uZ)(preferredArrowPosition,arrowOverlappingChildMinEdge,arrowOverlappingChildMaxEdge);return arrowPosition[crossAxis]=(0,dist_import.uZ)(arrowPositionOverlappingChild,arrowMinPosition,arrowMaxPosition),{position,maxHeight,arrowOffsetLeft:arrowPosition.left,arrowOffsetTop:arrowPosition.top,placement:placementInfo.placement}}function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts){let{placement,targetNode,overlayNode,scrollNode,padding,shouldFlip,boundaryElement,offset,crossOffset,maxHeight,arrowSize=0,arrowBoundaryOffset=0}=opts,container=overlayNode instanceof HTMLElement?function $edcf132a9284368a$var$getContainingBlock(node){let offsetParent=node.offsetParent;offsetParent&&offsetParent===document.body&&"static"===window.getComputedStyle(offsetParent).position&&!$edcf132a9284368a$var$isContainingBlock(offsetParent)&&(offsetParent=document.documentElement);if(null==offsetParent)for(offsetParent=node.parentElement;offsetParent&&!$edcf132a9284368a$var$isContainingBlock(offsetParent);)offsetParent=offsetParent.parentElement;return offsetParent||document.documentElement}(overlayNode):document.documentElement,isViewportContainer=container===document.documentElement;const containerPositionStyle=window.getComputedStyle(container).position;let isContainerPositioned=!!containerPositionStyle&&"static"!==containerPositionStyle,childOffset=isViewportContainer?$edcf132a9284368a$var$getOffset(targetNode):$edcf132a9284368a$var$getPosition(targetNode,container);if(!isViewportContainer){let{marginTop,marginLeft}=window.getComputedStyle(targetNode);childOffset.top+=parseInt(marginTop,10)||0,childOffset.left+=parseInt(marginLeft,10)||0}let overlaySize=$edcf132a9284368a$var$getOffset(overlayNode),margins=function $edcf132a9284368a$var$getMargins(node){let style=window.getComputedStyle(node);return{top:parseInt(style.marginTop,10)||0,bottom:parseInt(style.marginBottom,10)||0,left:parseInt(style.marginLeft,10)||0,right:parseInt(style.marginRight,10)||0}}(overlayNode);return overlaySize.width+=margins.left+margins.right,overlaySize.height+=margins.top+margins.bottom,$edcf132a9284368a$export$6839422d1f33cee9(placement,childOffset,overlaySize,function $edcf132a9284368a$var$getScroll(node){return{top:node.scrollTop,left:node.scrollLeft,width:node.scrollWidth,height:node.scrollHeight}}(scrollNode),margins,padding,shouldFlip,$edcf132a9284368a$var$getContainerDimensions(boundaryElement),$edcf132a9284368a$var$getContainerDimensions(container),"BODY"===boundaryElement.tagName?$edcf132a9284368a$var$getOffset(container):$edcf132a9284368a$var$getPosition(container,boundaryElement),offset,crossOffset,isContainerPositioned,maxHeight,arrowSize,arrowBoundaryOffset)}function $edcf132a9284368a$var$getOffset(node){let{top,left,width,height}=node.getBoundingClientRect(),{scrollTop,scrollLeft,clientTop,clientLeft}=document.documentElement;return{top:top+scrollTop-clientTop,left:left+scrollLeft-clientLeft,width,height}}function $edcf132a9284368a$var$getPosition(node,parent){let offset,style=window.getComputedStyle(node);if("fixed"===style.position){let{top,left,width,height}=node.getBoundingClientRect();offset={top,left,width,height}}else{offset=$edcf132a9284368a$var$getOffset(node);let parentOffset=$edcf132a9284368a$var$getOffset(parent),parentStyle=window.getComputedStyle(parent);parentOffset.top+=(parseInt(parentStyle.borderTopWidth,10)||0)-parent.scrollTop,parentOffset.left+=(parseInt(parentStyle.borderLeftWidth,10)||0)-parent.scrollLeft,offset.top-=parentOffset.top,offset.left-=parentOffset.left}return offset.top-=parseInt(style.marginTop,10)||0,offset.left-=parseInt(style.marginLeft,10)||0,offset}function $edcf132a9284368a$var$isContainingBlock(node){let style=window.getComputedStyle(node);return"none"!==style.transform||/transform|perspective/.test(style.willChange)||"none"!==style.filter||"paint"===style.contain||"backdropFilter"in style&&"none"!==style.backdropFilter||"WebkitBackdropFilter"in style&&"none"!==style.WebkitBackdropFilter}const $dd149f63282afbbf$export$f6211563215e3b37=new WeakMap;function $dd149f63282afbbf$export$18fc8428861184da(opts){let{triggerRef,isOpen,onClose}=opts;(0,react.useEffect)((()=>{if(!isOpen||null===onClose)return;let onScroll=e=>{let target=e.target;if(!triggerRef.current||target instanceof Node&&!target.contains(triggerRef.current))return;let onCloseHandler=onClose||$dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);onCloseHandler&&onCloseHandler()};return window.addEventListener("scroll",onScroll,!0),()=>{window.removeEventListener("scroll",onScroll,!0)}}),[isOpen,onClose,triggerRef])}let $2a41e45df1593e64$var$visualViewport="undefined"!=typeof document&&window.visualViewport;function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props){let{direction}=(0,real_module.bU)(),{arrowSize=0,targetRef,overlayRef,scrollRef=overlayRef,placement="bottom",containerPadding=12,shouldFlip=!0,boundaryElement="undefined"!=typeof document?document.body:null,offset=0,crossOffset=0,shouldUpdatePosition=!0,isOpen=!0,onClose,maxHeight,arrowBoundaryOffset=0}=props,[position,setPosition]=(0,react.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),deps=[shouldUpdatePosition,placement,overlayRef.current,targetRef.current,scrollRef.current,containerPadding,shouldFlip,boundaryElement,offset,crossOffset,isOpen,direction,maxHeight,arrowBoundaryOffset,arrowSize],updatePosition=(0,react.useCallback)((()=>{if(!(!1!==shouldUpdatePosition&&isOpen&&overlayRef.current&&targetRef.current&&scrollRef.current&&boundaryElement))return;let position=$edcf132a9284368a$export$b3ceb0cbf1056d98({placement:$2a41e45df1593e64$var$translateRTL(placement,direction),overlayNode:overlayRef.current,targetNode:targetRef.current,scrollNode:scrollRef.current,padding:containerPadding,shouldFlip,boundaryElement,offset,crossOffset,maxHeight,arrowSize,arrowBoundaryOffset});Object.keys(position.position).forEach((key=>overlayRef.current.style[key]=position.position[key]+"px")),overlayRef.current.style.maxHeight=null!=position.maxHeight?position.maxHeight+"px":void 0,setPosition(position)}),deps);(0,utils_dist_import.bt)(updatePosition,deps),function $2a41e45df1593e64$var$useResize(onResize){(0,utils_dist_import.bt)((()=>(window.addEventListener("resize",onResize,!1),()=>{window.removeEventListener("resize",onResize,!1)})),[onResize])}(updatePosition),(0,utils_dist_import.yU)({ref:overlayRef,onResize:updatePosition});let isResizing=(0,react.useRef)(!1);(0,utils_dist_import.bt)((()=>{let timeout,onResize=()=>{isResizing.current=!0,clearTimeout(timeout),timeout=setTimeout((()=>{isResizing.current=!1}),500),updatePosition()};return null==$2a41e45df1593e64$var$visualViewport||$2a41e45df1593e64$var$visualViewport.addEventListener("resize",onResize),null==$2a41e45df1593e64$var$visualViewport||$2a41e45df1593e64$var$visualViewport.addEventListener("scroll",onResize),()=>{null==$2a41e45df1593e64$var$visualViewport||$2a41e45df1593e64$var$visualViewport.removeEventListener("resize",onResize),null==$2a41e45df1593e64$var$visualViewport||$2a41e45df1593e64$var$visualViewport.removeEventListener("scroll",onResize)}}),[updatePosition]);let close=(0,react.useCallback)((()=>{isResizing.current||onClose()}),[onClose,isResizing]);return $dd149f63282afbbf$export$18fc8428861184da({triggerRef:targetRef,isOpen,onClose:onClose&&close}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...position.position,maxHeight:position.maxHeight}},placement:position.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:position.arrowOffsetLeft,top:position.arrowOffsetTop}},updatePosition}}function $2a41e45df1593e64$var$translateRTL(position,direction){return"rtl"===direction?position.replace("start","right").replace("end","left"):position.replace("start","left").replace("end","right")}const $a11501f3d1d39e6c$var$visibleOverlays=[];function $a11501f3d1d39e6c$export$ea8f71083e90600f(props,ref){let{onClose,shouldCloseOnBlur,isOpen,isDismissable=!1,isKeyboardDismissDisabled=!1,shouldCloseOnInteractOutside}=props;(0,react.useEffect)((()=>(isOpen&&$a11501f3d1d39e6c$var$visibleOverlays.push(ref),()=>{let index=$a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);index>=0&&$a11501f3d1d39e6c$var$visibleOverlays.splice(index,1)})),[isOpen,ref]);let onHide=()=>{$a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length-1]===ref&&onClose&&onClose()};(0,interactions_dist_import.Fc)({ref,onInteractOutside:isDismissable&&isOpen?e=>{shouldCloseOnInteractOutside&&!shouldCloseOnInteractOutside(e.target)||($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length-1]===ref&&(e.stopPropagation(),e.preventDefault()),onHide())}:null,onInteractOutsideStart:e=>{shouldCloseOnInteractOutside&&!shouldCloseOnInteractOutside(e.target)||$a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length-1]===ref&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps}=(0,interactions_dist_import.L_)({isDisabled:!shouldCloseOnBlur,onBlurWithin:e=>{e.relatedTarget&&!(0,focus_dist_import.cW)(e.relatedTarget)&&(shouldCloseOnInteractOutside&&!shouldCloseOnInteractOutside(e.relatedTarget)||onClose())}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||isKeyboardDismissDisabled||(e.stopPropagation(),e.preventDefault(),onHide())},...focusWithinProps},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}const $49c51c25361d4cd2$var$visualViewport="undefined"!=typeof document&&window.visualViewport,$49c51c25361d4cd2$var$nonTextInputTypes=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let $49c51c25361d4cd2$var$restore,$49c51c25361d4cd2$var$preventScrollCount=0;function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options={}){let{isDisabled}=options;(0,utils_dist_import.bt)((()=>{if(!isDisabled)return $49c51c25361d4cd2$var$preventScrollCount++,1===$49c51c25361d4cd2$var$preventScrollCount&&($49c51c25361d4cd2$var$restore=(0,utils_dist_import.gn)()?function $49c51c25361d4cd2$var$preventScrollMobileSafari(){let scrollable,restoreScrollableStyles,onTouchStart=e=>{scrollable=(0,utils_dist_import.rP)(e.target,!0),scrollable===document.documentElement&&scrollable===document.body||scrollable instanceof HTMLElement&&"auto"===window.getComputedStyle(scrollable).overscrollBehavior&&(restoreScrollableStyles=$49c51c25361d4cd2$var$setStyle(scrollable,"overscrollBehavior","contain"))},onTouchMove=e=>{scrollable&&scrollable!==document.documentElement&&scrollable!==document.body?scrollable.scrollHeight===scrollable.clientHeight&&scrollable.scrollWidth===scrollable.clientWidth&&e.preventDefault():e.preventDefault()},onTouchEnd=e=>{let target=e.target;$49c51c25361d4cd2$var$willOpenKeyboard(target)&&target!==document.activeElement&&(e.preventDefault(),setupStyles(),target.style.transform="translateY(-2000px)",target.focus(),requestAnimationFrame((()=>{target.style.transform=""}))),restoreScrollableStyles&&restoreScrollableStyles()},onFocus=e=>{let target=e.target;$49c51c25361d4cd2$var$willOpenKeyboard(target)&&(setupStyles(),target.style.transform="translateY(-2000px)",requestAnimationFrame((()=>{target.style.transform="",$49c51c25361d4cd2$var$visualViewport&&($49c51c25361d4cd2$var$visualViewport.height<window.innerHeight?requestAnimationFrame((()=>{$49c51c25361d4cd2$var$scrollIntoView(target)})):$49c51c25361d4cd2$var$visualViewport.addEventListener("resize",(()=>$49c51c25361d4cd2$var$scrollIntoView(target)),{once:!0}))})))},restoreStyles=null,setupStyles=()=>{if(restoreStyles)return;let onWindowScroll=()=>{window.scrollTo(0,0)},scrollX=window.pageXOffset,scrollY=window.pageYOffset;restoreStyles=(0,utils_dist_import.tS)($49c51c25361d4cd2$var$addEvent(window,"scroll",onWindowScroll),$49c51c25361d4cd2$var$setStyle(document.documentElement,"paddingRight",window.innerWidth-document.documentElement.clientWidth+"px"),$49c51c25361d4cd2$var$setStyle(document.documentElement,"overflow","hidden"),$49c51c25361d4cd2$var$setStyle(document.body,"marginTop",`-${scrollY}px`),(()=>{window.scrollTo(scrollX,scrollY)})),window.scrollTo(0,0)},removeEvents=(0,utils_dist_import.tS)($49c51c25361d4cd2$var$addEvent(document,"touchstart",onTouchStart,{passive:!1,capture:!0}),$49c51c25361d4cd2$var$addEvent(document,"touchmove",onTouchMove,{passive:!1,capture:!0}),$49c51c25361d4cd2$var$addEvent(document,"touchend",onTouchEnd,{passive:!1,capture:!0}),$49c51c25361d4cd2$var$addEvent(document,"focus",onFocus,!0));return()=>{null==restoreScrollableStyles||restoreScrollableStyles(),null==restoreStyles||restoreStyles(),removeEvents()}}():function $49c51c25361d4cd2$var$preventScrollStandard(){return(0,utils_dist_import.tS)($49c51c25361d4cd2$var$setStyle(document.documentElement,"paddingRight",window.innerWidth-document.documentElement.clientWidth+"px"),$49c51c25361d4cd2$var$setStyle(document.documentElement,"overflow","hidden"))}()),()=>{$49c51c25361d4cd2$var$preventScrollCount--,0===$49c51c25361d4cd2$var$preventScrollCount&&$49c51c25361d4cd2$var$restore()}}),[isDisabled])}function $49c51c25361d4cd2$var$setStyle(element,style,value){let cur=element.style[style];return element.style[style]=value,()=>{element.style[style]=cur}}function $49c51c25361d4cd2$var$addEvent(target,event,handler,options){return target.addEventListener(event,handler,options),()=>{target.removeEventListener(event,handler,options)}}function $49c51c25361d4cd2$var$scrollIntoView(target){let root=document.scrollingElement||document.documentElement;for(;target&&target!==root;){let scrollable=(0,utils_dist_import.rP)(target);if(scrollable!==document.documentElement&&scrollable!==document.body&&scrollable!==target){let scrollableTop=scrollable.getBoundingClientRect().top,targetTop=target.getBoundingClientRect().top;targetTop>scrollableTop+target.clientHeight&&(scrollable.scrollTop+=targetTop-scrollableTop)}target=scrollable.parentElement}}function $49c51c25361d4cd2$var$willOpenKeyboard(target){return target instanceof HTMLInputElement&&!$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type)||target instanceof HTMLTextAreaElement||target instanceof HTMLElement&&target.isContentEditable}const $f57aed4a881a3485$var$Context=react.createContext(null);function $f57aed4a881a3485$export$178405afcd8c5eb(props){let{children}=props,parent=(0,react.useContext)($f57aed4a881a3485$var$Context),[modalCount,setModalCount]=(0,react.useState)(0),context=(0,react.useMemo)((()=>({parent,modalCount,addModal(){setModalCount((count=>count+1)),parent&&parent.addModal()},removeModal(){setModalCount((count=>count-1)),parent&&parent.removeModal()}})),[parent,modalCount]);return react.createElement($f57aed4a881a3485$var$Context.Provider,{value:context},children)}function $f57aed4a881a3485$var$OverlayContainerDOM(props){let{modalProviderProps}=function $f57aed4a881a3485$export$d9aaed4c3ece1bc0(){let context=(0,react.useContext)($f57aed4a881a3485$var$Context);return{modalProviderProps:{"aria-hidden":!!(context&&context.modalCount>0)||null}}}();return react.createElement("div",{"data-overlay-container":!0,...props,...modalProviderProps})}function $f57aed4a881a3485$export$bf688221f59024e5(props){return react.createElement($f57aed4a881a3485$export$178405afcd8c5eb,null,react.createElement($f57aed4a881a3485$var$OverlayContainerDOM,props))}var $a2f21f5f14f60553$exports={};function $86ea4cb521eb2e37$export$2317d149ed6f78c4(props){let{onDismiss,...otherProps}=props,stringFormatter=(0,real_module.qb)($parcel$interopDefault($a2f21f5f14f60553$exports),"@react-aria/overlays"),labels=(0,utils_dist_import.bE)(otherProps,stringFormatter.format("dismiss"));return react.createElement(visually_hidden_dist_import.T,null,react.createElement("button",{...labels,tabIndex:-1,onClick:()=>{onDismiss&&onDismiss()},style:{width:1,height:1}}))}$a2f21f5f14f60553$exports={"ar-AE":$773d5888b972f1cf$exports,"bg-BG":$d11f19852b941573$exports,"cs-CZ":$b983974c2ee1efb3$exports,"da-DK":$5809cc9d4e92de73$exports,"de-DE":$c68c2e4fc74398d1$exports,"el-GR":$0898b4c153db2b77$exports,"en-US":$6d74810286a15183$exports,"es-ES":$309d73dc65f78055$exports,"et-EE":$44ad94f7205cf593$exports,"fi-FI":$7c28f5687f0779a9$exports,"fr-FR":$e6d75df4b68bd73a$exports,"he-IL":$87505c9dab186d0f$exports,"hr-HR":$553439c3ffb3e492$exports,"hu-HU":$74cf411061b983a2$exports,"it-IT":$e933f298574dc435$exports,"ja-JP":$ac91fc9fe02f71f6$exports,"ko-KR":$52b96f86422025af$exports,"lt-LT":$c0d724c3e51dafa6$exports,"lv-LV":$c92899672a3fe72e$exports,"nb-NO":$9f576b39d8e7a9d6$exports,"nl-NL":$9d025808aeec81a7$exports,"pl-PL":$fce709921e2c0fa6$exports,"pt-BR":$2599cf0c4ab37f59$exports,"pt-PT":$3c220ae7ef8a35fd$exports,"ro-RO":$93562b5094072f54$exports,"ru-RU":$cd9e2abd0d06c7b4$exports,"sk-SK":$45375701f409adf1$exports,"sl-SI":$27fab53a576de9dd$exports,"sr-SP":$4438748d9952e7c7$exports,"sv-SE":$0936d7347ef4da4c$exports,"tr-TR":$29700c92185d38f8$exports,"uk-UA":$662ccaf2be4c25b3$exports,"zh-CN":$d80a27deda7cdb3c$exports,"zh-TW":$2b2734393847c884$exports};let $5e3802645cc19319$var$refCountMap=new WeakMap,$5e3802645cc19319$var$observerStack=[];function $5e3802645cc19319$export$1c3ebcada18427bf(targets,root=document.body){let visibleNodes=new Set(targets),hiddenNodes=new Set,walk=root=>{for(let element of root.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))visibleNodes.add(element);let acceptNode=node=>{if(visibleNodes.has(node)||hiddenNodes.has(node.parentElement)&&"row"!==node.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let target of visibleNodes)if(node.contains(target))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT,{acceptNode}),acceptRoot=acceptNode(root);if(acceptRoot===NodeFilter.FILTER_ACCEPT&&hide(root),acceptRoot!==NodeFilter.FILTER_REJECT){let node=walker.nextNode();for(;null!=node;)hide(node),node=walker.nextNode()}},hide=node=>{var _refCountMap_get;let refCount=null!==(_refCountMap_get=$5e3802645cc19319$var$refCountMap.get(node))&&void 0!==_refCountMap_get?_refCountMap_get:0;"true"===node.getAttribute("aria-hidden")&&0===refCount||(0===refCount&&node.setAttribute("aria-hidden","true"),hiddenNodes.add(node),$5e3802645cc19319$var$refCountMap.set(node,refCount+1))};$5e3802645cc19319$var$observerStack.length&&$5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length-1].disconnect(),walk(root);let observer=new MutationObserver((changes=>{for(let change of changes)if("childList"===change.type&&0!==change.addedNodes.length&&![...visibleNodes,...hiddenNodes].some((node=>node.contains(change.target)))){for(let node of change.removedNodes)node instanceof Element&&(visibleNodes.delete(node),hiddenNodes.delete(node));for(let node of change.addedNodes)!(node instanceof HTMLElement||node instanceof SVGElement)||"true"!==node.dataset.liveAnnouncer&&"true"!==node.dataset.reactAriaTopLayer?node instanceof Element&&walk(node):visibleNodes.add(node)}}));observer.observe(root,{childList:!0,subtree:!0});let observerWrapper={observe(){observer.observe(root,{childList:!0,subtree:!0})},disconnect(){observer.disconnect()}};return $5e3802645cc19319$var$observerStack.push(observerWrapper),()=>{observer.disconnect();for(let node of hiddenNodes){let count=$5e3802645cc19319$var$refCountMap.get(node);1===count?(node.removeAttribute("aria-hidden"),$5e3802645cc19319$var$refCountMap.delete(node)):$5e3802645cc19319$var$refCountMap.set(node,count-1)}observerWrapper===$5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length-1]?($5e3802645cc19319$var$observerStack.pop(),$5e3802645cc19319$var$observerStack.length&&$5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length-1].observe()):$5e3802645cc19319$var$observerStack.splice($5e3802645cc19319$var$observerStack.indexOf(observerWrapper),1)}}function $f2f8a6077418541e$export$542a6fd13ac93354(props,state){let{triggerRef,popoverRef,isNonModal,isKeyboardDismissDisabled,shouldCloseOnInteractOutside,...otherProps}=props,{overlayProps,underlayProps}=$a11501f3d1d39e6c$export$ea8f71083e90600f({isOpen:state.isOpen,onClose:state.close,shouldCloseOnBlur:!0,isDismissable:!isNonModal,isKeyboardDismissDisabled,shouldCloseOnInteractOutside},popoverRef),{overlayProps:positionProps,arrowProps,placement}=$2a41e45df1593e64$export$d39e1813b3bdd0e1({...otherProps,targetRef:triggerRef,overlayRef:popoverRef,isOpen:state.isOpen,onClose:isNonModal?state.close:null});return $49c51c25361d4cd2$export$ee0f7cc6afcd1c18({isDisabled:isNonModal||!state.isOpen}),(0,utils_dist_import.bt)((()=>{if(state.isOpen&&!isNonModal&&popoverRef.current)return $5e3802645cc19319$export$1c3ebcada18427bf([popoverRef.current])}),[isNonModal,state.isOpen,popoverRef]),{popoverProps:(0,utils_dist_import.dG)(overlayProps,positionProps),arrowProps,underlayProps,placement}}const $337b884510726a0d$export$a2200b96afd16271=react.createContext(null);function $337b884510726a0d$export$c6fdb837b070b4ff(props){let isSSR=(0,ssr_dist_import.Av)(),{portalContainer=isSSR?null:document.body,isExiting}=props,[contain,setContain]=(0,react.useState)(!1),contextValue=(0,react.useMemo)((()=>({contain,setContain})),[contain,setContain]);if(!portalContainer)return null;let contents=props.children;return props.disableFocusManagement||(contents=react.createElement(focus_dist_import.MT,{restoreFocus:!0,contain:contain&&!isExiting},contents)),contents=react.createElement($337b884510726a0d$export$a2200b96afd16271.Provider,{value:contextValue},react.createElement(interactions_dist_import.mk,null,contents)),react_dom.createPortal(contents,portalContainer)}function $337b884510726a0d$export$14c98a7594375490(){let ctx=(0,react.useContext)($337b884510726a0d$export$a2200b96afd16271),setContain=null==ctx?void 0:ctx.setContain;(0,utils_dist_import.bt)((()=>{null==setContain||setContain(!0)}),[setContain])}}}]);