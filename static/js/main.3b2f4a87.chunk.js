(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"title":"Amir Hossein Azizzadeh Delshad","subtitle":"Product Owner | Front-End Developer","contact":{"email":"amirhossein_azizzadeh@yahoo.com","number":"09124546276"},"sections":[{"title":"About","items":[{"title":"Personal Info","item":[{"info":"Birthday","amount":"1994"},{"info":"Marige","amount":"Single"},{"info":"Military Service","amount":"Done"}]},{"title":"Education","item":[{"info":"Bachelor","amount":"Sharif University of Thechnology (Sep 2012- Sep 2016)"},{"info":"Master","amount":"Sharif University of Thechnology (Sep 2016- Jan 2019)"}]},{"title":"Working Experience","item":[{"info":"Company","amount":"RahpaTech Company (The Owner of Panda & Dorna Services)"},{"info":"Position","amount":"Product Owner"},{"info":"Time","amount":"Dec 2018 untill now"}]}]},{"title":"Skills","items":[{"type":"PO","image":"./images/PO.png","items":[{"title":"Scrum","image":"./images/Scrum.png"},{"title":"Trello","image":"./images/Trello.png"},{"title":"Figma","image":"./images/Figma.png"}]},{"type":"Developer","image":"./images/DEV.png","items":[{"title":"Flutter","image":"./images/Flutter.png"},{"title":"Python","image":"./images/Python.png"},{"title":"React","image":"./images/React.png"},{"title":"JavaScript","image":"./images/JavaScript.png"},{"title":"HTML","image":"./images/HTML.png"},{"title":"CSS","image":"./images/CSS.png"}]}]}],"icons":{"email":"images/email.png","number":"images/number.png"}}')},,,,,,,,,,,,,,,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),r=a.n(c),l=(a(25),a(1)),s=a(2),m=a(4),o=a(3),u=a(19),p=a.n(u),h=a(6),v=(a(37),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.children;return i.a.createElement("div",{className:"fullpage ".concat(this.props.className||"")},e)}}]),a}(n.Component)),f=function(e){return console.log(e.section),i.a.createElement(h.Link,{activeClass:"active",to:e.section,spy:!0,smooth:!0},e.name?e.name:e.direction?i.a.createElement("img",{style:{maxWidth:30},src:"images/up.png"}):i.a.createElement("img",{style:{maxWidth:30},src:"images/down.png"}))},g=a(5),d=(a(38),a(39),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.Element,{name:"fistview",className:"element"}),i.a.createElement(v,{className:this.props.theme+"-section1"},i.a.createElement("h1",{className:"title"},g.title),i.a.createElement("h2",{className:"subtitle"},g.subtitle),i.a.createElement("div",{className:"flex row all"},i.a.createElement("div",{className:"flex column1"},Object.keys(g.contact).map((function(e){return i.a.createElement("img",{src:"images/".concat(e,".png"),style:{maxWidth:30}})}))),i.a.createElement("div",{className:"flex column2"},Object.keys(g.contact).map((function(e){return i.a.createElement("div",null,g.contact[e])}))))),i.a.createElement("div",{className:"arrow"},i.a.createElement(f,{section:"about"})))}}]),a}(n.Component)),E=(a(40),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item;return i.a.createElement("dev",{className:"infoCard"},i.a.createElement("dev",{className:"TitleInfoCard"},e.title),i.a.createElement("dev",null,e.item.map((function(e){return i.a.createElement("div",{className:"ContentInfoCard"},i.a.createElement("div",{className:"ContentInfoCard-title"},e.info),i.a.createElement("div",{className:"ContentInfoCard-content"},e.amount))}))))}}]),a}(n.Component)),b=(a(41),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(h.Element,{name:"about",className:"element"}),i.a.createElement(v,{className:this.props.theme+"-section2"},i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"title2"}," ",g.sections[0].title),g.sections[0].items.map((function(t){return i.a.createElement("div",{className:e.props.theme+"-info"},i.a.createElement(E,{item:t}))})))),i.a.createElement("div",{className:"arrowAbout"},i.a.createElement(f,{section:"skills"})))}}]),a}(n.Component)),O=(a(42),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.skill;return i.a.createElement("div",{className:"row1"},i.a.createElement("div",{className:"img"},i.a.createElement("img",{src:e.image})),i.a.createElement("div",{className:"skillImages"}," ",e.items.map((function(e){return i.a.createElement("div",null,i.a.createElement("img",{src:e.image}))}))))}}]),a}(n.Component)),y=(a(43),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.Element,{name:"skills",className:"element"}),i.a.createElement(v,{className:this.props.theme+"-section3"},i.a.createElement("div",{className:"skills"},i.a.createElement("div",{className:"title1"},g.sections[1].title),g.sections[1].items.map((function(e){return i.a.createElement(O,{skill:e})}))),i.a.createElement("div",{className:"arrowSkills"},i.a.createElement(f,{section:"fistview",direction:"top"}))))}}]),a}(n.Component)),j=(a(44),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"headline"},i.a.createElement("div",{id:"image"},i.a.createElement("img",{style:{maxWidth:30},src:"./images/theme.png",onClick:this.props.onClick})),i.a.createElement("div",null,i.a.createElement(f,{section:"about",name:"About"})),i.a.createElement("div",null,i.a.createElement(f,{section:"skills",name:"Skills"})))}}]),a}(n.Component)),N=(a(45),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeTheme=function(){var e=n.state.version;5===e?e=1:e++;var t="version"+e;n.setState({version:e}),console.log("version is "+t),n.setState({theme:t})},n.state={version:1,theme:"version1"},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,{onClick:this.changeTheme}),i.a.createElement("div",null,i.a.createElement(p.a,null),i.a.createElement(d,{theme:this.state.theme})),i.a.createElement(b,{theme:this.state.theme}),i.a.createElement(y,{theme:this.state.theme}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.3b2f4a87.chunk.js.map