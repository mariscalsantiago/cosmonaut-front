(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{FD49:function(e,t,o){"use strict";o.r(t),o.d(t,"empresaRepresentanteLegalModule",function(){return U});var a=o("3Pt+"),n=o("ofXK"),r=o("HaJA"),i=o("pKmL"),l=o("tyNb"),c=o("DpdX"),s=o("fXoL"),d=o("tk/3"),b=o("xIjt");let p=(()=>{class e{constructor(e){this.http=e,this.url="",this.url=b.a.usuarios}getAllUsersRep(e){const t={headers:new d.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return console.log("json representante legal"),console.log(o),this.http.post(this.url+"/lista/compania/tipoPersona",o,t)}getByRep(e){return this.http.get(`${this.url}/obtener/id/compania/${e}`)}getById(e){return this.http.get(`${this.url}/obtener/id/${e}`)}filtrar(e){const t={headers:new d.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return console.log("json representante legal"),console.log(o),this.http.post(this.url+"/lista/dinamica",o,t)}save(e){const t={headers:new d.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return console.log("representante",o),this.http.put(this.url+"/guardar/representanteLegal",o,t)}modificar(e){const t={headers:new d.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return this.http.post(this.url+"/modificar/representanteLegal",o,t)}getAllCompany(){return this.http.get(b.a.centroCostosCliente+"/lista/compania")}}return e.\u0275fac=function(t){return new(t||e)(s.Xb(d.b))},e.\u0275prov=s.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=o("JBW2");function m(e,t){1&e&&s.Ob(0,"i",29)}function g(e,t){1&e&&s.Ob(0,"i",30)}function h(e,t){if(1&e){const e=s.Ub();s.Tb(0,"button",25),s.ac("click",function(){s.yc(e);const t=s.ec();return t.changeIconDown=!t.changeIconDown}),s.Tb(1,"label",26),s.Ic(2,"B\xdaSQUEDA"),s.Sb(),s.Gc(3,m,1,0,"i",27),s.Gc(4,g,1,0,"i",28),s.Sb()}if(2&e){const e=s.ec();s.zb(3),s.kc("ngIf",e.changeIconDown),s.zb(1),s.kc("ngIf",!e.changeIconDown)}}function f(e,t){1&e&&(s.Tb(0,"button",31),s.Tb(1,"label",32),s.Ic(2,"B\xdaSQUEDA"),s.Sb(),s.Sb())}function v(e,t){if(1&e){const e=s.Ub();s.Tb(0,"div",33),s.Tb(1,"div",34),s.Tb(2,"button",35),s.ac("click",function(){return s.yc(e),s.ec().verdetalle(void 0)}),s.Ob(3,"i",36),s.Ic(4," Agregar representante legal "),s.Sb(),s.Sb(),s.Sb()}}const C=function(e){return{show:e}};let I=(()=>{class e{constructor(e,t,o){this.routerPrd=e,this.representanteProd=t,this.CanRouterPrd=o,this.tamanio=0,this.cargando=!1,this.id_empresa=0,this.multiseleccion=!1,this.multiseleccionloading=!1,this.changeIconDown=!1,this.numeroitems=5,this.arreglopaginas=[],this.nombre="",this.apellidoPaterno="",this.apellidoMaterno="",this.contactoInicialEmailPersonal="",this.nacionalidadId="",this.emailCorporativo="",this.arreglotabla={columnas:[],filas:[]},this.arreglo=[]}onResize(e){this.tamanio=e.target.innerWidth}ngOnInit(){let e=document.defaultView;this.tamanio=e.innerWidth,this.cargando=!0,this.CanRouterPrd.params.subscribe(e=>{this.id_empresa=e.id,this.representanteProd.getAllUsersRep({centrocClienteId:{centrocClienteId:this.id_empresa},tipoPersonaId:{tipoPersonaId:1}}).subscribe(e=>{this.arreglo=e.datos;let t=[new c.a("personaId","ID"),new c.a("nombre","Nombre"),new c.a("apellidoPaterno","Apellido paterno"),new c.a("apellidoMaterno","Apellido materno"),new c.a("curp","CURP"),new c.a("emailCorporativo","Correo empresarial"),new c.a("fechaAlta","Fecha de registro"),new c.a("activo","Estatus")];if(void 0!==this.arreglo)for(let o of this.arreglo){o.fechaAlta=new Date(o.fechaAlta).toUTCString().replace(" 00:00:00 GMT","");let e=new n.f("es-MX");o.fechaAlta=e.transform(o.fechaAlta,"dd-MMM-y")}this.arreglotabla.columnas=t,this.arreglotabla.filas=this.arreglo,this.cargando=!1,this.cargando=!1})})}verdetalle(e){this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"representantelegal","nuevo"],{state:{data:e}})}filtrar(){this.cargando=!0,this.representanteProd.filtrar({nombre:this.nombre,apellidoPaterno:this.apellidoPaterno,apellidoMaterno:this.apellidoMaterno,emailCorporativo:this.emailCorporativo,contactoInicialEmailPersonal:this.contactoInicialEmailPersonal,centrocClienteId:{centrocClienteId:0==this.id_empresa?"":this.id_empresa},tipoPersonaId:{tipoPersonaId:1}}).subscribe(e=>{this.arreglo=e.datos;let t=[new c.a("personaId","ID",!0),new c.a("nombre","Nombre"),new c.a("apellidoPaterno","Apellido paterno"),new c.a("apellidoMaterno","Apellido materno"),new c.a("curp","CURP"),new c.a("emailCorporativo","Correo empresarial"),new c.a("fechaAlta","Fecha de registro"),new c.a("activo","Estatus")];if(void 0!==this.arreglo)for(let o of this.arreglo){o.fechaAlta=new Date(o.fechaAlta).toUTCString().replace(" 00:00:00 GMT","");let e=new n.f("es-MX");o.fechaAlta=e.transform(o.fechaAlta,"dd-MMM-y")}this.arreglotabla={columnas:t,filas:this.arreglo},this.cargando=!1})}recibirTabla(e){"editar"==e.type&&this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"representantelegal","modifica"],{state:{data:e.datos}})}}return e.\u0275fac=function(t){return new(t||e)(s.Nb(l.e),s.Nb(p),s.Nb(l.a))},e.\u0275cmp=s.Hb({type:e,selectors:[["app-listarepresentantelegal"]],hostBindings:function(e,t){1&e&&s.ac("resize",function(e){return t.onResize(e)},!1,s.xc)},decls:33,vars:14,consts:[[1,"scrooll-designempresa"],[1,"margen"],["id","accordionFiltro"],["id","accordion"],[1,"card"],["id","headingOne",1,"card-header"],[1,"mb-0"],["style","width: 100%;","class","btn btn-link aparece-movil","data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",3,"click",4,"ngIf"],["class","btn btn-link aparece-desktop-inline-block",4,"ngIf"],["id","collapseOne","aria-labelledby","headingOne","data-parent","#accordion",1,"collapse",3,"ngClass"],[1,"card-body"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-md-6","col-lg-4"],["type","text","placeholder","Nombre de representante legal",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Apellido paterno",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Apellido materno",1,"form-control",3,"ngModel","ngModelChange"],["type","email","placeholder","Correo empresarial",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Correo personal",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-sm","mb-3","text-center","col-12","col-sm-2"],["type","button",1,"btn","btn-primary","button-outlet",3,"click"],[1,"row","margen"],[1,"col","titulo"],["class","row","style","  margin-top: 10px;  width: 100%;",4,"ngIf"],[1,"row","margen","margen-tabla","background-panel"],[3,"datos","editar","cargando","salida"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"btn","btn-link","aparece-movil",2,"width","100%",3,"click"],[1,"titulo",2,"width","80%","float","left","text-align","left"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-up ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-down ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-up",2,"width","10%","float","right","color","#00C1AF"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-down",2,"width","10%","float","right","color","#00C1AF"],[1,"btn","btn-link","aparece-desktop-inline-block"],[1,"titulo"],[1,"row",2,"margin-top","10px","width","100%"],[1,"col","text-right"],["type","button",1,"btn","btn-light","button-outlet",3,"click"],[1,"fa","fa-plus"]],template:function(e,t){1&e&&(s.Tb(0,"div",0),s.Ob(1,"br"),s.Tb(2,"div",1),s.Tb(3,"div",2),s.Tb(4,"div",3),s.Tb(5,"div",4),s.Tb(6,"div",5),s.Tb(7,"h5",6),s.Gc(8,h,5,2,"button",7),s.Gc(9,f,3,0,"button",8),s.Sb(),s.Sb(),s.Tb(10,"div",9),s.Tb(11,"div",10),s.Tb(12,"div",11),s.Tb(13,"div",12),s.Tb(14,"input",13),s.ac("ngModelChange",function(e){return t.nombre=e}),s.Sb(),s.Sb(),s.Tb(15,"div",12),s.Tb(16,"input",14),s.ac("ngModelChange",function(e){return t.apellidoPaterno=e}),s.Sb(),s.Sb(),s.Tb(17,"div",12),s.Tb(18,"input",15),s.ac("ngModelChange",function(e){return t.apellidoMaterno=e}),s.Sb(),s.Sb(),s.Tb(19,"div",12),s.Tb(20,"input",16),s.ac("ngModelChange",function(e){return t.emailCorporativo=e}),s.Sb(),s.Sb(),s.Tb(21,"div",12),s.Tb(22,"input",17),s.ac("ngModelChange",function(e){return t.contactoInicialEmailPersonal=e}),s.Sb(),s.Sb(),s.Tb(23,"div",18),s.Tb(24,"button",19),s.ac("click",function(){return t.filtrar()}),s.Ic(25,"FILTRAR"),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(26,"div",20),s.Tb(27,"div",21),s.Tb(28,"label"),s.Ic(29,"RESULTADOS"),s.Sb(),s.Sb(),s.Gc(30,v,5,0,"div",22),s.Sb(),s.Tb(31,"div",23),s.Tb(32,"app-tablapaginado",24),s.ac("salida",function(e){return t.recibirTabla(e)}),s.Sb(),s.Sb(),s.Sb()),2&e&&(s.zb(8),s.kc("ngIf",t.tamanio<600),s.zb(1),s.kc("ngIf",t.tamanio>=600),s.zb(1),s.kc("ngClass",s.oc(12,C,t.tamanio>600)),s.zb(4),s.kc("ngModel",t.nombre),s.zb(2),s.kc("ngModel",t.apellidoPaterno),s.zb(2),s.kc("ngModel",t.apellidoMaterno),s.zb(2),s.kc("ngModel",t.emailCorporativo),s.zb(2),s.kc("ngModel",t.contactoInicialEmailPersonal),s.zb(8),s.kc("ngIf",!t.multiseleccion),s.zb(2),s.kc("datos",t.arreglotabla)("editar",!0)("cargando",t.cargando))},directives:[n.m,n.k,a.b,a.l,a.o,u.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),e})();var P=o("04Ps"),T=o("i9e2"),S=o("dkea"),M=o("gYgu"),w=o("cCUj");const O=["nombre"];function y(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," Campo requerido "),s.Sb())}function k(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," Campo requerido "),s.Sb())}function x(e,t){if(1&e&&(s.Tb(0,"option",29),s.Ic(1),s.Sb()),2&e){const e=t.$implicit;s.kc("value",e.nacionalidadId),s.zb(1),s.Jc(e.descripcion)}}function E(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," Campo requerido "),s.Sb())}function A(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," Campo requerido "),s.Sb())}function z(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," CURP inv\xe1lida, favor de verificar "),s.Sb())}function N(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," Campo requerido "),s.Sb())}function _(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," Correo empresarial inv\xe1lido "),s.Sb())}function F(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," Campo requerido "),s.Sb())}function G(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," Correo personal inv\xe1lido "),s.Sb())}function R(e,t){1&e&&(s.Tb(0,"div",28),s.Ic(1," Campo requerido "),s.Sb())}const D=function(e){return{"is-invalid":e}},q=[{path:"",children:[{path:"representantelegal",component:I},{path:"representantelegal/:tipoinsert",component:(()=>{class e{constructor(e,t,o,a,n,r){this.formBuilder=e,this.representantePrd=t,this.routerActivePrd=o,this.routerPrd=a,this.catalogosPrd=n,this.modalPrd=r,this.arreglo=[],this.arreglonacionalidad=[],this.insertar=!1,this.fechaActual="",this.nacionalidad="",this.cargando=!1,this.multiseleccion=!1,this.multiseleccionloading=!1,this.centrocClienteId=0,this.tipoRepresentanteId=1,this.submitEnviado=!1,this.routerActivePrd.params.subscribe(e=>{this.insertar="nuevo"==e.tipoinsert,this.centrocClienteId=e.id})}ngOnInit(){let e=null==history.state.data?{}:history.state.data;this.insertar&&(e={nacionalidadId:{}}),this.myFormrep=this.createFormrep(e),this.catalogosPrd.getNacinalidades().subscribe(e=>this.arreglonacionalidad=e.datos)}ngAfterViewInit(){this.nombre.nativeElement.focus()}createFormrep(e){let t=new n.f("en-MX");return this.formBuilder.group({nombre:[e.nombre,[a.w.required]],apellidoPaterno:[e.apellidoPaterno,[a.w.required]],apellidoMaterno:[e.apellidoMaterno],nacionalidadId:[e.nacionalidadId.nacionalidadId,[a.w.required]],curp:[e.curp,[a.w.required,a.w.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)]],emailCorporativo:[e.emailCorporativo,[a.w.required,a.w.email]],contactoInicialEmailPersonal:[e.contactoInicialEmailPersonal,[a.w.required,a.w.email]],contactoInicialTelefono:[e.contactoInicialTelefono,[a.w.required]],fechaAlta:[{value:this.insertar?t.transform(new Date,"dd-MMM-y"):e.fechaAlta,disabled:!0},[a.w.required]],activo:[{value:!!this.insertar||e.activo,disabled:this.insertar},[a.w.required]],personaId:e.personaId,firma:e.firma})}activarMultiseleccion(){this.multiseleccion=!0}guardarMultiseleccion(){this.multiseleccionloading=!0,setTimeout(()=>{this.multiseleccionloading=!1,this.multiseleccion=!1},3e3)}cancelarMulti(){this.multiseleccionloading=!1,this.multiseleccion=!1}enviarPeticion(){this.submitEnviado=!0,this.myFormrep.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.insertar?"\xbfDesea registrar el representante legal":"\xbfDesea actualizar los datos del representante legal?").then(e=>{if(e){let e=this.myFormrep.value,t={nombre:e.nombre,apellidoPaterno:e.apellidoPaterno,apellidoMaterno:e.apellidoMaterno,curp:e.curp,emailCorporativo:e.emailCorporativo,contactoInicialEmailPersonal:e.contactoInicialEmailPersonal,contactoInicialTelefono:e.contactoInicialTelefono,centrocClienteId:{centrocClienteId:this.centrocClienteId},nacionalidadId:{nacionalidadId:e.nacionalidadId},tipoRepresentanteId:{tipoRepresentanteId:this.tipoRepresentanteId}};this.insertar?this.representantePrd.save(t).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>{e.resultado&&this.routerPrd.navigate(["/empresa/detalle/"+this.centrocClienteId+"/representantelegal"])})}):(t.personaId=e.personaId,this.representantePrd.modificar(t).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>{e.resultado&&this.routerPrd.navigate(["/empresa/detalle/"+this.centrocClienteId+"/representantelegal"])})}))}})}redirect(e){this.routerPrd.navigate(["/empresa/detalle/"+this.centrocClienteId+"/representantelegal"])}recibirTabla(e){"editar"==e.type&&this.routerPrd.navigate(["company","detalle_company","modifica"],{state:{datos:e.datos}})}get f(){return this.myFormrep.controls}}return e.\u0275fac=function(t){return new(t||e)(s.Nb(a.c),s.Nb(p),s.Nb(l.a),s.Nb(l.e),s.Nb(P.a),s.Nb(T.a))},e.\u0275cmp=s.Hb({type:e,selectors:[["app-detallerepresentantelegal"]],viewQuery:function(e,t){if(1&e&&s.Oc(O,!0),2&e){let e;s.uc(e=s.bc())&&(t.nombre=e.first)}},decls:72,vars:34,consts:[[1,"form-desing",3,"formGroup","ngSubmit"],["type","hidden","formControlName","personaId"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar",3,"pixeles"],[1,"form-group","row","margen"],[1,"titulo"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-sm-12","col-md-6","col-lg-4","col-xl-3"],["formControlName","nombre","appMayusculas","","type","text","placeholder","",1,"form-control",3,"ngClass"],["nombre",""],["class","invalid-feedback",4,"ngIf"],["formControlName","apellidoPaterno","appMayusculas","","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","apellidoMaterno","appMayusculas","","type","text","id","apellidoMaterno","aria-describedby","apellidoMaterno","placeholder","",1,"form-control"],["formControlName","nacionalidadId","type","text",1,"form-control",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","curp","maxlength","18","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","emailCorporativo","type","email","placeholder","",1,"form-control","text-lowercase",3,"ngClass"],["formControlName","contactoInicialEmailPersonal","type","email","placeholder","",1,"form-control","text-lowercase",3,"ngClass"],["appSolonumeros","","formControlName","contactoInicialTelefono","maxlength","10","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","fechaAlta","type","text","placeholder","",1,"form-control"],[1,"input-group-sm","mb-4","col-12","col-sm-12","col-md-6","col-lg-4","col-xl-3"],["for","exampleFormControlSelect1"],["formControlName","activo",1,"form-control"],["value","true","selected",""],["value","false"],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"eventoFunciones","click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"invalid-feedback"],[3,"value"]],template:function(e,t){1&e&&(s.Ob(0,"br"),s.Ob(1,"br"),s.Tb(2,"form",0),s.ac("ngSubmit",function(){return t.enviarPeticion()}),s.Ob(3,"input",1),s.Tb(4,"div",2),s.Ob(5,"br"),s.Tb(6,"div",3),s.Tb(7,"label",4),s.Ic(8,"INFORMACI\xd3N DE REPRESENTANTE LEGAL"),s.Sb(),s.Sb(),s.Tb(9,"div",5),s.Tb(10,"div",6),s.Tb(11,"label"),s.Ic(12,"Nombre *"),s.Sb(),s.Ob(13,"input",7,8),s.Gc(15,y,2,0,"div",9),s.Sb(),s.Tb(16,"div",6),s.Tb(17,"label"),s.Ic(18,"Apellido paterno *"),s.Sb(),s.Ob(19,"input",10),s.Gc(20,k,2,0,"div",9),s.Sb(),s.Tb(21,"div",6),s.Tb(22,"label"),s.Ic(23,"Apellido materno"),s.Sb(),s.Ob(24,"input",11),s.Sb(),s.Tb(25,"div",6),s.Tb(26,"label"),s.Ic(27,"Nacionalidad *"),s.Sb(),s.Tb(28,"select",12),s.Ob(29,"option",13),s.Gc(30,x,2,2,"option",14),s.Sb(),s.Gc(31,E,2,0,"div",9),s.Sb(),s.Tb(32,"div",6),s.Tb(33,"label"),s.Ic(34,"CURP *"),s.Sb(),s.Ob(35,"input",15),s.Gc(36,A,2,0,"div",9),s.Gc(37,z,2,0,"div",9),s.Sb(),s.Tb(38,"div",6),s.Tb(39,"label"),s.Ic(40,"Correo empresarial *"),s.Sb(),s.Ob(41,"input",16),s.Gc(42,N,2,0,"div",9),s.Gc(43,_,2,0,"div",9),s.Sb(),s.Tb(44,"div",6),s.Tb(45,"label"),s.Ic(46,"Correo personal *"),s.Sb(),s.Ob(47,"input",17),s.Gc(48,F,2,0,"div",9),s.Gc(49,G,2,0,"div",9),s.Sb(),s.Tb(50,"div",6),s.Tb(51,"label"),s.Ic(52,"Tel\xe9fono *"),s.Sb(),s.Ob(53,"input",18),s.Gc(54,R,2,0,"div",9),s.Sb(),s.Tb(55,"div",6),s.Tb(56,"label"),s.Ic(57,"Fecha de registro *"),s.Sb(),s.Ob(58,"input",19),s.Sb(),s.Tb(59,"div",20),s.Tb(60,"label",21),s.Ic(61,"Estatus de representante *"),s.Sb(),s.Tb(62,"select",22),s.Tb(63,"option",23),s.Ic(64,"ACTIVO"),s.Sb(),s.Tb(65,"option",24),s.Ic(66,"INACTIVO"),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(67,"div",25),s.Tb(68,"button",26),s.ac("eventoFunciones",function(e){return t.redirect(e)})("click",function(){return t.redirect(void 0)}),s.Ic(69,"Cancelar"),s.Sb(),s.Tb(70,"button",27),s.Ic(71,"Guardar"),s.Sb(),s.Sb(),s.Sb()),2&e&&(s.zb(2),s.kc("formGroup",t.myFormrep),s.zb(2),s.kc("pixeles",340),s.zb(9),s.kc("ngClass",s.oc(20,D,t.f.nombre.errors&&t.submitEnviado)),s.zb(2),s.kc("ngIf",t.f.nombre.errors&&t.submitEnviado),s.zb(4),s.kc("ngClass",s.oc(22,D,t.f.apellidoPaterno.errors&&t.submitEnviado)),s.zb(1),s.kc("ngIf",t.f.apellidoPaterno.errors&&t.submitEnviado),s.zb(8),s.kc("ngClass",s.oc(24,D,t.f.nacionalidadId.errors&&t.f.nacionalidadId.touched)),s.zb(2),s.kc("ngForOf",t.arreglonacionalidad),s.zb(1),s.kc("ngIf",t.f.nacionalidadId.errors&&t.submitEnviado),s.zb(4),s.kc("ngClass",s.oc(26,D,(null==t.f.curp.errors?null:t.f.curp.errors.required)&&t.submitEnviado||(null==t.f.curp.errors?null:t.f.curp.errors.pattern)&&t.f.curp.touched)),s.zb(1),s.kc("ngIf",(null==t.f.curp.errors?null:t.f.curp.errors.required)&&t.submitEnviado),s.zb(1),s.kc("ngIf",(null==t.f.curp.errors?null:t.f.curp.errors.pattern)&&t.f.curp.touched),s.zb(4),s.kc("ngClass",s.oc(28,D,(null==t.f.emailCorporativo.errors?null:t.f.emailCorporativo.errors.required)&&t.submitEnviado||(null==t.f.emailCorporativo.errors?null:t.f.emailCorporativo.errors.email)&&t.f.emailCorporativo.touched)),s.zb(1),s.kc("ngIf",(null==t.f.emailCorporativo.errors?null:t.f.emailCorporativo.errors.required)&&t.submitEnviado),s.zb(1),s.kc("ngIf",(null==t.f.emailCorporativo.errors?null:t.f.emailCorporativo.errors.email)&&t.f.emailCorporativo.touched),s.zb(4),s.kc("ngClass",s.oc(30,D,(null==t.f.contactoInicialEmailPersonal.errors?null:t.f.contactoInicialEmailPersonal.errors.required)&&t.submitEnviado||(null==t.f.contactoInicialEmailPersonal.errors?null:t.f.contactoInicialEmailPersonal.errors.email)&&t.f.contactoInicialEmailPersonal.touched)),s.zb(1),s.kc("ngIf",(null==t.f.contactoInicialEmailPersonal.errors?null:t.f.contactoInicialEmailPersonal.errors.required)&&t.submitEnviado),s.zb(1),s.kc("ngIf",(null==t.f.contactoInicialEmailPersonal.errors?null:t.f.contactoInicialEmailPersonal.errors.email)&&t.f.contactoInicialEmailPersonal.touched),s.zb(4),s.kc("ngClass",s.oc(32,D,t.f.contactoInicialTelefono.errors&&t.submitEnviado)),s.zb(1),s.kc("ngIf",t.f.contactoInicialTelefono.errors&&t.submitEnviado))},directives:[a.y,a.m,a.f,a.b,a.l,a.e,S.a,M.a,n.k,n.m,a.v,a.p,a.x,n.l,a.h,w.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}.titulo[_ngcontent-%COMP%]{margin-top:1em}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),e})()}]}];let L=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[l.i.forChild(q)]]}),e})(),U=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[n.c,L,r.a,a.g,a.u,i.a]]}),e})()}}]);