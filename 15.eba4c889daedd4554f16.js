(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{QJJc:function(o,e,t){"use strict";t.r(e),t.d(e,"empleadosPagosModule",function(){return ao});var a=t("ofXK"),b=t("tk/3"),n=t("3Pt+"),c=t("tyNb"),i=t("fXoL"),d=t("i9e2"),r=t("04Ps"),l=t("9GDa"),s=t("IhP3"),p=t("wK29"),u=t("juEs");let m=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=i.Hb({type:o,selectors:[["app-alertas"]],decls:53,vars:0,consts:[["id","modalshare","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","text-color"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group"],["for","exampleInputEmail1"],["id","inputGroupSelect01",1,"custom-select"],["selected",""],["value","1"],["value","2"],["value","3"],["for","exampleInputPassword1"],["type","password","id","exampleInputPassword1",1,"form-control"],["for",""],["type","text","id","date","data-format","DD-MM-YYYY","data-template","D MMM YYYY","name","date","value","09-01-2013",1,"form-control"],[1,"form-group","grupo1"],["type","number","id","exampleInputPassword1",1,"form-control"],[1,"row","form-group",2,"margin-left","0px"],[1,"input-group","form-check","form-check-inline","col-12"],["type","checkbox","name","inlineRadioOptions","id","radio1","value","option1",1,"form-check-input"],["for","radio1",1,"form-check-label",2,"font-size","initial","font-weight","600","width","300px"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-outline-primary","button-outlet"],["type","button",1,"btn","btn-primary","button-fill"]],template:function(o,e){1&o&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"div",2),i.Tb(3,"div",3),i.Tb(4,"h5",4),i.Ic(5,"Agregar percepci\xf3n periodica"),i.Sb(),i.Tb(6,"button",5),i.Tb(7,"span",6),i.Ic(8,"\xd7"),i.Sb(),i.Sb(),i.Sb(),i.Tb(9,"div",7),i.Tb(10,"form"),i.Tb(11,"div",8),i.Tb(12,"label",9),i.Ic(13,"Tipo de percepci\xf3n"),i.Sb(),i.Tb(14,"select",10),i.Ob(15,"option",11),i.Tb(16,"option",12),i.Ic(17,"1"),i.Sb(),i.Tb(18,"option",13),i.Ic(19,"2"),i.Sb(),i.Tb(20,"option",14),i.Ic(21,"3"),i.Sb(),i.Sb(),i.Sb(),i.Tb(22,"div",8),i.Tb(23,"label",15),i.Ic(24,"Referencia"),i.Sb(),i.Ob(25,"input",16),i.Sb(),i.Tb(26,"div",8),i.Tb(27,"label",17),i.Ic(28,"Fecha de inicio de percepci\xf3n"),i.Sb(),i.Ob(29,"br"),i.Ob(30,"input",18),i.Sb(),i.Tb(31,"div",19),i.Tb(32,"label",15),i.Ic(33,"Monto total de percepci\xf3n"),i.Sb(),i.Ob(34,"input",20),i.Sb(),i.Tb(35,"div",19),i.Tb(36,"label",15),i.Ic(37,"N\xfamero de periodos"),i.Sb(),i.Ob(38,"input",20),i.Sb(),i.Tb(39,"div",19),i.Tb(40,"label",15),i.Ic(41,"Monto por periodo"),i.Sb(),i.Ob(42,"input",20),i.Sb(),i.Tb(43,"div",21),i.Tb(44,"div",22),i.Ob(45,"input",23),i.Tb(46,"label",24),i.Ic(47,"Activa"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(48,"div",25),i.Tb(49,"button",26),i.Ic(50,"Siguiente"),i.Sb(),i.Tb(51,"button",27),i.Ic(52,"Guardar"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb())},directives:[n.y,n.m,n.n,n.p,n.x],styles:[""]}),o})();var S=t("cCUj");function T(o,e){1&o&&i.Ob(0,"i",60)}function g(o,e){1&o&&i.Ob(0,"i",61)}function f(o,e){if(1&o&&(i.Tb(0,"td"),i.Ic(1),i.Sb()),2&o){const o=i.ec();i.zb(1),i.Jc(null==o.empleado||null==o.empleado.metodoPagoId?null:o.empleado.metodoPagoId.descripcion)}}function I(o,e){if(1&o&&(i.Tb(0,"option",64),i.Ic(1),i.Sb()),2&o){const o=e.$implicit;i.kc("value",o.metodoPagoId),i.zb(1),i.Jc(o.descripcion)}}function h(o,e){if(1&o){const o=i.Ub();i.Tb(0,"td"),i.Tb(1,"select",62),i.ac("ngModelChange",function(e){return i.yc(o),i.ec().indexMetodoSeleccionado=e})("change",function(){return i.yc(o),i.ec().cambiaValorMetodo()}),i.Gc(2,I,2,2,"option",63),i.fc(3,"async"),i.Sb(),i.Sb()}if(2&o){const o=i.ec();let e=null;i.zb(1),i.kc("ngModel",o.indexMetodoSeleccionado),i.zb(1),i.kc("ngForOf",null==(e=i.gc(3,2,o.arregloMetodosPago))?null:e.datos)}}function v(o,e){1&o&&(i.Tb(0,"div",79),i.Ic(1," Campo requerido "),i.Sb())}function y(o,e){1&o&&(i.Tb(0,"div",79),i.Ic(1," Campo requerido "),i.Sb())}function k(o,e){if(1&o&&(i.Tb(0,"option",64),i.Ic(1),i.Sb()),2&o){const o=e.$implicit;i.kc("value",o.bancoId),i.zb(1),i.Jc(o.nombreCorto)}}function C(o,e){1&o&&(i.Tb(0,"div",79),i.Ic(1," Campo requerido "),i.Sb())}const P=function(o){return{"is-invalid":o}};function M(o,e){if(1&o){const o=i.Ub();i.Tb(0,"form",25),i.ac("ngSubmit",function(){return i.yc(o),i.ec().enviandoMetodoPago()}),i.Tb(1,"div",65),i.Tb(2,"label",66),i.Ic(3,"DETALLE DE LA CUENTA"),i.Sb(),i.Sb(),i.Tb(4,"div",1),i.Tb(5,"div",67),i.Tb(6,"div",68),i.Tb(7,"div",69),i.Tb(8,"label"),i.Ic(9,"N\xfamero de cuenta *"),i.Sb(),i.Ob(10,"input",70),i.Ob(11,"input",71),i.Gc(12,v,2,0,"div",72),i.Sb(),i.Tb(13,"div",69),i.Tb(14,"label"),i.Ic(15,"CLABE *"),i.Sb(),i.Ob(16,"input",73),i.Gc(17,y,2,0,"div",72),i.Sb(),i.Tb(18,"div",69),i.Tb(19,"label"),i.Ic(20,"Banco *"),i.Sb(),i.Tb(21,"select",74),i.Gc(22,k,2,2,"option",63),i.fc(23,"async"),i.Sb(),i.Gc(24,C,2,0,"div",72),i.Sb(),i.Tb(25,"div",69),i.Tb(26,"label"),i.Ic(27,"N\xfamero de ID cliente"),i.Sb(),i.Ob(28,"input",75),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(29,"div",1),i.Tb(30,"div",38),i.Tb(31,"div",76),i.Tb(32,"button",77),i.ac("click",function(){return i.yc(o),i.ec().cancelar()}),i.Ic(33,"Cancelar"),i.Sb(),i.Tb(34,"button",78),i.Ic(35,"Guardar"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()}if(2&o){const o=i.ec();let e=null;i.kc("formGroup",o.myFormMetodoPago),i.zb(11),i.kc("ngClass",i.oc(10,P,o.f.numeroCuenta.errors&&o.submitEnviado)),i.zb(1),i.kc("ngIf",o.f.numeroCuenta.errors&&o.submitEnviado),i.zb(4),i.kc("ngClass",i.oc(12,P,o.f.clabe.errors&&o.submitEnviado)),i.zb(1),i.kc("ngIf",o.f.clabe.errors&&o.submitEnviado),i.zb(4),i.kc("ngClass",i.oc(14,P,o.f.csBanco.errors&&o.submitEnviado)),i.zb(1),i.kc("ngForOf",null==(e=i.gc(23,8,o.arreglobancos))?null:e.datos),i.zb(2),i.kc("ngIf",o.f.csBanco.errors&&o.submitEnviado)}}function O(o,e){1&o&&i.Ob(0,"div",27)}function z(o,e){if(1&o){const o=i.Ub();i.Tb(0,"button",80),i.ac("click",function(){return i.yc(o),i.ec().editandoMetodoPago(void 0)}),i.Ic(1,"Editar"),i.Sb()}}function x(o,e){if(1&o){const o=i.Ub();i.Tb(0,"button",81),i.ac("click",function(){return i.yc(o),i.ec().cancelar()}),i.Ic(1,"Cancelar"),i.Sb()}}function w(o,e){if(1&o){const o=i.Ub();i.Tb(0,"button",80),i.ac("click",function(){return i.yc(o),i.ec().guardandometodoPago()}),i.Ic(1,"Guardar"),i.Sb()}}function G(o,e){1&o&&i.Ob(0,"i",60)}function N(o,e){1&o&&i.Ob(0,"i",61)}function F(o,e){if(1&o&&(i.Tb(0,"td"),i.Ic(1),i.Sb()),2&o){const o=i.ec();i.zb(1),i.Jc(null==o.empleado||null==o.empleado.grupoNominaId?null:o.empleado.grupoNominaId.nombre)}}function D(o,e){if(1&o&&(i.Tb(0,"option",64),i.Ic(1),i.Sb()),2&o){const o=e.$implicit;i.kc("value",o.id),i.zb(1),i.Kc(" ",o.nombre,"")}}function E(o,e){if(1&o&&(i.Tb(0,"td"),i.Tb(1,"select",82),i.Gc(2,D,2,2,"option",63),i.fc(3,"async"),i.Sb(),i.Sb()),2&o){const o=i.ec();let e=null;i.zb(2),i.kc("ngForOf",null==(e=i.gc(3,1,o.arreglogrupoNomina))?null:e.datos)}}function A(o,e){if(1&o&&(i.Tb(0,"td"),i.Ic(1),i.Sb()),2&o){const o=i.ec();i.zb(1),i.Jc(null==o.empleado.tipoCompensacionId?null:o.empleado.tipoCompensacionId.descripcion)}}function B(o,e){if(1&o&&(i.Tb(0,"option",64),i.Ic(1),i.Sb()),2&o){const o=e.$implicit;i.kc("value",o.tipoCompensacionId),i.zb(1),i.Jc(o.descripcion)}}function j(o,e){if(1&o&&(i.Tb(0,"td"),i.Tb(1,"select",83),i.Gc(2,B,2,2,"option",63),i.fc(3,"async"),i.Sb(),i.Sb()),2&o){const o=i.ec();let e=null;i.zb(2),i.kc("ngForOf",null==(e=i.gc(3,1,o.arregloCompensacion))?null:e.datos)}}function J(o,e){if(1&o&&(i.Tb(0,"td"),i.Ic(1),i.fc(2,"currency"),i.Sb()),2&o){const o=i.ec();i.zb(1),i.Jc(i.gc(2,1,o.empleado.sueldoBrutoMensual))}}function $(o,e){1&o&&(i.Tb(0,"td"),i.Ob(1,"input",84),i.Sb())}function q(o,e){if(1&o&&(i.Tb(0,"td"),i.Ic(1),i.fc(2,"currency"),i.Sb()),2&o){const o=i.ec();i.zb(1),i.Jc(i.gc(2,1,o.empleado.sbc))}}function U(o,e){1&o&&(i.Tb(0,"td"),i.Ob(1,"input",85),i.Sb())}function L(o,e){if(1&o){const o=i.Ub();i.Tb(0,"button",80),i.ac("click",function(){return i.yc(o),i.ec().verDetalleCompensacion()}),i.Ic(1,"Editar"),i.Sb()}}function V(o,e){if(1&o){const o=i.Ub();i.Tb(0,"button",81),i.ac("click",function(){return i.yc(o),i.ec().cancelar()}),i.Ic(1,"Cancelar"),i.Sb()}}function Y(o,e){if(1&o){const o=i.Ub();i.Tb(0,"button",80),i.ac("click",function(){return i.yc(o),i.ec().guardarDetalleCompensacion()}),i.Ic(1,"Guardar"),i.Sb()}}function R(o,e){1&o&&i.Ob(0,"i",60)}function _(o,e){1&o&&i.Ob(0,"i",61)}function K(o,e){1&o&&i.Ob(0,"i",60)}function H(o,e){1&o&&i.Ob(0,"i",61)}function X(o,e){1&o&&i.Ob(0,"i",60)}function Q(o,e){1&o&&i.Ob(0,"i",61)}const W=function(o){return{cardselected:o}},Z=function(o){return{fondoblanco:o}},oo=[{path:"",children:[{path:"pagos",component:(()=>{class o{constructor(o,e,t,a,b,n,c,i){this.modalPrd=o,this.catalogosPrd=e,this.gruponominaPrd=t,this.usuariosSistemaPrd=a,this.formbuilder=b,this.router=n,this.contratoColaboradorPrd=c,this.bancosPrd=i,this.arreglopintar=[!1,!1,!1,!1,!1],this.metodopagobool=!1,this.detallecompensacionbool=!1,this.esTransferencia=!1,this.submitEnviado=!1,this.indexMetodoSeleccionado=0,this.idEmpleado=-1,this.empleado={}}ngOnInit(){this.myFormMetodoPago=this.formbuilder.group({}),this.myFormCompensacion=this.formbuilder.group({}),this.arregloMetodosPago=this.catalogosPrd.getAllMetodosPago(!0).toPromise(),this.arreglogrupoNomina=this.gruponominaPrd.getAll(this.usuariosSistemaPrd.getIdEmpresa()).toPromise(),this.arregloCompensacion=this.catalogosPrd.getCompensacion(!0).toPromise(),this.arreglobancos=this.catalogosPrd.getCuentasBanco(!0).toPromise(),this.router.params.subscribe(o=>{this.idEmpleado=o.id,this.contratoColaboradorPrd.getContratoColaboradorById(this.idEmpleado).subscribe(o=>{this.empleado=o.datos})})}cambiarStatus(o){for(let e=0;e<this.arreglopintar.length;e++)e!=o&&(this.arreglopintar[e]=!1);this.arreglopintar[o]=!this.arreglopintar[o]}createMyFormMetodoPago(o){var e;return this.formbuilder.group({numeroCuenta:[o.numeroCuenta,[n.w.required]],clabe:[o.clabe,[n.w.required]],csBanco:[null===(e=o.bancoId)||void 0===e?void 0:e.bancoId,[n.w.required]],numInformacion:o.numInformacion,cuentaBancoId:o.cuentaBancoId})}editandoMetodoPago(o){var e;this.myFormMetodoPago=this.createMyFormMetodoPago({}),this.metodopagobool=!0,null==o&&(this.indexMetodoSeleccionado=null===(e=this.empleado.metodoPagoId)||void 0===e?void 0:e.metodoPagoId),this.esTransferencia=4==this.indexMetodoSeleccionado,this.esTransferencia&&this.bancosPrd.getByEmpleado(this.idEmpleado).subscribe(o=>{o.resultado&&(this.myFormMetodoPago=this.createMyFormMetodoPago(o.datos))})}guardandometodoPago(){this.modalPrd.showMessageDialog(this.modalPrd.warning,"\xbfDeseas actualizar los datos del m\xe9todo de pago?").then(o=>{if(o){let o=Object.assign(Object.assign({},this.empleado),{metodoPagoId:{metodoPagoId:this.indexMetodoSeleccionado}});this.contratoColaboradorPrd.update(o).subscribe(o=>{this.modalPrd.showMessageDialog(o.resultado,o.mensaje).then(()=>{o.resultado&&(this.empleado=o.datos,this.metodopagobool=!1,this.detallecompensacionbool=!1)})})}})}enviandoMetodoPago(){this.submitEnviado=!0,this.myFormMetodoPago.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,"\xbfDeseas guardar los datos?").then(o=>{if(o){let o=this.myFormMetodoPago.value,e={numeroCuenta:o.numeroCuenta,clabe:o.clabe,bancoId:{bancoId:o.csBanco},numInformacion:o.numInformacion,ncoPersona:{personaId:this.idEmpleado},nclCentrocCliente:{centrocClienteId:this.empleado.centrocClienteId.centrocClienteId},nombreCuenta:"  "};null==o.cuentaBancoId?(console.log("Se va a insertar"),this.bancosPrd.save(e).subscribe(o=>{this.modalPrd.showMessageDialog(o.resultado,o.mensaje).then(()=>{if(o.resultado){let o=Object.assign(Object.assign({},this.empleado),{metodoPagoId:{metodoPagoId:this.indexMetodoSeleccionado}});this.contratoColaboradorPrd.update(o).subscribe(o=>{this.empleado=o.datos,console.log(this.empleado),this.cancelar()})}})})):(console.log("Se va a modificar"),e.cuentaBancoId=o.cuentaBancoId,e.esActivo=!0,this.bancosPrd.modificar(e).subscribe(o=>{console.log("se modifica el cliente cuentas bancarias",o.datos),this.modalPrd.showMessageDialog(o.resultado,o.mensaje).then(()=>{if(o.resultado){let o=Object.assign(Object.assign({},this.empleado),{metodoPagoId:{metodoPagoId:this.indexMetodoSeleccionado}});console.log("Esto se va a mandar",o),this.contratoColaboradorPrd.update(o).subscribe(o=>{this.empleado=o.datos,console.log(o),this.cancelar()})}})}))}})}cancelar(){this.metodopagobool=!1,this.detallecompensacionbool=!1}cambiaValorMetodo(){this.editandoMetodoPago("")}get f(){return this.myFormMetodoPago.controls}createFormCompensacion(o){var e,t;return this.formbuilder.group({grupoNominaId:[null===(e=o.grupoNominaId)||void 0===e?void 0:e.grupoNominaId,[n.w.required]],tipoCompensacionId:[null===(t=o.tipoCompensacionId)||void 0===t?void 0:t.tipoCompensacionId,[n.w.required]],sueldoBrutoMensual:[o.sueldoBrutoMensual,[n.w.required]],sbc:[o.sbc,[n.w.required]]})}guardarDetalleCompensacion(){this.modalPrd.showMessageDialog(this.modalPrd.warning,"\xbfDeseas actualizar los datos del usuario?").then(o=>{o&&setTimeout(()=>{this.modalPrd.showMessageDialog(this.modalPrd.success,"Operaci\xf3n exitosa").then(()=>{this.detallecompensacionbool=!1})},1e3)})}enviarCompensacio(){this.myFormCompensacion?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,"\xbfDeseas actualizar los datos del empleado?").then(o=>{if(o){const o=this.myFormCompensacion.value,e=Object.assign(Object.assign({},this.empleado),{grupoNominaId:{grupoNominaId:o.grupoNominaId},tipoCompensacionId:{tipoCompensacionId:o.tipoCompensacionId},sbc:o.sbc});this.contratoColaboradorPrd.update(e).subscribe(o=>{this.modalPrd.showMessageDialog(o.resultados,o.mensaje).then(()=>{o.resultado&&(this.empleado=o.datos,this.cancelar())})})}})}verDetalleCompensacion(){this.detallecompensacionbool=!0,this.myFormCompensacion=this.createFormCompensacion(this.empleado)}}return o.\u0275fac=function(e){return new(e||o)(i.Nb(d.a),i.Nb(r.a),i.Nb(l.a),i.Nb(s.a),i.Nb(n.c),i.Nb(c.a),i.Nb(p.a),i.Nb(u.a))},o.\u0275cmp=i.Hb({type:o,selectors:[["app-pagos"]],decls:379,vars:47,consts:[[1,"container"],[1,"row"],[1,"col-12","mr-3"],["id","accordion",1,"acordion_desplegable"],[1,"card",3,"ngClass"],["id","detallepago",1,"card-header",3,"ngClass"],[1,"mb-0"],["data-toggle","collapse","data-target","#detallepagocolapsar","aria-expanded","false","aria-controls","detallepago",1,"btn","btn-link",3,"click"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","class","fas fa-chevron-up ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","class","fas fa-chevron-down ",4,"ngIf"],["id","detallepagocolapsar","aria-labelledby","detallepago","data-parent","#accordion",1,"collapse"],[1,"card-body"],[1,"col"],[1,"table","table-striped"],[1,"titulorow"],[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],["class","col-2",4,"ngIf"],[1,"col-4","text-right"],["class","btn btn-primary button-fill",3,"click",4,"ngIf"],["class","btn btn-primary button-outlet mr-2",3,"click",4,"ngIf"],["id","compensacion",1,"card-header"],["data-toggle","collapse","data-target","#collapseTwo","aria-expanded","false","aria-controls","collapseTwo",1,"btn","btn-link","collapsed",3,"click"],["id","collapseTwo","aria-labelledby","compensacion","data-parent","#accordion",1,"collapse"],[1,"col-6"],[3,"formGroup","ngSubmit"],[1,"table","table-striped","table-borderless"],[1,"col-2"],["id","percepciones",1,"card-header"],["data-toggle","collapse","data-target","#collapsefour","aria-expanded","false","aria-controls","collapseThree",1,"btn","btn-link","collapsed",3,"click"],["id","collapsefour","aria-labelledby","percepciones","data-parent","#accordion",1,"collapse"],[1,"botonestilos","aparece-desktop"],["data-toggle","modal","data-target","#modalshare",1,"fas","fa-plus"],["id","deducciones",1,"card-header"],["data-toggle","collapse","data-target","#collapseFive","aria-expanded","false","aria-controls","collapseThree",1,"btn","btn-link","collapsed",3,"click"],["id","collapseFive","aria-labelledby","deducciones","data-parent","#accordion",1,"collapse"],[1,"table","table-borderless"],[2,"color","#00DED4"],[1,"col-12"],["id","acordion2",1,"accordion"],[1,"card"],["id","personal",1,"card-header"],["type","button","data-toggle","collapse","data-target","#personalacordion","aria-expanded","false","aria-controls","collapseOne",1,"btn","btn-link"],["id","personalacordion","aria-labelledby","personal","data-parent","#acordion2",1,"collapse"],["id","infonavit",1,"card-header"],["type","button","data-toggle","collapse","data-target","#infonavitcolapse","aria-expanded","false","aria-controls","collapseTwo",1,"btn","btn-link","collapsed"],["id","infonavitcolapse","aria-labelledby","infonavit","data-parent","#acordion2",1,"collapse"],["href","#"],["href",""],["id","unfonacot",1,"card-header"],["type","button","data-toggle","collapse","data-target","#unfonacotcolapse","aria-expanded","false","aria-controls","collapseThree",1,"btn","btn-link","collapsed"],["id","unfonacotcolapse","aria-labelledby","unfonacot","data-parent","#acordion2",1,"collapse"],["id","personalalimenticia",1,"card-header"],["type","button","data-toggle","collapse","data-target","#personalalimenticiacollapse","aria-expanded","false","aria-controls","collapseThree",1,"btn","btn-link","collapsed"],["id","personalalimenticiacollapse","aria-labelledby","personalalimenticia","data-parent","#acordion2",1,"collapse"],["id","recibospago",1,"card-header"],["data-toggle","collapse","data-target","#collapseSix","aria-expanded","false","aria-controls","collapseThree",1,"btn","btn-link","collapsed",3,"click"],["id","collapseSix","aria-labelledby","recibospago","data-parent","#accordion",1,"collapse"],[1,"col-12","text-center"],[1,"table","table-hover"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-up"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-down"],[1,"form-control",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"form-group","mt-3","row","margen"],[1,"titulo"],[1,"col-10"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-4"],["type","hidden","formControlName","cuentaBancoId"],["appSolonumeros","","maxlength","10","formControlName","numeroCuenta","type","text","placeholder","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["appSolonumeros","","formControlName","clabe","maxlength","18","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","csBanco","name","","id","",1,"form-control",3,"ngClass"],["appSolonumeros","","formControlName","numInformacion","type","text","placeholder","",1,"form-control"],[1,"text-right","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-2",3,"click"],["type","submit",1,"btn","btn-primary","button-fill"],[1,"invalid-feedback"],[1,"btn","btn-primary","button-fill",3,"click"],[1,"btn","btn-primary","button-outlet","mr-2",3,"click"],["formControlName","grupoNominaId","name","","id","",1,"form-control"],["formControlName","tipoCompensacionId","name","","id","",1,"form-control"],["formControlName","sueldoBrutoMensual","type","text",1,"form-control"],["formControlName","sbc","type","text",1,"form-control"]],template:function(o,e){1&o&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"div",2),i.Tb(3,"div",3),i.Tb(4,"div",4),i.Tb(5,"div",5),i.Tb(6,"h5",6),i.Tb(7,"button",7),i.ac("click",function(){return e.cambiarStatus(0)}),i.Ic(8," Detalle Pago "),i.Gc(9,T,1,0,"i",8),i.Gc(10,g,1,0,"i",9),i.Sb(),i.Sb(),i.Sb(),i.Tb(11,"div",10),i.Tb(12,"div",11),i.Tb(13,"div",1),i.Tb(14,"div",12),i.Tb(15,"table",13),i.Tb(16,"tbody"),i.Tb(17,"tr"),i.Tb(18,"td",14),i.Ic(19,"M\xe9todo de pago"),i.Sb(),i.Gc(20,f,2,1,"td",15),i.Gc(21,h,4,4,"td",15),i.Sb(),i.Sb(),i.Sb(),i.Gc(22,M,36,16,"form",16),i.Sb(),i.Gc(23,O,1,0,"div",17),i.Tb(24,"div",18),i.Gc(25,z,2,0,"button",19),i.Gc(26,x,2,0,"button",20),i.Gc(27,w,2,0,"button",19),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(28,"div",4),i.Tb(29,"div",21),i.Tb(30,"h5",6),i.Tb(31,"button",22),i.ac("click",function(){return e.cambiarStatus(1)}),i.Ic(32," Detalle de Compensaci\xf3n "),i.Gc(33,G,1,0,"i",8),i.Gc(34,N,1,0,"i",9),i.Sb(),i.Sb(),i.Sb(),i.Tb(35,"div",23),i.Tb(36,"div",11),i.Tb(37,"div",1),i.Tb(38,"div",24),i.Tb(39,"form",25),i.ac("ngSubmit",function(){return e.enviarCompensacio()}),i.Sb(),i.Tb(40,"table",26),i.Tb(41,"tbody"),i.Tb(42,"tr"),i.Tb(43,"td",14),i.Ic(44,"Grupo de n\xf3mina"),i.Sb(),i.Gc(45,F,2,1,"td",15),i.Gc(46,E,4,3,"td",15),i.Sb(),i.Tb(47,"tr"),i.Tb(48,"td",14),i.Ic(49,"Tipo de compensaci\xf3n"),i.Sb(),i.Gc(50,A,2,1,"td",15),i.Gc(51,j,4,3,"td",15),i.Sb(),i.Tb(52,"tr"),i.Tb(53,"td",14),i.Ic(54,"Sueldo bruto mensual"),i.Sb(),i.Gc(55,J,3,3,"td",15),i.Gc(56,$,2,0,"td",15),i.Sb(),i.Tb(57,"tr"),i.Tb(58,"td",14),i.Ic(59,"Salario Base de Cotizaci\xf3n"),i.Sb(),i.Gc(60,q,3,3,"td",15),i.Gc(61,U,2,0,"td",15),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Ob(62,"div",27),i.Tb(63,"div",18),i.Gc(64,L,2,0,"button",19),i.Gc(65,V,2,0,"button",20),i.Gc(66,Y,2,0,"button",19),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(67,"div",4),i.Tb(68,"div",28),i.Tb(69,"h5",6),i.Tb(70,"button",29),i.ac("click",function(){return e.cambiarStatus(2)}),i.Ic(71," Percepciones Peri\xf3dicas "),i.Gc(72,R,1,0,"i",8),i.Gc(73,_,1,0,"i",9),i.Sb(),i.Sb(),i.Sb(),i.Tb(74,"div",30),i.Tb(75,"div",11),i.Tb(76,"div",1),i.Tb(77,"div",24),i.Tb(78,"table",13),i.Tb(79,"tbody"),i.Tb(80,"tr"),i.Tb(81,"td",14),i.Ic(82,"Aun no cuentas con percepciones peri\xf3dicas"),i.Sb(),i.Ob(83,"td"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Ob(84,"div",27),i.Tb(85,"div",18),i.Tb(86,"button",31),i.Tb(87,"small"),i.Ob(88,"i",32),i.Ic(89,"Agregar"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(90,"div",4),i.Tb(91,"div",33),i.Tb(92,"h5",6),i.Tb(93,"button",34),i.ac("click",function(){return e.cambiarStatus(3)}),i.Ic(94," Deducciones "),i.Gc(95,K,1,0,"i",8),i.Gc(96,H,1,0,"i",9),i.Sb(),i.Sb(),i.Sb(),i.Tb(97,"div",35),i.Tb(98,"div",11),i.Tb(99,"table",36),i.Tb(100,"tbody"),i.Tb(101,"tr"),i.Tb(102,"td",37),i.Ic(103,"IMSS"),i.Sb(),i.Tb(104,"td",14),i.Ic(105,"Per\xedodo"),i.Sb(),i.Tb(106,"td"),i.Ic(107,"Mensual"),i.Sb(),i.Sb(),i.Tb(108,"tr"),i.Tb(109,"td",37),i.Ic(110,"ISR"),i.Sb(),i.Tb(111,"td",14),i.Ic(112,"Per\xedodo"),i.Sb(),i.Tb(113,"td"),i.Ic(114,"Mensual"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(115,"div",0),i.Tb(116,"div",1),i.Tb(117,"div",38),i.Tb(118,"div",39),i.Tb(119,"div",40),i.Tb(120,"div",41),i.Tb(121,"h5",6),i.Tb(122,"button",42),i.Ic(123," Pensi\xf3n Alimenticia "),i.Sb(),i.Sb(),i.Sb(),i.Tb(124,"div",43),i.Tb(125,"div",11),i.Tb(126,"div",1),i.Tb(127,"div",24),i.Tb(128,"table",26),i.Tb(129,"tbody"),i.Tb(130,"tr"),i.Tb(131,"td",14),i.Ic(132,"Fecha de inicio de descuento"),i.Sb(),i.Tb(133,"td"),i.Ic(134,"06-ene.-2021"),i.Sb(),i.Sb(),i.Tb(135,"tr"),i.Tb(136,"td",14),i.Ic(137,"Fecha de demanda"),i.Sb(),i.Tb(138,"td"),i.Ic(139,"06-ene.-2021"),i.Sb(),i.Sb(),i.Tb(140,"tr"),i.Tb(141,"td",14),i.Ic(142,"Estado"),i.Sb(),i.Tb(143,"td"),i.Ic(144,"Activa"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(145,"div",24),i.Tb(146,"table",26),i.Tb(147,"tbody"),i.Tb(148,"tr"),i.Tb(149,"td",14),i.Ic(150,"Valor de descuento"),i.Sb(),i.Tb(151,"td"),i.Ic(152,"12%"),i.Sb(),i.Sb(),i.Tb(153,"tr"),i.Tb(154,"td",14),i.Ic(155,"N\xfamero de folio"),i.Sb(),i.Tb(156,"td"),i.Ic(157,"62574465"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(158,"div",40),i.Tb(159,"div",44),i.Tb(160,"h5",6),i.Tb(161,"button",45),i.Ic(162," INFONAVIT "),i.Sb(),i.Sb(),i.Sb(),i.Tb(163,"div",46),i.Tb(164,"div",11),i.Tb(165,"div",1),i.Tb(166,"div",24),i.Tb(167,"table",26),i.Tb(168,"tbody"),i.Tb(169,"tr"),i.Tb(170,"td",14),i.Ic(171,"Fecha de inicio de descuento"),i.Sb(),i.Tb(172,"td"),i.Ic(173,"06-nov.-2020"),i.Sb(),i.Sb(),i.Tb(174,"tr"),i.Tb(175,"td",14),i.Ic(176,"Fecha fin de descuento"),i.Sb(),i.Tb(177,"td"),i.Ic(178,"06-mar.-2021"),i.Sb(),i.Sb(),i.Tb(179,"tr"),i.Tb(180,"td",14),i.Ic(181,"N\xfamero de cr\xe9dito"),i.Sb(),i.Tb(182,"td"),i.Ic(183,"3342"),i.Sb(),i.Sb(),i.Tb(184,"tr"),i.Tb(185,"td",14),i.Ic(186,"N\xfamero de cuotas"),i.Sb(),i.Tb(187,"td"),i.Ic(188,"3"),i.Sb(),i.Sb(),i.Tb(189,"tr"),i.Tb(190,"td",14),i.Ic(191,"Estado"),i.Sb(),i.Tb(192,"td"),i.Ic(193,"Activa"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(194,"div",24),i.Tb(195,"table",26),i.Tb(196,"tbody"),i.Tb(197,"tr"),i.Tb(198,"td",14),i.Ic(199,"Tipo de descuento"),i.Sb(),i.Tb(200,"td"),i.Ic(201,"Valor de descuento Infonavit 2020"),i.Sb(),i.Sb(),i.Tb(202,"tr"),i.Tb(203,"td",14),i.Ic(204,"Valor de descuento"),i.Sb(),i.Tb(205,"td"),i.Ic(206,"12 x valor descuento Infonavit 2020"),i.Sb(),i.Sb(),i.Tb(207,"tr"),i.Tb(208,"td",14),i.Ic(209,"Aviso de retenci\xf3n"),i.Sb(),i.Tb(210,"td"),i.Tb(211,"a",47),i.Ic(212,"Ver m\xe1s"),i.Sb(),i.Sb(),i.Sb(),i.Tb(213,"tr"),i.Tb(214,"td",14),i.Ic(215,"Aviso de suspensi\xf3n"),i.Sb(),i.Tb(216,"td"),i.Tb(217,"a",48),i.Ic(218,"Ver m\xe1s"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(219,"div",40),i.Tb(220,"div",49),i.Tb(221,"h5",6),i.Tb(222,"button",50),i.Ic(223," INFONACOT "),i.Sb(),i.Sb(),i.Sb(),i.Tb(224,"div",51),i.Tb(225,"div",11),i.Tb(226,"div",1),i.Tb(227,"div",24),i.Tb(228,"table",26),i.Tb(229,"tbody"),i.Tb(230,"tr"),i.Tb(231,"td",14),i.Ic(232,"Fecha de inicio de descuento"),i.Sb(),i.Tb(233,"td"),i.Ic(234,"06-ene.-2021"),i.Sb(),i.Sb(),i.Tb(235,"tr"),i.Tb(236,"td",14),i.Ic(237,"Fecha de otorgamiento del pr\xe9stamo"),i.Sb(),i.Tb(238,"td"),i.Ic(239,"06-feb.-2021"),i.Sb(),i.Sb(),i.Tb(240,"tr"),i.Tb(241,"td",14),i.Ic(242,"Monto de pr\xe9stamo"),i.Sb(),i.Tb(243,"td"),i.Ic(244,"$23,232.00"),i.Sb(),i.Sb(),i.Tb(245,"tr"),i.Tb(246,"td",14),i.Ic(247,"N\xfamero de cuotas"),i.Sb(),i.Tb(248,"td"),i.Ic(249,"3"),i.Sb(),i.Sb(),i.Tb(250,"tr"),i.Tb(251,"td",14),i.Ic(252,"Inter\xe9s"),i.Sb(),i.Tb(253,"td"),i.Ic(254,"3%"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(255,"div",24),i.Tb(256,"table",26),i.Tb(257,"tbody"),i.Tb(258,"tr"),i.Tb(259,"td",14),i.Ic(260,"Monto de cada pago"),i.Sb(),i.Tb(261,"td"),i.Ic(262,"$7,122.00"),i.Sb(),i.Sb(),i.Tb(263,"tr"),i.Tb(264,"td",14),i.Ic(265,"Referencia"),i.Sb(),i.Tb(266,"td"),i.Ic(267,"123456"),i.Sb(),i.Sb(),i.Tb(268,"tr"),i.Tb(269,"td",14),i.Ic(270,"Estado"),i.Sb(),i.Tb(271,"td"),i.Ic(272,"Activa"),i.Sb(),i.Sb(),i.Tb(273,"tr"),i.Tb(274,"td",14),i.Ic(275,"Monto pagado"),i.Sb(),i.Tb(276,"td"),i.Ic(277,"$0.00"),i.Sb(),i.Sb(),i.Tb(278,"tr"),i.Tb(279,"td",14),i.Ic(280,"Saldo a pagar"),i.Sb(),i.Tb(281,"td"),i.Ic(282,"$23,232.00"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(283,"div",40),i.Tb(284,"div",52),i.Tb(285,"h5",6),i.Tb(286,"button",53),i.Ic(287," Pr\xe9stamo personal "),i.Sb(),i.Sb(),i.Sb(),i.Tb(288,"div",54),i.Tb(289,"div",11),i.Tb(290,"div",1),i.Tb(291,"div",24),i.Tb(292,"table",26),i.Tb(293,"tbody"),i.Tb(294,"tr"),i.Tb(295,"td",14),i.Ic(296,"Fecha de inicio de descuento"),i.Sb(),i.Tb(297,"td"),i.Ic(298,"06-nov.-2020"),i.Sb(),i.Sb(),i.Tb(299,"tr"),i.Tb(300,"td",14),i.Ic(301,"Fecha de otorgamiento del pr\xe9stamo"),i.Sb(),i.Tb(302,"td"),i.Ic(303,"06-ene.-2021"),i.Sb(),i.Sb(),i.Tb(304,"tr"),i.Tb(305,"td",14),i.Ic(306,"Inter\xe9s"),i.Sb(),i.Tb(307,"td"),i.Ic(308,"3%"),i.Sb(),i.Sb(),i.Tb(309,"tr"),i.Tb(310,"td",14),i.Ic(311,"Referencia"),i.Sb(),i.Tb(312,"td"),i.Ic(313,"12345"),i.Sb(),i.Sb(),i.Tb(314,"tr"),i.Tb(315,"td",14),i.Ic(316,"Estado"),i.Sb(),i.Tb(317,"td"),i.Ic(318,"Activa"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(319,"div",24),i.Tb(320,"table",26),i.Tb(321,"tbody"),i.Tb(322,"tr"),i.Tb(323,"td",14),i.Ic(324,"Monto de pr\xe9stamo"),i.Sb(),i.Tb(325,"td"),i.Ic(326,"$7,122.00"),i.Sb(),i.Sb(),i.Tb(327,"tr"),i.Tb(328,"td",14),i.Ic(329,"N\xfamero de cuotas"),i.Sb(),i.Tb(330,"td"),i.Ic(331,"3"),i.Sb(),i.Sb(),i.Tb(332,"tr"),i.Tb(333,"td",14),i.Ic(334,"Monto de cada pago"),i.Sb(),i.Tb(335,"td"),i.Ic(336,"$7,975.56"),i.Sb(),i.Sb(),i.Tb(337,"tr"),i.Tb(338,"td",14),i.Ic(339,"Monto pagado"),i.Sb(),i.Tb(340,"td"),i.Ic(341,"$0.00"),i.Sb(),i.Sb(),i.Tb(342,"tr"),i.Tb(343,"td",14),i.Ic(344,"Saldo a pagar"),i.Sb(),i.Tb(345,"td"),i.Ic(346,"$23,232.00"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(347,"div",4),i.Tb(348,"div",55),i.Tb(349,"h5",6),i.Tb(350,"button",56),i.ac("click",function(){return e.cambiarStatus(4)}),i.Ic(351," Recibos de Pago "),i.Gc(352,X,1,0,"i",8),i.Gc(353,Q,1,0,"i",9),i.Sb(),i.Sb(),i.Sb(),i.Tb(354,"div",57),i.Tb(355,"div",11),i.Tb(356,"div",1),i.Tb(357,"div",58),i.Tb(358,"table",59),i.Tb(359,"thead"),i.Tb(360,"tr"),i.Tb(361,"th"),i.Ic(362,"Nombre"),i.Sb(),i.Tb(363,"th"),i.Ic(364,"Mes"),i.Sb(),i.Tb(365,"th"),i.Ic(366,"D\xeda pago"),i.Sb(),i.Tb(367,"th"),i.Ic(368,"Descargar"),i.Sb(),i.Sb(),i.Sb(),i.Tb(369,"tbody"),i.Tb(370,"tr"),i.Tb(371,"td"),i.Ic(372,"N\xf3mina Semanal Solusoft"),i.Sb(),i.Tb(373,"td"),i.Ic(374,"Octubre"),i.Sb(),i.Tb(375,"td"),i.Ic(376,"14-ene.-2021"),i.Sb(),i.Ob(377,"td"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Ob(378,"app-alertas")),2&o&&(i.zb(4),i.kc("ngClass",i.oc(35,W,e.arreglopintar[0])),i.zb(1),i.kc("ngClass",i.oc(37,Z,e.arreglopintar[0])),i.zb(4),i.kc("ngIf",!e.arreglopintar[0]),i.zb(1),i.kc("ngIf",e.arreglopintar[0]),i.zb(10),i.kc("ngIf",!e.metodopagobool),i.zb(1),i.kc("ngIf",e.metodopagobool),i.zb(1),i.kc("ngIf",e.metodopagobool&&e.esTransferencia),i.zb(1),i.kc("ngIf",!e.metodopagobool),i.zb(2),i.kc("ngIf",!e.metodopagobool),i.zb(1),i.kc("ngIf",e.metodopagobool&&!e.esTransferencia),i.zb(1),i.kc("ngIf",e.metodopagobool&&!e.esTransferencia),i.zb(1),i.kc("ngClass",i.oc(39,W,e.arreglopintar[1])),i.zb(5),i.kc("ngIf",!e.arreglopintar[1]),i.zb(1),i.kc("ngIf",e.arreglopintar[1]),i.zb(5),i.kc("formGroup",e.myFormCompensacion),i.zb(6),i.kc("ngIf",!e.detallecompensacionbool),i.zb(1),i.kc("ngIf",e.detallecompensacionbool),i.zb(4),i.kc("ngIf",!e.detallecompensacionbool),i.zb(1),i.kc("ngIf",e.detallecompensacionbool),i.zb(4),i.kc("ngIf",!e.detallecompensacionbool),i.zb(1),i.kc("ngIf",e.detallecompensacionbool),i.zb(4),i.kc("ngIf",!e.detallecompensacionbool),i.zb(1),i.kc("ngIf",e.detallecompensacionbool),i.zb(3),i.kc("ngIf",!e.detallecompensacionbool),i.zb(1),i.kc("ngIf",e.detallecompensacionbool),i.zb(1),i.kc("ngIf",e.detallecompensacionbool),i.zb(1),i.kc("ngClass",i.oc(41,W,e.arreglopintar[2])),i.zb(5),i.kc("ngIf",!e.arreglopintar[2]),i.zb(1),i.kc("ngIf",e.arreglopintar[2]),i.zb(17),i.kc("ngClass",i.oc(43,W,e.arreglopintar[3])),i.zb(5),i.kc("ngIf",!e.arreglopintar[3]),i.zb(1),i.kc("ngIf",e.arreglopintar[3]),i.zb(251),i.kc("ngClass",i.oc(45,W,e.arreglopintar[4])),i.zb(5),i.kc("ngIf",!e.arreglopintar[4]),i.zb(1),i.kc("ngIf",e.arreglopintar[4]))},directives:[a.k,a.m,n.y,n.m,n.f,m,n.v,n.l,n.o,a.l,n.p,n.x,n.b,n.e,S.a,n.h],pipes:[a.b,a.d],styles:[".botonestilos[_ngcontent-%COMP%]{bottom:5px;right:10px;color:#022538;background-color:#fff;border:1px solid #022538;width:100px;margin:auto}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:0 solid #9ca4a5!important}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-size:small}"]}),o})()}]}];let eo=(()=>{class o{}return o.\u0275mod=i.Lb({type:o}),o.\u0275inj=i.Kb({factory:function(e){return new(e||o)},imports:[[c.i.forChild(oo)]]}),o})();var to=t("HaJA");let ao=(()=>{class o{}return o.\u0275mod=i.Lb({type:o}),o.\u0275inj=i.Kb({factory:function(e){return new(e||o)},imports:[[a.c,n.g,n.u,b.c,eo,to.a]]}),o})()}}]);