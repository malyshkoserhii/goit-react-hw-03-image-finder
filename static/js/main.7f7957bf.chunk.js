(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2yz0A",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1CWl3"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3dBy6",Modal:"Modal_Modal__38SaN"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3sZR-"}},25:function(e,t,a){e.exports={Button:"Button_Button__lyIwQ"}},28:function(e,t,a){e.exports={App:"App_App__2tCc3",LoaderWrapper:"App_LoaderWrapper__1YdPG"}},34:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),c=a.n(n),o=a(9),s=a.n(o),l=(a(34),a(14)),i=a(4),u=a(5),h=a(7),m=a(6),d=(a(35),a(23)),p=a.n(d),g=a(8),b=a.n(g),j=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handleRequest=function(t){e.setState({search:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.search;e.props.onChangeForm(a)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsx)("header",{className:b.a.Searchbar,children:Object(r.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(r.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(r.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:b.a.SearchFormInput,type:"text",placeholder:"Search images and photos",onChange:this.handleRequest})]})})}}]),a}(n.Component),y=a(2),f=a.n(y),v=a(11),O=a.n(v),_=function(e){var t=e.image,a=e.onClick;return Object(r.jsx)("li",{className:O.a.ImageGalleryItem,onClick:function(){return a(t.largeImageURL,t.tags)},children:Object(r.jsx)("img",{src:t.webformatURL,alt:t.tags,className:O.a.ImageGalleryItemImage})})};_.defaultProps={image:[]};var x=_,I=a(12),S=a.n(I),w=document.querySelector("#modal-root"),C=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onCloseModal()},e.handleOnBackdropClick=function(t){t.currentTarget===t.target&&e.props.onCloseModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(Object(r.jsx)("div",{className:S.a.Overlay,onClick:this.handleOnBackdropClick,children:Object(r.jsx)("div",{className:S.a.Modal,children:e})}),w)}}]),a}(n.Component);C.defaultProps={children:Object(r.jsx)("div",{})};var k=C,F=a(24),B=a.n(F),L=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={modalWindowImage:null,alt:null},e.showModal=function(t,a){e.setState({modalWindowImage:t,alt:a})},e.onCloseModal=function(){e.setState({modalWindowImage:null,alt:null})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.modalWindowImage,n=t.alt,c=this.props.images;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("ul",{className:B.a.ImageGallery,children:c.map((function(t){return Object(r.jsx)(x,{image:t,onClick:e.showModal},t.id)}))}),a&&Object(r.jsx)(k,{onCloseModal:this.onCloseModal,children:Object(r.jsx)("img",{src:a,alt:n})})]})}}]),a}(n.Component);L.defaultProps={images:[]},L.protoTypes={images:f.a.array.isRequired};var P=L,M=a(25),N=a.n(M),G=function(e){var t=e.onClick,a=e.text,n=e.type,c=e.icon;return Object(r.jsx)("button",{type:"button",className:N.a.Button,onClick:t,children:"icon"===n?c:a})};G.defaultProps={text:"Load more",type:"text",icon:null};var Q=G,A=a(13),W=a.n(A),D=a(26),q=a(27),R=a.n(q),E="18518367-60788b25c9bdd8e2c754a390a",T="https://pixabay.com/api/";function K(){return(K=Object(D.a)(W.a.mark((function e(t){var a,r,n,c,o,s,l,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchQuery,r=void 0===a?"":a,n=t.currentPage,c=void 0===n?1:n,o=t.perPage,s=void 0===o?10:o,e.prev=1,e.next=4,R.a.get("".concat(T,"?q=").concat(r,"&page=").concat(c,"&key=").concat(E,"&image_type=photo&orientation=horizontal&per_page=").concat(s));case 4:return l=e.sent,e.next=7,l.data.hits;case 7:return i=e.sent,e.abrupt("return",i);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var U=function(e){return K.apply(this,arguments)},z=a(28),J=a.n(z),H=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",images:[],currentPage:1,error:null,isLoading:!1},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,r=t.searchQuery;e.setState({isLoading:!0}),U({currentPage:a,searchQuery:r}).then((function(t){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1},(function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.isLoading,c=t.length>0&&!n;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{onChangeForm:this.onChangeQuery}),a&&Object(r.jsx)("p",{children:a.message}),Object(r.jsx)(P,{images:t}),n&&Object(r.jsx)("div",{className:J.a.LoaderWrapper,children:Object(r.jsx)(p.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})}),c&&Object(r.jsx)(Q,{onClick:this.fetchImages})]})}}]),a}(n.Component);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3o4qP",SearchForm:"Searchbar_SearchForm__39BOg",SearchFormButton:"Searchbar_SearchFormButton__2aroN",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__BKzue",SearchFormInput:"Searchbar_SearchFormInput__1fXil"}}},[[75,1,2]]]);
//# sourceMappingURL=main.7f7957bf.chunk.js.map