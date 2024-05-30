(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83074],{69378:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(i=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var n,o,i,s=i[o];if(!e(t[s],r[s]))return!1}return!0}return t!=t&&r!=r}},90963:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/status",function(){return r(30844)}])},30844:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(52322),o=r(45392),i=r(2784),s=r(74770),c=r(17115),d=r(405);let a={type:"code",component:function(){let e=(0,d.c)({mode:"uncontrolled",initialValues:{text:"initial value"}});return(0,n.jsxs)("div",{children:[(0,i.createElement)(s.o,{...e.getInputProps("text"),key:e.key("text"),label:"Touched/dirty demo",placeholder:"Touched/dirty demo"}),(0,n.jsx)(c.z,{mt:"md",onClick:()=>console.log({touched:e.isTouched("text"),dirty:e.isDirty("text")}),children:"Log status to console"})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { text: 'initial value' },
  });

  return (
    <div>
      <TextInput
        {...form.getInputProps('text')}
        key={form.key('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Button
        onClick={() =>
          console.log({ touched: form.isTouched('text'), dirty: form.isDirty('text') })
        }
      >
        Log status to console
      </Button>
    </div>
  );
}
`,centered:!0,maxWidth:340};var l=r(25071),u=r(15019);let f=(0,l.A)(u.us.formStatus);function h(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"touched-and-dirty-state",children:"Touched and dirty state"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"form.isTouched"})," and ",(0,n.jsx)(t.code,{children:"form.isDirty"})," fields provide information about current field status:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Field is considered to be ",(0,n.jsx)(t.code,{children:"touched"})," when user focused it or its value was changed programmatically with ",(0,n.jsx)(t.code,{children:"form.setFieldValue"})," handler"]}),"\n",(0,n.jsxs)(t.li,{children:["Field is considered to be ",(0,n.jsx)(t.code,{children:"dirty"})," when its value was changed and new value is different from field value specified in ",(0,n.jsx)(t.code,{children:"initialValues"})," (compared with ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/fast-deep-equal",children:"fast-deep-equal"}),")"]}),"\n"]}),"\n",(0,n.jsx)(r,{data:a}),"\n",(0,n.jsx)(t.h2,{id:"istouched-and-isdirty-functions",children:"isTouched and isDirty functions"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1, nested: { field: '' } },\n});\n\n// Provide path as first argument to get state of single field\nform.isTouched('a'); // -> was field 'a' focused or changed?\nform.isDirty('a'); // -> was field 'a' modified?\nform.isDirty('nested.field'); // -> nested fields are also supported\n\n// If field path is not provided,\n// then functions will return form state instead\nform.isTouched(); // -> was any field in form focused or changed?\nform.isDirty(); // -> was any field in form modified?\n"})}),"\n",(0,n.jsx)(t.h2,{id:"initial-values",children:"Initial values"}),"\n",(0,n.jsxs)(t.p,{children:["You can provide initial touched and dirty values with ",(0,n.jsx)(t.code,{children:"initialTouched"})," and ",(0,n.jsx)(t.code,{children:"initialDirty"})," properties.\nBoth properties support ",(0,n.jsx)(t.a,{href:"/form/errors/",children:"the same fields path format as errors"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1, nested: { field: '' } },\n  initialTouched: { a: true, 'nested.field': true },\n  initialDirty: { a: true, 'nested.field': true },\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"resettouched-and-resetdirty",children:"resetTouched and resetDirty"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"form.resetTouched"})," and ",(0,n.jsx)(t.code,{children:"form.resetDirty"})," functions will make all fields clean and untouched.\nNote that ",(0,n.jsx)(t.code,{children:"form.reset"})," will also reset ",(0,n.jsx)(t.code,{children:"touched"})," and ",(0,n.jsx)(t.code,{children:"dirty"})," state:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1 },\n  initialTouched: { a: true },\n  initialDirty: { a: true },\n});\n\nform.isDirty('a'); // -> true\nform.isTouched('a'); // -> true\n\nform.resetTouched();\nform.isTouched('a'); // -> false\n\nform.resetDirty();\nform.isDirty('a'); // -> false\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To reset values that are used for dirty check call ",(0,n.jsx)(t.code,{children:"form.resetDirty"})," with new values:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1 },\n});\n\nform.setValues({ a: 2 });\nform.isDirty(); // -> true\n\nform.resetDirty({ a: 2 });\nform.isDirty(); // -> false\n\nform.setValues({ a: 3 });\nform.isDirty(); // -> true\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(f,{...e,children:(0,n.jsx)(h,{...e})})}},15463:function(e,t,r){"use strict";function n(e,t,r){"object"==typeof r.value&&(r.value=o(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function o(e){if("object"!=typeof e)return e;var t,r,i,s=0,c=Object.prototype.toString.call(e);if("[object Object]"===c?i=Object.create(e.__proto__||null):"[object Array]"===c?i=Array(e.length):"[object Set]"===c?(i=new Set,e.forEach(function(e){i.add(o(e))})):"[object Map]"===c?(i=new Map,e.forEach(function(e,t){i.set(o(t),o(e))})):"[object Date]"===c?i=new Date(+e):"[object RegExp]"===c?i=new RegExp(e.source,e.flags):"[object DataView]"===c?i=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===c?i=e.slice(0):"Array]"===c.slice(-6)&&(i=new e.constructor(e)),i){for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)n(i,r[s],Object.getOwnPropertyDescriptor(e,r[s]));for(s=0,r=Object.getOwnPropertyNames(e);s<r.length;s++)Object.hasOwnProperty.call(i,t=r[s])&&i[t]===e[t]||n(i,t,Object.getOwnPropertyDescriptor(e,t))}return i||e}r.d(t,{Y:function(){return o}})}},function(e){e.O(0,[61177,66748,11340,405,92888,49774,40179],function(){return e(e.s=90963)}),_N_E=e.O()}]);