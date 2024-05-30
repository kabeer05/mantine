(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18316],{66002:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/styles-overview",function(){return r(59671)}])},59671:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var o=r(52322),t=r(45392),s=r(10592),l=r(25071),i=r(15019);let a=(0,l.A)(i.us.StylesOverview);function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"styles-overview",children:"Styles overview"}),"\n",(0,o.jsx)(n.p,{children:"This guide will help you understand how to apply styles to Mantine and custom components."}),"\n",(0,o.jsx)(n.h2,{id:"component-specific-props",children:"Component specific props"}),"\n",(0,o.jsxs)(n.p,{children:["Most of the components provide props that allow you to customize their styles. For example,\n",(0,o.jsx)(n.a,{href:"/core/button/",children:"Button"})," component has ",(0,o.jsx)(n.code,{children:"color"}),", ",(0,o.jsx)(n.code,{children:"variant"}),", ",(0,o.jsx)(n.code,{children:"size"})," and ",(0,o.jsx)(n.code,{children:"radius"})," props that control its\nappearance:"]}),"\n",(0,o.jsx)(r,{data:s.g}),"\n",(0,o.jsxs)(n.p,{children:["These props usually control multiple CSS properties, for example ",(0,o.jsx)(n.code,{children:"color"})," and variant props control ",(0,o.jsx)(n.code,{children:"color"}),",\n",(0,o.jsx)(n.code,{children:"background-color"})," and ",(0,o.jsx)(n.code,{children:"border"})," properties. In most cases, changing components props is the most optimal way to customize Mantine components."]}),"\n",(0,o.jsx)(n.h2,{id:"style-props",children:"Style props"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/style-props/",children:"Style props"})," work similar to component specific props, but with several differences:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Style props are not component specific, they can be used with any component."}),"\n",(0,o.jsxs)(n.li,{children:["Style props always control a single CSS property. For example, ",(0,o.jsx)(n.code,{children:"c"})," prop controls CSS ",(0,o.jsx)(n.code,{children:"color"})," property, while ",(0,o.jsx)(n.code,{children:"color"})," prop controls a set of properties: ",(0,o.jsx)(n.code,{children:"color"}),", ",(0,o.jsx)(n.code,{children:"background-color"})," and ",(0,o.jsx)(n.code,{children:"border-color"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Style props are set in ",(0,o.jsx)(n.code,{children:"style"})," attribute. It is not possible to override them with CSS without using ",(0,o.jsx)(n.code,{children:"!important"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/style-props/",children:"Style props"})," are useful when you need to change a single CSS property without creating a separate file for styles.\nSome of the most common use cases are:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Changing text color and font-size"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Text } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <div>\n      <Text c="blue.8" fz="lg">\n        Card title\n      </Text>\n      <Text c="dimmed" fz="sm">\n        Card description\n      </Text>\n    </div>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Applying margins to inputs inside a form:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { TextInput } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <form>\n      <TextInput label="First name" />\n      <TextInput label="Last name" mt="md" />\n      <TextInput label="Email" mt="md" />\n    </form>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Adding padding to various elements:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Paper } from '@mantine/core';\n\nfunction Demo() {\n  return <Paper p=\"xl\">My custom card</Paper>;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.a,{href:"/styles/style-props/",children:"style props"})," were never intended to be used\nas a primary way of styling components. In most cases, it is better to limit\nthe number of style props used per component to 3-4. If you find yourself using\nmore than 4 style props, consider creating a separate file with styles – it\nwill be easier to maintain and will be more ",(0,o.jsx)(n.a,{href:"/styles/styles-performance/",children:"performant"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"style-prop",children:"Style prop"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/style/",children:"Style prop"})," is supported by all Mantine components and allows setting\nCSS properties as well as CSS variables. It is useful in the following cases:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You want to apply a single CSS property to a component:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button, Flex } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Flex>\n      <Button style={{ flex: 1 }}>Large button</Button>\n      <Button>Small button</Button>\n    </Flex>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You want to set a CSS variable based on component prop:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo({ color }: { color: string }) {\n  // Later you will be able to use var(--my-color) in any nested element\n  return <Box style={{ '--my-color': color }}>My box</Box>;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/style/",children:"Style prop"})," works the same way as React ",(0,o.jsx)(n.code,{children:"style"})," prop. It is not\nrecommended to use it as a primary way of styling components. In most cases, it is\nbetter to create a separate file with styles – it will be easier to maintain and\nwill be more ",(0,o.jsx)(n.a,{href:"/styles/styles-performance/",children:"performant"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"css-modules",children:"CSS modules"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/css-modules/",children:"CSS modules"})," is the recommended way of applying most of the styles to Mantine components.\nCSS modules are the most performant and flexible way of styling components."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scss",children:"// Demo.module.css\n\n.root {\n  padding-right: rem(100px);\n\n  &[data-collapsed] {\n    padding-right: rem(40px);\n\n    & .control {\n      max-width: rem(200px);\n    }\n  }\n}\n\n.control {\n  background-color: var(--mantine-color-blue-1);\n  color: var(--mantine-color-blue-filled);\n  padding: var(--mantine-spacing-xl);\n  margin-left: rem(40px);\n\n  @media (max-width: $mantine-breakpoint-sm) {\n    margin-left: 0;\n    margin-top: var(--mantine-spacing-md);\n  }\n\n  @mixin hover {\n    background-color: light-dark(\n      var(--mantine-color-blue-1),\n      var(--mantine-color-blue-9)\n    );\n  }\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Demo.tsx\nimport classes from './Demo.module.css';\n\nfunction Demo({ collapsed }: { collapsed: boolean }) {\n  return (\n    <div\n      className={classes.root}\n      data-collapsed={collapsed || undefined}\n    >\n      <button type=\"button\" className={classes.control}>\n        Control\n      </button>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"theme-tokens",children:"Theme tokens"}),"\n",(0,o.jsxs)(n.p,{children:["You can reference Mantine ",(0,o.jsx)(n.a,{href:"/theming/theme-object/",children:"theme"})," values in any styles with\n",(0,o.jsx)(n.a,{href:"/styles/css-variables/",children:"CSS variables"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In ",(0,o.jsx)(n.a,{href:"/styles/css-modules/",children:"CSS modules"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scss",children:".root {\n  // references theme.colors.red[5]\n  background: var(--mantine-color-red-5);\n\n  // references theme.spacing.md\n  margin-top: var(--mantine-spacing-md);\n\n  // references theme.headings.fontFamily\n  font-family: var(--mantine-font-family-headings);\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In ",(0,o.jsx)(n.a,{href:"/styles/style-props/",children:"style props"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Box } from \'@mantine/core\';\n\nfunction Demo() {\n  // bg="red.5" references theme.colors.red[5]\n  // "red.5" is a shorthand for var(--mantine-color-red-5)\n\n  // mt="xl" references theme.spacing.xl\n  // "xl" is a shorthand for var(--mantine-spacing-xl)\n  return (\n    <Box bg="red.5" mt="xl">\n      My box\n    </Box>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In ",(0,o.jsx)(n.a,{href:"/styles/style/",children:"style prop"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Box\n        style={{\n          margin: 'var(--mantine-spacing-xl)',\n          color: 'var(--mantine-color-orange-5)',\n        }}\n      >\n        With CSS variables\n      </Box>\n\n      <Box\n        style={(theme) => ({\n          margin: theme.spacing.xl,\n          color: theme.colors.orange[5],\n        })}\n      >\n        With theme object\n      </Box>\n    </>\n  );\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})})}},10592:function(e,n,r){"use strict";r.d(n,{g:function(){return s}});var o=r(52322),t=r(17115);let s={type:"configurator",component:function(e){return(0,o.jsx)(t.z,{...e,children:"Button"})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`,centered:!0,controls:[r(50327).cH,{type:"color",prop:"color",initialValue:"blue",libraryValue:"blue"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},50327:function(e,n,r){"use strict";r.d(n,{cH:function(){return o},d_:function(){return t}});let o={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},t={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=66002)}),_N_E=e.O()}]);