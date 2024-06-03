"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[97300],{552341:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(149722);let a=()=>{let e=(0,s.Z)(),t=!!e.isAuth&&e.isPartner;return t}},354500:(e,t,r)=>{r.d(t,{Oz:()=>s,mo:()=>n,nt:()=>i,v8:()=>a});let s={BUSINESS_ACCOUNT:"BUSINESS_ACCOUNT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",USER_ACCOUNT:"USER",AD_ACCOUNT:"AD_ACCOUNT",PROFILE:"PROFILE"},a="BUSINESS_PANEL",i="ASSET_PANEL",n=500},368552:(e,t,r)=>{r.d(t,{FE:()=>O,lG:()=>I,d9:()=>N});var s=r(667294),a=r(616550),i=r(552341),n=r(516018),u=r(340523),l=r(149722),c=r(953565);let d=()=>{let e=(0,l.Z)(),{checkExperiment:t}=(0,u.F)(),r=(0,i.Z)()&&t("web_m10n_business_reporting_business_entity_service").anyEnabled,[a,d]=(0,s.useState)({isReady:!1}),S=(0,s.useCallback)(async({entityId:e,actingBusinessId:t,favorites:s})=>{r&&(await (0,n.yo)({entityId:e,actingBusinessId:t,favorites:s}),d(e=>{let r={...e,actingBusinessId:t};return s&&(r.favoriteAdAccounts={favoriteAdAccountsMap:{...e.favoriteAdAccounts?.favoriteAdAccountsMap||{},[s.actingBusinessId]:{advertiserId:s.adAccounts}}}),r}))},[r]);return(0,s.useEffect)(()=>{r&&e.isAuth&&!a.isReady&&(async()=>{let t=!1;try{let t=await (0,n.SF)({entityId:e.id});d(e=>({...e,...t}))}catch{t=!0}finally{(0,c.nP)("globalAccountSwitcher.getFavoriteAdAccounts",{sampleRate:1,tags:{businessId:e.id,hasError:t}}),d(e=>({...e,isReady:!0}))}})()},[a.isReady,r,e]),{accountSwitcherConfig:a,setConfig:S}};var S=r(354500),_=r(214877),m=r(342513),A=r(96157),o=r(624797),E=r(938927),g=r(23234),p=r(441354),C=r(785893);let{Provider:y,useHook:N}=(0,m.Z)("AccountSwitcherContext"),I=e=>e.search&&(0,o.mB)(e.search).advertiserId,O=({children:e})=>{let{checkExperiment:t}=(0,u.F)(),{anyEnabled:r}=t("business_access_assets_and_history_api_v4_migration"),c=(0,a.TH)(),{params:{userBizId:m,businessHierarchyId:o,advertiserId:N,username:O}}=(0,a.$B)(),U=I(c),f=(0,l.Z)(),[$,R]=(0,s.useState)(""),[T,h]=(0,s.useState)(null),[v,B]=(0,s.useState)(!1),[b,L]=(0,s.useState)(null),D=new URLSearchParams(c.search),[P,w]=(0,s.useState)(D.has("actingBusinessId")?null:{id:f.id||"",name:f.fullName||"",img:f.imageMediumUrl||""}),[H,Z]=(0,s.useState)(!1),G=(0,i.Z)(),{logContextEvent:F}=(0,_.v)(),{accountSwitcherConfig:M,setConfig:z}=d();(0,s.useEffect)(()=>{o?R(o):R("")},[o]);let Y=(0,s.useCallback)(async({id:e,username:t})=>{let r=await (0,n.bG)({user_id:e,username:t});r&&L({type:e?S.Oz.BUSINESS_ACCOUNT:S.Oz.PROFILE,id:e||r.id,name:r.full_name,img:r.image_medium_url,username:t}),Z(!1)},[]),k=(0,p.rc)(O);(0,s.useEffect)(()=>{(0,A.cD)(c)&&b&&k!==O&&O===f.username&&(Y({username:f.username}),w({id:f.id||"",name:f.fullName||"",img:f.imageMediumUrl||""}),h({type:S.nt,id:f.id}))},[c,k,Y,b,O,f.fullName,f.id,f.imageMediumUrl,f.username]),(0,s.useEffect)(()=>{let e=async({businessId:e,assetId:t})=>{if(!e){Z(!1);return}try{if(r){if(P&&f.isAuth){let{data:{data:e=[{asset:{name:""},type:"AD_ACCOUNT"}]}={}}=await (0,g.QC)({id:P.id,businessId:P.id,personId:f.id,startIndex:0,searchBy:"id",searchTerm:t,sortBy:"name",sortDirection:"ASCENDING",limit:1,includeAssetSummary:!0}),{asset:r,type:s}=e[0];L({id:t,name:r.name,img:"",type:s})}}else{let{data:{data:{asset:r,type:s}}}=await (0,E.G2)({businessId:e,assetId:t,resourceType:"AD_ACCOUNT",includeAssetSummary:!0});L({id:t,name:r.name,img:"",type:s})}}catch{L({id:f.id||"",name:f.fullName||"",img:f.imageMediumUrl||"",type:S.Oz.BUSINESS_ACCOUNT})}Z(!1)},t=async({id:e})=>{let t=await (0,n.p)({hierarchyId:e});L({id:e,name:t?.data?t.data.name:"",img:t?.data?t.data.img_medium_url:"",type:S.Oz.BUSINESS_HIERARCHY}),Z(!1)};if(f.isAuth&&G){let r=b&&b.username&&b.username!==O;if((!b||r)&&!H){let r=(0,A.TI)(c)||(0,A.h3)(c),s=N||!!U&&!r;Z(!0),o?t({id:o}):m?Y({id:m}):(0,A.cD)(c)&&O?Y({username:O}):s?e({businessId:f.id,assetId:N||U||""}):b&&b.id===f.id||(L({type:S.Oz.BUSINESS_ACCOUNT,id:f.id||"",name:f.fullName||"",img:f.imageMediumUrl||""}),Z(!1))}}},[b,f,o,m,O,N,U,P,G,c,Y,H,r]);let x=(0,s.useMemo)(()=>({activePanel:T,selectedHierarchyId:$,switcherOpen:v,openAccountSwitcher:()=>{if(F({event_type:101,view_type:608,component:14346}),!T){if((0,A.TI)(c))h({type:S.v8});else{let e=new URLSearchParams(c.search),t=e.get("actingBusinessId");h({type:S.nt,id:t??P?.id})}}B(!0)},closeAccountSwitcher:()=>B(!1),openAssetPanel:e=>{h({type:S.nt,id:e})},closeAssetPanel:()=>{h({type:S.v8})},actingBusiness:P,selectedAccount:b,setSelectedAccount:L,setActingBusiness:w,accountSwitcherConfig:M,setConfig:z}),[T,$,v,P,b,M,z,F,c]);return(0,C.jsx)(y,{value:x,children:e})}},593882:(e,t,r)=>{r.d(t,{C:()=>g,H:()=>p});var s=r(667294),a=r(552341),i=r(354500),n=r(516018),u=r(29156),l=r(250304),c=r(24691),d=r(342513),S=r(107366),_=r(244413),m=r(149722),A=r(186966),o=r(785893);let{Provider:E,useHook:g}=(0,d.Z)("BusinessHierarchyContext"),p=({children:e})=>{let[t,r]=(0,s.useState)([]),[d,g]=(0,s.useState)(!1),[p,C]=(0,s.useState)(!1),[y,N]=(0,s.useState)({}),[I,O]=(0,s.useState)(null),[U,f]=(0,s.useState)([]),[$,R]=(0,s.useState)({}),T=(0,A.Z)(),h=(0,s.useRef)(T),v=(0,m.Z)(),B=(0,a.Z)(),b=(0,s.useRef)({}),L=(0,s.useCallback)((e,t)=>{let r;t===i.Oz.BUSINESS_HIERARCHY?r=(0,c.Z)(l.Q6.DASHBOARD,"","",e):t===i.Oz.BUSINESS_ACCOUNT&&(r=(0,c.Z)(l.Q6.DASHBOARD,e));let s=(0,_.Z)({site:"www",path:r});(0,u.Z)(s)},[]),D=(0,s.useCallback)(async e=>{if(!B)return[];if(C(!0),b.current[e])return C(!1),b.current[e];{let t=await (0,S.Z)({url:"ads/v4/business_access/business_hierarchies/",data:{search_by:["FULL_NAME","BUSINESS_ID"],search_value:e}}),{data:r}=t.resource_response,s=r&&r.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=i.Oz.USER_ACCOUNT,e))),e))||[],a=/^\d+$/.test(e),u=RegExp(e.toLowerCase(),"g"),l=[];I||O(l=await h.current());let c=I??l,d=c.filter(t=>{if(a)return t.id.includes(e);let r=t.user.full_name.toLowerCase();return r.match(u)}).map(n.IT),_=[...s.map(e=>e.id),...d.map(e=>e.id)],m=a?(v.id||"").includes(e):(v.fullName||"").toLowerCase().match(u);return v.isAuth&&m&&_.push(v.id),b.current[e]=_,C(!1),_}},[B,h,v.id,v.fullName,v.isAuth,I]),{id:P="",username:w="",email:H="",fullName:Z="",imageSmallUrl:G="",imageMediumUrl:F="",isAuth:M}=v,z=async e=>{if((!M||!B||I)&&!e)return;g(!0);let t=[];try{let e=await (0,S.Z)({url:"ads/v4/business_access/business_hierarchies/"}),{data:s}=e.resource_response;t=s&&s.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=i.Oz.USER_ACCOUNT,e))),e))||[],r(t)}catch{r([])}try{let e=[];I||(e=await h.current(),O(e));let r=I??e;f(r.map(n.IT)),R(r.reduce((e,t)=>(e[t.id]=t.business_roles||[],e),{})),N((0,n.WP)({id:P,username:w,email:H,fullName:Z,imageSmallUrl:G,imageMediumUrl:F})),b.current[""]=[...t.map(e=>e.id),...r.map(n.IT).map(e=>e.id),P],g(!1)}catch{g(!1)}},Y=(0,s.useCallback)(z,[P,w,H,Z,G,F,M,B,I]),k=(0,s.useCallback)(e=>t.some(t=>t.id===e||t.children.some(t=>t.id===e||t.user.id===e)),[t]),x=(0,s.useCallback)(e=>t.map(e=>"BUSINESS_HIERARCHY"===e.entity_type?e:null).find(t=>!!t&&t.children.some(t=>t.user.id===e)),[t]),j=(0,s.useMemo)(()=>({businessHierarchies:[...y.id&&!k(y.id)?[y]:[],...t,...U.filter(e=>!k(e.id))],switchAccount:L,searchAccounts:D,loadingAccounts:d,isSearchingAccounts:p,fetchData:Y,getParentHierarchyForIdIfExists:x,viewerRolesOfEachEmployer:$}),[t,L,D,U,d,p,y,Y,k,x,$]);return(0,o.jsx)(E,{value:j,children:e})}},516018:(e,t,r)=>{r.d(t,{IT:()=>d,SF:()=>o,Vq:()=>c,WP:()=>S,Yu:()=>A,bG:()=>m,p:()=>_,yo:()=>E});var s=r(216167),a=r(354500),i=r(107366),n=r(288673),u=r(562967),l=r(785893);let c=e=>({id:e.id,entity_type:a.Oz.BUSINESS_ACCOUNT,user:{id:e.user.id,entity_type:a.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),d=e=>({id:e.id,entity_type:a.Oz.BUSINESS_ACCOUNT,requires_mfa_for_roles:e.requires_mfa_for_roles,user:{id:e.user.id,entity_type:a.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),S=e=>({id:e.id,entity_type:a.Oz.BUSINESS_ACCOUNT,user:{id:e.id,entity_type:a.Oz.USER_ACCOUNT,username:e.username,email:e.email,full_name:e.fullName,image_small_url:e.imageSmallUrl,image_medium_url:e.imageMediumUrl}}),_=async({hierarchyId:e})=>{let t=await (0,i.Z)({url:`ads/v4/business_access/business_hierarchy/${e}/`});return t.resource_response},m=async({user_id:e,username:t})=>{if(!t&&!e)return null;let r=await s.Z.create("UserResource",{user_id:e,username:t}).callGet(),{resource_response:{data:a}}=r;return a},A=(0,l.jsx)("hr",{style:{borderTop:"1px solid #e9e9e9"}}),o=async({entityId:e})=>{let t=await (0,n.FO)([{entity_type:"BIZ_USER",entity_id:e,property_keys:["GLOBAL_ACCOUNT_SWITCHER_CONFIG"]}]),r=t[0];if(!(r&&r.properties))return{};let s=r.properties.GLOBAL_ACCOUNT_SWITCHER_CONFIG;return s},E=async({entityId:e,actingBusinessId:t,favorites:r})=>{let s={};(0,u.k)(t)||(s.actingBusinessId=t),r&&(s.favoriteAdAccounts={favoriteAdAccountsMap:{[r.actingBusinessId]:{advertiserId:r.adAccounts}}}),Object.keys(s).length>0&&await (0,n.RM)([{entity_type:"BIZ_USER",entity_id:e,properties:{GLOBAL_ACCOUNT_SWITCHER_CONFIG:s}}])}},24691:(e,t,r)=>{r.d(t,{Z:()=>i});let s="/business/business-manager/",a="/business/business-hierarchy/",i=(e,t,r,i)=>{switch(e){case"DASHBOARD":return i?`${a}${String(i)}/dashboard/`:`${s}${String(t)}/dashboard/`;case"PEOPLE":return`${s}${String(t)}/employees/`;case"PARTNERS":return`${s}${String(t)}/partners/`;case"AD_ACCOUNTS":return`${s}${String(t)}/ad-accounts/`;case"HISTORY":return`${s}${String(t)}/history/`;case"PEOPLE_DETAIL":return`${s}${String(t)}/employees/${String(r)}/details/`;case"PARTNERS_DETAIL":return`${s}${String(t)}/partners/${String(r)}/details/`;case"SHARED_PARTNERS_DETAIL":return`${s}${String(t)}/shared/${String(r)}/details/`;case"AD_ACCOUNTS_DETAIL":return`${s}${String(t)}/ad-accounts/${String(r)}/details/`;case"PENDING_AD_ACCOUNTS_DETAIL":return`${s}${String(t)}/ad-accounts/pending/${String(r)}/details/`;case"PEOPLE_INVITES":return`${s}${String(t)}/employees/invites/`;case"PEOPLE_PENDING_TAB":return`${s}${String(t)}/employees/pending/`;case"PARTNERS_PENDING_TAB":return`${s}${String(t)}/partners/pending/`;case"AD_ACCOUNTS_PENDING_TAB":return`${s}${String(t)}/ad-accounts/pending`;case"AD_ACCOUNTS_CEE_MIGRATION":return`${s}${String(t)}/ad-accounts/cee-migration`;case"PARTNERS_INVITE_PAGE":return`${s}${String(t)}/partners/invites/`;case"PARTNERS_REQUEST_PAGE":return`${s}${String(t)}/partners/requests/`;case"PROFILES":return`${s}${String(t)}/profiles/`;case"PROFILES_DETAIL":return`${s}${String(t)}/profiles/${String(r)}/details/`;case"BUSINESS_SECURITY":return`${s}${String(t)}/security/`;case"SUPPORT_TOOL":return`${s}${String(t)}/support/`;case"ASSET_GROUPS":return r?`${s}${String(t)}/asset-groups/?asset_group_id=${String(r)}`:`${s}${String(t)}/asset-groups/`;case"INVOICE_MANAGEMENT":return`${s}${String(t)}/invoice-management/`;case"BUSINESS_HIERARCHY":return`${a}${String(i)}/hierarchy/`;case"BUSINESS_HIERARCHY_BUSINESS_SECURITY":return`${a}${String(i)}/business_security/`;case"MANAGERS":return`${a}${String(i)}/managers/`;case"AUDIENCES":return`${s}${String(t)}/audiences/`;case"SHARED_TAGS":return`${s}${String(t)}/shared-tags/`;case"CATALOGS":return`${s}${String(t)}/catalogs/`;case"BRAND_SAFETY":return`${s}${String(t)}/brand-safety/`;default:return s}}},186966:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(107366);function a(){return async()=>{let e=await (0,s.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),t=e.resource_response?e.resource_response.data:{data:[]};return await Promise.all(t&&t.data||[])}}},441354:(e,t,r)=>{r.d(t,{XI:()=>a,YZ:()=>n,rc:()=>i,sU:()=>c});var s=r(667294);function a(e){let[t,r]=(0,s.useState)(!1),a=()=>r(!0),i=()=>r(!1);return(0,s.useEffect)(()=>{let{current:t}=e;return t&&(t.addEventListener("mouseenter",a),t.addEventListener("mouseleave",i)),()=>{t&&(t.removeEventListener("mouseenter",a),t.removeEventListener("mouseleave",i))}}),t}let i=e=>{let t=(0,s.useRef)(e);return(0,s.useEffect)(()=>{t.current=e}),t.current};function n(){let e=(0,s.useRef)(!0);return(0,s.useEffect)(()=>{e.current=!1},[]),e.current}function u(e,t){return Object.is(e,t)}let l=Symbol("pre-initial value");function c(e,{equal:t=u,delta:r}={equal:u}){let a=(0,s.useRef)(l),i=a.current;return(0,s.useEffect)(()=>{a.current=e}),{previousValue:i,changed:i===l||!t(i,e),delta:r?.(i,e)}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/97300-dd4821549ee09899.mjs.map