"use strict";(self.webpackChunkprofile=self.webpackChunkprofile||[]).push([[771],{771:function(s,e,t){t.r(e),t.d(e,{default:function(){return E}});var n=t(5671),i=t(3144),r=t(136),o=t(516),a=t(8683),u=t(2791),l=t(8687),c=t(8058),d=t(3433),p="MyPosts_postsBlock__+4u2F",f="Post_item__ucbsg",h=t(184),j=function(s){return(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("img",{src:"https://e7.pngegg.com/pngimages/749/802/png-clipart-shadow-fight-ninja-berdychiv-kusarigama-illya-shadow-fight-2-avatar-city-cartoon.png",alt:"avatar"}),s.message,(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"like"}),(0,h.jsx)("span",{children:s.like})]})]})},x=t(6139),v=t(704),m=t(1670),g=t(5421),b=(0,g.D)(10),k=(0,v.Z)({form:"posts"})((function(s){return(0,h.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(x.Z,{component:m.gx,name:"post",validate:[g.C,b]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})})),P=(0,l.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),{addPosts:c.dH})((function(s){return(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("h1",{children:"my posts "}),(0,h.jsx)(k,{onSubmit:function(e){s.addPosts(e.post)}}),(0,h.jsx)("div",{children:(0,d.Z)(s.posts).reverse().map((function(s){return(0,h.jsx)(j,{like:s.like,message:s.message},s.id)}))})]})})),S=t(9439),Z=t(9776),y="ProfileInfo_description__9cgdk",I="ProfileInfo_mainPhoto__Apii-",_="ProfileInfo_contact__VUG5+",w="ProfileInfo_error__n2J08",N=function(s){var e=(0,u.useState)(!1),t=(0,S.Z)(e,2),n=t[0],i=t[1],r=(0,u.useState)(s.status),o=(0,S.Z)(r,2),a=o[0],l=o[1];(0,u.useEffect)((function(){l(s.status)}),[s.status]);return(0,h.jsxs)("div",{children:[!n&&(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Status"}),": ",(0,h.jsx)("span",{onDoubleClick:function(){i(!0)},children:s.status})]}),n&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(s){l(s.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),s.updateStatus(a)},value:a})})]})},A=t(6906),C=(0,v.Z)({form:"profile"})((function(s){var e=s.handleSubmit,t=s.profile,n=s.status,i=s.updateStatus,r=s.isOwner,o=s.error;return(0,h.jsxs)("form",{onSubmit:e,children:[!r&&(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:" save"})}),o&&(0,h.jsx)("div",{className:w,children:o}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name"}),": ",(0,h.jsx)(x.Z,{component:m.II,name:"fullName",placeholder:"full name",validate:[]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job"}),": ",(0,h.jsx)(x.Z,{component:m.II,name:"lookingForAJob",validate:[],type:"checkbox"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills"}),":  ",(0,h.jsx)(x.Z,{component:m.gx,name:"lookingForAJobDescription",placeholder:"my skills",validate:[]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me"}),": ",(0,h.jsx)(x.Z,{component:m.gx,name:"aboutMe",placeholder:"about me",validate:[]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(s){return(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)("b",{children:s}),": ",(0,h.jsx)(x.Z,{component:m.II,name:"contacts.".concat(s),placeholder:s,validate:[]})]},s)}))]}),(0,h.jsx)(N,{status:n,updateStatus:i})]})})),D=function(s){var e=s.profile,t=s.isOwner,n=s.savePhoto,i=s.status,r=s.updateStatus,o=s.saveProfile,a=(0,u.useState)(!1),l=(0,S.Z)(a,2),c=l[0],d=l[1];if(!e)return(0,h.jsx)(Z.p,{});return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("img",{src:e.photos.large||A,alt:"samuray",className:I}),!t&&(0,h.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&n(s.target.files[0])}}),c?(0,h.jsx)(C,{initialValues:e,profile:e,onSubmit:function(s){o(s).then((function(){d(!1)}))}}):(0,h.jsx)(O,{profile:e,isOwner:t,goToEditMode:function(){return d(!0)},status:i,updateStatus:r})]})})},O=function(s){var e=s.profile,t=s.isOwner,n=s.goToEditMode,i=s.status,r=s.updateStatus;return(0,h.jsxs)("div",{children:[!t&&(0,h.jsx)("div",{children:(0,h.jsx)("button",{onClick:n,children:" edit"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name"}),": ",e.fullName]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"Yes":"No"]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(s){return(0,h.jsx)(F,{contactTitle:s,contactValue:e.contacts[s]},s)}))]}),(0,h.jsx)(N,{status:i,updateStatus:r})]})},F=function(s){var e=s.contactTitle,t=s.contactValue;return(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)("b",{children:e}),": ",t]})},M=function(s){var e=s.profile,t=s.isOwner,n=s.status,i=s.updateStatus,r=s.savePhoto,o=s.saveProfile;return(0,h.jsxs)("div",{children:[(0,h.jsx)(D,{profile:e,status:n,updateStatus:i,isOwner:t,savePhoto:r,saveProfile:o}),(0,h.jsx)(P,{})]})},T=t(7689),U=t(5927),J=t(7781);var V=function(s){(0,r.Z)(t,s);var e=(0,o.Z)(t);function t(){return(0,n.Z)(this,t),e.apply(this,arguments)}return(0,i.Z)(t,[{key:"refreshUserProfile",value:function(){var s;s=this.props.router.params.userId?this.props.router.params.userId.substring(1):28831,this.props.getUserID(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshUserProfile()}},{key:"componentDidUpdate",value:function(s){this.props.router.params.userId!==s.router.params.userId&&this.refreshUserProfile()}},{key:"render",value:function(){return(0,h.jsx)(M,(0,a.Z)((0,a.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:this.props.router.params.userId}))}}]),t}(u.Component),E=(0,J.qC)((0,l.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status}}),{getUserID:c.VN,updateStatus:c.Nf,getStatus:c.lR,savePhoto:c.Ju,saveProfile:c.Ii}),(function(s){return function(e){var t=(0,T.TH)(),n=(0,T.s0)(),i=(0,T.UO)();return(0,h.jsx)(s,(0,a.Z)((0,a.Z)({},e),{},{router:{location:t,navigate:n,params:i}}))}}),U.D)(V)},5927:function(s,e,t){t.d(e,{D:function(){return u}});var n=t(8683),i=t(8687),r=t(7689),o=t(184),a=function(s){return{isAuth:s.auth.isAuth}},u=function(s){return(0,i.$j)(a)((function(e){return e.isAuth?(0,o.jsx)(s,(0,n.Z)({},e)):(0,o.jsx)(r.Fg,{to:"/login"})}))}},6906:function(s,e,t){s.exports=t.p+"static/media/ava.0748e84318a14a2f22d1.png"}}]);
//# sourceMappingURL=771.56134ba1.chunk.js.map