import{_ as m,o as f,c as l}from"./framework.e7a370da.js";function u(t,o,n,e){const s=(t+(e||"")).toString().includes("%");if(typeof t=="string"?[t,o,n,e]=t.match(/(0?\.?\d+)%?\b/g).map(r=>Number(r)):e!==void 0&&(e=Number.parseFloat(e)),typeof t!="number"||typeof o!="number"||typeof n!="number"||t>255||o>255||n>255)throw new TypeError("Expected three numbers below 256");if(typeof e=="number"){if(!s&&e>=0&&e<=1)e=Math.round(255*e);else if(s&&e>=0&&e<=100)e=Math.round(255*e/100);else throw new TypeError(`Expected alpha value (${e}) as a fraction or percentage`);e=(e|256).toString(16).slice(1)}else e="";return(n|o<<8|t<<16|1<<24).toString(16).slice(1)+e}const c="update:modelValue",d={name:"ColorInput",props:{modelValue:{type:String,default:""}},emits:[c],computed:{modelValueAsHex(){const{modelValue:t}=this;return t.includes("rgba")?u(t):t}},methods:{rgbHex:u,onInput(t){this.$emit(c,t.target.value,this.modelValue)}}},p=["value"];function _(t,o,n,e,s,r){return f(),l("input",{type:"color",class:"form-control form-control-color form-control-sm",value:r.modelValueAsHex,onInput:o[0]||(o[0]=(...i)=>r.onInput&&r.onInput(...i))},null,40,p)}const y=m(d,[["render",_]]);export{y as default};
