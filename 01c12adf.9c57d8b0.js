(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return d}));var t=n(0),l=n.n(t);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),r=function(e){var a=l.a.useContext(b),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},p=function(e){var a=r(e.components);return l.a.createElement(b.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},m=l.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=r(n),m=t,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||s;return n?l.a.createElement(d,c(c({ref:a},b),{},{components:n})):l.a.createElement(d,c({ref:a},b))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=n.length,o=new Array(s);o[0]=m;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var b=2;b<s;b++)o[b]=n[b];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},114:function(e,a,n){"use strict";function t(e){var a,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=t(e[a]))&&(l&&(l+=" "),l+=n);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}a.a=function(){for(var e,a,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(a=t(e))&&(l&&(l+=" "),l+=a);return l}},122:function(e,a,n){"use strict";var t=n(0),l=n(123);a.a=function(){const e=Object(t.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,a,n){"use strict";var t=n(0);const l=Object(t.createContext)(void 0);a.a=l},139:function(e,a,n){"use strict";var t=n(0),l=n.n(t),s=n(122),o=n(114),c=n(57),i=n.n(c);const b=37,r=39;a.a=function(e){const{lazy:a,block:n,defaultValue:c,values:p,groupId:u,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:j}=Object(s.a)(),[O,h]=Object(t.useState)(c),v=t.Children.toArray(e.children);if(null!=u){const e=d[u];null!=e&&e!==O&&p.some((a=>a.value===e))&&h(e)}const y=e=>{h(e),null!=u&&j(u,e)},g=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:a})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,a,n)=>{switch(n.keyCode){case r:((e,a)=>{const n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()})(e,a);break;case b:((e,a)=>{const n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,a)}})(g,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},a)))),a?Object(t.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>Object(t.cloneElement)(e,{key:a,hidden:e.props.value!==O})))))}},140:function(e,a,n){"use strict";var t=n(0),l=n.n(t);a.a=function({children:e,hidden:a,className:n}){return l.a.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}},73:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return b})),n.d(a,"toc",(function(){return r})),n.d(a,"default",(function(){return u}));var t=n(3),l=n(7),s=(n(0),n(113)),o=n(139),c=n(140),i={title:"Templates Explained",description:"Yacht Template Documentation",id:"Templates"},b={unversionedId:"Templates/Templates",id:"Templates/Templates",isDocsHomePage:!1,title:"Templates Explained",description:"Yacht Template Documentation",source:"@site/docs/Templates/templates.md",slug:"/Templates/Templates",permalink:"/docs/Templates/Templates",editUrl:"https://github.com/SelfhostedPro/Yacht-Docs/edit/master/docs/Templates/templates.md",version:"current",sidebar:"documentation",previous:{title:"ARM",permalink:"/docs/Installation/ARM"},next:{title:"Template Variables",permalink:"/docs/Templates/Template_Variables"}},r=[{value:"This is what each section does:",id:"this-is-what-each-section-does",children:[{value:"type*",id:"type",children:[]},{value:"title*",id:"title",children:[]},{value:"name",id:"name",children:[]},{value:"description",id:"description",children:[]},{value:"logo",id:"logo",children:[]},{value:"image*",id:"image",children:[]},{value:"note",id:"note",children:[]},{value:"categories",id:"categories",children:[]},{value:"platform*",id:"platform",children:[]},{value:"restart_policy",id:"restart_policy",children:[]},{value:"ports",id:"ports",children:[]},{value:"network_mode",id:"network_mode",children:[]},{value:"volumes",id:"volumes",children:[]},{value:"sysctls",id:"sysctls",children:[]},{value:"cap_add",id:"cap_add",children:[]},{value:"env",id:"env",children:[]},{value:"labels",id:"labels",children:[]},{value:"devices",id:"devices",children:[]}]}],p={toc:r};function u(e){var a=e.components,n=Object(l.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This page will go over building a template. The templates are all compatible with portainer v1 templates so you can always check that documentation too. All of the keys (type, name, title, etc.) are optional and will simply be blank if left empty."),Object(s.b)("p",null,"Single app templates will be surrounded by ",Object(s.b)("inlineCode",{parentName:"p"},"{}")," as is standard for .json files. Multi app templates with consist of multiple ",Object(s.b)("inlineCode",{parentName:"p"},"{}")," sections (separated with a ",Object(s.b)("inlineCode",{parentName:"p"},",")," after the ",Object(s.b)("inlineCode",{parentName:"p"},"}")," (ie. ",Object(s.b)("inlineCode",{parentName:"p"},"},"),") surrounded in ",Object(s.b)("inlineCode",{parentName:"p"},"[]"),"."),Object(s.b)("p",null,"More info on writing JSON is available ",Object(s.b)("a",{parentName:"p",href:"https://www.tutorialspoint.com/json/json_quick_guide.htm"},"here")),Object(s.b)("p",null,"If you don't like writing in JSON another option is to use YAML. It's automatically converted into JSON in the backend so all of the options are the same."),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 1,\n  "title": "App Title",\n  "name": "container-name",\n  "description": "This is a description.",\n  "logo": "https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png",\n  "image": "dev/application:latest",\n  "note": "This is a note",\n  "categories": [\n    "Other",\n    "Tools"\n  ],\n  "platform": "linux",\n  "restart_policy": "unless-stopped",\n  "ports": [\n    "9091:9091/tcp",\n    "9090:9090/tcp"\n  ],\n  "network_mode": "bridge",\n  "volumes": [\n    {\n      "container": "/data",\n      "bind": "!downloads"\n    },\n    {\n      "container": "/etc/localtime",\n      "bind": "!localtime"\n    }\n  ],\n  "sysctls": [\n    {\n    "net.ipv6.conf.all.disable_ipv6": "0"\n    }\n  ],\n  "cap_add": [\n    "NET_ADMIN"\n  ],\n  "env": [\n    {\n      "name": "PUID",\n      "label": "PUID",\n      "default": "1000"\n    },\n    {\n      "name": "PGID",\n      "label": "PGID",\n      "default": "1000"\n    },\n    {\n      "name": "EnvWithDescription",\n      "label": "EnvWithDescription",\n      "description": "This is a description",\n      "default": "default"\n    }\n  ]\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},'---\ntype: 1\ntitle: App Title\nname: container-name\ndescription: This is a description.\nlogo: https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png\nimage: dev/application:latest\nnote: This is a note\ncategories:\n- Other\n- Tools\nplatform: linux\nrestart_policy: unless-stopped\nports:\n- 9091:9091/tcp\n- 9090:9090/tcp\nnetwork_mode: bridge\nvolumes:\n- container: "/data"\n  bind: "!downloads"\n- container: "/etc/localtime"\n  bind: "!localtime"\nsysctls:\n- net.ipv6.conf.all.disable_ipv6: \'0\'\ncap_add:\n- NET_ADMIN\nenv:\n- name: PUID\n  label: PUID\n  default: \'1000\'\n- name: PGID\n  label: PGID\n  default: \'1000\'\n- name: EnvWithDescription\n  label: EnvWithDescription\n  description: This is a description\n  default: default\n')))),Object(s.b)("h2",{id:"this-is-what-each-section-does"},"This is what each section does:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"*"," = required")),Object(s.b)("h3",{id:"type"},"type*"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 1,\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"type: 1\n")))),Object(s.b)("p",null,"This currently isn't in use. It's just here to keep compatibility with portainer but is ignored."),Object(s.b)("h3",{id:"title"},"title*"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "App Title",\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"title: App Title\n")))),Object(s.b)("p",null,"This is what is displayed when in the apps list page. Punctuation is nice here and adds to the polish"),Object(s.b)("h3",{id:"name"},"name"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "app_name",\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"name: app_name\n")))),";",Object(s.b)("p",null,"This is what the actual container is named. Information on this is ",Object(s.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/#name---name"},"here"),"."),Object(s.b)("h3",{id:"description"},"description"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "description": "This is a description.",\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"description: This is a description.\n")))),Object(s.b)("p",null,"This is the description that is shown in the app list. ",Object(s.b)("inlineCode",{parentName:"p"},"\\n")," is interpreted as a newline character"),Object(s.b)("h3",{id:"logo"},"logo"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "logo": "https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png",\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"logo: https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png\n")))),Object(s.b)("p",null,"This is the logo that is show in the app list."),Object(s.b)("h3",{id:"image"},"image*"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "image": "haugene/transmission-openvpn:latest",\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"image: haugene/transmission-openvpn:latest\n")))),Object(s.b)("p",null,"This is the image that's pulled from dockerhub. The tag (",Object(s.b)("inlineCode",{parentName:"p"},":latest"),") is optional."),Object(s.b)("h3",{id:"note"},"note"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "note": "List of supported providers available <a href=\'https://haugene.github.io/docker-transmission-openvpn/supported-providers\'/>here</a>.",\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"note: List of supported providers available <a href='https://haugene.github.io/docker-transmission-openvpn/supported-providers'/>here</a>.,\n")))),Object(s.b)("p",null,'This is shown when someone clicks on "VIEW" in the app list. It will render HTML appropriately.'),Object(s.b)("h3",{id:"categories"},"categories"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"},{label:"Single Line JSON",value:"sjson"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "categories": [\n    "Other", \n    "VPN", \n    "Tools"\n  ],\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"categories:\n- Other\n- VPN\n- Tools\n"))),Object(s.b)(c.a,{value:"sjson",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "categories": ["Other", "VPN", "Tools"],\n}\n')))),Object(s.b)("p",null,"A list of categories associated with the application. This is optional but sorting/filtering by category will eventually be a feature."),Object(s.b)("h3",{id:"platform"},"platform*"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "platform": "linux",\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"platform: linux,\n")))),Object(s.b)("p",null,"The platform the image will run on. Haven't tested anything but linux."),Object(s.b)("h3",{id:"restart_policy"},"restart_policy"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "restart_policy": "unless-stopped",\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"restart_policy: unless-stopped\n")))),Object(s.b)("p",null,"Define your restart policy. Info ",Object(s.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/#restart-policies---restart"},"here"),"."),Object(s.b)("h3",{id:"ports"},"ports"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"},{label:"Single Line JSON",value:"sjson"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "ports": [\n      "9091:9091/tcp",\n      "9090:9090/tcp",\n      "9092/tcp"\n    ],\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"ports:\n- 9091:9091/tcp\n- 9090:9090/tcp\n- 9092/tcp\n"))),Object(s.b)(c.a,{value:"sjson",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "ports": ["9091:9091/tcp", "9090:9090/tcp", "9092/tcp"]\n}\n')))),Object(s.b)("p",null,"Ports to be passed through. The host port is on the left of the ",Object(s.b)("inlineCode",{parentName:"p"},":")," and the container port is on the right. Protocol is after the ",Object(s.b)("inlineCode",{parentName:"p"},"/"),". If no host port is specified a random one is used. I frequently leave out the host port on applications that use common ports."),Object(s.b)("h4",{id:"port-labels"},"Port Labels"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"},{label:"Single Line JSON",value:"sjson"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "ports": [\n    {\n      "WebUI": "8096:8096/tcp",\n      "HTTPS WebUI": "8920:8920/tcp",\n      "DNLA": "1900:1900/udp",\n      "Discovery": "7359:7359/udp"\n    }\n  ],\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"ports:\n- WebUI: 8096:8096/tcp\n- HTTPS WebUI: 8920:8920/tcp\n- DNLA: 1900:1900/udp\n- Discovery: 7359:7359/udp\n"))),Object(s.b)(c.a,{value:"sjson",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "ports": [{ "WebUI": "8096:8096/tcp", "HTTPS WebUI": "8920:8920/tcp",  "DNLA": "1900:1900/udp", "Discovery": "7359:7359/udp"}]\n}\n')))),Object(s.b)("p",null,"You can label ports for the services that are on them if you would like. This will auto-fill the label field in the deploy form and give users a better understanding of the applications they're running."),Object(s.b)("h3",{id:"network_mode"},"network_mode"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "network_mode": "host"\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"network_mode: host\n")))),Object(s.b)("p",null,"You can set a certain network mode if you're using a legacy application that requires it. "),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"any ports mapped will not be passed through if you choose host as your networking mode and you cannot change the ports")),Object(s.b)("h3",{id:"volumes"},"volumes"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"},{label:"Single Line JSON",value:"sjson"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "volumes": [\n    {\n      "container": "/data",\n      "bind": "!downloads"\n    },\n    {\n      "container": "/etc/localtime",\n      "bind": "/etc/localtime"\n    },\n      "container": "/config",\n      "bind": "app_config"\n  ],\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},'volumes:\n- container: "/data"\n  bind: "!downloads"\n- container: "/etc/localtime"\n  bind: "/etc/localtime"\n- container: "/config"\n  bind: "app_config"\n'))),Object(s.b)(c.a,{value:"sjson",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "volumes": [{ "container": /data, "bind": "!downloads" }, { "container": "/etc/localtime", "bind": "/etc/localtime" }, { "container": "/config", "bind": "app_config"}]\n}\n')))),Object(s.b)("p",null,"List of bind mounts. Container will mount inside of the container and bind will mount on the host. The bind section can utilize Template Variables in the users settings so if they're set they'll be replaced by what's there. You can use a named volume by using the name of the volume instead of a path (no ",Object(s.b)("inlineCode",{parentName:"p"},"/")," at the beginning)."),Object(s.b)("h3",{id:"sysctls"},"sysctls"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"},{label:"Single Line JSON",value:"sjson"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "sysctls": [\n    {\n    "net.ipv6.conf.all.disable_ipv6": "0"\n    }\n  ],\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"sysctls:\n- net.ipv6.conf.all.disable_ipv6: '0'\n"))),Object(s.b)(c.a,{value:"sjson",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "sysctls": [ { "net.ipv6.conf.all.disable_ipv6": "0" } ]\n}\n')))),Object(s.b)("p",null,"Key value pair for sysctl options. More info available ",Object(s.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/run/#configure-namespaced-kernel-parameters-sysctls-at-runtime"},"here")),Object(s.b)("h3",{id:"cap_add"},"cap_add"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"},{label:"Single Line JSON",value:"sjson"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "cap_add": [\n    "NET_ADMIN"\n  ],\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"cap_add:\n- NET_ADMIN\n"))),Object(s.b)(c.a,{value:"sjson",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "cap_add": ["NET_ADMIN"]\n}\n')))),Object(s.b)("p",null,"Value of capabilities you want to add to a container. More info available ",Object(s.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities"},"here"),"."),Object(s.b)("h3",{id:"env"},"env"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"},{label:"Single Line JSON",value:"sjson"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "env": [\n    {\n      "name": "PUID",\n      "label": "PUID",\n      "default": "1000"\n    },\n    {\n      "name": "PGID",\n      "label": "PGID",\n      "default": "1000"\n    },\n    {\n      "name": "EnvWithDescription",\n      "label": "EnvWithDescription",\n      "description": "This is a description",\n      "default": "default"\n    },\n  ]\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"env:\n- name: PUID\n  label: PUID\n  default: 1000\n- name: PGID\n  label: PGID\n  default: 100\n- name: EnvWithDescription\n  label: EnvWithDescription\n  description: This is a description\n  default: defaullt\n"))),Object(s.b)(c.a,{value:"sjson",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "env": [{"name": "PUID","label": "PUID","default": "1000"},{"name": "PGID","label": "PGID","default": "1000"},{"name": "EnvWithDescription","label": "EnvWithDescription","description": "This is a description","default": "default"}]\n}\n')))),Object(s.b)("p",null,"Env is used to set environment variables within the docker container. The description and default are both optional. Label currently isn't used but will be what is shown as the name of the field in the deploy form."),Object(s.b)("h3",{id:"labels"},"labels"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"},{label:"Single Line JSON",value:"sjson"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n"labels": [\n  {\n    "label": "local.yacht.label",\n    "value": "this is a label"\n  },\n  {\n    "label": "local.yacht.otherlabel",\n    "value": "this is another label"\n  }\n]\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"labels:\n- label: local.yacht.label\n  value: this is a label\n- label: local.yacht.otherlabel\n  value: this is another label\n"))),Object(s.b)(c.a,{value:"sjson",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "labels": [{"label": "local.yacht.label","value": "this is a label"},{"label": "local.ycht.otherlabel","value": "this is another label"}]\n}\n')))),Object(s.b)("p",null,"Labels can be used for automating services like traefik automatically as well as store information about containers (this is where port descriptions are stored on containers). These will show up in the advanced section like sysctls and capabilities. "),Object(s.b)("h3",{id:"devices"},"devices"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"},{label:"Single Line JSON",value:"sjson"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "devices": [\n    {\n      "host": "/dev/null",\n      "container": "/dev/null"\n    }\n  ]\n}\n'))),Object(s.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"devices:\n- host: /dev/null\n  container: /dev/null\n"))),Object(s.b)(c.a,{value:"sjson",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "devices": [{"host": "/dev/null","container": "/dev/null"}]\n}\n')))),";",Object(s.b)("p",null,"Devices allow devices to be passed through containers for things like transcoding."))}u.isMDXComponent=!0}}]);