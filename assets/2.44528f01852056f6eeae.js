(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{DpdX:function(e,t,n){"use strict";n.d(t,"a",function(){return i});class i{constructor(e,t,n=!1,i=!1){this.esId=!1,this.eventoclick=!1,this.id=e,this.nombre=t,this.esId=n,this.eventoclick=i}}},JBW2:function(e,t,n){"use strict";n.d(t,"a",function(){return M});var i=n("fXoL"),a=n("ofXK"),r=n("3Pt+");function o(e,t){if(1&e){const e=i.Ub();i.Tb(0,"div",5),i.Tb(1,"div",6),i.Tb(2,"div",7),i.Tb(3,"label",8),i.Ic(4,"Elementos"),i.Sb(),i.Sb(),i.Tb(5,"select",9),i.ac("ngModelChange",function(t){return i.yc(e),i.ec().numeroitems=t})("change",function(){return i.yc(e),i.ec().cambia()}),i.Tb(6,"option",10),i.Ic(7,"5"),i.Sb(),i.Tb(8,"option",11),i.Ic(9,"20"),i.Sb(),i.Tb(10,"option",12),i.Ic(11,"50"),i.Sb(),i.Tb(12,"option",13),i.Ic(13,"100"),i.Sb(),i.Sb(),i.Sb(),i.Sb()}if(2&e){const e=i.ec();i.zb(5),i.kc("ngModel",e.numeroitems)}}function c(e,t){1&e&&i.Ob(0,"th")}const s=function(e){return{ocultarcolumna:e}};function l(e,t){if(1&e&&(i.Tb(0,"th",18),i.Ic(1),i.Sb()),2&e){const e=t.$implicit;i.kc("ngClass",i.oc(2,s,"url"==e.id||"porcentaje"==e.id)),i.zb(1),i.Kc(" ",e.nombre,"")}}function g(e,t){1&e&&(i.Tb(0,"th"),i.Ic(1,"Porcentaje de avance"),i.Sb())}function u(e,t){1&e&&(i.Tb(0,"th"),i.Ic(1,"Acciones"),i.Sb())}function b(e,t){if(1&e&&i.Ob(0,"img",26),2&e){const e=i.ec(2).$implicit;i.kc("src",e.url,i.Ac)}}function m(e,t){if(1&e&&i.Ob(0,"img",26),2&e){const e=i.ec(4);i.kc("src",e.rutaimagenes[e.icondefault],i.Ac)}}function f(e,t){if(1&e&&(i.Tb(0,"td",24),i.Gc(1,b,1,1,"img",25),i.Gc(2,m,1,1,"img",25),i.Sb()),2&e){const e=i.ec().$implicit;i.zb(1),i.kc("ngIf",e.url),i.zb(1),i.kc("ngIf",null==e.url)}}const p=function(e,t){return{estiloid:e,ocultarcolumna:t}};function d(e,t){if(1&e){const e=i.Ub();i.Tb(0,"td",27),i.ac("click",function(){i.yc(e);const n=t.$implicit,a=i.ec().$implicit;return i.ec(2).eventoclick(n,a)}),i.Ic(1),i.Sb()}if(2&e){const e=t.$implicit,n=i.ec().$implicit;i.kc("ngClass",i.pc(2,p,e.esId,"url"==e.id||"porcentaje"==e.id)),i.zb(1),i.Jc("Estatus"==e.nombre?1==n[e.id]?"Activo":"Inactivo":n[e.id])}}function h(e,t){if(1&e&&(i.Tb(0,"td"),i.Tb(1,"div",28),i.Tb(2,"div",29),i.Ic(3),i.Sb(),i.Sb(),i.Sb()),2&e){const e=i.ec().$implicit;i.zb(2),i.Dc("width",e.porcentaje+"%"),i.zb(1),i.Kc("",e.porcentaje,"%")}}function v(e,t){if(1&e){const e=i.Ub();i.Tb(0,"button",30),i.ac("click",function(){i.yc(e);const t=i.ec().$implicit;return i.ec(2).btnVer(t)}),i.Ob(1,"i",31),i.Sb()}}function I(e,t){if(1&e){const e=i.Ub();i.Tb(0,"button",30),i.ac("click",function(){i.yc(e);const t=i.ec().$implicit;return i.ec(2).btnEditar(t)}),i.Ob(1,"i",32),i.Sb()}}function k(e,t){if(1&e){const e=i.Ub();i.Tb(0,"button",30),i.ac("click",function(){i.yc(e);const t=i.ec().$implicit;return i.ec(2).btnEliminar(t)}),i.Ob(1,"i",33),i.Sb()}}function T(e,t){if(1&e){const e=i.Ub();i.Tb(0,"button",30),i.ac("click",function(){i.yc(e);const t=i.ec().$implicit;return i.ec(2).btnDesglosar(t)}),i.Ob(1,"i",34),i.Sb()}}function S(e,t){if(1&e&&(i.Tb(0,"tr",19),i.Gc(1,f,3,2,"td",20),i.Gc(2,d,2,5,"td",21),i.Gc(3,h,4,3,"td",15),i.Tb(4,"td",22),i.Gc(5,v,2,0,"button",23),i.Gc(6,I,2,0,"button",23),i.Gc(7,k,2,0,"button",23),i.Gc(8,T,2,0,"button",23),i.Sb(),i.Sb()),2&e){const e=i.ec(2);i.zb(1),i.kc("ngIf",e.imagen),i.zb(1),i.kc("ngForOf",e.datos.columnas),i.zb(1),i.kc("ngIf",e.porcentaje),i.zb(2),i.kc("ngIf",e.ver),i.zb(1),i.kc("ngIf",e.editar),i.zb(1),i.kc("ngIf",e.eliminar),i.zb(1),i.kc("ngIf",e.desglosar)}}function y(e,t){if(1&e&&(i.Tb(0,"table",14),i.Tb(1,"thead"),i.Tb(2,"tr"),i.Gc(3,c,1,0,"th",15),i.Gc(4,l,2,4,"th",16),i.Gc(5,g,2,0,"th",15),i.Gc(6,u,2,0,"th",15),i.Sb(),i.Sb(),i.Tb(7,"tbody"),i.Gc(8,S,9,7,"tr",17),i.Sb(),i.Sb()),2&e){const e=i.ec();i.zb(3),i.kc("ngIf",e.imagen),i.zb(1),i.kc("ngForOf",e.datos.columnas),i.zb(1),i.kc("ngIf",e.porcentaje),i.zb(1),i.kc("ngIf",e.ver||e.editar||e.eliminar||e.desglosar),i.zb(2),i.kc("ngForOf",e.arreglo)}}function z(e,t){1&e&&(i.Tb(0,"div",35),i.Tb(1,"strong"),i.Ic(2,"En este momento no existen registros"),i.Sb(),i.Sb())}function w(e,t){1&e&&(i.Tb(0,"li",42),i.Tb(1,"a",43),i.Ic(2,"Anterior"),i.Sb(),i.Sb())}const x=function(e){return{active:e}};function O(e,t){if(1&e){const e=i.Ub();i.Tb(0,"li",44),i.ac("click",function(){i.yc(e);const n=t.$implicit;return i.ec(2).paginacambiar(n)}),i.Tb(1,"a",45),i.Ic(2),i.Sb(),i.Sb()}if(2&e){const e=t.$implicit;i.kc("ngClass",i.oc(2,x,e.activado)),i.zb(2),i.Jc(e.mostrar)}}function G(e,t){1&e&&(i.Tb(0,"li",42),i.Tb(1,"a",45),i.Ic(2,"Siguiente"),i.Sb(),i.Sb())}function C(e,t){if(1&e&&(i.Tb(0,"div",36),i.Tb(1,"div",37),i.Tb(2,"nav",38),i.Tb(3,"ul",39),i.Gc(4,w,3,0,"li",40),i.Gc(5,O,3,4,"li",41),i.Gc(6,G,3,0,"li",40),i.Sb(),i.Sb(),i.Sb(),i.Sb()),2&e){const e=i.ec();i.zb(4),i.kc("ngIf",e.arreglopaginas.length>1),i.zb(1),i.kc("ngForOf",e.arreglopaginas),i.zb(1),i.kc("ngIf",e.arreglopaginas.length>1)}}function U(e,t){1&e&&(i.Tb(0,"div",46),i.Ob(1,"img",47),i.Sb())}let M=(()=>{class e{constructor(){this.cargando=!1,this.arreglo=[],this.numeroitems=20,this.arreglopaginas=[],this.datos={columnas:[],filas:[]},this.porcentaje=!1,this.icondefault="default",this.salida=new i.n,this.arreglotemp=[],this.rutaimagenes={default:"assets/imgs/logo.png",usuario:"assets/imgs/usuario.png",empresa:"assets/imgs/empresa_03.png"}}ngOnInit(){}cambia(){this.paginar()}verdetalle(e){}ngOnChanges(e){void 0!==this.datos.filas?(this.arreglotemp=this.datos.filas,console.log("paginas a paginas",this.arreglotemp),console.log("sdkifjsdf",this.datos),this.paginar()):(this.arreglo=void 0,this.arreglotemp=void 0)}paginar(){if(this.arreglopaginas=[],null!=this.arreglotemp){let e=this.arreglotemp.length/Number(this.numeroitems),t=!0;e=Math.ceil(e);for(let n=1;n<=e;n++)this.arreglopaginas.push({numeropagina:(n-1)*Number(this.numeroitems),llavepagina:(n-1)*Number(this.numeroitems)+Number(this.numeroitems),mostrar:n,activado:t}),t=!1;this.arreglo=this.arreglotemp.slice(0,Number(this.numeroitems))}}paginacambiar(e){this.arreglo=this.arreglotemp.slice(e.numeropagina,e.llavepagina);for(let t of this.arreglopaginas)t.activado=!1;e.activado=!0}btnEditar(e){this.salida.emit({type:"editar",datos:e})}btnEliminar(e){this.salida.emit({type:"eliminar",datos:e})}btnVer(e){this.salida.emit({type:"ver",datos:e})}btnDesglosar(e){this.salida.emit({type:"desglosar",datos:e})}eventoclick(e,t){e.eventoclick&&this.salida.emit({type:"columna",datos:t})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Hb({type:e,selectors:[["app-tablapaginado"]],inputs:{cargando:"cargando",datos:"datos",ver:"ver",editar:"editar",eliminar:"eliminar",desglosar:"desglosar",imagen:"imagen",porcentaje:"porcentaje",icondefault:"icondefault"},outputs:{salida:"salida"},features:[i.xb],decls:5,vars:5,consts:[["class","row  margen mt-3","style","margin-bottom: -25px;",4,"ngIf"],["class","table table-hover table-responsive anchura ",4,"ngIf"],["class","alert  col text-center",4,"ngIf"],["class","row","style","width: 100%;",4,"ngIf"],["class","col text-center mb-5",4,"ngIf"],[1,"row","margen","mt-3",2,"margin-bottom","-25px"],[1,"input-group","mb-3","mostrarelementos"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["id","inputGroupSelect01",1,"custom-select",3,"ngModel","ngModelChange","change"],["value","5","selected",""],["value","20"],["value","50"],["value","100"],[1,"table","table-hover","table-responsive","anchura"],[4,"ngIf"],["scope","col",3,"ngClass",4,"ngFor","ngForOf"],["class","fade-in-second",4,"ngFor","ngForOf"],["scope","col",3,"ngClass"],[1,"fade-in-second"],["style","width: 44px;","scope","row",4,"ngIf"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"opciones"],[3,"click",4,"ngIf"],["scope","row",2,"width","44px"],["width","45px","height","45px","class","tableimg",3,"src",4,"ngIf"],["width","45px","height","45px",1,"tableimg",3,"src"],[3,"ngClass","click"],[1,"progress"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","primary-bg"],[3,"click"],[1,"icon_ver","primary-bg"],[1,"icon_editar","primary-bg"],[1,"icon_eliminar","danger-bg"],[1,"fas","fa-chevron-down","primary",2,"font-size","14px","margin","9px"],[1,"alert","col","text-center"],[1,"row",2,"width","100%"],[1,"col"],["aria-label","Page navigation example"],[1,"pagination","justify-content-center"],["class","page-item disabled",4,"ngIf"],["class","page-item ",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"page-item","disabled"],["href","#","tabindex","-1","aria-disabled","true",1,"page-link"],[1,"page-item",3,"ngClass","click"],[1,"page-link"],[1,"col","text-center","mb-5"],["width","60px","height","60px","src","assets/imgs/loading_nomina.gif","alt",""]],template:function(e,t){1&e&&(i.Gc(0,o,14,1,"div",0),i.Gc(1,y,9,5,"table",1),i.Gc(2,z,3,0,"div",2),i.Gc(3,C,7,3,"div",3),i.Gc(4,U,2,0,"div",4)),2&e&&(i.kc("ngIf",!t.cargando&&void 0!==t.arreglo),i.zb(1),i.kc("ngIf",!t.cargando&&void 0!==t.arreglo),i.zb(1),i.kc("ngIf",!t.cargando&&void 0===t.arreglo),i.zb(1),i.kc("ngIf",!t.cargando&&void 0!==t.arreglo),i.zb(1),i.kc("ngIf",t.cargando))},directives:[a.m,r.v,r.l,r.o,r.p,r.x,a.l,a.k],styles:[".mostrarelementos[_ngcontent-%COMP%]{width:180px}.mostrarelementos[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background:#022538;color:#fff;font-size:smaller}.estiloid[_ngcontent-%COMP%]{color:#56dfd4}.anchura[_ngcontent-%COMP%]{width:95%}.ocultarcolumna[_ngcontent-%COMP%]{display:none!important}"]}),e})()},cCUj:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n("fXoL");let a=(()=>{class e{constructor(e){this.el=e}onKeyDown(e){"Backspace"!=e.code&&Number.isNaN(Number(e.key))&&e.preventDefault()}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(i.l))},e.\u0275dir=i.Ib({type:e,selectors:[["","appSolonumeros",""]],hostBindings:function(e,t){1&e&&i.ac("keydown",function(e){return t.onKeyDown(e)})}}),e})()},dkea:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n("fXoL");let a=(()=>{class e{constructor(e){this.elemento=e,this.tamanio=0,this.pixeles=240;let t=document.defaultView;this.tamanio=t.innerHeight,this.elemento.nativeElement.style.height=this.tamanio-this.pixeles+"px",console.log("inicia con",this.pixeles)}onResize(e){this.tamanio=e.target.innerHeight,this.elemento.nativeElement.style.height=this.tamanio-this.pixeles+"px",console.log(this.elemento.nativeElement.style.height)}ngOnChanges(e){let t=document.defaultView;this.tamanio=t.innerHeight,this.elemento.nativeElement.style.height=this.tamanio-this.pixeles+"px"}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(i.l))},e.\u0275dir=i.Ib({type:e,selectors:[["","appTamanioVentana",""]],hostBindings:function(e,t){1&e&&i.ac("resize",function(e){return t.onResize(e)},!1,i.xc)},inputs:{pixeles:"pixeles"},features:[i.xb]}),e})()},qIi2:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n("fXoL"),a=n("jhN1");let r=(()=>{class e{constructor(){this.fromManipularFiles=new i.n}onDragEnter(e){this.fromManipularFiles.emit({tipo:"seleccionado",valor:!0}),this.configuracionnoaparecerventana(e)}onDragLeave(e){this.fromManipularFiles.emit({tipo:"seleccionado",valor:!1})}onDrop(e){const t=this._getTransferencia(e);if(t){for(let e in Object.getOwnPropertyNames(t.files)){let n=t.files[e];this.esImagen(n.type)?this.fromManipularFiles.emit({tipo:"imagen",valor:n}):this.fromManipularFiles.emit({tipo:"errorimagen",valor:"La archivo seleccionado no es una imagen"})}this.configuracionnoaparecerventana(e),console.log(!1)}}_getTransferencia(e){return e.dataTransfer?e.dataTransfer:e.originalEvent.dataTransfer}configuracionnoaparecerventana(e){e.preventDefault(),e.stopPropagation()}esImagen(e){return""!==e&&void 0!==e&&e.startsWith("image")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.Ib({type:e,selectors:[["","appManipularfiles",""]],hostBindings:function(e,t){1&e&&i.ac("dragover",function(e){return t.onDragEnter(e)})("dragleave",function(e){return t.onDragLeave(e)})("drop",function(e){return t.onDrop(e)})},outputs:{fromManipularFiles:"fromManipularFiles"}}),e})();var o=n("ofXK");function c(e,t){1&e&&(i.Tb(0,"p",6),i.Ic(1,"Arrastra o sube aqu\xed el archivo"),i.Sb())}function s(e,t){1&e&&i.Ob(0,"p",7)}function l(e,t){1&e&&(i.Tb(0,"p",8),i.Ic(1,"Archivo seleccionado no es una imagen."),i.Sb())}function g(e,t){if(1&e){const e=i.Ub();i.Tb(0,"div",9),i.Tb(1,"button",10),i.ac("click",function(){return i.yc(e),i.ec().abrirArchivo()}),i.Tb(2,"small"),i.Ob(3,"i",11),i.Ic(4,"\xa0Subir archivo"),i.Sb(),i.Sb(),i.Sb()}}function u(e,t){if(1&e&&i.Ob(0,"img",17),2&e){const e=i.ec(2);i.kc("src",e.sanitize("data:image/jpg;base64, "+e.arrayBufferToBase64(e.buffer)),i.Ac)}}function b(e,t){if(1&e&&i.Ob(0,"img",18),2&e){const e=i.ec(2);i.kc("src",e.recibiendoImagen,i.Ac)}}function m(e,t){if(1&e&&(i.Tb(0,"p",19),i.Tb(1,"strong",20),i.Ic(2,"Tama\xf1o "),i.Sb(),i.Ic(3),i.Sb()),2&e){const e=i.ec(2);i.zb(3),i.Kc(" ",e.tamanio(),"KB")}}function f(e,t){if(1&e){const e=i.Ub();i.Tb(0,"div",12),i.Gc(1,u,1,1,"img",13),i.Gc(2,b,1,1,"img",14),i.Gc(3,m,4,1,"p",15),i.Tb(4,"i",16),i.ac("click",function(){return i.yc(e),i.ec().eliminarImagen()}),i.Sb(),i.Sb()}if(2&e){const e=i.ec();i.zb(1),i.kc("ngIf",!e.mostrarImagenUrl),i.zb(1),i.kc("ngIf",e.mostrarImagenUrl),i.zb(1),i.kc("ngIf",!e.mostrarImagenUrl)}}const p=function(e,t,n){return{errorimagen:e,seleccionado:t,anulartop:n}};let d=(()=>{class e{constructor(e){this.sanitizer=e,this.emiteimagen=new i.n,this.errorimagen=!1,this.seleccionado=!1,this.mostrarImagenUrl=!1,this.recibiendoImagen=void 0}sanitize(e){return this.sanitizer.bypassSecurityTrustUrl(e)}ngOnInit(){}ngOnChanges(e){void 0!==this.recibiendoImagen&&(this.mostrarImagenUrl=!0)}recibir(e){switch(this.mostrarImagenUrl=!1,null==e?void 0:e.tipo){case"seleccionado":this.seleccionado=e.valor,this.errorimagen=!1;break;case"errorimagen":this.seleccionado=!1,this.errorimagen=!0;break;case"imagen":this.imagen=e.valor,this.seleccionado=!1,this.errorimagen=!1,this.imagen.arrayBuffer().then(e=>{this.buffer=e,this.emiteimagen.emit(this.arrayBufferToBase64(e))})}}arrayBufferToBase64(e){let t="",n=new Uint8Array(e),i=n.byteLength;for(let a=0;a<i;a++)t+=String.fromCharCode(n[a]);return window.btoa(t)}tamanio(){return this.imagen.size/1e3}eliminarImagen(){console.log("Se elimina la imagen del logos"),this.emiteimagen.emit(void 0),this.errorimagen=!1,this.seleccionado=!1,this.buffer=void 0,this.mostrarImagenUrl=!1}abrirArchivo(){let e=document.createElement("input");e.type="file",e.click(),e.onchange=()=>{for(let t in Object.getOwnPropertyNames(e.files)){let n=e.files[t];this.esImagen(n.type)?this.recibir({tipo:"imagen",valor:n}):this.recibir({tipo:"errorimagen",valor:"La archivo seleccionado no es una imagen"})}}}esImagen(e){return""!==e&&void 0!==e&&e.startsWith("image")}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(a.b))},e.\u0275cmp=i.Hb({type:e,selectors:[["app-subirarchivo"]],inputs:{recibiendoImagen:"recibiendoImagen"},outputs:{emiteimagen:"emiteimagen"},features:[i.xb],decls:6,vars:10,consts:[["appManipularfiles","",1,"logocaja",3,"ngClass","fromManipularFiles"],["class","titulo",4,"ngIf"],["class","mostrar",4,"ngIf"],["class","mostrar2",4,"ngIf"],["class","col-12 text-right",4,"ngIf"],["class","col-12",4,"ngIf"],[1,"titulo"],[1,"mostrar"],[1,"mostrar2"],[1,"col-12","text-right"],["type","button",1,"botonestilos",3,"click"],[1,"fas","fa-upload"],[1,"col-12"],["alt","","srcset","",3,"src",4,"ngIf"],[3,"src",4,"ngIf"],["class","cambia","style","    color: #4cc1b0;",4,"ngIf"],["id","closeid",1,"far","fa-times-circle",3,"click"],["alt","","srcset","",3,"src"],[3,"src"],[1,"cambia",2,"color","#4cc1b0"],[2,"font-weight","bolder"]],template:function(e,t){1&e&&(i.Tb(0,"div",0),i.ac("fromManipularFiles",function(e){return t.recibir(e)}),i.Gc(1,c,2,0,"p",1),i.Gc(2,s,1,0,"p",2),i.Gc(3,l,2,0,"p",3),i.Gc(4,g,5,0,"div",4),i.Gc(5,f,5,3,"div",5),i.Sb()),2&e&&(i.kc("ngClass",i.qc(6,p,t.errorimagen,t.seleccionado,null!=t.buffer)),i.zb(1),i.kc("ngIf",null==t.buffer&&!t.mostrarImagenUrl),i.zb(1),i.kc("ngIf",null==t.buffer&&!t.mostrarImagenUrl),i.zb(1),i.kc("ngIf",null==t.buffer&&!t.mostrarImagenUrl),i.zb(1),i.kc("ngIf",null==t.buffer&&!t.mostrarImagenUrl),i.zb(1),i.kc("ngIf",null!=t.buffer||t.mostrarImagenUrl))},directives:[r,o.k,o.m],styles:[".cambia[_ngcontent-%COMP%]{font-size:smaller;color:#022538}"]}),e})()}}]);