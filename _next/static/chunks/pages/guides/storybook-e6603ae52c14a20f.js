(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57210],{33005:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/storybook",function(){return n(4351)}])},4351:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return c}});var r=n(24246),t=n(71670),i=n(3916),s=n(54568);let a=(0,i.A)(s.us.Storybook);function d(e){let o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{InstallScript:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"setup-mantine-in-storybook",children:"Setup Mantine in Storybook"}),"\n",(0,r.jsx)(o.p,{children:"Note that this guide covers only Storybook 7.0+ integration. If you are using older version of Storybook,\nit will not work for you."}),"\n",(0,r.jsx)(o.h2,{id:"add-storybook-to-your-application",children:"Add Storybook to your application"}),"\n",(0,r.jsx)(o.p,{children:"If you already have Storybook in your application, you can skip this step."}),"\n",(0,r.jsxs)(o.p,{children:["Follow ",(0,r.jsx)(o.a,{href:"https://storybook.js.org/docs/react/get-started/install/",children:"Storybook getting started"})," guide\nto add Storybook to your application:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"npx storybook@latest init\n"})}),"\n",(0,r.jsx)(o.h2,{id:"configure-addons",children:"Configure addons"}),"\n",(0,r.jsxs)(o.p,{children:["Note that ",(0,r.jsx)(o.code,{children:"@storybook/addon-styling-webpack"})," is required only if you are\nnot using Vite. ",(0,r.jsxs)(o.strong,{children:["If you are using Vite, do not install ",(0,r.jsx)(o.code,{children:"@storybook/addon-styling-webpack"})," and do not add it to the addons section in ",(0,r.jsx)(o.code,{children:"main.ts"})," file"]}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Install Storybook addons:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://storybook.js.org/addons/storybook-dark-mode/",children:"storybook-dark-mode"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://storybook.js.org/addons/@storybook/addon-styling-webpack",children:"@storybook/addon-styling-webpack"})}),"\n"]}),"\n",(0,r.jsx)(n,{packages:"storybook-dark-mode @storybook/addon-styling-webpack",dev:!0}),"\n",(0,r.jsxs)(o.p,{children:["Add addons to ",(0,r.jsx)(o.code,{children:".storybook/main.ts"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import type { StorybookConfig } from '@storybook/react-vite';\n\nconst config: StorybookConfig = {\n  // ... other config properties\n  addons: [\n    // ... other addons\n    '@storybook/addon-styling-webpack', // Add this line only if you are not using Vite\n    'storybook-dark-mode',\n  ],\n};\n\nexport default config;\n"})}),"\n",(0,r.jsx)(o.h2,{id:"theme-object",children:"Theme object"}),"\n",(0,r.jsxs)(o.p,{children:["To shared ",(0,r.jsx)(o.a,{href:"/theming/theme-object",children:"theme object"})," between your application and Storybook, create\n",(0,r.jsx)(o.code,{children:"src/theme.ts"})," (or any other path in your application) file with your theme override:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"// src/theme.ts\nimport { createTheme } from '@mantine/core';\n\nexport const theme = createTheme({\n  fontFamily: 'serif',\n  // ... other theme override properties\n});\n"})}),"\n",(0,r.jsx)(o.p,{children:"Then you will be able to use the same theme both in your application and Storybook:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"// In your application\n\nimport { MantineProvider } from '@mantine/core';\nimport { theme } from './theme';\n\nfunction App() {\n  return <MantineProvider theme={theme}>{/* ... */}</MantineProvider>;\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"storybook-preview",children:"Storybook preview"}),"\n",(0,r.jsxs)(o.p,{children:["If ",(0,r.jsx)(o.code,{children:".storybook/preview.tsx"})," file does not exist, create it and add\nthe following content:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport React, { useEffect } from 'react';\nimport { addons } from '@storybook/preview-api';\nimport { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';\nimport {\n  MantineProvider,\n  useMantineColorScheme,\n} from '@mantine/core';\n// theme.ts file from previous step\nimport { theme } from '../src/theme';\n\nconst channel = addons.getChannel();\n\nfunction ColorSchemeWrapper({\n  children,\n}: {\n  children: React.ReactNode;\n}) {\n  const { setColorScheme } = useMantineColorScheme();\n  const handleColorScheme = (value: boolean) =>\n    setColorScheme(value ? 'dark' : 'light');\n\n  useEffect(() => {\n    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);\n    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);\n  }, [channel]);\n\n  return <>{children}</>;\n}\n\nexport const decorators = [\n  (renderStory: any) => (\n    <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>\n  ),\n  (renderStory: any) => (\n    <MantineProvider theme={theme}>{renderStory()}</MantineProvider>\n  ),\n];\n"})}),"\n",(0,r.jsx)(o.p,{children:"All set! Start Storybook:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"npm run storybook\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})})}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=33005)}),_N_E=e.O()}]);