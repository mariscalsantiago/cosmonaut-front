(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{XFKe:function(o,e,a){"use strict";a.r(e),a.d(e,"empresaApoderadoLegalModule",function(){return G});var t=a("3Pt+"),r=a("ofXK"),n=a("HaJA"),i=a("pKmL"),l=a("tyNb"),c=a("DpdX"),d=a("fXoL"),s=a("tk/3"),b=a("xIjt");let p=(()=>{class o{constructor(o){this.http=o,this.url="",this.url=b.a.usuarios}getAllUsersRep(o){const e={headers:new s.d({"Content-Type":"application/json"})};let a=JSON.stringify(o);return console.log("json representante legal"),console.log(a),this.http.post(this.url+"/lista/compania/tipoPersona",a,e)}getByRep(o){return this.http.get(`${this.url}/obtener/id/compania/${o}`)}filtrar(o){const e={headers:new s.d({"Content-Type":"application/json"})};let a=JSON.stringify(o);return console.log("json representante legal"),console.log(a),this.http.post(this.url+"/lista/dinamica",a,e)}save(o){const e={headers:new s.d({"Content-Type":"application/json"})};let a=JSON.stringify(o);return console.log("representante",a),this.http.put(this.url+"/guardar/apoderadoLegal",a,e)}modificar(o){const e={headers:new s.d({"Content-Type":"application/json"})};let a=JSON.stringify(o);return this.http.post(this.url+"/modificar/apoderadoLegal",a,e)}getAllCompany(){return this.http.get(b.a.centroCostosCliente+"/lista/compania")}}return o.\u0275fac=function(e){return new(e||o)(d.Xb(s.b))},o.\u0275prov=d.Jb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var u=a("JBW2");function g(o,e){1&o&&d.Ob(0,"i",29)}function m(o,e){1&o&&d.Ob(0,"i",30)}function f(o,e){if(1&o){const o=d.Ub();d.Tb(0,"button",25),d.ac("click",function(){d.zc(o);const e=d.ec();return e.changeIconDown=!e.changeIconDown}),d.Tb(1,"label",26),d.Jc(2,"B\xdaSQUEDA"),d.Sb(),d.Hc(3,g,1,0,"i",27),d.Hc(4,m,1,0,"i",28),d.Sb()}if(2&o){const o=d.ec();d.zb(3),d.kc("ngIf",o.changeIconDown),d.zb(1),d.kc("ngIf",!o.changeIconDown)}}function h(o,e){1&o&&(d.Tb(0,"button",31),d.Tb(1,"label",32),d.Jc(2,"B\xdaSQUEDA"),d.Sb(),d.Sb())}function v(o,e){if(1&o){const o=d.Ub();d.Tb(0,"div",33),d.Tb(1,"div",34),d.Tb(2,"button",35),d.ac("click",function(){return d.zc(o),d.ec().verdetalle(void 0)}),d.Ob(3,"i",36),d.Jc(4," Agregar apoderado legal "),d.Sb(),d.Sb(),d.Sb()}}const C=function(o){return{show:o}};let P=(()=>{class o{constructor(o,e,a){this.routerPrd=o,this.apoderadoProd=e,this.CanRouterPrd=a,this.tamanio=0,this.cargando=!1,this.id_empresa=0,this.multiseleccion=!1,this.multiseleccionloading=!1,this.changeIconDown=!1,this.numeroitems=5,this.arreglopaginas=[],this.nombre="",this.apellidoPaterno="",this.apellidoMaterno="",this.contactoInicialEmailPersonal="",this.nacionalidadId="",this.emailCorporativo="",this.arreglotabla={columnas:[],filas:[]},this.arreglo=[]}onResize(o){this.tamanio=o.target.innerWidth}ngOnInit(){let o=document.defaultView;this.tamanio=o.innerWidth,this.cargando=!0,this.CanRouterPrd.params.subscribe(o=>{this.id_empresa=o.id,this.apoderadoProd.getAllUsersRep({centrocClienteId:{centrocClienteId:this.id_empresa},tipoPersonaId:{tipoPersonaId:6}}).subscribe(o=>{this.realizarTabla(o)})})}realizarTabla(o){var e;console.log("Lista apoderados",o),this.arreglo=o.datos;let a=[new c.a("personaId","ID"),new c.a("nombre","Nombre"),new c.a("apellidoPaterno","Primer apellido"),new c.a("apellidoMaterno","Segundo apellido"),new c.a("curp","CURP"),new c.a("emailCorporativo","Correo empresarial"),new c.a("poderNotarial","Poder notarial"),new c.a("esActivo","Estatus de apoderado")];if(void 0!==this.arreglo)for(let t of this.arreglo){t.fechaAlta=new Date(t.fechaAlta).toUTCString().replace(" 00:00:00 GMT","");let o=new r.f("es-MX");t.fechaAlta=null===(e=o.transform(t.fechaAlta,"dd-MMM-y"))||void 0===e?void 0:e.replace(".",""),t.esActivo&&(t.esActivo="Activo"),t.esActivo||(t.esActivo="Inactivo")}this.arreglotabla.columnas=a,this.arreglotabla.filas=this.arreglo,this.cargando=!1}realizarTablaFiltro(o){var e;this.arreglo=o.datos;let a=[new c.a("personaId","ID"),new c.a("nombre","Nombre"),new c.a("apellidoPaterno","Primer apellido"),new c.a("apellidoMaterno","Segundo apellido"),new c.a("curp","CURP"),new c.a("emailCorporativo","Correo empresarial"),new c.a("poderNotarial","Poder notarial"),new c.a("esActivo","Estatus de apoderado")];if(void 0!==this.arreglo)for(let t of this.arreglo){t.fechaAlta=new Date(t.fechaAlta).toUTCString().replace(" 00:00:00 GMT","");let o=new r.f("es-MX");t.fechaAlta=null===(e=o.transform(t.fechaAlta,"dd-MMM-y"))||void 0===e?void 0:e.replace(".",""),t.esActivo=t.activo,t.esActivo&&(t.esActivo="Activo"),t.esActivo||(t.esActivo="Inactivo")}this.arreglotabla.columnas=a,this.arreglotabla.filas=this.arreglo,this.cargando=!1}verdetalle(o){this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"apoderadoLegal","nuevo"],{state:{data:o}})}filtrar(){this.cargando=!0;let o={nombre:this.nombre,apellidoPaterno:this.apellidoPaterno,apellidoMaterno:this.apellidoMaterno,emailCorporativo:this.emailCorporativo,contactoInicialEmailPersonal:this.contactoInicialEmailPersonal,centrocClienteId:{centrocClienteId:0==this.id_empresa?"":this.id_empresa},tipoPersonaId:{tipoPersonaId:6}};this.cargando=!0,this.apoderadoProd.filtrar(o).subscribe(o=>{this.realizarTablaFiltro(o)})}recibirTabla(o){"editar"==o.type&&this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"apoderadoLegal","modifica"],{state:{data:o.datos}})}}return o.\u0275fac=function(e){return new(e||o)(d.Nb(l.e),d.Nb(p),d.Nb(l.a))},o.\u0275cmp=d.Hb({type:o,selectors:[["app-listaapoderadoLegal"]],hostBindings:function(o,e){1&o&&d.ac("resize",function(o){return e.onResize(o)},!1,d.yc)},decls:33,vars:14,consts:[[1,"scrooll-designempresa"],[1,"margen"],["id","accordionFiltro"],["id","accordion"],[1,"card"],["id","headingOne",1,"card-header"],[1,"mb-0"],["style","width: 100%;","class","btn btn-link aparece-movil","data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",3,"click",4,"ngIf"],["class","btn btn-link aparece-desktop-inline-block",4,"ngIf"],["id","collapseOne","aria-labelledby","headingOne","data-parent","#accordion",1,"collapse",3,"ngClass"],[1,"card-body"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-md-6","col-lg-4"],["type","text","placeholder","Nombre de apoderado legal",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Primer apellido",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Segundo apellido",1,"form-control",3,"ngModel","ngModelChange"],["type","email","placeholder","Correo empresarial",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Correo personal",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-sm","mb-3","text-center","col-12","col-sm-2"],["type","button",1,"btn","btn-primary","button-outlet",3,"click"],[1,"row","margen"],[1,"col","titulo"],["class","row","style","  margin-top: 10px;  width: 100%;",4,"ngIf"],[1,"row","margen","margen-tabla","background-panel"],[3,"datos","editar","cargando","salida"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"btn","btn-link","aparece-movil",2,"width","100%",3,"click"],[1,"titulo",2,"width","80%","float","left","text-align","left"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-up ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-down ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-up",2,"width","10%","float","right","color","#00C1AF"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-down",2,"width","10%","float","right","color","#00C1AF"],[1,"btn","btn-link","aparece-desktop-inline-block"],[1,"titulo"],[1,"row",2,"margin-top","10px","width","100%"],[1,"col","text-right"],["type","button",1,"btn","btn-light","button-outlet",3,"click"],[1,"fa","fa-plus"]],template:function(o,e){1&o&&(d.Tb(0,"div",0),d.Ob(1,"br"),d.Tb(2,"div",1),d.Tb(3,"div",2),d.Tb(4,"div",3),d.Tb(5,"div",4),d.Tb(6,"div",5),d.Tb(7,"h5",6),d.Hc(8,f,5,2,"button",7),d.Hc(9,h,3,0,"button",8),d.Sb(),d.Sb(),d.Tb(10,"div",9),d.Tb(11,"div",10),d.Tb(12,"div",11),d.Tb(13,"div",12),d.Tb(14,"input",13),d.ac("ngModelChange",function(o){return e.nombre=o}),d.Sb(),d.Sb(),d.Tb(15,"div",12),d.Tb(16,"input",14),d.ac("ngModelChange",function(o){return e.apellidoPaterno=o}),d.Sb(),d.Sb(),d.Tb(17,"div",12),d.Tb(18,"input",15),d.ac("ngModelChange",function(o){return e.apellidoMaterno=o}),d.Sb(),d.Sb(),d.Tb(19,"div",12),d.Tb(20,"input",16),d.ac("ngModelChange",function(o){return e.emailCorporativo=o}),d.Sb(),d.Sb(),d.Tb(21,"div",12),d.Tb(22,"input",17),d.ac("ngModelChange",function(o){return e.contactoInicialEmailPersonal=o}),d.Sb(),d.Sb(),d.Tb(23,"div",18),d.Tb(24,"button",19),d.ac("click",function(){return e.filtrar()}),d.Jc(25,"Filtrar"),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(26,"div",20),d.Tb(27,"div",21),d.Tb(28,"label"),d.Jc(29,"RESULTADOS"),d.Sb(),d.Sb(),d.Hc(30,v,5,0,"div",22),d.Sb(),d.Tb(31,"div",23),d.Tb(32,"app-tablapaginado",24),d.ac("salida",function(o){return e.recibirTabla(o)}),d.Sb(),d.Sb(),d.Sb()),2&o&&(d.zb(8),d.kc("ngIf",e.tamanio<600),d.zb(1),d.kc("ngIf",e.tamanio>=600),d.zb(1),d.kc("ngClass",d.oc(12,C,e.tamanio>600)),d.zb(4),d.kc("ngModel",e.nombre),d.zb(2),d.kc("ngModel",e.apellidoPaterno),d.zb(2),d.kc("ngModel",e.apellidoMaterno),d.zb(2),d.kc("ngModel",e.emailCorporativo),d.zb(2),d.kc("ngModel",e.contactoInicialEmailPersonal),d.zb(8),d.kc("ngIf",!e.multiseleccion),d.zb(2),d.kc("datos",e.arreglotabla)("editar",!0)("cargando",e.cargando))},directives:[r.m,r.k,t.b,t.l,t.o,u.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),o})();var T=a("04Ps"),I=a("i9e2"),S=a("dkea"),M=a("gYgu"),w=a("cCUj");const O=["nombre"];function k(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Campo requerido "),d.Sb())}function y(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Campo requerido "),d.Sb())}function A(o,e){if(1&o&&(d.Tb(0,"option",32),d.Jc(1),d.Sb()),2&o){const o=e.$implicit;d.kc("value",o.nacionalidadId),d.zb(1),d.Kc(o.descripcion)}}function x(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Campo requerido "),d.Sb())}function z(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Campo requerido "),d.Sb())}function E(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," RFC inv\xe1lido, favor de verificar "),d.Sb())}function N(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Campo requerido "),d.Sb())}function J(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," CURP inv\xe1lida, favor de verificar "),d.Sb())}function _(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Campo requerido "),d.Sb())}function F(o,e){if(1&o&&(d.Tb(0,"option",32),d.Jc(1),d.Sb()),2&o){const o=e.$implicit;d.kc("value",o.facultadPoderId),d.zb(1),d.Kc(o.descripcion)}}function H(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Campo requerido "),d.Sb())}function D(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Campo requerido "),d.Sb())}function q(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Correo empresarial inv\xe1lido "),d.Sb())}function L(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Correo personal inv\xe1lido "),d.Sb())}function R(o,e){1&o&&(d.Tb(0,"div",31),d.Jc(1," Campo requerido "),d.Sb())}const j=function(o){return{"is-invalid":o}},U=[{path:"",children:[{path:"apoderadoLegal",component:P},{path:"apoderadoLegal/:tipoinsert",component:(()=>{class o{constructor(o,e,a,t,r,n){this.formBuilder=o,this.apoderadoPrd=e,this.routerActivePrd=a,this.routerPrd=t,this.catalogosPrd=r,this.modalPrd=n,this.arreglo=[],this.arreglonacionalidad=[],this.insertar=!1,this.fechaActual="",this.nacionalidad="",this.cargando=!1,this.multiseleccion=!1,this.multiseleccionloading=!1,this.centrocClienteId=0,this.tipoRepresentanteId=1,this.submitEnviado=!1,this.arregloFacultadPoder=[],this.objEnviar=[],this.constNacionalidad=1,this.routerActivePrd.params.subscribe(o=>{this.insertar="nuevo"==o.tipoinsert,this.centrocClienteId=o.id})}ngOnInit(){let o=null==history.state.data?{}:history.state.data;this.insertar&&(o={nacionalidadId:{},facultadPoderId:{}}),this.myFormrep=this.createFormrep(o),this.catalogosPrd.getNacinalidades(!0).subscribe(o=>this.arreglonacionalidad=o.datos),this.catalogosPrd.getFacultadPoder(!0).subscribe(o=>this.arregloFacultadPoder=o.datos)}ngAfterViewInit(){this.nombre.nativeElement.focus()}createFormrep(o){var e,a;return new r.f("en-MX"),this.insertar?o.nacionalidadId.nacionalidadId=this.constNacionalidad:o.esActivo="Activo"==o.esActivo,this.formBuilder.group({nombre:[o.nombre,[t.w.required]],apellidoPaterno:[o.apellidoPaterno,[t.w.required]],celular:[o.celular,[]],apellidoMaterno:[o.apellidoMaterno],rfc:[o.rfc,[t.w.required,t.w.pattern("^([A-Z\xd1&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$")]],nacionalidadId:[null===(e=o.nacionalidadId)||void 0===e?void 0:e.nacionalidadId,[t.w.required]],curp:[o.curp,[t.w.required,t.w.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)]],emailCorporativo:[o.emailCorporativo,[t.w.required,t.w.email]],contactoInicialEmailPersonal:[o.contactoInicialEmailPersonal,[t.w.email]],contactoInicialTelefono:[o.contactoInicialTelefono,[t.w.required]],poderNotarial:[o.poderNotarial,[t.w.required]],facultadPoderId:[null===(a=o.facultadPoderId)||void 0===a?void 0:a.facultadPoderId,[t.w.required]],esActivo:[{value:!!this.insertar||o.esActivo,disabled:this.insertar},[t.w.required]],personaId:o.personaId})}activarMultiseleccion(){this.multiseleccion=!0}guardarMultiseleccion(){this.multiseleccionloading=!0,setTimeout(()=>{this.multiseleccionloading=!1,this.multiseleccion=!1},3e3)}cancelarMulti(){this.multiseleccionloading=!1,this.multiseleccion=!1}enviarPeticion(){this.submitEnviado=!0,this.myFormrep.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.insertar?"\xbfDesea registrar al apoderado legal":"\xbfDesea actualizar los datos del apoderado legal?").then(o=>{if(o){let o=this.myFormrep.value;o.esActivo="Activo"==o.esActivo?"true":"false",this.objEnviar={nombre:o.nombre,apellidoPaterno:o.apellidoPaterno,apellidoMaterno:o.apellidoMaterno,celular:o.celular,curp:o.curp,emailCorporativo:o.emailCorporativo,contactoInicialEmailPersonal:o.contactoInicialEmailPersonal,rfc:o.rfc,esActivo:o.esActivo,poderNotarial:o.poderNotarial,contactoInicialTelefono:o.contactoInicialTelefono,centrocClienteId:{centrocClienteId:this.centrocClienteId},nacionalidadId:{nacionalidadId:o.nacionalidadId},facultadPoderId:{facultadPoderId:o.facultadPoderId}},this.insertar?(this.modalPrd.showMessageDialog(this.modalPrd.loading),this.apoderadoPrd.save(this.objEnviar).subscribe(o=>{this.modalPrd.showMessageDialog(this.modalPrd.loadingfinish),this.modalPrd.showMessageDialog(o.resultado,o.mensaje).then(()=>{o.resultado&&this.routerPrd.navigate(["/empresa/detalle/"+this.centrocClienteId+"/apoderadoLegal"])})})):(this.objEnviar.personaId=o.personaId,this.apoderadoPrd.modificar(this.objEnviar).subscribe(o=>{this.modalPrd.showMessageDialog(o.resultado,o.mensaje).then(()=>{o.resultado&&this.routerPrd.navigate(["/empresa/detalle/"+this.centrocClienteId+"/apoderadoLegal"])})}))}})}redirect(o){this.routerPrd.navigate(["/empresa/detalle/"+this.centrocClienteId+"/apoderadoLegal"])}recibirTabla(o){"editar"==o.type&&this.routerPrd.navigate(["company","detalle_company","modifica"],{state:{datos:o.datos}})}get f(){return this.myFormrep.controls}}return o.\u0275fac=function(e){return new(e||o)(d.Nb(t.c),d.Nb(p),d.Nb(l.a),d.Nb(l.e),d.Nb(T.a),d.Nb(I.a))},o.\u0275cmp=d.Hb({type:o,selectors:[["app-detalleapoderadoLegal"]],viewQuery:function(o,e){if(1&o&&d.Qc(O,!0),2&o){let o;d.vc(o=d.bc())&&(e.nombre=o.first)}},decls:89,vars:47,consts:[[1,"form-desing",3,"formGroup","ngSubmit"],["type","hidden","formControlName","personaId"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar",3,"pixeles"],[1,"form-group","row","margen"],[1,"titulo"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-sm-12","col-md-6","col-lg-4","col-xl-3"],["formControlName","nombre","appMayusculas","","type","text","placeholder","",1,"form-control",3,"ngClass"],["nombre",""],["class","invalid-feedback",4,"ngIf"],["formControlName","apellidoPaterno","appMayusculas","","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","apellidoMaterno","appMayusculas","","type","text","id","apellidoMaterno","aria-describedby","apellidoMaterno","placeholder","",1,"form-control"],["formControlName","nacionalidadId","type","text",1,"form-control",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["maxlength","13","formControlName","rfc","type","text","name","",1,"form-control",3,"ngClass"],["formControlName","curp","maxlength","18","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","poderNotarial","maxlength","30","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","facultadPoderId","type","text",1,"form-control",3,"ngClass"],["formControlName","emailCorporativo","type","email","placeholder","",1,"form-control","text-lowercase",3,"ngClass"],["formControlName","contactoInicialEmailPersonal","type","email","placeholder","",1,"form-control","text-lowercase",3,"ngClass"],["appSolonumeros","","formControlName","contactoInicialTelefono","maxlength","10","type","text","placeholder","",1,"form-control",3,"ngClass"],["appSolonumeros","","formControlName","celular","maxlength","10","type","text","placeholder","",1,"form-control"],[1,"input-group-sm","mb-4","col-12","col-sm-12","col-md-6","col-lg-4","col-xl-3"],["for","exampleFormControlSelect1"],["formControlName","esActivo",1,"form-control"],["value","true","selected",""],["value","false"],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"eventoFunciones","click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"invalid-feedback"],[3,"value"]],template:function(o,e){1&o&&(d.Ob(0,"br"),d.Ob(1,"br"),d.Tb(2,"form",0),d.ac("ngSubmit",function(){return e.enviarPeticion()}),d.Ob(3,"input",1),d.Tb(4,"div",2),d.Ob(5,"br"),d.Tb(6,"div",3),d.Tb(7,"label",4),d.Jc(8,"INFORMACI\xd3N DE APODERADO LEGAL"),d.Sb(),d.Sb(),d.Tb(9,"div",5),d.Tb(10,"div",6),d.Tb(11,"label"),d.Jc(12,"Nombre *"),d.Sb(),d.Ob(13,"input",7,8),d.Hc(15,k,2,0,"div",9),d.Sb(),d.Tb(16,"div",6),d.Tb(17,"label"),d.Jc(18,"Primer apellido *"),d.Sb(),d.Ob(19,"input",10),d.Hc(20,y,2,0,"div",9),d.Sb(),d.Tb(21,"div",6),d.Tb(22,"label"),d.Jc(23,"Segundo apellido"),d.Sb(),d.Ob(24,"input",11),d.Sb(),d.Tb(25,"div",6),d.Tb(26,"label"),d.Jc(27,"Nacionalidad *"),d.Sb(),d.Tb(28,"select",12),d.Ob(29,"option",13),d.Hc(30,A,2,2,"option",14),d.Sb(),d.Hc(31,x,2,0,"div",9),d.Sb(),d.Tb(32,"div",6),d.Tb(33,"label"),d.Jc(34,"RFC *"),d.Sb(),d.Ob(35,"input",15),d.Hc(36,z,2,0,"div",9),d.Hc(37,E,2,0,"div",9),d.Sb(),d.Tb(38,"div",6),d.Tb(39,"label"),d.Jc(40,"CURP *"),d.Sb(),d.Ob(41,"input",16),d.Hc(42,N,2,0,"div",9),d.Hc(43,J,2,0,"div",9),d.Sb(),d.Tb(44,"div",6),d.Tb(45,"label"),d.Jc(46,"Poder notarial *"),d.Sb(),d.Ob(47,"input",17),d.Hc(48,_,2,0,"div",9),d.Sb(),d.Tb(49,"div",6),d.Tb(50,"label"),d.Jc(51,"Facultad *"),d.Sb(),d.Tb(52,"select",18),d.Ob(53,"option",13),d.Hc(54,F,2,2,"option",14),d.Sb(),d.Hc(55,H,2,0,"div",9),d.Sb(),d.Tb(56,"div",6),d.Tb(57,"label"),d.Jc(58,"Correo empresarial *"),d.Sb(),d.Ob(59,"input",19),d.Hc(60,D,2,0,"div",9),d.Hc(61,q,2,0,"div",9),d.Sb(),d.Tb(62,"div",6),d.Tb(63,"label"),d.Jc(64,"Correo personal"),d.Sb(),d.Ob(65,"input",20),d.Hc(66,L,2,0,"div",9),d.Sb(),d.Tb(67,"div",6),d.Tb(68,"label"),d.Jc(69,"Tel\xe9fono *"),d.Sb(),d.Ob(70,"input",21),d.Hc(71,R,2,0,"div",9),d.Sb(),d.Tb(72,"div",6),d.Tb(73,"label"),d.Jc(74,"Celular"),d.Sb(),d.Ob(75,"input",22),d.Sb(),d.Tb(76,"div",23),d.Tb(77,"label",24),d.Jc(78,"Estatus de apoderado legal *"),d.Sb(),d.Tb(79,"select",25),d.Tb(80,"option",26),d.Jc(81,"ACTIVO"),d.Sb(),d.Tb(82,"option",27),d.Jc(83,"INACTIVO"),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(84,"div",28),d.Tb(85,"button",29),d.ac("eventoFunciones",function(o){return e.redirect(o)})("click",function(){return e.redirect(void 0)}),d.Jc(86,"Cancelar"),d.Sb(),d.Tb(87,"button",30),d.Jc(88,"Guardar"),d.Sb(),d.Sb(),d.Sb()),2&o&&(d.zb(2),d.kc("formGroup",e.myFormrep),d.zb(2),d.kc("pixeles",340),d.zb(9),d.kc("ngClass",d.oc(27,j,e.f.nombre.errors&&e.submitEnviado)),d.zb(2),d.kc("ngIf",e.f.nombre.errors&&e.submitEnviado),d.zb(4),d.kc("ngClass",d.oc(29,j,e.f.apellidoPaterno.errors&&e.submitEnviado)),d.zb(1),d.kc("ngIf",e.f.apellidoPaterno.errors&&e.submitEnviado),d.zb(8),d.kc("ngClass",d.oc(31,j,e.f.nacionalidadId.errors&&e.submitEnviado)),d.zb(2),d.kc("ngForOf",e.arreglonacionalidad),d.zb(1),d.kc("ngIf",e.f.nacionalidadId.errors&&e.submitEnviado),d.zb(4),d.kc("ngClass",d.oc(33,j,(null==e.f.rfc.errors?null:e.f.rfc.errors.required)&&e.submitEnviado||(null==e.f.rfc.errors?null:e.f.rfc.errors.pattern)&&e.f.rfc.touched)),d.zb(1),d.kc("ngIf",(null==e.f.rfc.errors?null:e.f.rfc.errors.required)&&e.submitEnviado),d.zb(1),d.kc("ngIf",(null==e.f.rfc.errors?null:e.f.rfc.errors.pattern)&&e.f.rfc.touched),d.zb(4),d.kc("ngClass",d.oc(35,j,(null==e.f.curp.errors?null:e.f.curp.errors.required)&&e.submitEnviado||(null==e.f.curp.errors?null:e.f.curp.errors.pattern)&&e.f.curp.touched)),d.zb(1),d.kc("ngIf",(null==e.f.curp.errors?null:e.f.curp.errors.required)&&e.submitEnviado),d.zb(1),d.kc("ngIf",(null==e.f.curp.errors?null:e.f.curp.errors.pattern)&&e.f.curp.touched),d.zb(4),d.kc("ngClass",d.oc(37,j,e.f.poderNotarial.errors&&e.submitEnviado)),d.zb(1),d.kc("ngIf",e.f.poderNotarial.errors&&e.submitEnviado),d.zb(4),d.kc("ngClass",d.oc(39,j,e.f.facultadPoderId.errors&&e.f.facultadPoderId.touched)),d.zb(2),d.kc("ngForOf",e.arregloFacultadPoder),d.zb(1),d.kc("ngIf",e.f.facultadPoderId.errors&&e.submitEnviado),d.zb(4),d.kc("ngClass",d.oc(41,j,(null==e.f.emailCorporativo.errors?null:e.f.emailCorporativo.errors.required)&&e.submitEnviado||(null==e.f.emailCorporativo.errors?null:e.f.emailCorporativo.errors.email)&&e.f.emailCorporativo.touched)),d.zb(1),d.kc("ngIf",(null==e.f.emailCorporativo.errors?null:e.f.emailCorporativo.errors.required)&&e.submitEnviado),d.zb(1),d.kc("ngIf",(null==e.f.emailCorporativo.errors?null:e.f.emailCorporativo.errors.email)&&e.f.emailCorporativo.touched),d.zb(4),d.kc("ngClass",d.oc(43,j,(null==e.f.contactoInicialEmailPersonal.errors?null:e.f.contactoInicialEmailPersonal.errors.email)&&e.f.contactoInicialEmailPersonal.touched)),d.zb(1),d.kc("ngIf",(null==e.f.contactoInicialEmailPersonal.errors?null:e.f.contactoInicialEmailPersonal.errors.email)&&e.f.contactoInicialEmailPersonal.touched),d.zb(4),d.kc("ngClass",d.oc(45,j,e.f.contactoInicialTelefono.errors&&e.submitEnviado)),d.zb(1),d.kc("ngIf",e.f.contactoInicialTelefono.errors&&e.submitEnviado))},directives:[t.y,t.m,t.f,t.b,t.l,t.e,S.a,M.a,r.k,r.m,t.v,t.p,t.x,r.l,t.h,w.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}.titulo[_ngcontent-%COMP%]{margin-top:1em}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),o})()}]}];let B=(()=>{class o{}return o.\u0275mod=d.Lb({type:o}),o.\u0275inj=d.Kb({factory:function(e){return new(e||o)},imports:[[l.i.forChild(U)]]}),o})(),G=(()=>{class o{}return o.\u0275mod=d.Lb({type:o}),o.\u0275inj=d.Kb({factory:function(e){return new(e||o)},imports:[[r.c,B,n.a,t.g,t.u,i.a]]}),o})()}}]);