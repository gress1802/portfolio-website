(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4456:function(e,t,n){Promise.resolve().then(n.bind(n,2974))},2974:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var i=n(7437),r=n(2265),o=n(2960),a=n(4587),s=n(1326),l=n(8646),c=n(511),d=n(9467),p=n(3098),h=n(3627),u=n(940),m=n(5527);function x(){let e=(0,l._)(["\n  0% { opacity: 1; }\n  50% { opacity: 0; }\n  100% { opacity: 1; }\n"]);return x=function(){return e},e}function g(){let e=(0,l._)(["\n  0% { transform: translateX(-100%); opacity: 0; }\n  50% { transform: translateX(0); opacity: 1; }\n  100% { transform: translateX(100%); opacity: 0; }\n"]);return g=function(){return e},e}function f(){let e=(0,l._)(["\n  0% { transform: translateX(100%); opacity: 0; }\n  50% { transform: translateX(0); opacity: 1; }\n  100% { transform: translateX(-100%); opacity: 0; }\n"]);return f=function(){return e},e}let y=(0,p.F4)(x()),b=(0,p.F4)(g()),v=(0,p.F4)(f()),j=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,Z=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})},w=(e,t)=>{let n=[],i=[];for(let r=0;r<e;r++){let e,o;let a=0;do e=t<1250?r%2==0?j(5,30):j(70,95):j(5,95),o=j(-5,25),a++;while(i.some(t=>2>Math.abs(t.top-e))&&a<100);if(a<100){let t=r%2==0?"primary":"secondary";i.push({top:e,left:o}),n.push({top:e,left:o,color:t})}}return n};var C=e=>{let{setTypingComplete:t}=e,n=(0,o.Z)(),[a,l]=(0,r.useState)(""),[p,x]=(0,r.useState)(""),[g,f]=(0,r.useState)(""),[j,C]=(0,r.useState)([!1,!1,!1]),[A,k]=(0,r.useState)(!1),I="Hi, my name is",S="Joseph Gress.",z="Software Engineering / Data Science",[E,P]=(0,r.useState)(window.innerWidth),M=w(20,E),D=w(20,E);return(0,r.useEffect)(()=>{let e=()=>{P(window.innerWidth)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{let e=0,n=setInterval(()=>{l(i=>{if(e<I.length){let t=i+I[e];return e++,t}{clearInterval(n);let e=0,r=setInterval(()=>{x(n=>{if(!(e<S.length))return clearInterval(r),setTimeout(()=>C([!0,!1,!1]),100),setTimeout(()=>C([!0,!0,!1]),250),setTimeout(()=>C([!0,!0,!0]),400),setTimeout(()=>{let e=0,n=setInterval(()=>{f(i=>{if(!(e<z.length))return clearInterval(n),t(!0),k(!0),i;{let t=i+z[e];return e++,t}})},50)},400),n;{let t=n+S[e];return e++,t}})},100);return i}})},150);return()=>clearInterval(n)},[]),(0,i.jsxs)(s.Z,{sx:{position:"relative",textAlign:"center",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",py:8},children:[A&&M.map((e,t)=>(0,i.jsx)(s.Z,{sx:{position:"absolute",left:"".concat(e.left,"%"),top:"".concat(e.top,"%"),height:"4px",width:"100px",backgroundColor:"primary"===e.color?n.palette.primary.main:n.palette.text.secondary,transform:"translateX(-100%)",opacity:0,animation:"".concat(b," 3s ease-in-out infinite"),animationDelay:"".concat(.3*t,"s")}},"left-".concat(t))),(0,i.jsxs)(c.Z,{variant:"h4",component:"h2",sx:{position:"relative",display:"inline"},children:[a,!p&&(0,i.jsx)(s.Z,{sx:{display:"inline-block",verticalAlign:"text-bottom",height:"1.25em",width:"2px",backgroundColor:n.palette.text.primary,animation:"".concat(y," 1s infinite"),marginLeft:"-2px"}})]}),(0,i.jsxs)(c.Z,{variant:"h2",component:"h1",sx:{mb:2,color:n.palette.primary.main},children:[p,!g&&p&&(0,i.jsx)(s.Z,{sx:{display:"inline-block",verticalAlign:"text-bottom",height:"1.25em",width:"2px",backgroundColor:n.palette.text.primary,animation:"".concat(y," 1s infinite"),marginLeft:"-2px"}})]}),j[0]&&(0,i.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"center",mb:4},children:[(0,i.jsx)(d.Z,{title:"Projects",children:(0,i.jsx)(s.Z,{sx:{mx:2},onClick:()=>Z("projects-section"),children:(0,i.jsx)(m.Z,{fontSize:"large",style:{cursor:"pointer"}})})}),j[1]&&(0,i.jsx)(d.Z,{title:"Contact Me",children:(0,i.jsx)(s.Z,{sx:{mx:2},onClick:()=>Z("contact-section"),children:(0,i.jsx)(u.Z,{fontSize:"large",style:{cursor:"pointer"}})})}),j[2]&&(0,i.jsx)(d.Z,{title:"Work Experience",children:(0,i.jsx)(s.Z,{sx:{mx:2},onClick:()=>Z("work-experience-section"),children:(0,i.jsx)(h.Z,{fontSize:"large",style:{cursor:"pointer"}})})})]}),(0,i.jsxs)(c.Z,{variant:"body1",sx:{mb:4,color:n.palette.text.secondary},children:[g,g&&(0,i.jsx)(s.Z,{sx:{display:"inline-block",verticalAlign:"text-bottom",height:"1.25em",width:"2px",backgroundColor:n.palette.text.primary,animation:"".concat(y," 1s infinite"),marginLeft:"-2px"}})]}),A&&D.map((e,t)=>(0,i.jsx)(s.Z,{sx:{position:"absolute",right:"".concat(e.left,"%"),top:"".concat(e.top,"%"),height:"4px",width:"100px",backgroundColor:"primary"===e.color?n.palette.primary.main:n.palette.text.secondary,transform:"translateX(100%)",opacity:0,animation:"".concat(v," 3s ease-in-out infinite"),animationDelay:"".concat(.3*t,"s")}},"right-".concat(t)))]})},A=()=>{let[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?t(!0):t(!1)})},{threshold:.1});return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}},[]),(0,i.jsxs)(s.Z,{ref:n,sx:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",py:8,px:2,"&::before, &::after":{content:'""',position:"absolute",border:"3px solid",borderColor:e?"primary.main":"transparent",transition:"border-color 1s",width:"60px",height:"60px",boxSizing:"border-box"},"&::before":{top:"20px",left:"20px",borderBottom:"none",borderRight:"none"},"&::after":{bottom:"20px",right:"20px",borderTop:"none",borderLeft:"none"}},children:[(0,i.jsx)(c.Z,{variant:"h4",component:"h2",sx:{mb:2},children:"About Me"}),(0,i.jsx)(s.Z,{sx:{height:"4px",width:"50px",backgroundColor:"primary.main",margin:"0 auto",mb:4}}),(0,i.jsx)(c.Z,{variant:"body1",sx:{maxWidth:"600px"},children:"I am currently pursuing a technical career with a passion for technology that drives me to build projects and constantly learn more. My extroverted personality thrives in collaborative environments, both in my studies and sports."}),(0,i.jsx)(c.Z,{variant:"body1",sx:{mt:2,maxWidth:"600px"},children:"I have hands-on experience with cloud computing, AI, and web development, using tools like Azure, PyTorch, and various web technologies. I have developed and deployed applications that showcase my adaptability and innovation."}),(0,i.jsx)(c.Z,{variant:"body1",sx:{mt:2,maxWidth:"600px"},children:"I am passionate about leveraging my technical expertise to solve real-world problems and create impactful solutions. Whether developing AI-driven tools or building user-friendly web applications, I am committed to learning and growing with new technologies."})]})},k=n(8433),I=n(270),S=n(4696),z=n(2030),E=e=>{let{title:t,technologies:n,date:o,description:a,isLeftAligned:l}=e,[d,p]=(0,r.useState)(!1),h=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?p(!0):p(!1)})},{threshold:0,rootMargin:"0px"});return h.current&&e.observe(h.current),()=>{h.current&&e.unobserve(h.current)}},[]),(0,i.jsx)(s.Z,{ref:h,sx:{opacity:d?1:0,transform:d?"translateX(0)":"translateX(".concat(l?"-100%":"100%",")"),transition:"transform 1s ease-out, opacity 1s ease-out",willChange:"transform, opacity",width:"100%",maxWidth:{xs:"100%",sm:400},visibility:d?"visible":"hidden",display:"flex",justifyContent:"center",margin:"auto","&:hover":{transform:"scale(1.05)",boxShadow:"0 10px 20px rgba(0, 0, 0, 0.2)"}},children:(0,i.jsx)(I.Z,{sx:{width:"100%"},children:(0,i.jsxs)(S.Z,{children:[(0,i.jsx)(c.Z,{variant:"h5",component:"div",sx:{mb:2},children:t}),(0,i.jsxs)(c.Z,{variant:"subtitle2",component:"div",color:"text.secondary",sx:{fontSize:"0.875rem",fontWeight:"bold",color:"primary.main",transition:"color 0.3s ease, transform 0.3s ease","&:hover":{color:"secondary.main",transform:"scale(1.1)"}},children:[n," | ",o]}),(0,i.jsx)(z.Z,{sx:{my:2}})," ",a.map((e,t)=>(0,i.jsx)(c.Z,{variant:"body2",children:e},t))]})})})},P=e=>{let{projects:t}=e;return(0,i.jsxs)(s.Z,{sx:{py:8,textAlign:"center"},children:[(0,i.jsx)(c.Z,{variant:"h4",component:"h2",sx:{mb:1},children:"Projects"}),(0,i.jsx)(s.Z,{sx:{height:"4px",width:"50px",backgroundColor:"primary.main",margin:"0 auto",mb:4}}),(0,i.jsx)(k.ZP,{container:!0,spacing:4,children:t.map((e,t)=>(0,i.jsx)(k.ZP,{item:!0,xs:12,sm:6,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(E,{title:e.title,technologies:e.technologies,date:e.date,description:e.description,isLeftAligned:t%2==0})},t))})]})},M=n(1665),D=()=>{let[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(null),a=(0,o.Z)();return(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?t(!0):t(!1)})},{threshold:.1});return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}},[]),(0,i.jsxs)(s.Z,{ref:n,sx:{position:"relative",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:a.palette.background.default,color:a.palette.text.primary,py:8,px:2,"&::before, &::after":{content:'""',position:"absolute",border:"3px solid",borderColor:e?"primary.main":"transparent",transition:"border-color 1s",width:"60px",height:"60px",boxSizing:"border-box"},"&::before":{top:"20px",left:"20px",borderBottom:"none",borderRight:"none"},"&::after":{bottom:"20px",right:"20px",borderTop:"none",borderLeft:"none"}},children:[(0,i.jsx)(c.Z,{variant:"h4",component:"h2",sx:{mb:1},children:"Contact"}),(0,i.jsx)(s.Z,{sx:{height:"4px",width:"50px",backgroundColor:a.palette.primary.main,margin:"0 auto",mb:4}}),(0,i.jsx)(c.Z,{variant:"body1",sx:{mb:2},children:"Feel free to reach out to me on any of these platforms."}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(M.Z,{href:"https://github.com/josephgress",sx:{mx:2,color:a.palette.primary.main},target:"_blank",rel:"noopener",children:"GitHub"}),(0,i.jsx)(M.Z,{href:"https://linkedin.com/in/josephgress",sx:{mx:2,color:a.palette.primary.main},target:"_blank",rel:"noopener",children:"LinkedIn"}),(0,i.jsx)(M.Z,{href:"mailto:josephgress@example.com",sx:{mx:2,color:a.palette.primary.main},children:"Email"})]})]})},W=n(7798),L=n(824),T=n(385),B=n(3269),F=n(8784),R=n(9959),O=n(2804),J=n(3100),_=n(2645),X=n(2914),N=n(6428),H=n(9295),G=n(4711),q=n(2397);let K=[{title:"Solution Architect Intern",company:"Johnson Controls",location:["La Crosse, WI","Milwaukee, WI"],date:"Sept. 2021 – May 2025",responsibilities:["Played a key role in the development of a sales copilot (RAG), primarily utilizing Azure OpenAI (GPT-4), Azure AI Search, Azure ML Prompt Flow, Azure Blob Storage, and Azure Document Intelligence to save approximately 15% of our sales rep’s time spent searching documents.","Wrote Terraform IaC scripts to provision Azure cloud infrastructure and built Github Actions CI/CD pipelines for multiple applications, bringing them into compliance with enterprise standards.","Presented our sales copilot to the CIO, CTO, and CEO of Johnson Controls, earning recognition and securing a funding allocation of $250,000 to advance from POC to Pilot."]},{title:"Data Analytics Intern",company:"Johnson Controls",location:"Milwaukee, WI",date:"May 2023 – April 2024",responsibilities:["Developed a React Azure DevOps extension with a .NET 6 backend, utilizing an Azure App Service, Azure Functions, Azure SQL, Azure Data Factory, and deployed with an Azure DevOps pipeline.","Utilized spaCy, pandas, and gensim in analyzing over 10,000 user comments, helping to identify key areas of improvement and aid allocation of 1/2 of total commercial funding for FY24.","Built an LLM-driven summarization tool using GPT-3.5 Turbo and spaCy to summarize and categorize user comments, displaying the results in a Power BI dashboard."]},{title:"Deli Clerk",company:"Kroger",location:"Wisconsin, United States",date:"Mar 2021 – Apr 2024",responsibilities:["Worked as a deli clerk, slicing meats and serving customers with a friendly demeanor.","Maintained a clean and organized work environment while ensuring food safety standards were met.","Provided product recommendations to customers, contributing to an enhanced shopping experience."]}];function U(e){let{open:t,handleClose:n,job:r}=e;return r?(0,i.jsxs)(W.Z,{open:t,onClose:n,children:[(0,i.jsx)(L.Z,{children:r.title}),(0,i.jsx)(T.Z,{children:(0,i.jsxs)(B.Z,{children:[(0,i.jsx)(c.Z,{variant:"subtitle1",children:r.company}),(0,i.jsx)(c.Z,{variant:"subtitle2",children:Array.isArray(r.location)?r.location.join(" & "):r.location}),(0,i.jsx)(c.Z,{variant:"body2",color:"text.secondary",mb:2,children:r.date}),(0,i.jsx)("ul",{children:r.responsibilities.map((e,t)=>(0,i.jsx)("li",{children:(0,i.jsx)(c.Z,{variant:"body2",children:e})},t))})]})}),(0,i.jsx)(F.Z,{children:(0,i.jsx)(R.Z,{onClick:n,color:"primary",children:"Close"})})]}):null}function V(){let[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(null),[l,d]=(0,r.useState)(Array(K.length).fill(!1)),p=(0,o.Z)(),h=(0,O.Z)(p.breakpoints.down("sm"));(0,r.useEffect)(()=>{let e=()=>{document.querySelectorAll(".timeline-item").forEach((e,t)=>{let n=e.getBoundingClientRect(),i=n.top>=0&&n.bottom<=window.innerHeight;d(e=>{let n=[...e];return n[t]=i,n})})};return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}},[]);let u=e=>{a(e),t(!0)};return(0,i.jsxs)(s.Z,{sx:{py:8,textAlign:"center"},children:[(0,i.jsx)(c.Z,{variant:"h4",component:"h2",sx:{mb:1},children:"Work Experience"}),(0,i.jsx)(s.Z,{sx:{height:"4px",width:"50px",backgroundColor:"primary.main",margin:"0 auto",mb:4}}),(0,i.jsx)(_.Z,{position:"alternate",sx:{padding:0},children:K.map((e,t)=>(0,i.jsxs)(X.Z,{position:h?t%2==0?"right":"left":t%2==0?"left":"right",className:"timeline-item",children:[(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(H.Z,{color:"primary"}),t<K.length-1&&(0,i.jsx)(G.Z,{})]}),(0,i.jsx)(q.Z,{children:(0,i.jsx)(J.Z,{direction:h?t%2==0?"left":"right":t%2==0?"right":"left",in:l[t],timeout:600,children:(0,i.jsxs)(s.Z,{onClick:h?()=>u(e):void 0,sx:{backgroundColor:"background.paper",borderRadius:2,p:3,boxShadow:3,mb:2,textAlign:"left",maxWidth:"100%",cursor:h?"pointer":"default",fontSize:h?"0.875rem":"inherit"},children:[(0,i.jsx)(c.Z,{variant:h?"body1":"h6",sx:{fontWeight:"bold"},children:e.title}),(0,i.jsx)(z.Z,{sx:{my:1}}),(0,i.jsx)(c.Z,{variant:h?"body2":"subtitle1",children:e.company}),(0,i.jsx)(c.Z,{variant:"body2",color:"text.secondary",sx:{fontStyle:"italic"},children:e.date}),!h&&(0,i.jsx)("ul",{children:e.responsibilities.map((e,t)=>(0,i.jsx)("li",{children:(0,i.jsx)(c.Z,{variant:"body2",children:e})},t))})]})})})]},t))}),n&&(0,i.jsx)(U,{open:e,handleClose:()=>{t(!1),a(null)},job:n})]})}function Q(){let e=(0,o.Z)(),[t,n]=(0,r.useState)(!1);return(0,i.jsxs)(a.Z,{maxWidth:!1,sx:{backgroundColor:e.palette.background.default,minHeight:"100vh",color:e.palette.text.primary,py:4,width:"100%",padding:0},children:[(0,i.jsx)(C,{setTypingComplete:n}),(0,i.jsx)(s.Z,{id:"introduction-section",sx:{py:8,textAlign:"center"},children:(0,i.jsx)(A,{})}),(0,i.jsx)(s.Z,{id:"projects-section",sx:{py:8,textAlign:"center"},children:(0,i.jsx)(P,{projects:[{title:"Kaggle Cancer Detection",technologies:"Pytorch, Pytorch Lightning",date:"May 2024",description:["Leveraged transfer learning by training a ResNet-18 model on a Kaggle dataset for the classification of cancerous cells, achieving a high classification accuracy of 92%","Developed a lightweight, custom version of ResNet tailored for binary classification tasks, utilizing convolutional and residual blocks with maximum pooling and adaptive pooling strategies for an 86% accuracy","Experimented with data augmentation and hyperparameter tuning, including adjustments to learning rates and optimizer configurations, to enhance model performance and accuracy"]},{title:"BERT Fine-Tuning (Summarization)",technologies:"Hugging Face Transformers, Python, Pytorch, Pytorch Lightning",date:"March 2024",description:["Fine-tuned a pre-trained BERT model on a dataset of 50,000 movie reviews to summarize the reviews into a concise, coherent format","Implemented a custom data processing pipeline to preprocess and tokenize the reviews, and fine-tuned the model using a sequence-to-sequence architecture with attention mechanisms"]},{title:"Job Search Engine",technologies:"Angular, NodeJS, ExpressJS, MongoDB, AWS",date:"July 2023",description:["Built a user-friendly, MEAN Stack web application integrating the USA Jobs API and supporting profile management, user administration, and advanced search capabilities","Visualized data from the CareerOneStop API using Angular Charts to provide useful insights on salaries, projected employment growth, and top industries hiring for specific occupations"]},{title:"Connect Four",technologies:"Angular, Java, Spring Boot, MongoDB",date:"January 2023",description:["Developed a full-stack web application for playing Connect Four, featuring real-time gameplay, user authentication, and a leaderboard system","Implemented a RESTful API using Spring Boot to manage game sessions, player moves, and user accounts, and utilized MongoDB for data storage and retrieval","Followed modern authentication practices, including salting and hashing passwords before storing them in the database"]}]})}),(0,i.jsx)(s.Z,{id:"work-experience-section",sx:{py:8,textAlign:"center"},children:(0,i.jsx)(V,{})}),(0,i.jsx)(s.Z,{id:"contact-section",sx:{py:8,textAlign:"center"},children:(0,i.jsx)(D,{})})]})}}},function(e){e.O(0,[384,598,971,23,744],function(){return e(e.s=4456)}),_N_E=e.O()}]);