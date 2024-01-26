(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15819],{71611:function(t,e,a){"use strict";a.d(e,{$:function(){return B}});var n=a(24246);a(27378);var i=a(40624),o=a(56589),r=a(82827),l=a(91428),Text=a(26569),s=a(22971),c=a(17992),d=a(8671),u=a(86010),m=a(9121),b=a(86175),p=a(73832),h=a.n(p);function k(t){let{icon:e,...a}=t;return(0,n.jsx)(d.z,{component:"a",target:"_blank",rel:"noopener noreferrer",leftSection:e,radius:"md",classNames:{root:h().socialButton,section:h().socialButtonSection},...a})}function v(t){let{className:e,...a}=t;return(0,n.jsx)(k,{className:(0,i.Z)(h().discordButton,e),icon:(0,n.jsx)(u.D,{size:16}),href:b.$.discordLink,...a,children:"Join Discord community"})}function f(t){let{className:e,...a}=t;return(0,n.jsx)(k,{className:(0,i.Z)(h().twitterButton,e),icon:(0,n.jsx)(m.Z,{size:16}),href:b.$.twitterLink,...a,children:"Follow Mantine on Twitter"})}let _=[{title:"About",data:[{type:"next",label:"Contribute",link:"/contribute"},{type:"next",label:"About Mantine",link:"/about"},{type:"next",label:"Changelog",link:"/changelog/previous-versions"},{type:"link",label:"Releases",link:b.$.gitHubLinks.releases}]},{title:"Community",data:[{type:"link",label:"Chat on Discord",link:b.$.discordLink},{type:"link",label:"Follow on Twitter",link:b.$.twitterLink},{type:"link",label:"Follow on Github",link:"https://github.com/rtivital"},{type:"link",label:"GitHub discussions",link:b.$.gitHubLinks.discussions}]},{title:"Project",data:[{type:"link",label:"Mantine UI",link:b.$.uiLink},{type:"link",label:"Documentation",link:b.$.docsLink},{type:"link",label:"Github organization",link:b.$.gitHubLinks.organization},{type:"link",label:"npm organization",link:b.$.npmLink}]}];var g=a(79894),x=a.n(g),y=a(13830),w=a.n(y);function T(t){let{data:e,title:a}=t,i=e.map((t,e)=>(0,n.jsx)(Text.x,{className:w().link,component:"next"===t.type?x():"a",href:t.link,children:t.label},e));return(0,n.jsxs)("div",{className:w().wrapper,children:[(0,n.jsx)(Text.x,{className:w().title,children:a}),i]})}var N=a(40872),j=a.n(N);function B(t){let{withNavbar:e}=t,a=_.map(t=>(0,n.jsx)(T,{data:t.data,title:t.title},t.title));return(0,n.jsxs)("div",{className:j().root,children:[(0,n.jsx)("div",{className:j().spacer}),(0,n.jsx)(o.x,{mod:{"with-navbar":e},className:(0,i.Z)(j().wrapper,r.Z.classNames.fullWidth),children:(0,n.jsxs)(l.W,{size:1100,children:[(0,n.jsxs)("div",{className:j().inner,children:[(0,n.jsxs)("div",{className:j().logoSection,children:[(0,n.jsx)(c.T,{}),(0,n.jsx)(Text.x,{className:j().description,fz:"sm",children:"Build fully functional accessible web applications faster than ever"})]}),(0,n.jsx)("div",{className:j().groups,children:a})]}),(0,n.jsx)("div",{className:j().afterFooter,children:(0,n.jsxs)(s.Z,{justify:"space-between",wrap:"wrap",children:[(0,n.jsxs)(Text.x,{fz:"xs",className:j().afterFooterNote,children:["Built by ",(0,n.jsx)("a",{href:"https://github.com/rtivital",children:"Vitaly Rtishchev"})," and"," ",(0,n.jsx)("a",{href:"https://github.com/mantinedev/mantine/graphs/contributors",children:"these awesome people"})]}),(0,n.jsxs)("div",{className:j().social,children:[(0,n.jsx)(v,{className:j().socialButton}),(0,n.jsx)(f,{className:j().socialButton})]})]})})]})})]})}},40872:function(t){t.exports={root:"Footer_root__d69lf",spacer:"Footer_spacer__m8ICY",wrapper:"Footer_wrapper__rpDYh",inner:"Footer_inner__FbJ6a",logoSection:"Footer_logoSection__60cxm",description:"Footer_description__s_1Tl",title:"Footer_title__D7snR",afterFooter:"Footer_afterFooter__Bk3gc",afterFooterNote:"Footer_afterFooterNote__xzYGO",groups:"Footer_groups__y7eTr",social:"Footer_social__RYYyg",socialButton:"Footer_socialButton___uZwM"}},13830:function(t){t.exports={wrapper:"LinksGroup_wrapper__LUD9P",link:"LinksGroup_link__rMava",title:"LinksGroup_title__EBDF3"}},73832:function(t){t.exports={socialButton:"SocialButton_socialButton__YzW0G",socialButtonSection:"SocialButton_socialButtonSection__yZ0Qx",discordButton:"SocialButton_discordButton__WILTe",twitterButton:"SocialButton_twitterButton__Nss83"}},66763:function(t,e,a){"use strict";a.d(e,{a:function(){return n}});let n={selectors:{root:"Root element",label:"Thumb label",thumb:"Thumb element",trackContainer:"Wraps track element",track:"Slider track",bar:"Track filled part",markWrapper:"Contains `mark` and `markLabel` elements",mark:"Mark displayed on track",markLabel:"Label of the associated mark, displayed below track"},vars:{root:{"--slider-size":"Controls track `height`","--slider-color":"Controls filled track, thumb and marks `background`","--slider-thumb-size":"Controls thumb `width` and `height`","--slider-radius":"Controls `border-radius` of track and thumb"}},modifiers:[{modifier:"data-disabled",selector:["trackContainer","track","bar","thumb","mark"],condition:"`disabled` prop is set"},{modifier:"data-inverted",selector:["track","bar"],condition:"`inverted` prop is set"},{modifier:"data-dragging",selector:"thumb",condition:"slider is being dragged"},{modifier:"data-filled",selector:"mark",condition:"mark position is less or equal slider value"}]}},91428:function(t,e,a){"use strict";a.d(e,{W:function(){return b}});var n=a(27378),i=a(92082),o=a(83453),r=a(96739),l=a(6231),s=a(56589),c=a(20410),d={root:"m-7485cace"};let u={},m=(0,o.Z)((t,{size:e,fluid:a})=>({root:{"--container-size":a?void 0:(0,i.ap)(e,"container-size")}})),b=(0,c.d)((t,e)=>{let a=(0,r.w)("Container",u,t),{classNames:i,className:o,style:c,styles:b,unstyled:p,vars:h,fluid:k,mod:v,...f}=a,_=(0,l.y)({name:"Container",classes:d,props:a,className:o,style:c,classNames:i,styles:b,unstyled:p,vars:h,varsResolver:m});return n.createElement(s.x,{ref:e,mod:[{fluid:k},v],..._("root"),...f})});b.classes=d,b.displayName="@mantine/core/Container"},83601:function(t,e,a){"use strict";a.d(e,{m:function(){return z}});var n=a(27378),i=a(31002),o=a(58675),r=a(88140),l=a(92082),s=a(83453),c=a(89738),d=a(34121),u=a(96739),m=a(6231),b=a(56589),p=a(20410),h=a(71656);let[k,v]=(0,h.R)("Tabs component was not found in the tree");var f={root:"m-89d60db1","list--default":"m-576c9d4",list:"m-89d33d6d",panel:"m-b0c91715",tab:"m-4ec4dce6",tabSection:"m-fc420b1f","tab--default":"m-539e827b","list--outline":"m-6772fbd5","tab--outline":"m-b59ab47c","tab--pills":"m-c3381914"};let _={},g=(0,p.d)((t,e)=>{let a=(0,u.w)("TabsList",_,t),{children:i,className:o,grow:r,justify:l,classNames:s,styles:c,style:d,mod:m,...p}=a,h=v();return n.createElement(b.x,{...p,...h.getStyles("list",{className:o,style:d,classNames:s,styles:c,props:a,variant:h.variant}),ref:e,role:"tablist",variant:h.variant,mod:[{grow:r,orientation:h.orientation,placement:"vertical"===h.orientation&&h.placement,inverted:h.inverted},m],"aria-orientation":h.orientation,__vars:{"--tabs-justify":l}},i)});g.classes=f,g.displayName="@mantine/core/TabsList";let x={},y=(0,p.d)((t,e)=>{let a=(0,u.w)("TabsPanel",x,t),{children:i,className:o,value:r,classNames:l,styles:s,style:c,mod:d,...m}=a,p=v(),h=p.value===r,k=p.keepMounted||a.keepMounted?i:h?i:null;return n.createElement(b.x,{...m,...p.getStyles("panel",{className:o,classNames:l,styles:s,style:[c,h?void 0:{display:"none"}],props:a}),ref:e,mod:[{orientation:p.orientation},d],role:"tabpanel",id:p.getPanelId(r),"aria-labelledby":p.getTabId(r)},k)});y.classes=f,y.displayName="@mantine/core/TabsPanel";var w=a(61734),T=a(2256),N=a(49134),j=a(19397);let B={},F=(0,p.d)((t,e)=>{let a=(0,u.w)("TabsTab",B,t),{className:i,children:o,rightSection:r,leftSection:l,value:s,onClick:d,onKeyDown:m,disabled:b,color:p,style:h,classNames:k,styles:f,vars:_,mod:g,...x}=a,y=(0,T.rZ)(),{dir:F}=(0,N.gm)(),C=v(),S=s===C.value,L={classNames:k,styles:f,props:a};return n.createElement(j.k,{...x,...C.getStyles("tab",{className:i,style:h,variant:C.variant,...L}),disabled:b,unstyled:C.unstyled,variant:C.variant,mod:[{active:S,disabled:b,orientation:C.orientation,inverted:C.inverted,placement:"vertical"===C.orientation&&C.placement},g],ref:e,role:"tab",id:C.getTabId(s),"aria-selected":S,tabIndex:S||null===C.value?0:-1,"aria-controls":C.getPanelId(s),onClick:t=>{C.onChange(C.allowTabDeactivation&&s===C.value?null:s),d?.(t)},__vars:{"--tabs-color":p?(0,c.p)(p,y):void 0},onKeyDown:(0,w.R)({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:C.activateTabWithKeyboard,loop:C.loop,orientation:C.orientation||"horizontal",dir:F,onKeyDown:m})},l&&n.createElement("span",{...C.getStyles("tabSection",L),"data-position":"left"},l),o&&n.createElement("span",{...C.getStyles("tabLabel",L)},o),r&&n.createElement("span",{...C.getStyles("tabSection",L),"data-position":"right"},r))});F.classes=f,F.displayName="@mantine/core/TabsTab";let C="Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",S={keepMounted:!0,orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},L=(0,s.Z)((t,{radius:e,color:a,autoContrast:n})=>({root:{"--tabs-radius":(0,l.H5)(e),"--tabs-color":(0,c.p)(a,t),"--tabs-text-color":n?(0,d.R)({color:a,theme:t}):void 0}})),z=(0,p.d)((t,e)=>{let a=(0,u.w)("Tabs",S,t),{defaultValue:l,value:s,onChange:c,orientation:d,children:p,loop:h,id:v,activateTabWithKeyboard:_,allowTabDeactivation:g,variant:x,color:y,radius:w,inverted:T,placement:N,keepMounted:j,classNames:B,styles:F,unstyled:z,className:E,style:$,vars:Z,autoContrast:D,mod:M,...I}=a,P=(0,i.M)(v),[R,W]=(0,o.C)({value:s,defaultValue:l,finalValue:null,onChange:c}),G=(0,m.y)({name:"Tabs",props:a,classes:f,className:E,style:$,classNames:B,styles:F,unstyled:z,vars:Z,varsResolver:L});return n.createElement(k,{value:{placement:N,value:R,orientation:d,id:P,loop:h,activateTabWithKeyboard:_,getTabId:(0,r.A)(`${P}-tab`,C),getPanelId:(0,r.A)(`${P}-panel`,C),onChange:W,allowTabDeactivation:g,variant:x,color:y,radius:w,inverted:T,keepMounted:j,unstyled:z,getStyles:G}},n.createElement(b.x,{ref:e,id:P,variant:x,mod:[{orientation:d,inverted:"horizontal"===d&&T,placement:"vertical"===d&&N},M],...G("root"),...I},p))});z.classes=f,z.displayName="@mantine/core/Tabs",z.Tab=F,z.Panel=y,z.List=g},88140:function(t,e,a){"use strict";function n(t,e){return a=>{if("string"!=typeof a||0===a.trim().length)throw Error(e);return`${t}-${a}`}}a.d(e,{A:function(){return n}})},9121:function(t,e,a){"use strict";a.d(e,{Z:function(){return r}});var n=a(27378),i=a(56589),o=a(71078);function r({size:t,style:e,...a}){return n.createElement(i.x,{component:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 209",fill:"currentColor",style:[{width:(0,o.h)(t),height:(0,o.h)(t)},e],...a},n.createElement("path",{fillRule:"nonzero",d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 01-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 01-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 01-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 00256 25.45"}))}}}]);