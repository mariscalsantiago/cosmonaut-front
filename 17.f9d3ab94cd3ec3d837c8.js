(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{uHeS:function(e,t,o){"use strict";o.r(t),o.d(t,"empresasConceptosModule",function(){return W});var i=o("ofXK"),n=o("tyNb"),c=o("3Pt+"),r=o("fXoL"),a=o("tk/3"),s=o("xIjt");let d=(()=>{class e{constructor(e){this.http=e,this.url="",this.url=s.a.conceptos}getListaConceptoPercepcion(e){return this.http.get(`${this.url}/obtener/percepcion/${e}`)}getListaConceptoDeduccion(e){return this.http.get(`${this.url}/obtener/deduccion/${e}`)}savePer(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return console.log("guardar percepcion",o),this.http.put(this.url+"/guardarPercepcion",o,t)}saveDed(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return console.log("guardar percepcion",o),this.http.put(this.url+"/guardarDeduccion",o,t)}modificarPer(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return console.log(o),this.http.post(this.url+"/modificarPercepcion",o,t)}modificarDed(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return console.log(o),this.http.post(this.url+"/modificarDeduccion",o,t)}eliminarPer(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return this.http.post(this.url+"/eliminarPercepcion",o,t)}eliminarDed(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return this.http.post(this.url+"/eliminarDeduccion",o,t)}}return e.\u0275fac=function(t){return new(t||e)(r.Xb(a.b))},e.\u0275prov=r.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=o("04Ps"),b=o("i9e2"),p=o("dkea"),u=o("gYgu");const g=["nombre"];function m(e,t){1&e&&(r.Tb(0,"div",30),r.Ic(1," Campo requerido "),r.Sb())}function h(e,t){1&e&&(r.Tb(0,"div",30),r.Ic(1," Campo requerido "),r.Sb())}function f(e,t){if(1&e&&(r.Tb(0,"option",31),r.Ic(1),r.Sb()),2&e){const e=t.$implicit;r.kc("value",e.tipoPercepcionId),r.zb(1),r.Jc(e.descripcion)}}function I(e,t){1&e&&(r.Tb(0,"div",30),r.Ic(1," Campo requerido "),r.Sb())}const v=function(e){return{"is-invalid":e}};let P=(()=>{class e{constructor(e,t,o,i,n,c){this.formBuild=e,this.routerPrd=t,this.routerActive=o,this.conceptosPrd=i,this.catalogosPrd=n,this.modalPrd=c,this.mostrartooltip=!1,this.id_empresa=0,this.esInsert=!1,this.submitInvalido=!1,this.arregloTipoPercepcion=[],this.estatus=!0,this.peticion=[]}ngOnInit(){this.catalogosPrd.getTipoPercepcion(this.estatus).subscribe(e=>this.arregloTipoPercepcion=e.datos),this.routerActive.params.subscribe(e=>{this.id_empresa=e.id,"nuevo"==e.tipoinsert?this.esInsert=!0:"editar"==e.tipoinsert&&(this.esInsert=!1)});let e=null==history.state.data?{}:history.state.data;"Periodica"==e.tipoPeriodicidad&&(e.tipoPeriodicidad="P"),"Estandar"==e.tipoPeriodicidad&&(e.tipoPeriodicidad="E"),"Ambos"==e.tipoPeriodicidad&&(e.tipoPeriodicidad="A"),this.esInsert&&(e={tipoPercepcionId:{}}),this.myForm=this.createForm(e)}ngAfterViewInit(){this.nombre.nativeElement.focus()}createForm(e){return this.formBuild.group({nombre:[e.nombre,[c.w.required]],tipoPercepcionId:[e.tipoPercepcionId.tipoPercepcionId,[c.w.required]],tipoPeriodicidad:[e.tipoPeriodicidad,[c.w.required]],gravaIsr:e.gravaIsr,gravaIsn:e.gravaIsn,cuentaContable:e.cuentaContable,tipoConcepto:[e.tipoConcepto],esActivo:[this.esInsert?{value:"true",disabled:!0}:e.esActivo],conceptoPercepcionId:[e.conceptoPercepcionId]})}enviarPeticion(){this.submitInvalido=!0,this.myForm.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.esInsert?"\xbfDeseas registrar la percepci\xf3n ?":"\xbfDeseas actualizar la percepci\xf3n?").then(e=>{if(e){let e=this.myForm.value;"Ordinario"==e.tipoConcepto&&(e.tipoConcepto="O"),"Extraordinario"==e.tipoConcepto&&(e.tipoConcepto="E"),this.peticion={nombre:e.nombre,tipoPercepcionId:{tipoPercepcionId:e.tipoPercepcionId},tipoPeriodicidad:e.tipoPeriodicidad,cuentaContable:e.cuentaContable,tipoConcepto:e.tipoConcepto,gravaIsn:e.gravaIsn,esActivo:e.esActivo,gravaIsr:"true"==e.gravaIsr?"S":"N",centrocClienteId:{centrocClienteId:this.id_empresa}},this.esInsert?this.conceptosPrd.savePer(this.peticion).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>{e.resultado&&this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"conceptos"])})}):(this.peticion.conceptoPercepcionId=e.conceptoPercepcionId,this.conceptosPrd.modificarPer(this.peticion).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>{e.resultado&&this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"conceptos"])})}))}})}cancelar(){this.routerPrd.navigate(["/empresa/detalle",this.id_empresa,"conceptos"])}get f(){return this.myForm.controls}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(c.c),r.Nb(n.e),r.Nb(n.a),r.Nb(d),r.Nb(l.a),r.Nb(b.a))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-detalleconceptospercepciones"]],viewQuery:function(e,t){if(1&e&&r.Oc(g,!0),2&e){let e;r.uc(e=r.bc())&&(t.nombre=e.first)}},decls:71,vars:15,consts:[[1,"form-desing",3,"formGroup","ngSubmit"],["type","hidden","formControlName","conceptoPercepcionId"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar",3,"pixeles"],[1,"form-group","row","margen"],[1,"titulo"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-6"],["formControlName","nombre","maxlength","100","type","text","name","","placeholder","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","tipoPeriodicidad","name","",1,"form-control",3,"ngClass"],["value","P"],["value","E"],["value","A"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-6",2,"position","relative"],["formControlName","tipoPercepcionId",1,"form-control",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["formControlName","cuentaContable","maxlength","100","appMayusculas","","type","text","id","cuentaContable","aria-describedby","cuentaContable","placeholder","",1,"form-control"],["name","","id","","formControlName","esActivo",1,"form-control"],["value","true"],["value","false"],[1,"input-group-sm","mb-3","col-6","col-sm-6","col-lg-6"],[1,"contenedorInputCheckRadio"],["formControlName","gravaIsr","type","checkbox","name","","id","gravaIsr"],[1,"checkmark"],["formControlName","gravaIsn","type","checkbox","name","","id","gravaIsn"],["value","Ordinario","formControlName","tipoConcepto","type","radio","name","tipoConcepto","id",""],[1,"radiomark"],["value","Extraordinario","formControlName","tipoConcepto","type","radio","name","tipoConcepto","id",""],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"invalid-feedback"],[3,"value"]],template:function(e,t){1&e&&(r.Ob(0,"br"),r.Ob(1,"br"),r.Tb(2,"form",0),r.ac("ngSubmit",function(){return t.enviarPeticion()}),r.Ob(3,"input",1),r.Tb(4,"div",2),r.Ob(5,"br"),r.Tb(6,"div",3),r.Tb(7,"label",4),r.Ic(8,"INFORMACI\xd3N DE LA PERCEPCI\xd3N"),r.Sb(),r.Sb(),r.Tb(9,"div",3),r.Tb(10,"div",5),r.Tb(11,"label"),r.Ic(12,"Nombre de la percepci\xf3n *"),r.Sb(),r.Ob(13,"input",6),r.Gc(14,m,2,0,"div",7),r.Sb(),r.Tb(15,"div",5),r.Tb(16,"label"),r.Ic(17,"Tipo de percepci\xf3n *"),r.Sb(),r.Tb(18,"select",8),r.Tb(19,"option",9),r.Ic(20,"Periodica"),r.Sb(),r.Tb(21,"option",10),r.Ic(22,"Estandar"),r.Sb(),r.Tb(23,"option",11),r.Ic(24,"Ambos"),r.Sb(),r.Sb(),r.Gc(25,h,2,0,"div",7),r.Sb(),r.Tb(26,"div",12),r.Tb(27,"label"),r.Ic(28,"Cat\xe1logo SAT *"),r.Sb(),r.Tb(29,"select",13),r.Gc(30,f,2,2,"option",14),r.Sb(),r.Gc(31,I,2,0,"div",7),r.Sb(),r.Tb(32,"div",5),r.Tb(33,"label"),r.Ic(34,"Cuenta contable"),r.Sb(),r.Ob(35,"input",15),r.Sb(),r.Tb(36,"div",5),r.Tb(37,"label"),r.Ic(38,"Estatus"),r.Sb(),r.Tb(39,"select",16),r.Tb(40,"option",17),r.Ic(41,"Activo"),r.Sb(),r.Tb(42,"option",18),r.Ic(43,"Inactivo"),r.Sb(),r.Sb(),r.Sb(),r.Ob(44,"div",5),r.Tb(45,"div",19),r.Tb(46,"label",20),r.Ic(47,"Grava ISR "),r.Ob(48,"input",21),r.Ob(49,"span",22),r.Sb(),r.Tb(50,"label",20),r.Ic(51,"Grava ISN "),r.Ob(52,"input",23),r.Ob(53,"span",22),r.Sb(),r.Sb(),r.Tb(54,"div",5),r.Tb(55,"label"),r.Ic(56,"Tipo concepto:"),r.Sb(),r.Ob(57,"br"),r.Tb(58,"label",20),r.Ic(59," Ordinario "),r.Ob(60,"input",24),r.Ob(61,"span",25),r.Sb(),r.Tb(62,"label",20),r.Ic(63," Extraordinario "),r.Ob(64,"input",26),r.Ob(65,"span",25),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(66,"div",27),r.Tb(67,"button",28),r.ac("click",function(){return t.cancelar()}),r.Ic(68,"Cancelar"),r.Sb(),r.Tb(69,"button",29),r.Ic(70,"Guardar"),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.zb(2),r.kc("formGroup",t.myForm),r.zb(2),r.kc("pixeles",340),r.zb(9),r.kc("ngClass",r.oc(9,v,t.f.nombre.errors&&t.submitInvalido)),r.zb(1),r.kc("ngIf",t.submitInvalido&&t.f.nombre.errors),r.zb(4),r.kc("ngClass",r.oc(11,v,t.f.tipoPeriodicidad.errors&&t.submitInvalido)),r.zb(7),r.kc("ngIf",t.submitInvalido&&t.f.tipoPeriodicidad.errors),r.zb(4),r.kc("ngClass",r.oc(13,v,t.f.tipoPercepcionId.errors&&t.submitInvalido)),r.zb(1),r.kc("ngForOf",t.arregloTipoPercepcion),r.zb(1),r.kc("ngIf",t.submitInvalido&&t.f.tipoPercepcionId.errors))},directives:[c.y,c.m,c.f,c.b,c.l,c.e,p.a,c.h,i.k,i.m,c.v,c.p,c.x,i.l,u.a,c.a,c.s],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.mostrarTooltip[_ngcontent-%COMP%]{background-color:rgba(2,37,56,.64);width:100%;height:50px;top:-51px;color:#fff;font-size:smaller;border-radius:7px;padding:5px;white-space:nowrap;display:block;position:absolute}.mostrarTooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4cc1b0;text-decoration:underline}.ocultar[_ngcontent-%COMP%]{display:none}"]}),e})();const T=["nombre"];function S(e,t){1&e&&(r.Tb(0,"div",18),r.Ic(1," Campo requerido "),r.Sb())}function C(e,t){if(1&e&&(r.Tb(0,"option",19),r.Ic(1),r.Sb()),2&e){const e=t.$implicit;r.kc("value",e.tipoDeduccionId),r.zb(1),r.Jc(e.descripcion)}}function O(e,t){1&e&&(r.Tb(0,"div",18),r.Ic(1," Campo requerido "),r.Sb())}const D=function(e){return{"is-invalid":e}};let k=(()=>{class e{constructor(e,t,o,i,n,c){this.formBuild=e,this.routerPrd=t,this.routerActive=o,this.conceptosPrd=i,this.catalogosPrd=n,this.modalPrd=c,this.mostrartooltip=!1,this.id_empresa=0,this.esInsert=!1,this.submitInvalido=!1,this.arregloTipoDeduccion=[],this.estatus=!0,this.peticion=[]}ngOnInit(){this.catalogosPrd.getTipoDeduccion(this.estatus).subscribe(e=>this.arregloTipoDeduccion=e.datos),console.log("deducciones",this.arregloTipoDeduccion),this.routerActive.params.subscribe(e=>{this.id_empresa=e.id,"nuevo"==e.tipoinsert?this.esInsert=!0:"editar"==e.tipoinsert&&(this.esInsert=!1)});let e=null==history.state.data?{}:history.state.data;this.esInsert&&(e={tipoDeduccionId:{}}),this.myForm=this.createForm(e)}ngAfterViewInit(){this.nombre.nativeElement.focus()}createForm(e){return this.formBuild.group({nombre:[e.nombre,[c.w.required]],tipoDeduccionId:[e.tipoDeduccionId.tipoDeduccionId,[c.w.required]],cuentaContable:[e.cuentaContable],esActivo:[this.esInsert?{value:"true",disabled:!0}:e.esActivo],conceptoDeduccionId:[e.conceptoDeduccionId]})}enviarPeticion(){this.submitInvalido=!0,this.myForm.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.esInsert?"\xbfDeseas registrar la deducci\xf3n ?":"\xbfDeseas actualizar la deducci\xf3n?").then(e=>{if(e){let e=this.myForm.value;this.peticion={nombre:e.nombre,tipoDeduccionId:{tipoDeduccionId:e.tipoDeduccionId},cuentaContable:e.cuentaContable,esActivo:e.esActivo,centrocClienteId:{centrocClienteId:this.id_empresa}},this.esInsert?this.conceptosPrd.saveDed(this.peticion).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>{e.resultado&&this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"conceptos"])})}):(this.peticion.conceptoDeduccionId=e.conceptoDeduccionId,this.conceptosPrd.modificarDed(this.peticion).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>{e.resultado&&this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"conceptos"])})}))}})}cancelar(){this.routerPrd.navigate(["/empresa/detalle",this.id_empresa,"conceptos"])}get f(){return this.myForm.controls}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(c.c),r.Nb(n.e),r.Nb(n.a),r.Nb(d),r.Nb(l.a),r.Nb(b.a))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-detalleconceptosdeducciones"]],viewQuery:function(e,t){if(1&e&&r.Oc(T,!0),2&e){let e;r.uc(e=r.bc())&&(t.nombre=e.first)}},decls:38,vars:11,consts:[[1,"form-desing",3,"formGroup","ngSubmit"],["type","hidden","formControlName","conceptoDeduccionId"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar",3,"pixeles"],[1,"form-group","row","margen"],[1,"titulo"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-6"],["appMayusculas","","formControlName","nombre","type","text","placeholder","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-6",2,"position","relative"],["formControlName","tipoDeduccionId",1,"form-control",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["appMayusculas","","formControlName","cuentaContable","max","100","type","text","placeholder","",1,"form-control"],["name","","id","","formControlName","esActivo",1,"form-control"],["value","true"],["value","false"],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"invalid-feedback"],[3,"value"]],template:function(e,t){1&e&&(r.Ob(0,"br"),r.Ob(1,"br"),r.Tb(2,"form",0),r.ac("ngSubmit",function(){return t.enviarPeticion()}),r.Ob(3,"input",1),r.Tb(4,"div",2),r.Ob(5,"br"),r.Tb(6,"div",3),r.Tb(7,"label",4),r.Ic(8,"INFORMACI\xd3N DE LA DEDUCCI\xd3N"),r.Sb(),r.Sb(),r.Tb(9,"div",3),r.Tb(10,"div",5),r.Tb(11,"label"),r.Ic(12,"Nombre de la deducci\xf3n *"),r.Sb(),r.Ob(13,"input",6),r.Gc(14,S,2,0,"div",7),r.Sb(),r.Tb(15,"div",8),r.Tb(16,"label"),r.Ic(17,"Cat\xe1logo SAT *"),r.Sb(),r.Tb(18,"select",9),r.Gc(19,C,2,2,"option",10),r.Sb(),r.Gc(20,O,2,0,"div",7),r.Sb(),r.Tb(21,"div",5),r.Tb(22,"label"),r.Ic(23,"Cuenta contable"),r.Sb(),r.Ob(24,"input",11),r.Sb(),r.Tb(25,"div",5),r.Tb(26,"label"),r.Ic(27,"Estatus"),r.Sb(),r.Tb(28,"select",12),r.Tb(29,"option",13),r.Ic(30,"Activo"),r.Sb(),r.Tb(31,"option",14),r.Ic(32,"Inactivo"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(33,"div",15),r.Tb(34,"button",16),r.ac("click",function(){return t.cancelar()}),r.Ic(35,"Cancelar"),r.Sb(),r.Tb(36,"button",17),r.Ic(37,"Guardar"),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.zb(2),r.kc("formGroup",t.myForm),r.zb(2),r.kc("pixeles",340),r.zb(9),r.kc("ngClass",r.oc(7,D,t.f.nombre.errors&&t.submitInvalido)),r.zb(1),r.kc("ngIf",t.submitInvalido&&t.f.nombre.errors),r.zb(4),r.kc("ngClass",r.oc(9,D,t.f.tipoDeduccionId.errors&&t.submitInvalido)),r.zb(1),r.kc("ngForOf",t.arregloTipoDeduccion),r.zb(1),r.kc("ngIf",t.submitInvalido&&t.f.tipoDeduccionId.errors))},directives:[c.y,c.m,c.f,c.b,c.l,c.e,p.a,u.a,i.k,i.m,c.v,i.l,c.p,c.x],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.mostrarTooltip[_ngcontent-%COMP%]{background-color:rgba(2,37,56,.64);width:100%;height:50px;top:-51px;color:#fff;font-size:smaller;border-radius:7px;padding:5px;white-space:nowrap;display:block;position:absolute}.mostrarTooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4cc1b0;text-decoration:underline}.ocultar[_ngcontent-%COMP%]{display:none}"]}),e})();function y(e,t){1&e&&r.Ob(0,"i",22)}function x(e,t){1&e&&r.Ob(0,"i",23)}function w(e,t){if(1&e){const e=r.Ub();r.Tb(0,"button",18),r.ac("click",function(){r.yc(e);const t=r.ec();return t.changeIconDown=!t.changeIconDown}),r.Tb(1,"label",19),r.Ic(2,"RESULTADOS"),r.Sb(),r.Gc(3,y,1,0,"i",20),r.Gc(4,x,1,0,"i",21),r.Sb()}if(2&e){const e=r.ec();r.zb(3),r.kc("ngIf",e.changeIconDown),r.zb(1),r.kc("ngIf",!e.changeIconDown)}}function z(e,t){1&e&&(r.Tb(0,"button",24),r.Tb(1,"label",25),r.Ic(2,"RESULTADOS"),r.Sb(),r.Sb())}function N(e,t){1&e&&r.Ob(0,"i",37)}function A(e,t){1&e&&r.Ob(0,"i",38)}function _(e,t){1&e&&(r.Tb(0,"tr",39),r.Tb(1,"td",40),r.Tb(2,"div",41),r.Ob(3,"img",42),r.Sb(),r.Sb(),r.Sb())}function M(e,t){if(1&e&&(r.Tb(0,"tr",39),r.Tb(1,"td",40),r.Tb(2,"div",43),r.Tb(3,"article",44),r.Ic(4," Grava ISR "),r.Tb(5,"article"),r.Ic(6),r.Sb(),r.Sb(),r.Tb(7,"article",44),r.Ic(8," Grava ISN "),r.Tb(9,"article"),r.Ic(10),r.Sb(),r.Sb(),r.Tb(11,"article",44),r.Ic(12," Cuenta contable "),r.Tb(13,"article"),r.Ic(14),r.Sb(),r.Sb(),r.Tb(15,"article",44),r.Ic(16," Tipo de percepci\xf3n "),r.Tb(17,"article"),r.Ic(18),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e){const e=r.ec().$implicit;r.zb(6),r.Jc(e.gravaIsr?"Si":"No"),r.zb(4),r.Jc(e.gravaIsn?"Si":"No"),r.zb(4),r.Jc(e.cuentaContable),r.zb(4),r.Jc(e.tipoPeriodicidad)}}function E(e,t){if(1&e){const e=r.Ub();r.Rb(0),r.Tb(1,"tr"),r.Tb(2,"td"),r.Ic(3),r.Sb(),r.Tb(4,"td"),r.Ic(5),r.Sb(),r.Tb(6,"td"),r.Ic(7),r.Sb(),r.Tb(8,"td"),r.Ic(9),r.Sb(),r.Tb(10,"td",30),r.Tb(11,"button",31),r.ac("click",function(){r.yc(e);const o=t.$implicit;return r.ec(2).verdetallePer(o)}),r.Ob(12,"i",32),r.Sb(),r.Tb(13,"button",31),r.ac("click",function(){r.yc(e);const o=t.$implicit;return r.ec(2).eliminarPer(o)}),r.Ob(14,"i",33),r.Sb(),r.Tb(15,"button",31),r.ac("click",function(){r.yc(e);const o=t.index;return r.ec(2).apagandoPer(o)}),r.Gc(16,N,1,0,"i",34),r.Gc(17,A,1,0,"i",35),r.Sb(),r.Sb(),r.Sb(),r.Gc(18,_,4,0,"tr",36),r.Gc(19,M,19,4,"tr",36),r.Qb()}if(2&e){const e=t.$implicit;r.zb(3),r.Kc("",e.nombre," "),r.zb(2),r.Kc("",e.tipoConcepto," "),r.zb(2),r.Kc("",e.tipoPercepcionId.descripcion," "),r.zb(2),r.Kc("",e.esActivo?"Activo":"Inactivo"," "),r.zb(7),r.kc("ngIf",!e.seleccionado),r.zb(1),r.kc("ngIf",e.seleccionado),r.zb(1),r.kc("ngIf",e.seleccionado&&e.cargandoDetalle),r.zb(1),r.kc("ngIf",e.seleccionado&&!e.cargandoDetalle)}}function G(e,t){if(1&e&&(r.Tb(0,"table",26),r.Tb(1,"thead"),r.Tb(2,"tr"),r.Tb(3,"th",27),r.Ic(4,"Nombre de la percepci\xf3n"),r.Sb(),r.Tb(5,"th",27),r.Ic(6,"Tipo de concepto"),r.Sb(),r.Tb(7,"th",27),r.Ic(8,"Descripci\xf3n SAT"),r.Sb(),r.Tb(9,"th",27),r.Ic(10,"Estatus"),r.Sb(),r.Tb(11,"th",28),r.Ic(12,"Acciones"),r.Sb(),r.Sb(),r.Sb(),r.Tb(13,"tbody"),r.Gc(14,E,20,8,"ng-container",29),r.Sb(),r.Sb()),2&e){const e=r.ec();r.zb(14),r.kc("ngForOf",e.arreglotablaPer)}}function F(e,t){1&e&&(r.Tb(0,"div",45),r.Tb(1,"strong"),r.Ic(2,"En este momento no existen registros"),r.Sb(),r.Sb())}function j(e,t){1&e&&(r.Tb(0,"div",41),r.Ob(1,"img",42),r.Sb())}function J(e,t){1&e&&r.Ob(0,"i",37)}function $(e,t){1&e&&r.Ob(0,"i",38)}function L(e,t){1&e&&(r.Tb(0,"tr",39),r.Tb(1,"td",40),r.Tb(2,"div",41),r.Ob(3,"img",42),r.Sb(),r.Sb(),r.Sb())}function R(e,t){if(1&e&&(r.Tb(0,"tr",39),r.Tb(1,"td",40),r.Tb(2,"div",43),r.Tb(3,"article",44),r.Ic(4," Cuenta contable "),r.Tb(5,"article"),r.Ic(6),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e){const e=r.ec().$implicit;r.zb(6),r.Jc(e.cuentaContable)}}function q(e,t){if(1&e){const e=r.Ub();r.Rb(0),r.Tb(1,"tr"),r.Tb(2,"td"),r.Ic(3),r.Sb(),r.Tb(4,"td"),r.Ic(5),r.Sb(),r.Tb(6,"td"),r.Ic(7),r.Sb(),r.Tb(8,"td",30),r.Tb(9,"button",31),r.ac("click",function(){r.yc(e);const o=t.$implicit;return r.ec(2).verdetalleDed(o)}),r.Ob(10,"i",32),r.Sb(),r.Tb(11,"button",31),r.ac("click",function(){r.yc(e);const o=t.$implicit;return r.ec(2).eliminarDed(o)}),r.Ob(12,"i",33),r.Sb(),r.Tb(13,"button",31),r.ac("click",function(){r.yc(e);const o=t.index;return r.ec(2).apagandoDed(o)}),r.Gc(14,J,1,0,"i",34),r.Gc(15,$,1,0,"i",35),r.Sb(),r.Sb(),r.Sb(),r.Gc(16,L,4,0,"tr",36),r.Gc(17,R,7,1,"tr",36),r.Qb()}if(2&e){const e=t.$implicit;r.zb(3),r.Kc("",e.nombre," "),r.zb(2),r.Kc("",e.tipoDeduccionId.descripcion," "),r.zb(2),r.Kc("",e.esActivo?"Activo":"Inactivo"," "),r.zb(7),r.kc("ngIf",!e.seleccionado),r.zb(1),r.kc("ngIf",e.seleccionado),r.zb(1),r.kc("ngIf",e.seleccionado&&e.cargandoDetalle),r.zb(1),r.kc("ngIf",e.seleccionado&&!e.cargandoDetalle)}}function K(e,t){if(1&e&&(r.Tb(0,"table",26),r.Tb(1,"thead"),r.Tb(2,"tr"),r.Tb(3,"th",27),r.Ic(4,"Nombre de la deducci\xf3n"),r.Sb(),r.Tb(5,"th",27),r.Ic(6,"Descripci\xf3n SAT"),r.Sb(),r.Tb(7,"th",27),r.Ic(8,"Estatus"),r.Sb(),r.Tb(9,"th",28),r.Ic(10,"Acciones"),r.Sb(),r.Sb(),r.Sb(),r.Tb(11,"tbody"),r.Gc(12,q,18,7,"ng-container",29),r.Sb(),r.Sb()),2&e){const e=r.ec();r.zb(12),r.kc("ngForOf",e.arreglotablaDed)}}function U(e,t){1&e&&(r.Tb(0,"div",45),r.Tb(1,"strong"),r.Ic(2,"En este momento no existen registros"),r.Sb(),r.Sb())}function B(e,t){1&e&&(r.Tb(0,"div",41),r.Ob(1,"img",42),r.Sb())}const H=[{path:"",children:[{path:"conceptos",component:(()=>{class e{constructor(e,t,o,i){this.conceptosPrd=e,this.routerPrd=t,this.routerActive=o,this.modalPrd=i,this.tamanio=0,this.changeIconDown=!1,this.nombre="",this.cargando=!1,this.id_empresa=0,this.aparecemodalito=!1,this.scrolly="5%",this.modalWidth="55%",this.cargandodetallegrupo=!1,this.indexSeleccionado=0,this.arreglotablaPer=[],this.arreglotablaDed=[],this.arreglodetalle=[]}onResize(e){this.tamanio=e.target.innerWidth,this.modalWidth=this.tamanio<600?"90%":"55%"}ngOnInit(){let e=document.defaultView;this.tamanio=e.innerWidth,this.routerActive.params.subscribe(e=>{this.id_empresa=e.id,this.cargando=!0,this.conceptosPrd.getListaConceptoPercepcion(this.id_empresa).subscribe(e=>{void 0!==e.datos&&e.datos.forEach(e=>{var t;e.descripcion=null===(t=e.tipoPercepcionId)||void 0===t?void 0:t.descripcion,"O"==e.tipoConcepto&&(e.tipoConcepto="Ordinario"),"E"==e.tipoConcepto&&(e.tipoConcepto="Extraordinario"),"P"==e.tipoPeriodicidad&&(e.tipoPeriodicidad="Periodica"),"E"==e.tipoPeriodicidad&&(e.tipoPeriodicidad="Estandar"),"A"==e.tipoPeriodicidad&&(e.tipoPeriodicidad="Ambos")}),this.arreglotablaPer=e.datos,this.cargando=!1}),this.conceptosPrd.getListaConceptoDeduccion(this.id_empresa).subscribe(e=>{this.arreglotablaDed=e.datos,this.cargando=!1})})}filtrar(){}eliminarPer(e){this.objEnviar={conceptoPercepcionId:e.conceptoPercepcionId,tipoPercepcionId:{tipoPercepcionId:e.tipoPercepcionId.tipoPercepcionId},centrocClienteId:e.centrocClienteId},this.modalPrd.showMessageDialog(this.modalPrd.warning,"\xbfDeseas eliminar la percepci\xf3n?").then(e=>{e&&this.conceptosPrd.eliminarPer(this.objEnviar).subscribe(e=>{this.cargando=!1,this.modalPrd.showMessageDialog(e.resultado,e.mensaje),e.resultado&&this.conceptosPrd.getListaConceptoPercepcion(this.id_empresa).subscribe(e=>{void 0!==e.datos&&e.datos.forEach(e=>{var t;e.descripcion=null===(t=e.tipoPercepcionId)||void 0===t?void 0:t.descripcion,"O"==e.tipoConcepto&&(e.tipoConcepto="Ordinario"),"E"==e.tipoConcepto&&(e.tipoConcepto="Extraordinario"),"P"==e.tipoPeriodicidad&&(e.tipoPeriodicidad="Periodica"),"E"==e.tipoPeriodicidad&&(e.tipoPeriodicidad="Estandar"),"A"==e.tipoPeriodicidad&&(e.tipoPeriodicidad="Ambos")}),this.arreglotablaPer=e.datos,this.cargando=!1})})})}eliminarDed(e){this.objEnviar={conceptoDeduccionId:e.conceptoDeduccionId,tipoDeduccionId:{tipoDeduccionId:e.tipoDeduccionId.tipoDeduccionId},centrocClienteId:e.centrocClienteId},this.modalPrd.showMessageDialog(this.modalPrd.warning,"\xbfDeseas eliminar la deducci\xf3n?").then(e=>{e&&this.conceptosPrd.eliminarDed(this.objEnviar).subscribe(e=>{this.cargando=!1,this.modalPrd.showMessageDialog(e.resultado,e.mensaje),e.resultado&&this.conceptosPrd.getListaConceptoDeduccion(this.id_empresa).subscribe(e=>{this.arreglotablaDed=e.datos})})})}verdetallePer(e){null==e?this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"conceptosPercepciones","nuevo"]):this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"conceptosPercepciones","editar"],{state:{data:e}})}verdetalleDed(e){null==e?this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"conceptosDeducciones","nuevo"]):this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"conceptosDeducciones","editar"],{state:{data:e}})}apagandoPer(e){for(let t=0;t<this.arreglotablaPer.length;t++)t!=e&&(this.arreglotablaPer[t].seleccionado=!1);this.arreglotablaPer[e].seleccionado=!this.arreglotablaPer[e].seleccionado}apagandoDed(e){for(let t=0;t<this.arreglotablaDed.length;t++)t!=e&&(this.arreglotablaDed[t].seleccionado=!1);this.arreglotablaDed[e].seleccionado=!this.arreglotablaDed[e].seleccionado}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(d),r.Nb(n.e),r.Nb(n.a),r.Nb(b.a))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-listasconceptospercepciones"]],hostBindings:function(e,t){1&e&&r.ac("resize",function(e){return t.onResize(e)},!1,r.xc)},decls:33,vars:8,consts:[[1,"scrooll-designempresa"],[1,"row"],[1,"col-12","col-lg-12"],["id","accordionFiltro"],["id","accordion"],[1,"card"],["id","headingOne",1,"card-header"],[1,"mb-0"],["style","width: 100%;","class","btn btn-link aparece-movil","data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",3,"click",4,"ngIf"],["class","btn btn-link aparece-desktop-inline-block",4,"ngIf"],[1,"row",2,"margin","10px"],[1,"col-12","col-lg-12","text-right"],["type","button",1,"btn","btn-light","button-outlet",3,"click"],[1,"fa","fa-plus"],["id","vetanaprincipaltabla",1,"row","margen","margen-tabla","background-panel","scrooll",2,"position","relative"],["class","table table-hover table-sm",4,"ngIf"],["class","alert  col text-center",4,"ngIf"],["class","col text-center mb-5",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"btn","btn-link","aparece-movil",2,"width","100%",3,"click"],[1,"titulo",2,"width","80%","float","left","text-align","left"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-up ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-down ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-up",2,"width","10%","float","right","color","#00C1AF"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-down",2,"width","10%","float","right","color","#00C1AF"],[1,"btn","btn-link","aparece-desktop-inline-block"],[1,"titulo"],[1,"table","table-hover","table-sm"],["scope","col"],["scope","col "],[4,"ngFor","ngForOf"],[1,"opciones"],[3,"click"],[1,"icon_editar","primary-bg"],[1,"icon_eliminar","danger-bg"],["class","fas fa-chevron-down primary","style","font-size: 14px;\n                margin: 9px;",4,"ngIf"],["class","fas fa-chevron-up primary","style","font-size: 14px;\n                margin: 9px;",4,"ngIf"],["class","slide-in-bck-center",4,"ngIf"],[1,"fas","fa-chevron-down","primary",2,"font-size","14px","margin","9px"],[1,"fas","fa-chevron-up","primary",2,"font-size","14px","margin","9px"],[1,"slide-in-bck-center"],["colspan","5"],[1,"col","text-center","mb-5"],["width","60px","height","60px","src","assets/imgs/loading_nomina.gif","alt",""],[1,"row","mb-4"],[1,"titulo","col"],[1,"alert","col","text-center"]],template:function(e,t){1&e&&(r.Ob(0,"br"),r.Ob(1,"br"),r.Tb(2,"div",0),r.Tb(3,"div",1),r.Tb(4,"div",2),r.Tb(5,"div",3),r.Tb(6,"div",4),r.Tb(7,"div",5),r.Tb(8,"div",6),r.Tb(9,"h5",7),r.Gc(10,w,5,2,"button",8),r.Gc(11,z,3,0,"button",9),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(12,"div",10),r.Tb(13,"div",11),r.Tb(14,"button",12),r.ac("click",function(){return t.verdetallePer(void 0)}),r.Ob(15,"i",13),r.Ic(16," Agregar percepci\xf3n "),r.Sb(),r.Sb(),r.Sb(),r.Tb(17,"div",14),r.Gc(18,G,15,1,"table",15),r.Gc(19,F,3,0,"div",16),r.Gc(20,j,2,0,"div",17),r.Sb(),r.Sb(),r.Ob(21,"br"),r.Ob(22,"br"),r.Tb(23,"div",0),r.Tb(24,"div",10),r.Tb(25,"div",11),r.Tb(26,"button",12),r.ac("click",function(){return t.verdetalleDed(void 0)}),r.Ob(27,"i",13),r.Ic(28," Agregar deducci\xf3n "),r.Sb(),r.Sb(),r.Sb(),r.Tb(29,"div",14),r.Gc(30,K,13,1,"table",15),r.Gc(31,U,3,0,"div",16),r.Gc(32,B,2,0,"div",17),r.Sb(),r.Sb()),2&e&&(r.zb(10),r.kc("ngIf",t.tamanio<600),r.zb(1),r.kc("ngIf",t.tamanio>=600),r.zb(7),r.kc("ngIf",!t.cargando&&void 0!==t.arreglotablaPer),r.zb(1),r.kc("ngIf",!t.cargando&&void 0===t.arreglotablaPer),r.zb(1),r.kc("ngIf",t.cargando),r.zb(10),r.kc("ngIf",!t.cargando&&void 0!==t.arreglotablaDed),r.zb(1),r.kc("ngIf",!t.cargando&&void 0===t.arreglotablaDed),r.zb(1),r.kc("ngIf",t.cargando))},directives:[i.m,i.l],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),e})()},{path:"conceptosPercepciones/:tipoinsert",component:P},{path:"conceptosDeducciones/:tipoinsert",component:k}]}];let V=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(H)]]}),e})();var Q=o("HaJA");let W=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},providers:[d],imports:[[i.c,V,Q.a,c.g,c.u,a.c]]}),e})()}}]);