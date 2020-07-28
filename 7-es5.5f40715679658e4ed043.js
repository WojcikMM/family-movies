function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"V7/i":function(n,e,t){"use strict";t.r(e),t.d(e,"MoviePreviewModule",(function(){return D}));var i=t("ofXK"),o=t("tyNb"),c=t("AytR"),a=t("fXoL"),r=t("OCzZ"),s=t("qATB"),g=t("w2b+");function l(n,e){if(1&n&&(a.Ob(0,"span"),a.qc(1),a.Nb()),2&n){var t=a.Yb(2);a.zb(1),a.tc("",t.movieDetails.vote_average," (",t.movieDetails.vote_count,")")}}function m(n,e){if(1&n&&(a.Ob(0,"button",14),a.qc(1),a.Nb()),2&n){var t=e.$implicit;a.fc("routerLink","/",t.id,""),a.zb(1),a.sc(" ",t.name," ")}}function b(n,e){if(1&n&&a.Kb(0,"img",15),2&n){var t=a.Yb(2);a.ec("alt",t.movieDetails.title)}}function f(n,e){if(1&n&&a.Kb(0,"img",16),2&n){var t=a.Yb(2);a.ec("src",t.posterPrefix+t.movieDetails.poster_path,a.kc)("alt",t.movieDetails.title)}}function p(n,e){if(1&n&&a.Kb(0,"img",21),2&n){var t=a.Yb(2).$implicit;a.ec("alt",t.name)}}function d(n,e){if(1&n&&a.Kb(0,"img",22),2&n){var t=a.Yb(2).$implicit;a.ec("alt",t.name)}}function u(n,e){if(1&n&&(a.Mb(0),a.oc(1,p,1,1,"img",19),a.oc(2,d,1,1,"img",20),a.Lb()),2&n){var t=a.Yb().$implicit;a.zb(1),a.ec("ngIf",1===t.gender),a.zb(1),a.ec("ngIf",1!==t.gender)}}function v(n,e){if(1&n&&a.Kb(0,"img",16),2&n){var t=a.Yb().$implicit,i=a.Yb(2);a.ec("src",i.posterPrefix+t.profile_path,a.kc)("alt",t.name)}}function O(n,e){if(1&n&&a.Kb(0,"img",16),2&n){var t=a.Yb().$implicit,i=a.Yb(2);a.ec("src",i.posterPrefix+t.profile_path,a.kc)("alt",t.name)}}function _(n,e){if(1&n&&(a.Ob(0,"div",17),a.oc(1,u,3,2,"ng-container",5),a.oc(2,v,1,2,"ng-template",null,18,a.pc),a.oc(4,O,1,2,"img",10),a.Ob(5,"h4"),a.qc(6),a.Nb(),a.Nb()),2&n){var t=e.$implicit,i=a.ic(3);a.zb(1),a.ec("ngIf",!t.profile_path)("ngIfElse",i),a.zb(3),a.ec("ngIf",!t.profile_path),a.zb(2),a.rc(t.name)}}function C(n,e){if(1&n&&(a.Ob(0,"div",3),a.Ob(1,"div",4),a.Ob(2,"h1"),a.qc(3),a.Nb(),a.Ob(4,"label"),a.qc(5,"Release Date: "),a.Nb(),a.Ob(6,"span"),a.qc(7),a.Nb(),a.Ob(8,"label"),a.qc(9,"Average Score: "),a.Nb(),a.oc(10,l,2,2,"span",5),a.Ob(11,"label"),a.qc(12,"Runtime: "),a.Nb(),a.Ob(13,"span"),a.qc(14),a.Nb(),a.Ob(15,"label"),a.qc(16,"Genres: "),a.Nb(),a.Ob(17,"div",6),a.oc(18,m,2,2,"button",7),a.Nb(),a.Ob(19,"h2"),a.qc(20,"Overview"),a.Nb(),a.Ob(21,"p"),a.qc(22),a.Nb(),a.Ob(23,"div",8),a.oc(24,b,1,1,"img",9),a.oc(25,f,1,2,"img",10),a.Nb(),a.Nb(),a.Ob(26,"div",11),a.Ob(27,"h2"),a.qc(28,"Cast"),a.Nb(),a.Ob(29,"div",12),a.oc(30,_,7,4,"div",13),a.Nb(),a.Nb(),a.Nb()),2&n){var t=a.Yb(),i=a.ic(5);a.zb(3),a.rc(t.movieDetails.title),a.zb(4),a.rc(t.movieDetails.release_date),a.zb(3),a.ec("ngIf",0!==t.movieDetails.vote_count)("ngIfElse",i),a.zb(4),a.sc("",t.movieDetails.runtime," minutes"),a.zb(4),a.ec("ngForOf",t.movieDetails.genres),a.zb(4),a.rc(t.movieDetails.overview),a.zb(2),a.ec("ngIf",!t.movieDetails.poster_path),a.zb(1),a.ec("ngIf",t.movieDetails.poster_path),a.zb(5),a.ec("ngForOf",t.castArray)}}function M(n,e){1&n&&a.Kb(0,"app-loader")}function P(n,e){1&n&&(a.Ob(0,"span"),a.qc(1,"Movie not scored yet."),a.Nb())}function h(n,e){if(1&n&&a.oc(0,P,2,0,"span",23),2&n){var t=a.Yb();a.ec("ngIf",0===t.movieDetails.vote_count)}}var w,I,N=((w=function n(e,t){var i=this;_classCallCheck(this,n),this._moviesClientService=e,this.route=t,this.posterPrefix=c.a.posterUrlPrefix;var o=+this.route.snapshot.paramMap.get("id");this._moviesClientService.getMovieById(o).subscribe((function(n){i.movieDetails=n,i.castArray=n.credits.cast.slice(0,12)}))}).\u0275fac=function(n){return new(n||w)(a.Jb(r.b),a.Jb(o.a))},w.\u0275cmp=a.Db({type:w,selectors:[["app-movie-details"]],decls:6,vars:2,consts:[["class","movie-details-container",4,"ngIf","ngIfElse"],["loader",""],["notVotedLine",""],[1,"movie-details-container"],[1,"main-info-grid"],[4,"ngIf","ngIfElse"],[1,"genres-buttons"],[3,"routerLink",4,"ngFor","ngForOf"],[1,"movie-poster"],["src","/src/assets/poster-not-found.jpg",3,"alt",4,"ngIf"],[3,"src","alt",4,"ngIf"],[1,"cast-container"],[1,"cast-person-container","p-g"],["class","cast-person ui-g-12 ui-md-6 ui-lg-4 ui-xl-3",4,"ngFor","ngForOf"],[3,"routerLink"],["src","/src/assets/poster-not-found.jpg",3,"alt"],[3,"src","alt"],[1,"cast-person","ui-g-12","ui-md-6","ui-lg-4","ui-xl-3"],["castPersonImageTemplate",""],["src","/src/assets/woman-placeholder-img.jpg",3,"alt",4,"ngIf"],["src","/src/assets/man-placeholder-img.jpg",3,"alt",4,"ngIf"],["src","/src/assets/woman-placeholder-img.jpg",3,"alt"],["src","/src/assets/man-placeholder-img.jpg",3,"alt"],[4,"ngIf"]],template:function(n,e){if(1&n&&(a.Kb(0,"app-header"),a.oc(1,C,31,10,"div",0),a.oc(2,M,1,0,"ng-template",null,1,a.pc),a.oc(4,h,1,1,"ng-template",null,2,a.pc)),2&n){var t=a.ic(3);a.zb(1),a.ec("ngIf",void 0!==e.movieDetails)("ngIfElse",t)}},directives:[s.a,i.k,i.j,o.b,g.a],styles:[".main-info-grid[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto;margin:2em;text-align:center}.main-info-grid[_ngcontent-%COMP%]   .genres-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#ffb86f;border-radius:.5em;box-shadow:-4px 4px 0 #000;margin:.2em}.main-info-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .main-info-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto}@media screen and (max-width:64.062em){.main-info-grid[_ngcontent-%COMP%]{grid-template-columns:30% 70%}.main-info-grid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{grid-area:1/1/1/3}.main-info-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{grid-area:6/1/6/3}.main-info-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{grid-area:7/1/7/3}.main-info-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{grid-column:1}.main-info-grid[_ngcontent-%COMP%]   .genres-buttons[_ngcontent-%COMP%], .main-info-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{grid-column:2}.movie-poster[_ngcontent-%COMP%]{grid-area:8/1/8/3}}@media screen and (min-width:64.063em){.main-info-grid[_ngcontent-%COMP%]{font-size:1.6em;grid-template-columns:30% 30% 40%}.main-info-grid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{grid-area:1/2/1/4}.main-info-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{grid-column:2}.main-info-grid[_ngcontent-%COMP%]   .genres-buttons[_ngcontent-%COMP%], .main-info-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{grid-column:3}.main-info-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{grid-area:6/2/6/4}.main-info-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{grid-area:7/2/7/4}.movie-poster[_ngcontent-%COMP%]{grid-area:1/1/8/1}}.cast-container[_ngcontent-%COMP%]{text-align:center}.cast-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2em}.cast-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80vh;width:100%}.cast-container[_ngcontent-%COMP%]   .cast-person-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"]}),w),z=t("btWG"),D=((I=function n(){_classCallCheck(this,n)}).\u0275mod=a.Hb({type:I}),I.\u0275inj=a.Gb({factory:function(n){return new(n||I)},imports:[[i.c,z.c,o.d.forChild([{path:":id",pathMatch:"full",component:N}])]]}),I)}}]);