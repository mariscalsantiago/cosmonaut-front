(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{m4hd:function(t,e,o){"use strict";o.r(e),o.d(e,"empresapuestosModule",function(){return H});var a=o("3Pt+"),r=o("ofXK"),n=o("HaJA"),i=o("pKmL"),s=o("tyNb"),c=o("DpdX"),l=o("fXoL"),b=o("tLQd"),d=o("i9e2"),u=o("JBW2");function m(t,e){1&t&&l.Ob(0,"i",29)}function p(t,e){1&t&&l.Ob(0,"i",30)}function g(t,e){if(1&t){const t=l.Ub();l.Tb(0,"button",25),l.ac("click",function(){l.yc(t);const e=l.ec();return e.changeIconDown=!e.changeIconDown}),l.Tb(1,"label",26),l.Ic(2,"B\xdaSQUEDA"),l.Sb(),l.Gc(3,m,1,0,"i",27),l.Gc(4,p,1,0,"i",28),l.Sb()}if(2&t){const t=l.ec();l.zb(3),l.kc("ngIf",t.changeIconDown),l.zb(1),l.kc("ngIf",!t.changeIconDown)}}function h(t,e){1&t&&(l.Tb(0,"button",31),l.Tb(1,"label",32),l.Ic(2,"B\xdaSQUEDA"),l.Sb(),l.Sb())}function f(t,e){1&t&&(l.Tb(0,"div",45),l.Ob(1,"img",46),l.Sb())}function v(t,e){if(1&t&&(l.Tb(0,"tr"),l.Tb(1,"td"),l.Ic(2),l.Sb(),l.Tb(3,"td"),l.Ic(4),l.Sb(),l.Tb(5,"td"),l.Ic(6),l.Sb(),l.Sb()),2&t){const t=e.$implicit;l.zb(2),l.Mc("",t.nombre," ",t.apellidoPat," ",t.apellidoMat,""),l.zb(2),l.Jc(t.numEmpleado),l.zb(2),l.Jc(t.puesto)}}function S(t,e){if(1&t&&(l.Tb(0,"div"),l.Tb(1,"table",47),l.Tb(2,"thead"),l.Tb(3,"tr"),l.Tb(4,"th",48),l.Ic(5,"Nombre de empleado"),l.Sb(),l.Tb(6,"th",48),l.Ic(7,"N\xfamero de empleado"),l.Sb(),l.Tb(8,"th",48),l.Ic(9,"Puesto"),l.Sb(),l.Sb(),l.Sb(),l.Tb(10,"tbody"),l.Gc(11,v,7,5,"tr",49),l.Sb(),l.Sb(),l.Sb()),2&t){const t=l.ec(2);l.zb(11),l.kc("ngForOf",t.arreglodetalle)}}function T(t,e){if(1&t){const t=l.Ub();l.Tb(0,"div",33),l.Tb(1,"div",34),l.Tb(2,"button",35),l.ac("click",function(){return l.yc(t),l.ec().aparecemodalito=!1}),l.Tb(3,"span",36),l.Ic(4,"\xd7"),l.Sb(),l.Sb(),l.Tb(5,"div",37),l.Tb(6,"h5",32),l.Ic(7,"ADMINISTRACI\xd3N \xc1REAS Y PUESTOS"),l.Sb(),l.Sb(),l.Ob(8,"hr"),l.Tb(9,"div",38),l.Gc(10,f,2,0,"div",39),l.Gc(11,S,12,1,"div",40),l.Sb(),l.Ob(12,"hr"),l.Tb(13,"div",41),l.Tb(14,"div",42),l.Tb(15,"div",43),l.Tb(16,"button",44),l.ac("click",function(){return l.yc(t),l.ec().aparecemodalito=!1}),l.Ic(17,"Cerrar"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb()}if(2&t){const t=l.ec();l.Dc("top",t.scrolly)("width",t.modalWidth),l.zb(10),l.kc("ngIf",t.cargandodetallearea),l.zb(1),l.kc("ngIf",!t.cargandodetallearea)}}const C=function(t){return{show:t}};let I=(()=>{class t{constructor(t,e,o,a){this.routerPrd=t,this.puestosProd=e,this.CanRouterPrd=o,this.modalPrd=a,this.insertar=!1,this.tamanio=0,this.cargando=!1,this.id_empresa=0,this.id_area=0,this.changeIconDown=!1,this.aparecemodalito=!1,this.scrolly="5%",this.modalWidth="55%",this.cargandodetallearea=!1,this.nombreCorto="",this.arreglotabla={columnas:[],filas:[]},this.arreglo=[],this.arreglodetalle=[]}onResize(t){this.tamanio=t.target.innerWidth}ngOnInit(){let t=document.defaultView;this.tamanio=t.innerWidth,this.cargando=!0,this.CanRouterPrd.params.subscribe(t=>{this.id_empresa=t.id,this.puestosProd.getAllArea(this.id_empresa).subscribe(t=>{let e=[new c.a("nombreCorto","Nombre"),new c.a("nombre","Empresa"),new c.a("count","N\xfamero de empleados")];this.arreglotabla.columnas=e,this.arreglotabla.filas=t.datos,console.log("empresa",this.arreglotabla.filas),this.cargando=!1})})}verdetalle(t){this.cargando=!0,this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"area",null==t?"nuevo":"modifica"],{state:{datos:t}}),this.cargando=!1}eliminar(t){this.objEnviar={areaId:t.areaId,descripcion:t.descripcion,nombreCorto:t.nombreCorto,fechaAlta:t.fechaAlta,esActivo:t.esActivo,centrocClienteId:t.nclCentrocCliente.centrocClienteId},this.modalPrd.showMessageDialog(this.modalPrd.warning,"\xbfDeseas eliminar el \xe1rea?").then(t=>{t&&this.puestosProd.eliminar(this.objEnviar).subscribe(t=>{this.modalPrd.showMessageDialog(t.resultado,t.mensaje),t.resultado&&this.ngOnInit()})})}traerModal(t){let e=document.getElementById("vetanaprincipaltabla");if(this.aparecemodalito=!0,e.getBoundingClientRect().y<-40){let t=e.getBoundingClientRect().y;t=Math.abs(t),this.scrolly=t+100+"px"}else this.scrolly="5%";this.modalWidth=this.tamanio<600?"90%":"55%";let o=t;this.cargandodetallearea=!0,this.puestosProd.getdetalleArea(this.id_empresa,o.areaId).subscribe(t=>{this.cargandodetallearea=!1,this.arreglodetalle=null==t.datos?[]:t.datos})}filtrar(){this.cargando=!0,this.puestosProd.filtrar({nombreCorto:this.nombreCorto,nclCentrocCliente:{nombre:""}}).subscribe(t=>{let e=[new c.a("nombreCorto","Nombre"),new c.a("nombre","Empresa"),new c.a("count","N\xfamero de empleados")];this.arreglotabla.columnas=e,this.arreglotabla.filas=t.datos,this.cargando=!1})}recibirTabla(t){switch(t.type){case"editar":this.verdetalle(t.datos);break;case"ver":this.traerModal(t.datos);break;case"eliminar":this.eliminar(t.datos)}}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(s.e),l.Nb(b.a),l.Nb(s.a),l.Nb(d.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-listapuestos"]],hostBindings:function(t,e){1&t&&l.ac("resize",function(t){return e.onResize(t)},!1,l.xc)},decls:31,vars:12,consts:[[1,"scrooll-designempresa"],["id","accordionFiltro"],["id","accordion"],[1,"card"],["id","headingOne",1,"card-header"],[1,"mb-0"],["style","width: 100%;","class","btn btn-link aparece-movil","data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",3,"click",4,"ngIf"],["class","btn btn-link aparece-desktop-inline-block",4,"ngIf"],["id","collapseOne","aria-labelledby","headingOne","data-parent","#accordion",1,"collapse",3,"ngClass"],[1,"card-body"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-md-6","col-lg-4"],["type","text","placeholder","Nombre de \xe1rea",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-sm","mb-3","text-center","col-12","col-sm-2"],["type","button",1,"btn","btn-primary","button-outlet",3,"click"],[1,"col-10"],["style","z-index: 4;","class","ventanaemergente",3,"top","width",4,"ngIf"],[1,"row","margen"],[1,"col","titulo"],[1,"row",2,"margin","10px"],[1,"col-12","col-lg-12","text-right"],["type","button",1,"btn","btn-light","button-outlet",3,"click"],[1,"fa","fa-plus"],["id","vetanaprincipaltabla",1,"row","margen","margen-tabla","background-panel","scrooll",2,"position","relative"],[3,"datos","ver","editar","eliminar","cargando","salida"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"btn","btn-link","aparece-movil",2,"width","100%",3,"click"],[1,"titulo",2,"width","80%","float","left","text-align","left"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-up ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-down ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-up",2,"width","10%","float","right","color","#00C1AF"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-down",2,"width","10%","float","right","color","#00C1AF"],[1,"btn","btn-link","aparece-desktop-inline-block"],[1,"titulo"],[1,"ventanaemergente",2,"z-index","4"],[1,"adentro"],["type","button","data-dismiss","modal","aria-label","Close",1,"close","btnclosemodal",3,"click"],["aria-hidden","true"],[1,"header"],[1,"body"],["class","col text-center mb-5",4,"ngIf"],[4,"ngIf"],[1,"footer"],[1,"row"],[1,"col-12","text-center"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading",3,"click"],[1,"col","text-center","mb-5"],["width","60px","height","60px","src","assets/imgs/loading_nomina.gif","alt",""],[1,"table","m-3","table-hober","table-sm",2,"width","90%"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(l.Ob(0,"br"),l.Tb(1,"div",0),l.Tb(2,"div"),l.Tb(3,"div",1),l.Tb(4,"div",2),l.Tb(5,"div",3),l.Tb(6,"div",4),l.Tb(7,"h5",5),l.Gc(8,g,5,2,"button",6),l.Gc(9,h,3,0,"button",7),l.Sb(),l.Sb(),l.Tb(10,"div",8),l.Tb(11,"div",9),l.Tb(12,"div",10),l.Tb(13,"div",11),l.Tb(14,"input",12),l.ac("ngModelChange",function(t){return e.nombreCorto=t}),l.Sb(),l.Sb(),l.Tb(15,"div",13),l.Tb(16,"button",14),l.ac("click",function(){return e.filtrar()}),l.Ic(17,"FILTRAR"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(18,"div",15),l.Gc(19,T,18,6,"div",16),l.Sb(),l.Tb(20,"div",17),l.Tb(21,"div",18),l.Tb(22,"label"),l.Ic(23,"RESULTADOS"),l.Sb(),l.Sb(),l.Tb(24,"div",19),l.Tb(25,"div",20),l.Tb(26,"button",21),l.ac("click",function(){return e.verdetalle(void 0)}),l.Ob(27,"i",22),l.Ic(28," Agregar \xe1rea "),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(29,"div",23),l.Tb(30,"app-tablapaginado",24),l.ac("salida",function(t){return e.recibirTabla(t)}),l.Sb(),l.Sb(),l.Sb()),2&t&&(l.zb(8),l.kc("ngIf",e.tamanio<600),l.zb(1),l.kc("ngIf",e.tamanio>=600),l.zb(1),l.kc("ngClass",l.oc(10,C,e.tamanio>600)),l.zb(4),l.kc("ngModel",e.nombreCorto),l.zb(5),l.kc("ngIf",e.aparecemodalito),l.zb(11),l.kc("datos",e.arreglotabla)("ver",!0)("editar",!0)("eliminar",!0)("cargando",e.cargando))},directives:[r.m,r.k,a.b,a.l,a.o,u.a,r.l],styles:[".button-outlet[_ngcontent-%COMP%]{background-color:initial!important}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}.contenedorDiv[_ngcontent-%COMP%]   .consulta[_ngcontent-%COMP%]{width:100%;height:auto;left:0}.ventanaemergente[_ngcontent-%COMP%]{z-index:1;display:block;overflow:auto;padding:4%;width:50%;border-radius:5px;border:1px solid #666;height:auto;background-color:#fff!important;box-shadow:5px 2px 5px 1px rgba(0,0,0,.42);left:5%;position:absolute}.ventanaemergente[_ngcontent-%COMP%]   .btnclosemodal[_ngcontent-%COMP%]{top:0!important;position:absolute!important;right:11px!important}.ventanaemergente[_ngcontent-%COMP%]   .btnclosemodal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#56dfd4;font-size:x-large}"]}),t})();var P=o("dkea");const O=["nombre"];function k(t,e){1&t&&(l.Tb(0,"div",34),l.Ob(1,"img",35),l.Sb())}function y(t,e){if(1&t&&(l.Tb(0,"tr"),l.Tb(1,"td"),l.Ic(2),l.Sb(),l.Sb()),2&t){const t=e.$implicit;l.zb(2),l.Jc(t.nombreCorto)}}function w(t,e){if(1&t&&(l.Tb(0,"div"),l.Tb(1,"table",36),l.Tb(2,"thead"),l.Tb(3,"tr"),l.Tb(4,"th",37),l.Ic(5,"Nombre de \xe1rea"),l.Sb(),l.Sb(),l.Sb(),l.Tb(6,"tbody"),l.Gc(7,y,3,1,"tr",38),l.Sb(),l.Sb(),l.Sb()),2&t){const t=l.ec(2);l.zb(7),l.kc("ngForOf",t.arreglodetalle)}}function x(t,e){if(1&t){const t=l.Ub();l.Tb(0,"div",22),l.Tb(1,"div",23),l.Tb(2,"button",24),l.ac("click",function(){return l.yc(t),l.ec().aparecemodalito=!1}),l.Tb(3,"span",25),l.Ic(4,"\xd7"),l.Sb(),l.Sb(),l.Tb(5,"div",26),l.Tb(6,"h5",7),l.Ic(7,"LISTA DE \xc1REAS"),l.Sb(),l.Sb(),l.Ob(8,"hr"),l.Tb(9,"div",27),l.Gc(10,k,2,0,"div",28),l.Gc(11,w,8,1,"div",29),l.Sb(),l.Ob(12,"hr"),l.Tb(13,"div",30),l.Tb(14,"div",31),l.Tb(15,"div",32),l.Tb(16,"button",33),l.ac("click",function(){return l.yc(t),l.ec().aparecemodalito=!1}),l.Ic(17,"Cerrar"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb()}if(2&t){const t=l.ec();l.Dc("top",t.scrolly)("width",t.modalWidth),l.zb(10),l.kc("ngIf",t.cargandolistapuesto),l.zb(1),l.kc("ngIf",!t.cargandolistapuesto)}}function _(t,e){1&t&&(l.Tb(0,"div",39),l.Ic(1," Campor requerido "),l.Sb())}function M(t,e){1&t&&(l.Tb(0,"div",39),l.Ic(1," Campor requerido "),l.Sb())}function z(t,e){1&t&&(l.Tb(0,"div",39),l.Ic(1," Campo requerido "),l.Sb())}const F=function(t){return{"is-invalid":t}};function A(t,e){if(1&t&&(l.Tb(0,"div",40),l.Tb(1,"label",10),l.Ic(2,"Puesto *"),l.Sb(),l.Ob(3,"input",41),l.Gc(4,z,2,0,"div",12),l.Sb()),2&t){const t=l.ec();l.zb(3),l.kc("ngClass",l.oc(2,F,t.f.puesto.errors&&t.submitEnviado)),l.zb(1),l.kc("ngIf",t.f.puesto.errors&&t.submitEnviado)}}function D(t,e){if(1&t){const t=l.Ub();l.Tb(0,"tr"),l.Tb(1,"td"),l.Ic(2),l.Sb(),l.Tb(3,"td"),l.Ic(4),l.Sb(),l.Tb(5,"td"),l.Tb(6,"button",58),l.ac("click",function(){l.yc(t);const o=e.$implicit;return l.ec(3).verdetalle(o)}),l.Ob(7,"i",59),l.Sb(),l.Sb(),l.Sb()}if(2&t){const t=e.$implicit;l.zb(2),l.Jc(t.nombreCorto),l.zb(2),l.Jc(t.fechaAlta)}}function E(t,e){if(1&t&&(l.Tb(0,"table",57),l.Tb(1,"thead"),l.Tb(2,"tr"),l.Tb(3,"th",37),l.Ic(4,"Nombre de puesto"),l.Sb(),l.Tb(5,"th",37),l.Ic(6,"Fecha registro"),l.Sb(),l.Tb(7,"th",37),l.Ic(8,"Acciones"),l.Sb(),l.Sb(),l.Sb(),l.Tb(9,"tbody"),l.Gc(10,D,8,2,"tr",38),l.Sb(),l.Sb()),2&t){const t=l.ec(2);l.zb(10),l.kc("ngForOf",t.arreglo)}}function N(t,e){1&t&&(l.Tb(0,"div",60),l.Tb(1,"div",61),l.Tb(2,"nav",62),l.Tb(3,"ul",63),l.Tb(4,"li",64),l.Tb(5,"a",65),l.Ic(6,"Antes"),l.Sb(),l.Sb(),l.Tb(7,"li",66),l.Tb(8,"a",67),l.Ic(9,"1"),l.Sb(),l.Sb(),l.Tb(10,"li",66),l.Tb(11,"a",67),l.Ic(12,"2"),l.Sb(),l.Sb(),l.Tb(13,"li",66),l.Tb(14,"a",67),l.Ic(15,"3"),l.Sb(),l.Sb(),l.Tb(16,"li",66),l.Tb(17,"a",67),l.Ic(18,"Siguiente"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb())}function G(t,e){1&t&&(l.Tb(0,"div",34),l.Ob(1,"img",35),l.Sb())}function R(t,e){if(1&t){const t=l.Ub();l.Tb(0,"div",42),l.Tb(1,"div"),l.Ob(2,"br"),l.Tb(3,"div",6),l.Tb(4,"label",7),l.Ic(5,"PUESTOS EXISTENTES"),l.Sb(),l.Sb(),l.Tb(6,"div",6),l.Tb(7,"div",43),l.Tb(8,"div",44),l.Tb(9,"button",45),l.ac("click",function(){return l.yc(t),l.ec().verdetalle(void 0)}),l.Ob(10,"i",46),l.Ic(11,"Agregar puesto "),l.Sb(),l.Sb(),l.Sb(),l.Tb(12,"div",47),l.Tb(13,"div",48),l.Tb(14,"div",49),l.Tb(15,"label",50),l.Ic(16,"Elementos"),l.Sb(),l.Sb(),l.Tb(17,"select",51),l.Tb(18,"option",52),l.Ic(19,"20"),l.Sb(),l.Tb(20,"option",53),l.Ic(21,"50"),l.Sb(),l.Tb(22,"option",54),l.Ic(23,"100"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Gc(24,E,11,1,"table",55),l.Gc(25,N,19,0,"div",56),l.Gc(26,G,2,0,"div",28),l.Sb(),l.Sb(),l.Sb()}if(2&t){const t=l.ec();l.zb(24),l.kc("ngIf",!t.cargando),l.zb(1),l.kc("ngIf",!t.cargando),l.zb(1),l.kc("ngIf",t.cargando)}}const B=["nombre"];function q(t,e){1&t&&(l.Tb(0,"div",34),l.Ob(1,"img",35),l.Sb())}function U(t,e){if(1&t&&(l.Tb(0,"tr"),l.Tb(1,"td"),l.Ic(2),l.Sb(),l.Sb()),2&t){const t=e.$implicit;l.zb(2),l.Jc(t.nombreCorto)}}function j(t,e){if(1&t&&(l.Tb(0,"div"),l.Tb(1,"table",36),l.Tb(2,"thead"),l.Tb(3,"tr"),l.Tb(4,"th",37),l.Ic(5,"Nombre de puesto"),l.Sb(),l.Sb(),l.Sb(),l.Tb(6,"tbody"),l.Gc(7,U,3,1,"tr",38),l.Sb(),l.Sb(),l.Sb()),2&t){const t=l.ec(2);l.zb(7),l.kc("ngForOf",t.arreglodetalle)}}function L(t,e){if(1&t){const t=l.Ub();l.Tb(0,"div",22),l.Tb(1,"div",23),l.Tb(2,"button",24),l.ac("click",function(){return l.yc(t),l.ec().aparecemodalito=!1}),l.Tb(3,"span",25),l.Ic(4,"\xd7"),l.Sb(),l.Sb(),l.Tb(5,"div",26),l.Tb(6,"h5",7),l.Ic(7,"LISTA DE PUESTOS"),l.Sb(),l.Sb(),l.Ob(8,"hr"),l.Tb(9,"div",27),l.Gc(10,q,2,0,"div",28),l.Gc(11,j,8,1,"div",29),l.Sb(),l.Ob(12,"hr"),l.Tb(13,"div",30),l.Tb(14,"div",31),l.Tb(15,"div",32),l.Tb(16,"button",33),l.ac("click",function(){return l.yc(t),l.ec().aparecemodalito=!1}),l.Ic(17,"Cerrar"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb()}if(2&t){const t=l.ec();l.Dc("top",t.scrolly)("width",t.modalWidth),l.zb(10),l.kc("ngIf",t.cargandolistapuesto),l.zb(1),l.kc("ngIf",!t.cargandolistapuesto)}}function W(t,e){1&t&&(l.Tb(0,"div",39),l.Ic(1," Campo requerido "),l.Sb())}function J(t,e){1&t&&(l.Tb(0,"div",39),l.Ic(1," Campo requerido "),l.Sb())}function Q(t,e){1&t&&(l.Tb(0,"div",39),l.Ic(1," Campo requerido "),l.Sb())}const V=function(t){return{"is-invalid":t}},X=[{path:"",children:[{path:"area",component:I},{path:"area/:tipoinsert",component:(()=>{class t{constructor(t,e,o,a,r){this.formBuilder=t,this.puestosPrd=e,this.routerActivePrd=o,this.routerPrd=a,this.modalPrd=r,this.arreglo=[],this.arreglodetalle=[],this.modalpuesto=!1,this.insertar=!1,this.listpuesto=!0,this.cargando=!1,this.tamanio=0,this.id_empresa=0,this.nom_empresa="",this.puestoIdReporta=2,this.puestonuevo=!1,this.aparecemodalito=!1,this.scrolly="5%",this.modalWidth="55%",this.cargandolistapuesto=!1,this.submitEnviado=!1,this.routerActivePrd.params.subscribe(t=>{this.insertar="nuevo"==t.tipoinsert,this.id_empresa=t.id})}ngOnInit(){this.areas=null==history.state.datos?{}:history.state.datos,this.puestosPrd.getAllCompany(this.id_empresa).subscribe(t=>{this.empresas=t.datos,null!=this.empresas&&(this.nom_empresa=this.empresas.nombre,this.insertar?this.myForm=this.createForm(this.areas):(this.myForm=this.createFormMod(this.areas),this.puestonuevo=!0))}),console.log(this.areas),this.insertar?this.myForm=this.createForm(this.areas):(this.myForm=this.createFormMod(this.areas),this.listaPuestos(),this.listpuesto=!1)}ngAfterViewInit(){this.nombre.nativeElement.focus()}createForm(t){return this.formBuilder.group({nombre:[{value:this.nom_empresa,disabled:this.insertar},[a.w.required]],nombreCorto:[t.nombreCorto,[a.w.required]],puesto:[t.puesto,[a.w.required]],areaId:t.areaId})}createFormMod(t){return this.formBuilder.group({nombre:[{value:this.nom_empresa,disabled:!this.insertar},[a.w.required]],nombreCorto:[t.nombreCorto,[a.w.required]],areaId:t.areaId})}listaPuestos(){this.puestosPrd.getListPues(this.id_empresa,this.areas.areaId).subscribe(t=>{if(this.cargando=!0,this.arreglo=t.datos,void 0!==this.arreglo)for(let e of this.arreglo){e.fechaAlta=new Date(e.fechaAlta).toUTCString().replace(" 00:00:00 GMT","");let t=new r.f("es-MX");e.fechaAlta=t.transform(e.fechaAlta,"dd-MMM-y")}this.cargando=!1})}traerModal(t){let e=document.getElementById("vetanaprincipaltablapuesto");if(this.aparecemodalito=!0,e.getBoundingClientRect().y<-40){let t=e.getBoundingClientRect().y;t=Math.abs(t),this.scrolly=t+100+"px"}else this.scrolly="5%";this.modalWidth=this.tamanio<600?"90%":"55%",this.cargandolistapuesto=!0,this.puestosPrd.getAllArea(this.id_empresa).subscribe(t=>{this.cargandolistapuesto=!1,this.arreglodetalle=null==t.datos?[]:t.datos})}verdetalle(t){this.cargando=!0,this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"puestos",null==t?"nuevo":"modifica"],{state:{datos:this.areas,data:t}}),this.cargando=!1}enviarPeticion(){this.submitEnviado=!0,this.myForm.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.insertar?"\xbfDeseas registrar el \xe1rea?":"\xbfDeseas actualizar los datos del \xe1rea?").then(t=>{if(t){let t=this.myForm.value,e={descripcion:t.nombreCorto,nombreCorto:t.nombreCorto,centrocClienteId:this.id_empresa,nclPuestoDto:[{descripcion:t.puesto,nombreCorto:t.puesto,centrocClienteId:this.id_empresa}]};this.insertar?this.puestosPrd.save(e).subscribe(t=>{this.modalPrd.showMessageDialog(t.resultado,t.mensaje).then(()=>{t.resultado&&this.routerPrd.navigate(["/empresa/detalle/"+this.id_empresa+"/area"])})}):this.puestosPrd.modificar({areaId:t.areaId,descripcion:t.nombreCorto,nombreCorto:t.nombreCorto,centrocClienteId:this.id_empresa,nclPuestoDto:[]}).subscribe(t=>{this.modalPrd.showMessageDialog(t.resultado,t.mensaje).then(()=>{t.resultado&&this.routerPrd.navigate(["/empresa/detalle/"+this.id_empresa+"/area"])})})}})}redirect(t){this.routerPrd.navigate(["/empresa/detalle/"+this.id_empresa+"/area"])}get f(){return this.myForm.controls}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(a.c),l.Nb(b.a),l.Nb(s.a),l.Nb(s.e),l.Nb(d.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-detallepuestos"]],viewQuery:function(t,e){if(1&t&&l.Oc(O,!0),2&t){let t;l.uc(t=l.bc())&&(e.nombre=t.first)}},decls:37,vars:13,consts:[[1,"col-7"],["class","ventanaemergente",3,"top","width",4,"ngIf"],[1,"form-desing",3,"formGroup","ngSubmit"],["type","hidden","formControlName","areaId"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar",3,"pixeles"],["id","vetanaprincipaltablapuesto",1,"background-panel","scrooll",2,"position","relative"],[1,"form-group","row","margen"],[1,"titulo"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-10"],["for","exampleFormControlSelect1"],["formControlName","nombre","type","text","placeholder","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"input-group-sm","mb-3","col-12","col-sm-12","col-md-6","col-lg-4","col-xl-4"],["formControlName","nombreCorto","type","text","maxlength","250","placeholder","",1,"form-control",3,"ngClass"],["nombre",""],["routerlinkactive","active","routerlink","/home",2,"text-decoration","underline","color","#00c2c3",3,"click"],["class","input-group-sm mb-3 col-12 col-sm-6 col-lg-4",4,"ngIf"],["class","row margen scrooll",4,"ngIf"],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"eventoFunciones","click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"ventanaemergente"],[1,"adentro"],["type","button","data-dismiss","modal","aria-label","Close",1,"close","btnclosemodal",3,"click"],["aria-hidden","true"],[1,"header"],[1,"body"],["class","col text-center mb-5",4,"ngIf"],[4,"ngIf"],[1,"footer"],[1,"row"],[1,"col-12","text-center"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading",3,"click"],[1,"col","text-center","mb-5"],["width","60px","height","60px","src","assets/imgs/loading_nomina.gif","alt",""],[1,"table","m-3","table-hober","table-sm",2,"width","90%"],["scope","col"],[4,"ngFor","ngForOf"],[1,"invalid-feedback"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-4"],["formControlName","puesto","maxlength","250","type","text","placeholder","",1,"form-control",3,"ngClass"],[1,"row","margen","scrooll"],[1,"row",2,"margin-top","10px","width","100%"],[1,"col","text-right"],["type","button",1,"btn","btn-light","button-outlet",3,"click"],[1,"fa","fa-plus"],[1,"row","margen",2,"margin-bottom","-25px"],[1,"input-group","mb-5"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["id","inputGroupSelect01",1,"custom-select"],["value","1","selected",""],["value","2"],["value","3"],["class","table table-hover",4,"ngIf"],["class","row","style","width: 100%;",4,"ngIf"],[1,"table","table-hover"],[1,"btnPersonalizado",3,"click"],[1,"icon_editar","text-center","bg-light"],[1,"row",2,"width","100%"],[1,"col"],["aria-label","Page navigation example"],[1,"pagination","justify-content-center"],[1,"page-item","disabled"],["href","#","tabindex","-1","aria-disabled","true",1,"page-link"],[1,"page-item"],[1,"page-link"]],template:function(t,e){1&t&&(l.Ob(0,"br"),l.Tb(1,"div",0),l.Gc(2,x,18,6,"div",1),l.Sb(),l.Ob(3,"br"),l.Ob(4,"br"),l.Tb(5,"form",2),l.ac("ngSubmit",function(){return e.enviarPeticion()}),l.Ob(6,"input",3),l.Tb(7,"div",4),l.Tb(8,"div",5),l.Ob(9,"br"),l.Tb(10,"div",6),l.Tb(11,"label",7),l.Ic(12,"INFORMACI\xd3N DE \xc1REAS"),l.Sb(),l.Sb(),l.Tb(13,"div",8),l.Tb(14,"div",9),l.Tb(15,"label",10),l.Ic(16,"Empresa *"),l.Sb(),l.Ob(17,"input",11),l.Gc(18,_,2,0,"div",12),l.Sb(),l.Tb(19,"div",13),l.Tb(20,"label"),l.Ic(21,"\xc1rea *"),l.Sb(),l.Ob(22,"input",14,15),l.Gc(24,M,2,0,"div",12),l.Ob(25,"br"),l.Tb(26,"nav"),l.Tb(27,"a",16),l.ac("click",function(){return e.traerModal(void 0)}),l.Ic(28," Consultar \xe1reas existentes"),l.Sb(),l.Sb(),l.Sb(),l.Gc(29,A,5,4,"div",17),l.Sb(),l.Ob(30,"hr"),l.Gc(31,R,27,3,"div",18),l.Sb(),l.Sb(),l.Tb(32,"div",19),l.Tb(33,"button",20),l.ac("eventoFunciones",function(t){return e.redirect(t)})("click",function(){return e.redirect(void 0)}),l.Ic(34,"Cancelar"),l.Sb(),l.Tb(35,"button",21),l.Ic(36,"Guardar"),l.Sb(),l.Sb(),l.Sb()),2&t&&(l.zb(2),l.kc("ngIf",e.aparecemodalito),l.zb(3),l.kc("formGroup",e.myForm),l.zb(2),l.kc("pixeles",340),l.zb(10),l.kc("ngClass",l.oc(9,F,e.f.nombre.errors&&e.submitEnviado)),l.zb(1),l.kc("ngIf",e.f.nombre.errors&&e.submitEnviado),l.zb(4),l.kc("ngClass",l.oc(11,F,e.f.nombreCorto.errors&&e.submitEnviado)),l.zb(2),l.kc("ngIf",e.f.nombreCorto.errors&&e.submitEnviado),l.zb(5),l.kc("ngIf",e.listpuesto),l.zb(2),l.kc("ngIf",e.puestonuevo))},directives:[r.m,a.y,a.m,a.f,a.b,a.l,a.e,P.a,r.k,a.h,r.l,a.p,a.x],styles:[".button-outlet[_ngcontent-%COMP%]{background-color:initial!important}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}.contenedorDiv[_ngcontent-%COMP%]   .consulta[_ngcontent-%COMP%]{width:100%;height:auto;left:0}.ventanaemergente[_ngcontent-%COMP%]{z-index:1;display:block;overflow:auto;padding:4%;width:50%;border-radius:5px;border:1px solid #666;height:auto;background-color:#fff!important;box-shadow:5px 2px 5px 1px rgba(0,0,0,.42);left:5%;position:absolute}.ventanaemergente[_ngcontent-%COMP%]   .btnclosemodal[_ngcontent-%COMP%]{top:0!important;position:absolute!important;right:11px!important}.ventanaemergente[_ngcontent-%COMP%]   .btnclosemodal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#56dfd4;font-size:x-large}"]}),t})()},{path:"puestos/:tipoinsert",component:(()=>{class t{constructor(t,e,o,a,r){this.formBuilder=t,this.puestosPrd=e,this.routerActivePrd=o,this.routerPrd=a,this.modalPrd=r,this.arreglo=[],this.puestoId="",this.puesto="",this.arreglodetalle=[],this.insertar=!1,this.listpuesto=!0,this.cargando=!1,this.tamanio=0,this.id_empresa=0,this.nom_empresa="",this.puestoIdReporta=2,this.submitEnviado=!1,this.aparecemodalito=!1,this.scrolly="5%",this.modalWidth="55%",this.cargandolistapuesto=!1,this.bloqueado=!1,this.routerActivePrd.params.subscribe(t=>{this.insertar="nuevo"==t.tipoinsert,this.id_empresa=t.id})}ngOnInit(){this.areas=null==history.state.datos?{}:history.state.datos,this.puestos=null==history.state.data?{}:history.state.data,this.insertar||(this.puesto=this.puestos.nombreCorto),this.bloqueado=!0,this.puestosPrd.getAllCompany(this.id_empresa).subscribe(t=>{this.empresas=t.datos,null!=this.empresas&&(this.nom_empresa=this.empresas.nombre,this.myForm=this.createForm(this.areas),this.listaPuestos())}),this.myForm=this.createForm(this.areas)}ngAfterViewInit(){this.nombre.nativeElement.focus()}createForm(t){return this.formBuilder.group({nombre:[{value:this.nom_empresa,disabled:this.bloqueado},[a.w.required]],nombreCorto:[{value:t.nombreCorto,disabled:this.bloqueado},[a.w.required]],puesto:[this.puesto],areaId:t.areaId})}listaPuestos(){this.puestosPrd.getListPues(this.id_empresa,this.areas.areaId).subscribe(t=>{this.cargando=!0,this.arreglo=t.datos,this.cargando=!1})}traerModal(t){let e=document.getElementById("vetanaprincipaltablapuesto");if(this.aparecemodalito=!0,e.getBoundingClientRect().y<-40){let t=e.getBoundingClientRect().y;t=Math.abs(t),this.scrolly=t+100+"px"}else this.scrolly="5%";this.modalWidth=this.tamanio<600?"90%":"55%",this.cargandolistapuesto=!0,this.puestosPrd.getListPues(this.id_empresa,this.areas.areaId).subscribe(t=>{this.cargandolistapuesto=!1,this.arreglodetalle=null==t.datos?[]:t.datos})}enviarPeticion(){this.submitEnviado=!0,this.myForm.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.insertar?"\xbfDeseas registrar el puesto?":"\xbfDeseas actualizar los datos del puesto?").then(t=>{if(t){let t=this.myForm.value,e={areaId:t.areaId,centrocClienteId:this.id_empresa,nclPuestoDto:[{descripcion:t.puesto,nombreCorto:t.puesto,centrocClienteId:this.id_empresa}]};this.insertar?this.puestosPrd.savepuest(e).subscribe(t=>{this.modalPrd.showMessageDialog(t.resultado,t.mensaje).then(()=>{t.resultado&&this.routerPrd.navigate(["/empresa/detalle/"+this.id_empresa+"/area/modifica"],{state:{datos:this.areas}})})}):this.puestosPrd.modificar({areaId:t.areaId,descripcion:this.areas.descripcion,nombreCorto:this.areas.nombreCorto,centrocClienteId:this.id_empresa,nclPuestoDto:[{puestoId:this.puestos.puestoId,descripcion:t.puesto,nombreCorto:t.puesto,centrocClienteId:this.id_empresa}]}).subscribe(t=>{this.modalPrd.showMessageDialog(t.resultado,t.mensaje).then(()=>{t.resultado&&this.routerPrd.navigate(["/empresa/detalle/"+this.id_empresa+"/area/modifica"],{state:{datos:this.areas}})})})}})}redirect(t){this.routerPrd.navigate(["/empresa/detalle/"+this.id_empresa+"/area/modifica"],{state:{datos:this.areas}})}get f(){return this.myForm.controls}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(a.c),l.Nb(b.a),l.Nb(s.a),l.Nb(s.e),l.Nb(d.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-detallepuestosarea"]],viewQuery:function(t,e){if(1&t&&l.Oc(B,!0),2&t){let t;l.uc(t=l.bc())&&(e.nombre=t.first)}},decls:39,vars:15,consts:[[1,"col-7"],["class","ventanaemergente",3,"top","width",4,"ngIf"],[1,"form-desing",3,"formGroup","ngSubmit"],["type","hidden","formControlName","areaId"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar",3,"pixeles"],["id","vetanaprincipaltablapuesto",1,"background-panel","scrooll",2,"position","relative"],[1,"form-group","row","margen"],[1,"titulo"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-10"],["for","exampleFormControlSelect1"],["formControlName","nombre","type","text","placeholder","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"input-group-sm","mb-3","col-12","col-sm-12","col-md-6","col-lg-4","col-xl-4"],["formControlName","nombreCorto","type","text","maxlength","250","placeholder","",1,"form-control",3,"ngClass"],["routerlinkactive","active","routerlink","/home",2,"text-decoration","underline","color","#00c2c3",3,"click"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-4"],["formControlName","puesto","maxlength","250","type","text","placeholder","",1,"form-control",3,"ngClass"],["nombre",""],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"eventoFunciones","click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"ventanaemergente"],[1,"adentro"],["type","button","data-dismiss","modal","aria-label","Close",1,"close","btnclosemodal",3,"click"],["aria-hidden","true"],[1,"header"],[1,"body"],["class","col text-center mb-5",4,"ngIf"],[4,"ngIf"],[1,"footer"],[1,"row"],[1,"col-12","text-center"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading",3,"click"],[1,"col","text-center","mb-5"],["width","60px","height","60px","src","assets/imgs/loading_nomina.gif","alt",""],[1,"table","m-3","table-hober","table-sm",2,"width","90%"],["scope","col"],[4,"ngFor","ngForOf"],[1,"invalid-feedback"]],template:function(t,e){1&t&&(l.Ob(0,"br"),l.Tb(1,"div",0),l.Gc(2,L,18,6,"div",1),l.Sb(),l.Ob(3,"br"),l.Ob(4,"br"),l.Tb(5,"form",2),l.ac("ngSubmit",function(){return e.enviarPeticion()}),l.Ob(6,"input",3),l.Tb(7,"div",4),l.Tb(8,"div",5),l.Ob(9,"br"),l.Tb(10,"div",6),l.Tb(11,"label",7),l.Ic(12,"INFORMACI\xd3N DE PUESTOS"),l.Sb(),l.Sb(),l.Tb(13,"div",8),l.Tb(14,"div",9),l.Tb(15,"label",10),l.Ic(16,"Empresa *"),l.Sb(),l.Ob(17,"input",11),l.Gc(18,W,2,0,"div",12),l.Sb(),l.Tb(19,"div",13),l.Tb(20,"label"),l.Ic(21,"\xc1rea *"),l.Sb(),l.Ob(22,"input",14),l.Gc(23,J,2,0,"div",12),l.Ob(24,"br"),l.Tb(25,"nav"),l.Tb(26,"a",15),l.ac("click",function(){return e.traerModal(void 0)}),l.Ic(27," Consultar puestos existentes"),l.Sb(),l.Sb(),l.Sb(),l.Tb(28,"div",16),l.Tb(29,"label",10),l.Ic(30,"Puesto *"),l.Sb(),l.Ob(31,"input",17,18),l.Gc(33,Q,2,0,"div",12),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(34,"div",19),l.Tb(35,"button",20),l.ac("eventoFunciones",function(t){return e.redirect(t)})("click",function(){return e.redirect(void 0)}),l.Ic(36,"Cancelar"),l.Sb(),l.Tb(37,"button",21),l.Ic(38,"Guardar"),l.Sb(),l.Sb(),l.Sb()),2&t&&(l.zb(2),l.kc("ngIf",e.aparecemodalito),l.zb(3),l.kc("formGroup",e.myForm),l.zb(2),l.kc("pixeles",340),l.zb(10),l.kc("ngClass",l.oc(9,V,e.f.nombre.errors&&e.f.nombre.touched)),l.zb(1),l.kc("ngIf",e.f.nombre.errors&&e.f.nombre.touched),l.zb(4),l.kc("ngClass",l.oc(11,V,e.f.nombreCorto.errors&&e.f.nombreCorto.touched)),l.zb(1),l.kc("ngIf",e.f.nombreCorto.errors&&e.f.nombreCorto.touched),l.zb(8),l.kc("ngClass",l.oc(13,V,e.f.puesto.errors&&e.f.puesto.touched)),l.zb(2),l.kc("ngIf",e.f.puesto.errors&&e.f.puesto.touched))},directives:[r.m,a.y,a.m,a.f,a.b,a.l,a.e,P.a,r.k,a.h,r.l],styles:[".button-outlet[_ngcontent-%COMP%]{background-color:initial!important}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}.contenedorDiv[_ngcontent-%COMP%]   .consulta[_ngcontent-%COMP%]{width:100%;height:auto;left:0}.ventanaemergente[_ngcontent-%COMP%]{z-index:1;display:block;overflow:auto;padding:4%;width:50%;border-radius:5px;border:1px solid #666;height:auto;background-color:#fff!important;box-shadow:5px 2px 5px 1px rgba(0,0,0,.42);left:5%;position:absolute}.ventanaemergente[_ngcontent-%COMP%]   .btnclosemodal[_ngcontent-%COMP%]{top:0!important;position:absolute!important;right:11px!important}.ventanaemergente[_ngcontent-%COMP%]   .btnclosemodal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#56dfd4;font-size:x-large}"]}),t})()}]}];let $=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(X)]]}),t})(),H=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},imports:[[r.c,$,n.a,a.g,a.u,i.a]]}),t})()}}]);