(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={consts:{RATES:{startWorkers:2,counterPerWorker:.5,baseDemand:1.25,lab:[.1,.08,.06,.05],showroomDemand:[.9,.7,.5,.4],showroomPrice:[.1,.08,.06,.05],coatingBonus:[.25,.15,.1],prepSeconds:[6,3,2,1.5]},WORK:{saleBase:30,researchBase:5,bonusShare:.4,completeAt:.6,crackWeight:.35,shopTierStep:.25,labTierStep:.25},RATING:{start:3,follow:.02,demandPerStar:.25,base:2.2,service:1.5,showroom:[.4,.3,.2,.1],variety:.1,reviewsPerSale:1,demoReviews:5,demoPull:.1},BASE:{pack:25,scope:40},REPEAT:{"counter-equip":{maxLevel:25,perLevel:.1},"lab-equip":{maxLevel:10,perLevel:.15}},CC:{priceIncrease:1.15,masteryMult:2,mastery1Level:5,mastery1Price:50,mastery2Level:25,mastery2Price:500},STAFF:{rankXp:[0,300,1500,4500],rankStep:.05,upgradeStep:.2,costGrowth:3,upgradeNeedResearch:[0,120,750],coatingXpCap:30,minPrep:.9,onboardingMult:[[1,1,1],[2,1,1],[2,1.5,1]]}},models:{Butter:{name:`버터`,sale:1,research:1,needResearch:0,effort:1,note:`기본 말랑이. 넓은 판이 큼직하게 갈라져요.`},Chocolate:{name:`초콜릿`,sale:1.6,research:1.1,needResearch:12,effort:1.2,note:`잘게 나뉜 조각. 판매 시연에 유리해요.`},Peach:{name:`복숭아`,sale:2,research:3.1,needResearch:80,effort:2.6,note:`둥글고 커서 오래 걸리지만 연구 실험에 유리해요.`},Corn:{name:`옥수수`,sale:1.5,research:1,needResearch:260,effort:.9,note:`금방 벗겨져요. 짧은 판매 시연용.`},CrunchMango:{name:`망고`,sale:1.8,research:2.7,needResearch:750,effort:1.6,note:`두꺼운 곡면. 연구 실험 성과가 커요.`},JumboCheese:{name:`점보 치즈`,sale:5,research:4.6,needResearch:2200,effort:3.1,note:`가장 크고 오래 걸려요. 두 목적 모두 보상이 커요.`}},coatings:{classic:{name:`바삭 코팅`,mult:1,feel:`보통 힘에 바삭하게 갈라져요.`},soft:{name:`사르르 코팅`,mult:.85,feel:`얇고 잘 바스러져요. 살짝 눌러도 깨지고 속살이 깊게 눌려요. 보상은 조금 낮아요.`},hard:{name:`단단 코팅`,mult:1.45,feel:`두껍고 잘 붙어 있어요. 오래 꾹 눌러야 깨지지만 보상이 커요.`}},zones:{counter:{name:`판매대`,baseCap:3,role:`코인을 벌고, 판매할 때마다 손님 리뷰를 받아요.`},lab:{name:`연구 책상`,baseCap:2,role:`말랑이 연구 진척을 쌓아요.`},coating:{name:`코팅 작업실`,baseCap:2,role:`직접 파쇄 보상을 늘리고 재코팅 시간을 줄여요.`},showroom:{name:`체험·전시 구역`,baseCap:2,role:`수요와 판매 단가, 손님 만족(별점)을 올려요.`}},unlocks:{hire3:{name:`세 번째 일꾼 고용`,cost:40,needReviews:40,desc:`일꾼 +1 (대기실로 와요).`},hire4:{name:`네 번째 일꾼 고용`,cost:160,needReviews:200,desc:`일꾼 +1.`},hire5:{name:`다섯 번째 일꾼 고용`,cost:1500,needReviews:2200,needStars:3.7,desc:`일꾼 +1.`},hire6:{name:`여섯 번째 일꾼 고용`,cost:5e3,needReviews:4800,needStars:3.8,desc:`일꾼 +1.`},hire7:{name:`일곱 번째 일꾼 고용`,cost:5e3,needReviews:5300,needStars:3.9,desc:`일꾼 +1.`},hire8:{name:`여덟 번째 일꾼 고용`,cost:7e3,needReviews:6500,needStars:4,desc:`일꾼 +1.`},hire9:{name:`아홉 번째 일꾼 고용`,cost:9500,needReviews:8e3,needStars:4.1,desc:`일꾼 +1.`},hire10:{name:`열 번째 일꾼 고용`,cost:13e3,needReviews:9e3,needStars:4.2,desc:`일꾼 +1 (최대 10명).`},onboard1:{name:`입문 교육 1단계`,cost:180,needResearch:120,desc:`현재·앞으로 고용할 모든 일꾼의 입문 등급 경험 ×2. 즉시 생산 변화는 없어요.`},onboard2:{name:`입문 교육 2단계`,cost:600,needResearch:750,needBought:`onboard1`,desc:`입문 등급 경험 ×2에 더해 익숙 등급 경험 ×1.5. 능숙 이상은 그대로예요.`},"zone-coating":{name:`코팅 작업실 설치`,cost:120,needResearch:50,desc:`세 번째 배치 구역. 직접 파쇄 보상 +25%/+15%, 재코팅 6→3→2초.`},"zone-showroom":{name:`체험·전시 구역 개방`,cost:500,needReviews:1e3,needStars:3.5,desc:`네 번째 배치 구역. 수요 +0.9/+0.7, 판매 단가 +10%/+8%, 손님 만족 +0.4/+0.3★. 판매 시연 예산 +25%.`},"counter-plus":{name:`판매대 확장`,cost:150,needReviews:150,capAdd:1,capDemand:.6,desc:`판매대 정원 +1, 기본 수요 +0.6/초, 판매 시연 예산 +25%.`},"counter-plus2":{name:`판매대 2차 확장`,cost:1500,needReviews:3e3,needStars:3.7,needBought:`counter-plus`,capAdd:2,capDemand:.5,desc:`판매대 정원 +2 (4→6명), 기본 수요 +0.5/초.`},"lab-plus":{name:`연구 책상 넓히기`,cost:240,needResearch:110,capAdd:1,desc:`연구 책상 정원 +1, 연구 실험 예산 +25%.`},"lab-plus2":{name:`연구 책상 증설`,cost:2e3,needResearch:1500,needBought:`lab-plus`,capAdd:1,desc:`연구 책상 정원 +1 (3→4명). 네 번째 자리는 기본 +0.05/초로 조금 느려요.`},"coating-plus":{name:`코팅 작업대 추가`,cost:1200,needResearch:1100,needBought:`zone-coating`,capAdd:1,desc:`코팅 작업실 정원 +1 (2→3명). 세 번째 인원은 직접 파쇄 보상 +10%, 재코팅 2→1.5초.`},"counter-equip":{name:`포장 기계`,cost:25,needReviews:200,desc:`선물 포장으로 판매 단가가 오르고, 판매 시연 보상도 같은 배수로 올라요. 단계마다 +10%.`},"lab-equip":{name:`연구 현미경`,cost:40,needResearch:120,desc:`연구 책상 속도가 오르고, 연구 실험 보상도 같은 배수로 올라요. 단계마다 +15%.`},"counter-master":{name:`포장 기계 개량 I`,cost:1250,needReviews:200,needLevel:5,desc:`포장 기계 효과 ×2 (판매 단가·판매 시연 보상).`},"counter-master2":{name:`포장 기계 개량 II`,cost:12500,needReviews:200,needLevel:25,desc:`포장 기계 효과 한 번 더 ×2.`},"lab-master":{name:`현미경 개량 I`,cost:2e3,needResearch:120,needLevel:5,desc:`연구 현미경 효과 ×2 (연구 책상 속도·연구 실험 보상).`},"showroom-plus":{name:`전시 구역 확장`,cost:5e3,needReviews:6e3,needStars:3.9,needBought:`zone-showroom`,capAdd:1,desc:`전시 구역 정원 +1, 판매 시연 예산 +25%.`},"showroom-plus2":{name:`전시 구역 2차 확장`,cost:8e3,needReviews:7e3,needStars:4.1,needBought:`showroom-plus`,capAdd:1,desc:`전시 구역 정원 +1 (3→4명). 네 번째 인원은 수요 +0.4/초, 단가 +5%.`},"coat-soft":{name:`사르르 코팅 레시피`,cost:30,needResearch:30,desc:`얇고 잘 바스러지는 코팅을 작업대에서 고를 수 있어요.`},"tool-wide":{name:`넓은 누르개`,cost:280,needResearch:180,desc:`한 번 누를 때 더 넓게, 더 깊게 갈라져요.`},"coat-hard":{name:`단단 코팅 레시피`,cost:2e3,needResearch:800,desc:`두껍고 잘 붙는 코팅. 오래 눌러야 깨지지만 보상 ×1.45.`}},fields:{counter:{short:`판매`,upgrade:`응대 요령`,baseCost:60,buyEffect:`처리량 +20%p`,rankEffect:`처리량 +5%p`},lab:{short:`연구`,upgrade:`실험 절차`,baseCost:80,buyEffect:`연구 능력 +20%p`,rankEffect:`연구 능력 +5%p`},coating:{short:`코팅`,upgrade:`준비 솜씨`,baseCost:100,buyEffect:`준비 속도 +20%p`,rankEffect:`직접 보상 지원 +5%p`},showroom:{short:`전시`,upgrade:`안내 구성`,baseCost:100,buyEffect:`수요 유입 +20%p`,rankEffect:`단가 지원 +5%p`}}},t=e.consts,n=[`counter`,`lab`,`coating`,`showroom`],r=[`idle`,...n],i=[{id:`staff`,name:`일꾼`,lead:`일꾼이 늘면 더 많은 구역을 돌려요.`,empty:`고용할 수 있는 일꾼을 모두 모았어요.`},{id:`space`,name:`공간 개방`,lead:`새 구역을 열어요. 일꾼을 옮겨야 효과가 나요.`,empty:`가게의 모든 공간을 열었어요.`},{id:`models`,name:`말랑이 해금`,lead:`연구 조건을 채우면 무료로 열려요.`,empty:`모든 말랑이를 열었어요.`},{id:`facility`,name:`배치·설비`,lead:`열린 구역의 자리·효율을 높여요.`,empty:`모든 설비를 최고 단계까지 갖췄어요.`},{id:`direct`,name:`코팅·도구`,lead:`직접 파쇄용 코팅과 도구예요.`,empty:`모든 코팅과 도구를 갖췄어요.`}],a=new Map(i.map(e=>[e.id,e])),o=[`Butter`,`Chocolate`,`Peach`,`Corn`,`CrunchMango`,`JumboCheese`].map(t=>({id:t,...e.models[t]})),s=t=>({id:t,preset:t,...e.coatings[t]}),c={classic:s(`classic`),soft:s(`soft`),hard:s(`hard`)},l={hand:{id:`hand`,name:`손끝`,sim:{reach:.85,operations:3,detachReach:.78,depth:1},feel:`누른 곳 주변만 갈라져요.`},wide:{id:`wide`,name:`넓은 누르개`,sim:{reach:1.2,operations:5,detachReach:1.02,depth:1.25},feel:`한 번에 더 넓은 범위가 깊게 눌리고 갈라져요.`}},u=t=>({id:t,...e.zones[t]}),d={counter:u(`counter`),lab:u(`lab`),coating:u(`coating`),showroom:u(`showroom`)},f=t.RATES,p={...t.RATING,min:1,max:5},m={...t.WORK,historyLimit:30},h={"counter-equip":{...t.REPEAT[`counter-equip`],what:`판매 단가`},"lab-equip":{...t.REPEAT[`lab-equip`],what:`연구 책상 속도`}},g=t.CC.masteryMult,_=t.CC.priceIncrease,v=[[`hire3`,`hire`,`staff`],[`hire4`,`hire`,`staff`],[`hire5`,`hire`,`staff`],[`hire6`,`hire`,`staff`],[`hire7`,`hire`,`staff`],[`hire8`,`hire`,`staff`],[`hire9`,`hire`,`staff`],[`hire10`,`hire`,`staff`],[`onboard1`,`training`,`staff`],[`onboard2`,`training`,`staff`],[`zone-coating`,`zone`,`space`],[`zone-showroom`,`zone`,`space`,{tier:`shop`}],[`counter-plus`,`expand`,`facility`,{tier:`shop`,cap:`counter`}],[`counter-plus2`,`expand`,`facility`,{cap:`counter`}],[`lab-plus`,`expand`,`facility`,{tier:`lab`,cap:`lab`}],[`lab-plus2`,`expand`,`facility`,{cap:`lab`}],[`coating-plus`,`expand`,`facility`,{cap:`coating`}],[`counter-equip`,`equip`,`facility`,{repeat:`counter-equip`}],[`lab-equip`,`equip`,`facility`,{repeat:`lab-equip`}],[`counter-master`,`mastery`,`facility`,{level:`counter-equip`}],[`counter-master2`,`mastery`,`facility`,{level:`counter-equip`}],[`lab-master`,`mastery`,`facility`,{level:`lab-equip`}],[`showroom-plus`,`expand`,`facility`,{tier:`shop`,cap:`showroom`}],[`showroom-plus2`,`expand`,`facility`,{cap:`showroom`}],[`coat-soft`,`coating`,`direct`],[`tool-wide`,`tool`,`direct`],[`coat-hard`,`coating`,`direct`]].map(([t,n,r,i={}])=>{let a=e.unlocks[t];if(!a)throw Error(`balance.xlsx 해금 시트에 ${t}가 없어요`);let o={id:t,kind:n,category:r,name:a.name,cost:a.cost,desc:a.desc};return a.needReviews!==void 0&&(o.needReviews=a.needReviews),a.needStars!==void 0&&(o.needStars=a.needStars),a.needResearch!==void 0&&(o.needResearch=a.needResearch),a.needBought!==void 0&&(o.needBought=a.needBought),i.level&&a.needLevel!==void 0&&(o.needLevel={id:i.level,level:a.needLevel}),i.tier&&(o.tier=i.tier),i.repeat&&(o.repeat=h[i.repeat]),i.cap&&(o.cap={zone:i.cap,add:a.capAdd??0,...a.capDemand?{demand:a.capDemand}:{}}),o}),y=new Map(v.map(e=>[e.id,e])),b=new Map(o.map(e=>[e.id,e]));v.filter(e=>e.repeat).map(e=>e.id);function x(e,t){return Math.ceil(e.cost*_**+Math.max(0,t))}var S=t=>({zone:t,...e.fields[t]}),C={counter:S(`counter`),lab:S(`lab`),coating:S(`coating`),showroom:S(`showroom`)},w={...t.STAFF,maxUpgrade:3,maxXp:t.STAFF.rankXp[t.STAFF.rankXp.length-1],rankNames:[`입문`,`익숙`,`능숙`,`전문`]},T=()=>Object.fromEntries(n.map(e=>[e,{upgrade:0,xp:0}])),E=(e,t)=>({id:e,place:t,fields:T()});function D(){return{schemaVersion:4,seconds:0,coins:0,salesTotal:0,rating:p.start,bestRating:p.start,reviews:0,research:0,directCoins:0,directResearch:0,workers:Array.from({length:f.startWorkers},(e,t)=>E(t+1,t===0?`counter`:`lab`)),bought:[],levels:{},session:null,nextSessionId:1,sessionsCompleted:0,history:[],prefs:{purpose:`sale`,model:`Butter`,coating:`classic`,tool:`hand`},moves:0,tried:[],debugUsed:!1}}var O=Object.freeze({upgrade:0,xp:0}),k=(e,t)=>e.fields?.[t]??O;function A(e,t){return e.fields||=T(),e.fields[t]??={upgrade:0,xp:0}}function ee(e){let t=0;for(let n=1;n<w.rankXp.length;n++)e>=w.rankXp[n]&&(t=n);return t}var j=(e,t)=>ee(k(e,t).xp),M=(e,t)=>k(e,t).upgrade,te=w.rankXp.length-1,ne=e=>w.rankXp[ee(e)],re=e=>w.rankXp.find(t=>t>e)??w.maxXp,ie=(e,t)=>1+w.upgradeStep*M(e,t),ae=(e,t)=>1+w.rankStep*j(e,t),oe=(e,t)=>1+w.upgradeStep*M(e,t)+w.rankStep*j(e,t);function se(e,t){let n=t.slice().sort((e,t)=>t-e),r=0;for(let t=0;t<n.length&&t<e.length;t++)r+=e[t]*n[t];return r}var ce=e=>e.bought.includes(`onboard2`)?2:+!!e.bought.includes(`onboard1`);function le(e,t){return e>=te?0:w.onboardingMult[Math.max(0,Math.min(2,t))][e]}function ue(e,t,n){let r=e.xp,i=t;for(let t=0;i>1e-12&&e.xp<w.maxXp&&t<8;t++){let t=le(ee(e.xp),n);if(t<=0)break;let r=re(e.xp),a=(r-e.xp)/t;i>=a-1e-12?(e.xp=r,i-=a):(e.xp+=i*t,i=0)}return e.xp>w.maxXp&&(e.xp=w.maxXp),e.xp-r}var de=(e,t)=>Math.ceil(C[e].baseCost*w.costGrowth**+Math.max(0,t));function fe(e){let t=Math.min(1,Math.max(0,Number(e.cracked)||0)),n=Math.min(1,Math.max(0,Number(e.removed)||0));return m.crackWeight*t+(1-m.crackWeight)*n}function pe(e,t){let n=b.get(t.model),r=ke(e),i=t.purpose===`sale`?m.saleBase:m.researchBase,a=t.purpose===`sale`?tt(e):nt(e),o=t.purpose===`sale`?n.sale:n.research,s=c[t.coating].mult,l=1+r.coatingBonus,u=i*a*o*s*l;return{total:u,budget:u*(1-m.bonusShare),bonus:u*m.bonusShare,prepSeconds:r.prepSeconds,parts:{base:i,tier:a,model:o,coating:s,support:l}}}function me(e,t){if(e.session&&e.session.status!==`complete`)return{ok:!1,reason:`busy`};if(!Xe(e,t.model))return{ok:!1,reason:`model`};if(!Ze(e,t.coating))return{ok:!1,reason:`coating`};if(!Qe(e,t.tool))return{ok:!1,reason:`tool`};let n=pe(e,t),r={id:e.nextSessionId++,...t,budget:n.budget,bonus:n.bonus,completeAt:m.completeAt,credited:0,paid:0,bonusPaid:!1,status:n.prepSeconds>0?`preparing`:`active`,prepLeft:n.prepSeconds,startedAt:e.seconds,crew:Se(e,`coating`)?e.workers.filter(e=>e.place===`coating`).map(e=>e.id):[],training:ce(e),activeElapsed:0,xpCredited:0};e.session=r,e.prefs={...t};for(let n of[`model:${t.model}`,`coating:${t.coating}`,`tool:${t.tool}`])e.tried.includes(n)||e.tried.push(n);return{ok:!0,session:r}}function N(e,t){let n=e.session;if(n&&t>0){if(n.status===`preparing`){let e=Math.min(t,n.prepLeft);n.prepLeft-=e,t-=e,n.prepLeft<=1e-12&&(n.prepLeft=0,n.status=`active`)}n.status===`active`&&t>0&&(n.activeElapsed=(n.activeElapsed??0)+t)}}function he(e,t){if(!t.crew?.length)return 0;let n=Math.min(t.activeElapsed??0,w.coatingXpCap*(t.credited/t.completeAt)),r=n-(t.xpCredited??0);if(!(r>1e-12))return 0;t.xpCredited=n;for(let n of t.crew){let i=e.workers.find(e=>e.id===n);i&&ue(A(i,`coating`),r,t.training??0)}return r}function ge(e,t,n,r){n>0&&(t.purpose===`sale`?(e.coins+=n,e.salesTotal+=n,e.directCoins+=n):(e.research+=n,e.directResearch+=n),_e(e,{session:t.id,kind:r,purpose:t.purpose,amount:n,at:e.seconds}))}function _e(e,t){let n=e.history[e.history.length-1];if(n&&t.kind===`partial`&&n.kind===`partial`&&n.session===t.session){n.amount+=t.amount,n.at=t.at;return}e.history.push(t),e.history.length>m.historyLimit&&e.history.splice(0,e.history.length-m.historyLimit)}var P={paid:0,bonus:0,completed:!1,xp:0};function ve(e,t,n){let r=e.session;if(!r||r.id!==t||r.status!==`active`||!Number.isFinite(n))return P;let i=Math.min(Math.max(0,n),r.completeAt);if(i<=r.credited)return P;r.credited=i;let a=r.completeAt>0?r.budget*(r.credited/r.completeAt):r.budget,o=Math.max(0,Math.min(r.budget,a)-r.paid);r.paid+=o,ge(e,r,o,`partial`);let s=he(e,r),c=0,l=!1;return r.credited>=r.completeAt-1e-12&&!r.bonusPaid&&(r.credited=r.completeAt,r.bonusPaid=!0,r.status=`complete`,c=r.bonus,l=!0,e.sessionsCompleted++,ge(e,r,c,`bonus`),r.purpose===`sale`&&(e.reviews+=p.demoReviews,Me(e,p.max,p.demoPull))),{paid:o,bonus:c,completed:l,xp:s}}function F(e){let t=e.session;if(!t)return`none`;let n=t.status===`complete`?`complete`:`abandon`;return _e(e,{session:t.id,kind:n,purpose:t.purpose,amount:0,at:e.seconds}),e.session=null,n}var I=(e,t)=>e.bought.includes(t);function ye(e,t){return y.get(t)?.repeat?e.levels?.[t]??0:+!!I(e,t)}function be(e,t){let n=y.get(t);return n?n.repeat?ye(e,t)>=n.repeat.maxLevel:I(e,t):!1}function xe(e,t){return e.workers.reduce((e,n)=>e+ +(n.place===t),0)}function Se(e,t){return t===`counter`||t===`lab`||t===`coating`&&I(e,`zone-coating`)||t===`showroom`&&I(e,`zone-showroom`)}function Ce(e,t){return d[t].baseCap+v.reduce((n,r)=>n+(r.cap?.zone===t&&I(e,r.id)?r.cap.add:0),0)}function we(e,t){let n=v.filter(n=>n.kind===`mastery`&&n.needLevel?.id===t&&I(e,n.id)).length;return(1+h[t].perLevel*ye(e,t))*g**+n}var Te=e=>we(e,`counter-equip`),Ee=e=>we(e,`lab-equip`),De=(e,t)=>Se(e,t)?e.workers.filter(e=>e.place===t):[];function Oe(e){let t=f.prepSeconds[Math.min(e.length,f.prepSeconds.length-1)];if(!e.length)return t;let n=e.reduce((e,t)=>e+ie(t,`coating`),0)/e.length;return Math.max(w.minPrep,t/n)}function ke(e){let t=De(e,`counter`),n=De(e,`lab`),r=De(e,`coating`),i=De(e,`showroom`),a=t.length,s=n.length,c=i.length,l=f.counterPerWorker*t.reduce((e,t)=>e+oe(t,`counter`),0),u=se(f.showroomDemand,i.map(e=>ie(e,`showroom`))),d=se(f.showroomPrice,i.map(e=>ae(e,`showroom`))),m=f.baseDemand+v.reduce((t,n)=>t+(n.cap?.demand&&I(e,n.id)?n.cap.demand:0),0),h=je(e.rating),g=(m+u)*h,_=Te(e),y=(1+d)*_,b=Math.min(l,g),x=Ee(e),S=se(f.lab,n.map(e=>oe(e,`lab`)))*x,C=g>0?Math.min(1,l/g):0,w=p.service*C,T=se(p.showroom,i.map(e=>ae(e,`showroom`))),E=p.variety*Math.max(0,o.filter(t=>e.research>=t.needResearch).length-1),D=Ae(p.base+w+T+E);return{coins:b*y,research:S,counter:{workers:a,throughput:l,demand:g,sold:b,price:y,capped:a>0&&l>g+1e-9,idle:a===0},lab:{workers:s,perSec:S,mult:x},coatingBonus:se(f.coatingBonus,r.map(e=>ae(e,`coating`))),prepSeconds:Oe(r),showroom:{workers:c,demandAdd:u,priceAdd:d,noCounter:c>0&&a===0},pack:_,rating:{current:e.rating,target:D,demandMult:h,serviceRatio:C,base:p.base,service:w,showroom:T,variety:E,reviews:b*p.reviewsPerSale}}}var Ae=e=>Math.min(p.max,Math.max(p.min,e)),je=e=>Math.max(0,1+p.demandPerStar*(e-3));function Me(e,t,n){let r=e.rating+(t-e.rating)*Math.min(1,Math.max(0,n));Math.abs(t-r)<.001&&(r=t),e.rating=Ae(r),e.rating>e.bestRating&&(e.bestRating=e.rating)}function Ne(e){return!(e.counter.sold>0)||Math.abs(e.rating.target-e.rating.current)<.001?0:e.rating.target>e.rating.current?1:-1}var Pe=Math.max(...v.map(e=>e.needResearch??0),...o.map(e=>e.needResearch),...w.upgradeNeedResearch),Fe=e=>e.research<Pe;function Ie(e,t,n=ke(e),r=ce(e)){let i=t.place;if(i===`idle`||!Se(e,i))return{field:null,base:0,rate:0,reason:`idle`};let a=0,o=`working`;if(i===`counter`)n.counter.sold>0?(a=Math.min(1,n.counter.demand/n.counter.throughput),a<1-1e-9&&(o=`partial`)):o=`no-sales`;else if(i===`lab`)Fe(e)?a=1:o=`research-done`;else if(i===`showroom`)n.counter.sold>0?a=1:o=`no-sales`;else{let n=e.session,r=!!n?.crew?.includes(t.id);o=!n||n.status===`complete`?`coating-wait`:r?n.status===`active`?`coating-session`:`coating-wait`:`coating-next`}let s=le(j(t,i),r);return s===0?{field:i,base:0,rate:0,reason:`max`}:{field:i,base:a,rate:a*s,reason:o}}function Le(e,t){if(!(t>0)||!Number.isFinite(t))return;let n=t,r=512+2*Math.ceil(t/1);for(let t=0;n>0&&t<r;t++){let i=ke(e),a=ce(e),o=e.workers.map(t=>({w:t,f:Ie(e,t,i,a)})).filter(e=>e.f.rate>0),s=n;for(let{w:e,f:t}of o){let n=A(e,t.field).xp;s=Math.min(s,(re(n)-n)/t.rate)}i.research>0&&Fe(e)&&o.some(e=>e.f.field===`lab`)&&(s=Math.min(s,(Pe-e.research)/i.research));let c=(Math.floor(e.seconds/1+1e-9)+1)*1;s=Math.min(s,c-e.seconds),t===r-1&&(s=n),s=Math.max(0,Math.min(n,s)),e.seconds+=s;let l=i.coins*s;e.coins+=l,e.salesTotal+=l,e.reviews+=i.rating.reviews*s,e.research+=i.research*s;for(let{w:e,f:t}of o){let n=A(e,t.field),r=re(n.xp);n.xp+=t.rate*s,n.xp>=r-1e-9&&(n.xp=Math.min(r,w.maxXp))}if(e.research>=Pe-1e-9&&e.research<Pe&&(e.research=Pe),N(e,s),e.seconds>=c-1e-9&&(e.seconds=c,i.counter.sold>0&&Me(e,i.rating.target,p.follow)),n-=s,n<1e-12)break}}function Re(e,t,r){let i=e.workers.find(e=>e.id===t);return i?r!==`idle`&&!n.includes(r)?{ok:!1,reason:`bad-place`}:i.place===r?{ok:!1,reason:`same`}:i.place===`coating`&&e.session&&e.session.status!==`complete`?{ok:!1,reason:`committed`}:r===`idle`?{ok:!0}:Se(e,r)?xe(e,r)>=Ce(e,r)?{ok:!1,reason:`full`}:{ok:!0}:{ok:!1,reason:`locked`}:{ok:!1,reason:`no-worker`}}function ze(e,t,n){let r=Re(e,t,n);return r.ok&&(e.workers.find(e=>e.id===t).place=n,e.moves++),r}function Be(e,t,n){let r=ke(e),i=Re(e,t,n);return i.ok?{result:i,before:r,after:ke({...e,workers:e.workers.map(e=>e.id===t?{...e,place:n}:e)})}:{result:i,before:r,after:r}}function Ve(e,t){let n=y.get(t);return n.repeat?x(n,ye(e,t)):n.cost}function He(e,t){let n=y.get(t);if(!n)throw Error(`unknown unlock ${t}`);let r=[];n.needReviews!==void 0&&e.reviews<n.needReviews&&r.push({kind:`reviews`,need:n.needReviews,have:e.reviews}),n.needStars!==void 0&&e.bestRating<n.needStars-1e-9&&r.push({kind:`stars`,need:n.needStars,have:e.bestRating}),n.needResearch!==void 0&&e.research<n.needResearch&&r.push({kind:`research`,need:n.needResearch,have:e.research}),n.needBought&&!I(e,n.needBought)&&r.push({kind:`bought`,need:n.needBought,have:``}),n.needLevel&&ye(e,n.needLevel.id)<n.needLevel.level&&r.push({kind:`level`,need:n.needLevel.id,level:n.needLevel.level,have:ye(e,n.needLevel.id)});let i=be(e,t),a=Ve(e,t),o=r.length===0,s=e.coins>=a,c=i?`done`:o?s?`ready`:`coins`:`locked`;return{def:n,bought:i,level:ye(e,t),maxLevel:n.repeat?.maxLevel??1,conditionMet:o,missing:r,cost:a,affordable:s,shortCoins:Math.max(0,a-e.coins),state:c}}function Ue(e,t){let n=y.get(t);if(!n)return{ok:!1,reason:`unknown`};if(be(e,t))return{ok:!1,reason:`already`};let r=He(e,t);return r.conditionMet?e.coins<r.cost?{ok:!1,reason:`coins`}:(e.coins-=r.cost,e.coins<1e-9&&(e.coins=0),n.repeat?e.levels={...e.levels,[t]:ye(e,t)+1}:e.bought.push(t),n.kind===`hire`&&e.workers.push(E(Math.max(0,...e.workers.map(e=>e.id))+1,`idle`)),{ok:!0,def:n,level:ye(e,t)}):{ok:!1,reason:`condition`}}function We(e,t){let n=structuredClone(e),r=y.get(t);return be(n,t)?n:(r.repeat?n.levels={...n.levels,[t]:ye(n,t)+1}:n.bought.push(t),r.kind===`hire`&&n.workers.push(E(Math.max(0,...n.workers.map(e=>e.id))+1,`idle`)),n)}function Ge(e,t,r){let i=e.workers.find(e=>e.id===t);if(!i||!n.includes(r))return null;let a=M(i,r),o=a>=w.maxUpgrade,s=de(r,a),c=[];Se(e,r)||c.push({kind:`zone`,need:r,have:``});let l=w.upgradeNeedResearch[Math.min(a,w.maxUpgrade-1)];!o&&e.research<l&&c.push({kind:`research`,need:l,have:e.research});let u=c.length===0,d=e.coins>=s,f=o?`done`:u?d?`ready`:`coins`:`locked`;return{workerId:t,zone:r,level:a,maxLevel:w.maxUpgrade,bought:o,cost:s,conditionMet:u,missing:c,affordable:d,shortCoins:Math.max(0,s-e.coins),state:f}}function Ke(e,t,n){let r=Ge(e,t,n);return r?r.bought?{ok:!1,reason:`already`}:r.conditionMet?e.coins<r.cost?{ok:!1,reason:`coins`}:(e.coins-=r.cost,e.coins<1e-9&&(e.coins=0),A(e.workers.find(e=>e.id===t),n).upgrade++,{ok:!0,level:r.level+1,cost:r.cost}):{ok:!1,reason:`condition`}:{ok:!1,reason:`no-worker`}}function qe(e,t,n){let r=structuredClone(e),i=r.workers.find(e=>e.id===t);return i&&M(i,n)<w.maxUpgrade&&A(i,n).upgrade++,r}function Je(e){return e.workers.filter(t=>n.some(n=>Ge(e,t.id,n)?.state===`ready`)).length}function Ye(e){return i.map(t=>{if(t.id===`models`)return{category:t.id,ready:0,open:o.filter(t=>!Xe(e,t.id)).length,total:o.length};let n=v.filter(e=>e.category===t.id).map(t=>He(e,t.id));return{category:t.id,ready:n.filter(e=>e.state===`ready`).length,open:n.filter(e=>e.state!==`done`).length,total:n.length}})}function Xe(e,t){let n=b.get(t);return!!n&&e.research>=n.needResearch}function Ze(e,t){return t===`classic`||I(e,`coat-${t}`)}function Qe(e,t){return t===`hand`||I(e,`tool-${t}`)}function $e(e){return 1+m.shopTierStep*v.filter(t=>t.tier===`shop`&&I(e,t.id)).length}function et(e){return 1+m.labTierStep*v.filter(t=>t.tier===`lab`&&I(e,t.id)).length}function tt(e){return $e(e)*Te(e)}function nt(e){return et(e)*Ee(e)}var rt=class{previous;active=!1;state;now;constructor(e,t){this.state=e,this.now=t,this.previous=t()}settle(){let e=this.now();this.active&&Le(this.state,Math.max(0,e-this.previous)/1e3),this.previous=e}get isActive(){return this.active}setActive(e){this.settle(),this.active=e}replace(e){this.settle(),this.state=e}input(e,t){return this.settle(),this.active?e(this.state):t}},it=class{owned=!1;releaseLock;pending=!1;changed;constructor(e){this.changed=e}async acquire(){return this.owned||this.pending||!navigator.locks?this.owned:(this.pending=!0,new Promise(e=>{navigator.locks.request(`wakppu.claude.shop.v0_8.owner`,{ifAvailable:!0},async t=>{if(this.pending=!1,!t){e(!1);return}this.owned=!0;let n=new Promise(e=>{this.releaseLock=e});this.changed(!0),e(!0),await n}).catch(()=>{this.pending=!1,e(!1)})}))}release(){this.owned&&(this.changed(!1),this.owned=!1,this.releaseLock?.(),this.releaseLock=void 0)}},at=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0,ot=e=>at(e)&&Number.isInteger(e),st=(e,t)=>typeof e==`string`&&t.includes(e),ct=[`sale`,`research`];function lt(e){let t=e.fields;return!t||typeof t!=`object`||Array.isArray(t)||Object.keys(t).length!==n.length?!1:n.every(e=>{let n=t[e];return!!n&&ot(n.upgrade)&&n.upgrade<=w.maxUpgrade&&at(n.xp)})}function ut(e,t,n){if(e===null)return!0;if(!e||typeof e!=`object`)return!1;let r=e;return!Array.isArray(r.crew)||new Set(r.crew).size!==r.crew.length||!r.crew.every(e=>ot(e)&&n.has(e))||!ot(r.training)||r.training>2||!at(r.activeElapsed)||!at(r.xpCredited)||r.completeAt>0&&r.xpCredited>Math.min(r.activeElapsed,w.coatingXpCap*r.credited/r.completeAt)+1e-6?!1:ot(r.id)&&r.id>=1&&r.id<t&&st(r.purpose,ct)&&b.has(r.model)&&r.coating in c&&r.tool in l&&[r.budget,r.bonus,r.completeAt,r.credited,r.paid,r.prepLeft,r.startedAt].every(at)&&r.completeAt>0&&r.completeAt<=1&&r.credited<=r.completeAt+1e-9&&r.paid<=r.budget*(1+1e-9)+1e-9&&typeof r.bonusPaid==`boolean`&&st(r.status,[`preparing`,`active`,`complete`])&&r.status===`complete`===r.bonusPaid}function dt(e){if(!e||typeof e!=`object`)return!1;let t=e;if(t.schemaVersion!==4||typeof t.debugUsed!=`boolean`||![t.seconds,t.coins,t.salesTotal,t.reviews,t.research,t.directCoins,t.directResearch].every(at)||!at(t.rating)||!at(t.bestRating)||t.rating<p.min||t.bestRating>p.max||t.rating>t.bestRating+1e-9||!ot(t.nextSessionId)||t.nextSessionId<1||!ot(t.sessionsCompleted)||!t.debugUsed&&t.coins>t.salesTotal*(1+1e-9)+1e-6||!Array.isArray(t.workers)||t.workers.length<1||t.workers.length>32)return!1;let i=new Set;for(let e of t.workers){if(!e||!ot(e.id)||i.has(e.id)||!st(e.place,r)||!lt(e))return!1;i.add(e.id)}if(!Array.isArray(t.bought)||new Set(t.bought).size!==t.bought.length||!t.bought.every(e=>y.has(e)&&!y.get(e).repeat)||!t.levels||typeof t.levels!=`object`||Array.isArray(t.levels))return!1;for(let[e,n]of Object.entries(t.levels)){let t=y.get(e);if(!t?.repeat||!ot(n)||n>t.repeat.maxLevel)return!1}let a=t.bought.filter(e=>y.get(e).kind===`hire`).length;if(t.workers.length!==2+a)return!1;for(let e of n){let n=t.workers.filter(t=>t.place===e).length;if(n>0&&(!Se(t,e)||n>Ce(t,e)))return!1}if(!ut(t.session,t.nextSessionId,i)||!Array.isArray(t.history)||t.history.length>m.historyLimit||!t.history.every(e=>e&&ot(e.session)&&at(e.amount)&&at(e.at)&&st(e.purpose,ct)&&st(e.kind,[`partial`,`bonus`,`abandon`,`complete`]))||!ot(t.moves)||!Array.isArray(t.tried)||t.tried.length>32||!t.tried.every(e=>typeof e==`string`&&e.length<40))return!1;let o=t.prefs;return!!o&&st(o.purpose,ct)&&b.has(o.model)&&o.coating in c&&o.tool in l}var ft=`wakppu.claude.shop.v0_8.save`,pt=`wakppu.claude.shop.v0_8.settings`,mt=`wakppu.claude.shop.v0_8.corrupt-backup`,ht=[1,1.2,1.4,1.6],gt=()=>({master:.8,direct:1,auto:.6,ui:.6,muted:!1,reducedMotion:!1,quality:`high`,textScale:1.2,benchStyle:`sketch`}),_t=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0&&e<=1;function vt(e){if(!e||typeof e!=`object`)return!1;let t=e;return[t.master,t.direct,t.auto,t.ui].every(_t)&&typeof t.muted==`boolean`&&typeof t.reducedMotion==`boolean`&&(t.quality===`high`||t.quality===`low`)&&ht.includes(t.textScale)&&(t.benchStyle===`sketch`||t.benchStyle===`solid`)}var yt=class{port;constructor(e){this.port=e}load(){let e;try{e=this.port().getItem(ft)}catch{return{kind:`unavailable`}}if(e===null)return{kind:`empty`};try{let t=JSON.parse(e);if(dt(t))return{kind:`ok`,data:t}}catch{}return{kind:`invalid`,raw:e}}save(e){try{return this.port().setItem(ft,JSON.stringify(e)),!0}catch{return!1}}backupInvalid(e){try{return this.port().setItem(mt,e),!0}catch{return!1}}loadSettings(){try{let e=this.port().getItem(pt),t=e?JSON.parse(e):null;return t&&typeof t==`object`&&!(`benchStyle`in t)&&(t.benchStyle=`sketch`),vt(t)?t:gt()}catch{return gt()}}saveSettings(e){try{return this.port().setItem(pt,JSON.stringify(e)),!0}catch{return!1}}},bt=[``,`만`,`억`,`조`,`경`,`해`,`자`,`양`,`구`,`간`,`정`,`재`,`극`,`항하사`,`아승기`,`나유타`,`불가사의`,`무량대수`];function xt(e){return Number.isFinite(e)&&e>0?e:0}function L(e,t=1){let n=xt(e);if(n<1e3){let e=10**t,r=Math.floor(n*e+1e-9)/e;return r%1==0?String(r):r.toFixed(t).replace(/0+$/,``)}if(n<1e4)return Math.floor(n).toLocaleString(`en-US`);let r=Math.floor(Math.log10(n)/4),i=n/10**(r*4);if(i>=1e4&&(r++,i/=1e4),r>=bt.length)return n.toExponential(2).replace(`+`,``);let a=bt[r];if(i>=1e3)return`${Math.floor(i).toLocaleString(`en-US`)}${a}`;let o=i>=100?1:2,s=10**o;return`${(Math.floor(i*s+1e-9)/s).toFixed(o).replace(/\.?0+$/,``)}${a}`}function R(e){let t=xt(e);if(t<1e4)return Math.ceil(t).toLocaleString(`en-US`);let n=Math.floor(Math.log10(t)/4),r=t/10**(n*4);if(r>=1e4&&(n++,r/=1e4),n>=bt.length)return t.toExponential(2).replace(`+`,``);let i=r>=1e3?0:r>=100?1:2,a=10**i,o=Math.ceil(r*a-1e-9)/a;return o>=1e4&&n+1<bt.length&&(o/=1e4,n++),`${i===0?Math.ceil(o).toLocaleString(`en-US`):o.toFixed(i).replace(/\.?0+$/,``)}${bt[n]}`}function St(e){return(Math.floor(xt(e)*10+1e-6)/10).toFixed(1)}var Ct=e=>Math.max(0,Math.min(1,e)),wt=(e,t,n)=>e+(t-e)*Ct(n),Tt=class{constructor(e=40817){let t=this.a=Array(56).fill(0),n=161803398-Math.abs(e),r=1;t[55]=n;for(let e=1;e<55;e++){let i=21*e%55;t[i]=r,r=n-r,r<0&&(r+=2147483647),n=t[i]}for(let e=0;e<4;e++)for(let e=1;e<56;e++)t[e]-=t[1+(e+30)%55],t[e]<0&&(t[e]+=2147483647);this.i=0,this.j=21}sample(){++this.i>=56&&(this.i=1),++this.j>=56&&(this.j=1);let e=this.a[this.i]-this.a[this.j];return e===2147483647&&e--,e<0&&(e+=2147483647),this.a[this.i]=e,e/2147483647}next(e){return Math.floor(this.sample()*e)}},Et=class{constructor(e,t){this.bank=e,this.emit=t,this.random=new Tt,this.ends=Array(16).fill(0),this.gains=Array(16).fill(0),this.lastGrain=this.lastCrackVariant=this.lastPeelVariant=-1,this.lastCrackTime=this.lastProgressInputTime=-10,this.nextCrackTime=this.nextPeelTime=this.nextProgressTime=this.recordedVoiceEndTime=0,this.pendingProgress=this.pendingIntensity=0}variant(e){return this[e]=this[e]<0?this.random.next(6):(this[e]+1+this.random.next(5))%6,this[e]}reserve(e,t,n){let r=0,i=-1;for(let e=0;e<16;e++)this.ends[e]<=t&&(this.gains[e]=0,i<0&&(i=e)),r+=this.gains[e];let a=Math.min(Math.max(0,e),Math.max(0,.72-r));return i<0||a<.012?0:(this.gains[i]=a,this.ends[i]=t+n,a)}limited(e,t,n){if(e===void 0||n<this.recordedVoiceEndTime)return;let r=this.bank.clips[e],i=r.frames/r.sampleRate,a=this.reserve(t,n,i);a<=0||(this.emit(e,a),this.recordedVoiceEndTime=n+i)}crack(e,t,n){if(t<=0||n<this.nextCrackTime)return;e=Ct(e),this.variant(`lastCrackVariant`);let r=this.bank.cracks[this.random.next(this.bank.cracks.length)],i=wt(.72,1,(n-this.lastCrackTime-.05)/.11);this.limited(r,wt(.24,.46,e)*i*(.92+.1*this.random.sample())*Ct(t),n),this.lastCrackTime=n,this.nextCrackTime=n+.035}peel(e,t,n){t<=0||n<this.nextPeelTime||(this.variant(`lastPeelVariant`),this.bank.peels.length&&this.limited(this.bank.peels[this.random.next(this.bank.peels.length)],wt(.05,.14,e)*Ct(t),n),this.nextPeelTime=n+.1)}progress(e,t,n,r){if(n<=0||t<=1e-5||(r-this.lastProgressInputTime>.12&&(this.pendingProgress=this.pendingIntensity=0),this.lastProgressInputTime=r,this.pendingProgress=Ct(this.pendingProgress+t),this.pendingIntensity=Math.max(this.pendingIntensity,Ct(e)),r<this.nextProgressTime))return;let i=Math.sqrt(Ct(this.pendingProgress/.045)),a=this.pendingIntensity;if(r>=this.recordedVoiceEndTime&&this.gains.filter((e,t)=>e>0&&this.ends[t]>r).length<3&&this.bank.progress.length){let e=this.bank.progress.length;this.lastGrain=e<2?0:this.lastGrain<0?this.random.next(e):(this.lastGrain+1+this.random.next(e-1))%e;let t=this.bank.progress[this.lastGrain],o=this.bank.clips[t],s=wt(1.6,2.8,a)*wt(.6,1,i)*Ct(n),c=this.reserve(s*o.peak,r,o.frames/o.sampleRate);c>0&&this.emit(t,c/o.peak)}this.nextProgressTime=r+wt(.075,.055,a),this.pendingProgress=this.pendingIntensity=0}},Dt=class{constructor(){this.enabled=!0,this.volume=1,this.voices=new Set,this.events=0,this.loaded=!1,this.states=new Map,this.model=`Butter`,this.sweeping=!1,this.nextBrush=this.nextDebris=0,this.eventKinds={},this.preload=this.fetchBank()}fetchBank(){return this.loadError=null,Promise.all([fetch(`./assets/audio/unity-audio.json`).then(e=>{if(!e.ok)throw Error(`Unity audio bank unavailable`);return e.json()}),fetch(`./assets/audio/unity-pcm.bin`).then(e=>{if(!e.ok)throw Error(`Unity audio PCM unavailable`);return e.arrayBuffer()})]).catch(e=>(this.loadError=e,null))}retry(){return this.loaded||!this.context?this.loadPromise:(this.preload=this.fetchBank(),this.loadPromise=this.preload.then(e=>this.decode(e)),this.loadPromise)}async attach(e,t){this.context||(this.context=e,this.master=this.context.createGain(),this.master.gain.value=+!!this.enabled,this.master.connect(t),this.filter=this.context.createBiquadFilter(),this.filter.type=`lowpass`,this.filter.frequency.value=3600,this.filter.Q.value=0,this.filter.connect(this.master),this.loadPromise=this.preload.then(e=>this.decode(e))),await this.loadPromise}decode(e){if(!e)return;let[t,n]=e;this.bank=t,this.buffers=t.clips.map(e=>{let t=this.context.createBuffer(e.channels,e.frames,e.sampleRate),r=new DataView(n,e.offset,e.frames*e.channels*4);for(let n=0;n<e.channels;n++){let i=t.getChannelData(n);for(let t=0;t<e.frames;t++)i[t]=r.getFloat32((t*e.channels+n)*4,!0)}return t}),this.loaded=!0,this.select(this.model)}select(e){this.model=e,this.loaded&&(this.states.has(e)||this.states.set(e,new Et(this.bank,(e,t)=>this.play(e,t))),this.logic=this.states.get(e))}play(e,t,n=!1){if(!this.loaded||!this.enabled||this.context.state!==`running`)return;let r=this.context.createBufferSource(),i=this.context.createGain();r.buffer=this.buffers[e],r.playbackRate.value=1,i.gain.value=t,r.connect(i).connect(n?this.master:this.filter),r.broom=n,this.voices.add(r),r.onended=()=>{this.voices.delete(r),r.disconnect(),i.disconnect()},r.start(),this.events++;let a=this.bank.clips[e].kind;this.eventKinds[a]=(this.eventKinds[a]||0)+1}setEnabled(e){this.enabled=e,this.master&&(this.master.gain.value=+!!e)}available(){return this.loaded&&this.enabled&&this.context.state===`running`}crack(e=1){this.available()&&this.logic.crack(e,this.volume,this.context.currentTime)}progress(e,t){this.available()&&this.logic.progress(e,t,this.volume,this.context.currentTime)}peel(e){this.available()&&this.logic.peel(e,this.volume,this.context.currentTime)}beginSweep(){this.sweeping=!0,this.nextBrush=this.context?.currentTime||0,this.update()}endSweep(e=!1){if(this.sweeping=!1,e)for(let e of this.voices)e.broom&&e.stop()}update(){if(!this.sweeping||!this.available())return;let e=this.context.currentTime;e>=this.nextBrush&&(this.play(this.bank.brush,.34,!0),this.nextBrush=e+.48)}swept(e){if(!e||!this.available())return;let t=this.context.currentTime;t>=this.nextDebris&&(this.play(this.bank.debris,.34*Math.min(1,.5+e*.08),!0),this.nextDebris=t+.11)}suspend(){this.endSweep(!0)}stopAll(){for(let e of this.voices)try{e.stop()}catch{}}},Ot=class{tokens;rate;burst;constructor(e,t){this.rate=e,this.burst=t,this.tokens=t}refill(e){e>0&&Number.isFinite(e)&&(this.tokens=Math.min(this.burst,this.tokens+e*this.rate))}take(){return this.tokens>=1&&(--this.tokens,!0)}},kt=class{ctx;master;directBus;autoBus;uiBus;volumes={master:.8,direct:1,auto:.6,ui:.6,muted:!1};workerBucket=new Ot(.7,1);lastRefill=0;suspended=!1;crack=new Dt;workerSounds=0;get started(){return!!this.ctx&&this.ctx.state===`running`}get crackState(){let e=this.crack;return e.loaded?`ready`:e.loadError?`error`:this.ctx?`loading`:`idle`}async unlock(){if(!this.ctx){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=this.ctx=new e({latencyHint:`interactive`});this.master=t.createGain(),this.master.connect(t.destination),this.directBus=t.createGain(),this.directBus.connect(this.master),this.autoBus=t.createGain(),this.autoBus.connect(this.master),this.uiBus=t.createGain(),this.uiBus.connect(this.master),this.apply(),this.crack.attach(t,this.directBus)}this.ctx.state!==`running`&&!this.suspended&&await this.ctx.resume().catch(()=>void 0)}retryCrack(){return this.crack.retry()??Promise.resolve()}setVolumes(e){this.volumes={...e},this.apply()}apply(){if(!this.ctx)return;let e=this.ctx.currentTime,t=this.volumes;this.master.gain.setTargetAtTime(t.muted?0:t.master,e,.02),this.directBus.gain.setTargetAtTime(t.direct,e,.02),this.autoBus.gain.setTargetAtTime(t.auto*.18,e,.02),this.uiBus.gain.setTargetAtTime(t.ui*.5,e,.02)}setSuspended(e){this.suspended=e,e&&this.crack.suspend(),this.ctx&&(e?this.ctx.suspend().catch(()=>void 0):this.ctx.resume().catch(()=>void 0))}ready(){return this.ctx&&this.ctx.state===`running`?this.ctx:void 0}env(e,t,n,r,i){let a=e.createGain();return a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(n,t+r),a.gain.exponentialRampToValueAtTime(8e-4,t+r+i),a.gain.setValueAtTime(0,t+r+i+.005),a}tone(e,t,n,r){let i=this.ready();if(!i)return;let a=i.currentTime;for(let[o,s,c]of t){let t=a+s,l=i.createOscillator();l.type=c,l.frequency.setValueAtTime(o*.9,t),l.frequency.exponentialRampToValueAtTime(o,t+.02);let u=this.env(i,t,n,.004,r);l.connect(u),u.connect(e),l.start(t),l.stop(t+r+.05),l.onended=()=>{l.disconnect(),u.disconnect()}}}ui(e){this.uiBus&&this.tone(this.uiBus,{tap:[[620,0,`sine`]],toggle:[[520,0,`sine`],[700,.04,`sine`]],deny:[[190,0,`triangle`]],buy:[[660,0,`triangle`],[990,.05,`sine`]],pickup:[[540,0,`sine`]],drop:[[760,0,`sine`],[620,.04,`sine`]],reward:[[880,0,`sine`],[1320,.05,`sine`]],start:[[440,0,`triangle`],[660,.08,`triangle`],[880,.16,`sine`]],milestone:[[784,0,`sine`],[988,.08,`sine`],[1175,.16,`sine`]]}[e],e===`deny`?.35:.3,e===`tap`?.05:.11)}worker(e){let t=this.ready();return!t||(this.workerBucket.refill(t.currentTime-this.lastRefill),this.lastRefill=t.currentTime,!this.workerBucket.take())?!1:(this.tone(this.autoBus,{counter:[[1568,0,`sine`],[2093,.05,`sine`]],lab:[[392,0,`triangle`]],coating:[[523,0,`sine`]],showroom:[[1046,0,`sine`]]}[e],.25,.08),this.workerSounds++,!0)}},At=1e3,jt=1001,Mt=1002,Nt=1003,Pt=1004,Ft=1005,It=1006,Lt=1007,Rt=1008,zt=1009,Bt=1010,Vt=1011,Ht=1012,Ut=1013,Wt=1014,Gt=1015,Kt=1016,qt=1017,Jt=1018,Yt=1020,Xt=35902,Zt=35899,Qt=1021,$t=1022,en=1023,tn=1026,nn=1027,rn=1028,an=1029,on=1030,sn=1031,cn=1033,ln=33776,un=33777,dn=33778,fn=33779,pn=35840,mn=35841,hn=35842,gn=35843,_n=36196,vn=37492,yn=37496,bn=37808,xn=37809,Sn=37810,Cn=37811,wn=37812,Tn=37813,En=37814,Dn=37815,On=37816,kn=37817,An=37818,jn=37819,Mn=37820,Nn=37821,Pn=36492,Fn=36494,In=36495,Ln=36283,Rn=36284,zn=36285,Bn=36286,Vn=2300,Hn=2301,Un=2302,Wn=2400,Gn=2401,Kn=2402,qn=3200,Jn=3201,Yn=`srgb`,Xn=`srgb-linear`,Zn=`linear`,Qn=`srgb`,$n=7680,er=35044,tr=2e3,nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rr=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ir=1234567,ar=Math.PI/180,or=180/Math.PI;function sr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rr[e&255]+rr[e>>8&255]+rr[e>>16&255]+rr[e>>24&255]+`-`+rr[t&255]+rr[t>>8&255]+`-`+rr[t>>16&15|64]+rr[t>>24&255]+`-`+rr[n&63|128]+rr[n>>8&255]+`-`+rr[n>>16&255]+rr[n>>24&255]+rr[r&255]+rr[r>>8&255]+rr[r>>16&255]+rr[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function cr(e,t){return(e%t+t)%t}function lr(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ur(e,t,n){return e===t?0:(n-e)/(t-e)}function dr(e,t,n){return(1-n)*e+n*t}function fr(e,t,n,r){return dr(e,t,1-Math.exp(-n*r))}function pr(e,t=1){return t-Math.abs(cr(e,t*2)-t)}function mr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function hr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function gr(e,t){return e+Math.floor(Math.random()*(t-e+1))}function _r(e,t){return e+Math.random()*(t-e)}function vr(e){return e*(.5-Math.random())}function yr(e){e!==void 0&&(ir=e);let t=ir+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function br(e){return e*ar}function xr(e){return e*or}function Sr(e){return!(e&e-1)&&e!==0}function Cr(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function wr(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Tr(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Er(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Dr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Or={DEG2RAD:ar,RAD2DEG:or,generateUUID:sr,clamp:z,euclideanModulo:cr,mapLinear:lr,inverseLerp:ur,lerp:dr,damp:fr,pingpong:pr,smoothstep:mr,smootherstep:hr,randInt:gr,randFloat:_r,randFloatSpread:vr,seededRandom:yr,degToRad:br,radToDeg:xr,isPowerOfTwo:Sr,ceilPowerOfTwo:Cr,floorPowerOfTwo:wr,setQuaternionFromProperEuler:Tr,normalize:Dr,denormalize:Er},B=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ar=new V,jr=new kr,H=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mr.makeScale(e,t)),this}rotate(e){return this.premultiply(Mr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mr=new H;function Nr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Pr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Fr(){let e=Pr(`canvas`);return e.style.display=`block`,e}var Ir={};function Lr(e){e in Ir||(Ir[e]=!0,console.warn(e))}function Rr(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var zr=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Br=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vr(){let e={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Hr(e.r),e.g=Hr(e.g),e.b=Hr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ur(e.r),e.g=Ur(e.g),e.b=Ur(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Zn:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Lr(`THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Lr(`THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Xn]:{primaries:t,whitePoint:r,transfer:Zn,toXYZ:zr,fromXYZ:Br,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:r,transfer:Qn,toXYZ:zr,fromXYZ:Br,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),e}var U=Vr();function Hr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ur(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Wr,Gr=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Pr(`canvas`)),Wr.width=e.width,Wr.height=e.height;let t=Wr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Wr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Pr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Hr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Hr(t[e]/255)*255):t[e]=Hr(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Kr=0,qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kr++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Jr(r[t].image)):e.push(Jr(r[t]))}else e=Jr(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Jr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Gr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Yr=0,Xr=new V,Zr=class e extends nr{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=jt,i=jt,a=It,o=Rt,s=en,c=zt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yr++}),this.uuid=sr(),this.name=``,this.source=new qr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xr).x}get height(){return this.source.getSize(Xr).y}get depth(){return this.source.getSize(Xr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case At:e.x-=Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Mt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case At:e.y-=Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Mt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zr.DEFAULT_IMAGE=null,Zr.DEFAULT_MAPPING=300,Zr.DEFAULT_ANISOTROPY=1;var Qr=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$r=class extends nr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qr(0,0,e,t),this.scissorTest=!1,this.viewport=new Qr(0,0,e,t);let r=new Zr({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new qr(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},ei=class extends $r{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ti=class extends Zr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ni=class extends Zr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ri=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ai):ai.fromBufferAttribute(r,t),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),oi.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),oi.copy(e.boundingBox)),oi.applyMatrix4(e.matrixWorld),this.union(oi)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pi),mi.subVectors(this.max,pi),si.subVectors(e.a,pi),ci.subVectors(e.b,pi),li.subVectors(e.c,pi),ui.subVectors(ci,si),di.subVectors(li,ci),fi.subVectors(si,li);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-fi.z,fi.y,ui.z,0,-ui.x,di.z,0,-di.x,fi.z,0,-fi.x,-ui.y,ui.x,0,-di.y,di.x,0,-fi.y,fi.x,0];return!_i(t,si,ci,li,mi)||(t=[1,0,0,0,1,0,0,0,1],!_i(t,si,ci,li,mi))?!1:(hi.crossVectors(ui,di),t=[hi.x,hi.y,hi.z],_i(t,si,ci,li,mi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new V,new V,new V,new V,new V,new V,new V,new V],ai=new V,oi=new ri,si=new V,ci=new V,li=new V,ui=new V,di=new V,fi=new V,pi=new V,mi=new V,hi=new V,gi=new V;function _i(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){gi.fromArray(e,a);let o=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),s=t.dot(gi),c=n.dot(gi),l=r.dot(gi);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var vi=new ri,yi=new V,bi=new V,xi=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vi.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);let t=yi.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(yi,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(bi)),this.expandByPoint(yi.copy(e.center).sub(bi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Si=new V,Ci=new V,wi=new V,Ti=new V,Ei=new V,Di=new V,Oi=new V,ki=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ci.copy(e).add(t).multiplyScalar(.5),wi.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Ci);let i=e.distanceTo(t)*.5,a=-this.direction.dot(wi),o=Ti.dot(this.direction),s=-Ti.dot(wi),c=Ti.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ci).addScaledVector(wi,d),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),r=Si.dot(Si)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,r,i){Ei.subVectors(t,e),Di.subVectors(n,e),Oi.crossVectors(Ei,Di);let a=this.direction.dot(Oi),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);let s=o*this.direction.dot(Di.crossVectors(Ti,Di));if(s<0)return null;let c=o*this.direction.dot(Ei.cross(Ti));if(c<0||s+c>a)return null;let l=-o*Ti.dot(Oi);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ai=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/ji.setFromMatrixColumn(e,0).length(),i=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ni,e,Pi)}lookAt(e,t,n){let r=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),Fi.crossVectors(n,Li),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),Fi.crossVectors(n,Li)),Fi.normalize(),Ii.crossVectors(Li,Fi),r[0]=Fi.x,r[4]=Ii.x,r[8]=Li.x,r[1]=Fi.y,r[5]=Ii.y,r[9]=Li.y,r[2]=Fi.z,r[6]=Ii.z,r[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=ji.set(r[0],r[1],r[2]).length(),a=ji.set(r[4],r[5],r[6]).length(),o=ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Mi.copy(this);let s=1/i,c=1/a,l=1/o;return Mi.elements[0]*=s,Mi.elements[1]*=s,Mi.elements[2]*=s,Mi.elements[4]*=c,Mi.elements[5]*=c,Mi.elements[6]*=c,Mi.elements[8]*=l,Mi.elements[9]*=l,Mi.elements[10]*=l,t.setFromRotationMatrix(Mi),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=tr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=tr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ji=new V,Mi=new Ai,Ni=new V(0,0,0),Pi=new V(1,1,1),Fi=new V,Ii=new V,Li=new V,Ri=new Ai,zi=new kr,Bi=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ri.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ri,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zi.setFromEuler(this),this.setFromQuaternion(zi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER=`XYZ`;var Vi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Hi=0,Ui=new V,Wi=new kr,Gi=new Ai,Ki=new V,qi=new V,Ji=new V,Yi=new kr,Xi=new V(1,0,0),Zi=new V(0,1,0),Qi=new V(0,0,1),$i={type:`added`},ea={type:`removed`},ta={type:`childadded`,child:null},na={type:`childremoved`,child:null},ra=class e extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hi++}),this.uuid=sr(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Bi,r=new kr,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ai},normalMatrix:{value:new H}}),this.matrix=new Ai,this.matrixWorld=new Ai,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Xi,e)}rotateY(e){return this.rotateOnAxis(Zi,e)}rotateZ(e){return this.rotateOnAxis(Qi,e)}translateOnAxis(e,t){return Ui.copy(e).applyQuaternion(this.quaternion),this.position.add(Ui.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xi,e)}translateY(e){return this.translateOnAxis(Zi,e)}translateZ(e){return this.translateOnAxis(Qi,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(qi,Ki,this.up):Gi.lookAt(Ki,qi,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Gi),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($i),ta.child=e,this.dispatchEvent(ta),ta.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ea),na.child=e,this.dispatchEvent(na),na.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($i),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Ji),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Yi,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};ra.DEFAULT_UP=new V(0,1,0),ra.DEFAULT_MATRIX_AUTO_UPDATE=!0,ra.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ia=new V,aa=new V,oa=new V,sa=new V,ca=new V,la=new V,ua=new V,da=new V,fa=new V,pa=new V,ma=new Qr,ha=new Qr,ga=new Qr,_a=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ia.subVectors(e,t),r.cross(ia);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ia.subVectors(r,t),aa.subVectors(n,t),oa.subVectors(e,t);let a=ia.dot(ia),o=ia.dot(aa),s=ia.dot(oa),c=aa.dot(aa),l=aa.dot(oa),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sa)!==null&&sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,sa)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,sa.x),s.addScaledVector(a,sa.y),s.addScaledVector(o,sa.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ma.setScalar(0),ha.setScalar(0),ga.setScalar(0),ma.fromBufferAttribute(e,t),ha.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ma,i.x),a.addScaledVector(ha,i.y),a.addScaledVector(ga,i.z),a}static isFrontFacing(e,t,n,r){return ia.subVectors(n,t),aa.subVectors(e,t),ia.cross(aa).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),ia.cross(aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ca.subVectors(r,n),la.subVectors(i,n),da.subVectors(e,n);let s=ca.dot(da),c=la.dot(da);if(s<=0&&c<=0)return t.copy(n);fa.subVectors(e,r);let l=ca.dot(fa),u=la.dot(fa);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ca,a);pa.subVectors(e,i);let f=ca.dot(pa),p=la.dot(pa);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(la,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ua.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ua,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ca,a).addScaledVector(la,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},va={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ya={h:0,s:0,l:0},ba={h:0,s:0,l:0};function xa(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,U.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=U.workingColorSpace){return this.r=e,this.g=t,this.b=n,U.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=U.workingColorSpace){if(e=cr(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=xa(i,r,e+1/3),this.g=xa(i,r,e),this.b=xa(i,r,e-1/3)}return U.colorSpaceToWorking(this,r),this}setStyle(e,t=Yn){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){let n=va[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return U.workingToColorSpace(Sa.copy(this),e),Math.round(z(Sa.r*255,0,255))*65536+Math.round(z(Sa.g*255,0,255))*256+Math.round(z(Sa.b*255,0,255))}getHexString(e=Yn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=U.workingColorSpace){U.workingToColorSpace(Sa.copy(this),t);let n=Sa.r,r=Sa.g,i=Sa.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=U.workingColorSpace){return U.workingToColorSpace(Sa.copy(this),t),e.r=Sa.r,e.g=Sa.g,e.b=Sa.b,e}getStyle(e=Yn){U.workingToColorSpace(Sa.copy(this),e);let t=Sa.r,n=Sa.g,r=Sa.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ya),this.setHSL(ya.h+e,ya.s+t,ya.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ya),e.getHSL(ba);let n=dr(ya.h,ba.h,t),r=dr(ya.s,ba.s,t),i=dr(ya.l,ba.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sa=new W;W.NAMES=va;var Ca=0,wa=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ca++}),this.uuid=sr(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ta=class extends wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ea=new V,Da=new B,Oa=0,ka=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oa++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=er,this.updateRanges=[],this.gpuType=Gt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXYZ(t,Ea.x,Ea.y,Ea.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix4(e),this.setXYZ(t,Ea.x,Ea.y,Ea.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyNormalMatrix(e),this.setXYZ(t,Ea.x,Ea.y,Ea.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.transformDirection(e),this.setXYZ(t,Ea.x,Ea.y,Ea.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Er(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dr(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dr(t,this.array),n=Dr(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dr(t,this.array),n=Dr(n,this.array),r=Dr(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Dr(t,this.array),n=Dr(n,this.array),r=Dr(r,this.array),i=Dr(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Aa=class extends ka{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ja=class extends ka{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ma=class extends ka{constructor(e,t,n){super(new Float32Array(e),t,n)}},Na=0,Pa=new Ai,Fa=new ra,Ia=new V,La=new ri,Ra=new ri,za=new V,Ba=class e extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Na++}),this.uuid=sr(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Nr(e)?ja:Aa)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pa.makeRotationFromQuaternion(e),this.applyMatrix4(Pa),this}rotateX(e){return Pa.makeRotationX(e),this.applyMatrix4(Pa),this}rotateY(e){return Pa.makeRotationY(e),this.applyMatrix4(Pa),this}rotateZ(e){return Pa.makeRotationZ(e),this.applyMatrix4(Pa),this}translate(e,t,n){return Pa.makeTranslation(e,t,n),this.applyMatrix4(Pa),this}scale(e,t,n){return Pa.makeScale(e,t,n),this.applyMatrix4(Pa),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ia).negate(),this.translate(Ia.x,Ia.y,Ia.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ma(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];La.setFromBufferAttribute(n),this.morphTargetsRelative?(za.addVectors(this.boundingBox.min,La.min),this.boundingBox.expandByPoint(za),za.addVectors(this.boundingBox.max,La.max),this.boundingBox.expandByPoint(za)):(this.boundingBox.expandByPoint(La.min),this.boundingBox.expandByPoint(La.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(La.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ra.setFromBufferAttribute(n),this.morphTargetsRelative?(za.addVectors(La.min,Ra.min),La.expandByPoint(za),za.addVectors(La.max,Ra.max),La.expandByPoint(za)):(La.expandByPoint(Ra.min),La.expandByPoint(Ra.max))}La.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)za.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(za));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)za.fromBufferAttribute(a,t),o&&(Ia.fromBufferAttribute(e,t),za.add(Ia)),r=Math.max(r,n.distanceToSquared(za))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new ka(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new ka(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)za.fromBufferAttribute(e,t),za.normalize(),e.setXYZ(t,za.x,za.y,za.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ka(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Va=new Ai,Ha=new ki,Ua=new xi,Wa=new V,Ga=new V,Ka=new V,qa=new V,Ja=new V,Ya=new V,Xa=new V,Za=new V,Qa=class extends ra{constructor(e=new Ba,t=new Ta){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ya.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ja.fromBufferAttribute(s,e),a?Ya.addScaledVector(Ja,r):Ya.addScaledVector(Ja.sub(t),r))}t.add(Ya)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ha.copy(e.ray).recast(e.near),!(Ua.containsPoint(Ha.origin)===!1&&(Ha.intersectSphere(Ua,Wa)===null||Ha.origin.distanceToSquared(Wa)>(e.far-e.near)**2))&&(Va.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(Va),(n.boundingBox===null||Ha.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ha)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=eo(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=eo(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=eo(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=eo(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function $a(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Za.copy(s),Za.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Za);return l<n.near||l>n.far?null:{distance:l,point:Za.clone(),object:e}}function eo(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ga),e.getVertexPosition(c,Ka),e.getVertexPosition(l,qa);let u=$a(e,t,n,r,Ga,Ka,qa,Xa);if(u){let e=new V;_a.getBarycoord(Xa,Ga,Ka,qa,e),i&&(u.uv=_a.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=_a.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=_a.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};_a.getNormal(Ga,Ka,qa,t.normal),u.face=t,u.barycoord=e}return u}var to=class e extends Ba{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ma(c,3)),this.setAttribute(`normal`,new Ma(l,3)),this.setAttribute(`uv`,new Ma(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function no(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function ro(e){let t={};for(let n=0;n<e.length;n++){let r=no(e[n]);for(let e in r)t[e]=r[e]}return t}function io(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ao(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:U.workingColorSpace}var oo={clone:no,merge:ro},so=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,co=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,lo=class extends wa{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=so,this.fragmentShader=co,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=io(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},uo=class extends ra{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ai,this.projectionMatrix=new Ai,this.projectionMatrixInverse=new Ai,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fo=new V,po=new B,mo=new B,ho=class extends uo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fo.x,fo.y).multiplyScalar(-e/fo.z),fo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fo.x,fo.y).multiplyScalar(-e/fo.z)}getViewSize(e,t){return this.getViewBounds(e,po,mo),t.subVectors(mo,po)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},go=-90,_o=1,vo=class extends ra{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ho(go,_o,e,t);r.layers=this.layers,this.add(r);let i=new ho(go,_o,e,t);i.layers=this.layers,this.add(i);let a=new ho(go,_o,e,t);a.layers=this.layers,this.add(a);let o=new ho(go,_o,e,t);o.layers=this.layers,this.add(o);let s=new ho(go,_o,e,t);s.layers=this.layers,this.add(s);let c=new ho(go,_o,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},yo=class extends Zr{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bo=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new yo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new to(5,5,5),i=new lo({name:`CubemapFromEquirect`,uniforms:no(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Qa(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=It),new vo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},xo=class extends ra{constructor(){super(),this.isGroup=!0,this.type=`Group`}},So={type:`move`},Co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(So)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wo=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},To=class extends ra{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Eo=class extends Zr{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Nt,l=Nt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Do=new V,Oo=new V,ko=new H,Ao=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Do.subVectors(n,t).cross(Oo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Do),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ko.getNormalMatrix(e),r=this.coplanarPoint(Do).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},jo=new xi,Mo=new B(.5,.5),No=new V,Po=class{constructor(e=new Ao,t=new Ao,n=new Ao,r=new Ao,i=new Ao,a=new Ao){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jo)}intersectsSprite(e){return jo.center.set(0,0,0),jo.radius=.7071067811865476+Mo.distanceTo(e.center),jo.applyMatrix4(e.matrixWorld),this.intersectsSphere(jo)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fo=class extends Zr{constructor(e,t,n=Wt,r,i,a,o=Nt,s=Nt,c,l=tn,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Io=class extends Zr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lo=class e extends Ba{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ma(p,3)),this.setAttribute(`normal`,new Ma(m,3)),this.setAttribute(`uv`,new Ma(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ro=class extends wa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zo=class extends Ro{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return z(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Bo=class extends wa{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new W(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vo=class extends wa{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ho=class extends wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=qn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uo=class extends wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Go(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ko=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},qo=class extends Ko{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wn,endingEnd:Wn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gn:i=e,o=2*t-n;break;case Kn:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Gn:a=e,s=2*n-t;break;case Kn:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Jo=class extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Yo=class extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vn:t=this.InterpolantFactoryMethodDiscrete;break;case Hn:t=this.InterpolantFactoryMethodLinear;break;case Un:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vn;case this.InterpolantFactoryMethodLinear:return Hn;case this.InterpolantFactoryMethodSmooth:return Un}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Go(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Un,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Xo.prototype.ValueTypeName=``,Xo.prototype.TimeBufferType=Float32Array,Xo.prototype.ValueBufferType=Float32Array,Xo.prototype.DefaultInterpolation=Hn;var Zo=class extends Xo{constructor(e,t,n){super(e,t,n)}};Zo.prototype.ValueTypeName=`bool`,Zo.prototype.ValueBufferType=Array,Zo.prototype.DefaultInterpolation=Vn,Zo.prototype.InterpolantFactoryMethodLinear=void 0,Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}};Qo.prototype.ValueTypeName=`color`;var $o=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}};$o.prototype.ValueTypeName=`number`;var es=class extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)kr.slerpFlat(i,0,a,c-o,a,c,s);return i}},ts=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new es(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName=`quaternion`,ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Xo{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName=`string`,ns.prototype.ValueBufferType=Array,ns.prototype.DefaultInterpolation=Vn,ns.prototype.InterpolantFactoryMethodLinear=void 0,ns.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}};rs.prototype.ValueTypeName=`vector`;var is=class extends ra{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},as=class extends is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ra.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},os=new Ai,ss=new V,cs=new V,ls=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=zt,this.map=null,this.mapPass=null,this.matrix=new Ai,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Qr(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ss.setFromMatrixPosition(e.matrixWorld),t.position.copy(ss),cs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cs),t.updateMatrixWorld(),os.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(os,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},us=class extends uo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ds=class extends ls{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ra.DEFAULT_UP),this.updateMatrix(),this.target=new ra,this.shadow=new ds}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ps=class extends ho{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ms=`\\[\\]\\.:\\/`,hs=RegExp(`[\\[\\]\\.:\\/]`,`g`),gs=`[^\\[\\]\\.:\\/]`,_s=`[^`+ms.replace(`\\.`,``)+`]`,vs=`((?:WC+[\\/:])*)`.replace(`WC`,gs),ys=`(WCOD+)?`.replace(`WCOD`,_s),bs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,gs),xs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,gs),Ss=RegExp(`^`+vs+ys+bs+xs+`$`),Cs=[`material`,`materials`,`bones`,`map`],ws=class{constructor(e,t,n){let r=n||Ts.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ts=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(hs,``)}static parseTrackName(e){let t=Ss.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Cs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ts.Composite=ws,Ts.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ts.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ts.prototype.GetterByBindingType=[Ts.prototype._getValue_direct,Ts.prototype._getValue_array,Ts.prototype._getValue_arrayElement,Ts.prototype._getValue_toArray],Ts.prototype.SetterByBindingTypeAndVersioning=[[Ts.prototype._setValue_direct,Ts.prototype._setValue_direct_setNeedsUpdate,Ts.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ts.prototype._setValue_array,Ts.prototype._setValue_array_setNeedsUpdate,Ts.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ts.prototype._setValue_arrayElement,Ts.prototype._setValue_arrayElement_setNeedsUpdate,Ts.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ts.prototype._setValue_fromArray,Ts.prototype._setValue_fromArray_setNeedsUpdate,Ts.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Es=new Ai,Ds=class{constructor(e,t,n=0,r=1/0){this.ray=new ki(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Vi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Es.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Es),this}intersectObject(e,t=!0,n=[]){return ks(e,this,n,t),n.sort(Os),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)ks(e[r],this,n,t);return n.sort(Os),n}};function Os(e,t){return e.distance-t.distance}function ks(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)ks(r[e],t,n,!0)}}function As(e,t,n,r){let i=js(r);switch(n){case Qt:return e*t;case rn:return e*t/i.components*i.byteLength;case an:return e*t/i.components*i.byteLength;case on:return e*t*2/i.components*i.byteLength;case sn:return e*t*2/i.components*i.byteLength;case $t:return e*t*3/i.components*i.byteLength;case en:return e*t*4/i.components*i.byteLength;case cn:return e*t*4/i.components*i.byteLength;case ln:case un:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case dn:case fn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mn:case gn:return Math.max(e,16)*Math.max(t,8)/4;case pn:case hn:return Math.max(e,8)*Math.max(t,8)/2;case _n:case vn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case yn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Sn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Cn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case wn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Tn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case En:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Dn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case On:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case kn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case An:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case jn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Mn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Nn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pn:case Fn:case In:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ln:case Rn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case zn:case Bn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function js(e){switch(e){case zt:case Bt:return{byteLength:1,components:1};case Ht:case Vt:case Kt:return{byteLength:2,components:1};case qt:case Jt:return{byteLength:2,components:4};case Wt:case Ut:case Gt:return{byteLength:4,components:1};case Xt:case Zt:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`180`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`180`);function Ms(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ns(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Ps={basic:{uniforms:ro([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:ro([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:ro([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:ro([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:ro([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:ro([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:ro([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:ro([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:ro([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:ro([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:ro([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distanceRGBA:{uniforms:ro([K.common,K.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distanceRGBA_vert,fragmentShader:G.distanceRGBA_frag},shadow:{uniforms:ro([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};Ps.physical={uniforms:ro([Ps.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var Fs={r:0,b:0,g:0},Is=new Bi,Ls=new Ai;function Rs(e,t,n,r,i,a,o){let s=new W(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Qa(new to(1,1,1),new lo({name:`BackgroundCubeMaterial`,uniforms:no(Ps.backgroundCube.uniforms),vertexShader:Ps.backgroundCube.vertexShader,fragmentShader:Ps.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Is.copy(n.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ls.makeRotationFromEuler(Is)),u.material.toneMapped=U.getTransfer(r.colorSpace)!==Qn,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Qa(new Lo(2,2),new lo({name:`BackgroundMaterial`,uniforms:no(Ps.background.uniforms),vertexShader:Ps.background.vertexShader,fragmentShader:Ps.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=U.getTransfer(r.colorSpace)!==Qn,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Fs,ao(e)),r.buffers.color.setClear(Fs.r,Fs.g,Fs.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function zs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Bs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Vs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Hs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ao,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Us(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new bo(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Ws=4,Gs=[.125,.215,.35,.446,.526,.582],Ks=20,qs=new us,Js=new W,Ys=null,Xs=0,Zs=0,Qs=!1,$s=(1+Math.sqrt(5))/2,ec=1/$s,tc=[new V(-$s,ec,0),new V($s,ec,0),new V(-ec,0,$s),new V(ec,0,$s),new V(0,$s,-ec),new V(0,$s,ec),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],nc=new V,rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=nc}=i;Ys=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ys,Xs,Zs),this._renderer.xr.enabled=Qs,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ys=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Kt,format:en,colorSpace:Xn,depthBuffer:!1},r=ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ic(r)),this._blurMaterial=sc(r,e,t)}return r}_compileMaterial(e){let t=new Qa(this._lodPlanes[0],e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,n,r,i){let a=new ho(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Js),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null));let d=new Ta({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new Qa(new to,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Js),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;oc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Qa(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;oc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,qs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=tc[(r-t-1)%tc.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Qa(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ks;m>Ks&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ks}`);let h=[],g=0;for(let e=0;e<Ks;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];oc(t,3*v*(r>_-Ws?r-_+Ws:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,qs)}};function ic(e){let t=[],n=[],r=[],i=e,a=e-Ws+1+Gs.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ws?s=Gs[o-e+Ws-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ba;h.setAttribute(`position`,new ka(f,3)),h.setAttribute(`uv`,new ka(p,2)),h.setAttribute(`faceIndex`,new ka(m,1)),t.push(h),i>Ws&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function ac(e,t,n){let r=new ei(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function oc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function sc(e,t,n){let r=new Float32Array(Ks),i=new V(0,1,0);return new lo({name:`SphericalGaussianBlur`,defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cc(){return new lo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function lc(){return new lo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dc(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new rc(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new rc(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function fc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Lr(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function pc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Nr(n)?ja:Aa)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function mc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function gc(e,t,n){let r=new WeakMap,i=new Qr;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ti(h,p,m,u);g.type=Gt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function _c(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var vc=new Zr,yc=new Fo(1,1),bc=new ti,xc=new ni,Sc=new yo,Cc=[],wc=[],Tc=new Float32Array(16),Ec=new Float32Array(9),Dc=new Float32Array(4);function Oc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Cc[i];if(a===void 0&&(a=new Float32Array(i),Cc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function kc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ac(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function jc(e,t){let n=wc[t];n===void 0&&(n=new Int32Array(t),wc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Mc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(kc(n,t))return;e.uniform2fv(this.addr,t),Ac(n,t)}}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(kc(n,t))return;e.uniform3fv(this.addr,t),Ac(n,t)}}function Fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(kc(n,t))return;e.uniform4fv(this.addr,t),Ac(n,t)}}function Ic(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(kc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ac(n,t)}else{if(kc(n,r))return;Dc.set(r),e.uniformMatrix2fv(this.addr,!1,Dc),Ac(n,r)}}function Lc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(kc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ac(n,t)}else{if(kc(n,r))return;Ec.set(r),e.uniformMatrix3fv(this.addr,!1,Ec),Ac(n,r)}}function Rc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(kc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ac(n,t)}else{if(kc(n,r))return;Tc.set(r),e.uniformMatrix4fv(this.addr,!1,Tc),Ac(n,r)}}function zc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(kc(n,t))return;e.uniform2iv(this.addr,t),Ac(n,t)}}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(kc(n,t))return;e.uniform3iv(this.addr,t),Ac(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(kc(n,t))return;e.uniform4iv(this.addr,t),Ac(n,t)}}function Uc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(kc(n,t))return;e.uniform2uiv(this.addr,t),Ac(n,t)}}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(kc(n,t))return;e.uniform3uiv(this.addr,t),Ac(n,t)}}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(kc(n,t))return;e.uniform4uiv(this.addr,t),Ac(n,t)}}function qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(yc.compareFunction=515,a=yc):a=vc,n.setTexture2D(t||a,i)}function Jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||xc,i)}function Yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Sc,i)}function Xc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||bc,i)}function Zc(e){switch(e){case 5126:return Mc;case 35664:return Nc;case 35665:return Pc;case 35666:return Fc;case 35674:return Ic;case 35675:return Lc;case 35676:return Rc;case 5124:case 35670:return zc;case 35667:case 35671:return Bc;case 35668:case 35672:return Vc;case 35669:case 35673:return Hc;case 5125:return Uc;case 36294:return Wc;case 36295:return Gc;case 36296:return Kc;case 35678:case 36198:case 36298:case 36306:case 35682:return qc;case 35679:case 36299:case 36307:return Jc;case 35680:case 36300:case 36308:case 36293:return Yc;case 36289:case 36303:case 36311:case 36292:return Xc}}function Qc(e,t){e.uniform1fv(this.addr,t)}function $c(e,t){let n=Oc(t,this.size,2);e.uniform2fv(this.addr,n)}function el(e,t){let n=Oc(t,this.size,3);e.uniform3fv(this.addr,n)}function tl(e,t){let n=Oc(t,this.size,4);e.uniform4fv(this.addr,n)}function nl(e,t){let n=Oc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function rl(e,t){let n=Oc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function il(e,t){let n=Oc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function al(e,t){e.uniform1iv(this.addr,t)}function ol(e,t){e.uniform2iv(this.addr,t)}function sl(e,t){e.uniform3iv(this.addr,t)}function cl(e,t){e.uniform4iv(this.addr,t)}function ll(e,t){e.uniform1uiv(this.addr,t)}function ul(e,t){e.uniform2uiv(this.addr,t)}function dl(e,t){e.uniform3uiv(this.addr,t)}function fl(e,t){e.uniform4uiv(this.addr,t)}function pl(e,t,n){let r=this.cache,i=t.length,a=jc(n,i);kc(r,a)||(e.uniform1iv(this.addr,a),Ac(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||vc,a[e])}function ml(e,t,n){let r=this.cache,i=t.length,a=jc(n,i);kc(r,a)||(e.uniform1iv(this.addr,a),Ac(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||xc,a[e])}function hl(e,t,n){let r=this.cache,i=t.length,a=jc(n,i);kc(r,a)||(e.uniform1iv(this.addr,a),Ac(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Sc,a[e])}function gl(e,t,n){let r=this.cache,i=t.length,a=jc(n,i);kc(r,a)||(e.uniform1iv(this.addr,a),Ac(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||bc,a[e])}function _l(e){switch(e){case 5126:return Qc;case 35664:return $c;case 35665:return el;case 35666:return tl;case 35674:return nl;case 35675:return rl;case 35676:return il;case 5124:case 35670:return al;case 35667:case 35671:return ol;case 35668:case 35672:return sl;case 35669:case 35673:return cl;case 5125:return ll;case 36294:return ul;case 36295:return dl;case 36296:return fl;case 35678:case 36198:case 36298:case 36306:case 35682:return pl;case 35679:case 36299:case 36307:return ml;case 35680:case 36300:case 36308:case 36293:return hl;case 36289:case 36303:case 36311:case 36292:return gl}}var vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zc(t.type)}},yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_l(t.type)}},bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},xl=/(\w+)(\])?(\[|\.)?/g;function Sl(e,t){e.seq.push(t),e.map[t.id]=t}function Cl(e,t,n){let r=e.name,i=r.length;for(xl.lastIndex=0;;){let a=xl.exec(r),o=xl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Sl(n,l===void 0?new vl(s,e,t):new yl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new bl(s),Sl(n,e)),n=e}}}var wl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Cl(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Tl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var El=37297,Dl=0;function Ol(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var kl=new H;function Al(e){U._getMatrix(kl,U.workingColorSpace,e);let t=`mat3( ${kl.elements.map(e=>e.toFixed(4))} )`;switch(U.getTransfer(e)){case Zn:return[t,`LinearTransferOETF`];case Qn:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function jl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ol(e.getShaderSource(t),r)}return i}function Ml(e,t){let n=Al(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function Nl(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Pl=new V;function Fl(){return U.getLuminanceCoefficients(Pl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Pl.x.toFixed(4)}, ${Pl.y.toFixed(4)}, ${Pl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Il(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(zl).join(`
`)}function Ll(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Rl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function zl(e){return e!==``}function Bl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(e){return e.replace(Hl,Gl)}var Wl=new Map;function Gl(e,t){let n=G[t];if(n===void 0){let e=Wl.get(t);if(e!==void 0)n=G[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Ul(n)}var Kl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(e){return e.replace(Kl,Jl)}function Jl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Yl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Xl(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Zl(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ql(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function $l(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function eu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function tu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Xl(n),l=Zl(n),u=Ql(n),d=$l(n),f=eu(n),p=Il(n),m=Ll(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zl).join(`
`),_.length>0&&(_+=`
`)):(g=[Yl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(zl).join(`
`),_=[Yl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:Nl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,Ml(`linearToOutputTexel`,n.outputColorSpace),Fl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(zl).join(`
`)),o=Ul(o),o=Bl(o,n),o=Vl(o,n),s=Ul(s),s=Bl(s,n),s=Vl(s,n),o=ql(o),s=ql(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Tl(i,i.VERTEX_SHADER,y),S=Tl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=jl(i,x,`vertex`),n=jl(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new wl(i,h),T=Rl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,El)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Dl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var nu=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new iu(e),t.set(e,n)),n}},iu=class{constructor(e){this.id=nu++,this.code=e,this.usedTimes=0}};function au(e,t,n,r,i,a,o){let s=new Vi,c=new ru,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ps[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=_.isInstancedMesh===!0,te=_.isBatchedMesh===!0,ne=!!a.map,re=!!a.matcap,ie=!!x,ae=!!a.aoMap,oe=!!a.lightMap,se=!!a.bumpMap,ce=!!a.normalMap,le=!!a.displacementMap,ue=!!a.emissiveMap,de=!!a.metalnessMap,fe=!!a.roughnessMap,pe=a.anisotropy>0,me=a.clearcoat>0,N=a.dispersion>0,he=a.iridescence>0,ge=a.sheen>0,_e=a.transmission>0,P=pe&&!!a.anisotropyMap,ve=me&&!!a.clearcoatMap,F=me&&!!a.clearcoatNormalMap,I=me&&!!a.clearcoatRoughnessMap,ye=he&&!!a.iridescenceMap,be=he&&!!a.iridescenceThicknessMap,xe=ge&&!!a.sheenColorMap,Se=ge&&!!a.sheenRoughnessMap,Ce=!!a.specularMap,we=!!a.specularColorMap,Te=!!a.specularIntensityMap,Ee=_e&&!!a.transmissionMap,De=_e&&!!a.thicknessMap,Oe=!!a.gradientMap,ke=!!a.alphaMap,Ae=a.alphaTest>0,je=!!a.alphaHash,Me=!!a.extensions,Ne=0;a.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:te,batchingColor:te&&_._colorsTexture!==null,instancing:M,instancingColor:M&&_.instanceColor!==null,instancingMorph:M&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Xn,alphaToCoverage:!!a.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:f&&le,emissiveMap:ue,normalMapObjectSpace:ce&&a.normalMapType===1,normalMapTangentSpace:ce&&a.normalMapType===0,metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:P,clearcoat:me,clearcoatMap:ve,clearcoatNormalMap:F,clearcoatRoughnessMap:I,dispersion:N,iridescence:he,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:ge,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:_e,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:je,combine:a.combine,mapUv:ne&&h(a.map.channel),aoMapUv:ae&&h(a.aoMap.channel),lightMapUv:oe&&h(a.lightMap.channel),bumpMapUv:se&&h(a.bumpMap.channel),normalMapUv:ce&&h(a.normalMap.channel),displacementMapUv:le&&h(a.displacementMap.channel),emissiveMapUv:ue&&h(a.emissiveMap.channel),metalnessMapUv:de&&h(a.metalnessMap.channel),roughnessMapUv:fe&&h(a.roughnessMap.channel),anisotropyMapUv:P&&h(a.anisotropyMap.channel),clearcoatMapUv:ve&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:F&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:be&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:Se&&h(a.sheenRoughnessMap.channel),specularMapUv:Ce&&h(a.specularMap.channel),specularColorMapUv:we&&h(a.specularColorMap.channel),specularIntensityMapUv:Te&&h(a.specularIntensityMap.channel),transmissionMapUv:Ee&&h(a.transmissionMap.channel),thicknessMapUv:De&&h(a.thicknessMap.channel),alphaMapUv:ke&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(ce||pe),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(ne||ke),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0&&a.wireframe===!1,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ne&&a.map.isVideoTexture===!0&&U.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&a.emissiveMap.isVideoTexture===!0&&U.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Me&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&a.extensions.multiDraw===!0||te)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),t.gradientMap&&s.enable(22),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ps[t];n=oo.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new tu(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function ou(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function su(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function lu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||su),r.length>1&&r.sort(t||cu),i.length>1&&i.sort(t||cu)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function uu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new lu,e.set(t,[i])):n>=r.length?(i=new lu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function du(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new W};break;case`SpotLight`:n={position:new V,direction:new V,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function fu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var pu=0;function mu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hu(e){let t=new du,n=fu(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Ai,o=new Ai;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(mu);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=pu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function gu(e){let t=new hu(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function _u(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new gu(e),t.set(n,[a])):r>=i.length?(a=new gu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var vu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bu(e,t,n){let r=new Po,i=new B,a=new B,o=new Qr,s=new Ho({depthPacking:Jn}),c=new Uo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new lo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:vu,fragmentShader:yu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ba;m.setAttribute(`position`,new ka(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Qa(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:Nt,magFilter:Nt};d.map!==null&&d.map.dispose(),d.map=new ei(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new ei(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var xu={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Su(e,t){function n(){let t=!1,n=new Qr,r=null,i=new Qr(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=xu[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=M>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Qr().fromArray(ie),se=new Qr().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),P(!1),ve(1),ue(e.CULL_FACE),ge(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return m!==t&&(e.useProgram(t),m=t,!0)}let N={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};N[103]=e.MIN,N[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(de(e.BLEND),h=!1);return}if(h===!1&&(ue(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:console.error(`THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:console.error(`THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(N[n],N[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function _e(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),P(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),I(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function P(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function ve(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function F(t){t!==O&&(j&&e.lineWidth(t),O=t)}function I(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):de(e.POLYGON_OFFSET_FILL)}function ye(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+ee-1),ne!==t&&(e.activeTexture(t),ne=t)}function xe(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+ee-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Se(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Pe(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},ne=null,re={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:ge,setMaterial:_e,setFlipSided:P,setCullFace:ve,setLineWidth:F,setPolygonOffset:I,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:je,texImage3D:Me,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Ne,viewport:Pe,reset:Le}}function Cu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):Pr(`canvas`)}function h(e,t,n){let r=1,i=xe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function g(e){return e.generateMipmaps}function _(t){e.generateMipmap(t)}function v(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?Zn:U.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function b(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function x(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),w(t),t.isVideoTexture&&u.delete(t)}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),E(t)}function w(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function E(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let D=0;function O(){D=0}function k(){let e=D;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),D+=1,e}function A(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&ye(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{le(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function j(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){le(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){le(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ue(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ne={[At]:e.REPEAT,[jt]:e.CLAMP_TO_EDGE,[Mt]:e.MIRRORED_REPEAT},re={[Nt]:e.NEAREST,[Pt]:e.NEAREST_MIPMAP_NEAREST,[Ft]:e.NEAREST_MIPMAP_LINEAR,[It]:e.LINEAR,[Lt]:e.LINEAR_MIPMAP_NEAREST,[Rt]:e.LINEAR_MIPMAP_LINEAR},ie={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ae(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ne[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ne[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ne[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,re[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,re[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ie[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,S));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=A(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=se(n.start,r.width,4),c=se(t.start,r.width,4);n.start<=i+1&&a===c&&se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function le(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===``?null:U.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=be(o,p);let m=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=y(o.internalFormat,m,v,o.colorSpace,o.isVideoTexture);ae(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=x(o,p);if(o.isDepthTexture)S=b(o.format===nn,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,null));else if(o.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&ce(o,p,m,v)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023){if(m!==null){if(T){if(D){if(o.layerUpdates.size>0){let r=As(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,v,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,v,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}}else if(o.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D){if(o.layerUpdates.size>0){let t=As(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,v,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,v,p.data)}else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,v,p.data);else if(o.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,v,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=xe(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,v,C):n.texImage2D(e.TEXTURE_2D,t,S,m,v,C);o.generateMipmaps=!1}else if(T){if(E){let t=xe(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,v,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,v,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ue(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===``?null:U.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=be(o,m[e]);let v=m[0],b=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=y(o.internalFormat,b,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=x(o,v);ae(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,v.width,v.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,b,S,i.data):b===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=xe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,b,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,b,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,b,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function de(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=y(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,F(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=b(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=F(n);I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=y(o.internalFormat,c,l,o.colorSpace),d=F(n);r&&I(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function pe(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,(!a.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),ee(i.depthTexture,0);let o=a.__webglTexture,c=F(i);if(i.depthTexture.format===1026)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(i.depthTexture.format===1027)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw Error(`Unknown depthTexture format`)}function me(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);let e=t.texture.mipmaps;e&&e.length>0?pe(i.__webglFramebuffer[0],t):pe(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),fe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),fe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function N(t,n,i){let a=r.get(t);n!==void 0&&de(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&me(t)}function he(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,C);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&I(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=y(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=F(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),fe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)de(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else de(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ae(c,a),de(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),g(a)&&_(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ae(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)de(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else de(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&me(t)}function ge(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(g(a)){let t=v(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),_(t),n.unbindTexture()}}}let _e=[],P=[];function ve(t){if(t.samples>0){if(I(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(_e.length=0,P.length=0,_e.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(_e.push(l),P.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,P)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function F(e){return Math.min(i.maxSamples,e.samples)}function I(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ye(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function be(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(U.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function xe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=j,this.setTexture3D=M,this.setTextureCube=te,this.rebindTextures=N,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=de,this.useMultisampledRTT=I}function wu(e,t){function n(n,r=``){let i,a=U.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Tu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new lo({vertexShader:Tu,fragmentShader:Eu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qa(new Lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends nr{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Du,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=new ho;w.viewport=new Qr;let T=new ho;T.viewport=new Qr;let E=[w,T],D=new ps,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Co,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Co,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Co,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,j);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,j),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?nn:tn,a=_.stencil?Yt:Wt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ei(d.textureWidth,d.textureHeight,{format:en,type:zt,depthTexture:new Fo(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:en,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let M=new V,te=new V;function ne(e,t,n){M.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=M.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&3,T.layers.mask=D.layers.mask&5;let i=e.parent,a=D.cameras;re(D,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),ie(e,D,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=or*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new ho,o.layers.enable(n),o.viewport=new Qr,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Io,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let se=new Ms;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},ku=new Bi,Au=new Ai;function ju(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ao(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,ku.copy(o),ku.x*=-1,ku.y*=-1,ku.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(ku.y*=-1,ku.z*=-1),e.envMapRotation.value.setFromMatrix4(Au.makeRotationFromEuler(ku)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Mu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Nu=class{constructor(e={}){let{canvas:t=Fr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),m=new Int32Array(4),h=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=Yn;let x=0,S=0,C=null,w=-1,T=null,E=new Qr,D=new Qr,O=null,k=new W(0),A=0,ee=t.width,j=t.height,M=1,te=null,ne=null,re=new Qr(0,0,ee,j),ie=new Qr(0,0,ee,j),ae=!1,oe=new Po,se=!1,ce=!1,le=new Ai,ue=new V,de=new Qr,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function me(){return C===null?M:1}let N=n;function he(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r180`),t.addEventListener(`webglcontextlost`,ze,!1),t.addEventListener(`webglcontextrestored`,Be,!1),t.addEventListener(`webglcontextcreationerror`,Ve,!1),N===null){let t=`webgl2`;if(N=he(t,e),N===null)throw he(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ge,_e,P,ve,F,I,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie;function Le(){ge=new fc(N),ge.init(),Pe=new wu(N,ge),_e=new Vs(N,ge,e,Pe),P=new Su(N,ge),_e.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),ve=new hc(N),F=new ou,I=new Cu(N,ge,P,F,_e,Pe,ve),ye=new Us(y),be=new dc(y),xe=new Ns(N),Fe=new zs(N,xe),Se=new pc(N,xe,ve,Fe),Ce=new _c(N,Se,xe,ve),je=new gc(N,_e,I),Oe=new Hs(F),we=new au(y,ye,be,ge,_e,Fe,Oe),Te=new ju(y,F),Ee=new uu,De=new _u(ge),Ae=new Rs(y,ye,be,P,Ce,f,s),ke=new bu(y,Ce,_e),Ie=new Mu(N,ve,_e,P),Me=new Bs(N,ge,ve),Ne=new mc(N,ge,ve),ve.programs=we.programs,y.capabilities=_e,y.extensions=ge,y.properties=F,y.renderLists=Ee,y.shadowMap=ke,y.state=P,y.info=ve}Le();let Re=new Ou(y,N);this.xr=Re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(e){e!==void 0&&(M=e,this.setSize(ee,j,!1))},this.getSize=function(e){return e.set(ee,j)},this.setSize=function(e,n,r=!0){if(Re.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}ee=e,j=n,t.width=Math.floor(e*M),t.height=Math.floor(n*M),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ee*M,j*M).floor()},this.setDrawingBufferSize=function(e,n,r){ee=e,j=n,M=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(E)},this.getViewport=function(e){return e.copy(re)},this.setViewport=function(e,t,n,r){e.isVector4?re.set(e.x,e.y,e.z,e.w):re.set(e,t,n,r),P.viewport(E.copy(re).multiplyScalar(M).round())},this.getScissor=function(e){return e.copy(ie)},this.setScissor=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),P.scissor(D.copy(ie).multiplyScalar(M).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(e){P.setScissorTest(ae=e)},this.setOpaqueSort=function(e){te=e},this.setTransparentSort=function(e){ne=e},this.getClearColor=function(e){return e.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(C!==null){let t=C.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=C.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Ae.getClearColor(),r=Ae.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(p[0]=i,p[1]=a,p[2]=o,p[3]=r,N.clearBufferuiv(N.COLOR,0,p)):(m[0]=i,m[1]=a,m[2]=o,m[3]=r,N.clearBufferiv(N.COLOR,0,m))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ze,!1),t.removeEventListener(`webglcontextrestored`,Be,!1),t.removeEventListener(`webglcontextcreationerror`,Ve,!1),Ae.dispose(),Ee.dispose(),De.dispose(),F.dispose(),ye.dispose(),be.dispose(),Ce.dispose(),Fe.dispose(),Ie.dispose(),we.dispose(),Re.dispose(),Re.removeEventListener(`sessionstart`,Je),Re.removeEventListener(`sessionend`,Ye),Xe.stop()};function ze(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),b=!0}function Be(){console.log(`THREE.WebGLRenderer: Context Restored.`),b=!1;let e=ve.autoReset,t=ke.enabled,n=ke.autoUpdate,r=ke.needsUpdate,i=ke.type;Le(),ve.autoReset=e,ke.enabled=t,ke.autoUpdate=n,ke.needsUpdate=r,ke.type=i}function Ve(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function He(e){let t=e.target;t.removeEventListener(`dispose`,He),Ue(t)}function Ue(e){We(e),F.remove(e)}function We(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){we.releaseProgram(e)}),e.isShaderMaterial&&we.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=fe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=at(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Se.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Fe.setup(i,r,s,n,c);let h,g=Me;if(c!==null&&(h=xe.get(c),g=Ne,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*me()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*me()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)Lr(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(ge.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?xe.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ge(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,nt(e,t,n),e.side=0,e.needsUpdate=!0,nt(e,t,n),e.side=2):nt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),g=De.get(n),g.init(t),v.push(g),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),g.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ge(a,n,e),r.add(a)}else Ge(t,n,e),r.add(t)}}),g=v.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){F.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ge.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ke=null;function qe(e){Ke&&Ke(e)}function Je(){Xe.stop()}function Ye(){Xe.start()}let Xe=new Ms;Xe.setAnimationLoop(qe),typeof self<`u`&&Xe.setContext(self),this.setAnimationLoop=function(e){Ke=e,Re.setAnimationLoop(e),e===null?Xe.stop():Xe.start()},Re.addEventListener(`sessionstart`,Je),Re.addEventListener(`sessionend`,Ye),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(b===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(t),t=Re.getCamera()),e.isScene===!0&&e.onBeforeRender(y,e,t,C),g=De.get(e,v.length),g.init(t),v.push(g),le.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),oe.setFromProjectionMatrix(le,tr,t.reversedDepth),ce=this.localClippingEnabled,se=Oe.init(this.clippingPlanes,ce),h=Ee.get(e,_.length),h.init(),_.push(h),Re.enabled===!0&&Re.isPresenting===!0){let e=y.xr.getDepthSensingMesh();e!==null&&Ze(e,t,-1/0,y.sortObjects)}Ze(e,t,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(te,ne),pe=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,pe&&Ae.addToRenderList(h,e),this.info.render.frame++,se===!0&&Oe.beginShadows();let n=g.state.shadowsArray;ke.render(n,e,t),se===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=h.opaque,i=h.transmissive;if(g.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];$e(r,i,e,a)}pe&&Ae.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Qe(h,e,r,r.viewport)}}else i.length>0&&$e(r,i,e,t),pe&&Ae.render(e),Qe(h,e,t);C!==null&&S===0&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),e.isScene===!0&&e.onAfterRender(y,e,t),Fe.resetDefaultState(),w=-1,T=null,v.pop(),v.length>0?(g=v[v.length-1],se===!0&&Oe.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),h=_.length>0?_[_.length-1]:null};function Ze(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)g.pushLight(e),e.castShadow&&g.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||oe.intersectsSprite(e)){r&&de.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);let t=Ce.update(e),i=e.material;i.visible&&h.push(e,t,i,n,de.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||oe.intersectsObject(e))){let t=Ce.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),de.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),de.copy(e.boundingSphere.center)),de.applyMatrix4(e.matrixWorld).applyMatrix4(le)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&h.push(e,t,s,n,de.z,o)}}else i.visible&&h.push(e,t,i,n,de.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ze(i[e],t,n,r)}function Qe(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;g.setupLightsView(n),se===!0&&Oe.setGlobalState(y.clippingPlanes,n),r&&P.viewport(E.copy(r)),i.length>0&&et(i,t,n),a.length>0&&et(a,t,n),o.length>0&&et(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function $e(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[r.id]===void 0&&(g.state.transmissionRenderTarget[r.id]=new ei(1,1,{generateMipmaps:!0,type:ge.has(`EXT_color_buffer_half_float`)||ge.has(`EXT_color_buffer_float`)?Kt:zt,minFilter:Rt,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:U.workingColorSpace}));let a=g.state.transmissionRenderTarget[r.id],o=r.viewport||E;a.setSize(o.z*y.transmissionResolutionScale,o.w*y.transmissionResolutionScale);let s=y.getRenderTarget(),c=y.getActiveCubeFace(),l=y.getActiveMipmapLevel();y.setRenderTarget(a),y.getClearColor(k),A=y.getClearAlpha(),A<1&&y.setClearColor(16777215,.5),y.clear(),pe&&Ae.render(n);let u=y.toneMapping;y.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),g.setupLightsView(r),se===!0&&Oe.setGlobalState(y.clippingPlanes,r),et(e,n,r),I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a),ge.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,tt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a))}y.setRenderTarget(s,c,l),y.setClearColor(k,A),d!==void 0&&(r.viewport=d),y.toneMapping=u}function et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=a.group,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&tt(o,t,n,s,l,c)}}function tt(e,t,n,r,i,a){e.onBeforeRender(y,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(y,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=2):y.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(y,t,n,r,i,a)}function nt(e,t,n){t.isScene!==!0&&(t=fe);let r=F.get(e),i=g.state.lights,a=g.state.shadowsArray,o=i.state.version,s=we.getParameters(e,i.state,a,t,n),c=we.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?be:ye).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,He),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return it(e,s),u}else s.uniforms=we.getUniforms(e),e.onBeforeCompile(s,y),u=we.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Oe.uniform),it(e,s),r.needsLights=st(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function rt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=wl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function it(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function at(e,t,n,r,i){t.isScene!==!0&&(t=fe),I.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xn,c=(r.isMeshStandardMaterial?be:ye).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(m=y.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=h===void 0?0:h.length,v=F.get(r),b=g.state.lights;if(se===!0&&(ce===!0||e!==T)){let t=e===T&&r.id===w;Oe.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version?x=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Oe.numPlanes||v.numIntersection!==Oe.numIntersection)?x=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?v.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;x===!0&&(S=nt(r,t,i));let E=!1,D=!1,O=!1,k=S.getUniforms(),A=v.uniforms;if(P.useProgram(S.program)&&(E=!0,D=!0,O=!0),r.id!==w&&(w=r.id,D=!0),E||T!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(N,`projectionMatrix`,e.projectionMatrix),k.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(N,ue.setFromMatrixPosition(e.matrixWorld)),_e.logarithmicDepthBuffer&&k.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),T!==e&&(T=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(N,i,`bindMatrix`),k.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(N,`boneTexture`,e.boneTexture,I))}i.isBatchedMesh&&(k.setOptional(N,i,`batchingTexture`),k.setValue(N,`batchingTexture`,i._matricesTexture,I),k.setOptional(N,i,`batchingIdTexture`),k.setValue(N,`batchingIdTexture`,i._indirectTexture,I),k.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(N,`batchingColorTexture`,i._colorsTexture,I));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&je.update(i,n,S),(D||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(N,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(N,`toneMappingExposure`,y.toneMappingExposure),v.needsLights&&ot(A,O),a&&r.fog===!0&&Te.refreshFogUniforms(A,a),Te.refreshMaterialUniforms(A,r,M,j,g.state.transmissionRenderTarget[e.id]),wl.upload(N,rt(v),A,I)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(wl.upload(N,rt(v),A,I),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(N,`center`,i.center),k.setValue(N,`modelViewMatrix`,i.modelViewMatrix),k.setValue(N,`normalMatrix`,i.normalMatrix),k.setValue(N,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ie.update(n,S),Ie.bind(n,S)}}return S}function ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function st(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let ct=N.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){C=e,x=t,S=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=F.get(e);if(s.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(N.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)I.setupRenderTarget(e);else if(s.__hasExternalTextures)I.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);I.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&I.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,E.copy(e.viewport),D.copy(e.scissor),O=e.scissorTest}else E.copy(re).multiplyScalar(M).floor(),D.copy(ie).multiplyScalar(M).floor(),O=ae;if(n!==0&&(i=ct),P.bindFramebuffer(N.FRAMEBUFFER,i)&&r&&P.drawBuffers(e,i),P.viewport(E),P.scissor(D),P.setScissorTest(O),a){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}w=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!_e.textureFormatReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!_e.textureTypeReadable(l)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),N.readPixels(t,n,r,i,Pe.convert(c),Pe.convert(l),a))}finally{let e=C===null?null:F.get(C).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!_e.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!_e.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),N.readPixels(t,n,r,i,Pe.convert(l),Pe.convert(u),0);let f=C===null?null:F.get(C).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,f);let p=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Rr(N,p,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.deleteBuffer(d),N.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;I.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()};let lt=N.createFramebuffer(),ut=N.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(Lr(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Pe.convert(t.format),_=Pe.convert(t.type),v;t.isData3DTexture?(I.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(I.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(I.setTexture2D(t,0),v=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(N.UNPACK_ROW_LENGTH),b=N.getParameter(N.UNPACK_IMAGE_HEIGHT),x=N.getParameter(N.UNPACK_SKIP_PIXELS),S=N.getParameter(N.UNPACK_SKIP_ROWS),C=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,l),N.pixelStorei(N.UNPACK_SKIP_ROWS,u),N.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,lt),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,ut);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(N.UNPACK_ROW_LENGTH,y),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(N.UNPACK_SKIP_PIXELS,x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S),N.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&I.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?I.setTextureCube(e,0):e.isData3DTexture?I.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?I.setTexture2DArray(e,0):I.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){x=0,S=0,C=null,P.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=U._getDrawingBufferColorSpace(e),t.unpackColorSpace=U._getUnpackColorSpace()}},Pu=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Fu=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Iu=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function Lu(e){let t=Math.hypot(...e)||1;return e.map(e=>e/t)}function Ru(e){let t=0;for(let n of e)t+=Math.hypot(...Iu(Fu(n[1],n[0]),Fu(n[2],n[0])))*.5;return t}function zu(e){let t=0,n=[0,0,0];for(let r of e){let e=Math.hypot(...Iu(Fu(r[1],r[0]),Fu(r[2],r[0])))*.5;t+=e;for(let t=0;t<3;t++)n[t]+=(r[0][t]+r[1][t]+r[2][t])*e/3}return n.map(e=>e/(t||1))}function Bu(e){let t=[0,0,0];for(let n of e)for(let e of n)for(let n=0;n<3;n++)t[n]+=e[n+3];return Lu(t)}function Vu(e=431){let t=e>>>0;return()=>{t+=1831565813;let e=Math.imul(t^t>>>15,1|t);return e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}function Hu(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length],c=(Pu(o,t)-n)*r,l=(Pu(s,t)-n)*r;if(c>=-1e-10&&i.push(o),c>1e-10&&l<-1e-10||c<-1e-10&&l>1e-10){let e=c/(c-l);i.push(o.map((t,n)=>t+(s[n]-t)*e))}}return i}function Uu(e,t,n){let r=[[],[]];for(let i of e)for(let e=0;e<2;e++){let a=Hu(i,t,n,e?1:-1);for(let t=1;t<a.length-1;t++){let n=[a[0],a[t],a[t+1]];Ru([n])>1e-12&&r[e].push(n)}}return r}function Wu(e,t=Vu(),n=2){let r=[e];for(let e=0;e<n;e++){let e=[];for(let n of r){let r=zu(n),i=Bu(n),a=Lu(Iu(i,Math.abs(i[1])<.9?[0,1,0]:[1,0,0])),o=Iu(i,a),s=t()*Math.PI,c=a.map((e,t)=>e*Math.cos(s)+o[t]*Math.sin(s)),l=Uu(n,c,Pu(r,c));l.some(e=>Ru(e)<1e-6)?e.push(n):e.push(...l)}r=e}return r}var Gu=e=>e.slice(0,3).map(e=>Math.round(e*1e5)).join(`,`);function Ku(e){let t=new Map;for(let n of e)for(let e=0;e<3;e++){let r=n[e],i=n[(e+1)%3],a=Gu(r),o=Gu(i),s=a<o?`${a}|${o}`:`${o}|${a}`;t.has(s)?t.delete(s):t.set(s,[r,i])}return[...t.values()]}function qu(e,t=.035){let n=zu(e),r=[],i=[],a=(e,a,o=!1)=>{for(let s=0;s<3;s++)r.push(e[s]-n[s]-(o?e[s+3]*t:0)),i.push(a[s])};for(let t of e)for(let e of t)a(e,Lu(e.slice(3)));let o=r.length/3;for(let t of e)for(let e of[t[2],t[1],t[0]])a(e,Lu(e.slice(3)).map(e=>-e),!0);for(let[t,n]of Ku(e)){let e=Lu(Iu(Fu(n,t),t.slice(3).map(e=>-e)));a(t,e),a(n,e),a(t,e,!0),a(n,e),a(n,e,!0),a(t,e,!0)}return{positions:r,normals:i,centre:n,outerCount:o}}function Ju(e,t,n){let r=[];for(let i=0;i<e.positions.length;i+=3)r.push([(e.positions[i]-t[0])*n,(e.positions[i+1]-t[1])*n,(e.positions[i+2]-t[2])*n,e.normals[i],e.normals[i+1],e.normals[i+2]]);let i=[];for(let t=0;t<e.indices.length;t+=3)i.push([r[e.indices[t]],r[e.indices[t+1]],r[e.indices[t+2]]]);return i}function Yu(e,t,n=320){return e.generation<4&&e.area>.004&&t+3<=n}var Xu={reach:.85,operations:3,detachReach:.78,depth:1},Zu={soft:{brittleness:92,thickness:20,softness:85,adhesion:25},classic:{brittleness:72,thickness:30,softness:65,adhesion:45},hard:{brittleness:30,thickness:45,softness:35,adhesion:72}},Qu={maxArea:.22,maxDiameter:.8};function $u(e){return e.alive&&!e.detached&&e.damaged&&e.area<=Qu.maxArea&&e.mesh.geometry.boundingBox.getSize(new V).length()<=Qu.maxDiameter}new V(0,1,0);var ed=new V,td=class{constructor(e,t){this.scene=e,this.audio=t,this.models=new Map,this.current=null,this.settings={...Zu.classic},this.tool={...Xu},this.gesture=null,this.serial=0,this.rng=Vu(419),this.wax=new zo({color:16052445,roughness:.44,metalness:0,clearcoat:.13,clearcoatRoughness:.5,side:2}),this.inside=new Ro({color:15262412,roughness:.77,side:2}),this.onchange=()=>{},this.onfracture=()=>{}}addModel(e){if(this.models.has(e.id))return this.models.get(e.id);let t=e.meshes.find(e=>e.mainCore)||e.meshes.find(e=>e.kind===`core`),n=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0];for(let e=0;e<t.positions.length;e+=3)for(let i=0;i<3;i++)n[i]=Math.min(n[i],t.positions[e+i]),r[i]=Math.max(r[i],t.positions[e+i]);let i=n.map((e,t)=>(e+r[t])*.5),a=r.map((e,t)=>e-n[t]),o=3.15/Math.max(...a),s={id:e.id,group:new xo,cores:[],pieces:[],originals:[],height:a[1]*o,coreSize:new V(...a.map(e=>e*o)),fractures:0,rebreaks:0,removedArea:0,crackedArea:0,cleared:0,pressure:0,contact:new V,inward:new V(0,-1,0),totalArea:0};s.group.position.y=s.height*.5+.1,s.group.rotation.set(0,-.3,0),s.group.visible=!1,this.scene.add(s.group);for(let t of e.meshes)if(t.kind===`wax`){let e=Ju(t,i,o);s.originals.push(e);let n=this.createPiece(e,0,0);s.pieces.push(n),s.group.add(n.mesh),s.totalArea+=n.area}else{let e=new Ba,n=t.positions.map((e,t)=>(e-i[t%3])*o);e.setAttribute(`position`,new Ma(n,3)),e.setAttribute(`normal`,new Ma(t.normals,3)),e.setIndex(t.indices),e.computeBoundingSphere();let r=new W(...t.color);r.convertSRGBToLinear();let a=new Qa(e,new zo({color:r,roughness:.36,metalness:0,clearcoat:.25,clearcoatRoughness:.43}));a.castShadow=!0,a.receiveShadow=!0,a.userData.core=!0,s.cores.push({mesh:a,rest:new Float32Array(n),normals:new Float32Array(t.normals)}),s.group.add(a)}return this.models.set(e.id,s),s}select(e){this.endPress();for(let t of this.models.values()){t.group.visible=t.id===e;for(let n of t.pieces)n.detached&&(n.mesh.visible=t.id===e)}return this.current=this.models.get(e),this.audio.select?.(e),this.onchange(),this.current}createPiece(e,t,n){let r=qu(e,this.settings.thickness/1e3),i=new Ba;i.setAttribute(`position`,new Ma(r.positions,3)),i.setAttribute(`normal`,new Ma(r.normals,3)),i.addGroup(0,r.outerCount,0),i.addGroup(r.outerCount,r.positions.length/3-r.outerCount,1),i.computeBoundingSphere(),i.computeBoundingBox();let a=new Qa(i,[this.wax,this.inside]);a.position.fromArray(r.centre),a.castShadow=!0,a.receiveShadow=!0;let o={mesh:a,surface:e,centre:new V(...r.centre),normal:new V(...Bu(e)),generation:t,born:n,area:Ru(e),damaged:t>0,detached:!1,alive:!0,offset:new V,velocity:new V,angular:new V,age:0,sleeping:!1,releaseAt:.55+this.rng()*.32};return a.userData.piece=o,o}pick(e){let t=this.current;if(!t)return null;t.group.updateMatrixWorld(!0);let n=e.intersectObjects([...t.pieces.filter(e=>e.alive).map(e=>e.mesh),...t.cores.map(e=>e.mesh)],!1);if(!n.length)return null;let r=n[0],i=r.object.userData.piece,a=t.group.worldToLocal(r.point.clone()),o=r.normal?r.normal.clone():r.face.normal.clone();o.transformDirection(r.object.matrixWorld),o.dot(e.ray.direction)>0&&o.negate();let s=o.negate().transformDirection(t.group.matrixWorld.clone().invert());return i&&!i.detached&&a.sub(i.offset),{hit:r,piece:i,local:a,inward:s}}beginPress(e){return this.endPress(),!e||!this.current?!1:(this.gesture={serial:++this.serial,pick:e,time:0,pressure:0,operations:0,lastSplit:-1,done:!1,detached:!!e.piece?.detached},this.gesture.detached||(this.current.contact.copy(e.local),this.current.inward.copy(e.inward)),!0)}movePress(e){if(!e||!this.gesture||this.gesture.detached||e.piece?.detached)return;let t=this.gesture;e.local.distanceTo(t.pick.local)>.16&&(t.pick=e,t.operations=0,t.done=!1,this.current.contact.copy(e.local),this.current.inward.copy(e.inward))}endPress(){this.gesture=null}split(e){let t=this.current,n=this.gesture;if(!n||!e.alive||!Yu(e,t.pieces.length))return!1;let r=Wu(e.surface,this.rng,2);if(r.length<2)return!1;let i=r.map(t=>this.createPiece(t,e.generation+1,n.serial));e.mesh.updateMatrixWorld(!0);for(let n of i)if(n.damaged=!0,n.offset.copy(e.offset),n.mesh.quaternion.copy(e.mesh.quaternion),e.detached)n.detached=!0,n.mesh.position.copy(n.centre).sub(e.centre).applyQuaternion(e.mesh.quaternion).add(e.mesh.position),n.velocity.copy(e.velocity),n.velocity.x+=(this.rng()-.5)*.12,n.velocity.z+=(this.rng()-.5)*.12,n.velocity.y=.07,n.angular.set((this.rng()-.5)*1.3,0,(this.rng()-.5)*1.3),this.scene.add(n.mesh);else{let r=n.centre.clone().sub(e.centre);r.addScaledVector(e.normal,-r.dot(e.normal)).normalize(),n.offset.addScaledVector(r,.006+this.rng()*.009).addScaledVector(n.normal,.01),n.mesh.position.copy(n.centre).add(n.offset),t.group.add(n.mesh)}return e.alive=!1,e.mesh.removeFromParent(),e.mesh.geometry.dispose(),t.pieces=t.pieces.filter(t=>t!==e),t.pieces.push(...i),t.fractures++,(e.generation>0||e.detached)&&t.rebreaks++,!e.detached&&e.generation===0&&(t.crackedArea+=e.area),e.detached?this.audio.crack?.(1):t.soundProgress=(t.soundProgress||0)+Math.min(1,e.area/(.85*.85)),this.onfracture(),this.onchange(),!0}detach(e,t=!0){let n=this.current;if(e.detached||!e.alive)return;n.group.updateMatrixWorld(!0),this.scene.attach(e.mesh),e.detached=!0,e.age=0;let r=e.normal.clone().transformDirection(n.group.matrixWorld);e.velocity.set(r.x*.4,-.05,r.z*.4),e.angular.set((this.rng()-.5)*3,(this.rng()-.5)*2,(this.rng()-.5)*3),n.removedArea+=e.area,t&&this.audio.peel?.(1),this.onchange()}update(e){let t=this.current;if(!t)return;e=Math.max(0,Math.min(e,.1)),t.pieces.length>300&&this.prune(280);let n=this.gesture;if(n){n.time+=e,n.pressure=Math.min(1,.08+n.time/.92);let r=(.2+(1-this.settings.brittleness/100)*.52)*(1+Math.max(0,this.settings.thickness-30)/100);if(n.detached)!n.done&&n.pressure>r&&(n.pick.piece.alive&&this.split(n.pick.piece),n.done=!0);else{let i=(.18+this.settings.softness/100*.45)*n.pressure*this.tool.depth;if(t.pressure+=(i-t.pressure)*Math.min(1,e*12),n.pressure>r&&n.time-n.lastSplit>.075&&n.operations<this.tool.operations){let e=t.pieces.filter(e=>!e.detached&&e.born!==n.serial&&e.centre.distanceTo(t.contact)<this.tool.reach&&e.normal.dot(t.inward)<.45&&Yu(e,t.pieces.length));n.pick.piece?.alive&&n.pick.piece.born!==n.serial&&!e.includes(n.pick.piece)&&Yu(n.pick.piece,t.pieces.length)&&e.unshift(n.pick.piece),e.sort((e,n)=>e.centre.distanceToSquared(t.contact)-n.centre.distanceToSquared(t.contact)),e.length&&this.split(e[0])&&(n.operations++,n.lastSplit=n.time)}for(let e of t.pieces){if(e.detached||!e.damaged)continue;let r=e.centre.distanceTo(t.contact),i=this.settings.adhesion/100;r<this.tool.detachReach&&n.pressure>e.releaseAt*(.55+i*.9)&&n.time>.38&&(e.born===n.serial||n.pressure>.75)&&this.detach(e)}}}else t.pressure*=Math.exp(-e*(5-this.settings.softness/100*3));t.pressure<1e-4&&(t.pressure=0),t.soundProgress>0&&(this.audio.progress?.(n?.pressure||0,t.soundProgress),t.soundProgress=0),this.deform(t);for(let n of t.pieces){if(!n.detached){if(n.mesh.position.copy(n.centre).add(n.offset),t.pressure>0){let e=n.centre.distanceToSquared(t.contact),r=Math.exp(-e/.52);n.mesh.position.addScaledVector(t.inward,t.pressure*r*(n.damaged?.82:.7))}continue}if(n.sleeping)continue;if(n.age+=e,n.velocity.y-=5.8*e,n.mesh.position.addScaledVector(n.velocity,e),n.mesh.rotateX(n.angular.x*e),n.mesh.rotateY(n.angular.y*e),n.mesh.rotateZ(n.angular.z*e),n.age<3){t.group.updateMatrixWorld();let e=t.group.worldToLocal(n.mesh.position.clone()),r=t.coreSize.clone().multiplyScalar(.48),i=new V(e.x/r.x,e.y/r.y,e.z/r.z),a=i.length();if(a<1&&a>.001){i.multiplyScalar(1/a);let e=i.multiply(r),o=t.group.localToWorld(e);n.mesh.position.lerp(o,.45)}}let r=n.mesh.geometry.boundingBox,i=1/0;for(let e=0;e<8;e++)ed.set(e&1?r.max.x:r.min.x,e&2?r.max.y:r.min.y,e&4?r.max.z:r.min.z).applyQuaternion(n.mesh.quaternion),i=Math.min(i,ed.y+n.mesh.position.y);i<.025&&(n.mesh.position.y+=.025-i,n.velocity.y=Math.abs(n.velocity.y)*.12,n.velocity.x*=.78,n.velocity.z*=.78,n.angular.multiplyScalar(.82),n.age>.45&&n.velocity.length()<.15&&(n.sleeping=!0,n.velocity.set(0,0,0),n.angular.set(0,0,0))),n.velocity.x*=Math.exp(-e*.3),n.velocity.z*=Math.exp(-e*.3)}}deform(e){if(e.lastDeformation===e.pressure&&!this.gesture)return;e.lastDeformation=e.pressure;let t=e.contact,n=e.inward,r=e.pressure;for(let i of e.cores){let e=i.mesh.geometry.attributes.position.array,a=i.rest;for(let i=0;i<a.length;i+=3){let o=a[i]-t.x,s=a[i+1]-t.y,c=a[i+2]-t.z,l=Math.exp(-(o*o+s*s+c*c)/.62)*r;e[i]=a[i]+n.x*l,e[i+1]=a[i+1]+n.y*l,e[i+2]=a[i+2]+n.z*l}i.mesh.geometry.attributes.position.needsUpdate=!0,i.boundsExpanded||=(i.mesh.geometry.boundingSphere.radius+=1,!0)}}rotate(e,t){let n=this.current;if(!n)return;this.endPress();let r=new kr().setFromEuler(new Bi(t,e,0,`XYZ`));n.group.quaternion.premultiply(r);let i=new ri;for(let e of n.cores)i.expandByObject(e.mesh);n.group.position.y+=.09-i.min.y}clear(){let e=this.current;if(!e)return 0;this.endPress();let t=e.pieces.filter(e=>e.detached);for(let e of t)e.alive=!1,e.mesh.removeFromParent(),e.mesh.geometry.dispose();return e.pieces=e.pieces.filter(e=>!e.detached),e.cleared+=t.length,this.onchange(),t.length}sweep(e,t,n,r=null){let i=this.current;if(!i||Math.hypot(t,n)<1e-5)return;if(r&&!r.piece?.detached){let e=r.piece;if(!e||!$u(e))return;this.detach(e,!1);let i=new V(t,0,n).clampLength(0,.18);e.velocity.addScaledVector(i,9),e.velocity.y=-.18,e.sleeping=!1,this.audio.swept?.(1),this.onchange();return}let a=0;for(let r of i.pieces)r.detached&&Math.hypot(r.mesh.position.x-e.x,r.mesh.position.z-e.z)<.85&&(r.sleeping=!1,r.age=4,r.velocity.x+=t*13+(r.mesh.position.x-e.x)*.4,r.velocity.z+=n*13+(r.mesh.position.z-e.z)*.4,r.velocity.y=.14,r.angular.set(.5,1,.4),a++);this.audio.swept?.(a);let o=i.pieces.filter(e=>e.detached&&Math.hypot(e.mesh.position.x,e.mesh.position.z)>6);for(let e of o)e.alive=!1,e.mesh.removeFromParent(),e.mesh.geometry.dispose();i.pieces=i.pieces.filter(e=>e.alive),i.cleared+=o.length,this.onchange()}reset(){let e=this.current;if(e){this.endPress();for(let t of e.pieces)t.alive=!1,t.mesh.removeFromParent(),t.mesh.geometry.dispose();e.pieces=e.originals.map(e=>this.createPiece(e,0,0));for(let t of e.pieces)e.group.add(t.mesh);e.pressure=0,e.soundProgress=0,e.lastDeformation=-1,e.removedArea=0,e.crackedArea=0,e.fractures=0,e.rebreaks=0,e.cleared=0,e.group.rotation.set(0,-.3,0),e.group.position.set(0,e.height*.5+.1,0),this.deform(e),this.onchange()}}setSettings(e){let t=this.settings.thickness;if(Object.assign(this.settings,e),t!==this.settings.thickness)for(let e of this.models.values())for(let t of e.pieces){let e=qu(t.surface,this.settings.thickness/1e3);t.mesh.geometry.dispose();let n=new Ba;n.setAttribute(`position`,new Ma(e.positions,3)),n.setAttribute(`normal`,new Ma(e.normals,3)),n.addGroup(0,e.outerCount,0),n.addGroup(e.outerCount,e.positions.length/3-e.outerCount,1),n.computeBoundingBox(),n.computeBoundingSphere(),t.mesh.geometry=n}}prune(e){let t=this.current;if(!t)return 0;let n=t.pieces.filter(e=>e.detached&&e.sleeping),r=0;for(let i of n){if(t.pieces.length-r<=e)break;i.alive=!1,i.mesh.removeFromParent(),i.mesh.geometry.dispose(),r++}return r&&(t.pieces=t.pieces.filter(e=>e.alive),t.cleared+=r,this.onchange()),r}progress(){let e=this.current;return e?{cracked:Math.min(1,e.crackedArea/e.totalArea),removed:Math.min(1,e.removedArea/e.totalArea)}:{cracked:0,removed:0}}stats(){let e=this.current;return e?{id:e.id,fractures:e.fractures,rebreaks:e.rebreaks,peeled:Math.min(100,Math.round(e.removedArea/e.totalArea*100)),pieces:e.pieces.length,loose:e.pieces.filter(e=>e.detached).length,cleared:e.cleared,pressure:e.pressure,gesture:this.gesture?.serial||0}:{id:null}}},nd=new W(`#2d2a2e`),rd=`#f3eee2`;function id(){let e=[120,190,255],t=new Uint8Array(e.length*4);e.forEach((e,n)=>t.set([e,e,e,255],n*4));let n=new Eo(t,e.length,1,en);return n.minFilter=n.magFilter=Nt,n.generateMipmaps=!1,n.needsUpdate=!0,n}var ad=`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,od=`
#include <packing>
uniform sampler2D tColor; uniform sampler2D tNormal; uniform sampler2D tDepth;
uniform vec2 px; uniform float near; uniform float far; uniform float scale; uniform vec3 ink; uniform float hatch;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
float viewZ(vec2 uv) { return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far); }
vec3 nrm(vec2 uv) { return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }
void main() {
  // Hand-drawn wobble: the edge lookup drifts by ~1.5px along a low-frequency noise field.
  vec2 frag = vUv / px;
  vec2 wob = (vec2(noise(frag / (38.0 * scale)), noise(frag / (38.0 * scale) + 17.3)) - 0.5) * 3.0 * px * scale;
  vec2 uv = vUv + wob;
  float zc = viewZ(uv); vec3 nc = nrm(uv);
  float edge = 0.0;
  vec2 o = px * scale * 1.4;
  vec2 offs[4]; offs[0] = vec2(o.x, 0.0); offs[1] = vec2(-o.x, 0.0); offs[2] = vec2(0.0, o.y); offs[3] = vec2(0.0, -o.y);
  float nearer = 0.0;
  for (int i = 0; i < 4; i++) {
    float zs = viewZ(uv + offs[i]); vec3 ns = nrm(uv + offs[i]);
    float zn = min(zc, zs), dz = abs(zs - zc) / max(zn, 0.001);
    nearer += step(0.012, (zc - zs) / max(zn, 0.001));
    float e = max(smoothstep(0.012, 0.03, dz), smoothstep(0.35, 0.6, 1.0 - dot(nc, ns)));
    edge = max(edge, e * (1.0 - smoothstep(16.0, 24.0, zn))); // the far floor / horizon stays blank paper
  }
  edge *= 1.0 - step(3.5, nearer); // a pixel deeper than all four neighbours is a pinhole between wax plates, not a line
  vec3 col = texture2D(tColor, vUv).rgb;
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  // Diagonal hatching in the shadow tone, cross-hatching in the deepest shadow.
  float sp = 7.0 * scale;
  float h1 = 1.0 - smoothstep(0.0, 0.9 * scale, abs(mod(gl_FragCoord.x + gl_FragCoord.y, sp) - sp * 0.5) - 0.35 * scale);
  float h2 = 1.0 - smoothstep(0.0, 0.9 * scale, abs(mod(gl_FragCoord.x - gl_FragCoord.y, sp) - sp * 0.5) - 0.35 * scale);
  float shade = h1 * (1.0 - smoothstep(0.5, 0.6, lum)) + h2 * (1.0 - smoothstep(0.34, 0.42, lum));
  col = mix(col, ink, clamp(shade, 0.0, 1.0) * hatch);
  col += (hash(floor(frag / scale)) - 0.5) * 0.035; // paper grain
  col = mix(col, ink, edge * 0.92);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,sd=class{color;normal;normalMaterial=new Vo({side:2});quad;post=new To;postCamera=new us(-1,1,1,-1,0,1);uniforms;gradientMap=id();toon=new Map;solid=new Map;constructor(e){this.color=new ei(1,1,{samples:e,type:Kt}),this.normal=new ei(1,1,{depthTexture:new Fo(1,1)}),this.uniforms={tColor:{value:this.color.texture},tNormal:{value:this.normal.texture},tDepth:{value:this.normal.depthTexture},px:{value:new B(1,1)},near:{value:.05},far:{value:50},scale:{value:1},ink:{value:nd.clone().convertSRGBToLinear()},hatch:{value:.28}},this.quad=new Qa(new Lo(2,2),new lo({vertexShader:ad,fragmentShader:od,uniforms:this.uniforms,depthTest:!1,depthWrite:!1})),this.quad.frustumCulled=!1,this.post.add(this.quad)}setSize(e,t,n){this.color.setSize(e,t),this.normal.setSize(e,t),this.uniforms.px.value.set(1/e,1/t),this.uniforms.scale.value=Math.max(1,n)}setSamples(e){this.color.samples!==e&&(this.color.samples=e,this.color.dispose())}render(e,t,n){this.uniforms.near.value=n.near,this.uniforms.far.value=n.far;let r=t.background,i=t.fog;e.setRenderTarget(this.normal),t.overrideMaterial=this.normalMaterial,t.background=null,t.fog=null,e.setClearColor(8421631,1),e.clear(),e.render(t,n),t.overrideMaterial=null,t.background=r,t.fog=i,e.setRenderTarget(this.color),e.render(t,n),e.setRenderTarget(null),e.render(this.post,this.postCamera)}apply(e,t){let n=e=>t===`sketch`?this.toonOf(e):this.solid.get(e)??e;e.traverse(e=>{let t=e;t.isMesh&&t!==this.quad&&(t.material=Array.isArray(t.material)?t.material.map(n):n(t.material))})}toonOf(e){if(this.solid.has(e))return e;let t=this.toon.get(e);if(!t){let n=e;t=new Bo({color:n.color?.clone()??new W(16777215),gradientMap:this.gradientMap,side:n.side}),this.toon.set(e,t),this.solid.set(t,e)}return t}solidOf(e){return this.solid.get(e)??e}},cd=class{canvas;host;mixer;renderer;sketch;style=`sketch`;floor;lights={};scene=new To;camera=new ho(34,1,.05,50);target=new V(0,.7,0);zoom=1;sim;raycaster=new Ds;pointer=new B;modelCache=new Map;loadRevision=0;ready=!1;model=null;tool=`press`;interactive=!1;visible=!0;reducedMotion=!1;pointers=new Map;pinch=null;contactPointer=null;gestureMode=null;last={x:0,y:0};sweepPoint=null;lastFrame=performance.now();lastWork=0;frames=0;frameMs=[];lastClient={x:0,y:0};onWork=()=>{};onStatus=()=>{};onBlocked=()=>{};onTool=()=>{};constructor(e,t,n){this.host=e,this.canvas=t,this.mixer=n}init(e,t=`sketch`){try{this.renderer=new Nu({canvas:this.canvas,antialias:e===`high`,alpha:!1,powerPreference:`high-performance`})}catch(e){return console.error(e),this.onStatus({kind:`webgl`,text:`3D 화면을 열 수 없어요. 가게 운영은 계속되고, 진행 중 작업의 인정 기록도 저장돼 있어요.`}),!1}let n=this.renderer;this.sketch=new sd(e===`high`?4:0),this.setQuality(e),n.outputColorSpace=Yn,n.toneMapping=4,n.toneMappingExposure=1.15;let r=this.scene;r.background=new W(`#f3eee2`),r.fog=new wo(`#f3eee2`,13,27);let i=new as(16776174,10458253,1.65);r.add(i);let a=new fs(16775660,2.8);a.position.set(-3,7,4),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.5,far:18}),a.shadow.normalBias=.015,a.shadow.bias=-15e-5,a.shadow.radius=4,r.add(a);let o=new fs(15792127,1.2);o.position.set(5,3,-2),r.add(o),this.lights={hemi:i,key:a,fill:o};let s=new Qa(new Lo(200,200),new Ro({color:15128774,roughness:.92}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,r.add(s),this.floor=s;let c=new To;c.background=new W(11844014);for(let[e,t]of[[[-4,4,0],[1,5,7]],[[4,3,2],[1,4,4]],[[0,6,0],[6,1,6]]]){let n=new Qa(new to(t[0],t[1],t[2]),new Ta({color:16777215}));n.position.set(e[0],e[1],e[2]),c.add(n)}let l=new rc(n);return r.environment=l.fromScene(c,.12).texture,r.environmentIntensity=.32,c.traverse(e=>{let t=e;t.geometry?.dispose(),t.material?.dispose()}),l.dispose(),this.sim=new td(r,this.mixer.crack),this.setStyle(t),new ResizeObserver(()=>this.resize()).observe(this.host),this.bindInput(),this.canvas.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.ready=!1,this.release(),this.onStatus({kind:`webgl`,text:`3D 연결이 끊겼어요. 가게 운영은 계속돼요. 새로고침하면 작업대를 다시 열어요(인정된 진행은 다시 보상하지 않아요).`})}),this.resize(),requestAnimationFrame(e=>this.animate(e)),!0}setQuality(e){this.renderer&&(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e===`high`?1.7:1)),this.renderer.shadowMap.enabled=e===`high`,this.renderer.shadowMap.type=2,this.sketch?.setSamples(e===`high`?4:0),this.resize())}setStyle(e){this.style=e;let t=this.renderer,n=this.sketch,{hemi:r,key:i,fill:a}=this.lights;if(!t||!n||!this.sim||!r||!i||!a)return;let o=e===`sketch`;this.sim.wax=o?n.toonOf(this.sim.wax):n.solidOf(this.sim.wax),this.sim.inside=o?n.toonOf(this.sim.inside):n.solidOf(this.sim.inside),n.apply(this.scene,e),t.toneMapping=o?0:4;let s=o?rd:`#f3eee2`;this.scene.background.set(s),this.scene.fog.color.set(s),this.scene.environmentIntensity=o?0:.32,r.intensity=o?.75:1.65,i.intensity=o?2.5:2.8,a.intensity=o?.25:1.2,i.shadow.radius=o?1:4,o&&this.floor&&this.floor.material.color.set(14998216)}frame(){let e=this.sim?.current;if(!e)return;this.target.set(0,e.height*.39,0);let t=(this.camera.aspect<.85?1.25:1)*this.zoom*this.view.k;this.camera.position.set(4.5*t,4.5*t+this.target.y,6.6*t),this.camera.lookAt(this.target);let{w:n,h:r}=this.size;n>1&&r>1&&this.camera.setViewOffset(n,r,-this.view.x,-this.view.y,n,r)}size={w:0,h:0};safe={l:0,t:0,r:0,b:0};view={x:0,y:0,k:1};viewGoal(){let{w:e,h:t}=this.size,n=this.safe,r=Math.max(1,e-n.l-n.r),i=Math.max(1,t-n.t-n.b);return{x:(n.l-n.r)/2,y:(n.t-n.b)/2,k:Or.clamp(Math.min(r/e,i/t)**-.7,1,1.5)}}setSafeArea(e){this.safe=e,(this.reducedMotion||!this.ready)&&(this.view=this.viewGoal(),this.frame())}resize(){if(!this.renderer)return;let e=this.host.getBoundingClientRect();if(e.width<2||e.height<2)return;this.renderer.setSize(e.width,e.height,!1),this.size={w:e.width,h:e.height};let t=this.renderer.getDrawingBufferSize(new B);this.sketch?.setSize(t.x,t.y,this.renderer.getPixelRatio()),this.camera.aspect=e.width/e.height,this.view=this.viewGoal(),this.camera.updateProjectionMatrix(),this.frame()}fit(){this.release(),this.zoom=1,this.frame()}async show(e,t){if(!this.renderer)return!1;this.release();let n=++this.loadRevision;this.ready=!1,this.onStatus({kind:`loading`,text:`말랑이를 준비하고 있어요`});try{this.modelCache.has(e)||this.modelCache.set(e,fetch(`./assets/models/${e}.json`).then(async e=>{if(!e.ok)throw Error(`Model HTTP ${e.status}`);return e.json()}).catch(t=>{throw this.modelCache.delete(e),t}));let r=await this.modelCache.get(e);return n===this.loadRevision&&(this.sim.addModel(r),this.sketch?.apply(this.scene,this.style),this.sim.select(e),this.mixer.crack.select(e),t&&this.sim.reset(),this.model=e,this.zoom=1,this.frame(),this.ready=!0,this.lastWork=fe(this.sim.progress()),this.onStatus({kind:`ready`,text:``}),!0)}catch(e){return n===this.loadRevision&&(console.error(e),this.onStatus({kind:`error`,text:`말랑이를 불러오지 못했어요. 네트워크를 확인하고 다시 시도해주세요.`}),!1)}}configure(e,t){this.sim&&(this.sim.setSettings({...Zu[c[e].preset]}),this.sim.tool={...Xu,...l[t].sim})}resetPhysics(){this.sim?.current&&(this.release(),this.sim.reset(),this.lastWork=0,this.frame())}clear(){return this.sim?.current?this.sim.clear():0}work(){return this.sim?.current?fe(this.sim.progress()):0}setTool(e){this.release(),this.tool=e,this.onTool(e)}updateRay(e){let t=this.canvas.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera),this.lastClient={x:e.clientX,y:e.clientY}}ground(){return this.raycaster.ray.intersectPlane(new Ao(new V(0,1,0),0),new V)}release(e=!0){this.sim?.endPress(),this.mixer.crack.endSweep(e),this.gestureMode=null,this.contactPointer=null,this.sweepPoint=null,this.host.classList.remove(`pressing`)}bindInput(){let e=this.canvas;e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,t=>{if(!this.ready)return;t.preventDefault(),e.focus({preventScroll:!0}),this.mixer.unlock(),this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});try{e.setPointerCapture(t.pointerId)}catch{}if(this.pointers.size>1){this.release(),this.gestureMode=`multi`;let e=[...this.pointers.values()];this.pinch=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y);return}this.contactPointer=t.pointerId,this.last={x:t.clientX,y:t.clientY},this.updateRay(t);let n=t.button===2||t.shiftKey||t.altKey||this.tool===`rotate`?`rotate`:this.tool;n!==`rotate`&&!this.interactive&&(this.onBlocked(),n=`rotate`),this.gestureMode=n,n===`press`&&this.sim.beginPress(this.sim.pick(this.raycaster)),n===`sweep`&&(this.sweepPoint=this.ground(),this.mixer.crack.beginSweep()),this.host.classList.add(`pressing`)}),e.addEventListener(`pointermove`,e=>{if(this.updateRay(e),this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size>1){let e=[...this.pointers.values()],t=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y);this.pinch&&(this.zoom=Or.clamp(this.zoom*this.pinch/Math.max(1,t),.6,1.7),this.frame()),this.pinch=t;return}if(e.pointerId!==this.contactPointer)return;let t=e.clientX-this.last.x,n=e.clientY-this.last.y;if(this.last={x:e.clientX,y:e.clientY},this.gestureMode===`rotate`&&this.sim.rotate(t*.009,n*.007),this.gestureMode===`press`&&this.sim.movePress(this.sim.pick(this.raycaster)),this.gestureMode===`sweep`){let e=this.ground();e&&this.sweepPoint&&this.sim.sweep(e,e.x-this.sweepPoint.x,e.z-this.sweepPoint.z,this.sim.pick(this.raycaster)),this.sweepPoint=e}});let t=t=>{this.pointers.delete(t.pointerId),this.pinch=null,this.release(t.type===`pointercancel`);try{e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)}catch{}};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`lostpointercapture`,e=>{this.pointers.delete(e.pointerId)&&this.release()}),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.release(),this.zoom=Or.clamp(this.zoom*Math.exp(e.deltaY*.001),.6,1.7),this.frame()},{passive:!1}),window.addEventListener(`blur`,()=>{this.release(),this.pointers.clear()}),e.addEventListener(`keydown`,t=>{if((t.key===` `||t.key===`Enter`)&&!t.repeat&&this.ready){if(t.preventDefault(),!this.interactive){this.onBlocked();return}let n=e.getBoundingClientRect();this.updateRay({clientX:n.left+n.width/2,clientY:n.top+n.height*.45}),this.gestureMode=`press`,this.sim.beginPress(this.sim.pick(this.raycaster)),this.host.classList.add(`pressing`)}if(t.key.startsWith(`Arrow`)){t.preventDefault();let e={ArrowLeft:[-.15,0],ArrowRight:[.15,0],ArrowUp:[0,-.12],ArrowDown:[0,.12]}[t.key];e&&this.sim.rotate(e[0],e[1])}}),e.addEventListener(`keyup`,e=>{(e.key===` `||e.key===`Enter`)&&this.release()})}animate(e){requestAnimationFrame(e=>this.animate(e));let t=Math.max(0,(e-this.lastFrame)/1e3),n=Math.min(t,.1);if(this.lastFrame=e,document.hidden||!this.visible||!this.renderer)return;if(this.ready){this.sim.update(n);let e=fe(this.sim.progress());e>this.lastWork+1e-9?(this.lastWork=e,this.onWork(e)):e<this.lastWork&&(this.lastWork=e)}let r=this.viewGoal(),i=this.view;if(Math.abs(r.x-i.x)+Math.abs(r.y-i.y)>.3||Math.abs(r.k-i.k)>.002){let e=this.reducedMotion?1:1-Math.exp(-n*7);this.view={x:i.x+(r.x-i.x)*e,y:i.y+(r.y-i.y)*e,k:i.k+(r.k-i.k)*e},this.frame()}this.mixer.crack.update(),(this.host.parentElement??this.host).style.setProperty(`--pressure`,String(this.sim?.gesture?.pressure??0)),this.style===`sketch`&&this.sketch?this.sketch.render(this.renderer,this.scene,this.camera):this.renderer.render(this.scene,this.camera),this.frames++,this.frameMs.push(t*1e3),this.frameMs.length>120&&this.frameMs.shift()}fps(){let e=this.frameMs.reduce((e,t)=>e+t,0)/Math.max(1,this.frameMs.length);return e>0?1e3/e:0}targets(e=!1){let t=this.sim?.current;if(!t)return[];this.scene.updateMatrixWorld(!0);let n=this.canvas.getBoundingClientRect();return t.pieces.filter(t=>t.detached===e&&t.alive&&t.area>.005).map(e=>{let t=new V;return e.mesh.getWorldPosition(t),t.addScaledVector(e.normal.clone().transformDirection(e.mesh.matrixWorld),.006),t.project(this.camera),Math.abs(t.x)>.95||Math.abs(t.y)>.95?null:(this.raycaster.setFromCamera(new B(t.x,t.y),this.camera),this.sim.pick(this.raycaster)?.piece===e?{x:n.left+(t.x+1)*.5*n.width,y:n.top+(1-t.y)*.5*n.height,area:e.area}:null)}).filter(e=>!!e).sort((e,t)=>t.area-e.area)}memory(){let e=this.renderer?.info.memory;return{geometries:e?.geometries??0,textures:e?.textures??0}}},ld={Butter:`<path d="m5 14 19-5 12 8-18 6z" fill="#f5de8b"/><path d="m5 14 13 9v12L5 26z" fill="#e7c565"/><path d="m18 23 18-6v12l-18 6z" fill="#edcf77"/><path d="m5 14 19-5 12 8-18 6z" fill="#faf5dc"/><path d="m12 13 12-3 5 3-13 4z" fill="#eadabb"/>`,Chocolate:`<path d="m5 15 21-7 12 14-21 12-12-10z" fill="#946d51"/><path d="m7 15 19-6 10 12-19 11z" fill="#bc9471"/><path d="m13 12 11 15M21 10l11 13M9 22l21-10" stroke="#916546" stroke-width="1.3"/><path d="m5 15 13-4 7 9-10 6-10-6z" fill="#f4eed9"/>`,Corn:`<path d="M13 29c-13-13 1-23 12-21 14 3 6 21-10 25" fill="#e6cb6c"/><path d="m13 17 12 10M10 21l10 9m-6-17 13 9m-7-11 10 5" stroke="#d2b24c"/><path d="M11 25C3 14 15 5 23 9l2 6Z" fill="#f7f2d9"/><path d="M12 29c-5 5 1 10 5 7l7-12-12 5z" fill="#9ca977"/>`,CrunchMango:`<path d="M10 30C0 19 17 3 29 10c12 8 0 25-11 25Z" fill="#eeba61"/><path d="M9 26C2 18 19 5 28 11l-5 14-14 1z" fill="#faf2d8"/><path d="m25 10 3-4" stroke="#96965a" stroke-width="2"/>`,JumboCheese:`<path d="m5 24 20-16 12 19-24 8z" fill="#e8c360"/><path d="m5 24 20-16 12 13-24 8z" fill="#f8e8b3"/><path d="m5 24 8 5v6l-8-5z" fill="#d9b755"/><ellipse cx="22" cy="28" rx="3" ry="2.5" fill="#cfa64a"/><ellipse cx="31" cy="25" rx="2" ry="2" fill="#cfa64a"/><path d="m5 24 20-16 5 5-17 16z" fill="#faf5dc"/>`,Peach:`<path d="M21 13C9 4 0 22 13 33c7 6 17 0 21-9 5-13-7-16-13-11" fill="#e1a598"/><path d="M21 13C12 6 3 21 12 30l11-9-2-8z" fill="#faf2df"/><path d="M22 13c1 6 5 11 1 19" stroke="#c79088"/><path d="M21 12c-1-10 11-8 14-7-3 7-8 8-14 7" fill="#99ab78"/>`},ud=e=>`<svg viewBox="0 0 42 42" aria-hidden="true">${ld[e]}</svg>`,dd={counter:`<path d="M3 10h18l-1.5-5h-15z"/><path d="M5 10v9h14v-9M9 19v-5h6v5"/>`,lab:`<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7.5 15h9"/>`,coating:`<path d="M4 20c3 0 4-2 4-4l8-8 3 3-8 8c-2 0-4 1-4 4"/><path d="m14 6 2-2 4 4-2 2"/>`,showroom:`<path d="M3 4h18v11H3z"/><path d="m8 21 4-6 4 6M7 11l3-3 2 2 4-4"/>`,idle:`<path d="M4 11h16v4H4zM6 15v4m12-4v4M7 11V7h10v4"/>`},fd={counter:`판매대`,lab:`연구 책상`,coating:`코팅 작업실`,showroom:`체험·전시 구역`,idle:`대기실`},pd=e=>`<svg viewBox="0 0 24 24" aria-hidden="true">${dd[e]}</svg>`,md=(e,t=fd[e])=>`<svg class="ic ic-z-${e}" viewBox="0 0 24 24" aria-hidden="true">${dd[e]}</svg>${t?`<span class="sr">${t} </span>`:``}`,hd={coin:`<circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity=".25"/><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/>`,research:`<path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.1V16h5v-.1c0-.8.4-1.6 1.1-2.1A6 6 0 0 0 12 3Z" fill="currentColor" fill-opacity=".22"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.1V16h5v-.1c0-.8.4-1.6 1.1-2.1A6 6 0 0 0 12 3ZM9.5 19h5M10.5 21.5h3"/>`,star:`<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="currentColor" fill-opacity=".3"/><path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z"/>`,review:`<path d="M4 5h16v11H10l-4.5 4v-4H4z" fill="currentColor" fill-opacity=".18"/><path d="M4 5h16v11H10l-4.5 4v-4H4zM8 9.5h8M8 12.5h5"/>`,worker:`<circle cx="12" cy="8" r="3.6" fill="currentColor" fill-opacity=".22"/><circle cx="12" cy="8" r="3.6"/><path d="M5 20.5a7 7 0 0 1 14 0"/>`,seat:`<path d="M7 3.5h10v8H7zM5 11.5h14M7 11.5V21M17 11.5V21M7 16.5h10"/>`,demand:`<path d="M3 4h2.5l2 11h10.5l2-8H6.3"/><circle cx="9" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/>`,throughput:`<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" fill="currentColor" fill-opacity=".15"/><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9"/>`,price:`<path d="M3 11.5V4h7.5l10 10-7.5 7.5z" fill="currentColor" fill-opacity=".18"/><path d="M3 11.5V4h7.5l10 10-7.5 7.5z"/><circle cx="7.5" cy="8.5" r="1.4"/>`,time:`<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.2 2"/>`,direct:`<path d="M8 13V5a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v4-2a2 2 0 0 1 4 0v6c0 4-3 6-6 6h-1c-2 0-4-1-5-3l-4-5a2 2 0 0 1 3-2l1 1"/>`,xp:`<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" fill="currentColor" fill-opacity=".22"/><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z"/>`,lock:`<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/>`,check:`<path d="m5 12.5 4.5 4.5L19 7"/>`,goal:`<path d="M5 21V3.5M5 4h12l-2.5 4L17 12H5"/>`,effort:`<path d="M12 21a8 8 0 1 1 8-8"/><path d="M12 13 16 8"/><circle cx="12" cy="13" r="1.3"/>`,hire:`<circle cx="10" cy="8" r="3.5"/><path d="M3 20.5a7 7 0 0 1 14 0M19.5 7v6M16.5 10h6"/>`,level:`<path d="M12 20V5M6 11l6-6 6 6"/><path d="M5 20h14"/>`,training:`<path d="m2 9.5 10-5 10 5-10 5z"/><path d="M6 11.5v5c3.5 2.4 8.5 2.4 12 0v-5M22 9.5v5"/>`,space:`<path d="M5 21V4.5a1 1 0 0 1 1-1h8.5V21M14.5 3.5l4.5 2V21M3 21h18"/><circle cx="12" cy="12.5" r=".9" fill="currentColor"/>`,models:`<path d="M4 15.5C4 10.5 7.6 6 12 6s8 4.5 8 9.5c0 3-3.2 4.5-8 4.5s-8-1.5-8-4.5Z" fill="currentColor" fill-opacity=".18"/><path d="M4 15.5C4 10.5 7.6 6 12 6s8 4.5 8 9.5c0 3-3.2 4.5-8 4.5s-8-1.5-8-4.5Z"/><circle cx="9.5" cy="13.5" r=".9" fill="currentColor"/><circle cx="14.5" cy="13.5" r=".9" fill="currentColor"/>`,facility:`<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>`,tools:`<path d="M4 20c3 0 4-2 4-4l8-8 3 3-8 8c-2 0-4 1-4 4"/><path d="m14 6 2-2 4 4-2 2"/>`,payback:`<path d="M3 12a9 9 0 1 0 2.6-6.4M3 4v4.5h4.5"/><path d="M12 7.5v4.5l3 2"/>`,idle:dd.idle},gd={coin:`코인`,research:`연구`,star:`별점`,review:`리뷰`,worker:`일꾼`,seat:`자리`,demand:`수요`,throughput:`처리량`,price:`단가`,time:`시간`,direct:`직접 작업 보상`,xp:`경험`,lock:`잠김`,check:`완료`,goal:`다음 목표`,effort:`손 가는 정도`,hire:`고용`,level:`강화`,training:`공통 교육`,space:`공간 개방`,models:`말랑이`,facility:`설비`,tools:`코팅·도구`,payback:`회수`,idle:`대기`},q=(e,t=gd[e])=>`<svg class="ic ic-${e}" viewBox="0 0 24 24" aria-hidden="true">${hd[e]}</svg>${t?`<span class="sr">${t} </span>`:``}`,J=(e,t,n=``,r)=>`<span class="amt amt-${e}${n?` ${n}`:``}">${q(e,r)}${t}</span>`,_d=(e,t,n,r=``)=>`<span class="amt amt-${e}${r?` ${r}`:``}">${q(e,``)}<span class="w">${t}</span> ${n}</span>`,Y=e=>document.getElementById(e);function vd(e,t={},n=``){let r=document.createElement(e);for(let[e,n]of Object.entries(t))r.setAttribute(e,n);return n&&(r.innerHTML=n),r}function X(e,t){e.textContent!==t&&(e.textContent=t)}function Z(e,t){e.dataset.html!==t&&(e.innerHTML=t,e.dataset.html=t)}var Q=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function yd(e,t=`info`){let n=Y(`toast-layer`),r=vd(`div`,{class:`toast ${t}`},e);for(n.appendChild(r);n.children.length>3;)n.firstElementChild.remove();setTimeout(()=>r.remove(),3200)}var bd=class{layer=Y(`fx-layer`);pool=[];i=0;reduced=!1;spawn(e,t,n,r=`coin`){if(this.reduced)return;let i=this.layer.getBoundingClientRect(),a=this.pool[this.i%16];a||(a=vd(`div`),this.layer.appendChild(a),this.pool.push(a)),this.i++,a.className=`float-num ${r}`,a.innerHTML=`${q(r)}${n}`,a.style.setProperty(`--x`,`${e-i.left}px`),a.style.setProperty(`--y`,`${t-i.top}px`),a.style.animation=`none`,a.offsetWidth,a.style.animation=``}};function xd(e,t=`확인`){let n=Y(`confirm`),r=Y(`confirm-yes`),i=Y(`confirm-no`);return Y(`confirm-text`).textContent=e,r.textContent=t,n.hidden=!1,r.focus(),new Promise(e=>{let t=t=>{n.hidden=!0,r.onclick=i.onclick=null,window.removeEventListener(`keydown`,a,!0),e(t)},a=e=>{e.key===`Escape`&&(e.stopPropagation(),t(!1))};r.onclick=()=>t(!0),i.onclick=()=>t(!1),window.addEventListener(`keydown`,a,!0)})}var Sd=e=>e===`idle`?`대기실`:d[e].name;function Cd(e){return e.kind===`reviews`?`리뷰 ${R(e.need)} (현재 ${L(Math.floor(e.have),0)})`:e.kind===`stars`?`최고 별점 ★${St(e.need)} (현재 ★${St(e.have)})`:e.kind===`research`?`연구 ${R(e.need)} (현재 ${L(e.have,0)})`:e.kind===`level`?`먼저: ${y.get(e.need)?.name??e.need} Lv ${e.level} (현재 Lv ${e.have})`:e.kind===`zone`?`${d[e.need].name} 개방`:`먼저: ${y.get(String(e.need))?.name??e.need}`}function wd(e){if(e.bought)return`완료`;if(!e.conditionMet){let t=e.missing[0],n=e.affordable?` · 코인은 충분`:``;return t.kind===`reviews`?`리뷰 ${R(Math.ceil(t.need-t.have))} 부족${n}`:t.kind===`stars`?`별점 ★${St(t.need)} 필요${n}`:t.kind===`research`?`연구 ${R(t.need-t.have)} 부족${n}`:t.kind===`zone`?`${d[t.need].name} 개방 필요${n}`:t.kind===`level`?`선행: ${y.get(t.need)?.name??t.need} Lv ${t.level}${n}`:`선행 구매 필요${n}`}return e.affordable?``:`조건 달성 · 코인 ${R(e.shortCoins)} 부족`}function Td(e){return e.kind===`reviews`?J(`review`,`${L(Math.floor(e.have),0)}/${R(e.need)}`,`need`):e.kind===`stars`?J(`star`,`${St(e.have)}/${St(e.need)}`,`need`,`최고 별점`):e.kind===`research`?J(`research`,`${L(e.have,0)}/${R(e.need)}`,`need`):e.kind===`level`?`<span class="need">${q(`lock`,`먼저:`)}${Q(y.get(e.need)?.name??e.need)} Lv ${e.have}/${e.level}</span>`:e.kind===`zone`?`<span class="need">${q(`lock`,`먼저:`)}${Q(d[e.need].name)}</span>`:`<span class="need">${q(`lock`,`먼저:`)}${Q(y.get(String(e.need))?.name??String(e.need))}</span>`}function Ed(e){if(e.bought)return`${q(`check`,``)}완료`;if(!e.conditionMet){let t=e.missing[0];return t.kind===`reviews`?`${J(`review`,R(Math.ceil(t.need-t.have)))} 부족`:t.kind===`stars`?`${J(`star`,St(t.need),``,`최고 별점`)} 필요`:t.kind===`research`?`${J(`research`,R(t.need-t.have))} 부족`:Td(t)}return e.affordable?``:`${J(`coin`,R(e.shortCoins))} 부족`}function Dd(e,t){switch(e){case`locked`:return`${Sd(t)}은(는) 아직 열리지 않았어요.`;case`full`:return`${Sd(t)} 정원이 가득 찼어요.`;case`same`:return`이미 그 자리에 있어요.`;case`committed`:return`코팅 작업실 인원은 진행 중인 작업을 지원하고 있어요. 작업을 끝내거나 중단한 뒤 옮길 수 있어요.`;default:return`옮길 수 없어요.`}}var Od=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKSkpKioqKSkpKioqKCgoKioqKioqKioqKSkpKSkpJiYmKSkpIiIiKSkpKCgoAAAA4uTl09bYeXl58fHxh4eHr6+vlJSUztLUu8DDUVFR5OTkoaGh5ujp19fX8PHybGxs+vr62NvdvLy8ycnJ3d/hNzc3REREwMTHys3Q9fb2tru/6+3uX19fxcnMsre7Kioq////mtYpuAAAABB0Uk5Tj59vz19P738f3y+vD78/AKIDXU4AAAHqSURBVFjD7ZbXcoNADEWxcQEMxL3hTm/S/v/XZQsemywZFucx6MHgGXSQVlcS2tcfTesBPaAH/A+AW9knAHc4M/Fps5HRETCdcMeooBbxW31odwDo1Pfq+aSyo1dQxMRSBgww3JC6rTZXnNiKgCniT39mV5yqAYwJFg3+5IGmGkDD8Mg98iApmQW5IBxwrAQwcUufvpXwsjIVITgqAAORBRAD7JMgpxbs9pAFIgRXATDkJ3CHLH+lfwe404vfEIIMcHgJMsjfD/AEcOOFsNoBJq4ISQHqJcjgRH+3qLUCLLzyN5Z1wA4WzTlocgYPnvSiDphz4lmWgiYFELHnEwjqgIvICbENMMIl4UW8/NChAITSKWpSHzAVkT2QRkAhKUEGrEUKp5r7LanOoDWCMR54G0Bc848hozmdw/Yq2ELINITdG0D4UynrdmsZZyIH+s7k9KbkC2+m0GiXsovhijmlGUAs5Exv5+y6xIFKN1YhkJT1M1NDGleyLNTmga2jV4lnV42DjI8DEqGhNFAsOtLOApHe99Q/ufE/PuqKQ9V2MPTkkRg2ZfDLXhi9gqg2w+OAOOqwmQwTo8fT+7xmy2lgdNqNtsmW09b3fW/Jt6PbdbnaGr7t1s/WuzscOI4zm477b6Qe0AN6gIp9A9FAQxKegB9qAAAAAElFTkSuQmCC`,kd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAASlQTFRFsbe8foOFOjo8aWttnqKmNDQ1n6Oosre6////sra6Nzc3u7u71tbYR0dHOjo6////RkZGnJyc8PDwZ2lsuLi4TExNTExOs7i+KSkpKSkpKCgoKSkpKioqKSkpKioqKioqKSkpKioqKCgoJiYmKSkpIiIiKioqAAAAa2xtbnByxsnLoaWox8nKwcTHiYuMgIKEmJyfXV5g7O3tP0BAm52eSEhJtbe5f4KEsLO1qa6xTE1OZWdpOzs8rrK2dnl7naGkQ0RFMjIzh4eHeXl5oaGhr6+vvLy8bGxs5OTkRERElJSUUVFRX19f5ujp19fX8fHxycnJ3d/hys3Q09bYNzc38PHy6+3u4uTlwMTHxcnMu8DDztLU9fb22Nvdtru/+vr6Kioqsre7////DNs4MQAAACh0Uk5TX39/39/P758PP+8Pb2/PH+/P768vv38vH28/j3/fn8+vT18vvw/vAOS7M4IAAARHSURBVFjD7Vdpe9pGEHabHknvpkfAgEEIyWnT+84dHAMGiVtISLDS7P7/H9GZHUElg23hPE8/ZT8A9rP77hzvvDN7dPqG6+gtQGEAqwG4qqXbApRt4FWrGNbhAEYdwO1MJp0eYdjlQwGaeHyieHUHLsDJQQDWCcBAZdaFC3WrOIBpQ3+k8us11M2iACUbBmOldhBssyBAC87pRCLCMJwJ4a8ZwQXbKgRgAND+odyueJpQHDyoFAJoQY/uj+TM930hVkuECMmKAdSKAJQAKH8zGW28T4ahjBdKjR1oFgA4gT4eCqT0MxGcyTk5AfbNAJYNHbw01ie2ayiXHMfmlQBW2Ugp6GkDoiQLkEhJUThjQu4DMGtYd/SjAWe4c5U3gHyY4ucEWlcAHNvQYwQbiINhLgLapFAHAfYDmOCdq64HLfOUSRDKIA+wlhI/x3sBrK8qts7chQOAGjLSFs/yAEOd1S7UdwBKFdKN17ztjGq/iz+mMs4DcFDOmItHeefhzxcvpwve90eb6xgtHuY8iCXtcMC4BICF60wW0Yasgfzld01kvHGVBZhrDzAEVh4Az7tYuMl0FhNZ8Z7VSPPgkgkB/9WBRp6JeP5VWvjJXMbzmK4FuEjPrFIurVeS7enDcQ7AwPOPN/lG8qIfarh8korZFMt4Lrgao4BD3MhW43ELwPlxw7gEC074+Cl/5kQqpUOj5UBoUzp5QTExYb0xEww3L2U8JA2IBYa6n/oVCFqpjSPgFGwtqFHV+Vxl6GS0UMlMEgFH3q6kYga8jQMbgCaxJyGG+rGMULQSkp440Hd555fPOxldZ4DPPUBLUTfmkgOBqUcMkh60ASGywjzqQ2OnL3xGBYAnZORzyNAbQkBG/fYrcdpxB4PuhBZWamW3M52Qeq/SdA9jOaNvRFipdShfQm7911QyAGVw/Q1FMOkzpo2P/5FyuegANJvVaqNFq7m3vaP8PpJSINNErL95UebDRImnOav3tvf34elqoUnLpaQNCIl3yRRJ9My+CeADTXs6n8pPIpZkveZgLL6E5g0AD96FnsC9kRZMvJ24Sy4tZRgk6j4r6LUzUgteIHXWOnVqgcfnGEnMAWsBC+C1AO+12z9s1GOdEiLYRtRJq/cagA/vaDVcx/Eay2mJ1yeYwzCtMPdmgNO7H+nancow1ucxfOSSVJlGdv2c+Cm4zB59njQNvyJOS++qKGYBrDrKeMDcQVljNRdUFtQl6gUmVWxK3yOPMQ1BpEnArVSM+zgcWkVG3So8eSy0cpMcqVQPnztQM4vNyg+ewUO1CKkEltuO+tcrqJeKDtvv1MB5Tl6Q/HIzGAB8c8C0brWg/RP3H0msHnhgGweN+0fftbm9rlFW/+njYGwd9l74+N4nX6TtZPg3jvfHt3hwfG2n7QTg29u9WAzwcDA493Jz/UFPHpzwPXS/fPs3UxUHtYb5Ro+upvH24fm/AfwLvgir62qcUZkAAAAASUVORK5CYII=`,Ad=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAZ5QTFRFV1lanqKmsre7amxuWltesra7Kioqsri7tru/s7e7tbW9sre6S0tNKSkpsra7sra6s7i+JiYmKSkpKioqKSkpsba7sbi6IiIiKSkpsbe6KCgoKioqKioqKCgoKSkpKioqAAAAeXl5wcLDp6uu3eHk/Pz8ztTY3eDjzdPXmJyfe31/vLy8xcrN5Ofq8PL0z9XZub7Cu8HFt73BzNDTyc7Sx8vP+vr7mZyfOzs8tre4297g3+PmvMHFf4KEiYqLv8THx83RxcvPyc3Qtbu/2N3g7fDy19zfzNHV1dvftLm9wMXJ6Orr2uDj5Ojr09nd+fr6UVFRNzc3g4WH6u3voaGhub/D2d7h4uboyc/TREREs7m93+Tn8fHx9/j5h4eH1tzf8vT15OTkv8XJvcPH7fDx5ejq/Pz98PLzbGxs19fX5ursfYCCr6+v9fb35ujp09bY3d/h4ebp3OHkztLUys3Q8/X26Ovt6+7w+vr6wMTHu8DD4uTl8PHyX19f9fb2ycnJtru/xcnM6+3u2N7i2NvdlJSU0dfbsre7Kioq////Afn3BwAAACF0Uk5Tr9+/z9+PT0+Pfx+fn4+vPy8vb+/f728Pr99fz58/v38ACorVXwAABBFJREFUWMOdlwd32zYUhd29kia1k3hpuEn33rtNd9Od2WY0wyMe0bJCWaJIiQLB8YB/XQwuiwCp5J5jE6IOPgEX7wEPc2uHtVhlWnsAzWXaFZJRrVar1Ov1x+bYvxrXkSMrHL5Sr6wuaQC834UxEynTihqwSvaoVBiuTyaTZhAE3zQuBkGTf2g0XuTwILh8iyypATUySQBRg/bD+9TEbb8zBCZHvFsnC7MATGz7PffslQ8gFZZfE1IMGNkbV4aZbmC5HR+btAftWQBG1Au5rr+PMR7Fs6E++OK5R1aLTOQ/6LcxzSsGNHUmEsK/HsKIquVDRzzHumWUABewBoDB5Y//CFl8OMAILP6YZC1QAHqwrwEwe0wBqBUC4pkqNBSDKwO05UxVMsTgygAYoGPqlsGXJq7p4mAiZwqW2sd96E0HoiIS24A6AMZIv45aQIUELIdcNlFsAQwNXyafw+LZ9rlYgggPTmgAdQ4YwpD3shHPBx9j30CZtEKFJnKADyhyENudqKvL0koIC2sCcrQA4EYJI2SLXJ52IyB1PcCMd51oFMwLGDqzAiqkaUsHUjkfbUaEnZ0EUNMvYz4Rut7HMofCv0pHUCOfH54Bl+d9YokdItloiwCf5vJg2/OYl70ZAZ8B2FOAltflWwR7fTs8KAOc+HraQkp/8u6xnQShEb0b9uWrXfKkBvA4oFwGDLyBCAiE+zFgTKoawLJiO5UAHlJvlQKeyk+A0nsSwGYB72+VAJ7ORnEaBncovdlqvfP2e3IzmNrVs4Dl3BIIwB+e1NV4iXWReAx+NVUAphvdbnfwYTzAPc258Bz8ptiEWn/e2RYNEyVBej5rQgJ4FuAcLZAP38fNW9lISgDPwKZX0N+B6z8q83kutfAX76Ye4MK39+P2rupwPQ6o67W0/W34KkwAY5UHp6AXx4xKFnyRAq6RF/KA52F/oAf44F4K78aflOfCSRjpAQ4CvBN+WQRgFlD9FAwWhAfpFFQAZgG9oTORxRAuAzAL2O63rXPAoAwQFgGYBQygq2z4YVUyAn5qepopuKK+LAYc46mqMdGWadwvXMZTYGD86isDtYOOBPQLACflMTx9CnJ1om2gGPAEwPKjj7yuKG0wWGYE+LcwEpnmyRuspDg8CNOC32WrZBW4quQaZiVFDx+KwQ06M4CVeeuOy62w0wn88HPU/Du8XQpYIm+yIs3NlHkGfJdYVxyJaZHFIo9fOXqOrG2vbuUBF1T7QVLmifTduA6IIdoArx3kAcodiWshvva9HL7rI0DsbzN8EICslYXj/8j6ynop3HpYAKuMEXIupeEzE2C8G1zmN9ZGI+BqTk6fuRhEYu92x+Pz4uqrq1DIjFrQANaq1fmj0a09vrPHH4Tm2e19cer6/z+PQexdk8N8xQAAAABJRU5ErkJggg==`,jd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAGNQTFRF1Nne0tjb3d3d0Nba1tbe0dja0dfc0dbb0Nbb0Nfa0Nfa0Nbb0dfb0tfb0NfbAAAA8PLz5ejq9vf42d7h/Pz84ubo1tzf09nd+fr66u3v7fDx3+Pm6Ovt8/X23OHk0dfb////Q8T7hwAAABB0Uk5TL08Pzx9vX4/vn9+vfz+/ABSGe54AAAKwSURBVFjDpZfZmoIwDIUdZZGldQGUteH9n3IKaUvLh6ZgbhwY+W3K6Ulyuu2P89m6ON0SznnC05xFecbtiPM5Eg5z8OlC3gY7MglIYXe8HMCNMZYDPITomwFgMNH0GEM9yqjb6e92qKCaLsdKPowpzAEw3x315+foQahPbgECf0AHzQaAwRv//YKBAID6hoDIAeC65O3m+/NPvUYBbAvwhvY7YNBr7TZXIN9CTQHUT7XOWwjgNd9t1Dv6lkKhSbGtRJVZD/1IbqLeg5TnWbIo8bkTgE9dUYkRT3H3W+goQIE/Jbf7L+dZoJUY40+bLfocQumggJMt5SvcPZWoAQA35ywUvlJ+KKWsATvOwibgqrbmcAocbw/+gPcmwGMFbyV2IQFnVKIlJA+AI6RruChxPAKAy5LCfoC9B1HqCyi1H7gAro4zDTBidwGxUvJhgDTV8ieAVOJ8nGudysdo4LEJSNDL6ONsLMcBMJahk+wDyJpoKbHxA1gpTBGjElOu7JwGDEsFmR7LVn7QkJ5oABXkG4ZCu7IB9D8CysKpjQuASqE2NSzb8sSWtnX1zU5lsAIM2p1JQLW9An8/uMuq9hNgUmKwVGd+1NLi4574dvpE5g0YtnskswcvqsUZCYDwaPN0CqffAB+q88+AB9Un1gsgcAG1U/3p4ywg3AIUVAqmkxSQMARc0jzKAHRdKD1NFYcOq09snQxJQDkVd+wTAzkqhTGmRpuq7iQHWdntPYg0gKpMpXEO7gAyXNmTPkyF7qb4qke6+22iltoaoFpdubf3YysI1evtdOWipPxcWRozw5w4dhaiOYVSmq0pDCUFYH/YJ15WY62o5ITaCbzC2bUTSwCITg6wPRglWoCrTUo5v3ydoLOLmlickP4Yyik9nA/KOcIB/o85EcohPg7xNN/+Aa3pukBWskVIAAAAAElFTkSuQmCC`,Md=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAKtQTFRFKSkpKCgoKioqKSkpJiYmKioqKSkpKSkpKioqKioqIiIiKSkpKioqKCgoAAAAkJOWmJyfTE1OXl9fOzs8XV5grK6wqa6x5OTkQ0RFamxtr6+vZWdpMjIzeXl5bGxsREREh4eH19fXNzc3UVFRwMTH4uTltru/9fb2ys3Q3d/h5ujplJSU+vr6ztLUu8DD8PHy09bYycnJX19f6+3uxcnM2Nvdsre7Kioq////gwwAbwAAAA90Uk5Tj19Pby/P3x/vnw+/fz8ApxMFaAAAAuNJREFUWMPtl2mXqjAMhp3xurHM3ddZXMYVAQFpm///y26TFkSUtvc6HyfHIx5MH5q3SVp6Dzda7x3QCfDCMLwPpIXaRo4AXxhs0vMHEwug8l0URfGyl1bUtlD/mAGheIUuy5FnBxRgtDcASEG7AJNJEAhhHJ8rMTsA9OevyEj4+lQUZ2E0AUMx23//kaFfvGJsV2aMyQ9LSmmZAnAOsBDedcBYzGHFS/Tb8Qvb4f0NTwFexYeuEABKnqBjxkvGSvxiLOXZ8VhyhvePyO8KgVaAc9Kg5EcApgbxxm8jIBAz6cAp1JQfGoDYDeCLP8oB4IChngAkytIBkFeAI89agAPHOZkBk9MM1EUDljSUlDAD+uJZOqQXABIUHGbg4TKSYhDTtJuAA19bNXgYSBGW9Lgz5SkFmMoP4nQCUEU1X3XZVUklAVuVH6RoJ2AsXvZfvhEgwUFaEMa3lRAAj5+xmLyuGaAB1OGrrCLOVtUCqL4WXAd4Yd0PInxqrNOS802lBxSiLzuKZ2qqUKsdqRAoBXSCSEBo68onQKJEjP8F4DUBa8odLLC4BkybvcDQ1tF/o3JHhp9BDbB15b4s6WoVqjEJLsAOVQWYi7EZcK/behNAKZCoVciF77YzXQB0IlkBXiORzgCpEtQKeLgCoDJYUpWaRRyNz1O5AlASVrUghO/7xp3pyQZobfHtfUGnPw461HnQAHz6mOeuACqiNsDYD04trRoU1Wm95Ss3QFo9tdS9TAOqcrYC1lz3g1L3MuyDZ4ADuGjQfOoG7y11CKnUwgUQNQAE04JSWG6rkLUB6oCBndp5GTVghY1prVMZaW6AdJnoAwZdUp0HkTPg+hFHrkwmjzh3VkDMjit2bqBFjGDWtS9QnTyaD5q/yemu65iHNrecVKUNR6bjfn7TWVlusDcChPhJjvNc2v8B8N1i/0y7sPw1xev09NZhBQyFxQYOL12efNfCHTBsW+D7wej9zfXtAX8BUr0R9n3tsKEAAAAASUVORK5CYII=`,Nd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAALpQTFRFKSkpKCgoKSkpKSkpKioqKSkpKioqKioqIiIiKioqKioqJiYmKSkpKSkpKCgoAAAA3d/h1NbYgoKCoaGhkZOWqa6xeHl64uTlztLUOzs8mJyflJSUVVZWgYKDmZyf09bY5ujp5OTkwMTHbGxsys3QQ0RF8PHyVFZXvLy8UVFRr6+v19fXkJOWeXl59fb2+vr6REREo6Wntru/8fHxh4eHNzc3ycnJxcnM2Nvd6+3uX19fsre7Kioq////RHWlkAAAABB0Uk5Tj18fr09v788Pf58v378/ALZr5R4AAAGHSURBVFjD7dZpl0MwFAZg3RTF7PvSfR9llCh5/f+/NWE6PdSUlPk0x/vRSZ4TNzdCuKgYoQZqoAb+NaDvUxZQ8Us0TRO7nAAQfCej9HiBMBtCFhZ0fsD0fX+w22fgzyIjOAPY0OPY5lmAT23Pm/ysYOJ5NvXPBLx0Cby/AJZn7MIDfcwCAF8f9LAM+3RXHtARxOMrATbdVAXC8kATLhs/Kw+w07i6pP0KgAKDtXIWcHkbSWZFmM5TVRxiehUakPmAFgwHaWDr4poBHT5AhAPcmUnAvAUYwtPKDVUBbjCno4QwG9EpU9WmLBUB7cPn6+n17TPK+wfLs33PHomAUgBIKsZOgNNRC4A2rC1b8pqsCVkZwSFuNNl92QLNfEDDKsxLgK6UB+jsJOdm7R4LwlEHOGSbM3+4GB/XMQ0I0asuV+sT8xdxKZBXg46ixWNcVjiHEJLoReJYgCDLcq+oEzuamNo5K9oGK97DNvf1LrG7ucXu04TTVRol/w/im75X/yPVQA3UQFG+AMCfdC34dxRwAAAAAElFTkSuQmCC`,Pd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKCgoKioqKSkpKSkpKioqKSkpKioqKioqKSkpJiYmKSkpKCgoIiIiKSkpKioqAAAAdeSvwPPbjum+r6+v5vrwp+7MQ9uToaGhX19feXl5h4eHvLy8UN2aUVFRREREtPDTaeKo5OTk2ffpXOChzfXibGxs19fXm+zFNzc38vz3lJSUgue3ycnJ8fHxKioq////N9mM9+oxuAAAABB0Uk5TX08fj89vn3/fL68/D7/vAO0HTdMAAAIgSURBVFjD7ZbZlqIwFEVRQMZQ1W11OaOIUgh44P+/rjHBIcgNWv3Sq5bnUZPNzUnuoL39o7QX4AX43wGOaVmMMYMx3fwGwAtwq5H3HMC3gOk8ywquybRGuM6jAN9kdr1hfiyvWswoxD3A4bHvk1JWNAcC5xGAi3AclR2K9jD8foCG8FgSmnXE0AYMgHPwv75OWu8+roQ9Ak8N8ANkzeK8umj5vhW/HVeAowTo2Iulh7iSdCbUMfgKgIdUGLD9rFpaN4QQFg3w7fMB4upOf5oXAYMG6OcAflcdyg88hJYLmuzgRPhfdSo+iJsYUYABQr7/oyKUn/4dyzZq0hvM2hco65OHkEo23gIYCn6DFSluZIZADdjRgLix0esGAPwEXzSg4guAoRKQ9wPelIDNtwGGSEQFYKkGNCYqAHkfYEG+49t8IAE65jwTaQCvLQls8ilP+Rd6PJxJyXALGPZdw4bXVukdyelsCxfJl7QWAdhkPRhhdlqyVt3BMYVGAjyAF5Sl4g4zuIqa2JS0Q0yWk0VvUU2IhFry/VGKgbKsmwgFYdtKqVjU9WnrAPedycWq6WzrfHOp7cumqGdgfa3NNy4E7sbupKarlEXbgK7mWnf3FdFd68bmPTIf2FglXfuLVC7o9ITCkI67pgPoD85IvguRl1clkxSG9/iQZQYIJ4WwIioWWf31wHxuSnMhiw2fnhNHTEyKNnMtbfia1l+Anw74C92Niq84E/fGAAAAAElFTkSuQmCC`,Fd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKCgoKioqKSkpKSkpKioqKSkpKioqKioqKSkpJiYmKSkpKCgoIiIiKSkpKioqAAAAs6L/3NX/wbP/r6+v8e7/zsT/l4H/oaGhX19feXl5h4eHvLy8non/UVFRRERE1cz/rJr/5OTk6uX/pZL/493/bGxs19fXyLz/Nzc3+Pb/lJSUuqv/ycnJ8fHxKioq////kXn/A4DRggAAABB0Uk5TX08fj89vn3/fL68/D7/vAO0HTdMAAAIgSURBVFjD7ZbZlqIwFEVRQMZQ1W11OaOIUgh44P+/rjHBIcgNWv3Sq5bnUZPNzUnuoL39o7QX4AX43wGOaVmMMYMx3fwGwAtwq5H3HMC3gOk8ywquybRGuM6jAN9kdr1hfiyvWswoxD3A4bHvk1JWNAcC5xGAi3AclR2K9jD8foCG8FgSmnXE0AYMgHPwv75OWu8+roQ9Ak8N8ANkzeK8umj5vhW/HVeAowTo2Iulh7iSdCbUMfgKgIdUGLD9rFpaN4QQFg3w7fMB4upOf5oXAYMG6OcAflcdyg88hJYLmuzgRPhfdSo+iJsYUYABQr7/oyKUn/4dyzZq0hvM2hco65OHkEo23gIYCn6DFSluZIZADdjRgLix0esGAPwEXzSg4guAoRKQ9wPelIDNtwGGSEQFYKkGNCYqAHkfYEG+49t8IAE65jwTaQCvLQls8ilP+Rd6PJxJyXALGPZdw4bXVukdyelsCxfJl7QWAdhkPRhhdlqyVt3BMYVGAjyAF5Sl4g4zuIqa2JS0Q0yWk0VvUU2IhFry/VGKgbKsmwgFYdtKqVjU9WnrAPedycWq6WzrfHOp7cumqGdgfa3NNy4E7sbupKarlEXbgK7mWnf3FdFd68bmPTIf2FglXfuLVC7o9ITCkI67pgPoD85IvguRl1clkxSG9/iQZQYIJ4WwIioWWf31wHxuSnMhiw2fnhNHTEyKNnMtbfia1l+Anw74C92Niq84E/fGAAAAAElFTkSuQmCC`,Id=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKCgoKioqKSkpKSkpKioqKSkpKioqKioqKSkpJiYmKSkpKCgoIiIiKSkpKioqAAAA/I6V/szO/aOor6+v/urr/be7/GZuoaGhX19feXl5h4eHvLy8/HB4UVFRRERE/cHF/ISL5OTk/uDi/HqB/tbYbGxs19fX/a2yNzc3/vT1lJSU/ZmeycnJ8fHxKioq/////FxlaAkCMQAAABB0Uk5TX08fj89vn3/fL68/D7/vAO0HTdMAAAIgSURBVFjD7ZbZlqIwFEVRQMZQ1W11OaOIUgh44P+/rjHBIcgNWv3Sq5bnUZPNzUnuoL39o7QX4AX43wGOaVmMMYMx3fwGwAtwq5H3HMC3gOk8ywquybRGuM6jAN9kdr1hfiyvWswoxD3A4bHvk1JWNAcC5xGAi3AclR2K9jD8foCG8FgSmnXE0AYMgHPwv75OWu8+roQ9Ak8N8ANkzeK8umj5vhW/HVeAowTo2Iulh7iSdCbUMfgKgIdUGLD9rFpaN4QQFg3w7fMB4upOf5oXAYMG6OcAflcdyg88hJYLmuzgRPhfdSo+iJsYUYABQr7/oyKUn/4dyzZq0hvM2hco65OHkEo23gIYCn6DFSluZIZADdjRgLix0esGAPwEXzSg4guAoRKQ9wPelIDNtwGGSEQFYKkGNCYqAHkfYEG+49t8IAE65jwTaQCvLQls8ilP+Rd6PJxJyXALGPZdw4bXVukdyelsCxfJl7QWAdhkPRhhdlqyVt3BMYVGAjyAF5Sl4g4zuIqa2JS0Q0yWk0VvUU2IhFry/VGKgbKsmwgFYdtKqVjU9WnrAPedycWq6WzrfHOp7cumqGdgfa3NNy4E7sbupKarlEXbgK7mWnf3FdFd68bmPTIf2FglXfuLVC7o9ITCkI67pgPoD85IvguRl1clkxSG9/iQZQYIJ4WwIioWWf31wHxuSnMhiw2fnhNHTEyKNnMtbfia1l+Anw74C92Niq84E/fGAAAAAElFTkSuQmCC`,Ld=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKCgoKioqKSkpKSkpKioqKSkpKioqKioqKSkpJiYmKSkpKCgoIiIiKSkpKioqAAAA/8xP/+iv/9Vvr6+v//Xf/9+P/7oPoaGhX19feXl5h4eHvLy8/78fUVFRRERE/+Of/8g/5OTk//HP/8Mv/+y/bGxs19fX/9p/Nzc3//rvlJSU/9FfycnJ8fHxKioq/////7YAC2LBnAAAABB0Uk5TX08fj89vn3/fL68/D7/vAO0HTdMAAAIgSURBVFjD7ZbZlqIwFEVRQMZQ1W11OaOIUgh44P+/rjHBIcgNWv3Sq5bnUZPNzUnuoL39o7QX4AX43wGOaVmMMYMx3fwGwAtwq5H3HMC3gOk8ywquybRGuM6jAN9kdr1hfiyvWswoxD3A4bHvk1JWNAcC5xGAi3AclR2K9jD8foCG8FgSmnXE0AYMgHPwv75OWu8+roQ9Ak8N8ANkzeK8umj5vhW/HVeAowTo2Iulh7iSdCbUMfgKgIdUGLD9rFpaN4QQFg3w7fMB4upOf5oXAYMG6OcAflcdyg88hJYLmuzgRPhfdSo+iJsYUYABQr7/oyKUn/4dyzZq0hvM2hco65OHkEo23gIYCn6DFSluZIZADdjRgLix0esGAPwEXzSg4guAoRKQ9wPelIDNtwGGSEQFYKkGNCYqAHkfYEG+49t8IAE65jwTaQCvLQls8ilP+Rd6PJxJyXALGPZdw4bXVukdyelsCxfJl7QWAdhkPRhhdlqyVt3BMYVGAjyAF5Sl4g4zuIqa2JS0Q0yWk0VvUU2IhFry/VGKgbKsmwgFYdtKqVjU9WnrAPedycWq6WzrfHOp7cumqGdgfa3NNy4E7sbupKarlEXbgK7mWnf3FdFd68bmPTIf2FglXfuLVC7o9ITCkI67pgPoD85IvguRl1clkxSG9/iQZQYIJ4WwIioWWf31wHxuSnMhiw2fnhNHTEyKNnMtbfia1l+Anw74C92Niq84E/fGAAAAAElFTkSuQmCC`,Rd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAMlQTFRFWl1fbXBxY2ZoKioqKioqKSkpKSkpIiIiKioqJiYmKioqKCgoKSkpKSkpKSkpKioqKSkpKCgoAAAAoaWoqKqsv8DBZWdpsbO0mJyfo6WnUFFSQ0RFWlpbgoKCoaGhd3l7bnByiouM5OTkREREUVFRVFZXeXl5TE1Or6+vkJOW+vr619fXh4eHvLy8u8DD8fHxys3Q4uTl9fb23d/h5ujp09bYwMTHztLU8PHytru/lJSUycnJ2NvdX19f6+3uxcnMsre7Kioq////FoeIzwAAABN0Uk5Tr7/fT5+Pbw/PL+9fr98ff78/AAYv3JsAAAJvSURBVFjD7ZZpk9owDIbpucAGYnrf23aX+yZAIHESy///R9WRnYOJDJvtl04HffAM2HliSa8UNd78pTWugCvgHwN0exa7yQ6Uz1QBt3DB+v3yr1cVgAv3URR9G369wPmiTkUP0CYAgZQyFolapRDy1MLw18+74Edo9qcArXqAbMfsS4AeDdiI4wRXArAoAL8BLC7IhYiL95yYEFspD2KPHgGrAByYp1uJFeALnjtHARiEOcATuypgi9THATi+jIyiHdCBZbp1FJsnA6Z5ArlY1QdoF2JM4JoKogagi2cBZblYAQG4FsAB5WKyXQ/Q1FnQPhJSNoCVFQA6C/tUbyTAw8hy4al1ALcEAI/tUg1tKIBWYoIviPJaygFdiPAYTy8aE8WkFHLIY0ACSjfwiCwcNHRvA5gYTIwSd5YYmuhERBA7mAVdRgkh5RPAgAA42A+0i4lYEy7sCwCVRhcGJUBMNZRinRNS7mEaHgkIrQAfL7+6BFgSPVEDdCfgqJYzAGkFrIUvLQ0FHzVqsAN0sraIoQDb/LtgAehkxVQ5m17FbQAXZufLGf/zsRhVFpq2D4t+dJEK2k+SZCGOak28rEJ1luQIHKIjjQpAKgRPlIybPmmqJCBroejKWHP86MepHA5xzFVMtPcmiJG9oWQxiJWaeNl/DZhk1UiV8zwdHYZDXPvB6N3bHDD5NA4/jj+HsyAYj0ezWXBPAFh1GHmfAb5X915XdcDQnn8AaLNnDcbaOi06601Wspeu63StY17PdVvmSup7vwzDcD4t5pE6cyKDBzVMGXvxBICDT3ZY6kyRtRqAm2LK7Lau0/oV8N8D/gCb6E6+URpQbwAAAABJRU5ErkJggg==`,zd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKSkpJiYmKioqKSkpKSkpKioqKSkpKSkpIiIiKioqKioqKCgoKioqKCgoKSkpAAAA5OTkUVFRr6+v8fHxNzc3h4eHbGxsRERE19fXvLy8oaGheXl5ys3Q3d/h9fb25ujpu8DD09bY4uTlztLU8PHywMTHlJSU+vr6X19f6+3u2Nvdtru/ycnJxcnMKioqsre7////7q/9IgAAABB0Uk5Tby9P3x/vj68Pz59ffz+/AMAQNz4AAAMcSURBVFjDpZjpYqIwEIDZHmoV7O6222qLyiGFEJPw/k+3MwHMiaLMn5aQfGSOTGYMXi/JwjP2FEnpH4PX5VoT7pGX9SxEgdcvxjA8LwHAb5TPCqV/koCTksYjm9PXDwq83qhROb0DNHcLAn7x92mAB15NAyz5zzTAmp+mArbTADP+bQ+XNwEiZcQ8yeu6ZmJA8C1j+DofAIjRMgiIGUuzvWevJBUJfn5HSNNQUQ4BBlQtCyHo8fxYiOONACZorVnWVGHF/10DlEIc9Gcb8HENUCuzm/NO/HGMCkTQvR+w5evX4EkdZz8gF4KYI7Sf98NDyAfPfHMBUMaWAaRNu38++AoAc/41DEAHZtbY/jyv4hEAwvN5dgGwXvN/KxkdD/CtT8UwQIVoJ7FvfXIseqt+SxsoALPMnQnh7B9dEvdmab2w1ACZpSxx16cYWLUOUDnt/ELqz1z/HSmuV/O++HIQgP6z15dUMGPeCSNRA6QaILbiv1WxKNvj3KF/82cDoBkxbb9lyA4cgH8PQksoT/JudACgrLP/XX+mcgX/5FGw4PzNBuwTUdj2UzHFlKYVDyEfvDcWAL5fWCFFqDrTGuAbAEt1L3SAAxW1tR7UVshU+rIPBP1miqXioGvm+j8vtQTDTMCp0eMgd+Mf/JYbx5leAOTu+YexgZwIGSUIVD4BQBp71yfNAADOcxDqRhTe9XZMmIAH/kep6tG/Fsro/TVB1b2wwEBSZGc95qSDk+aZfrEYWfno+o+VzRWAcoOTE9H/votmLKB0Q7o9lfU4AOjvWw95beQOPDn9JhXyLn94AMkYQCaKvf+2V1fbhr9IwNYDyAb2b9UHmFRn5xJFA+yEnuIvA1SFgUcBKrG6ThNIIIRkjLZVXcGkJHaZt+VzA5CMLROpUWCERq1LyA43QbAo7GvGkrTiGLUFzO6v91vAfCogvB/wV3phAuBNRqJWad7VcGhuvBMQdpH4dsvKrk2VgEdsZj+xjX2vKtmfgmCvWnUy3Pe2rW/XUBuN9VV57Fp1LDAWEbbm2M4volXfys/DcBVFZqOv9f7azwL/AXjMufr+VGJIAAAAAElFTkSuQmCC`,Bd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAIdQTFRFKSkpJiYmKSkpKioqKioqKSkpKSkpKioqKSkpIiIiKioqKCgoKioqKSkpAAAAeXl5oaGhvLy8Nzc319fX8fHx09bYUVFRh4eHbGxs9fb23d/hr6+vu8DD4uTl5ujp8PHyztLUX19f+vr62NvdwMTH6+3utru/ycnJlJSUxcnMsre7Kioq////T10zrwAAAA90Uk5THy+vT+9v38+PD58/f78AbtH+EwAAAYBJREFUWMPtlmlzwiAQhm1rTYzGXlqv3BCU3fz/31cW8Mp0JMcHx5m8X8gwvA/LQhZGi54aDYABMACeCDCdW71NGwACvCvfCfjPtTlqrem7AaC6I8RZP8BvX0DeP4IXB2CG+Xl0whiL6zlwJfHdAjKoKaPeH/RcAB/XGkAeIaU8AwT17vHVBQjxaAGnqDlNzmBH30ecuwH7W8AOYKvSAbIx4GDn3ep2C8Aon2YJeXNABKVupZ66FCaiBhEE+Hm9hEz7Y+W3AN+9jZsLoJDAC8ogrCCi3i8MXYCRPYkESAWIVPuT0iTx4AYsLgDl5ynlD+KqPUAAE5Cp+Auh/FUKvCWAq7OXUBq4OcQ2qc0LCujlk19WrQBT/LaG0hyDqGgHOP3OUgMyiNKqO0DFD1z9kazoAIjq9QBMPRi32AUQYrUrlXRRaLuNN4oZKwtTUIJ+90JvQNcldAAsD1ZLazW34wdOOl2u13ICJmacFxqNT8YwUA+EwAsf8kIZAANgADwF4A90REpAvZN6cAAAAABJRU5ErkJggg==`,Vd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAKJQTFRFKSkpJiYmKioqIiIiKioqKCgoKSkpKSkpKSkpKioqKioqKSkpKCgoKioqKSkpAAAAvLy8tre4SEhJkJOWTE1O8PHyMjIznqGjZWdpr6+v5ujpztLU3d/hys3Q09bYh4eH19fXNzc3wMTHQ0RFXV5gUVFR6+3u+vr65OTk8fHx4uTlbGxsxcnMoaGhRERE2Nvdsre7X19flJSUycnJKioq////W0xG5AAAABB0Uk5Tby9PD+9fj68fn8/fP3+/AHt+AMsAAAFRSURBVFjD7dTXbsMgFAZgt03ijbv3brM9mO//agUMBEd2QpK7iv/CFhJ8xkccguLYZFkmXkERA544F6/AbemEmsQcoFbcgJGci9BUrBAAIQRjXBGauO6gZm0UoEaEAjcgMksGgAten/OcJ1OJtoHODhJKzHBHUiGNQ1HxlGIbCGnVju5u1dwvhNCaVwUjlXoLu2Y2kGvvFb6w4XwIaV3xgl/dlB1gooE3uGIuaWDTAYCuQQlnpwJuO1jB737gfSPvzBzCfqBxBNgQ8AzLo4CQXrajGXwg5AmrkDafaupSjpZ9gDkH80e6N+J8oZ9frXYBRu/FxaAC2iR6aSLPsIpaUPHusYEpPdvTh2PZYgbANJdFtFrDKdYOct2NC0IWhwNE/sLhV5qcWssmTeUORLcDwJ8jNyDdfDEsgmNv9chc6yfGAx7wgAc84AEPeMAD/xL4A0cUbjTvlKSAAAAAAElFTkSuQmCC`,Hd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJ9QTFRFREVGKioqKSkpPT4+IiIiKCgoJiYmKSkpKioqKSkpKSkpsbe6KSkptbW9sra7sbi6sri7Kioqsra7sra6sbe8sre6sre7sba6s7i+s7e7u7u7sba7KCgoKSkpKioqAAAAQ0RFOzs8eXl5REREoaGhNzc3h4eHTE1O5OTkbGxs8fHx19fXr6+vUVFRvLy8X19flJSUycnJsre7Kioq////77zQEgAAACB0Uk5T789v3w9fL6+fH4/f3x+Pb0/vrz9fn7/PL38P7z+/fwDy1bDnAAACV0lEQVRYw83X23qiMBAAYNrak0cqVTlnd3tSqyIzff9n2wmFJLBCJ3Czc6FfLvgNM8MQHSEjju+EbcRxLL8c8YAqxrxLx/qKB+GE8jvLjsX6kQU8ob5GOB7iVxkZxiwgxV15RQH8ws9y+Y4pC3jENwOYfWBeLl+5SVCbloBw8FQuc0z6ACmey+WJCdzh8TJwpqpw4raWRAPI8JoFJHgwgUTlgNkHI8S9CaCqAi1ZPaxSUAF7WyBrAF//DfDGA0a1n3To2dqWyyPzYWoAiW0VNJDjtA8Q44vR+72ATPV+WgHbPN9ygRTfS2CHt0UVdDCBszHCHDGVV/6+SejzqRcg4xnW/HmeqhxoQETgWwDVDv4UOShiBUEP4LsK5T1shgEhwMweeJVvJlHdw4oL3NfGeAW4EIVMQLfulgpfAVSHhTUgp6gC5jCxB14wVsAM4FlYTnXqpFQBlMaJbSdSJxkAbcFlvtnUHD+bAGWB+UBcqSTUAbFhFmJstqIJeMw86lbc4bUJiAAin9WKB/081wBKA0fQjfAPQGlgCFN1qkIcNYCQIzReLPZCJ8ARuoFC8IYAhRAOAUQYwXIQIPyoc8D9DNCQ7mpqBXziVQtATd0hGOeDpA2g8dIusAC5h5X/A3DC+3ZA+BuAtdcJGG+mi7EEgGU4ABDeGiAKwv4A3ceciMUAgHZBqVh6jX9t5Tw4dFVBx4JuZOlemkj71k5shBsBTHQuagdDFiBCWZDJ3O8NECFvhBpjHQTBDQG5DBtAVmQF31E7WVoA8v3p0gYCebKcflCgecDoG38Br7A1bm+4dkIAAAAASUVORK5CYII=`,Ud=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAGNQTFRF0dja1Nne0tjb0Nfa1tbe0Nbb0dbb0Nbb3d3d0Nba0Nfa0dfc0dfb0tfb0NfbAAAA2d7h7fDx5ejq1tzf/Pz84ubo3+Pm6u3v+fr69vf48PLz09nd3OHk6Ovt8/X20dfb////Fs3pKAAAABB0Uk5Tby9P3x/vj68Pz59ffz+/AMAQNz4AAAJ3SURBVFjDpZhto7IgDIZ9Tp1eTO2U7wis//8rnw2hQkFB70+peAljY1vJfUkXx71jrmQuk3tafAkcuhanjISPr9ZtvE4RAJEqOclcKYD86OVQL1tBwsf9564argGvzSLAPxj2AX6AL46peLsMSEHQz0ftGSOXPkCAAshyFUAfCHjybgJg+It5LdFPAQNIC3ACmryAP980ZWdf8wkgV1/AHe0CLe8GvBqQAS83D3rp5QJ0Ie93ZKnBDQhTiXvV9+sA8QxYvwHcYD568DmFG9A4xgk3YIDKdrKDewl/0HriwgYzKO7JcR7O6JZhTiEgw/Pg11pwx3u8j5OSfH1jG7gh4GzNt0XPVgDhs4NlqxwBmTWSgo/tATDcVUlm2QooKbqbJgxQKxvYADCuEgIYdyG1Rr5PQMlZIKAICmSnWkj3ASR54h5AB7/7AGjyo8qNmwEl5MkF7BCNEocMz4MdubFGQAr1dgA6gs5MgfvOKxdARixZ7gPU8NAv6iOrgSQ5QxuxZGFIrYnnJIsw4htgfhDgx5+XZ3rSew9cx1MDAC7kSMGAhmxAX+dvwOxUXg4e+TIA9gHEBhMBhC5zJgApoiw5B/CguewGfB+WmwDT9G4AQsYDergqANMpbQSUZeShelIlCgHGSi3CsUaAKRS5rtRmAOGtFhicLYAxzCyI28XMpMNRsHcdtLDxLsBp8rzvgwv+EXBeS8Ny4CtLEGtB7BvwULuwCpDCl3kq5YmuSjPKlaOqbRcg08VyVIbUbaoCHKiZLamNHThX/SmKelWu5e97x9ZXN9RWY72qg27VqcC45NSaUzt/yW+mlT9n2S3P7Ub/q/f/+lvgP7T23bvgLWA4AAAAAElFTkSuQmCC`,Wd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAANJQTFRFKCgoKSkpKSkpKSkpKSkpKioqKioqKSkpKSkpKCgoKioqJiYmKioqIiIiKioqAAAAdXV1rK6wfH5/naGkpamth4qNmJyf2tvbmpyevMDCf4KE1NbYP0BATU1NZWdpnZ2dbnBy0tLSd3l78PHyVFZX09bYztLUoaWo2Nvdu8DDbGxs3d/hwMTH4uTlxcnM6+3uMjIzys3Q+vr6oaGhtru/h4eHycnJ9fb2vLy819fXREREX19fr6+veXl5UVFR5OTklJSU8fHxNzc3sre7Kioq////RXEW1gAAABB0Uk5TX2+v349Pzx+/P58vfw/vAGqrIncAAAK8SURBVFjD7VfXgtowEDS4N5Hek0tyjRwdbIrNUazV//9SVpIPQ2KwMI93ejIPM9tmVkJrXXi0F4LnQ2A4/kUEBoAVXkCgASTQtGsTuADz7QpIoyaBTyBmbLECcGoRIH61ZYxhDmD7WtPR/bMI3ByPGRBLB36Mcwiw/o2InwFBbJZOJv9UolXlv2T8PPLQyZxTAfjKBKGe439xfCw+2Qb0UJXAgUcO6XV/YvipxPNqAkUCD1I2GFE897+X7OlsUyBqBAFk2/YfhPfvZjs4W2SoayUCnww/IbzfK8Czj5PNAwrKViKw4Ault+MCPhjdD7GXlqk2RgNuotFe6uyW0huwAlNNyqEH377uRWeDLqWvDwd4lMA0hOjmBbo3iiiNegm4CmZqECH4bLFr+9UPnER0N54AsasIwgD9km4WRfB1imxvO9f4dSigUgIToz9u9yqfCw88MGlnq2ofmJj5coe/bn/+jmgH5STxxK4iwN233mmmSz8MQQ98CzbSjsSvXGkhwJPkO5S+H4LH9SwKmB/DH/agKaOxMQ79HXB8SEQB2EBNZa0HaD+EdyIadVKxujyYcMaUkykQ2ABv+n10UHu2FJvLhUTMEvep2s0UwBBFgxbArWELQ23kEnIU70YPXg0G3EGxEE0jH8uqTMPlTUykDKZAQp6PXGnTEwkcEHioI4nPeEgPVZ2PwFcjILkFl8ALCPJfqMGG4vvA9oSS1kIB/ErNr4SjV/v/TTS58OXi92T9mA7xz3iheLCKM56yDZkYwDo7MYGyhWJwA4aFqk83oGwjmYFbSBDLadZ7ZDkwLfRQg8AUrmIsqWjAUQIdFrIAo947MR8hCiKsRYC7MU/Aq/VSNfNnSVzdwVICN/dgXCHB4xk00QVrtgDituoRtDR+vySgEv/IFOxGE0rvsTNeqoYTXkbw8p/peRH8Ba9dezp8Z77EAAAAAElFTkSuQmCC`,Gd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAARpQTFRFwsXIuLzA+Pj50tXV+Pj63t7e5ufo4eLk////297fvcHFxsrNwcXJub/C5+fqv8THz9PV0tbYxMjM6Ort////xcnNvMHGs7i+sra7sri7sba6sbe8sbi6sra7tbW9sbe6sre6s7e7sre7sra6sba7u7u7AAAAyc/Sub7C4uTm0dXY3eHkztPXtLm91dvf3OHl0Nba1tjbwMXJ8vP06+7wxcrN3OLl4eXnyc/Tyc7RwMTI2N3g8PL009ndvcPH8vT1u8DE5Ojr8PHy6ezu3+Tn9/j55urs4uTl9fb3+vr709bY/Pz95ujpys3Q7fDy4ebpu8DD3d/h2uDj9fb2ztLU+vr6wMTHtru/6+3u2NvdxcnM2N7isre7////n1o1FQAAACd0Uk5TT8+vT78fv5+vz9/v749fX8/fv28ff28vj0/PX2+vH9+ff78/7w8AFDN3NAAAAw5JREFUWMPtl9d22kAQhknv3TYdVJ3ee2Indgw2XSBUd2ff/zUyI61BIhgicZOT473gAmk/jWb++WdV2N1wFc4B/yLAVNUH4X09P0CBaCl5AeUmOGEYjqGYE9AEfyqEYFDLBygCCFonUM8H0IFFgAC09IUdA6BZM9cCCmcAHsWpNVRzDWBbAgYLgIfgCTHtIaK4GqBAGAGchSQaQKl1QyToqtbEYCq1PwFmTTFePm9ZH0ZTMNKxytyKqQezpZlpQKNO/77gtB5jxvQlgH7n6RMYDzAaN2Cx2GYAFXezgeB8JEZ8nx5UTcnjF+23Ef4sjkW4AJfmAFMD8Okezrv0I1wHjMYcoMIQL+5x+4jbfUkYw/YcUMLHu/SvjRHsIYDyWEmkx6Drn/ixOOKHEsBgZw4w/Dj74pjbFsf7cHlQSkjUAP8zhdfn/Gd05yROdCElQCHalMNWX75kIpGNCnzhVp8egSEEk7G8GgMaAJNYgYNvB1+7EuaBmiyy8gPZlmXz7w7uPi1TYeYCHmN+XOBx6MqX3E6WsgrMovj2D3B3vWqmhVSL9za1EtUTWC8MHfCvJAEqqrTd6XQxu/oSKZu6rsu6lTWptXJKjRqcRIGFqT5ZbqqNsoqruOg1QQToJauTxZUhbrQAoJEPUAGHAMOkwDIBSuC7pB/QcwJQzk4QLjp+lslUXTYxMo22e7fZrbvZZyMqxNxguJp1NPQLF7dyAyrgMw+8y3kBCnhTqn2YE1AHz43UxzIBTEXTlKpOhYtGLQJuZgGgYuQyZg1YywLAbvZ6IWPoO2/jceInHXotYAeiIUC++YbGBHlbNYsOhtCTptgiBxth/9zJJCQmjUN0ud1p2/Z7H7IpsS4nNM6QEf28AyPbOVEHGA4IYPGOaLf4Rzg7hcurQCe98SQIXkeT+hBzqGVspoYSKeHHK85tnGPTtAv+lZTNal3Dg4gTJ2O44tC3qhfKkQmuOfStbKbm6cRckYSVABX8wUYAdBNwXDpr5HyFXbMk21LP7YllKqh/Y5MvFv3a1etb519t/zngN+1i7NmKKY3qAAAAAElFTkSuQmCC`,Kd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAKtQTFRFNjY3bW9wV1laamxuKioqKSkpIiIiKSkpKioqJiYmKSkpKioqKCgoKioqKSkpKCgoKioqAAAA19fXNzc3p6uuh4uNaGpsjo+Qg4WHh4eHRERE5OTkvLy8eXl5bGxsiYqLfYCCr6+v4ubo2d7h8fHxUVFR1tzf5ejq3+Pm6u3v8PLz7fDx9vf4/Pz809nd+fr6ycnJX19f3OHk6OvtlJSU8/X20dfbKioq////uOpKKgAAABJ0Uk5Tz++vz0+PDx/PL2+fX++/P38A4xra3AAAAeNJREFUWMPtl1lzgjAUheli3Ql2b913QVESiNf//8t6LwSQmeB0jJ364HlwMIQvBA9njlbHUNYNcAP8MYAxVtcMP+H4o0NqMEaApo1yMuEoYy1I1baVQKsmAqBMnPO5bnzO+SAi9TlADAiiI31xUhR0D7FmgdJBJwU4nC0OVTMAIKAOLyaAjsWAn339M7TNAD2wO5YD0dmACCopYCfl7hyAQ4DRXmnr5uc8GhAizLQSBa3CUMoh3HesFrzj1IUQ+LnKAeH+FxrBw8mHuJPr/A48WZAXToQY0hYYfBs8RMfMytcAaJoBAnKiGSDNA59+mVNT0ak6qyqAssUKvbUOxSLzydSnSf5UfV0sXSndpdjmTsoBW63TNvHiic21EwqRtsPV0fzr0q3IcEnvgLe5XKBcBtCCgRnAJJH+H9AtAMhsmds2eOyqKFlL6esu9/0gSeXPOOSmJ8MLJxQhLjnrFazjUMVcFFm+4vFS3cEkMa9XAExo6A3uCPCRpNypWMcdbcpjPTJLJBMnRtC6AKBqEOtjqJlF2sy44sQAG3pxyxpTlZpplimtWFkmlpU8Xix684hQ47TO9fFsDKi1Vc/ENlnTkNrlNROo4pT0XCq07LjsMtaIO61dyVttUnVv/xdugGsA/AAjm4Hq3EefhwAAAABJRU5ErkJggg==`,qd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAGNQTFRF0dja1Nne0tjb0Nfa1tbe0Nbb0dbb0Nbb3d3d0Nba0Nfa0dfc0dfb0tfb0NfbAAAA+fr67fDx2d7h/Pz809nd5ejq3+Pm1tzf9vf48PLz6u3v4ubo6Ovt3OHk8/X20dfb////tCiYeAAAABB0Uk5Tby9P3x/vj68Pz59ffz+/AMAQNz4AAAFzSURBVFjD7Zhbc4IwEIVTQa4JtNVyh+X//0qzmzDKDG3HnAdfPG8J+s0YdvfkqOq/lB3sxUa0LVVdVA+iA+VVoln2cb7btuvCAuhJtTNrWwlguWs9ULcME8s+7u678nEPWIPFgA+6YoATzRigoAkDVLSggB4DJDRiAIMe4htQq5J+UEAT/P2FIuwn9FTVKgbaeSJt58GZulBAQ6UFpDSEAmYyFqDD+/n1gFHOAAC4t1CgAGCmDVRggIUrEQF80hkD2G6MxRuDAS0ZlRFd1vBK0nYeAN44WkCB+IItBMyZHGB5IaAhpYB5Iv2sNHKIDDjRN+ILGRcSZizIVHYArJneABTQUS6A4HZ0QzUJv6I4AHDD6CnFAM6ZgHZ0gAT1xhQFAPb+JW8BAFykEpGbpgCQm6YAtK/EpxzSx1QBRBxmW46x13mWfGrFWXX2+j33uujrA/UuWP+ryEd1vmBkhqM5x/nMlFuUT7UujdkH/Yfs//C3wA3O5+KdpKaIIQAAAABJRU5ErkJggg==`,Jd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAGNQTFRF0dbb1Nne0Nba0Nbb0dja3d3d0Nbb1tbe0Nfa0dfc0tjb0Nfa0dfb0Nfb0tfbAAAA+fr68PLz2d7h/Pz85ejq6u3v9vf41tzf09nd7fDx4ubo3+Pm6Ovt3OHk8/X20dfb////a2KHKQAAABB0Uk5Tjy/Pr28P7x+fX0/ff78/AL/xzy4AAAISSURBVFjDpZjbsoIwDEXxrgitiCJI2/D/X3ma4F3OjgN5siSzpm12k9bE6rZZZlm2NCsZrNKMLTXGyDix2/zFCNn6O2IbAaRb65xrj/fRUYbeX3gggPC07tOu1D5+VxxxePUyYEN1B8yRB14GpDAiAloFsKQTApzIKQCDZ9BOBTgVsCKaBohpLEFIo2bBzimAkKAD8qmAPVUgpNABeBN1HczoggCeCgWwwzrwcIcYkME5YkCg/TRAQfk0gKOM9wCd165GOm1ppxYUmGRPRtNBgEkWwAYCznCBAljSdbQQr7wHOQzBQpQsZHAGWIgCSKkuxwLOtIhZWNMZhVw7Rcp2i2IOMEdlTTMGtF052NbuQvrfG/PIFenRQkNoXN8zhxrsoNfcunMNuzPw7rgq35Yb+d67JnxoxUFvxmkc31iiEBQllkckhOg1Sa5IxUNvbhUAbs4tS3mBhPgLAB8mfEFxfBZSOo6uSHIWlPuB5pXTWE0D5Erzmgao4B5UUg8gABeUs9yVc9y8nFYTNQBWyVbfgxruwVoABWyuFfTGmpjAyzKu61IT8V13MgAWlI4LisXH8QclJspNUAUsECAoh31ueQlu7FU5cE3EgAbmuKG4AxZe0/BzoZEZwDT+UNLiEk5I7cNZ6J+p1e29cPEn5/rn7Lt999LL53d58oyw/e2pzqfRGtO/6OVJ/2YD/wT0jtXzyx9Jit7UpKnKsQAAAABJRU5ErkJggg==`,Yd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAIpQTFRFKioqKSkpKSkpKCgoKSkpKSkpKioqJiYmIiIiKioqKioqKCgoKSkpAAAAoaGhvLy88fHx19fXUVFRh4eH5OTkbGxsr6+vNzc3RERE8PHy3d/h4uTl9fb2u8DDlJSU09bYtru/5ujp+vr6ys3QwMTHztLUX19fycnJ6+3u2NvdxcnMKioqsre7////AzVdgwAAAA50Uk5Tz6+PX98f7y8Pn38/vwCQlyXOAAACBUlEQVRYw+2X13KDMBBFnbjRkrg3bGOqQeX/fy9oEQZhJIEznskD90XaITpZ7V6EPPr6o0YDYAC8C2C8CjAnpmVZDm7TzHGc/KnpMJkSAO4sKWCbJOvdhrZocd9dme659tiQAWgnrfBcAji0/HWa68wmR7+cybYwx0n+NCZccYiYbkRQrABYeJ0/JU3lkGISwUwBMPEPACDzjFyQV4UpQTASkqoyuNYBGV8hACI1YCsFZLB5SpEKYEMX2gExOfEMjpTuJW00mA/KXBsA+M9leJAZaYaX9CQCAnKD8EYKL5BI0YUvB9+pR7w6oKo+DC4JdQDEU28ALvXKaACuCLjwGpw7AEYASOuAo1hEpARMMV48AHHTB5k+A5u1sWp42grwqMZIJ6gzN/2TlX02LLEjA+Sv85mv4EMDAMNGnkFSrXgsjJ4AtA/A5TvqBDDwvg4I6q+E4EjFqVwBeBdC4gu10APKtycuDoDSFt0BZa5+4eHXAXwF4r56GeDxIvLwCBvsVERugJPIU7dRAPiFARoJucoPiwBoHGlBkVB/QBmee2/BEwG9asC+xykCCwYlICDEz7LMA3foAM8fVxSGj1ALQDe2InriRCjPIL7ot9CmDIVuLewPaOidgGR7/b4/tEv2xa1ulYAOumvepOs1cSa76tr22PpwKn2Op3DW2YWmw++FAfB/Ab+P35oVXJeLOQAAAABJRU5ErkJggg==`,Xd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAEVQTFRFKioqKSkpKSkpKSkpIiIiKSkpKioqKioqKCgoKSkpAAAA8fHx19fXREREvLy85OTkUVFRoaGhlJSUX19fycnJKioq////NBMILQAAAAt0Uk5Tn48frw/fz38/vwDNvohoAAAAxklEQVRYw+2U0Q6DIAxFUYcIcypK/f9PXUEJYnDJ1iVLlp63tngCBK8wr7gVenUXiKUwQh+AAq2ulAfHbdbGGj838CaPxROrIHCJtUDv7OzBcZ+6YfkuWD/mO4IWHE3QgKUJFMw0QUUVaOodsMC/g+Fn7+BOFVjQNMEMKlwiYQcq/o0jpsN4vXIoh40LRyim1bQsWXKd2eYTyLADRF4E6o4fy9KgQcGBLbBrjPOuy8P7HPdpLgwRFrCABSxgAQtYwAIW/KXgCeSx2e474wGpAAAAAElFTkSuQmCC`,Zd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAFpQTFRFKioqKSkpKSkpKSkpKSkpKioqJiYmKioqKioqIiIiKSkpKioqKCgoKSkpAAAAoaGhUVFRREREh4eHr6+vbGxseXl5vLy85OTkNzc3lJSUX19fycnJKioq////b/ywvQAAAA90Uk5Tn49vH99PL+/PD69/P78ASc6GIAAAALZJREFUWMPt1csOgjAQheF6twWKN0Do4f1fU4qJNmpmGmdhYuZfdfWllDIYL8x4UyXhLWc5AExLHgjPxtcaOB4YiXpUUoDdwR6BAE4oOMChJoALDxToyUdggYUUqMgzOPNvgQbCz4FWCjQ596AlgAEb2T24wkqBrQwAPH+IQmD+GrtpmHRfAsn0Og6xuDoMj2XGDqbWHwdqbMcCSeXcynt7X5VZY138X1BAAQUUUEABBRRQ4A+BGzXkBO/I2Ka3AAAAAElFTkSuQmCC`,Qd=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAGNQTFRF0dfc0tjb0dbb3d3d0Nbb1Nne0Nba0dja0Nfa0Nbb1tbe0Nfa0dfb0Nfb0tfbAAAA1tzf8PLz4ubo6u3v5ejq/Pz8+fr69vf43+Pm09nd7fDx2d7h6Ovt8/X23OHk0dfb////v37mbAAAABB0Uk5TX0+PD68vz2/f7x+ff78/AA+VfH8AAALtSURBVFjDnZjZgqsgDIY7p9PpvljryhLf/ykHUZKw6ODJRSuIX00If6C7p2/7x+OBjct0fTnebsdLMPA5D9w9r3dj19v4BWh3a2cI7fRtxp2ofTUAf0SntabWS3fjVytlG7G0FubTApRSUspSAQyz2T6l6mF4Q4t95kON4z6szwB+QE0tBWLgg61J0FFfDR0H3AmgUwD3ay9ootszoJ9aDYIZ4ANyvtJuXAg4Jl6yw6sWARKvGvTVAr4SAOHcYo/Ru/R+EG/wjgA8BhKhfeTMDJArgN69Xw1QT1cVQMUBVyhXADg1BTruTfef04idEj31xi0AKIiF66TpyAG06NbbPaeRmeOChA9GvAgBDY8VB/QEIFbnIk5eUYQqH0BT7gEa91SDNx2ghPsCoI+TSzCARk9vfDF5MYiS643pR+PKGSD9G7VSGLqBvW6cB8q6cHWAapQpY1bFagToyQRf7Fbt9MtoZLAWnBJSxLgK1om+w+75YMvZKaFg603NRvNo3TKOKpMcDx8wYPrIRJ+KEn0RIFcBLVOG/wJIppMeoFsFpGROjEEkSeO+qSyZs2vhO6FI6wDB0syWtnoboAg0MfUbq4A3Bq2C8waAgChJGvjxAOtB1O7FCRC6QErIS8cQps8H9W4CnCFWwk8iD0pX0EJV/mFyq0MtTu0KqkBUE0XE5GRc8nlRXwBwJayi1+VFfQGQWAEMUGKEEoBJRjwlrGbHX2yOmkla+MQf/G1eSrRo1xL32eVMCvm3EopZdRsOOOPSEIn0SeckadMXq0wblFBhwh05IF8JPVHNBXAl3ABIK2GTBuQrYbDBKDYroQf4x7YzuUroAaguZCthtwGQVEJ/l0aFJV8JgxjIzUo4+JVJblbCAU8xB75DyVdCWuJ7DshXQs+FHTt/5CrhwjTmK2EwjTSkVsW4d/KVMAmw4jgBTqOg8fPufLD1+sTYmLaLvtnKBMGhGzLsNA0cy/t4jjd2Cc/27H+Ay4NsH/wL8AuqodhSJSO/IwAAAABJRU5ErkJggg==`,$d={w:14,h:8},ef=Object.assign({"../assets/sketch/tiles/barrel.png":Od,"../assets/sketch/tiles/barrels.png":kd,"../assets/sketch/tiles/bed.png":Ad,"../assets/sketch/tiles/carpet.png":jd,"../assets/sketch/tiles/cart.png":Md,"../assets/sketch/tiles/chair.png":Nd,"../assets/sketch/tiles/char_green.png":Pd,"../assets/sketch/tiles/char_purple.png":Fd,"../assets/sketch/tiles/char_red.png":Id,"../assets/sketch/tiles/char_yellow.png":Ld,"../assets/sketch/tiles/chest.png":Rd,"../assets/sketch/tiles/crate.png":zd,"../assets/sketch/tiles/crate_small.png":Bd,"../assets/sketch/tiles/door_closed.png":Vd,"../assets/sketch/tiles/door_open.png":Hd,"../assets/sketch/tiles/grass.png":Ud,"../assets/sketch/tiles/planks.png":Wd,"../assets/sketch/tiles/plants.png":Gd,"../assets/sketch/tiles/table.png":Kd,"../assets/sketch/tiles/tile.png":qd,"../assets/sketch/tiles/tiles.png":Jd,"../assets/sketch/tiles/trapdoor_square.png":Yd,"../assets/sketch/tiles/wall.png":Xd,"../assets/sketch/tiles/wall_half.png":Zd,"../assets/sketch/tiles/wood.png":Qd}),tf=e=>ef[`../assets/sketch/tiles/${e}.png`]??``,nf={coating:[0,0,4,6],lab:[4,0,6,3],counter:[4,4,6,2],showroom:[10,0,4,6],idle:[4,6,6,2]},rf=[4,3,6,1],af={lab:[[4.85,1.95],[6.35,1.95],[7.85,1.95],[9.2,1.95]],counter:[[4.85,4.5],[5.71,4.5],[6.57,4.5],[7.43,4.5],[8.29,4.5],[9.15,4.5]],coating:[[1,2.05],[2.95,2.05],[1,4.75]],showroom:[[10.95,2.1],[12.95,2.1],[10.95,4.8],[12.95,4.8]],idle:[[4.8,6.7],[5.5,6.7],[6.2,6.7],[7.8,6.7],[8.5,6.7],[9.2,6.7],[4.8,7.45],[5.5,7.45],[8.5,7.45],[9.2,7.45]]},of={coating:[2,.42],lab:[7,.42],counter:[7,3.5],showroom:[12,.42],idle:[7,6.2]},sf={coating:`red`,lab:`purple`,counter:`yellow`,showroom:`green`,idle:`purple`},cf={coating:`tiles`,lab:`tiles`,counter:`wood`,showroom:`tile`,idle:`tiles`},lf={coating:[4,3,270],showroom:[9,3,90]},uf=(e,t,n,r,i,a=0,o=1,s=1,c)=>({key:e,tile:t,layer:n,x:r,y:i,w:o,h:s,rot:a,tint:c});function df(e,t,[n,r,i,a],o){for(let s=n;s<n+i;s++)for(let n=r;n<r+a;n++)e.push(uf(`f${s},${n}`,t,`floor`,s,n,0,1,1,o))}var ff={n:0,e:90,s:180,w:270};function pf(e,t,n,r,i,a=[]){for(let o=0;o<i;o++){if(a.includes(o))continue;let i=t===`n`||t===`s`?n+o:n,s=t===`n`||t===`s`?r:r+o;e.push(uf(`w${t}${i},${s}`,`wall`,`wall`,i,s,ff[t]))}}var mf=e=>e>=25?3:e>=5?2:+(e>=1),hf=e=>e>=10?3:e>=5?2:+(e>=1);function gf(e){let t=[];for(let e=0;e<$d.w;e++)for(let n=0;n<$d.h;n++)(e<4||e>9)&&t.push(uf(`g${e},${n}`,`grass`,`ground`,e,n));df(t,cf.lab,nf.lab,`lab`),df(t,`tile`,rf,`hall`),df(t,cf.counter,nf.counter,`counter`),df(t,cf.idle,nf.idle,`hall`),t.push(uf(`carpet1`,`carpet`,`floor`,6,7,90),uf(`carpet2`,`carpet`,`floor`,7,7,90));for(let n of[`coating`,`showroom`])Se(e,n)&&df(t,cf[n],nf[n],n);pf(t,`n`,4,0,6),pf(t,`w`,4,0,8,[3]),pf(t,`e`,9,0,8,[3]),pf(t,`s`,4,7,6,[2,3]),t.push(uf(`entry-l`,`wall_half`,`wall`,5,7,180),uf(`entry-r`,`wall_half`,`wall`,8,7,180)),Se(e,`coating`)&&(pf(t,`n`,0,0,4),pf(t,`w`,0,0,6),pf(t,`s`,0,5,4)),Se(e,`showroom`)&&(pf(t,`n`,10,0,4),pf(t,`e`,13,0,6),pf(t,`s`,10,5,4));for(let n of[`coating`,`showroom`]){let[r,i,a]=lf[n];t.push(uf(`door-${n}`,Se(e,n)?`door_open`:`door_closed`,`wall`,r,i,a))}let n=Ce(e,`lab`),r=hf(ye(e,`lab-equip`));af.lab.forEach(([e],i)=>{i>=n||(t.push(uf(`lab-desk${i}`,`table`,`furn`,e-.5,.55)),r>=1&&t.push(uf(`lab-scope${i}`,`crate_small`,`furn`,e-.4,.4,0,.7,.7)))}),r>=2&&t.push(uf(`lab-rack`,`barrels`,`furn`,9.15,2.2,0,.75,.75)),r>=3&&t.push(uf(`lab-scope2`,`crate_small`,`furn`,8.9,.45,0,.6,.6)),be(e,`lab-master`)&&t.push(uf(`lab-badge`,`chest`,`furn`,4.1,2.25,0,.65,.65));let i=Ce(e,`counter`);af.counter.forEach(([e],n)=>{n<i&&t.push(uf(`ct${n}`,`table`,`furn`,e-.5,5.02,0,1,1))});let a=mf(ye(e,`counter-equip`));if(a>=1&&t.push(uf(`pack`,`cart`,`furn`,9.12,3.95,90,.8,.8)),a>=2&&t.push(uf(`pack-roll`,`barrel`,`furn`,9.25,3.2,0,.6,.6)),a>=3&&t.push(uf(`pack-house`,`crate`,`furn`,4.05,3.9,0,.8,.8)),be(e,`counter-master`)&&t.push(uf(`pack-badge`,`chest`,`furn`,9.3,5.25,0,.6,.6)),be(e,`counter-master2`)&&t.push(uf(`pack-badge2`,`chest`,`furn`,4.1,5.25,0,.6,.6)),t.push(uf(`bench-l`,`table`,`furn`,4.1,6.92,0,1.6,.75),uf(`bench-r`,`table`,`furn`,8.3,6.92,0,1.6,.75)),t.push(uf(`plant-a`,`plants`,`furn`,4.1,.05,0,.7,.7),uf(`plant-b`,`plants`,`furn`,9.2,7.15,0,.7,.7)),Se(e,`coating`)){let n=Ce(e,`coating`);af.coating.forEach(([e,r],i)=>{i<n&&t.push(uf(`co${i}`,i===2?`barrels`:`barrel`,`furn`,e-.5,r-1.2))}),t.push(uf(`co-rack`,`crate`,`furn`,2.6,4.05),uf(`co-planks`,`planks`,`furn`,.1,.1,0,.8,.8))}if(Se(e,`showroom`)){let n=Ce(e,`showroom`);af.showroom.forEach(([e,r],i)=>{i<n&&t.push(uf(`sh${i}`,`crate`,`furn`,e-.5,r-1.2))}),t.push(uf(`sh-plant`,`plants`,`furn`,12.9,.1,0,.9,.9),uf(`sh-plant2`,`plants`,`furn`,10.1,4.95,0,.8,.8))}return t}function _f(e){let t=[`coating`,`showroom`].map(t=>+!!Se(e,t)).join(``),n=[`counter`,`lab`,`coating`,`showroom`].map(t=>Ce(e,t)).join(`,`),r=[`lab-master`,`counter-master`,`counter-master2`].map(t=>+!!be(e,t)).join(``);return`${t}|${n}|${mf(ye(e,`counter-equip`))}${hf(ye(e,`lab-equip`))}|${r}`}var vf=new URL(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz8/7+/vf39/Dw8PDg4Or6+vq6urKysry8vLLCwslJSURkZGmpqaLy8vuLi40tLSRUVFVVVVHBwcODg4n5+fz8/Pv7+/X19fsbGx4ODg3d3dj4+P6urq4+Pj29vb2NjY1tbW6Ojo5eXlAAAA////4mP5HgAAAAx0Uk5TT58/r38Pb9/vv18AWW6uNwAAAOlJREFUOMu1k9kOgjAQRUEBS90F9xUQcL/8/9c5hEUKTUmMnqebzkk6M021fgvaTwWTd22iy025oDHkME0m6MB8cSYWc0BvChzO9JIzdcDrQgcT91niTtARBZNh9qowAzMFwcLySmz2x+N+k6YlLEGwsQrDcHtIZzhsKa5gCwLgRVG0y6bcUfSAmnAjij1kuSpw4E4UQpb5R7Do8EEUQp6tUugh9pMaXoxeKQCJhKyLmuAHg1glDMd0ta8Q4rTFkUI4pcJJ1UMABMomEyF+JazXLYJ8UbTqZr26agNS+Oe5DdYsM+MPf1PKG9vBbbpj9U/sAAAAAElFTkSuQmCC`,``+import.meta.url).href,yf={coating:`zone-coating`,showroom:`zone-showroom`},bf={counter:`판매대`,lab:`연구 책상`,coating:`코팅 작업실`,showroom:`체험·전시`,idle:`대기실`},xf=`생산하지 않아요. 새로 고용한 일꾼이 여기에 와요. 빈 구역으로 옮겨 주세요.`,Sf={counter:[`counter-plus`,`counter-plus2`,`counter-equip`,`counter-master`,`counter-master2`],lab:[`lab-plus`,`lab-plus2`,`lab-equip`,`lab-master`],coating:[`zone-coating`,`coating-plus`],showroom:[`zone-showroom`,`showroom-plus`,`showroom-plus2`],idle:v.filter(e=>e.kind===`hire`).map(e=>e.id)};function Cf(e,t){let n=[],r=(e,t)=>t-e,i=e=>e>0?`+`:`−`,a=r(e.coins,t.coins),o=r(e.research,t.research);if(Math.abs(a)>.004){let e=`${i(a)}${L(Math.abs(a),2)}/초`;n.push([`코인 ${e}`,J(`coin`,e)])}if(Math.abs(o)>4e-4){let e=`${i(o)}${L(Math.abs(o),3)}/초`;n.push([`연구 ${e}`,J(`research`,e)])}let s=r(e.coatingBonus,t.coatingBonus);if(Math.abs(s)>1e-6){let e=`${i(s)}${Math.round(Math.abs(s)*100)}%p`;n.push([`직접 보상 ${e} (다음 작업부터)`,J(`direct`,e)])}let c=r(e.counter.demand,t.counter.demand);if(Math.abs(c)>1e-6&&Math.abs(a)<=.004){let e=`${i(c)}${L(Math.abs(c),2)}`;n.push([`수요 상한 ${e}`,J(`demand`,e,``,`수요 상한`)])}let l=r(e.rating.target,t.rating.target);if(Math.abs(l)>=.05){let e=`${i(l)}${L(Math.abs(l),1)}`;n.push([`목표 별점 ${e}`,J(`star`,e,``,`목표 별점`)])}return n.length||n.push([`생산 변화 없음`,`변화 없음`]),n}var wf=(e,t,n,r,i)=>{e.style.setProperty(`--x`,String(t)),e.style.setProperty(`--y`,String(n)),r!==void 0&&(e.style.setProperty(`--w`,String(r)),e.style.setProperty(`--h`,String(i??r)))};function Tf(e,t,n){let r=xe(e,n);if(n===`idle`)return{out:``,status:r?`생산 없음 — 빈 구역으로 옮겨 주세요.`:``,warn:r>0};let i=Ce(e,n);if(n===`counter`)return{out:`${J(`coin`,`+${L(t.coins,2)}/초`,`big`)}<span class="row2">${J(`throughput`,L(t.counter.throughput,2))}<span class="of">/</span>${J(`demand`,L(t.counter.demand,2))}${t.counter.price>1?J(`price`,`×${t.counter.price.toFixed(2)}`):``}</span>`,status:t.counter.idle?`비어 있음`:t.counter.capped?`수요 상한 도달`:`손님 ${L(t.counter.demand-t.counter.throughput,2)}/초가 기다려요 (응대 ${Math.round(t.rating.serviceRatio*100)}%)`,warn:t.counter.idle||t.counter.capped};if(n===`lab`)return{out:J(`research`,`+${L(t.research,3)}/초`,`big`),status:r===0?`비어 있음`:r<i?`함께 쓰면 1인당 조금 느려요`:`자리 가득`,warn:r===0};if(n===`coating`){let n=!!e.session&&e.session.status!==`complete`;return{out:`${J(`direct`,`+${L(t.coatingBonus*100,1)}%`,`big`)}<span class="row2">${_d(`time`,`재코팅`,`${L(t.prepSeconds,2)}초`)}</span>`,status:r===0?`비어 있음`:n?`작업 지원 중 — 끝나면 옮길 수 있어요`:`작업 시작 때 적용`,warn:!1}}return{out:`${J(`demand`,`+${L(t.showroom.demandAdd,2)}`,`big`)}<span class="row2">${J(`price`,`+${L(t.showroom.priceAdd*100,1)}%`)}</span>`,status:t.showroom.noCounter?`판매대가 비면 효과 없음`:r===0?`비어 있음`:`인원이 늘수록 효과 감소`,warn:t.showroom.noCounter}}function Ef(e,t){let n=e.rating,r=Ne(e);if(t===`showroom`)return`${q(`star`,``)}손님 만족 +${L(n.showroom,2)} <span class="dim">(목표 별점 ★${St(n.target)})</span>`;let i=r>0?`▲ 오르는 중`:r<0?`▼ 내려가는 중`:e.counter.sold>0?`유지`:`판매가 없어 멈춤`;return`${q(`star`,``)}목표 별점 ★${St(n.target)} <span class="dim">지금 ★${St(n.current)} ${i}</span><br><span class="dim">기본 ${L(n.base,1)} · 응대 +${L(n.service,2)} · 체험 +${L(n.showroom,2)} · 말랑이 +${L(n.variety,1)} → 수요 ×${n.demandMult.toFixed(2)}</span>`}var Df=class{d;map=Y(`zones`);sceneEl=vd(`div`,{class:`map-scene`,"aria-hidden":`true`});sceneK=``;seen=new Set;tiles=new Map;layoutKey=``;detailKey=``;selected=null;zone=null;drag=null;ghost=Y(`drag-ghost`);flash={text:``,until:0};growthBtn=Y(`shop-growth`);body=Y(`zd-body`);rankUps=new Map;say(e){this.flash={text:e,until:performance.now()+3e3},X(Y(`shop-hint`),e)}constructor(e){this.d=e,this.map.appendChild(this.sceneEl);for(let e of r){let[t,n,r,i]=nf[e],a=vd(`div`,{class:`zone zone-${e}`,"data-zone":e,role:`group`,"aria-label":Sd(e)});wf(a,t,n,r,i),a.innerHTML=`<div class="ztag"><span class="zname">${pd(e)}${bf[e]}</span><span class="cap"></span><i class="zwarn" hidden>!</i></div>
        <div class="toks"></div>
        ${e===`coating`||e===`showroom`?`<div class="lock" hidden><b class="lname"><img src="${vf}" alt="">${bf[e]}</b><p class="req"></p><p class="why"></p><button type="button" class="btn small" data-buy="${yf[e]}"></button></div>`:``}
        <button type="button" class="target" hidden></button>`,wf(a.querySelector(`.ztag`),of[e][0]-t,of[e][1]-n),this.map.appendChild(a),this.tiles.set(e,a),a.querySelector(`.target`).addEventListener(`click`,t=>{t.stopPropagation(),this.dropSelected(e)}),a.addEventListener(`click`,t=>{let n=t.target,r=n.closest(`button[data-buy]`);if(r){t.stopPropagation(),this.buy(r.dataset.buy);return}n.closest(`button`)||this.zoneClick(e)})}this.body.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(t){if(t.dataset.buy)this.buy(t.dataset.buy);else if(t.dataset.pick)this.zone=t.dataset.pick,this.d.sound(`tap`),this.render();else if(t.dataset.wid){let e=Number(t.dataset.wid);this.select(this.selected===e?null:e)}}}),Y(`zd-close`).addEventListener(`click`,()=>{this.zone=null,this.select(null)}),document.addEventListener(`pointermove`,e=>this.onMove(e)),document.addEventListener(`pointerup`,e=>this.onUp(e)),document.addEventListener(`pointercancel`,e=>this.cancelDrag(e.pointerId,`cancel`)),window.addEventListener(`blur`,()=>this.cancelDrag(null,`cancel`)),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&(this.drag||this.selected!==null?(this.cancelDrag(null,`cancel`),this.select(null)):this.zone!==null&&Y(`settings`).hidden&&Y(`confirm`).hidden&&(this.zone=null,this.d.sound(`tap`),this.render()))}),this.growthBtn.addEventListener(`click`,()=>{let e=this.selected;e!==null&&(this.select(null),this.d.growth(e))})}flashRankUp(e){let t=performance.now()+2400;for(let n of e)this.rankUps.set(n,t);this.layoutKey=``,setTimeout(()=>{this.layoutKey=``,this.render()},2500)}buy(e){let t=this.d.buy(e);t.ok?t.def.kind===`zone`&&(this.zone=t.def.id===`zone-coating`?`coating`:`showroom`,this.render()):(this.d.sound(`deny`),yd(t.reason===`coins`?`코인이 부족해요.`:t.reason===`condition`?`아직 조건을 채우지 못했어요.`:`이미 설치했어요.`,`warn`))}zoneClick(e){if((this.drag?.active?null:this.selected)!==null){this.dropSelected(e);return}this.zone=this.zone===e?null:e,this.d.sound(`tap`),this.render()}render(){let e=this.d.state(),t=ke(e),n=_f(e);n!==this.sceneK&&(this.sceneK=n,this.drawScene(e));let i=e.workers.map(e=>`${e.id}:${e.place}:${e.place===`idle`?``:j(e,e.place)}`).join(`,`)+`|`+n+`|`+this.selected;i!==this.layoutKey&&(this.layoutKey=i,this.rebuildTokens(e));let a=this.drag?.active?this.drag.id:this.selected;this.map.classList.toggle(`show-slots`,a!==null||this.zone!==null),this.map.classList.toggle(`moving`,a!==null);for(let n of r)this.renderTile(e,t,n);Z(Y(`shop-summary`),J(`worker`,`${e.workers.filter(e=>e.place!==`idle`).length}/${e.workers.length}`,``,`배치된 일꾼`)),this.renderDetail(e,t);let o=this.drag?.active?null:this.selected;this.growthBtn.hidden=o===null,o!==null&&(Z(this.growthBtn,`${q(`level`,``)}일꾼 ${o} 성장 보기`),this.growthBtn.setAttribute(`aria-label`,`일꾼 ${o}의 개인 강화·숙련 보기`));let s=Y(`shop-hint`);performance.now()<this.flash.until?X(s,this.flash.text):this.selected===null?t.counter.idle?X(s,`판매대가 비어 코인이 안 들어와요.`):t.counter.capped?X(s,`판매대 인원이 수요보다 많아요 — 남는 인원은 다른 구역으로.`):Ne(t)<0&&t.rating.serviceRatio<.9?X(s,`손님이 기다려서 별점이 내려가요 — 판매대 인원을 늘려 보세요.`):t.lab.workers===0?X(s,`연구 책상이 비어 자동 연구가 멈췄어요.`):X(s,``):X(s,`일꾼 ${this.selected} → 옮길 구역을 누르세요 (Esc 취소)`)}drawScene(e){let t=gf(e),n=this.seen.size===0,r=new Set,i=document.createDocumentFragment(),a=(e,[t,n,r,a])=>{let o=vd(`div`,{class:`tint ${e}`});wf(o,t,n,r,a),i.appendChild(o)};a(`t-lab`,nf.lab),a(`t-hall`,rf),a(`t-counter`,nf.counter),a(`t-hall`,nf.idle),Se(e,`coating`)&&a(`t-coating`,nf.coating),Se(e,`showroom`)&&a(`t-showroom`,nf.showroom);let o=[];for(let e of t){let t=vd(`img`,{class:`pc pc-${e.layer}`,src:tf(e.tile),alt:``,draggable:`false`});wf(t,e.x,e.y,e.w,e.h),e.rot&&t.style.setProperty(`--r`,`${e.rot}deg`),r.add(e.key),!n&&e.layer===`furn`&&!this.seen.has(e.key)&&(t.classList.add(`pop`),o.push(t)),i.appendChild(t)}this.sceneEl.replaceChildren(i),this.seen=r,o.length&&requestAnimationFrame(()=>requestAnimationFrame(()=>o.forEach(e=>e.classList.remove(`pop`))))}tokenHtml(e,t,n,r){return`<span class="bob"><img src="${tf(`char_${sf[e]}`)}" alt="" draggable="false"><b>${t}</b>${n>0?`<i class="rk" aria-hidden="true">${`★`.repeat(n)}</i>`:``}</span>${r?`<em class="up" aria-hidden="true">숙련↑</em>`:``}`}rebuildTokens(e){let t=performance.now();for(let n of r){let r=this.tiles.get(n).querySelector(`.toks`);r.replaceChildren();let[i,a]=nf[n],o=e.workers.filter(e=>e.place===n),s=n===`idle`||Se(e,n),c=n===`idle`?af.idle.length:s?Ce(e,n):0;if(o.forEach((e,o)=>{let s=af[n][Math.min(o,af[n].length-1)],c=n===`idle`?0:j(e,n),l=(this.rankUps.get(e.id)??0)>t,u=n===`idle`?``:`, 숙련 ${w.rankNames[c]}`,d=vd(`button`,{type:`button`,class:`worker${n===`idle`?` idle`:``}${l?` rankup`:``}`,"data-id":String(e.id),"aria-pressed":String(this.selected===e.id),"aria-label":`일꾼 ${e.id} (${Sd(n)}${u}) — 끌어서 옮기거나 눌러서 선택`,title:`일꾼 ${e.id}${u}`},this.tokenHtml(n,e.id,c,l));wf(d,s[0]-i,s[1]-a),d.addEventListener(`pointerdown`,t=>this.onDown(t,e.id,n,d)),d.addEventListener(`click`,t=>{t.detail===0&&(t.preventDefault(),this.select(this.selected===e.id?null:e.id))}),r.appendChild(d)}),n!==`idle`)for(let e=o.length;e<c;e++){let t=af[n][e],o=vd(`span`,{class:`slot-empty`,"aria-hidden":`true`});wf(o,t[0]-i,t[1]-a),r.appendChild(o)}}}renderTile(e,t,n){let r=this.tiles.get(n),i=n===`idle`||Se(e,n);r.classList.toggle(`locked`,!i),r.classList.toggle(`sel`,this.zone===n);let a=r.querySelector(`.cap`),o=r.querySelector(`.zwarn`),s=r.querySelector(`.lock`);if(n===`idle`){let t=xe(e,`idle`);Z(a,J(`worker`,String(t))),o.hidden=t===0,o.title=t?`생산하지 않는 일꾼이 있어요`:``}else if(i){s&&(s.hidden=!0),Z(a,J(`seat`,`${xe(e,n)}/${Ce(e,n)}`));let r=Tf(e,t,n);o.hidden=!r.warn,o.title=r.warn?r.status:``}else{Z(a,q(`lock`)),o.hidden=!0;let t=He(e,yf[n]);s.hidden=!1;let r=t.def.needResearch===void 0?`${J(`review`,R(t.def.needReviews??0),``,`리뷰`)}${t.def.needStars===void 0?``:J(`star`,St(t.def.needStars),``,`최고 별점`)}`:J(`research`,R(t.def.needResearch));Z(s.querySelector(`.req`),`${q(`lock`,`조건:`)}${r} + ${J(`coin`,R(t.def.cost))}`),Z(s.querySelector(`.why`),t.conditionMet?t.affordable?`${q(`check`,``)}지금 설치할 수 있어요!`:Ed(t):t.missing.map(Td).join(` `));let i=s.querySelector(`button`),c=t.conditionMet&&t.affordable;Z(i,c?`${J(`coin`,R(t.def.cost))} 문 열기`:`문 열기`),i.classList.toggle(`primary`,c),c?i.removeAttribute(`aria-disabled`):i.setAttribute(`aria-disabled`,`true`)}let c=r.querySelector(`.target`),l=this.drag?.active?this.drag.id:this.selected;if(l==null){c.hidden=!0,r.classList.remove(`can-drop`,`no-drop`,`over`,`here`);return}let u=Be(e,l,n);if(e.workers.find(e=>e.id===l)?.place===n)c.hidden=!0,r.classList.remove(`can-drop`,`no-drop`),r.classList.add(`here`);else if(r.classList.remove(`here`),c.hidden=!1,!u.result.ok)c.disabled=!0,c.innerHTML=`<span>${Q(Dd(u.result.reason,n))}</span>`,r.classList.add(`no-drop`),r.classList.remove(`can-drop`);else{c.disabled=!1;let e=Cf(u.before,u.after);c.innerHTML=`<b>여기로</b><span>${e.map(e=>e[1]).join(` `)}</span>`,c.setAttribute(`aria-label`,`일꾼 ${l}을(를) ${Sd(n)}(으)로 옮기기: ${e.map(e=>e[0]).join(`, `)}`),r.classList.add(`can-drop`),r.classList.remove(`no-drop`)}r.classList.toggle(`over`,this.drag?.over===n)}relatedIds(e,t){return Sf[t].filter(t=>!be(e,t)).slice(0,t===`idle`?1:3)}renderDetail(e,t){let n=this.zone,i=n!==null&&(n===`idle`||Se(e,n)),a=n?this.relatedIds(e,n):[],o=n?e.workers.filter(e=>e.place===n):[],s=n===null?`all|${r.map(t=>t===`idle`||Se(e,t)?1:0).join(``)}`:`${n}|${i}|${this.selected}|${o.map(e=>`${e.id}:${n===`idle`?0:j(e,n)}`).join(`,`)}|${a.map(t=>`${t}:${ye(e,t)}`).join(`,`)}`;if(s!==this.detailKey&&(this.detailKey=s,this.buildDetail(e,n,i,a,o.map(e=>e.id))),X(Y(`zd-title`),n===null?`가게 한눈에 보기`:Sd(n)),Z(Y(`zd-cap`),n===null?``:n===`idle`?J(`worker`,String(xe(e,`idle`))):i?J(`seat`,`${xe(e,n)}/${Ce(e,n)}`):q(`lock`)),Y(`zd-close`).hidden=n===null,n===null){for(let n of r){let r=this.body.querySelector(`[data-sum="${n}"]`);r&&Z(r,n===`idle`||Se(e,n)?`<span class="cnt">${n===`idle`?J(`worker`,String(xe(e,n))):J(`seat`,`${xe(e,n)}/${Ce(e,n)}`)}</span>${Tf(e,t,n).out.replace(` big`,``)}`:`${q(`lock`)}<span class="dim">닫힘</span>`)}return}if(i){let r=Tf(e,t,n);Z(this.body.querySelector(`.out`),r.out);let i=this.body.querySelector(`.sat`);i&&Z(i,Ef(t,n));let a=this.body.querySelector(`.status`);X(a,r.status),a.classList.toggle(`warn`,r.warn)}else{let t=He(e,yf[n]);Z(this.body.querySelector(`.why`),t.conditionMet?t.affordable?`${q(`check`,``)}지금 설치할 수 있어요!`:Ed(t):t.missing.map(Td).join(` `))}for(let t of a){let n=this.body.querySelector(`[data-row="${t}"]`);if(!n)continue;let r=He(e,t),i=r.conditionMet&&r.affordable;Z(n.querySelector(`.st`),i?`${q(`check`,``)}살 수 있어요`:Ed(r));let a=n.querySelector(`button`);Z(a,J(`coin`,R(r.cost))),a.classList.toggle(`primary`,i),i?a.removeAttribute(`aria-disabled`):a.setAttribute(`aria-disabled`,`true`)}}buildDetail(e,t,n,i,a){if(t===null){this.body.innerHTML=`<p class="zd-help">구역을 누르면 역할·인원·관련 구매가 여기에 나와요. 일꾼은 끌어 놓거나, 누른 뒤 옮길 구역을 누르세요.</p>
        <div class="zd-grid">${r.map(e=>`<button type="button" class="zd-zone" data-pick="${e}"><span class="zn">${pd(e)}${bf[e]}</span><span class="zs" data-sum="${e}"></span></button>`).join(``)}</div>`;return}let o=t===`idle`?xf:d[t].role,s=a.sort((e,t)=>e-t).map(n=>{let r=e.workers.find(e=>e.id===n),i=t===`idle`?0:j(r,t);return`<button type="button" class="wchip" data-wid="${n}" aria-pressed="${this.selected===n}" aria-label="일꾼 ${n} 선택"><img src="${tf(`char_${sf[t]}`)}" alt=""${t===`idle`?` class="idle"`:``}>${n}${i?`<small>${`★`.repeat(i)}</small>`:``}</button>`}).join(``),c=t!==`idle`&&n?Ce(e,t)-a.length:0,l=i.map(t=>{let n=y.get(t),r=ye(e,t);return`<li data-row="${t}"><span class="nm">${Q(n.name)}${n.repeat?` <small>Lv ${r}→${r+1}</small>`:``}<small class="ds">${Q(n.desc)}</small></span><span class="st"></span><button type="button" class="btn small" data-buy="${t}"></button></li>`}).join(``);this.body.innerHTML=`<p class="zd-role">${Q(o)}</p>
      ${n?`<div class="zd-out"><div class="out"></div><p class="status"></p>${t===`counter`||t===`showroom`?`<p class="sat"></p>`:``}</div>`:`<div class="zd-out"><p class="why"></p></div>`}
      ${n?`<h3 class="zd-h">일꾼${c>0?` <small>빈 자리 ${c}</small>`:``}</h3><div class="zd-workers">${s||`<span class="dim">아직 아무도 없어요.</span>`}</div>`:``}
      ${l?`<h3 class="zd-h">${t===`idle`?`다음 고용`:`관련 구매`}</h3><ul class="zd-buys">${l}</ul>`:``}`}select(e){if(this.selected=e,e!==null){let t=this.d.state().workers.find(t=>t.id===e);t&&(this.zone=t.place)}this.layoutKey=``,document.body.classList.toggle(`placing`,e!==null),this.render(),e!==null&&this.d.sound(`pickup`)}dropSelected(e){let t=this.drag?.active?null:this.selected;if(t===null)return;let n=this.commit(t,e);this.selected=null,n&&(this.zone=e),this.select(null)}commit(e,t){let n=this.d.move(e,t);return n.ok?(this.d.sound(`drop`),!0):(n.reason!==`same`&&(this.d.sound(`deny`),yd(Q(Dd(n.reason,t)),`warn`)),!1)}onDown(e,t,n,r){if(!(e.button>0||this.drag)){e.preventDefault(),this.drag={id:t,pointer:e.pointerId,startX:e.clientX,startY:e.clientY,active:!1,from:n,over:null,token:r};try{r.setPointerCapture(e.pointerId)}catch{}}}placeAt(e,t){let n=document.elementFromPoint(e,t)?.closest(`.zone`);return n?n.dataset.zone:null}onMove(e){let t=this.drag;if(!t||e.pointerId!==t.pointer)return;if(!t.active){if(Math.hypot(e.clientX-t.startX,e.clientY-t.startY)<6)return;t.active=!0,this.selected=null,document.body.classList.add(`dragging`),this.ghost.hidden=!1,this.ghost.innerHTML=t.token.innerHTML,this.ghost.classList.toggle(`idle`,t.from===`idle`),t.token.classList.add(`lifted`),this.d.sound(`pickup`)}this.ghost.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`;let n=this.placeAt(e.clientX,e.clientY);n!==t.over&&(t.over=n,this.render())}onUp(e){let t=this.drag;if(!t||e.pointerId!==t.pointer)return;if(!t.active){this.drag=null,this.select(this.selected===t.id?null:t.id);return}let n=this.placeAt(e.clientX,e.clientY);this.endDrag(),n&&n!==t.from?this.commit(t.id,n)&&(this.zone=n):n||(this.d.sound(`deny`),this.say(`구역 밖에 놓아서 원래 자리로 돌아갔어요.`)),this.render()}endDrag(){let e=this.drag;if(e){e.token.classList.remove(`lifted`);try{e.token.releasePointerCapture(e.pointer)}catch{}this.drag=null,this.ghost.hidden=!0,document.body.classList.remove(`dragging`),this.layoutKey=``}}cancelDrag(e,t){if(!this.drag||e!==null&&e!==this.drag.pointer)return;let n=this.drag.active;this.endDrag(),this.render(),n&&this.say(`이동을 취소했어요. 배치는 그대로예요.`)}get dragging(){return!!this.drag?.active}counterPoint(){let e=this.tiles.get(`counter`);if(!e)return null;let t=e.getBoundingClientRect();return t.width?{x:t.left+t.width/2,y:t.top}:null}},Of={counter:new URL(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKCgoKioqKSkpKSkpKioqKSkpKioqKioqKSkpJiYmKSkpKCgoIiIiKSkpKioqAAAA/8xP/+iv/9Vvr6+v//Xf/9+P/7oPoaGhX19feXl5h4eHvLy8/78fUVFRRERE/+Of/8g/5OTk//HP/8Mv/+y/bGxs19fX/9p/Nzc3//rvlJSU/9FfycnJ8fHxKioq/////7YAC2LBnAAAABB0Uk5TX08fj89vn3/fL68/D7/vAO0HTdMAAAIgSURBVFjD7ZbZlqIwFEVRQMZQ1W11OaOIUgh44P+/rjHBIcgNWv3Sq5bnUZPNzUnuoL39o7QX4AX43wGOaVmMMYMx3fwGwAtwq5H3HMC3gOk8ywquybRGuM6jAN9kdr1hfiyvWswoxD3A4bHvk1JWNAcC5xGAi3AclR2K9jD8foCG8FgSmnXE0AYMgHPwv75OWu8+roQ9Ak8N8ANkzeK8umj5vhW/HVeAowTo2Iulh7iSdCbUMfgKgIdUGLD9rFpaN4QQFg3w7fMB4upOf5oXAYMG6OcAflcdyg88hJYLmuzgRPhfdSo+iJsYUYABQr7/oyKUn/4dyzZq0hvM2hco65OHkEo23gIYCn6DFSluZIZADdjRgLix0esGAPwEXzSg4guAoRKQ9wPelIDNtwGGSEQFYKkGNCYqAHkfYEG+49t8IAE65jwTaQCvLQls8ilP+Rd6PJxJyXALGPZdw4bXVukdyelsCxfJl7QWAdhkPRhhdlqyVt3BMYVGAjyAF5Sl4g4zuIqa2JS0Q0yWk0VvUU2IhFry/VGKgbKsmwgFYdtKqVjU9WnrAPedycWq6WzrfHOp7cumqGdgfa3NNy4E7sbupKarlEXbgK7mWnf3FdFd68bmPTIf2FglXfuLVC7o9ITCkI67pgPoD85IvguRl1clkxSG9/iQZQYIJ4WwIioWWf31wHxuSnMhiw2fnhNHTEyKNnMtbfia1l+Anw74C92Niq84E/fGAAAAAElFTkSuQmCC`,``+import.meta.url).href,lab:new URL(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKCgoKioqKSkpKSkpKioqKSkpKioqKioqKSkpJiYmKSkpKCgoIiIiKSkpKioqAAAAs6L/3NX/wbP/r6+v8e7/zsT/l4H/oaGhX19feXl5h4eHvLy8non/UVFRRERE1cz/rJr/5OTk6uX/pZL/493/bGxs19fXyLz/Nzc3+Pb/lJSUuqv/ycnJ8fHxKioq////kXn/A4DRggAAABB0Uk5TX08fj89vn3/fL68/D7/vAO0HTdMAAAIgSURBVFjD7ZbZlqIwFEVRQMZQ1W11OaOIUgh44P+/rjHBIcgNWv3Sq5bnUZPNzUnuoL39o7QX4AX43wGOaVmMMYMx3fwGwAtwq5H3HMC3gOk8ywquybRGuM6jAN9kdr1hfiyvWswoxD3A4bHvk1JWNAcC5xGAi3AclR2K9jD8foCG8FgSmnXE0AYMgHPwv75OWu8+roQ9Ak8N8ANkzeK8umj5vhW/HVeAowTo2Iulh7iSdCbUMfgKgIdUGLD9rFpaN4QQFg3w7fMB4upOf5oXAYMG6OcAflcdyg88hJYLmuzgRPhfdSo+iJsYUYABQr7/oyKUn/4dyzZq0hvM2hco65OHkEo23gIYCn6DFSluZIZADdjRgLix0esGAPwEXzSg4guAoRKQ9wPelIDNtwGGSEQFYKkGNCYqAHkfYEG+49t8IAE65jwTaQCvLQls8ilP+Rd6PJxJyXALGPZdw4bXVukdyelsCxfJl7QWAdhkPRhhdlqyVt3BMYVGAjyAF5Sl4g4zuIqa2JS0Q0yWk0VvUU2IhFry/VGKgbKsmwgFYdtKqVjU9WnrAPedycWq6WzrfHOp7cumqGdgfa3NNy4E7sbupKarlEXbgK7mWnf3FdFd68bmPTIf2FglXfuLVC7o9ITCkI67pgPoD85IvguRl1clkxSG9/iQZQYIJ4WwIioWWf31wHxuSnMhiw2fnhNHTEyKNnMtbfia1l+Anw74C92Niq84E/fGAAAAAElFTkSuQmCC`,``+import.meta.url).href,coating:new URL(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKCgoKioqKSkpKSkpKioqKSkpKioqKioqKSkpJiYmKSkpKCgoIiIiKSkpKioqAAAA/I6V/szO/aOor6+v/urr/be7/GZuoaGhX19feXl5h4eHvLy8/HB4UVFRRERE/cHF/ISL5OTk/uDi/HqB/tbYbGxs19fX/a2yNzc3/vT1lJSU/ZmeycnJ8fHxKioq/////FxlaAkCMQAAABB0Uk5TX08fj89vn3/fL68/D7/vAO0HTdMAAAIgSURBVFjD7ZbZlqIwFEVRQMZQ1W11OaOIUgh44P+/rjHBIcgNWv3Sq5bnUZPNzUnuoL39o7QX4AX43wGOaVmMMYMx3fwGwAtwq5H3HMC3gOk8ywquybRGuM6jAN9kdr1hfiyvWswoxD3A4bHvk1JWNAcC5xGAi3AclR2K9jD8foCG8FgSmnXE0AYMgHPwv75OWu8+roQ9Ak8N8ANkzeK8umj5vhW/HVeAowTo2Iulh7iSdCbUMfgKgIdUGLD9rFpaN4QQFg3w7fMB4upOf5oXAYMG6OcAflcdyg88hJYLmuzgRPhfdSo+iJsYUYABQr7/oyKUn/4dyzZq0hvM2hco65OHkEo23gIYCn6DFSluZIZADdjRgLix0esGAPwEXzSg4guAoRKQ9wPelIDNtwGGSEQFYKkGNCYqAHkfYEG+49t8IAE65jwTaQCvLQls8ilP+Rd6PJxJyXALGPZdw4bXVukdyelsCxfJl7QWAdhkPRhhdlqyVt3BMYVGAjyAF5Sl4g4zuIqa2JS0Q0yWk0VvUU2IhFry/VGKgbKsmwgFYdtKqVjU9WnrAPedycWq6WzrfHOp7cumqGdgfa3NNy4E7sbupKarlEXbgK7mWnf3FdFd68bmPTIf2FglXfuLVC7o9ITCkI67pgPoD85IvguRl1clkxSG9/iQZQYIJ4WwIioWWf31wHxuSnMhiw2fnhNHTEyKNnMtbfia1l+Anw74C92Niq84E/fGAAAAAElFTkSuQmCC`,``+import.meta.url).href,showroom:new URL(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKCgoKioqKSkpKSkpKioqKSkpKioqKioqKSkpJiYmKSkpKCgoIiIiKSkpKioqAAAAdeSvwPPbjum+r6+v5vrwp+7MQ9uToaGhX19feXl5h4eHvLy8UN2aUVFRREREtPDTaeKo5OTk2ffpXOChzfXibGxs19fXm+zFNzc38vz3lJSUgue3ycnJ8fHxKioq////N9mM9+oxuAAAABB0Uk5TX08fj89vn3/fL68/D7/vAO0HTdMAAAIgSURBVFjD7ZbZlqIwFEVRQMZQ1W11OaOIUgh44P+/rjHBIcgNWv3Sq5bnUZPNzUnuoL39o7QX4AX43wGOaVmMMYMx3fwGwAtwq5H3HMC3gOk8ywquybRGuM6jAN9kdr1hfiyvWswoxD3A4bHvk1JWNAcC5xGAi3AclR2K9jD8foCG8FgSmnXE0AYMgHPwv75OWu8+roQ9Ak8N8ANkzeK8umj5vhW/HVeAowTo2Iulh7iSdCbUMfgKgIdUGLD9rFpaN4QQFg3w7fMB4upOf5oXAYMG6OcAflcdyg88hJYLmuzgRPhfdSo+iJsYUYABQr7/oyKUn/4dyzZq0hvM2hco65OHkEo23gIYCn6DFSluZIZADdjRgLix0esGAPwEXzSg4guAoRKQ9wPelIDNtwGGSEQFYKkGNCYqAHkfYEG+49t8IAE65jwTaQCvLQls8ilP+Rd6PJxJyXALGPZdw4bXVukdyelsCxfJl7QWAdhkPRhhdlqyVt3BMYVGAjyAF5Sl4g4zuIqa2JS0Q0yWk0VvUU2IhFry/VGKgbKsmwgFYdtKqVjU9WnrAPedycWq6WzrfHOp7cumqGdgfa3NNy4E7sbupKarlEXbgK7mWnf3FdFd68bmPTIf2FglXfuLVC7o9ITCkI67pgPoD85IvguRl1clkxSG9/iQZQYIJ4WwIioWWf31wHxuSnMhiw2fnhNHTEyKNnMtbfia1l+Anw74C92Niq84E/fGAAAAAElFTkSuQmCC`,``+import.meta.url).href,idle:new URL(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAJNQTFRFKCgoKioqKSkpKSkpKioqKSkpKioqKioqKSkpJiYmKSkpKCgoIiIiKSkpKioqAAAAs6L/3NX/wbP/r6+v8e7/zsT/l4H/oaGhX19feXl5h4eHvLy8non/UVFRRERE1cz/rJr/5OTk6uX/pZL/493/bGxs19fXyLz/Nzc3+Pb/lJSUuqv/ycnJ8fHxKioq////kXn/A4DRggAAABB0Uk5TX08fj89vn3/fL68/D7/vAO0HTdMAAAIgSURBVFjD7ZbZlqIwFEVRQMZQ1W11OaOIUgh44P+/rjHBIcgNWv3Sq5bnUZPNzUnuoL39o7QX4AX43wGOaVmMMYMx3fwGwAtwq5H3HMC3gOk8ywquybRGuM6jAN9kdr1hfiyvWswoxD3A4bHvk1JWNAcC5xGAi3AclR2K9jD8foCG8FgSmnXE0AYMgHPwv75OWu8+roQ9Ak8N8ANkzeK8umj5vhW/HVeAowTo2Iulh7iSdCbUMfgKgIdUGLD9rFpaN4QQFg3w7fMB4upOf5oXAYMG6OcAflcdyg88hJYLmuzgRPhfdSo+iJsYUYABQr7/oyKUn/4dyzZq0hvM2hco65OHkEo23gIYCn6DFSluZIZADdjRgLix0esGAPwEXzSg4guAoRKQ9wPelIDNtwGGSEQFYKkGNCYqAHkfYEG+49t8IAE65jwTaQCvLQls8ilP+Rd6PJxJyXALGPZdw4bXVukdyelsCxfJl7QWAdhkPRhhdlqyVt3BMYVGAjyAF5Sl4g4zuIqa2JS0Q0yWk0VvUU2IhFry/VGKgbKsmwgFYdtKqVjU9WnrAPedycWq6WzrfHOp7cumqGdgfa3NNy4E7sbupKarlEXbgK7mWnf3FdFd68bmPTIf2FglXfuLVC7o9ITCkI67pgPoD85IvguRl1clkxSG9/iQZQYIJ4WwIioWWf31wHxuSnMhiw2fnhNHTEyKNnMtbfia1l+Anw74C92Niq84E/fGAAAAAElFTkSuQmCC`,``+import.meta.url).href},kf=e=>w.rankNames[e]??``,Af=e=>L(e,3),jf=e=>e>0?`★`.repeat(e):`☆`,Mf={working:``,partial:``,idle:`대기 중 — 경험이 쌓이지 않아요.`,max:`전문 · 성장 완료`,"research-done":`연구 목표 완료 — 숙련은 잠시 멈춰요.`,"no-sales":`판매 직원을 배치하면 경험을 쌓아요.`,"coating-wait":`직접 작업을 진행하면 경험을 쌓아요.`,"coating-session":`진행 중인 작업에서 새로 부순 만큼 경험을 쌓아요 (한 작업 최대 30).`,"coating-next":`다음 회차 참여 — 이번 작업은 시작할 때 없어서 경험·보상 지원이 없어요.`},Nf=class{d;root=Y(`worker-growth`);list;detail;rows=new Map;rowsKey=``;fieldBtns=new Map;el;buyBtn;placeBtn;selected=null;field=`counter`;lastBuy={key:``,at:0};constructor(e){this.d=e,this.root.innerHTML=`<div class="wg-list" role="group" aria-label="일꾼 목록"></div>
      <section class="wg-detail" aria-live="polite">
        <header><h3 class="wg-title"></h3><button type="button" class="btn small" data-act="place">배치 바꾸기</button></header>
        <div class="wg-fields" role="tablist" aria-label="업무 분야"></div>
        <div class="wg-field" role="tabpanel">
          <h4 class="wg-head"></h4>
          <div class="xpbar" aria-hidden="true"><i></i></div>
          <p class="wg-xp"></p><p class="wg-state"></p><p class="wg-edu"></p>
          <p class="wg-next"></p><p class="wg-cond"></p>
          <details class="wg-more"><summary>계산 보기</summary><p class="wg-parts"></p></details>
          <button type="button" class="btn small" data-act="buy"></button>
        </div>
      </section>`,this.list=this.root.querySelector(`.wg-list`),this.detail=this.root.querySelector(`.wg-detail`);let t=this.root.querySelector(`.wg-fields`);for(let e of n){let n=vd(`button`,{type:`button`,role:`tab`,"data-field":e,"aria-selected":`false`},`<span class="fn">${md(e,``)}${C[e].short}</span><small></small>`);n.addEventListener(`click`,()=>{this.field=e,this.d.sound(`tap`),this.render()}),t.appendChild(n),this.fieldBtns.set(e,n)}t.addEventListener(`keydown`,e=>this.onFieldKey(e));let r=e=>this.root.querySelector(e);this.el={title:r(`.wg-title`),head:r(`.wg-head`),bar:r(`.xpbar i`),xp:r(`.wg-xp`),state:r(`.wg-state`),parts:r(`.wg-parts`),edu:r(`.wg-edu`),next:r(`.wg-next`),cond:r(`.wg-cond`)},this.buyBtn=r(`[data-act="buy"]`),this.placeBtn=r(`[data-act="place"]`),this.buyBtn.addEventListener(`click`,()=>this.buy()),this.placeBtn.addEventListener(`click`,()=>{this.selected!==null&&this.d.place(this.selected)}),this.list.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-wid]`);t&&(this.open(Number(t.dataset.wid),!1),this.d.sound(`tap`))})}open(e,t=!0){let n=this.d.state().workers.find(t=>t.id===e);n&&(this.selected!==e&&n.place!==`idle`&&(this.field=n.place),this.selected=e,this.render(),t&&requestAnimationFrame(()=>this.rows.get(e)?.focus({preventScroll:!0})))}onFieldKey(e){let t=n.indexOf(this.field),r=null;e.key===`ArrowRight`||e.key===`ArrowDown`?r=(t+1)%n.length:(e.key===`ArrowLeft`||e.key===`ArrowUp`)&&(r=(t-1+n.length)%n.length),r!==null&&(e.preventDefault(),this.field=n[r],this.render(),this.fieldBtns.get(this.field).focus())}buy(){let e=this.selected,t=this.field;if(e===null)return;let n=`${e}:${t}`;if(n===this.lastBuy.key&&performance.now()-this.lastBuy.at<350)return;let r=this.d.upgrade(e,t);if(!r.ok){this.d.sound(`deny`),yd(r.reason===`coins`?`코인이 부족해요.`:r.reason===`condition`?`아직 조건을 채우지 못했어요.`:r.reason===`already`?`이미 최고 단계예요.`:`일꾼을 찾을 수 없어요.`,`warn`);return}this.lastBuy={key:n,at:performance.now()},this.render()}render(){let e=this.d.state();(this.selected===null||!e.workers.some(e=>e.id===this.selected))&&(this.selected=e.workers[0]?.id??null);let t=ke(e),r=ce(e);this.renderList(e);let i=e.workers.find(e=>e.id===this.selected);if(this.detail.hidden=!i,i){X(this.el.title,`일꾼 ${i.id} · ${Sd(i.place)}`);for(let t of n){let n=this.fieldBtns.get(t),r=t===this.field;n.setAttribute(`aria-selected`,String(r)),n.tabIndex=r?0:-1,n.classList.toggle(`here`,i.place===t),n.classList.toggle(`ready`,Ge(e,i.id,t)?.state===`ready`),X(n.querySelector(`small`),`Lv${M(i,t)} ${jf(j(i,t))}`),n.setAttribute(`aria-label`,`${C[t].short}: 개인 강화 Lv ${M(i,t)}/${w.maxUpgrade}, 숙련 ${kf(j(i,t))}${i.place===t?`, 지금 근무 중`:``}`)}this.renderField(e,t,r,i,this.field)}}renderList(e){let t=e.workers.map(t=>`${t.id}:${t.place}:${t.place===`idle`?``:j(t,t.place)}:${+!!n.some(n=>Ge(e,t.id,n)?.state===`ready`)}`).join(`,`)+`|`+this.selected;if(t===this.rowsKey)return;this.rowsKey=t;let r=new Set(e.workers.map(e=>e.id));for(let[e,t]of this.rows)r.has(e)||(t.remove(),this.rows.delete(e));for(let t of e.workers){let r=this.rows.get(t.id);r||(r=vd(`button`,{type:`button`,class:`wg-row`,"data-wid":String(t.id)}),this.rows.set(t.id,r),this.list.appendChild(r));let i=t.place===`idle`?`${q(`idle`,``)}대기`:`${md(t.place,``)}${jf(j(t,t.place))}`,a=n.some(n=>Ge(e,t.id,n)?.state===`ready`);Z(r,`<img class="face${t.place===`idle`?` idle`:``}" src="${Of[t.place]}" alt="" draggable="false"><b>일꾼 ${t.id}</b><small>${i}</small>${a?`<i class="dot" aria-hidden="true"></i>`:``}`),r.setAttribute(`aria-pressed`,String(t.id===this.selected)),r.setAttribute(`aria-label`,`일꾼 ${t.id}, ${Sd(t.place)}${t.place===`idle`?``:`, ${kf(j(t,t.place))}`}${a?`, 지금 강화 가능`:``} — 성장 보기`)}}renderField(e,t,n,r,i){let a=C[i],o=M(r,i),s=j(r,i),c=k(r,i).xp,l=Ge(e,r.id,i);Z(this.el.head,`${q(`level`,``)}${Q(a.upgrade)} <small>Lv ${o}/${w.maxUpgrade}</small> · <span class="stars" aria-hidden="true">${jf(s)}</span> <b>${kf(s)}</b>`);let u=s>=w.rankXp.length-1,d=ne(c),f=re(c);this.el.bar.style.width=`${u?100:Math.floor((c-d)/(f-d)*100)}%`,Z(this.el.xp,u?`${_d(`xp`,`경험`,L(c,1))} · 성장 완료`:`${_d(`xp`,`경험`,`${L(c,1)}/${f}`)} → ${kf(s+1)} <small>(${Q(a.rankEffect)})</small>`);let p;if(r.place!==i)p=r.place===`idle`?Mf.idle:`지금은 ${Sd(r.place)} 근무 중 — 이 분야 기록은 보관돼요.`;else{let i=Ie(e,r,t,n);p=i.reason===`working`?`지금 ${a.short} 근무 중 · ${J(`xp`,`+${L(i.rate,2)}/초`)}`:i.reason===`partial`?`수요보다 인원이 많아 나눠 근무 · ${J(`xp`,`+${L(i.rate,2)}/초`)}`:Mf[i.reason]}Z(this.el.state,p),Z(this.el.parts,this.partsText(e,t,r,i));let m=le(s,n);Z(this.el.edu,n===0||u?``:`${q(`training`)}${n}단계 · ${m>1?`${q(`xp`,`경험`)}×${m}`:`이 등급엔 효과 없음`}`),Z(this.el.next,l.bought?`개인 강화 최고 단계`:this.nextText(e,t,r,i)),Z(this.el.cond,l.bought||l.conditionMet?``:`${q(`lock`,`조건:`)}${l.missing.map(Td).join(` `)}`);let h=l.state===`ready`,g=l.bought?`최고 단계`:h?`${R(l.cost)}코인으로 강화`:l.conditionMet?`코인 ${R(l.shortCoins)} 부족`:`조건 미달`;Z(this.buyBtn,l.bought?`${q(`check`,``)}최고 단계`:`${J(`coin`,R(l.cost))} 강화${h?``:l.conditionMet?` · ${J(`coin`,R(l.shortCoins))} 부족`:` ${q(`lock`)}`}`),this.buyBtn.dataset.state=l.state,this.buyBtn.classList.toggle(`primary`,h),h?this.buyBtn.removeAttribute(`aria-disabled`):this.buyBtn.setAttribute(`aria-disabled`,`true`),this.buyBtn.setAttribute(`aria-label`,`일꾼 ${r.id} ${a.upgrade} Lv ${o+1}: ${g}`)}partsText(e,t,n,r){let i=w.upgradeStep*M(n,r),a=w.rankStep*j(n,r);return r===`counter`?`처리 계수 1 + 개인 투자 ${L(i,2)} + 근무 ${L(a,2)} = <b>${L(oe(n,r),2)}</b> → 개인 처리 ${Af(f.counterPerWorker*oe(n,r))}개/초`:r===`lab`?`연구 계수 1 + 개인 투자 ${L(i,2)} + 근무 ${L(a,2)} = <b>${L(oe(n,r),2)}</b> · 실험 절차는 이 일꾼만 강화해요. 현미경(×${L(t.lab.mult,2)})은 연구 구역 전체와 직접 연구에 적용돼요.`:r===`coating`?`준비 속도 계수 <b>${L(ie(n,r),2)}</b> (개인 투자) · 직접 보상 지원 계수 <b>${L(ae(n,r),2)}</b> (근무)`:`수요 유입 계수 <b>${L(ie(n,r),2)}</b> (개인 투자) · 단가 지원 계수 <b>${L(ae(n,r),2)}</b> (근무)`}nextText(e,t,n,r){let i=qe(e,n.id,r),a=ke(i),o=i.workers.find(e=>e.id===n.id),s=a.coins-t.coins,c=a.research-t.research,l=[Math.abs(s)>5e-4?J(`coin`,`${s>0?`+`:`−`}${L(Math.abs(s),3)}/초`):``,Math.abs(c)>5e-5?J(`research`,`+${L(c,4)}/초`):``].filter(Boolean).join(` `),u=`<span class="lv">Lv ${M(n,r)+1}</span> <small>${Q(C[r].buyEffect)}</small> · `;if(n.place!==r){let e=r===`coating`?`다음 작업 준비가 빨라져요`:`효과가 나요`;return`${u}${Sd(r)}에 배치하면 ${e}.`}if(r===`counter`){let e=l||(t.counter.capped?`수요 상한이라 수입 변화 없음`:`변화 없음`);return`${u}${q(`throughput`)}${Af(f.counterPerWorker*oe(n,r))} → <b>${Af(f.counterPerWorker*oe(o,r))}</b>/초 · ${e}`}return r===`lab`?`${u}${q(`research`,`연구 계수`)}${L(oe(n,r),2)} → <b>${L(oe(o,r),2)}</b> · ${l||`변화 없음`}`:r===`coating`?`${u}${q(`time`,`다음 작업 준비`)}${L(t.prepSeconds,2)} → <b>${L(a.prepSeconds,2)}</b>초`:`${u}${J(`demand`,`+${L(a.counter.demand-t.counter.demand,2)}/초`)} · ${l||(t.counter.idle?`판매대가 비어 변화 없음`:`처리량이 부족해 변화 없음`)}`}},Pf={ready:0,coins:1,locked:2,done:3},Ff={ready:`구매 가능`,coins:`코인 부족`,locked:`잠김`,done:`완료`},If=[{id:`hire`,name:`고용`,lead:`새 일꾼은 대기실로 와요.`,empty:`고용할 수 있는 일꾼을 모두 모았어요.`},{id:`personal`,name:`개인 강화`,lead:`고른 한 명만 강화돼요. 옮겨도 기록은 남아요.`,empty:``},{id:`training`,name:`공통 교육`,lead:`모든 일꾼의 낮은 등급 경험이 빨라져요.`,empty:`공통 교육을 모두 마쳤어요.`}],Lf={staff:`worker`,space:`space`,models:`models`,facility:`facility`,direct:`tools`},Rf={hire:`hire`,personal:`level`,training:`training`},zf=[...v.map((e,t)=>({key:e.id,category:e.category,unlock:e.id,index:t,sub:e.category===`staff`?e.kind===`training`?`training`:`hire`:void 0})),...o.map((e,t)=>({key:`model-${e.id}`,category:`models`,model:e.id,index:v.length+t}))],Bf=new Map(zf.map(e=>[e.key,e])),Vf=(e,t)=>Math.floor(Math.max(0,Math.min(1,t>0?e/t:1))*100),Hf=(e,t)=>`<span class="gbar" aria-hidden="true"><i style="width:${Vf(e,t)}%"></i></span>`,Uf=e=>`×${e.toFixed(2).replace(/\.?0+$/,``)}`,Wf=class e{d;tabs=Y(`cat-tabs`);panel=Y(`goals`);lead=Y(`goals-lead`);list=Y(`goals-list`);empty=Y(`goals-empty`);doneBtn=Y(`goals-done-toggle`);doneList=Y(`goals-done`);tabBtns=new Map;cards=new Map;order=[];orderSig=``;pendingOrder=!1;pointerInside=!1;showDone=!1;subTabs=Y(`staff-subtabs`);subBtns=new Map;growth=Y(`worker-growth`);workers;sub=`hire`;category;newModels=new Set;current=null;readyCount=0;constructor(e,t=`staff`){this.d=e,this.category=t;for(let e of i){let t=vd(`button`,{type:`button`,role:`tab`,id:`cat-${e.id}`,"data-cat":e.id,"aria-controls":`goals`,"aria-selected":`false`,tabindex:`-1`},`${q(Lf[e.id],``)}<span class="cname">${Q(e.name)}</span><b class="cnt" aria-hidden="true"></b>`);t.addEventListener(`click`,()=>this.select(e.id,!0)),this.tabs.appendChild(t),this.tabBtns.set(e.id,t)}this.tabs.addEventListener(`keydown`,e=>this.onTabKey(e)),this.list.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-buy]`);t&&this.buy(t.dataset.buy,t)}),this.list.addEventListener(`pointerenter`,()=>{this.pointerInside=!0}),this.list.addEventListener(`pointerleave`,()=>{this.pointerInside=!1,this.pendingOrder&&this.render()}),this.list.addEventListener(`focusout`,e=>{!this.list.contains(e.relatedTarget)&&this.pendingOrder&&queueMicrotask(()=>this.render())}),this.doneBtn.addEventListener(`click`,()=>{this.showDone=!this.showDone,this.d.sound(`tap`),this.render()});for(let e of If){let t=vd(`button`,{type:`button`,role:`tab`,"data-sub":e.id,"aria-selected":`false`,"aria-controls":`goals`},`${q(Rf[e.id],``)}<span>${Q(e.name)}</span><b class="cnt" aria-hidden="true"></b>`);t.addEventListener(`click`,()=>this.selectSub(e.id,!0)),this.subTabs.appendChild(t),this.subBtns.set(e.id,t)}this.workers=new Nf({state:e.state,upgrade:e.upgrade,place:e.place,sound:e.sound})}selectSub(e,t=!1){e!==this.sub&&(this.sub=e,this.orderSig=``,this.showDone=!1,t&&this.d.sound(`tap`)),this.render()}openWorker(e){this.select(`staff`),this.selectSub(`personal`),this.workers.open(e)}select(e,t=!1){if(!a.has(e))return;let n=e!==this.category;this.category=e,n&&(this.orderSig=``,this.showDone=!1,t&&this.d.sound(`tap`)),this.render()}onTabKey(e){let t=i.map(e=>e.id),n=t.indexOf(this.category),r=null;e.key===`ArrowRight`||e.key===`ArrowDown`?r=(n+1)%t.length:e.key===`ArrowLeft`||e.key===`ArrowUp`?r=(n-1+t.length)%t.length:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r!==null&&(e.preventDefault(),this.select(t[r],!0),this.tabBtns.get(t[r]).focus())}focusGoal(e,t){let n=Bf.get(e);if(!n)return;this.select(n.category),n.sub&&this.selectSub(n.sub);let r=this.cards.get(e);r&&r.el.isConnected&&(r.el.scrollIntoView({behavior:t?`auto`:`smooth`,block:`nearest`}),r.el.focus({preventScroll:!0}),r.el.classList.remove(`flash`),r.el.offsetWidth,r.el.classList.add(`flash`))}noteModel(e){this.newModels.add(e)}lastBuy={id:``,at:0};static BUY_GUARD_MS=350;buy(t,n){if(t===this.lastBuy.id&&performance.now()-this.lastBuy.at<e.BUY_GUARD_MS||n.dataset.state===`done`)return;let r=this.d.buy(t);if(!r.ok){this.d.sound(`deny`),yd(r.reason===`coins`?`코인이 부족해요.`:r.reason===`condition`?`아직 조건을 채우지 못했어요.`:`이미 완료했어요.`,`warn`);return}this.lastBuy={id:t,at:performance.now()},this.render(),document.activeElement!==n&&n.isConnected&&this.list.contains(n)&&n.focus({preventScroll:!0})}unlockView(e,t){let n=He(e,t),r=n.def,i=n.state===`done`?`done`:n.state,a=r.repeat,o=a?`${r.name} <small>Lv ${n.level}${n.bought?``:` → ${n.level+1}`} / ${a.maxLevel}</small>`:Q(r.name),s=[],c=1;if(r.needReviews!==void 0){let t=e.reviews>=r.needReviews;c=Math.min(c,e.reviews/r.needReviews),s.push(`<li class="${t?`ok`:``}">${J(`review`,`${L(Math.floor(Math.min(e.reviews,r.needReviews)),0)}/${R(r.needReviews)}`,``,`누적 리뷰`)}${Hf(e.reviews,r.needReviews)}</li>`)}if(r.needStars!==void 0){let t=e.bestRating>=r.needStars-1e-9,n=p.start,i=(e.bestRating-n)/Math.max(1e-9,r.needStars-n);c=Math.min(c,t?1:Math.max(0,i)),s.push(`<li class="${t?`ok`:``}">${J(`star`,`${St(Math.min(e.bestRating,r.needStars))}/${St(r.needStars)}`,``,`최고 별점`)}${Hf(Math.max(0,e.bestRating-n),r.needStars-n)}</li>`)}if(r.needResearch!==void 0){let t=e.research>=r.needResearch;c=Math.min(c,e.research/r.needResearch),s.push(`<li class="${t?`ok`:``}">${J(`research`,`${L(Math.min(e.research,r.needResearch),0)}/${R(r.needResearch)}`,``,`누적 연구`)}${Hf(e.research,r.needResearch)}</li>`)}if(r.needBought){let t=e.bought.includes(r.needBought);s.push(`<li class="${t?`ok`:``}"><span>${q(t?`check`:`lock`,`먼저:`)}${Q(y.get(r.needBought).name)}</span></li>`)}if(r.needLevel){n.level;let t=e.levels?.[r.needLevel.id]??0;s.push(`<li class="${t>=r.needLevel.level?`ok`:``}"><span>${q(t>=r.needLevel.level?`check`:`lock`,`먼저:`)}${Q(y.get(r.needLevel.id).name)} Lv ${Math.min(t,r.needLevel.level)}/${r.needLevel.level}</span>${Hf(t,r.needLevel.level)}</li>`),t<r.needLevel.level&&(c=Math.min(c,t/r.needLevel.level))}let l=this.effectText(e,n),u=n.bought?``:this.impactText(e,n),d=n.bought||n.affordable||!n.conditionMet?``:`<span class="short">${J(`coin`,R(n.shortCoins))} 부족</span>`,f=r.kind===`hire`?`고용`:a?`Lv ${n.level+1} 설치`:`설치`,m=n.state===`ready`,h=n.bought?a?`최고 단계`:`완료`:`${R(n.cost)} 코인 ${f}`,g=n.bought?`${q(`check`,``)}${a?`최고 단계`:`완료`}`:`${J(`coin`,R(n.cost))} ${f}${n.conditionMet?``:` ${q(`lock`)}`}`;return{key:t,group:i,ratio:n.conditionMet?1:c,isNew:!1,title:o,effect:l,impact:u,conds:i===`ready`||i===`done`?``:s.join(``),cost:d,button:{text:g,ready:m,label:`${r.name}${a?` Lv ${n.level+1}`:``}: ${h}${m||n.bought?``:n.conditionMet?` — 코인 ${R(n.shortCoins)} 부족`:` — ${n.missing.map(Cd).join(` · `)}`}`},short:`${r.name}${a&&!n.bought?` Lv ${n.level+1}`:``} — ${m?`지금 가능!`:n.conditionMet?`코인 ${R(n.shortCoins)} 부족`:n.missing.map(Cd).join(` · `)}`,shortHtml:`${Q(r.name)}${a&&!n.bought?` Lv ${n.level+1}`:``} ${m?`<b class="go">지금 가능!</b>`:n.conditionMet?`${J(`coin`,R(n.shortCoins))} 부족`:n.missing.map(Td).join(` `)}`}}effectText(e,t){let n=t.def;if(n.repeat){let r=n.id,i=we(e,r);if(t.bought)return`${Q(h[r].what)} ${Uf(i)} (최고 단계)`;let a=we(We(e,n.id),r);return`${Q(h[r].what)} ${Uf(i)} → <b>${Uf(a)}</b>`}if(n.kind===`mastery`){let r=n.needLevel.id,i=we(e,r),a=we(We(e,n.id),r);return t.bought?Q(n.desc):`${Q(y.get(r).name)} 배수 ${Uf(i)} → <b>${Uf(a)}</b>`}return n.kind===`hire`?`${J(`worker`,`+1`)} → 대기실`:Q(n.desc)}impactText(e,t){let n=t.def,r=We(e,n.id),i=ke(e),a=ke(r),o=[],s=a.coins-i.coins,c=a.research-i.research;s>.004&&o.push(`${J(`coin`,`+${L(s,2)}/초`)}${t.conditionMet&&t.cost>0?` ${J(`payback`,`${L(t.cost/s/60,1)}분`,`dim`,`회수 약`)}`:``}`),c>4e-4&&o.push(J(`research`,`+${L(c,3)}/초`));let l=tt(r)/tt(e),u=nt(r)/nt(e);return l>1+1e-9&&o.push(`${q(`direct`,`판매 시연 보상`)}${J(`coin`,`×${L(l,2)}`,``,``)}`),u>1+1e-9&&o.push(`${q(`direct`,`연구 실험 보상`)}${J(`research`,`×${L(u,2)}`,``,``)}`),o.length?`<span class="now">지금</span> ${o.join(` `)}`:n.kind===`hire`?``:n.kind===`training`?this.trainingImpact(e,n.id===`onboard2`?2:1):n.kind===`zone`?`열린 뒤 일꾼을 옮기면 효과가 나요.`:n.kind===`coating`||n.kind===`tool`?`${q(`direct`,``)}작업대에서 골라 써요.`:n.cap?`${J(`seat`,`+${n.cap.add}`)} — 일꾼을 더 두면 효과가 나요.`:n.repeat||n.kind===`mastery`?n.id.startsWith(`lab`)||n.needLevel?.id===`lab-equip`?`연구 책상이 비어 있어 지금은 변화 없음`:`판매대가 비어 있어 지금은 변화 없음`:``}trainingImpact(e,t){let n=e.workers.filter(e=>e.place!==`idle`),r=ce(e),i=n.filter(e=>le(j(e,e.place),t)>le(j(e,e.place),r)).length,a=(e,t)=>(w.rankXp[e+1]-w.rankXp[e])/le(e,t),o=t===1?`익숙까지 ${J(`time`,`${a(0,0)}→${a(0,1)}초`)}`:`익숙→능숙 ${J(`time`,`${a(1,1)}→${L(a(1,2),0)}초`)}`;return`${J(`worker`,`${i}명`,``,`지금 대상`)} · ${o} · 즉시 생산 변화 없음`}modelView(e,t){let n=b.get(t),r=Xe(e,t),i=this.newModels.has(t),a=n.needResearch>0?e.research/n.needResearch:1,o=n.needResearch>0?`<li class="${r?`ok`:``}">${J(`research`,`${L(Math.min(e.research,n.needResearch),0)}/${R(n.needResearch)}`,``,`누적 연구`)}${Hf(e.research,n.needResearch)}</li>`:``;return{key:`model-${t}`,group:r?`done`:`locked`,ratio:a,isNew:i,title:`${Q(n.name)} 말랑이`,effect:`<span class="stats">${J(`coin`,`×${n.sale}`,``,`판매 보상`)}${J(`research`,`×${n.research}`,``,`연구 보상`)}${J(`effort`,`×${n.effort}`,``,`손 가는 정도 (버터 대비)`)}</span> ${Q(n.note)}`,impact:``,conds:o,cost:r?``:`<span class="free">${q(`research`,``)}연구로 자동 해금 · 비용 없음</span>`,short:`${n.name} 말랑이 — 연구 ${L(e.research,0)}/${R(n.needResearch)}`,shortHtml:`${Q(n.name)} 말랑이 ${J(`research`,`${L(e.research,0)}/${R(n.needResearch)}`,`need`)}`}}viewOf(e,t){return t.unlock?this.unlockView(e,t.unlock):this.modelView(e,t.model)}card(e){let t=this.cards.get(e);if(t)return t;let n=Bf.get(e),r=vd(`article`,{class:`goal${n.model?` model`:``}`,"data-goal":e,tabindex:`-1`,"aria-labelledby":`gt-${e}`});return r.innerHTML=`<header><span class="badge"></span>${n.model?`<span class="micon" aria-hidden="true">${ud(n.model)}</span>`:``}<h3 id="gt-${e}"></h3></header>
      <p class="eff"><span class="v"></span></p><p class="impact"></p><ul class="conds"></ul><p class="cost"></p>
      ${n.unlock?`<button type="button" class="btn small" data-buy="${n.unlock}"></button>`:``}`,t={el:r,badge:r.querySelector(`.badge`),title:r.querySelector(`h3`),effect:r.querySelector(`.eff .v`),impact:r.querySelector(`.impact`),conds:r.querySelector(`.conds`),cost:r.querySelector(`.cost`),btn:r.querySelector(`button`)??void 0},this.cards.set(e,t),t}paint(e,t){e.el.dataset.state=t.group,e.el.classList.toggle(`new`,t.isNew);let n=Bf.get(t.key);X(e.badge,n.model?t.group===`done`?t.isNew?`새로 열림`:`해금됨`:`연구 조건 미달`:Ff[t.group]),Z(e.title,t.title),n.unlock&&(e.title.title=y.get(n.unlock).desc),Z(e.effect,t.effect),Z(e.impact,t.impact),e.impact.hidden=!t.impact,Z(e.conds,t.conds),e.conds.hidden=!t.conds,Z(e.cost,t.cost),e.cost.hidden=!t.cost,e.btn&&t.button&&(Z(e.btn,t.button.text),e.btn.setAttribute(`aria-label`,t.button.label),e.btn.classList.toggle(`primary`,t.button.ready),e.btn.dataset.state=t.group,t.button.ready?e.btn.removeAttribute(`aria-disabled`):e.btn.setAttribute(`aria-disabled`,`true`))}render(){let e=this.d.state(),t=Ye(e);this.readyCount=t.reduce((e,t)=>e+t.ready,0),this.category===`models`&&this.d.visible()&&this.newModels.clear();for(let e of i){let n=this.tabBtns.get(e.id),r=t.find(t=>t.category===e.id),i=e.id===this.category;n.setAttribute(`aria-selected`,String(i)),n.tabIndex=i?0:-1;let a=n.querySelector(`.cnt`);if(e.id===`models`){let t=this.newModels.size;X(a,t?`새 ${t}`:``),a.className=`cnt${t?` fresh`:``}`,n.setAttribute(`aria-label`,`${e.name}${t?`, 새로 열린 말랑이 ${t}`:``}, 남은 ${r.open}/${r.total}`)}else X(a,r.ready?String(r.ready):r.open===0?`✓`:``),a.className=`cnt${r.ready?` ready`:r.open===0?` done`:``}`,n.setAttribute(`aria-label`,`${e.name}, 지금 구매 가능 ${r.ready}개${r.open===0?`, 모두 완료`:``}`)}this.panel.setAttribute(`aria-labelledby`,`cat-${this.category}`);let n=a.get(this.category),r=this.category===`staff`,s=If.find(e=>e.id===this.sub),c=r&&this.sub===`personal`;if(X(this.lead,r?s.lead:n.lead),this.subTabs.hidden=!r,r)for(let t of If){let n=this.subBtns.get(t.id),r=t.id===this.sub,i=t.id===`personal`?Je(e):zf.filter(n=>n.sub===t.id&&He(e,n.key).state===`ready`).length;n.setAttribute(`aria-selected`,String(r)),n.tabIndex=r?0:-1;let a=n.querySelector(`.cnt`);X(a,i?String(i):``),a.className=`cnt${i?` ready`:``}`,n.setAttribute(`aria-label`,`${t.name}${i?`, 지금 ${t.id===`personal`?`강화 가능한 일꾼 ${i}명`:`구매 가능 ${i}개`}`:``}`)}this.growth.hidden=!c,this.list.hidden=c,c&&this.workers.render();let l=zf.filter(e=>e.category===this.category&&(!r||e.sub===this.sub)).map(t=>this.viewOf(e,t)),u=l.filter(e=>e.group!==`done`),d=l.filter(e=>e.group===`done`);for(let e of l)this.paint(this.card(e.key),e);let f=this.category+(r?`:${this.sub}`:``)+`|`+u.map(e=>`${e.key}:${e.group}`).sort().join(`,`);if(f!==this.orderSig){let e=this.list.contains(document.activeElement)&&document.activeElement.matches(`:focus-visible`);if(this.orderSig.startsWith(f.slice(0,f.indexOf(`|`)+1))&&(this.pointerInside||e))this.pendingOrder=!0;else{this.orderSig=f,this.pendingOrder=!1,this.order=u.slice().sort((e,t)=>Pf[e.group]-Pf[t.group]||(e.group===`locked`?t.ratio-e.ratio:0)||Bf.get(e.key).index-Bf.get(t.key).index).map(e=>e.key);let e=document.activeElement;this.list.replaceChildren(...this.order.map(e=>this.cards.get(e).el)),e instanceof HTMLElement&&this.list.contains(e)&&e.focus({preventScroll:!0})}}this.empty.hidden=this.order.length>0||c,this.order.length||X(this.empty,`${r?s.empty:n.empty}${d.length?` 완료한 항목은 아래에서 볼 수 있어요.`:``}`),this.doneBtn.hidden=d.length===0||c,X(this.doneBtn,`${this.showDone?`완료 항목 숨기기`:`완료 항목 보기`} (${d.length})`),this.doneBtn.setAttribute(`aria-expanded`,String(this.showDone)),this.doneList.hidden=!this.showDone||!d.length||c,this.showDone&&Z(this.doneList,d.map(e=>`<li><span class="tick" aria-hidden="true">✓</span>${e.title.replace(/<small>.*<\/small>/,``)}${Bf.get(e.key).model?``:y.get(e.key)?.repeat?` <small>최고 단계</small>`:``}</li>`).join(``));let p=v.filter(t=>He(e,t.id).bought).length+o.filter(t=>Xe(e,t.id)).length;X(Y(`goals-summary`),`${p}/${v.length+o.length} 완료`),this.current=this.pickNext(e),this.guide(e)}pickNext(e){let t=Math.max(.01,ke(e).coins),n=zf.map(t=>({x:t,v:this.viewOf(e,t)})).filter(({v:e})=>e.group!==`done`);if(!n.length)return null;let r=({x:n,v:r})=>r.group===`ready`?[0,y.get(n.key)?He(e,n.key).cost:0]:r.group===`coins`?[1,He(e,n.key).shortCoins/t]:[2,-r.ratio],i=n.slice().sort((e,t)=>{let n=r(e),i=r(t);return n[0]-i[0]||n[1]-i[1]||e.x.index-t.x.index})[0],o=this.current&&n.find(e=>e.x.key===this.current.key);if(o){let e=r(o),t=r(i);e[0]===t[0]&&(t[0]!==2||e[1]-t[1]<.1)&&(t[0]!==1||e[1]-t[1]<30)&&(i=o)}let s=a.get(i.x.category);return{key:i.x.key,category:i.x.category,text:`[${s.name}] ${i.v.short}`,html:`<span class="gcat">${q(Lf[s.id],`[${s.name}]`)}</span>${i.v.shortHtml}`}}guide(e){let t=[[e.moves>0,`일꾼을 판매대 ↔ 연구 책상으로 옮겨 보기`],[e.sessionsCompleted>0,`작업대에서 작업 하나 끝내기`],[e.tried.some(e=>e!==`model:Butter`&&e!==`coating:classic`&&e!==`tool:hand`),`새 말랑이나 코팅으로 작업하기`],[Se(e,`coating`),`코팅 작업실 열고 일꾼 두기`],[Se(e,`showroom`),`체험·전시 구역 열기`]],n=t.findIndex(e=>!e[0]);Z(Y(`guide`),n<0?``:`<p class="guide">${q(`goal`,`처음 할 일`)}<b>${n+1}/${t.length}</b> ${Q(t[n][1])}</p>`)}},Gf={sale:{name:`판매 시연`,gets:`${_d(`coin`,`코인`,``)}${_d(`review`,`리뷰`,``)}${_d(`star`,`완료 시 별점↑`,``)}`,unit:`코인`,icon:`coin`},research:{name:`연구 실험`,gets:_d(`research`,`연구 진척`,``),unit:`연구`,icon:`research`}},Kf=class{d;bench;card=Y(`session-card`);strip=Y(`model-strip`);notice=Y(`bench-notice`);overlay=Y(`bench-overlay`);cardKey=``;stripKey=``;status={kind:`loading`,text:`작업대를 준비하고 있어요`};constructor(e,t){this.d=e,this.bench=t,this.card.addEventListener(`click`,t=>{let n=t.target.closest(`[data-act]`);if(!n||n.getAttribute(`aria-disabled`)===`true`)return;let r=n.dataset.act,i=n.dataset.v;r===`purpose`&&e.setPref({purpose:i}),r===`coating`&&e.setPref({coating:i}),r===`tool`&&e.setPref({tool:i}),r===`start`&&e.start(),r===`end`&&e.end(),this.cardKey=``,this.render()}),this.strip.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-model]`);if(!n)return;let r=n.dataset.model;n.dataset.locked===`1`?e.lockedModel(r):e.pickModel(r)}),document.querySelectorAll(`#tool-dock [data-tool]`).forEach(e=>e.addEventListener(`click`,()=>t.setTool(e.dataset.tool))),t.onTool=e=>document.querySelectorAll(`#tool-dock [data-tool]`).forEach(t=>t.setAttribute(`aria-pressed`,String(t.dataset.tool===e))),this.strip.addEventListener(`wheel`,e=>{this.strip.scrollWidth<=this.strip.clientWidth||Math.abs(e.deltaX)>Math.abs(e.deltaY)||(e.preventDefault(),this.strip.scrollBy({left:e.deltaY,behavior:`auto`}))},{passive:!1});let n=new ResizeObserver(()=>this.measureSafe());for(let e of[this.card,this.strip,Y(`tool-dock`),Y(`bench-host`)])n.observe(e);Y(`clear-btn`).addEventListener(`click`,()=>e.clear()),Y(`reset-btn`).addEventListener(`click`,()=>e.resetPhysics()),Y(`fit-btn`).addEventListener(`click`,()=>t.fit()),window.addEventListener(`keydown`,n=>{n.target.matches(`input,textarea,select`)||n.ctrlKey||n.metaKey||n.altKey||!Y(`settings`).hidden||!Y(`confirm`).hidden||document.getElementById(`app`).dataset.tab!==`bench`&&matchMedia(`(max-width: 899px)`).matches||(n.code===`Digit1`&&t.setTool(`press`),n.code===`Digit2`&&t.setTool(`rotate`),n.code===`Digit3`&&t.setTool(`sweep`),n.code===`KeyR`&&e.resetPhysics(),n.code===`KeyF`&&t.fit())})}measureSafe(){let e=Y(`bench-host`).getBoundingClientRect();if(e.width<2||e.height<2)return;let t=this.card.getBoundingClientRect(),n=this.strip.getBoundingClientRect(),r=Y(`tool-dock`).getBoundingClientRect(),i=Math.max(0,e.bottom-r.top+8),a={l:0,t:Math.max(0,t.bottom-e.top+8),r:0,b:i};this.bench.setSafeArea(t.width<1?{l:0,t:Math.max(0,n.bottom-e.top+8),r:0,b:i}:a)}setStatus(e){this.status=e,this.overlay.hidden=e.kind===`ready`,this.overlay.dataset.kind=e.kind,X(Y(`bench-overlay-text`),e.text),Y(`bench-retry`).hidden=e.kind!==`error`}showNotice(e){this.notice.innerHTML=`<p>${e}</p><button type="button" class="btn small">알겠어요</button>`,this.notice.hidden=!1,this.notice.querySelector(`button`).addEventListener(`click`,()=>{this.notice.hidden=!0})}render(){let e=this.d.state();this.renderStrip(e),this.renderCard(e)}renderStrip(e){let t=e.session?.model??e.prefs.model,n=o.map(t=>Xe(e,t.id)?`1`:`0`).join(``)+t+(e.session?.status??``)+Math.floor(e.research);n!==this.stripKey&&(this.stripKey=n,this.strip.replaceChildren(...o.map(n=>{let r=Xe(e,n.id);return vd(`button`,{type:`button`,class:`mchip${r?``:` locked`}${n.id===t?` on`:``}`,"data-model":n.id,"data-locked":r?`0`:`1`,"aria-pressed":String(n.id===t),"aria-label":r?`${n.name} 말랑이 선택`:`${n.name} 말랑이 — 잠김: 연구 ${n.needResearch} 필요 (현재 ${Math.floor(e.research)})`},`<span class="micon">${ud(n.id)}</span><span class="mname">${n.name}</span>${r?``:`<span class="mlock">${J(`research`,R(n.needResearch))}</span>`}`)})))}chips(e,t,n){return Object.keys(e===`coating`?c:l).map(r=>{let i=e===`coating`?Ze(t,r):Qe(t,r),a=e===`coating`?c[r].name:l[r].name;if(i)return`<button type="button" class="chip" data-act="${e}" data-v="${r}" aria-pressed="${r===n}">${a}</button>`;let o=He(t,e===`coating`?`coat-${r}`:`tool-${r}`),s=o.conditionMet?wd(o)||`목표에서 설치`:o.missing.map(Cd).join(` · `),u=o.conditionMet?`${J(`coin`,R(o.cost))}`:o.missing.map(Td).join(` `);return`<button type="button" class="chip locked" aria-disabled="true" title="${Q(s)}">${q(`lock`,``)}${a}<small>${u}</small></button>`}).join(``)}renderCard(e){let t=e.session,n=this.bench.work(),r={},i;if(t){let e=Gf[t.purpose],a=t.budget+t.bonus,s=`${e.name} · ${Q(o.find(e=>e.id===t.model).name)} · ${Q(c[t.coating].name)}${t.tool===`hand`?``:` · ${Q(l[t.tool].name)}`} <small>#${t.id}</small>`;if(t.status===`preparing`)i=`<h3>${s}</h3><div class="sc-mid"><p class="prep" data-f="prep"></p>
          <p class="quote">완료 시 <b>${J(e.icon,`+${L(a,1)}`)}</b> (확정)</p></div>
          <button type="button" class="btn small" data-act="end">작업 취소</button>`,r.prep=`코팅 입히는 중… ${Math.ceil(t.prepLeft)}초`;else if(t.status===`active`){let a=t.credited/t.completeAt,o=Math.min(1,n/t.completeAt),c=n+1e-6<t.credited;i=`<h3>${s}</h3><div class="sc-mid">
          <div class="pbar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-label="인정된 진행"><i></i><em></em></div>
          <p class="prog" title="금 간 면적·벗겨낸 면적 기준, 100%에서 완료"><b data-f="cred"></b> 진행</p>
          <p class="warn" data-f="behind"></p>
          <p class="quote" data-f="paid"></p></div>
          <button type="button" class="btn small" data-act="end">작업 중단</button>`,r.cred=`${Math.floor(a*100)}%`,r.behind=c?`새 왁스 ${Math.floor(o*100)}% — ${Math.floor(a*100)}%를 넘긴 만큼부터 보상해요.`:``,r.paid=`${J(e.icon,`${L(t.paid,1)}/${L(t.budget,1)}`,``,`받은 ${e.unit}`)} · 보너스 ${J(e.icon,`+${L(t.bonus,1)}`,``,``)}`;let l=this.card.querySelector(`.pbar`);l&&this.cardKey===i&&(l.querySelector(`i`).style.width=`${(a*100).toFixed(1)}%`,l.querySelector(`em`).style.left=`${(o*100).toFixed(1)}%`,l.setAttribute(`aria-valuenow`,String(Math.round(a*100))))}else i=`<h3>${s}</h3><div class="sc-mid"><p class="done">${q(`check`,``)}완료! <b>${J(e.icon,`+${L(a,1)}`)}</b></p>
          <p class="feel">더 부숴도 추가 보상은 없어요.</p></div>
          <button type="button" class="btn primary wide" data-act="end">다음 작업 준비</button>`}else{let t=e.prefs,n=pe(e,t),a=Gf[t.purpose],s=Object.keys(c).some(t=>t!==`classic`&&Ze(e,t)),u=Qe(e,`wide`),d=!s&&He(e,`coat-soft`);i=`<h3>작업 준비 <small>${Q(o.find(e=>e.id===t.model).name)} 말랑이</small></h3>
        <div class="seg" role="group" aria-label="작업 목적">
          ${[`sale`,`research`].map(e=>`<button type="button" data-act="purpose" data-v="${e}" aria-pressed="${t.purpose===e}"><b>${Gf[e].name}</b><small class="gets">${Gf[e].gets}</small></button>`).join(``)}
        </div>
        <div class="sc-mid">${s?`<div class="row"><span class="rl">코팅</span>${this.chips(`coating`,e,t.coating)}</div><p class="feel">${Q(c[t.coating].feel)}</p>`:d?`<p class="feel dim" data-f="nextcoat"></p>`:``}
        ${u?`<div class="row"><span class="rl">도구</span>${this.chips(`tool`,e,t.tool)}</div><p class="feel">${Q(l[t.tool].feel)}</p>`:``}
        <p class="quote" data-f="quote"></p>
        <p class="quote-sub" data-f="quotesub"></p></div>
        <button type="button" class="btn primary wide" data-act="start">${a.name} 시작</button>`,d&&(r.nextcoat=`${q(`lock`,``)}새 코팅 ${Q(y.get(`coat-soft`).name)} ${d.conditionMet?wd(d)?J(`coin`,R(d.cost)):`설치 가능`:d.missing.map(Td).join(` `)}`),r.quote=`완료 시 <b>${J(a.icon,`+${L(n.total,1)}`)}</b> <small>= 부수기 ${L(n.budget,1)} + 보너스 ${L(n.bonus,1)}</small>`,r.quotesub=`${n.parts.support>1?`${md(`coating`)}+${L((n.parts.support-1)*100,1)}% · `:``}${_d(`time`,`재코팅`,`${L(n.prepSeconds,2)}초`)} · 시작할 때 확정`}i!==this.cardKey&&(this.cardKey=i,this.card.innerHTML=i,t?.status===`active`&&this.renderCard(e));for(let e of this.card.querySelectorAll(`[data-f]`)){let t=r[e.dataset.f]??``;Z(e,t),e.hidden=!t}this.card.dataset.state=t?.status??`setup`}},qf=class{s;store;mixer;apply;constructor(e,t,n,r,i){this.s=e,this.store=t,this.mixer=n,this.apply=r;let a=Y(`settings`),o=document.querySelectorAll(`#settings input[data-vol]`);o.forEach(t=>t.addEventListener(`input`,()=>{e[t.dataset.vol]=Number(t.value)/100,this.commit()})),o.forEach(e=>e.addEventListener(`change`,()=>n.ui(`tap`))),Y(`mute-toggle`).addEventListener(`click`,()=>{e.muted=!e.muted,this.commit(),n.ui(`toggle`)}),Y(`motion-toggle`).addEventListener(`click`,()=>{e.reducedMotion=!e.reducedMotion,this.commit(),n.ui(`toggle`)}),Y(`style-toggle`).addEventListener(`click`,()=>{e.benchStyle=e.benchStyle===`sketch`?`solid`:`sketch`,this.commit(),n.ui(`toggle`)}),Y(`quality-toggle`).addEventListener(`click`,()=>{e.quality=e.quality===`high`?`low`:`high`,this.commit(),n.ui(`toggle`)}),document.querySelectorAll(`#settings [data-ts]`).forEach(t=>t.addEventListener(`click`,()=>{e.textScale=Number(t.dataset.ts),this.commit(),n.ui(`toggle`)})),Y(`audio-retry`).addEventListener(`click`,()=>{n.retryCrack().then(()=>this.paint()),this.paint()}),Y(`settings-open`).addEventListener(`click`,()=>{this.paint(),a.hidden=!1,n.ui(`tap`),Y(`settings-close`).focus()});let s=()=>{a.hidden=!0,Y(`reset-confirm-box`).hidden=!0,n.ui(`tap`)};Y(`settings-close`).addEventListener(`click`,s),a.addEventListener(`pointerdown`,e=>{e.target===a&&s()}),Y(`reset-open`).addEventListener(`click`,()=>{Y(`reset-confirm-box`).hidden=!1,n.ui(`tap`)}),Y(`reset-cancel`).addEventListener(`click`,()=>{Y(`reset-confirm-box`).hidden=!0,n.ui(`tap`)}),Y(`reset-confirm`).addEventListener(`click`,()=>{i(),s()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&!a.hidden&&s()}),this.paint()}commit(){this.store.saveSettings(this.s),this.apply(),this.paint()}paint(){let e=this.s;document.querySelectorAll(`#settings input[data-vol]`).forEach(t=>{let n=t.dataset.vol;t.value=String(Math.round(e[n]*100)),t.style.setProperty(`--p`,`${t.value}%`),t.nextElementSibling.value=t.value}),Y(`mute-toggle`).setAttribute(`aria-pressed`,String(e.muted)),Y(`motion-toggle`).setAttribute(`aria-pressed`,String(e.reducedMotion)),Y(`quality-toggle`).setAttribute(`aria-pressed`,String(e.quality===`low`)),Y(`style-toggle`).setAttribute(`aria-pressed`,String(e.benchStyle===`solid`)),document.querySelectorAll(`#settings [data-ts]`).forEach(t=>t.setAttribute(`aria-checked`,String(Number(t.dataset.ts)===e.textScale)));let t=this.mixer.crackState;X(Y(`audio-status`),t===`ready`?`녹음 파쇄음: 준비됨`:t===`error`?`녹음 파쇄음을 불러오지 못했어요. 게임은 소리 없이 계속돼요.`:t===`loading`?`녹음 파쇄음: 불러오는 중…`:`소리는 첫 입력 뒤에 켜져요.`),Y(`audio-retry`).hidden=t!==`error`}},Jf=Y(`app`);document.querySelectorAll(`[data-ic]`).forEach(e=>{e.innerHTML=q(e.dataset.ic,e.hasAttribute(`data-deco`)?``:void 0)});var Yf=new yt(()=>localStorage),Xf=Yf.loadSettings(),Zf=Yf.load(),Qf=Zf.kind===`invalid`?Zf.raw:null,$f=new rt(Zf.kind===`ok`?Zf.data:D(),()=>performance.now()),ep=()=>$f.state,tp=new kt,$=new cd(Y(`bench-host`),Y(`scene`),tp),np=new bd,rp=!1,ip=!navigator.locks,ap=!1,op=new it(e=>{ip=e,Hp()});function sp(e){X(Y(`save-state`),e),Y(`save-state`).hidden=!e}function cp(){if(Qf)return sp(`저장 보류`),!1;let e=Yf.save(ep());return!e&&!ap&&yd(`저장하지 못했어요. 브라우저 저장 공간이나 사생활 보호 모드를 확인해 주세요. 진행은 이 탭에만 남아요.`,`warn`),ap=!e,sp(e?``:`저장 실패`),e}function lp(e){Rp(),e&&cp()}function up(e,t){let n=ke(ep()),r=$f.input(n=>ze(n,e,t),{ok:!1,reason:`bad-place`});if(r.ok){let r=ke(ep()),i=r.coins-n.coins,a=r.research-n.research,o=[Math.abs(i)>.004?J(`coin`,`${i>0?`+`:`−`}${L(Math.abs(i),2)}/초`):``,Math.abs(a)>4e-4?J(`research`,`${a>0?`+`:`−`}${L(Math.abs(a),3)}/초`):``].filter(Boolean);yd(`${q(`worker`,`일꾼`)}${e} → ${md(t,``)}<b>${Sd(t)}</b>${o.length?` ${o.join(` `)}`:``}`),lp(!0)}return r}function dp(e){let t=$f.input(t=>Ue(t,e),{ok:!1,reason:`unknown`});if(t.ok){let n=t.def;tp.ui(n.kind===`zone`||n.kind===`mastery`?`milestone`:`buy`),yd({hire:`새 일꾼이 <b>대기실</b>에 왔어요. 구역에 배치해 주세요.`,zone:`<b>${Q(n.name)}</b> 완료! 가게에 새 구역이 생겼어요.`,coating:`<b>${Q(n.name)}</b> — 작업 준비에서 코팅을 고를 수 있어요.`,tool:`<b>${Q(n.name)}</b> — 작업 준비에서 도구를 고를 수 있어요.`,expand:`<b>${Q(n.name)}</b> 설치 완료.`,equip:`<b>${Q(n.name)} Lv ${t.level}</b> 설치 완료.`,mastery:`<b>${Q(n.name)}</b> — 설비 효과가 두 배가 됐어요!`,training:`<b>${Q(n.name)}</b> 완료 — 모든 일꾼의 낮은 숙련 등급 경험이 빨라져요.`}[n.kind],`good`),Np.met.add(e),lp(!0)}return t}function fp(e,t){let n=$f.input(n=>Ke(n,e,t),{ok:!1,reason:`unknown`});if(n.ok){tp.ui(`buy`);let r=ep().workers.find(t=>t.id===e)?.place===t;yd(`일꾼 ${e} · <b>${Q(C[t].upgrade)} Lv ${n.level}</b>${r?``:` — 보관했다가 이 업무에 배치하면 적용돼요`}`,`good`),lp(!0)}return n}function pp(e){Jf.dataset.tab!==`goals`&&Mp(`goals`),Dp.openWorker(e)}function mp(e){Ep.select(e)}function hp(e){let t=ep();t.session||(!e.model||Xe(t,e.model))&&(!e.coating||Ze(t,e.coating))&&(!e.tool||Qe(t,e.tool))&&(Object.assign(t.prefs,e),tp.ui(`tap`),(e.coating||e.tool)&&$.configure(t.prefs.coating,t.prefs.tool),e.model&&$.show(e.model,!1),lp(!0))}function gp(){let e={...ep().prefs},t=$f.input(t=>me(t,e),{ok:!1,reason:`busy`});if(!t.ok){tp.ui(`deny`),yd(t.reason===`busy`?`진행 중인 작업이 있어요.`:`아직 쓸 수 없는 조합이에요.`,`warn`);return}$.configure(e.coating,e.tool),$.show(e.model,!0),$.setTool(`press`),jp(),tp.ui(`tap`),lp(!0)}async function _p(){let e=ep().session;if(e){if(e.status!==`complete`){let t=e.purpose===`sale`?`코인`:`연구`;if(!await xd(`작업을 중단할까요? 지금까지 받은 ${L(e.paid,1)} ${t}는 그대로이고, 완료 보너스 ${L(e.bonus,1)}는 받지 못해요.`,`중단`)||ep().session?.id!==e.id)return}$f.input(e=>F(e),`none`),jp(),lp(!0)}}async function vp(e){let t=ep();if(!(t.session&&t.session.model===e)){if(t.session){if(t.session.status!==`complete`&&!await xd(`${b.get(e).name} 말랑이로 바꾸려면 지금 작업을 중단해야 해요. 완료 보너스는 받지 못해요.`,`중단하고 바꾸기`))return;$f.input(e=>F(e),`none`)}ep().prefs.model=e,jp(),$.show(e,!0),tp.ui(`tap`),lp(!0)}}function yp(e){let t=b.get(e);tp.ui(`deny`),yd(`${q(`lock`)}<b>${t.name}</b> 말랑이 — ${J(`research`,`${L(ep().research,0)}/${R(t.needResearch)}`)} 필요. 연구 책상·연구 실험으로 모아요.`,`warn`)}var bp={amount:0,kind:`coin`,at:0};function xp(e){let t=ep().session;if(!t||t.status!==`active`)return;let n=$f.input(n=>ve(n,t.id,e),{paid:0,bonus:0,completed:!1,xp:0});n.paid>0&&(bp.amount+=n.paid,bp.kind=t.purpose===`sale`?`coin`:`research`),n.completed&&(tp.ui(`milestone`),yd(`작업 완료! 보너스 <b>${J(t.purpose===`sale`?`coin`:`research`,`+${L(n.bonus,1)}`)}</b>`,`good`),bp.amount+=n.bonus,cp())}function Sp(e){bp.amount<=0||e-bp.at<160||(np.spawn($.lastClient.x,$.lastClient.y-34,`+${L(bp.amount,bp.amount<1?2:1)}`,bp.kind),bp={amount:0,kind:bp.kind,at:e})}function Cp(){if(!$.ready)return;$.resetPhysics();let e=ep().session;e&&e.status===`active`&&e.credited>0?Op.showNotice(`왁스 모양만 처음으로 돌렸어요. 이 작업에서 이미 인정된 <b>${Math.floor(e.credited/e.completeAt*100)}%</b>는 다시 보상하지 않고, 넘긴 만큼부터 보상해요.`):yd(`새 왁스로 다시 시작해요.`)}function wp(){let e=$.clear();yd(e?`${e}개의 조각을 정리했어요.`:`아직 떨어진 조각이 없어요.`)}function Tp(){Qf&&=(Yf.backupInvalid(Qf),null);let e=D();$f.replace(e),Fp(),$.configure(e.prefs.coating,e.prefs.tool),$.show(e.prefs.model,!0),jp(),cp(),Rp(),yd(`새 가게를 열었어요.`)}var Ep=new Df({state:ep,move:up,buy:dp,sound:e=>tp.ui(e),growth:pp}),Dp=new Wf({state:ep,buy:dp,sound:e=>tp.ui(e),visible:()=>Jf.dataset.tab===`goals`,upgrade:fp,place:mp}),Op=new Kf({state:ep,setPref:hp,start:gp,end:()=>void _p(),pickModel:e=>void vp(e),lockedModel:yp,resetPhysics:Cp,clear:wp},$),kp=new qf(Xf,Yf,tp,Ap,Tp);$.onStatus=e=>Op.setStatus(e),$.onWork=xp,$.onBlocked=()=>{let e=ep().session;yd(e?`코팅이 마르는 중이에요. 잠시만요!`:`먼저 작업 목적을 고르고 <b>시작</b>을 눌러 주세요. 돌리기는 언제든 돼요.`)},Y(`bench-retry`).addEventListener(`click`,()=>{let e=ep();$.show(e.session?.model??e.prefs.model,!0)});function Ap(){tp.setVolumes(Xf),np.reduced=Xf.reducedMotion,$.reducedMotion=Xf.reducedMotion,$.setQuality(Xf.quality),$.setStyle(Xf.benchStyle),Jf.classList.toggle(`reduced`,Xf.reducedMotion),document.documentElement.style.setProperty(`--ts`,String(Xf.textScale))}function jp(){let e=ep().session;$.interactive=rp&&!!e&&(e.status===`active`||e.status===`complete`)}function Mp(e){e!==`goals`&&(e=`bench`),Jf.dataset.tab=e,document.querySelectorAll(`#tabs [data-tab]`).forEach(t=>t.setAttribute(`aria-selected`,String(t.dataset.tab===e))),$.visible=e===`bench`,$.visible&&requestAnimationFrame(()=>$.resize()),e!==`bench`&&$.release(),tp.ui(`tap`),Rp()}document.querySelectorAll(`#tabs [data-tab]`).forEach(e=>e.addEventListener(`click`,()=>Mp(e.dataset.tab))),Y(`goal-line`).addEventListener(`click`,()=>{let e=Dp.current;Jf.dataset.tab!==`goals`&&Mp(`goals`),e?Dp.focusGoal(e.key,Xf.reducedMotion):Y(`goals-panel`).scrollIntoView({behavior:Xf.reducedMotion?`auto`:`smooth`,block:`start`})});var Np={models:new Set,met:new Set,status:``,ranks:new Map},Pp=e=>e.workers.flatMap(e=>n.map(t=>[`${e.id}:${t}`,j(e,t)]));function Fp(){let e=ep();Np.ranks=new Map(Pp(e)),Np.models=new Set(o.filter(t=>Xe(e,t.id)).map(e=>e.id)),Np.met=new Set(v.filter(t=>He(e,t.id).conditionMet).map(e=>e.id)),Np.status=e.session?`${e.session.id}:${e.session.status}`:``}function Ip(){let e=ep();for(let t of o)!Np.models.has(t.id)&&Xe(e,t.id)&&(Np.models.add(t.id),Dp.noteModel(t.id),tp.ui(`milestone`),yd(`연구 성과! <b>${t.name} 말랑이</b>를 작업대에서 고를 수 있어요.`,`good`));for(let t of v)if(!Np.met.has(t.id)&&He(e,t.id).conditionMet){Np.met.add(t.id);let n=He(e,t.id);yd(`${q(`check`,`조건 달성:`)}<b>${Q(t.name)}</b> — ${n.affordable?`지금 살 수 있어요`:`${J(`coin`,R(n.cost))} 필요`}`)}let t=[];for(let[n,r]of Pp(e)){let e=Np.ranks.get(n);if(e!==void 0&&r>e){let[e,i]=n.split(`:`);t.push({id:Number(e),z:i,b:r})}Np.ranks.set(n,r)}if(t.length){if(Ep.flashRankUp([...new Set(t.map(e=>e.id))]),tp.ui(`milestone`),t.length===1){let e=t[0];yd(`일꾼 ${e.id} · ${C[e.z].short} <b>${w.rankNames[e.b]}</b>! ${Q(C[e.z].rankEffect)}`,`good`)}else yd(`일꾼 ${new Set(t.map(e=>e.id)).size}명이 숙련 상승 — 업그레이드 › 일꾼 › 개인 강화에서 확인해요.`,`good`)}let n=e.session?`${e.session.id}:${e.session.status}`:``;n!==Np.status&&(e.session?.status===`active`&&Np.status===`${e.session.id}:preparing`&&(tp.ui(`start`),yd(`코팅 완성! <b>꾹 눌러</b> 부숴 보세요.`)),Np.status=n,jp())}function Lp(){let e=ep(),t=ke(e);X(Y(`coins`),L(e.coins,1)),X(Y(`coin-rate`),`+${L(t.coins,2)}/초`),X(Y(`research`),L(e.research,1)),X(Y(`research-rate`),`+${L(t.research,3)}/초`);let n=Ne(t);X(Y(`rating`),St(e.rating)),Z(Y(`rating-sub`),`${n>0?`<span class="up">▲</span> `:n<0?`<span class="down">▼</span> `:``}최고 ${St(e.bestRating)} · 리뷰 ${L(Math.floor(e.reviews),0)}`),Y(`rating-stat`).title=`별점 ${St(e.rating)} → 목표 ${St(t.rating.target)} (수요 ×${t.rating.demandMult.toFixed(2)}). 최고 별점과 리뷰 수는 고용·가게 확장 조건이에요(줄지 않음).`;let r=e.workers.filter(e=>e.place!==`idle`).length,i=xe(e,`idle`);X(Y(`staff`),`${r}/${e.workers.length}`),Z(Y(`staff-idle`),i?`${q(`idle`,``)}대기 ${i}`:`${q(`check`,``)}배치 완료`),Y(`staff-idle`).classList.toggle(`alert`,i>0)}function Rp(){Ep.render(),Dp.render(),Op.render(),Lp(),Z(Y(`goal-line`),`${q(`goal`)}${Dp.current?.html??`모든 업그레이드 완료`}`),Y(`goal-line`).title=`다음 목표 · ${Dp.current?.text??`모든 업그레이드 완료`}`,Y(`tab-goals-dot`).hidden=Dp.readyCount===0}var zp=0,Bp=0;function Vp(e){if(e-zp<1400)return;zp=e;let t=ep(),r=n.filter(e=>xe(t,e)>0);r.length&&tp.worker(r[Math.floor(Math.random()*r.length)]);let i=t.salesTotal-Bp;if(Bp=t.salesTotal,!Xf.reducedMotion&&i>.01&&xe(t,`counter`)>0){let e=Ep.counterPoint();e&&np.spawn(e.x,e.y,`+${L(i,1)}`,`coin`)}}function Hp(){let e=rp&&ip;$f.setActive(e);let t=e&&document.visibilityState===`visible`;tp.setSuspended(!t),t||$.release()}document.addEventListener(`visibilitychange`,()=>{Hp(),document.visibilityState===`hidden`&&cp()}),window.addEventListener(`pagehide`,()=>cp());var Up=0;function Wp(){if(!rp)return;let e=performance.now();$f.settle(),Ip(),Rp(),Vp(e),e-Up>1e4&&(Up=e,cp())}function Gp(e){requestAnimationFrame(Gp),rp&&($f.settle(),Lp(),Sp(e))}function Kp(e,t){Y(`load-bar`).style.width=`${Math.round(e*100)}%`,X(Y(`load-text`),t)}async function qp(){Kp(.1,`글꼴 준비 중…`),await Promise.race([document.fonts.load(`16px Galmuri11`,`왁뿌말랑이가게0123`),new Promise(e=>setTimeout(e,2500))]).catch(()=>void 0),Kp(.4,`작업대 준비 중…`);let e=ep();if($.init(Xf.quality,Xf.benchStyle)){let t=e.session;$.configure(t?.coating??e.prefs.coating,t?.tool??e.prefs.tool),Kp(.6,`말랑이에 왁스 입히는 중…`),await $.show(t?.model??e.prefs.model,!0)}Ap(),Fp(),Rp(),navigator.locks&&await op.acquire(),Kp(1,`준비 완료`),Jf.classList.remove(`booting`),Y(`loader`).hidden=!0;let t=Y(`title-note`);t.textContent=ip?Qf?`저장 데이터를 읽을 수 없어요. 덮어쓰지 않고 보존했어요. 설정의 ‘새 게임’을 눌러야 새로 저장을 시작해요.`:Zf.kind===`unavailable`?`이 브라우저에서는 저장할 수 없어요. 진행은 이번 탭에만 남아요.`:`창을 닫지 않으면 다른 탭을 봐도 가게는 계속 돌아가요. 창을 닫은 동안에는 쉬어요.`:`다른 탭에서 이 버전을 플레이 중이에요. 그 탭을 닫으면 여기서 이어서 할 수 있어요.`,Y(`tap-start`).hidden=!1}async function Jp(){if(rp||!ip&&navigator.locks&&(await op.acquire(),!ip))return;rp=!0,tp.unlock().then(()=>kp.paint()),Ap(),Y(`title`).classList.add(`gone`),Hp(),jp(),tp.ui(`start`);let e=ep().session;e&&e.status===`active`&&e.credited>0&&Op.showNotice(`새로고침 전의 왁스 모양은 복원하지 못했어요. 작업 #${e.id}에서 이미 인정된 <b>${Math.floor(e.credited/e.completeAt*100)}%</b>는 다시 보상하지 않고, 새 왁스에서 그 이상 부순 만큼부터 보상해요.`),Qf&&sp(`저장 보류`),requestAnimationFrame(Gp),setInterval(Wp,250)}Y(`tap-start`).addEventListener(`click`,()=>void Jp()),window.addEventListener(`keydown`,e=>{!rp&&(e.key===`Enter`||e.key===` `)&&!Y(`tap-start`).hidden&&(e.preventDefault(),Jp())}),document.addEventListener(`gesturestart`,e=>e.preventDefault()),Mp(`bench`),qp(),window.__shop={clock:$f,bench:$,mixer:tp,store:Yf,shop:Ep,goals:Dp,settings:Xf,get state(){return ep()},get started(){return rp},get invalid(){return Qf},actions:{move:up,buy:dp,upgrade:fp,openGrowth:pp,startWork:gp,endWork:_p,pickModel:vp,credit:xp,persist:cp,setPref:hp,resetPhysics:Cp},UNLOCK_INDEX:y,STAFF:w,rules:{categoryCounts:()=>Ye(ep()),unlockStatus:e=>He(ep(),e),upgradeStatus:(e,t)=>Ge(ep(),e,t)},fastForward(e){$f.settle(),Le(ep(),e),Rp()},get benchStatus(){return Op.status}};