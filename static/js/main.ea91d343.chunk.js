(this["webpackJsonpscrip-calculator"]=this["webpackJsonpscrip-calculator"]||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t),n.d(t,"calculateAvgScripCost",(function(){return a})),n.d(t,"calculateYield",(function(){return c})),n.d(t,"calculateNewAvgCost",(function(){return r})),n.d(t,"validate",(function(){return i}));var a=function(e,t){return parseFloat((e/t).toFixed(2))},c=function(e,t){return parseFloat((e/t*100).toFixed(5))},r=function(e,t,n,a){return((e*t+n)/(parseInt(t)+a)).toFixed(3)},i=function(e){return" "!==e}},148:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),l=(n(139),n(5)),s=(n(140),n(2)),o=n(147),d=o.TextField,j=o.Grid,u=o.Button,b=o.Table,h=o.TableHead,O=o.TableRow,g=o.TableCell,p=o.TableBody,x=o.TableFooter,S=o.TablePagination,v=o.CircularProgress,f=o.Dialog,C=o.DialogTitle,P=o.DialogContent,m=o.DialogContentText,y=o.DialogActions,F=n(146),w=F.calculateAvgScripCost,D=F.calculateYield,A=F.calculateNewAvgCost,I=F.validate;var T=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(0),o=Object(l.a)(i,2),F=o[0],T=o[1],E=Object(a.useState)(0),B=Object(l.a)(E,2),k=B[0],Y=B[1],M=Object(a.useState)(0),R=Object(l.a)(M,2),V=R[0],N=R[1],U=Object(a.useState)(0),z=Object(l.a)(U,2),H=z[0],J=z[1],L=Object(a.useState)(.5),W=Object(l.a)(L,2),G=W[0],Q=W[1],q=Object(a.useState)(!0),K=Object(l.a)(q,2),X=K[0],Z=K[1],$=Object(a.useState)([]),_=Object(l.a)($,2),ee=_[0],te=_[1],ne=Object(a.useState)(!0),ae=Object(l.a)(ne,2),ce=ae[0],re=ae[1],ie=Object(a.useState)(0),le=Object(l.a)(ie,2),se=le[0],oe=le[1],de=Object(a.useState)(50),je=Object(l.a)(de,2),ue=je[0],be=je[1],he=Object(a.useState)(!1),Oe=Object(l.a)(he,2),ge=Oe[0],pe=Oe[1],xe=Object(a.useState)(!1),Se=Object(l.a)(xe,2),ve=Se[0],fe=Se[1],Ce=Object(a.useState)(!1),Pe=Object(l.a)(Ce,2),me=Pe[0],ye=Pe[1],Fe=c.a.useState(!1),we=Object(l.a)(Fe,2),De=we[0],Ae=we[1],Ie=c.a.useState(""),Te=Object(l.a)(Ie,2),Ee=Te[0],Be=Te[1],ke=function(){Ae(!0)},Ye=function(){Ae(!1)},Me=function(e){"flag1"===e?(fe(!0),ye(!1)):(fe(!1),ye(!0))},Re=function(e,t,n,a,c,r,i,l,s){return{scripShares:e,roundUp:t,sharesForScrip:n,scripCost:a,avgScripShareCost:c,netCash:r,scripCostYield:i,newAvgCostPerShare:l,newForwardYield:s}},Ve=function(e,t){re(!1);for(var a=[],c=(e+1)*t/2,r=e*t/2+G;r<=c;r+=G){console.log("Start");var i=Math.round(r),l=Math.round(r*V/H),s=parseFloat((l*H).toFixed(2)),o=parseFloat(((F-l)*H).toFixed(2)),d=w(s,i),j=D(n,d),u=A(k,F,s,i),b=D(n,u);a.push(Re(r,i,l,s,d,o,j,u,b))}te(a),re(!0),Z(.5===G)};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Scrip Calculator"}),Object(s.jsx)("div",{style:{padding:20},children:Object(s.jsxs)(j,{container:!0,spacing:1,children:[Object(s.jsxs)(j,{container:!0,style:{padding:5},children:[Object(s.jsx)(j,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(d,{label:"Expected Annual Dividend",defaultValue:" ",id:"expectedForwardDPS",variant:"outlined",onChange:function(e){r(e.target.value)}})}),Object(s.jsx)(j,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(d,{label:"Current Amount of Shares",defaultValue:" ",id:"sharesOutstanding",variant:"outlined",onChange:function(e){T(e.target.value)}})}),Object(s.jsx)(j,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(d,{label:"Current Average Cost Per Share",defaultValue:" ",id:"avgCostPerShare",variant:"outlined",onChange:function(e){Y(e.target.value)}})})]}),Object(s.jsxs)(j,{container:!0,style:{padding:5},children:[Object(s.jsx)(j,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(d,{label:"Scrip Issue Price",defaultValue:" ",id:"scripPrice",variant:"outlined",onChange:function(e){N(e.target.value)}})}),Object(s.jsx)(j,{container:!0,item:!0,xl:2,xs:4,children:Object(s.jsx)(d,{label:"Declared Dividend Per Share",defaultValue:" ",id:"DPS",variant:"outlined",onChange:function(e){J(e.target.value)}})})]}),Object(s.jsxs)(j,{container:!0,style:{padding:5},children:[Object(s.jsx)(j,{item:!0,style:{padding:5},children:"Round off to:"}),Object(s.jsx)(j,{item:!0,style:{padding:5},children:Object(s.jsx)(u,{variant:ve?"contained":"outlined",color:"primary",size:"small",onClick:function(){Me("flag1"),Q(.5)},children:"0.5"})}),Object(s.jsx)(j,{item:!0,style:{padding:5},children:Object(s.jsx)(u,{variant:me?"contained":"outlined",color:"primary",size:"small",onClick:function(){Me("flag2"),Q(1)},children:"1"})})]}),Object(s.jsx)(j,{container:!0,style:{padding:5},children:Object(s.jsx)(u,{variant:"contained",color:"primary",onClick:function(){!1===I(document.getElementById("expectedForwardDPS").value)?(ke(),Be("Please input the Expected Annual Dividend")):!1===I(document.getElementById("sharesOutstanding").value)?(ke(),Be("Please input the Current Amount of Shares")):!1===I(document.getElementById("avgCostPerShare").value)?(ke(),Be("Please input the Current Average Cost Per Share")):!1===I(document.getElementById("scripPrice").value)?(ke(),Be("Please input the Scrip Issue Price")):!1===I(document.getElementById("DPS").value)?(ke(),Be("Please input the Declared Dividend Per Share")):(console.log(n,F,V,H),Ve(se,ue),pe(!0),console.log(ee))},children:"Show Me My Scrips"})}),Object(s.jsxs)(f,{open:De,onClose:Ye,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(s.jsx)(C,{id:"alert-dialog-title",children:"Missing Input"}),Object(s.jsx)(P,{children:Object(s.jsx)(m,{id:"alert-dialog-description",children:Ee})}),Object(s.jsx)(y,{children:Object(s.jsx)(u,{onClick:Ye,color:"primary",autoFocus:!0,children:"Okay"})})]}),Object(s.jsx)(j,{container:!0,style:{padding:5},children:Object(s.jsx)(j,{container:!0,children:ce?Object(s.jsxs)(b,{stickyHeader:!0,"aria-label":"simple table",children:[Object(s.jsx)(h,{children:Object(s.jsxs)(O,{children:[Object(s.jsx)(g,{children:"Scrip Shares Entitlted"}),Object(s.jsx)(g,{align:"center",children:"Share Quantity to Elect"}),X?Object(s.jsx)(g,{align:"center",children:"Scrip Shares After Round Up/Down"}):"",Object(s.jsx)(g,{align:"center",children:"Average Cost per Scrip"}),Object(s.jsx)(g,{align:"center",children:"Yield on Scrip Share"}),Object(s.jsx)(g,{align:"center",children:"New Average Cost Yield per Share"}),Object(s.jsx)(g,{align:"center",children:"Cash to be Received"})]})}),Object(s.jsx)(p,{children:ee.map((function(e){return Object(s.jsxs)(O,{children:[Object(s.jsx)(g,{align:"center",children:e.scripShares}),Object(s.jsx)(g,{align:"center",children:e.sharesForScrip}),X?Object(s.jsx)(g,{align:"center",children:e.roundUp}):"",Object(s.jsx)(g,{align:"center",children:e.avgScripShareCost}),Object(s.jsx)(g,{align:"center",style:{fontWeight:"bold"},children:e.scripCostYield}),Object(s.jsx)(g,{align:"center",style:{fontWeight:"bold"},children:e.newForwardYield}),Object(s.jsx)(g,{align:"center",children:e.netCash})]},e.scripShares)}))}),Object(s.jsx)(x,{children:Object(s.jsx)(O,{children:ge?Object(s.jsx)(S,{rowsPerPageOptions:[50,250,500,1e3],count:1e5,rowsPerPage:ue,page:se,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){oe(t),Ve(t,ue)},onChangeRowsPerPage:function(e){be(parseInt(e.target.value)),oe(0),Ve(0,parseInt(e.target.value))}}):Object(s.jsx)(O,{})})})]}):Object(s.jsx)(v,{})})})]})})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root")),E()}},[[148,1,2]]]);
//# sourceMappingURL=main.ea91d343.chunk.js.map