import{i as B,B as fe,a as ge,p as _,r,b as g,t as i,c as v,I as re,d as pe,e as Ce,f as xe,g as we,h as be,j as ve,k as q,q as Ye,l as t,Z as ce,s as Y,m as Q,n as k,u as X,Q as N,F as D,o as F,D as Ie,v as j,T as te,w as ie,x as $e,y as Me,z,A as U,S as A,C as Le,E as Re,G as De,H as je,J as ke,K as Oe,L as Ve,M as Se,N as Ne,O as Fe,R as Te}from"./vendor-BPQY7uMg.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Ge="Type & Data",Pe="Data Source",Ee="Data Range",Ae="Date Filtering",_e="Date",He="Create Date",We="Modify Date",Ze="Basis",Be="Range",Qe="Today",ze="Yesterday",Ue="Current Week",Je="Last Week",Ke="Current Month",qe="Last Month",Xe="Current Quarter",et="Last Quarter",tt="Current Year",at="Last Year",ot="Last 7 Days",nt="Last 14 Days",st="Last 30 Days",lt="Last 365 Days",rt="Last 3 Months",ct="Last 6 Months",it="Statistical Methods",dt="Total Records Count",ut="Field Value Count",mt="Number",yt="Currency",ht="Sum",ft="Average",gt="Max",pt="Min",Ct="MoM & YoY",xt="Add MoM & YoY",wt="Description",bt="Calculation Method",vt="MoM",Yt="Week YoY",It="Month YoY",$t="Year YoY",Mt="Calculation Type",Lt="MoM Growth Rate",Rt="MoM Growth Value",Dt="MoM Original Value",jt="Week YoY Growth Value",kt="Month YoY Growth Value",Ot="Year YoY Growth Value",Vt="Week YoY Original Value",St="Month YoY Original Value",Nt="Year YoY Original Value",Ft="Week YoY Growth Rate",Tt="Month YoY Growth Rate",Gt="Year YoY Growth Rate",Pt="Growth Value",Et="Growth Rate",At="Difference Rate",_t="Difference Value",Ht="Original Value",Wt="Custom Style",Zt="Color",Bt="Icon Style",Qt="Index Data Format",zt="Decimal Places & Format",Ut="Number (Thousands Separator)",Jt="Percentage",Kt="Per Mille",qt="Prefix",Xt="Suffix",ea="Please enter a prefix",ta="Please enter a suffix",aa="Please select a date field",oa="Only positive integers are allowed",na="All Data",sa="Confirm",la={type_Date:Ge,dataSource:Pe,dataRange:Ee,dateFiltering:Ae,date:_e,createDate:He,ModifyDate:We,basis:Ze,range:Be,today:Qe,yesterday:ze,currentWeek:Ue,lastWeek:Je,currentMonth:Ke,lastMonth:qe,currentQuarter:Xe,lastQuarter:et,currentYear:tt,lastYear:at,last7Days:ot,last14Days:nt,last30Days:st,last365Days:lt,last3Months:rt,last6Months:ct,statisticalMethods:it,recordsTotal:dt,fieldValue:ut,number:mt,currency:yt,sum:ht,average:ft,max:gt,min:pt,mom_yoy:Ct,addMom_Yoy:xt,description:wt,calculation:bt,mom:vt,weekYoy:Yt,monthYoy:It,yearYoy:$t,calculationType:Mt,momGrowthRate:Lt,momGrowthValue:Rt,momOriginalValue:Dt,weekYoyGrowthValue:jt,monthYoyGrowthValue:kt,yearYoyGrowthValue:Ot,weekYoyOriginalValue:Vt,monthYoyOriginalValue:St,yearYoyOriginalValue:Nt,weekYoyGrowthRate:Ft,monthYoyGrowthRate:Tt,yearYoyGrowthRate:Gt,growthValue:Pt,growthRate:Et,differenceRate:At,differenceValue:_t,originalValue:Ht,customStyle:Wt,color:Zt,iconStyle:Bt,indexDataFormat:Qt,decimalPlaces_Format:zt,numberMillennials:Ut,percentage:Jt,millageRate:Kt,prefix:qt,suffix:Xt,prefixPlaceholder:ea,suffixPlaceholder:ta,dataPlaceholder:aa,formatErrorMessage:oa,allData:na,confirm:sa},ra="类型与数据",ca="数据源",ia="数据范围",da="日期筛选",ua="日期",ma="创建日期",ya="修改日期",ha="依据",fa="范围",ga="今天",pa="昨天",Ca="本周",xa="上周",wa="本月",ba="上月",va="本季度",Ya="上季度",Ia="今年",$a="去年",Ma="最近7天",La="最近14天",Ra="最近30天",Da="最近365天",ja="最近3个月",ka="最近6个月",Oa="查看全部",Va="主要指标",Sa="辅助指标",Na="添加指标",Fa="字段",Ta="统计方式",Ga="统计记录总数",Pa="统计字段数值",Ea="数字",Aa="货币",_a="求和",Ha="平均值",Wa="最大值",Za="最小值",Ba="环同比",Qa="添加环同比",za="描述",Ua="计算方式",Ja="环比",Ka="周同比",qa="月同比",Xa="年同比",eo="计算类型",to="环比增长率",ao="环比增长值",oo="环比原始值",no="周同比增长值",so="月同比增长值",lo="年同比增长值",ro="周同比原始值",co="月同比原始值",io="年同比原始值",uo="周同比增长率",mo="月同比增长率",yo="年同比增长率",ho="增长值",fo="增长率",go="差异率",po="差异值",Co="原始值",xo="自定义样式",wo="颜色",bo="图标样式",vo="指标数据格式",Yo="小数位与格式",Io="数字（千分位）",$o="百分比",Mo="千分比",Lo="前缀",Ro="后缀",Do="请输入前缀",jo="请输入后缀",ko="请选择日期字段",Oo="仅允许输入大于零的整数",Vo="全部数据",So="确定",No={type_Date:ra,dataSource:ca,dataRange:ia,dateFiltering:da,date:ua,createDate:ma,ModifyDate:ya,basis:ha,range:fa,today:ga,yesterday:pa,currentWeek:Ca,lastWeek:xa,currentMonth:wa,lastMonth:ba,currentQuarter:va,lastQuarter:Ya,currentYear:Ia,lastYear:$a,last7Days:Ma,last14Days:La,last30Days:Ra,last365Days:Da,last3Months:ja,last6Months:ka,view_all:Oa,key_indicators:Va,auxiliary_index:Sa,add_index:Na,field:Fa,statisticalMethods:Ta,recordsTotal:Ga,fieldValue:Pa,number:Ea,currency:Aa,sum:_a,average:Ha,max:Wa,min:Za,mom_yoy:Ba,addMom_Yoy:Qa,description:za,calculation:Ua,mom:Ja,weekYoy:Ka,monthYoy:qa,yearYoy:Xa,calculationType:eo,momGrowthRate:to,momGrowthValue:ao,momOriginalValue:oo,weekYoyGrowthValue:no,monthYoyGrowthValue:so,yearYoyGrowthValue:lo,weekYoyOriginalValue:ro,monthYoyOriginalValue:co,yearYoyOriginalValue:io,weekYoyGrowthRate:uo,monthYoyGrowthRate:mo,yearYoyGrowthRate:yo,growthValue:ho,growthRate:fo,differenceRate:go,differenceValue:po,originalValue:Co,customStyle:xo,color:wo,iconStyle:bo,indexDataFormat:vo,decimalPlaces_Format:Yo,numberMillennials:Io,percentage:$o,millageRate:Mo,prefix:Lo,suffix:Ro,prefixPlaceholder:Do,suffixPlaceholder:jo,dataPlaceholder:ko,formatErrorMessage:Oo,allData:Vo,confirm:So},Fo="タイプとデータ",To="データソース",Go="データ範囲",Po="日付フィルタリング",Eo="日付",Ao="作成日",_o="更新日",Ho="根拠",Wo="範囲",Zo="今日",Bo="昨日",Qo="今週",zo="先週",Uo="今月",Jo="先月",Ko="今四半期",qo="前四半期",Xo="今年",en="去年",tn="過去7日間",an="過去14日間",on="過去30日間",nn="過去365日間",sn="過去3ヶ月",ln="過去6ヶ月",rn="統計手法",cn="総レコード数",dn="フィールド数値の集計",un="数字",mn="通貨",yn="合計",hn="平均値",fn="最大値",gn="最小値",pn="環境比と同期比",Cn="追加環境比と同期比",xn="説明",wn="計算方法",bn="環境比",vn="週同期比",Yn="月同期比",In="年同期比",$n="計算タイプ",Mn="環境比成長率",Ln="環境比成長値",Rn="環境比原始値",Dn="週同期比成長値",jn="月同期比成長値",kn="年同期比成長値",On="週同期比原始値",Vn="月同期比原始値",Sn="年同期比原始値",Nn="週同期比成長率",Fn="月同期比成長率",Tn="年同期比成長率",Gn="成長値",Pn="成長率",En="差異率",An="差異値",_n="原始値",Hn="カスタムスタイル",Wn="色",Zn="アイコンスタイル",Bn="指標データフォーマット",Qn="小数点以下の桁数とフォーマット",zn="数字（千分位）",Un="パーセンテージ",Jn="パーミレ（千分率）",Kn="接頭辞",qn="接尾辞",Xn="接頭辞を入力してください",es="接尾辞を入力してください",ts="日付フィールドを選択してください",as="正の整数のみが許可されます",os="全てのデータ",ns="確定",ss={type_Date:Fo,dataSource:To,dataRange:Go,dateFiltering:Po,date:Eo,createDate:Ao,ModifyDate:_o,basis:Ho,range:Wo,today:Zo,yesterday:Bo,currentWeek:Qo,lastWeek:zo,currentMonth:Uo,lastMonth:Jo,currentQuarter:Ko,lastQuarter:qo,currentYear:Xo,lastYear:en,last7Days:tn,last14Days:an,last30Days:on,last365Days:nn,last3Months:sn,last6Months:ln,statisticalMethods:rn,recordsTotal:cn,fieldValue:dn,number:un,currency:mn,sum:yn,average:hn,max:fn,min:gn,mom_yoy:pn,addMom_Yoy:Cn,description:xn,calculation:wn,mom:bn,weekYoy:vn,monthYoy:Yn,yearYoy:In,calculationType:$n,momGrowthRate:Mn,momGrowthValue:Ln,momOriginalValue:Rn,weekYoyGrowthValue:Dn,monthYoyGrowthValue:jn,yearYoyGrowthValue:kn,weekYoyOriginalValue:On,monthYoyOriginalValue:Vn,yearYoyOriginalValue:Sn,weekYoyGrowthRate:Nn,monthYoyGrowthRate:Fn,yearYoyGrowthRate:Tn,growthValue:Gn,growthRate:Pn,differenceRate:En,differenceValue:An,originalValue:_n,customStyle:Hn,color:Wn,iconStyle:Zn,indexDataFormat:Bn,decimalPlaces_Format:Qn,numberMillennials:zn,percentage:Un,millageRate:Jn,prefix:Kn,suffix:qn,prefixPlaceholder:Xn,suffixPlaceholder:es,dataPlaceholder:ts,formatErrorMessage:as,allData:os,confirm:ns},ls={zh:{translation:No},en:{translation:la},ja:{translation:ss}};B.use(fe).use(ge).init({resources:ls,fallbackLng:"en",interpolation:{escapeValue:!1}});_.bridge.getLanguage().then(e=>{B.language!==e&&B.changeLanguage(e)});function ae(e){document.body.setAttribute("theme-mode",e)}function rs(){r.useLayoutEffect(()=>{_.bridge.getTheme().then(e=>{ae(e.toLocaleLowerCase())}),_.bridge.onThemeChange(e=>{ae(e.data.theme.toLocaleLowerCase())})},[])}const cs=(e,l)=>{e&&(l(e),setTimeout(()=>{g.setRendered().then()},3e3))};async function is(e){r.useEffect(()=>{const l=g.onConfigChange(n=>{const s=n.data.customConfig;cs(s,e)});return()=>{l()}},[])}var w=(e=>(e.CurrentQuarter="CurrentQuarter",e.LastQuarter="LastQuarter",e.CurrentYear="CurrentYear",e.LastYear="LastYear",e.Last14Days="Last14Days",e.Last365Days="Last365Days",e.Last3Months="Last3Months",e.Last6Months="Last6Months",e))(w||{});i("today"),v.Today,i("yesterday"),v.Yesterday,i("currentWeek"),v.CurrentWeek,i("lastWeek"),v.LastWeek,i("currentMonth"),v.CurrentMonth,i("lastMonth"),v.LastMonth,i("currentQuarter"),w.CurrentQuarter,i("lastQuarter"),w.LastQuarter,i("currentYear"),w.CurrentYear,i("lastYear"),w.LastYear,i("last7Days"),v.TheLastWeek,i("last14Days"),w.Last14Days,i("last30Days"),v.TheLastMonth,i("last365Days"),w.Last365Days,i("last3Months"),w.Last3Months,i("last6Months"),w.Last6Months;i("recordsTotal"),i("fieldValue");i("sum"),i("average"),i("max"),i("min");i("mom"),i("weekYoy"),i("monthYoy"),i("yearYoy");const ds=[{label:i("differenceRate"),value:"differenceRate"},{label:i("differenceValue"),value:"differenceValue"},{label:i("originalValue"),value:"originalValue"}],de=[{id:"1",upIcon:"IconTriangleUp",upIconColor:"green",downIcon:"IconTriangleDown",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"2",upIcon:"IconFilledArrowUp",upIconColor:"green",downIcon:"IconFilledArrowDown",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"3",upIcon:"IconArrowUpRight",upIconColor:"green",downIcon:"IconArrowDownRight",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"4",upIcon:"IconTriangleUp",upIconColor:"red",downIcon:"IconTriangleDown",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"},{id:"5",upIcon:"IconFilledArrowUp",upIconColor:"red",downIcon:"IconFilledArrowDown",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"},{id:"6",upIcon:"IconArrowUpRight",upIconColor:"red",downIcon:"IconArrowDownRight",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"}],us={IconMinus:re,IconTriangleUp:pe,IconTriangleDown:Ce,IconFilledArrowUp:xe,IconFilledArrowDown:we,IconArrowUpRight:be,IconArrowDownRight:ve},ms=[{label:i("numberMillennials"),value:"numberMillennials"},{label:i("number"),value:"number"},{label:i("percentage"),value:"percentage"},{label:i("millageRate"),value:"millageRate"}],ys={tableId:"",keyIndicatorsFieldId:"",keyIndicatorsRollup:"SUM",datasourceRange:"",momOrYoy:[{momOrYoyDesc:i("momGrowthRate"),manualSetDesc:!1,momOrYoyCalcMethod:"mom",momOrYoyCalcType:"differenceRate",momOrYoyFieldId:"",indicatorsRollup:"SUM"}],color:"primary",iconStyleId:"1",decimal:0,numberFormat:"number",prefix:"",suffix:""};q.extend(Ye);const hs=e=>e.replace(/\B(?=(\d{3})+$)/g,","),J=(e,l,n="0.8vmax")=>{const s=us[e];return l?t.jsx(s,{style:{fontSize:l,marginRight:n}}):t.jsx(s,{size:"small",style:{marginRight:n}})},fs=(e,l,n)=>{let s="";if(l==="numberMillennials"){const o=e.toFixed(n).split("."),a=hs(o[0]);s=o.length>1?`${a}.${o[1]}`:a}else l==="number"?s=e.toFixed(n):l==="percentage"?s=(e*100).toFixed(n)+"%":s=(e*1e3).toFixed(n)+"‰";return s},gs=(e,l,n,s)=>{const o={},a=de.find(d=>d.id===e);return s===0&&l==="differenceRate"||n===s?(o.icon=a.constIcon,o.color=a.constIconColor):n<s?(o.icon=a.downIcon,o.color=a.downIconColor):(o.icon=a.upIcon,o.color=a.upIconColor),o},ps=(e,l,n,s)=>{let o="";if(e==="differenceRate"){const a=Math.abs((l-n)/n)*100;o=n!==0?`${a.toFixed(s)}%`:""}else if(e==="differenceValue"){const a=Math.abs(l-n);o=a?`${a.toFixed(s)}`:""}else o=`${n.toFixed(s)}`;return o},ue=async e=>{console.log("configFormatter---------",e);let l=[];if(e.tableId){const n=await g.getTableDataRange(e.tableId);if(e.keyIndicatorsFieldId){const s=e.datasourceRange==="All"?n.find(a=>a.type===ce.ALL):n.find(a=>a.viewId===e.datasourceRange),o={tableId:e.tableId,dataRange:s,series:[{fieldId:e.keyIndicatorsFieldId,rollup:e.keyIndicatorsRollup}]};l.push(o),e.momOrYoy.forEach(a=>{const d={tableId:e.tableId,dataRange:s,series:[{fieldId:a.momOrYoyFieldId,rollup:a.indicatorsRollup}]};l.push(d)})}}return l},Cs=async()=>{const e=await g.getConfig();console.log("get config----",e);const l=e.dataConditions,n=e.customConfig;if(l.length>0){const s=l[0];s.tableId&&!n.tableId.length&&(n.tableId=s.tableId)}return n},me=async e=>{var s;console.log("getPreviewData---------",e);const l=await ue(e),n=[];for(const o of l){console.log(o,"------init item");const a=await g.getPreviewData(o);console.log("getPreviewData for-------------",o,a);const d=(s=a[1])==null?void 0:s.map(p=>p.value);n.push(d!=null&&d.length?d[0]:0)}return n},xs=(e,l)=>{let n={mom:i("mom"),yoyByWeek:i("weekYoy"),yoyByMonth:i("monthYoy"),yoyByYear:i("yearYoy")},s={differenceRate:i("growthRate"),differenceValue:i("growthValue"),originalValue:i("originalValue")};return`${n[e]}${s[l]}`},ws=async(e,l)=>{const n=l[0],s=l.slice(1),o=e.momOrYoy.map((d,p)=>{const m=s[p],y=gs(e.iconStyleId,d.momOrYoyCalcType,n,m);return{desc:d.momOrYoyDesc,calcType:d.momOrYoyCalcType,value:ps(d.momOrYoyCalcType,n,m,e.decimal),color:y.color,icon:y.icon}});return{color:e.color,value:fs(n,e.numberFormat,e.decimal),prefix:e.prefix,suffix:e.suffix,momYoyList:o}},K=async(e,l,n)=>{if(l.filter(o=>o!==void 0).length<=1)return;const s=await ws(e,l);n(s)},oe=(e,l,n="D-DIN-Bold")=>{const s=document.createElement("span");s.textContent=e,s.style.fontSize=`${l}vmax`,s.style.fontFamily=n,s.style.visibility="hidden",s.style.whiteSpace="nowrap",document.body.appendChild(s);const o=s.offsetWidth;return document.body.removeChild(s),o},ne=(e,l,n)=>{if(e===0)return n;let s=n,o=oe(l,s);for(;e<=o;)s-=1,o=oe(l,s);return s},ye=[{name:"primary",value:"var(--ccm-chart-N700)"},{name:"blue",value:"var(--ccm-chart-B500)"},{name:"Purple",value:"var(--ccm-chart-I500)"},{name:"green",value:"var(--ccm-chart-G500)"},{name:"cyan",value:"var(--ccm-chart-W500)"},{name:"yellow",value:"var(--ccm-chart-Y500)"},{name:"orange",value:"var(--ccm-chart-O500)"},{name:"red",value:"var(--ccm-chart-R400)"}];function bs(e){return t.jsx("div",{className:"color-picker",children:ye.map(({name:l,value:n})=>t.jsx("div",{onClick:()=>{e.onChange(l)},style:{borderColor:e.name===l?n:"transparent"},className:"color-picker-color-container",children:t.jsx("div",{style:{backgroundColor:n},className:"color-picker-color",children:e.name===l?t.jsx("div",{className:"selected-icon-container"}):null})},l))})}function vs({renderData:e,mainDomRef:l}){var p;const n=g.state===Y.Config||g.state===Y.Create,s=r.useRef(null),o=r.useRef(null),a=Q(()=>{var b,I;const m=`${e.prefix}${e.value}${e.suffix}`;let y=26;if(n){const $=((b=s.current)==null?void 0:b.offsetWidth)||0;y=ne($,m,26)}else{const $=((I=l.current)==null?void 0:I.offsetWidth)||0;y=ne($,m,26)}o.current&&(o.current.style.fontSize=`${y}vmax`)},200),d=()=>{a()};return r.useEffect(()=>(d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}),[e]),t.jsx("div",{className:"main-content",ref:s,children:t.jsxs("div",{className:k({"main-content-warp":!0,"is-config":n}),children:[t.jsx("div",{ref:o,className:"main-content-number text-hidden",style:{color:(p=ye.find(m=>m.name===e.color))==null?void 0:p.value},children:`${e.prefix}${e.value}${e.suffix}`}),e.momYoyList.map((m,y)=>t.jsxs("div",{className:"main-content-description text-hidden",children:[t.jsx("div",{className:"description-text",children:m.desc}),t.jsxs("div",{className:k("description-index",m.color),children:[m.calcType==="originalValue"?null:J(m.icon,"1.8vmax",m.value?void 0:"0"),t.jsx("div",{className:"description-index-number",children:m.value})]})]},y))]})})}const se=e=>r.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M1.33203 2.66634C1.33203 1.92996 1.92898 1.33301 2.66536 1.33301H13.332C14.0684 1.33301 14.6654 1.92996 14.6654 2.66634V13.333C14.6654 14.0694 14.0684 14.6663 13.332 14.6663H2.66536C1.92899 14.6663 1.33203 14.0694 1.33203 13.333V2.66634ZM2.66536 2.66634V13.333H13.332V2.66634H2.66536Z",fill:"#646A73"}),r.createElement("path",{d:"M8.33203 4.66634C7.96384 4.66634 7.66536 4.96482 7.66536 5.33301C7.66536 5.7012 7.96384 5.99967 8.33203 5.99967H11.332C11.7002 5.99967 11.9987 5.7012 11.9987 5.33301C11.9987 4.96482 11.7002 4.66634 11.332 4.66634H8.33203Z",fill:"#646A73"}),r.createElement("path",{d:"M3.9987 5.33301C3.9987 4.96482 4.29718 4.66634 4.66536 4.66634H5.9987C6.36689 4.66634 6.66536 4.96482 6.66536 5.33301C6.66536 5.7012 6.36689 5.99967 5.9987 5.99967H4.66536C4.29717 5.99967 3.9987 5.7012 3.9987 5.33301Z",fill:"#646A73"}),r.createElement("path",{d:"M8.33203 7.33301C7.96384 7.33301 7.66536 7.63148 7.66536 7.99967C7.66536 8.36786 7.96384 8.66634 8.33203 8.66634H11.332C11.7002 8.66634 11.9987 8.36786 11.9987 7.99967C11.9987 7.63148 11.7002 7.33301 11.332 7.33301H8.33203Z",fill:"#646A73"}),r.createElement("path",{d:"M3.9987 7.99967C3.9987 7.63148 4.29718 7.33301 4.66536 7.33301H5.9987C6.36689 7.33301 6.66536 7.63148 6.66536 7.99967C6.66536 8.36786 6.36689 8.66634 5.9987 8.66634H4.66536C4.29717 8.66634 3.9987 8.36786 3.9987 7.99967Z",fill:"#646A73"}),r.createElement("path",{d:"M8.33203 9.99967C7.96384 9.99967 7.66536 10.2982 7.66536 10.6663C7.66536 11.0345 7.96384 11.333 8.33203 11.333H11.332C11.7002 11.333 11.9987 11.0345 11.9987 10.6663C11.9987 10.2982 11.7002 9.99967 11.332 9.99967H8.33203Z",fill:"#646A73"}),r.createElement("path",{d:"M3.9987 10.6663C3.9987 10.2982 4.29718 9.99967 4.66536 9.99967H5.9987C6.36689 9.99967 6.66536 10.2982 6.66536 10.6663C6.66536 11.0345 6.36689 11.333 5.9987 11.333H4.66536C4.29717 11.333 3.9987 11.0345 3.9987 10.6663Z",fill:"#646A73"})),le=e=>r.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M5.85044 1.42649C6.21505 1.47773 6.46908 1.81485 6.41784 2.17945L6.16192 4.00039H10.8155L11.0975 1.99389C11.1487 1.62928 11.4858 1.37525 11.8504 1.42649C12.215 1.47773 12.4691 1.81485 12.4178 2.17945L12.1619 4.00039H14.668C15.0362 4.00039 15.3346 4.29887 15.3346 4.66706C15.3346 5.03525 15.0362 5.33373 14.668 5.33373H11.9745L11.3187 10.0004H13.3346C13.7028 10.0004 14.0013 10.2989 14.0013 10.6671C14.0013 11.0353 13.7028 11.3337 13.3346 11.3337H11.1313L10.7478 14.0627C10.6965 14.4273 10.3594 14.6813 9.9948 14.6301C9.63019 14.5788 9.37616 14.2417 9.4274 13.8771L9.78485 11.3337H5.13129L4.74776 14.0627C4.69652 14.4273 4.35941 14.6813 3.9948 14.6301C3.63019 14.5788 3.37616 14.2417 3.4274 13.8771L3.78485 11.3337H1.33464C0.966446 11.3337 0.667969 11.0353 0.667969 10.6671C0.667969 10.2989 0.966446 10.0004 1.33464 10.0004H3.97224L4.6281 5.33373H2.66797C2.29978 5.33373 2.0013 5.03525 2.0013 4.66706C2.0013 4.29887 2.29978 4.00039 2.66797 4.00039H4.81548L5.09748 1.99389C5.14872 1.62928 5.48583 1.37525 5.85044 1.42649ZM9.97224 10.0004L10.6281 5.33373H5.97453L5.31868 10.0004H9.97224Z",fill:"#646A73"}));function Ys({config:e,datasourceRange:l,setConfig:n,tableList:s,tableFields:o}){const{t:a}=X(),[d,p]=r.useState(e.tableId),[m,y]=r.useState(o),[b,I]=r.useState(e.keyIndicatorsFieldId),[O,$]=r.useState(e.keyIndicatorsRollup??N.SUM),[H,T]=r.useState(l),[W,G]=r.useState(e.datasourceRange),M=[{keyOfName:"sum",type:N.SUM},{keyOfName:"average",type:N.AVERAGE},{keyOfName:"max",type:N.MAX},{keyOfName:"min",type:N.MIN}];r.useEffect(()=>{p(e.tableId),G(e.datasourceRange)},[e]),r.useEffect(()=>{y(o)},[o]),r.useEffect(()=>{T(l)},[l]);const f=async c=>{e.tableId=c,p(c);const u=await g.getTableDataRange(c);T(u),G("All"),e.datasourceRange="",n({...e});const x=await(await U.getTable(c)).getFieldMetaList();y(x),I("")},C=c=>{e.datasourceRange=c,n({...e})},R=(c,u)=>{n({...e,[c]:u}),I(u)},L=(c,u,h,x)=>{c={...c,[u]:h},u==="momOrYoyDesc"&&(c.manualSetDesc=!0);const{manualSetDesc:V,momOrYoyCalcMethod:S,momOrYoyCalcType:Z}=c;V||(c.momOrYoyDesc=xs(S,Z)),e.momOrYoy[x]=c,n({...e})},P=r.useRef(null),E=()=>{const c={momOrYoyDesc:a("momGrowthRate"),momOrYoyFieldId:"",manualSetDesc:!1,momOrYoyCalcMethod:"mom",momOrYoyCalcType:"differenceRate",indicatorsRollup:"SUM"};e.momOrYoy.push(c),n({...e}),setTimeout(()=>{var u;(u=P.current)==null||u.scrollIntoView({behavior:"smooth"})},0)},he=c=>{e.momOrYoy.splice(c,1),n({...e})},ee=c=>{const u=M.find(x=>x.type===c),h=(u==null?void 0:u.keyOfName)??"";return a(h)};return t.jsxs(D,{className:"form-main",children:[t.jsx("div",{className:"form-title",children:a("dataSource")}),t.jsx("div",{className:"form-item",children:t.jsx(D.Select,{noLabel:!0,field:"dataSource",prefix:t.jsx(F,{svg:t.jsx(se,{})}),optionList:s,initValue:d,onChange:f})}),t.jsx("div",{className:"form-title",children:a("dataRange")}),t.jsx("div",{className:"form-item",children:t.jsx(D.Select,{prefix:t.jsx(F,{svg:t.jsx(se,{})}),noLabel:!0,field:"dataRange",optionList:H.map(c=>c.type===ce.ALL?{value:"All",label:a("view_all")}:{value:c.viewId,label:c.viewName}),initValue:W,onChange:c=>{C(c)}})}),t.jsx(Ie,{style:{borderColor:"var(--divider)",margin:"20px 0 20px 0"}}),t.jsx("div",{className:"form-title",children:a("key_indicators")}),t.jsx("div",{className:"form-item",children:t.jsx(D.Select,{noLabel:!0,className:"drop-down-select",field:"keyIndicators",placeholder:a("key_indicators"),prefix:t.jsx(F,{svg:t.jsx(le,{})}),showArrow:!1,suffix:t.jsx(j,{className:"select-suffix",position:"bottomRight",trigger:"click",stopPropagation:!0,clickToHide:!0,render:t.jsx(j.Menu,{children:M.map(c=>t.jsx(j.Item,{onClick:u=>{const h=u.target.textContent,x=M.find(V=>a(V.keyOfName)===h);x&&(console.log(x.type),e.keyIndicatorsRollup=x.type,n({...e}),$(x.type))},children:a(c.keyOfName)},c.type))}),children:t.jsx(te,{className:"drop-down-tag",onClick:c=>{c.stopPropagation()},children:ee(O)})}),initValue:b,onChange:c=>{R("keyIndicatorsFieldId",c)},optionList:m.map(c=>({value:c.id,label:c.name,disabled:c.type!==2}))})}),t.jsxs("div",{className:"form-title",children:[t.jsx("span",{children:a("auxiliary_index")}),t.jsx(ie,{disabled:e.momOrYoy.length>=4,theme:"borderless",icon:t.jsx($e,{size:"small"}),style:{fontWeight:"normal"},onClick:E,children:a("add_index")})]}),(e.momOrYoy??[]).map((c,u)=>t.jsxs("div",{className:"form-item bg-grey",children:[e.momOrYoy.length>1&&t.jsx("div",{className:"icon-delete",onClick:()=>{he(u)},children:t.jsx(Me,{size:"small"})}),t.jsx("div",{className:"form-subTitle",children:a("field")}),t.jsx(D.Select,{noLabel:!0,prefix:t.jsx(F,{svg:t.jsx(le,{})}),field:"momOrYoyFieldId"+u,placeholder:a("auxiliary_index"),position:"top",initValue:c.momOrYoyFieldId,onChange:h=>L(c,"momOrYoyFieldId",h,u),optionList:m.map(h=>({value:h.id,label:h.name,disabled:h.type!==2})),showArrow:!1,suffix:t.jsx(j,{className:"select-suffix",position:"bottomRight",trigger:"click",stopPropagation:!0,clickToHide:!0,render:t.jsx(j.Menu,{children:M.map(h=>t.jsx(j.Item,{onClick:x=>{const V=x.target.textContent,S=M.find(Z=>a(Z.keyOfName)===V);S&&(console.log(S.type),L(c,"indicatorsRollup",S.type,u),n({...e}))},children:a(h.keyOfName)},h.type))}),children:t.jsx(te,{className:"drop-down-tag",onClick:h=>{h.stopPropagation()},children:ee(c.indicatorsRollup)})})}),t.jsx("div",{className:"form-subTitle",children:a("description")}),t.jsx(z,{value:c.momOrYoyDesc,onChange:h=>L(c,"momOrYoyDesc",h,u)}),t.jsx("div",{className:"form-subTitle",children:a("calculationType")}),t.jsx(D.Select,{noLabel:!0,field:"momOrYoyCalcType"+u,position:"top",optionList:ds,initValue:c.momOrYoyCalcType,onChange:h=>L(c,"momOrYoyCalcType",h,u)}),t.jsx("div",{ref:P})]},u))]})}function Is({config:e,setConfig:l}){const{t:n}=X(),s=(a,d)=>{l({...e,[a]:d})},o=a=>`${a}`.replace(/\D/g,"");return t.jsxs("div",{className:"form-main",children:[t.jsx("div",{className:"form-title",children:n("color")}),t.jsx("div",{className:"form-item",style:{margin:"6px 0 18px 0"},children:t.jsx(bs,{onChange:a=>{s("color",a)},name:e.color})}),t.jsx("div",{className:"form-title",children:n("iconStyle")}),t.jsx("div",{className:"form-item",children:t.jsx(A,{value:e.iconStyleId,onChange:a=>{s("iconStyleId",a)},children:de.map(a=>t.jsx(A.Option,{value:a.id,children:t.jsxs("div",{className:"index-icon",children:[t.jsxs("div",{className:k("index-icon-item",a.upIconColor),children:[J(a.upIcon),t.jsx("div",{className:"number",children:"10"})]}),t.jsxs("div",{className:k("index-icon-item",a.constIconColor),children:[t.jsx(re,{size:"small"}),t.jsx("div",{className:"number",children:"0"})]}),t.jsxs("div",{className:k("index-icon-item",a.downIconColor),children:[J(a.downIcon),t.jsx("div",{className:"number",children:"10"})]})]})},a.id))})}),t.jsx("div",{className:"form-title",children:n("indexDataFormat")}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:n("decimalPlaces_Format")}),t.jsxs("div",{className:"flex-between",children:[t.jsx(Le,{style:{marginRight:"10px",flex:1},value:e.decimal,formatter:o,onNumberChange:a=>{s("decimal",a)},min:0,max:5}),t.jsx(A,{value:e.numberFormat,style:{flex:1},onChange:a=>{s("numberFormat",a)},children:ms.map(a=>t.jsx(A.Option,{value:a.value,children:a.label},a.value))})]})]}),t.jsxs("div",{className:"flex-between",children:[t.jsxs("div",{className:"form-item",style:{marginRight:"10px"},children:[t.jsx("div",{className:"form-subTitle",children:n("prefix")}),t.jsx(z,{value:e.prefix,placeholder:n("prefixPlaceholder"),onChange:a=>{s("prefix",a)}})]}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:n("suffix")}),t.jsx(z,{value:e.suffix,placeholder:n("suffixPlaceholder"),onChange:a=>{s("suffix",a)}})]})]})]})}function $s({setRenderData:e,initializeConfig:l}){const{t:n}=X(),s=[{key:"1",tab:n("type_Date")},{key:"2",tab:n("customStyle")}],[o,a]=r.useState(l),[d,p]=r.useState([]),[m,y]=r.useState([]),[b,I]=r.useState([]);is(a).then();const O=async()=>{if(console.log("save config",JSON.stringify(o),JSON.parse(JSON.stringify(o))),!o.keyIndicatorsFieldId){je.error(n("dataPlaceholder"));return}const f=await ue(o);await g.saveConfig({customConfig:o,dataConditions:f})},$=r.useCallback(async()=>{const f=await U.getTableList(),C=[];for(const R of f){const L=await R.getName();C.push({value:R.id,label:L})}return C},[]),H=async()=>{var E;const f=await $();console.log(f,"----"),I(f);const C={...o};if((g.state===Y.Create||C.tableId.length===0)&&(C.tableId=(E=f[0])==null?void 0:E.value),!C.tableId){a({...C});return}const R=await g.getTableDataRange(C.tableId);p(R);const P=await(await U.getTable(C.tableId)).getFieldMetaList();y(P),a({...C})};r.useEffect(()=>{H().then()},[]);const[T,W]=r.useState([]),G=Q(async()=>{if(!o.tableId)return;const f=await me(o);W(f),await K(o,f,e)},200);r.useEffect(()=>{G()},[o.tableId,o.keyIndicatorsFieldId,o.keyIndicatorsRollup,o.datasourceRange,JSON.stringify(o.momOrYoy)]);const M=Q(()=>{o.tableId&&K(o,T,e).then()},200);return r.useEffect(()=>{M()},[o.color,o.iconStyleId,o.decimal,o.numberFormat,o.prefix,o.suffix]),t.jsxs("div",{className:"main-config-panel left-border",children:[t.jsx("div",{className:"form",children:t.jsx(Re,{defaultActiveKey:"1",children:s.map(f=>t.jsxs(De,{tab:f.tab,itemKey:f.key,children:[f.key==="1"&&t.jsx(Ys,{config:o,datasourceRange:d,tableFields:m,setConfig:a,tableList:b}),f.key==="2"&&t.jsx(Is,{config:o,setConfig:a})]},f.key))})}),t.jsx(ie,{className:"btn",theme:"solid",onClick:O,children:n("confirm")})]})}const Ms=e=>r.createElement("svg",{width:121,height:120,viewBox:"0 0 121 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M77.0437 70.0795L76.8283 69.9809L62.359 81.0316C61.1703 81.9395 59.5743 82.1082 58.2219 81.4691L8.21977 57.8358C6.85883 57.1926 6.6695 55.3331 7.87286 54.4288L21.5603 44.1424L42.6416 7.61167C43.6825 5.80802 45.933 5.1047 47.8157 5.99472L99.1782 30.2764C99.5333 30.4442 99.8617 30.6635 100.153 30.9271L114.93 44.3024C116.326 45.5669 116.652 47.6347 115.71 49.2668L112.334 55.1195L94.3026 86.3444L91.4574 102.279C91.1814 103.825 89.3131 104.465 88.1478 103.412L74.8172 91.37C73.7729 90.4267 73.3012 89.004 73.575 87.6236L77.0527 70.0882L77.0437 70.0795Z",fill:"#BBBFC4",fillOpacity:.45}),r.createElement("path",{d:"M99.6143 30.5555C99.3748 30.4182 99.0692 30.5011 98.9319 30.7407L76.8319 69.3007C76.6946 69.5403 76.7775 69.8458 77.0171 69.9831C77.2567 70.1205 77.5622 70.0375 77.6995 69.798L99.7995 31.238C99.9368 30.9984 99.8539 30.6929 99.6143 30.5555Z",fill:"#8F959E"}),r.createElement("path",{d:"M23.1481 44.609C23.2643 44.3585 23.5616 44.2497 23.8121 44.3659L74.6821 67.9659C74.9326 68.0821 75.0415 68.3794 74.9253 68.6299C74.809 68.8804 74.5118 68.9892 74.2613 68.873L23.3913 45.273C23.1408 45.1568 23.0319 44.8595 23.1481 44.609Z",fill:"#8F959E"}),r.createElement("path",{d:"M79.0919 70.7157C79.2872 70.5205 79.6038 70.5206 79.799 70.7159L93.429 84.3559C93.6242 84.5512 93.6241 84.8678 93.4287 85.063C93.2334 85.2582 92.9168 85.2581 92.7216 85.0628L79.0916 71.4228C78.8964 71.2274 78.8966 70.9108 79.0919 70.7157Z",fill:"#8F959E"}),r.createElement("path",{d:"M12.2976 85.0758C12.3936 85.3407 12.6793 85.4857 12.9356 85.3997L26.9261 80.7052C27.1824 80.6192 27.3124 80.3347 27.2164 80.0698C27.1204 79.8049 26.8348 79.6598 26.5784 79.7458L12.588 84.4403C12.3316 84.5263 12.2016 84.8108 12.2976 85.0758Z",fill:"#002270"}),r.createElement("path",{d:"M29.1592 93.1365C29.3988 93.2817 29.7003 93.2068 29.8325 92.9691L33.407 86.5435C33.5392 86.3058 33.4521 85.9954 33.2124 85.8502C32.9728 85.705 32.6713 85.7799 32.5391 86.0176L28.9646 92.4431C28.8324 92.6808 28.9195 92.9912 29.1592 93.1365Z",fill:"#002270"}),r.createElement("path",{d:"M40.8525 98.3544C41.1176 98.436 41.3879 98.2863 41.4564 98.0199L43.2095 91.2039C43.278 90.9376 43.1187 90.6556 42.8537 90.574C42.5887 90.4924 42.3183 90.6421 42.2498 90.9084L40.4967 97.7245C40.4282 97.9908 40.5875 98.2728 40.8525 98.3544Z",fill:"#002270"}),r.createElement("path",{d:"M22.0441 15.2369C21.8072 15.9701 20.5295 20.0796 19.3945 26.224C21.5668 16.8434 31.2357 16.1999 38.251 15.2661L42.1562 8.44622C29.0405 6.83319 23.1995 12.7542 22.0441 15.2369Z",fill:"#002270"}),r.createElement("path",{d:"M20.9225 22.5347C21.0509 23.0541 21.2118 23.5665 21.4048 24.0727C22.4949 26.9319 24.5749 29.5086 27.3744 31.9806C32.5064 36.5122 40.3119 40.9009 49.6257 46.1376C50.081 46.3936 50.5399 46.6516 51.0022 46.9117L47.2365 51.6058C36.8022 45.6411 29.3354 41.0762 24.7907 36.9181C22.4741 34.7986 20.9858 32.8446 20.2334 30.935C19.4932 29.0563 19.4397 27.1569 20.1106 25.0658L20.9225 22.5347ZM19.1584 24.7603C16.2101 33.9506 25.8848 40.5791 47.4822 52.8976L52.5195 46.6184C52.2236 46.4517 51.9293 46.286 51.6364 46.1211C51.1381 45.8407 50.6441 45.5629 50.1547 45.2877C33.7141 36.0426 22.3614 29.6586 21.5906 20.4522C21.4473 18.7409 21.6697 16.9321 22.293 14.9893L19.1584 24.7603Z",fill:"#002270"}),r.createElement("path",{d:"M115.229 86.0665C114.789 83.8931 108.017 74.6118 102.273 72.5762L105.411 67.1211C111.08 69.772 115.204 74.3925 115.21 77.1715C115.217 80.033 115.274 83.5659 115.229 86.0665Z",fill:"#002270"}),r.createElement("path",{d:"M83.6606 91.9654L83.6445 85.1843C89.7317 86.0039 95.2361 86.9841 103.493 86.429C111.836 85.8682 115.218 81.8932 115.209 77.8652L115.229 86.394C114.8 88.8997 110.898 92.9466 103.944 93.2258C96.9901 93.5049 90.5864 93.0806 83.6606 91.9654Z",fill:"#33D6C0"}),r.createElement("path",{d:"M66.6627 105.195C62.5108 103.955 59.5924 102.772 57.5718 101.783L57.4336 94.708C60.3869 96.514 63.8677 97.5406 67.3071 98.4525C70.8133 99.3823 75.833 100.663 81.0725 101.913L81.0886 108.73C75.8307 107.597 70.5171 106.347 66.6627 105.195Z",fill:"#336DF4"}),r.createElement("path",{d:"M85.2035 109.546L85.1875 102.765C91.2747 103.585 96.779 104.565 105.036 104.01C113.379 103.449 116.761 99.4743 116.752 95.4463L116.772 103.975C116.343 106.481 112.441 110.528 105.487 110.807C98.5331 111.086 92.1294 110.662 85.2035 109.546Z",fill:"#336DF4"}));function Ls(){rs();const e=g.state===Y.Config||g.state===Y.Create,[l,n]=r.useState(!0),[s,o]=r.useState(ys),[a,d]=r.useState({color:"primary",value:"",prefix:"",suffix:"",momYoyList:[]}),p=r.useRef(null),m=async()=>{const y=await Cs();if(console.log("render main get config",y),o(y),y.tableId.length>0){const b=await me(y);await K(y,b,d)}};return r.useEffect(()=>{Y.Create!==g.state?m().then(()=>{n(!1)}):n(!1),g.onDataChange(y=>{console.log("------------------change------------------------"),Y.Create!==g.state&&m().then()}),g.onConfigChange(y=>{console.log("----------onConfigChange--------change------------------------"),Y.Create!==g.state&&m().then()})},[]),l?t.jsx("div",{style:{width:"100%",height:"100%",display:"grid",alignItems:"center",justifyItems:"center"},children:t.jsxs("div",{style:{width:"max-content",height:"max-content",display:"flex",flexDirection:"column",alignItems:"center",rowGap:"10px",justifyItems:"center"},children:[t.jsx(F,{svg:t.jsx(Ms,{})}),t.jsx("div",{style:{textAlign:"center",fontSize:"16px"},children:"加载中..."})]})}):t.jsxs("main",{className:k(e?"top-border":"","main"),ref:p,children:[t.jsx(vs,{renderData:a,mainDomRef:p}),e&&t.jsx($s,{setRenderData:d,initializeConfig:s})]})}q.locale("en-us");function Rs(e){const[l,n]=r.useState(ke);return r.useEffect(()=>{if(e.neverShowBanner)return;const s=new Promise((o,a)=>{setTimeout(()=>{a(!1)},3e3)});Promise.race([_.bridge.getLanguage(),s]).then(o=>{o==="zh"&&(n(Oe),q.locale("zh-cn")),o==="ja"&&n(Ve)}).catch(o=>{console.error(o)})},[]),e.neverShowBanner?e.children||null:t.jsx(Se,{locale:l,children:e.children})}const Ds=Ne([{path:"/",element:t.jsx(Ls,{})}]),js=Fe.createRoot(document.getElementById("root"));js.render(t.jsx(Rs,{children:t.jsx(Te,{router:Ds})}));
