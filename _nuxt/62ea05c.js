(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4],{581:function(t,e,n){var content=n(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("f61ff764",content,!0,{sourceMap:!1})},582:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0c6f2866",content,!0,{sourceMap:!1})},583:function(t,e,n){"use strict";n.r(e);n(36);var r={computed:{height:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 220;case"sm":return 400;case"md":return 500;case"lg":return 600;case"xl":return 650}}}},c=(n(587),n(62)),o=n(68),l=n.n(o),d=n(224),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-card",{staticClass:"section-card",attrs:{"min-height":t.height,elevation:"10",shaped:""}},[t._t("default")],2)}),[],!1,null,"48a76754",null);e.default=component.exports;l()(component,{VCard:d.a})},584:function(t,e,n){"use strict";n.r(e);n(585);var r=n(62),c=n(68),o=n.n(c),l=n(224),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-card",{staticClass:"section-contents-card",attrs:{elevation:"4",shaped:""}},[t._t("default")],2)}),[],!1,null,"23a2d9b6",null);e.default=component.exports;o()(component,{VCard:l.a})},585:function(t,e,n){"use strict";n(581)},586:function(t,e,n){var r=n(19)(!1);r.push([t.i,".section-contents-card[data-v-23a2d9b6]{background-color:rgba(19,19,19,.76863);border:2px solid #373737;border-radius:3em}",""]),t.exports=r},587:function(t,e,n){"use strict";n(582)},588:function(t,e,n){var r=n(19)(!1);r.push([t.i,".section-card[data-v-48a76754]{background-color:rgba(43,41,41,.53333);border:2px solid #313131;border-radius:2em}",""]),t.exports=r},610:function(t,e,n){"use strict";n.r(e);n(36);var r={name:"AwardsSection",computed:{awards:function(){return this.$store.getters["awards/getAwards"]},scholarships:function(){return this.$store.getters["awards/getScholarships"]},isXS:function(){if("xs"===this.$vuetify.breakpoint.name||"sm"===this.$vuetify.breakpoint.name)return!0}}},c=n(62),o=n(68),l=n.n(o),d=n(221),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"container",attrs:{id:"awards"}},[n("UiSectionCard",{staticClass:"pa-5"},[n("h1",{staticClass:"section-header pb-2 text-center"},[n("span",{staticClass:"section-header-span"},[t._v("//")]),t._v(" Awards\n      ")]),t._v(" "),n("hr"),t._v(" "),t.isXS?n("div",[n("UiSectionContentsCard",{staticClass:"px-3 py-6 my-6"},[t._l(t.awards,(function(e){return n("div",{key:e.id},[n("div",{staticClass:"awards-text yellow--text text--lighten-4"},[n("span",[n("v-icon",{attrs:{color:"#cab270"}},[t._v("\n                  "+t._s(e.icon)+"\n                ")])],1),t._v("\n              "+t._s(e.award)+"\n              "),n("ul",[n("li",[t._v(t._s(e.awardedBy))]),t._v(" "),n("li",[t._v(t._s(e.event))]),t._v(" "),n("li",[t._v(t._s(e.year))])])])])})),t._v(" "),t._l(t.scholarships,(function(e){return n("div",{key:e.id},[n("div",{staticClass:"awards-text yellow--text text--lighten-4"},[n("span",[n("v-icon",{attrs:{color:"#cab270"}},[t._v("\n                  "+t._s(e.icon)+"\n                ")])],1),t._v("\n              "+t._s(e.scholarship)+"\n              "),n("ul",[n("li",[t._v(t._s(e.awardedBy))]),t._v(" "),n("li",[t._v(t._s(e.year))])])])])}))],2)],1):n("div",[n("UiSectionContentsCard",{staticClass:"px-3 py-6 my-6"},[t._l(t.awards,(function(e){return n("div",{key:e.id},[n("div",{staticClass:"awards-text yellow--text text--lighten-4"},[n("span",[n("v-icon",{attrs:{color:"#cab270"}},[t._v("\n                  "+t._s(e.icon)+"\n                ")])],1),t._v("\n              "+t._s(e.award)+" - "+t._s(e.awardedBy)+" - "+t._s(e.event)+" -\n              "+t._s(e.year)+"\n            ")])])})),t._v(" "),t._l(t.scholarships,(function(e){return n("div",{key:e.id},[n("div",{staticClass:"awards-text yellow--text text--lighten-4"},[n("span",[n("v-icon",{attrs:{color:"#cab270"}},[t._v("\n                  "+t._s(e.icon)+"\n                ")])],1),t._v("\n              "+t._s(e.scholarship)+" - "+t._s(e.awardedBy)+" -\n              "+t._s(e.year)+"\n            ")])])}))],2)],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{UiSectionContentsCard:n(584).default,UiSectionCard:n(583).default}),l()(component,{VIcon:d.a})}}]);