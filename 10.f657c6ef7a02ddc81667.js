(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{pYoV:function(t,o,a){"use strict";a.r(o),a.d(o,"CompanyModule",function(){return Z});var e=a("3Pt+"),n=a("ofXK"),r=a("tyNb"),i=a("DpdX"),c=a("fXoL"),l=a("tk/3"),s=a("xIjt");let d=(()=>{class t{constructor(t){this.http=t,this.url="",this.url=s.a.centroCostosCliente}getAll(){return this.http.get(this.url+"/lista/compania")}getAllCont(t){const o={headers:new l.d({"Content-Type":"application/json"})};let a=JSON.stringify(t);return this.http.post(s.a.usuarios+"/lista/compania/tipoPersona",a,o)}save(t){const o={headers:new l.d({"Content-Type":"application/json"})};let a=JSON.stringify(t);return console.log("lo que mando "),console.log(a),this.http.put(this.url+"/guardar/compania",a,o)}savecont(t){const o={headers:new l.d({"Content-Type":"application/json"})};let a=JSON.stringify(t);return this.http.put(s.a.usuarios+"/guardar/contacto/inicial",a,o)}modificar(t){const o={headers:new l.d({"Content-Type":"application/json"})};let a=JSON.stringify(t);return this.http.post(this.url+"/modificar/compania",a,o)}modificarCont(t){const o={headers:new l.d({"Content-Type":"application/json"})};let a=JSON.stringify(t);return console.log("Esto si manda en contacto inicial",a),this.http.post(s.a.usuarios+"/modificar/contacto/inicial",a,o)}filtrar(t){const o={headers:new l.d({"Content-Type":"application/json"})};let a=JSON.stringify(t);return console.log("peticion filtro dinamico",a),this.http.post(this.url+"/lista/dinamica",a,o)}getEmpresaById(t){return this.http.get(`${this.url}/obtener/id/${t}`)}}return t.\u0275fac=function(o){return new(o||t)(c.Xb(l.b))},t.\u0275prov=c.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=a("JBW2");function m(t,o){1&t&&c.Ob(0,"i",38)}function u(t,o){1&t&&c.Ob(0,"i",39)}function p(t,o){if(1&t){const t=c.Ub();c.Tb(0,"button",34),c.ac("click",function(){c.yc(t);const o=c.ec();return o.changeIconDown=!o.changeIconDown}),c.Tb(1,"label",35),c.Ic(2,"B\xdaSQUEDA"),c.Sb(),c.Gc(3,m,1,0,"i",36),c.Gc(4,u,1,0,"i",37),c.Sb()}if(2&t){const t=c.ec();c.zb(3),c.kc("ngIf",t.changeIconDown),c.zb(1),c.kc("ngIf",!t.changeIconDown)}}function g(t,o){1&t&&(c.Tb(0,"button",40),c.Tb(1,"label",41),c.Ic(2,"B\xdaSQUEDA"),c.Sb(),c.Sb())}const h=function(t){return{show:t}};let f=(()=>{class t{constructor(t,o){this.routerPrd=t,this.companyProd=o,this.id_company=0,this.centrocClienteId="",this.rfc="",this.nombre="",this.razonSocial="",this.fechaAlta=null,this.esActivo="",this.modal=!1,this.strTitulo="",this.strsubtitulo="",this.iconType="",this.tamanio=0,this.cargando=!1,this.multiseleccion=!1,this.multiseleccionloading=!1,this.changeIconDown=!1,this.arreglo=[],this.arreglotabla={columnas:[],filas:[]}}onResize(t){this.tamanio=t.target.innerWidth}ngOnInit(){let t=document.defaultView;this.tamanio=t.innerWidth,this.cargando=!0,this.companyProd.getAll().subscribe(t=>{this.arreglo=t.datos;let o=[new i.a("url","imagen"),new i.a("centrocClienteId","ID empresa"),new i.a("razonSocial","Raz\xf3n social\t"),new i.a("nombre","Nombre de compa\xf1\xeda"),new i.a("rfc","RFC"),new i.a("fechaAlta","Fecha registro"),new i.a("esActivo","Estatus")];if(void 0!==this.arreglo)for(let a of this.arreglo)a.fechaAlta=new Date(a.fechaAlta).toUTCString().replace(" 00:00:00 GMT",""),a.fechaAlta=new Date(a.fechaAlta).toLocaleDateString();this.arreglotabla.columnas=o,this.arreglotabla.filas=this.arreglo,this.cargando=!1})}verdetallecom(t){this.routerPrd.navigate(["company","detalle_company","nuevo"],{state:{datos:void 0}})}filtrar(){this.cargando=!0;let t="";null==this.fechaAlta&&null==this.fechaAlta||""!=this.fechaAlta&&(t=""+new Date(this.fechaAlta).getTime());let o="";"1"==this.esActivo?o="true":"2"==this.esActivo&&(o="false"),this.companyProd.filtrar({centrocClienteId:this.centrocClienteId,rfc:this.rfc,nombre:this.nombre,razonSocial:this.razonSocial,fechaAlta:t,esActivo:""}).subscribe(t=>{this.arreglo=t.datos,this.arreglo=t.datos;let o=[new i.a("url","imagen"),new i.a("centrocClienteId","ID empresa"),new i.a("razonSocial","Raz\xf3n social\t"),new i.a("nombre","Nombre de compa\xf1\xeda"),new i.a("rfc","RFC"),new i.a("fechaAlta","Fecha registro"),new i.a("esActivo","Estatus")];if(void 0!==this.arreglo)for(let a of this.arreglo)a.fechaAlta=new Date(a.fechaAlta).toUTCString().replace(" 00:00:00 GMT",""),a.fechaAlta=new Date(a.fechaAlta).toLocaleDateString();this.arreglotabla.columnas=o,this.arreglotabla.filas=this.arreglo,this.cargando=!1,this.cargando=!1})}activarMultiseleccion(){this.multiseleccion=!0}guardarMultiseleccion(){this.multiseleccionloading=!0,setTimeout(()=>{this.multiseleccionloading=!1,this.multiseleccion=!1},3e3)}cancelarMulti(){this.multiseleccionloading=!1,this.multiseleccion=!1}recibirTabla(t){"editar"==t.type&&this.routerPrd.navigate(["company","detalle_company","modifica"],{state:{datos:t.datos}})}}return t.\u0275fac=function(o){return new(o||t)(c.Nb(r.e),c.Nb(d))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-company"]],hostBindings:function(t,o){1&t&&c.ac("resize",function(t){return o.onResize(t)},!1,c.xc)},decls:48,vars:16,consts:[[1,"row","margen","titulosfijos"],[1,"col","titulo-outlet"],[1,"scrooll-design"],[1,"margen"],["id","accordionFiltro"],["id","accordion"],[1,"card"],["id","headingOne",1,"card-header"],[1,"mb-0"],["style","width: 100%;","class","btn btn-link aparece-movil","data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",3,"click",4,"ngIf"],["class","btn btn-link aparece-desktop-inline-block",4,"ngIf"],["id","collapseOne","aria-labelledby","headingOne","data-parent","#accordion",1,"collapse",3,"ngClass"],[1,"card-body"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-4","col-xl-3"],["type","number","placeholder","Id compa\xf1\xeda",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","RFC",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Nombre compa\xf1\xeda",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Raz\xf3n social",1,"form-control",3,"ngModel","ngModelChange"],["type","Date","placeholder","Fecha de registro",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-sm","mb-3","col-12","col-sm-12","col-lg-4","col-xl-3"],["placeholder","Estatus",1,"form-control",3,"ngModel","ngModelChange"],["value","","selected",""],["value","1"],["value","2"],[1,"input-group-sm","mb-3","text-center","col-12","col-sm-2"],["type","button",1,"btn","btn-primary","button-outlet",3,"click"],[1,"row","margen"],[1,"col","titulo"],[1,"col","text-right"],["type","button",1,"btn","btn-light","button-outlet",3,"click"],[1,"fa","fa-plus"],[1,"row","margen","margen-tabla","background-panel"],[3,"datos","editar","imagen","icondefault","cargando","salida"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"btn","btn-link","aparece-movil",2,"width","100%",3,"click"],[1,"titulo",2,"width","80%","float","left","text-align","left"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-up ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne","style","width: 10%;float: right;color:#00C1AF","class","fas fa-chevron-down ",4,"ngIf"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-up",2,"width","10%","float","right","color","#00C1AF"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"fas","fa-chevron-down",2,"width","10%","float","right","color","#00C1AF"],[1,"btn","btn-link","aparece-desktop-inline-block"],[1,"titulo"]],template:function(t,o){1&t&&(c.Tb(0,"div"),c.Tb(1,"div",0),c.Tb(2,"div",1),c.Tb(3,"label"),c.Ic(4,"LISTA DE COMPA\xd1\xcdAS"),c.Sb(),c.Sb(),c.Sb(),c.Tb(5,"div",2),c.Tb(6,"div",3),c.Tb(7,"div",4),c.Tb(8,"div",5),c.Tb(9,"div",6),c.Tb(10,"div",7),c.Tb(11,"h5",8),c.Gc(12,p,5,2,"button",9),c.Gc(13,g,3,0,"button",10),c.Sb(),c.Sb(),c.Tb(14,"div",11),c.Tb(15,"div",12),c.Tb(16,"div",13),c.Tb(17,"div",14),c.Tb(18,"input",15),c.ac("ngModelChange",function(t){return o.centrocClienteId=t}),c.Sb(),c.Sb(),c.Tb(19,"div",14),c.Tb(20,"input",16),c.ac("ngModelChange",function(t){return o.rfc=t}),c.Sb(),c.Sb(),c.Tb(21,"div",14),c.Tb(22,"input",17),c.ac("ngModelChange",function(t){return o.nombre=t}),c.Sb(),c.Sb(),c.Tb(23,"div",14),c.Tb(24,"input",18),c.ac("ngModelChange",function(t){return o.razonSocial=t}),c.Sb(),c.Sb(),c.Tb(25,"div",14),c.Tb(26,"input",19),c.ac("ngModelChange",function(t){return o.fechaAlta=t}),c.Sb(),c.Sb(),c.Tb(27,"div",20),c.Tb(28,"select",21),c.ac("ngModelChange",function(t){return o.esActivo=t}),c.Tb(29,"option",22),c.Ic(30,"Estatus"),c.Sb(),c.Tb(31,"option",23),c.Ic(32,"Activo"),c.Sb(),c.Tb(33,"option",24),c.Ic(34,"Inactivo"),c.Sb(),c.Sb(),c.Sb(),c.Tb(35,"div",25),c.Tb(36,"button",26),c.ac("click",function(){return o.filtrar()}),c.Ic(37,"FILTRAR"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(38,"div",27),c.Tb(39,"div",28),c.Tb(40,"label"),c.Ic(41,"RESULTADOS"),c.Sb(),c.Sb(),c.Tb(42,"div",29),c.Tb(43,"button",30),c.ac("click",function(){return o.verdetallecom(void 0)}),c.Ob(44,"i",31),c.Ic(45,"Agregar compa\xf1\xcda "),c.Sb(),c.Sb(),c.Sb(),c.Tb(46,"div",32),c.Tb(47,"app-tablapaginado",33),c.ac("salida",function(t){return o.recibirTabla(t)}),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.zb(12),c.kc("ngIf",o.tamanio<600),c.zb(1),c.kc("ngIf",o.tamanio>=600),c.zb(1),c.kc("ngClass",c.oc(14,h,o.tamanio>600)),c.zb(4),c.kc("ngModel",o.centrocClienteId),c.zb(2),c.kc("ngModel",o.rfc),c.zb(2),c.kc("ngModel",o.nombre),c.zb(2),c.kc("ngModel",o.razonSocial),c.zb(2),c.kc("ngModel",o.fechaAlta),c.zb(2),c.kc("ngModel",o.esActivo),c.zb(19),c.kc("datos",o.arreglotabla)("editar",!0)("imagen",!0)("icondefault","empresa")("cargando",o.cargando))},directives:[n.m,n.k,e.q,e.b,e.l,e.o,e.v,e.p,e.x,b.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),t})();var v=a("DlAn"),C=a("i9e2"),T=a("dkea"),S=a("qIi2");const I=["nombre"];function y(t,o){1&t&&(c.Tb(0,"div",29),c.Ic(1," Campo requerido "),c.Sb())}function P(t,o){1&t&&(c.Tb(0,"div",29),c.Ic(1," Campo requerido "),c.Sb())}function w(t,o){1&t&&(c.Tb(0,"div",29),c.Ic(1," Campo requerido "),c.Sb())}function M(t,o){1&t&&(c.Tb(0,"div",29),c.Ic(1," Formato de RFC inv\xe1lido, favor de verificar. "),c.Sb())}function O(t,o){if(1&t){const t=c.Ub();c.Tb(0,"div",30),c.Tb(1,"div",6),c.Tb(2,"label",7),c.Ic(3,"LISTA DE CONTACTOS"),c.Sb(),c.Sb(),c.Tb(4,"div",31),c.Tb(5,"div",32),c.Tb(6,"div",33),c.Tb(7,"button",34),c.ac("click",function(){return c.yc(t),c.ec().verdetallecont(void 0)}),c.Ob(8,"i",35),c.Ic(9,"Agregar contacto "),c.Sb(),c.Sb(),c.Sb(),c.Tb(10,"app-tablapaginado",36),c.ac("salida",function(o){return c.yc(t),c.ec().recibirTabla(o)}),c.Sb(),c.Sb(),c.Sb()}if(2&t){const t=c.ec();c.zb(10),c.kc("datos",t.arreglotabla)("editar",!0)("cargando",t.cargando)}}const A=function(t){return{"is-invalid":t}};let k=(()=>{class t{constructor(t,o,a,e,n,r){this.formBuilder=t,this.companyPrd=o,this.routerActivePrd=a,this.routerPrd=e,this.usuariosPrd=n,this.modalPrd=r,this.arreglo=[],this.contacto=!1,this.listcontacto=!1,this.compania=!0,this.companiaprincipal=!0,this.insertar=!1,this.fechaAlta="",this.cargando=!1,this.multiseleccion=!1,this.multiseleccionloading=!1,this.submitEnviado=!1,this.imagen=void 0,this.arreglotabla={columnas:[],filas:[]}}ngOnInit(){this.objCompany=null==history.state.datos?{}:history.state.datos,this.compania=!0,this.companyPrd.getEmpresaById(this.objCompany.centrocClienteId).subscribe(t=>{var o;return this.imagen=null===(o=t.datos)||void 0===o?void 0:o.imagen}),this.routerActivePrd.params.subscribe(t=>{this.insertar="nuevo"==t.tipoinsert,this.insertar||(this.listaContacto(),this.listcontacto=!0),this.myFormcomp=this.createFormcomp(this.objCompany)})}ngAfterViewInit(){this.nombre.nativeElement.focus()}createFormcomp(t){let o=new n.f("en-MX");return this.formBuilder.group({nombre:[t.nombre,[e.w.required]],razonSocial:[t.razonSocial,[e.w.required]],rfc:[t.rfc,[e.w.required,e.w.pattern("[A-Za-z,\xf1,\xd1,&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Za-z,0-9]?[A-Za-z,0-9]?[0-9,A-Za-z]?")]],fechaAlta:[{value:this.insertar?o.transform(new Date,"dd/MM/yyyy"):t.fechaAlta,disabled:!0},[e.w.required]],esActivo:[{value:this.insertar?"true":t.esActivo,disabled:this.insertar},[e.w.required]],centrocClienteId:t.centrocClienteId})}subirarchivos(){}verdetallecont(t){this.cargando=!0,this.routerPrd.navigate(["company","detalle_contacto",null==t?"nuevo":"modifica"],{state:{datos:t,empresa:this.objCompany,modificaEmpresa:!0}}),this.cargando=!1}listaContacto(){var t;let o={centrocClienteId:{centrocClienteId:null===(t=this.objCompany)||void 0===t?void 0:t.centrocClienteId},tipoPersonaId:{tipoPersonaId:2}};this.cargando=!0,this.usuariosPrd.filtrar(o).subscribe(t=>{this.arreglo=t.datos;let o=[new i.a("personaId","ID contacto"),new i.a("nombrecompleto","Nombre contacto"),new i.a("emailCorporativo","Correo empresarial"),new i.a("contactoInicialTelefono","Tel\xe9fono"),new i.a("fechaAlta","Fecha registro")];if(void 0!==this.arreglo)for(let a of this.arreglo)a.nombrecompleto=`${a.nombre} ${a.apellidoPaterno} ${a.apellidoMaterno}`;this.arreglotabla.columnas=o,this.arreglotabla.filas=this.arreglo,this.cargando=!1})}enviarPeticioncomp(){this.submitEnviado=!0,this.myFormcomp.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.insertar?"\xbfDeseas registrar la compa\xf1\xeda?":"\xbfDeseas actualizar los datos de la compa\xf1\xeda?").then(t=>{if(t){let t=this.myFormcomp.value;t=Object.assign(Object.assign({},t),{imagen:this.imagen}),t.imagen=this.imagen,this.insertar?this.companyPrd.save(t).subscribe(t=>{this.modalPrd.showMessageDialog(t.resultado,t.mensaje).then(()=>{this.compania=!t.resultado,this.contacto=!0,t.resultado&&(this.objCompany=t.datos,this.routerPrd.navigate(["company","detalle_contacto","nuevo"],{state:{datos:void 0,empresa:this.objCompany}}))})}):this.companyPrd.modificar(t).subscribe(t=>{this.modalPrd.showMessageDialog(t.resultado,t.mensaje),this.listcontacto=!0,this.compania=!1})}})}cancelarcomp(){this.routerPrd.navigate(["/company"])}get f(){return this.myFormcomp.controls}recibirImagen(t){this.imagen=t}recibirTabla(t){this.verdetallecont(t.datos)}}return t.\u0275fac=function(o){return new(o||t)(c.Nb(e.c),c.Nb(d),c.Nb(r.a),c.Nb(r.e),c.Nb(v.a),c.Nb(C.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-detalle-company"]],viewQuery:function(t,o){if(1&t&&c.Oc(I,!0),2&t){let t;c.uc(t=c.bc())&&(o.nombre=t.first)}},decls:56,vars:16,consts:[[1,"row","margen"],[1,"col","titulo-outlet"],["routerLink","/company",1,"fas","fa-chevron-left","aparece-movil-inline-block"],[3,"formGroup","ngSubmit"],["type","hidden","formControlName","centrocClienteId"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar"],[1,"form-group","row","margen"],[1,"titulo"],[1,"col-12","col-md-12","col-xl-9"],[1,"row"],[1,"input-group-sm","mb-3","col-12","col-sm-12","col-md-6","col-lg-4"],["formControlName","nombre","type","text","placeholder","",1,"form-control",3,"ngClass"],["nombre",""],["class","invalid-feedback",4,"ngIf"],["formControlName","razonSocial","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","rfc","maxlength","13","type","text",1,"form-control",3,"ngClass"],["formControlName","fechaAlta","type","text","placeholder","",1,"form-control"],[1,"input-group-sm","mb-4","col-12","col-sm-12","col-md-6","col-lg-4"],["for","exampleFormControlSelect1"],["formControlName","esActivo",1,"form-control"],["value","true","selected",""],["value","false"],[1,"col-12","col-md-12","col-xl-2"],[1,"input-group-sm","mb-3","col-12"],[3,"recibiendoImagen","emiteimagen"],["class","row  margen margen-tabla",4,"ngIf"],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"invalid-feedback"],[1,"row","margen","margen-tabla"],[1,"form-group","row",2,"width","100%"],[1,"row",2,"margin-top","10px","width","100%"],[1,"col","text-right"],["type","button",1,"btn","btn-light",2,"background","#56dfd4","color","white",3,"click"],[1,"fa","fa-plus"],[3,"datos","editar","cargando","salida"]],template:function(t,o){1&t&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"label"),c.Ob(3,"i",2),c.Ic(4,"CONFIGURACI\xd3N DE COMPA\xd1\xcdA"),c.Sb(),c.Sb(),c.Sb(),c.Ob(5,"hr"),c.Tb(6,"form",3),c.ac("ngSubmit",function(){return o.enviarPeticioncomp()}),c.Ob(7,"input",4),c.Tb(8,"div",5),c.Tb(9,"div",6),c.Tb(10,"label",7),c.Ic(11,"INFORMACI\xd3N DE COMPA\xd1\xcdA"),c.Sb(),c.Sb(),c.Tb(12,"div",6),c.Tb(13,"div",8),c.Tb(14,"div",9),c.Tb(15,"div",10),c.Tb(16,"label"),c.Ic(17,"Nombre de la compa\xf1\xeda *"),c.Sb(),c.Ob(18,"input",11,12),c.Gc(20,y,2,0,"div",13),c.Sb(),c.Tb(21,"div",10),c.Tb(22,"label"),c.Ic(23,"Raz\xf3n social *"),c.Sb(),c.Ob(24,"input",14),c.Gc(25,P,2,0,"div",13),c.Sb(),c.Tb(26,"div",10),c.Tb(27,"label"),c.Ic(28,"RFC *"),c.Sb(),c.Ob(29,"input",15),c.Gc(30,w,2,0,"div",13),c.Gc(31,M,2,0,"div",13),c.Sb(),c.Tb(32,"div",10),c.Tb(33,"label"),c.Ic(34,"Fecha de registro *"),c.Sb(),c.Ob(35,"input",16),c.Sb(),c.Tb(36,"div",17),c.Tb(37,"label",18),c.Ic(38,"Estado *"),c.Sb(),c.Tb(39,"select",19),c.Tb(40,"option",20),c.Ic(41,"ACTIVO"),c.Sb(),c.Tb(42,"option",21),c.Ic(43,"INACTIVO"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(44,"div",22),c.Tb(45,"div",23),c.Tb(46,"label"),c.Ic(47,"Logo"),c.Sb(),c.Tb(48,"app-subirarchivo",24),c.ac("emiteimagen",function(t){return o.recibirImagen(t)}),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(49,"hr"),c.Gc(50,O,11,3,"div",25),c.Sb(),c.Tb(51,"div",26),c.Tb(52,"button",27),c.ac("click",function(){return o.cancelarcomp()}),c.Ic(53,"Cancelar"),c.Sb(),c.Tb(54,"button",28),c.Ic(55,"Guardar"),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.zb(6),c.kc("formGroup",o.myFormcomp),c.zb(12),c.kc("ngClass",c.oc(10,A,o.f.nombre.errors&&o.submitEnviado)),c.zb(2),c.kc("ngIf",o.f.nombre.errors&&o.submitEnviado),c.zb(4),c.kc("ngClass",c.oc(12,A,o.f.razonSocial.errors&&o.submitEnviado)),c.zb(1),c.kc("ngIf",o.f.razonSocial.errors&&o.submitEnviado),c.zb(4),c.kc("ngClass",c.oc(14,A,o.f.rfc.errors&&o.submitEnviado)),c.zb(1),c.kc("ngIf",(null==o.f.rfc.errors?null:o.f.rfc.errors.required)&&o.submitEnviado),c.zb(1),c.kc("ngIf",(null==o.f.rfc.errors?null:o.f.rfc.errors.pattern)&&o.f.rfc.touched),c.zb(17),c.kc("recibiendoImagen",o.objCompany.url),c.zb(2),c.kc("ngIf",o.listcontacto))},directives:[r.f,e.y,e.m,e.f,e.b,e.l,e.e,T.a,n.k,n.m,e.h,e.v,e.p,e.x,S.a,b.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}.titulo[_ngcontent-%COMP%]{margin-top:1em}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),t})();var z=a("gYgu"),E=a("cCUj");const x=["nombre"];function _(t,o){1&t&&(c.Tb(0,"div",22),c.Ic(1," Campo requerido "),c.Sb())}function N(t,o){1&t&&(c.Tb(0,"div",22),c.Ic(1," Campo requerido "),c.Sb())}function D(t,o){1&t&&(c.Tb(0,"div",22),c.Ic(1," CURP inv\xe1lida, favor de verificar "),c.Sb())}function F(t,o){1&t&&(c.Tb(0,"div",22),c.Ic(1," Campo requerido "),c.Sb())}function j(t,o){1&t&&(c.Tb(0,"div",22),c.Ic(1," Correo empresarial inv\xe1lido, favor de verificar "),c.Sb())}function G(t,o){1&t&&(c.Tb(0,"div",22),c.Ic(1," Campo requerido "),c.Sb())}function q(t,o){1&t&&(c.Tb(0,"div",22),c.Ic(1," Correo personal inv\xe1lido, favor de verificar "),c.Sb())}function R(t,o){1&t&&(c.Tb(0,"div",22),c.Ic(1," Campo requerido "),c.Sb())}const L=function(t){return{"is-invalid":t}},J=[{path:"",children:[{path:"company",component:f},{path:"company/detalle_company/:tipoinsert",component:k},{path:"company/detalle_contacto/:tipoinsert",component:(()=>{class t{constructor(t,o,a,e,n){this.formBuilder=t,this.companyPrd=o,this.routerActivePrd=a,this.routerPrd=e,this.modalPrd=n,this.arreglo=[],this.contacto=!1,this.listcontacto=!1,this.compania=!0,this.companiaprincipal=!0,this.insertar=!1,this.fechaActual="",this.fechaAlta="",this.cargando=!1,this.centrocClienteId=1,this.submitEnviado=!1,this.esModificaEmpresa=!1,this.routerActivePrd.params.subscribe(t=>{this.insertar="nuevo"==t.tipoinsert});let r=new Date,i=r.getDate().toString(),c=r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1,l=r.getFullYear();this.fechaActual=`${i}/${c}/${l}`}ngOnInit(){this.objcontacto=null==history.state.datos?{}:history.state.datos,this.datosEmpresa=null==history.state.empresa?{}:history.state.empresa,this.esModificaEmpresa=null!=history.state.modificaEmpresa&&history.state.modificaEmpresa,this.myFormcont=this.createFormcont(this.objcontacto)}ngAfterViewInit(){this.nombre.nativeElement.focus()}createFormcont(t){let o=new n.f("en-MX");return this.formBuilder.group({nombre:[t.nombre,[e.w.required]],apellidoPaterno:[t.apellidoPaterno,[e.w.required]],apellidoMaterno:[t.apellidoMaterno],curp:[t.curp,e.w.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)],emailCorporativo:[t.emailCorporativo,[e.w.required,e.w.email]],contactoInicialEmailPersonal:[t.contactoInicialEmailPersonal,[e.w.required,e.w.email]],contactoInicialTelefono:[t.contactoInicialTelefono,[e.w.required]],fechaAlta:[{value:this.insertar?this.fechaActual:o.transform(new Date,"dd/MM/yyyy"),disabled:!0},[e.w.required]],personaId:t.personaId})}enviarPeticioncont(){this.submitEnviado=!0,console.log(this.myFormcont.value),this.myFormcont.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.insertar?"\xbfDeseas registrar el contacto?":"\xbfDeseas actualizar los datos del contacto inicial?").then(t=>{if(t){let t=this.myFormcont.value;t=Object.assign(Object.assign({},t),{fechaAlta:this.fechaActual});let o={nombre:t.nombre,apellidoPaterno:t.apellidoPaterno,apellidoMaterno:t.apellidoMaterno,curp:t.curp,emailCorporativo:t.emailCorporativo,contactoInicialEmailPersonal:t.contactoInicialEmailPersonal,contactoInicialTelefono:t.contactoInicialTelefono,centrocClienteId:{centrocClienteId:this.datosEmpresa.centrocClienteId}};this.insertar?this.companyPrd.savecont(o).subscribe(t=>{this.modalPrd.showMessageDialog(t.resultado,t.mensaje).then(()=>{this.esModificaEmpresa?this.routerPrd.navigate(["company","detalle_company","modifica"],{state:{datos:this.datosEmpresa}}):this.routerPrd.navigate(["company"])}),this.compania=!1,this.contacto=!0}):(o.personaId=t.personaId,console.log(o),this.companyPrd.modificarCont(o).subscribe(t=>{this.modalPrd.showMessageDialog(t.resultado,t.mensaje).then(()=>this.routerPrd.navigate(["company","detalle_company","modifica"],{state:{datos:this.datosEmpresa}})),this.listcontacto=!0,this.compania=!1}))}})}redirect(t){this.routerPrd.navigate(["/company"])}regresarPantallaPrincipal(){this.routerPrd.navigate(["company","detalle_company","modifica"],{state:{datos:this.datosEmpresa}})}get f(){return this.myFormcont.controls}}return t.\u0275fac=function(o){return new(o||t)(c.Nb(e.c),c.Nb(d),c.Nb(r.a),c.Nb(r.e),c.Nb(C.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-detalle-contacto"]],viewQuery:function(t,o){if(1&t&&c.Oc(x,!0),2&t){let t;c.uc(t=c.bc())&&(o.nombre=t.first)}},decls:59,vars:29,consts:[[1,"row","margen"],[1,"col","titulo-outlet"],[3,"formGroup","ngSubmit"],["type","hidden","formControlName","personaId"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar"],[1,"form-group","row","margen"],[1,"titulo"],[1,"form","group","row","margen"],[1,"input-group-sm","mb-3","col-4"],["formControlName","nombre","appMayusculas","","type","text","placeholder","",1,"form-control",3,"ngClass"],["nombre",""],["class","invalid-feedback",4,"ngIf"],["formControlName","apellidoPaterno","appMayusculas","","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","apellidoMaterno","appMayusculas","","type","text","id","apellidoMaterno","aria-describedby","emailHelp","placeholder","",1,"form-control"],["formControlName","curp","maxlength","18","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","emailCorporativo","type","email","appMayusculas","","placeholder","",1,"form-control",3,"minusculas","ngClass"],["appMayusculas","","formControlName","contactoInicialEmailPersonal","type","email","placeholder","",1,"form-control","text-lowercase",3,"minusculas","ngClass"],["appSolonumeros","","formControlName","contactoInicialTelefono","maxlength","10","type","text","placeholder","",1,"form-control",3,"ngClass"],["formControlName","fechaAlta","type","text","placeholder","",1,"form-control"],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"invalid-feedback"]],template:function(t,o){1&t&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"label"),c.Ic(3,"CONFIGURACI\xd3N DE COMPA\xd1\xcdA"),c.Sb(),c.Sb(),c.Sb(),c.Ob(4,"hr"),c.Tb(5,"form",2),c.ac("ngSubmit",function(){return o.enviarPeticioncont()}),c.Ob(6,"input",3),c.Tb(7,"div",4),c.Ob(8,"br"),c.Tb(9,"div",5),c.Tb(10,"label",6),c.Ic(11,"INFORMACI\xd3N DE CONTACTO"),c.Sb(),c.Sb(),c.Tb(12,"div",7),c.Tb(13,"div",8),c.Tb(14,"label"),c.Ic(15,"Nombre *"),c.Sb(),c.Ob(16,"input",9,10),c.Gc(18,_,2,0,"div",11),c.Sb(),c.Tb(19,"div",8),c.Tb(20,"label"),c.Ic(21,"Apellido paterno *"),c.Sb(),c.Ob(22,"input",12),c.Gc(23,N,2,0,"div",11),c.Sb(),c.Tb(24,"div",8),c.Tb(25,"label"),c.Ic(26,"Apellido materno"),c.Sb(),c.Ob(27,"input",13),c.Sb(),c.Tb(28,"div",8),c.Tb(29,"label"),c.Ic(30,"CURP"),c.Sb(),c.Ob(31,"input",14),c.Gc(32,D,2,0,"div",11),c.Sb(),c.Tb(33,"div",8),c.Tb(34,"label"),c.Ic(35,"Correo empresarial *"),c.Sb(),c.Ob(36,"input",15),c.Gc(37,F,2,0,"div",11),c.Gc(38,j,2,0,"div",11),c.Sb(),c.Tb(39,"div",8),c.Tb(40,"label"),c.Ic(41,"Correo personal *"),c.Sb(),c.Ob(42,"input",16),c.Gc(43,G,2,0,"div",11),c.Gc(44,q,2,0,"div",11),c.Sb(),c.Tb(45,"div",8),c.Tb(46,"label"),c.Ic(47,"Tel\xe9fono *"),c.Sb(),c.Ob(48,"input",17),c.Gc(49,R,2,0,"div",11),c.Sb(),c.Tb(50,"div",8),c.Tb(51,"label"),c.Ic(52,"Fecha de registro *"),c.Sb(),c.Ob(53,"input",18),c.Sb(),c.Sb(),c.Sb(),c.Tb(54,"div",19),c.Tb(55,"button",20),c.ac("click",function(){return o.regresarPantallaPrincipal()}),c.Ic(56,"Cancelar"),c.Sb(),c.Tb(57,"button",21),c.Ic(58,"Guardar"),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.zb(5),c.kc("formGroup",o.myFormcont),c.zb(11),c.kc("ngClass",c.oc(17,L,o.f.nombre.errors&&o.submitEnviado)),c.zb(2),c.kc("ngIf",o.f.nombre.errors&&o.submitEnviado),c.zb(4),c.kc("ngClass",c.oc(19,L,o.f.apellidoPaterno.errors&&o.submitEnviado)),c.zb(1),c.kc("ngIf",o.f.apellidoPaterno.errors&&o.submitEnviado),c.zb(8),c.kc("ngClass",c.oc(21,L,(null==o.f.curp.errors?null:o.f.curp.errors.pattern)&&o.f.curp.touched)),c.zb(1),c.kc("ngIf",(null==o.f.curp.errors?null:o.f.curp.errors.pattern)&&o.f.curp.touched),c.zb(4),c.kc("minusculas",!0)("ngClass",c.oc(23,L,(null==o.f.emailCorporativo.errors?null:o.f.emailCorporativo.errors.required)&&o.submitEnviado||(null==o.f.emailCorporativo.errors?null:o.f.emailCorporativo.errors.email)&&o.f.emailCorporativo.touched)),c.zb(1),c.kc("ngIf",(null==o.f.emailCorporativo.errors?null:o.f.emailCorporativo.errors.required)&&o.submitEnviado),c.zb(1),c.kc("ngIf",(null==o.f.emailCorporativo.errors?null:o.f.emailCorporativo.errors.email)&&o.f.emailCorporativo.touched),c.zb(4),c.kc("minusculas",!0)("ngClass",c.oc(25,L,(null==o.f.contactoInicialEmailPersonal.errors?null:o.f.contactoInicialEmailPersonal.errors.required)&&o.submitEnviado||(null==o.f.contactoInicialEmailPersonal.errors?null:o.f.contactoInicialEmailPersonal.errors.email)&&o.f.contactoInicialEmailPersonal.touched)),c.zb(1),c.kc("ngIf",(null==o.f.contactoInicialEmailPersonal.errors?null:o.f.contactoInicialEmailPersonal.errors.required)&&o.submitEnviado),c.zb(1),c.kc("ngIf",(null==o.f.contactoInicialEmailPersonal.errors?null:o.f.contactoInicialEmailPersonal.errors.email)&&o.f.contactoInicialEmailPersonal.touched),c.zb(4),c.kc("ngClass",c.oc(27,L,o.f.contactoInicialTelefono.errors&&o.submitEnviado)),c.zb(1),c.kc("ngIf",o.f.contactoInicialTelefono.errors&&o.submitEnviado))},directives:[e.y,e.m,e.f,e.b,e.l,e.e,T.a,z.a,n.k,n.m,e.h,E.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}.titulo[_ngcontent-%COMP%]{margin-top:1em}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),t})()}]}];let U=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(o){return new(o||t)},imports:[[r.i.forChild(J)],r.i]}),t})();var B=a("HaJA"),V=a("pKmL");let Z=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(o){return new(o||t)},providers:[d],imports:[[n.c,U,B.a,e.g,e.u,V.a]]}),t})()}}]);