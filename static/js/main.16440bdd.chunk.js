(this["webpackJsonpgoit-react-hw-01-components-master"]=this["webpackJsonpgoit-react-hw-01-components-master"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2VM8b",description:"Profile_description__15Z3A",avatar:"Profile_avatar__27k2E",name:"Profile_name__UTi5J",tag:"Profile_tag__1WSAF",location:"Profile_location__2iOGF",stats:"Profile_stats__2NWYr",list:"Profile_list__AaTes",label:"Profile_label__1CkjB",quantity:"Profile_quantity__1lZTF"}},function(e,a,t){e.exports={tableSection:"Transactions_tableSection__KadCl",transactionHistory:"Transactions_transactionHistory__c1xzz",thead:"Transactions_thead__1jlEK",tableTitle:"Transactions_tableTitle__1WuFg",tbody:"Transactions_tbody__onlul",tdbody:"Transactions_tdbody__RyffK"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__2sPPE",item:"FriendList_item__352qX",status:"FriendList_status__3692T",statusOnline:"FriendList_statusOnline__3BCpK FriendList_status__3692T",avatar:"FriendList_avatar__3xjPr",name:"FriendList_name__3B5DM"}},function(e,a,t){e.exports={stats:"Stats_stats__nJkGb",title:"Stats_title__3JY-z",statList:"Stats_statList__29-8_",item:"Stats_item__z8hyk"}},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(7),i=t.n(c),r=t(1),l=t.n(r),o=function(e){return s.a.createElement("div",{className:l.a.profile},s.a.createElement("div",{className:l.a.description},s.a.createElement("img",{src:e.avatar,alt:"user avatar",className:l.a.avatar}),s.a.createElement("p",{className:l.a.name},e.name),s.a.createElement("p",{className:l.a.tag},"@",e.tag),s.a.createElement("p",{className:l.a.location},e.location)),s.a.createElement("ul",{className:l.a.stats},s.a.createElement("li",{className:l.a.list},s.a.createElement("span",{className:l.a.label},"Followers"),s.a.createElement("span",{className:l.a.quantity},e.stats.followers)),s.a.createElement("li",{className:l.a.list},s.a.createElement("span",{className:l.a.label},"Views"),s.a.createElement("span",{className:l.a.quantity},e.stats.views)),s.a.createElement("li",{className:l.a.list},s.a.createElement("span",{className:l.a.label},"Likes"),s.a.createElement("span",{className:l.a.quantity},e.stats.likes))))},m=t(4),d=t.n(m),u=function(e){return s.a.createElement("section",{className:d.a.stats},e.title.length>0&&s.a.createElement("h2",{className:d.a.title},e.title),s.a.createElement("ul",{className:d.a.statList},e.stats.map((function(e){return s.a.createElement("li",{className:d.a.item,key:e.id},s.a.createElement("span",{className:"label"},e.label),s.a.createElement("span",{className:"percentage"},e.percentage))}))))},p=t(5),f=t(3),b=t.n(f),_=function(e){return e.friends.map((function(e){return s.a.createElement("li",{className:b.a.item,key:e.id},e.isOnline?(a=b.a,s.a.createElement("span",{className:a.statusOnline})):function(e){return s.a.createElement("span",{className:e.status})}(b.a),s.a.createElement("img",{className:b.a.avatar,src:e.avatar,alt:"",width:"48"}),s.a.createElement("p",{className:b.a.name},e.name));var a}))},y=function(e){return s.a.createElement("ul",{className:b.a.friendList},s.a.createElement(s.a.Fragment,null,s.a.createElement(_,{friends:p})))},E=t(8),w=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}],N=t(2),h=t.n(N),g=function(e){return s.a.createElement("div",{className:h.a.tableSection},s.a.createElement("table",{className:h.a.transactionHistory},s.a.createElement("thead",{className:h.a.thead},s.a.createElement("tr",{className:h.a.tableTitle},s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Amount"),s.a.createElement("th",null,"Currency"))),s.a.createElement("tbody",null,e.transactions.map((function(e){return s.a.createElement("tr",{className:h.a.tbody,key:e.id},s.a.createElement("td",{className:h.a.tdbody},e.type),s.a.createElement("td",{className:h.a.tdbody},e.amount),s.a.createElement("td",{className:h.a.tdbody},e.currency))})))))},v=t(9),L=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o,E),s.a.createElement(u,{title:"Upload stats",stats:w}),s.a.createElement(y,{friends:p}),s.a.createElement(g,{transactions:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.16440bdd.chunk.js.map