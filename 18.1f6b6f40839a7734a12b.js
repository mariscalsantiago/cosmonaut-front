(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{FnI7:function(e,t,o){"use strict";o.r(t),o.d(t,"empresasContactosRrhModule",function(){return R});var r=o("ofXK"),a=o("tk/3"),n=o("3Pt+"),i=o("HaJA"),l=o("tyNb"),c=o("fXoL"),s=o("xIjt");let d=(()=>{class e{constructor(e){this.http=e,this.url="",this.url=s.a.usuarios}getAllUsers(){return this.http.get(this.url+"/lista/todo/4")}getByCompany(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return this.http.post(this.url+"/lista/compania/tipoPersona",o,t)}getById(e){return this.http.get(`${this.url}/obtener/id/${e}`)}filtrar(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return console.log("peticion filtro dinamico"),console.log(o),this.http.post(this.url+"/lista/dinamica",o,t)}save(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return this.http.put(this.url+"/guardar/contacto/recursosHumanos",o,t)}modificar(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return this.http.post(this.url+"/modificar/contactoRH",o,t)}modificarListaActivos(e){const t={headers:new a.d({"Content-Type":"application/json"})};let o=JSON.stringify(e);return this.http.post(this.url+"/modificar/lista",o,t)}}return e.\u0275fac=function(t){return new(t||e)(c.Xb(a.b))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=o("i9e2"),p=o("dkea"),u=o("gYgu"),m=o("cCUj");const h=["nombre"];function f(e,t){1&e&&(c.Tb(0,"div",21),c.Ic(1," Campo requerido "),c.Sb())}function g(e,t){1&e&&(c.Tb(0,"div",21),c.Ic(1," Campo requerido "),c.Sb())}function v(e,t){1&e&&(c.Tb(0,"div",21),c.Ic(1," Campo requerido "),c.Sb())}function C(e,t){1&e&&(c.Tb(0,"div",21),c.Ic(1," CURP inv\xe1lida, favor de verificar. "),c.Sb())}function T(e,t){1&e&&(c.Tb(0,"div",21),c.Ic(1," Campo requerido "),c.Sb())}function I(e,t){1&e&&(c.Tb(0,"div",21),c.Ic(1," Error en el Correo empresarial, favor de verificar. "),c.Sb())}function S(e,t){1&e&&(c.Tb(0,"div",21),c.Ic(1," Campo requerido "),c.Sb())}function P(e,t){1&e&&(c.Tb(0,"div",21),c.Ic(1," Error en el Correo personal, favor de verificar. "),c.Sb())}function w(e,t){1&e&&(c.Tb(0,"div",21),c.Ic(1," Campo requerido "),c.Sb())}const M=function(e){return{"is-invalid":e}};let y=(()=>{class e{constructor(e,t,o,r,a){this.formBuild=e,this.usuariosPrd=t,this.ActiveRouter=o,this.routerPrd=r,this.modalPrd=a,this.fechaActual="",this.subbmitActive=!1,this.id_empresa=0,this.esInsert=!0}ngOnInit(){this.ActiveRouter.params.subscribe(e=>{this.id_empresa=e.id,"nuevo"==e.tipoinsert?this.esInsert=!0:"editar"==e.tipoinsert?this.esInsert=!1:this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"contactosrrh"])});let e={};this.esInsert||(e=history.state.data,this.usuario=e,null==this.usuario&&this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"contactosrrh"])),this.myForm=this.createForm(e)}createForm(e){let t=new Date;this.fechaActual=t.toLocaleDateString();let o=new r.f("en-MX");return this.formBuild.group({nombre:[e.nombre,[n.w.required]],apellidoPat:[e.apellidoPaterno,[n.w.required]],apellidoMat:[e.apellidoMaterno],curp:[e.curp,[n.w.required,n.w.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)]],emailCorp:[e.emailCorporativo,[n.w.required,n.w.email]],ciEmailPersonal:[e.contactoInicialEmailPersonal,[n.w.required,n.w.email]],ciTelefono:[e.contactoInicialTelefono,[n.w.required]],ciExtension:[e.contactoInicialExtension],fechaAlta:[{value:this.esInsert?o.transform(new Date,"dd-MMM-y"):e.fechaAlta,disabled:!0},[n.w.required]],personaId:[e.personaId]})}ngAfterViewInit(){this.nombre.nativeElement.focus()}enviarPeticion(){this.subbmitActive=!0,this.myForm.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.esInsert?"\xbfDesea registrar el contacto RRHH?":"\xbfDesea actualizar los datos del contacto RRHH?").then(e=>{if(e){let e=this.myForm.value,t={nombre:e.nombre,apellidoPaterno:e.apellidoPat,apellidoMaterno:e.apellidoMat,curp:e.curp,emailCorporativo:e.emailCorp,contactoInicialEmailPersonal:e.ciEmailPersonal,contactoInicialTelefono:e.ciTelefono,contactoInicialExtension:e.ciExtension,centrocClienteId:{centrocClienteId:this.id_empresa}};this.esInsert?this.usuariosPrd.save(t).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"contactosrrh"]))}):(t.personaId=e.personaId,this.usuariosPrd.modificar(t).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"contactosrrh"]))}))}})}cancelar(){this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"contactosrrh"])}get f(){return this.myForm.controls}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(n.c),c.Nb(d),c.Nb(l.a),c.Nb(l.e),c.Nb(b.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-detallecontactosrrh"]],viewQuery:function(e,t){if(1&e&&c.Oc(h,!0),2&e){let e;c.uc(e=c.bc())&&(t.nombre=e.first)}},decls:61,vars:29,consts:[[1,"form-desing",3,"formGroup","ngSubmit"],["formControlName","personaId","type","hidden"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar",3,"pixeles"],[1,"form-group","row","margen"],[1,"titulo"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-4"],["formControlName","nombre","type","text","appMayusculas","","placeholder","",1,"form-control",3,"ngClass"],["nombre",""],["class","invalid-feedback",4,"ngIf"],["formControlName","apellidoPat","appMayusculas","","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","apellidoMat","appMayusculas","","type","text","placeholder","",1,"form-control"],["formControlName","curp","maxlength","18","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","emailCorp","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","ciEmailPersonal","type","text","placeholder","",1,"form-control",3,"ngClass"],["appSolonumeros","","formControlName","ciTelefono","maxlength","10","type","text","placeholder","",1,"form-control",3,"ngClass"],["appSolonumeros","","maxlength","8","formControlName","ciExtension","type","text","placeholder","",1,"form-control"],["formControlName","fechaAlta","type","text","placeholder","",1,"form-control"],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"invalid-feedback"]],template:function(e,t){1&e&&(c.Ob(0,"br"),c.Ob(1,"br"),c.Tb(2,"form",0),c.ac("ngSubmit",function(){return t.enviarPeticion()}),c.Ob(3,"input",1),c.Tb(4,"div",2),c.Ob(5,"br"),c.Tb(6,"div",3),c.Tb(7,"label",4),c.Ic(8,"INFORMACI\xd3N DE CONTACTOS RRHH"),c.Sb(),c.Sb(),c.Tb(9,"div",5),c.Tb(10,"div",6),c.Tb(11,"label"),c.Ic(12,"Nombre *"),c.Sb(),c.Ob(13,"input",7,8),c.Gc(15,f,2,0,"div",9),c.Sb(),c.Tb(16,"div",6),c.Tb(17,"label"),c.Ic(18,"Apellido paterno *"),c.Sb(),c.Ob(19,"input",10),c.Gc(20,g,2,0,"div",9),c.Sb(),c.Tb(21,"div",6),c.Tb(22,"label"),c.Ic(23,"Apellido materno"),c.Sb(),c.Ob(24,"input",11),c.Sb(),c.Tb(25,"div",6),c.Tb(26,"label"),c.Ic(27,"CURP *"),c.Sb(),c.Ob(28,"input",12),c.Gc(29,v,2,0,"div",9),c.Gc(30,C,2,0,"div",9),c.Sb(),c.Tb(31,"div",6),c.Tb(32,"label"),c.Ic(33,"Correo empresarial *"),c.Sb(),c.Ob(34,"input",13),c.Gc(35,T,2,0,"div",9),c.Gc(36,I,2,0,"div",9),c.Sb(),c.Tb(37,"div",6),c.Tb(38,"label"),c.Ic(39,"Correo personal *"),c.Sb(),c.Ob(40,"input",14),c.Gc(41,S,2,0,"div",9),c.Gc(42,P,2,0,"div",9),c.Sb(),c.Tb(43,"div",6),c.Tb(44,"label"),c.Ic(45,"Tel\xe9fono *"),c.Sb(),c.Ob(46,"input",15),c.Gc(47,w,2,0,"div",9),c.Sb(),c.Tb(48,"div",6),c.Tb(49,"label"),c.Ic(50,"Extensi\xf3n"),c.Sb(),c.Ob(51,"input",16),c.Sb(),c.Tb(52,"div",6),c.Tb(53,"label"),c.Ic(54,"Fecha de registro"),c.Sb(),c.Ob(55,"input",17),c.Sb(),c.Sb(),c.Sb(),c.Tb(56,"div",18),c.Tb(57,"button",19),c.ac("click",function(){return t.cancelar()}),c.Ic(58,"Cancelar"),c.Sb(),c.Tb(59,"button",20),c.Ic(60,"Guardar"),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.zb(2),c.kc("formGroup",t.myForm),c.zb(2),c.kc("pixeles",340),c.zb(9),c.kc("ngClass",c.oc(17,M,t.f.nombre.errors&&t.subbmitActive)),c.zb(2),c.kc("ngIf",t.f.nombre.errors&&t.subbmitActive),c.zb(4),c.kc("ngClass",c.oc(19,M,t.f.apellidoPat.errors&&t.subbmitActive)),c.zb(1),c.kc("ngIf",t.f.apellidoPat.errors&&t.subbmitActive),c.zb(8),c.kc("ngClass",c.oc(21,M,(null==t.f.curp.errors?null:t.f.curp.errors.required)&&t.subbmitActive||(null==t.f.curp.errors?null:t.f.curp.errors.pattern)&&t.f.curp.touched)),c.zb(1),c.kc("ngIf",(null==t.f.curp.errors?null:t.f.curp.errors.required)&&t.subbmitActive),c.zb(1),c.kc("ngIf",(null==t.f.curp.errors?null:t.f.curp.errors.pattern)&&t.f.curp.touched),c.zb(4),c.kc("ngClass",c.oc(23,M,(null==t.f.emailCorp.errors?null:t.f.emailCorp.errors.required)&&t.subbmitActive||(null==t.f.emailCorp.errors?null:t.f.emailCorp.errors.email)&&t.f.emailCorp.touched)),c.zb(1),c.kc("ngIf",(null==t.f.emailCorp.errors?null:t.f.emailCorp.errors.required)&&t.subbmitActive),c.zb(1),c.kc("ngIf",(null==t.f.emailCorp.errors?null:t.f.emailCorp.errors.email)&&t.f.emailCorp.touched),c.zb(4),c.kc("ngClass",c.oc(25,M,(null==t.f.ciEmailPersonal.errors?null:t.f.ciEmailPersonal.errors.required)&&t.subbmitActive||(null==t.f.ciEmailPersonal.errors?null:t.f.ciEmailPersonal.errors.email)&&t.f.ciEmailPersonal.touched)),c.zb(1),c.kc("ngIf",(null==t.f.ciEmailPersonal.errors?null:t.f.ciEmailPersonal.errors.required)&&t.subbmitActive),c.zb(1),c.kc("ngIf",(null==t.f.ciEmailPersonal.errors?null:t.f.ciEmailPersonal.errors.email)&&t.f.ciEmailPersonal.touched),c.zb(4),c.kc("ngClass",c.oc(27,M,t.f.ciTelefono.errors&&t.subbmitActive)),c.zb(1),c.kc("ngIf",t.f.ciTelefono.errors&&t.subbmitActive))},directives:[n.y,n.m,n.f,n.b,n.l,n.e,p.a,u.a,r.k,r.m,n.h,m.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}"]}),e})();var O=o("DpdX"),k=o("JBW2");function A(e,t){1&e&&c.Ob(0,"i",31)}function x(e,t){1&e&&c.Ob(0,"i",32)}function E(e,t){if(1&e){const e=c.Ub();c.Tb(0,"button",27),c.ac("click",function(){c.yc(e);const t=c.ec();return t.changeIconDown=!t.changeIconDown}),c.Tb(1,"label",28),c.Ic(2,"B\xdaSQUEDA"),c.Sb(),c.Gc(3,A,1,0,"i",29),c.Gc(4,x,1,0,"i",30),c.Sb()}if(2&e){const e=c.ec();c.zb(3),c.kc("ngIf",e.changeIconDown),c.zb(1),c.kc("ngIf",!e.changeIconDown)}}function N(e,t){1&e&&(c.Tb(0,"button",33),c.Tb(1,"label",34),c.Ic(2,"B\xdaSQUEDA"),c.Sb(),c.Sb())}const z=function(e){return{show:e}},_=[{path:"",children:[{path:"contactosrrh",component:(()=>{class e{constructor(e,t,o){this.router=e,this.usuariosPrd=t,this.CanRouterPrd=o,this.tamanio=0,this.cargando=!1,this.changeIconDown=!1,this.correoE="",this.correoP="",this.id_empresa=0,this.arreglotabla={columnas:[],filas:[]}}onResize(e){this.tamanio=e.target.innerWidth}ngOnInit(){let e=document.defaultView;this.tamanio=e.innerWidth,this.cargando=!0,this.CanRouterPrd.params.subscribe(e=>{this.id_empresa=e.id,this.usuariosPrd.filtrar({centrocClienteId:{centrocClienteId:this.id_empresa},tipoPersonaId:{tipoPersonaId:4}}).subscribe(e=>{let t=[new O.a("personaId","ID"),new O.a("nombre","Nombre"),new O.a("apellidoPaterno","Apellido paterno"),new O.a("apellidoMaterno","Apellido materno"),new O.a("curp","CURP"),new O.a("emailCorporativo","Correo empresarial"),new O.a("fechaAlta","Fecha de registro"),new O.a("activo","Estatus")];if(void 0!==e.datos)for(let o of e.datos){o.fechaAlta=new Date(o.fechaAlta).toUTCString().replace(" 00:00:00 GMT","");let e=new r.f("es-MX");o.fechaAlta=e.transform(o.fechaAlta,"dd-MMM-y")}this.arreglotabla.columnas=t,this.arreglotabla.filas=e.datos,this.cargando=!1})})}filtrar(){this.cargando=!0,this.usuariosPrd.filtrar({nombre:this.nombre,apellidoPaterno:this.apellidoPaterno,apellidoMaterno:this.apellidoMaterno,contactoInicialEmailPersonal:this.correoP,emailCorporativo:this.correoE,centrocClienteId:{centrocClienteId:this.id_empresa},tipoPersonaId:{tipoPersonaId:4}}).subscribe(e=>{let t=[new O.a("personaId","ID"),new O.a("nombre","Nombre"),new O.a("apellidoPaterno","Apellido paterno"),new O.a("apellidoMaterno","Apellido materno"),new O.a("curp","CURP"),new O.a("emailCorporativo","Correo empresarial"),new O.a("fechaAlta","Fecha de registro"),new O.a("activo","Estatus")];if(void 0!==e.datos)for(let o of e.datos)o.fechaAlta=new Date(o.fechaAlta).toUTCString().replace(" 00:00:00 GMT",""),o.fechaAlta=new Date(o.fechaAlta).toLocaleDateString();this.arreglotabla.columnas=t,this.arreglotabla.filas=e.datos,this.cargando=!1})}verdetalle(e){null==e?this.router.navigate(["empresa/detalle",this.id_empresa,"contactosrrh","nuevo"]):this.router.navigate(["empresa/detalle",this.id_empresa,"contactosrrh","editar"],{state:{data:e}})}recibirTabla(e){this.verdetalle(e.datos)}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(l.e),c.Nb(d),c.Nb(l.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-listacontactosrrh"]],hostBindings:function(e,t){1&e&&c.ac("resize",function(e){return t.onResize(e)},!1,c.xc)},decls:36,vars:13,consts:[[1,"scrooll-designempresa"],[1,"margen"],["id","accordionFiltro"],["id","accordion"],[1,"card"],["id","headingOne",1,"card-header"],[1,"mb-0"],["style","width: 100%;","class","btn btn-link aparece-movil","data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",3,"click",4,"ngIf"],["class","btn btn-link aparece-desktop-inline-block",4,"ngIf"],["id","collapseOne","aria-labelledby","headingOne","data-parent","#accordion",1,"collapse",3,"ngClass"],[1,"card-body"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-4","col-xl-3"],["type","text","placeholder","Nombre",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Apellido paterno",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Apellido materno",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Correo empresarial",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Correo personal",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-sm","mb-3","text-center","col-12","col-sm-2"],["type","button",1,"btn","btn-primary","button-outlet",3,"click"],[1,"row","margen"],[1,"col","titulo"],[1,"col","text-right"],["type","button",1,"btn","btn-light","button-outlet",3,"click"],[1,"fa","fa-plus"],[1,"row","margen","margen-tabla","background-panel","scrooll"],[3,"datos","editar","cargando","salida"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"btn","btn-link","aparece-movil",2,"width","100%",3,"click"],[1,"titulo",2,"width","80%","float","left","text-align","left"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-up ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-down ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-up",2,"width","10%","float","right","color","#00C1AF"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-down",2,"width","10%","float","right","color","#00C1AF"],[1,"btn","btn-link","aparece-desktop-inline-block"],[1,"titulo"]],template:function(e,t){1&e&&(c.Ob(0,"br"),c.Tb(1,"div",0),c.Tb(2,"div",1),c.Tb(3,"div",2),c.Tb(4,"div",3),c.Tb(5,"div",4),c.Tb(6,"div",5),c.Tb(7,"h5",6),c.Gc(8,E,5,2,"button",7),c.Gc(9,N,3,0,"button",8),c.Sb(),c.Sb(),c.Tb(10,"div",9),c.Tb(11,"div",10),c.Tb(12,"div",11),c.Tb(13,"div",12),c.Tb(14,"input",13),c.ac("ngModelChange",function(e){return t.nombre=e}),c.Sb(),c.Sb(),c.Tb(15,"div",12),c.Tb(16,"input",14),c.ac("ngModelChange",function(e){return t.apellidoPaterno=e}),c.Sb(),c.Sb(),c.Tb(17,"div",12),c.Tb(18,"input",15),c.ac("ngModelChange",function(e){return t.apellidoMaterno=e}),c.Sb(),c.Sb(),c.Tb(19,"div",12),c.Tb(20,"input",16),c.ac("ngModelChange",function(e){return t.correoE=e}),c.Sb(),c.Sb(),c.Tb(21,"div",12),c.Tb(22,"input",17),c.ac("ngModelChange",function(e){return t.correoP=e}),c.Sb(),c.Sb(),c.Tb(23,"div",18),c.Tb(24,"button",19),c.ac("click",function(){return t.filtrar()}),c.Ic(25,"FILTRAR"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(26,"div",20),c.Tb(27,"div",21),c.Tb(28,"label"),c.Ic(29,"RESULTADOS"),c.Sb(),c.Sb(),c.Tb(30,"div",22),c.Tb(31,"button",23),c.ac("click",function(){return t.verdetalle(void 0)}),c.Ob(32,"i",24),c.Ic(33," Agregar contacto RRHH "),c.Sb(),c.Sb(),c.Sb(),c.Tb(34,"div",25),c.Tb(35,"app-tablapaginado",26),c.ac("salida",function(e){return t.recibirTabla(e)}),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.zb(8),c.kc("ngIf",t.tamanio<600),c.zb(1),c.kc("ngIf",t.tamanio>=600),c.zb(1),c.kc("ngClass",c.oc(11,z,t.tamanio>600)),c.zb(4),c.kc("ngModel",t.nombre),c.zb(2),c.kc("ngModel",t.apellidoPaterno),c.zb(2),c.kc("ngModel",t.apellidoMaterno),c.zb(2),c.kc("ngModel",t.correoE),c.zb(2),c.kc("ngModel",t.correoP),c.zb(13),c.kc("datos",t.arreglotabla)("editar",!0)("cargando",t.cargando))},directives:[r.m,r.k,n.b,n.l,n.o,k.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131;white-space:nowrap}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),e})()},{path:"contactosrrh/:tipoinsert",component:y}]}];let D=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[l.i.forChild(_)]]}),e})(),R=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},providers:[d],imports:[[r.c,D,n.g,n.u,i.a,a.c]]}),e})()}}]);