(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{lPn2:function(e,t,a){"use strict";a.r(t),a.d(t,"empresasCuentasBancariasModule",function(){return y});var n=a("ofXK"),o=a("tyNb"),r=a("3Pt+"),i=a("fXoL"),s=a("juEs"),c=a("04Ps"),l=a("i9e2"),b=a("dkea"),u=a("cCUj");const d=["nombre"];function m(e,t){1&e&&(i.Tb(0,"div",27),i.Ic(1," Campo requerido "),i.Sb())}function p(e,t){1&e&&(i.Tb(0,"div",27),i.Ic(1," Campo requerido "),i.Sb())}function g(e,t){if(1&e&&(i.Tb(0,"option",28),i.Ic(1),i.Sb()),2&e){const e=t.$implicit;i.kc("value",e.bancoId),i.zb(1),i.Jc(e.nombreCorto)}}function h(e,t){1&e&&(i.Tb(0,"div",27),i.Ic(1," Campo requerido "),i.Sb())}function f(e,t){1&e&&(i.Tb(0,"div",27),i.Ic(1," Campo requerido "),i.Sb())}function v(e,t){1&e&&(i.Tb(0,"div",27),i.Ic(1," La CLABE no es v\xe1lida "),i.Sb())}const C=function(e){return{"is-invalid":e}},I=function(e,t){return{ocultar:e,"mostrarTooltip bounce-in-top":t}};let S=(()=>{class e{constructor(e,t,a,n,o,r){this.formBuild=e,this.routerPrd=t,this.routerActive=a,this.cuentasPrd=n,this.catalogosPrd=o,this.modalPrd=r,this.mostrartooltip=!1,this.id_empresa=0,this.esInsert=!1,this.objCuenta=[],this.submitInvalido=!1,this.peticion=[]}ngOnInit(){this.routerActive.params.subscribe(e=>{this.id_empresa=e.id,"nuevo"==e.tipoinsert?this.esInsert=!0:"editar"==e.tipoinsert?this.esInsert=!1:this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"cuentasbancarias"])}),this.objCuenta={bancoId:{bancoId:0}},this.esInsert||(this.objCuenta=history.state.data,null==this.objCuenta&&this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"cuentasbancarias"])),this.myForm=this.createForm(this.objCuenta),this.catalogosPrd.getCuentasBanco(!0).subscribe(e=>{this.cuentasBancarias=e.datos})}ngAfterViewInit(){this.nombre.nativeElement.focus()}createForm(e){return this.formBuild.group({numeroCuenta:[e.numeroCuenta,[r.w.required]],nombreCuenta:[e.nombreCuenta,[r.w.required]],idbanco:[e.bancoId.bancoId,[r.w.required]],descripcion:[e.descripcion],num_informacion:[e.numInformacion],clabe:[{value:e.clabe,disabled:!this.esInsert},[r.w.required,r.w.pattern(/^\d{18}$/)]],num_sucursal:[e.numSucursal],esActivo:[this.esInsert?{value:"true",disabled:!0}:e.esActivo]})}enviarPeticion(){this.submitInvalido=!0,this.myForm.invalid?this.modalPrd.showMessageDialog(this.modalPrd.error):this.modalPrd.showMessageDialog(this.modalPrd.warning,this.esInsert?"\xbfDeseas registrar la cuenta bancaria?":"\xbfDeseas actualizar los datos de la cuenta bancaria?").then(e=>{if(e){let e=this.myForm.value;this.peticion={numeroCuenta:e.numeroCuenta,nombreCuenta:e.nombreCuenta,descripcion:e.descripcion,numInformacion:e.num_informacion,clabe:e.clabe,numSucursal:e.num_sucursal,esActivo:e.esActivo,nclCentrocCliente:{centrocClienteId:this.id_empresa},bancoId:{bancoId:e.idbanco}},this.esInsert?this.cuentasPrd.save(this.peticion).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>{e.resultado&&this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"cuentasbancarias"])})}):(this.peticion.clabe=this.myForm.controls.clabe.value,this.peticion.cuentaBancoId=this.objCuenta.cuentaBancoId,this.cuentasPrd.modificar(this.peticion).subscribe(e=>{this.modalPrd.showMessageDialog(e.resultado,e.mensaje).then(()=>{e.resultado&&this.routerPrd.navigate(["/empresa","detalle",this.id_empresa,"cuentasbancarias"])})}))}})}cancelar(){this.routerPrd.navigate(["/empresa/detalle",this.id_empresa,"cuentasbancarias"])}get f(){return this.myForm.controls}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(r.c),i.Nb(o.e),i.Nb(o.a),i.Nb(s.a),i.Nb(c.a),i.Nb(l.a))},e.\u0275cmp=i.Hb({type:e,selectors:[["app-detallecuentasbancarias"]],viewQuery:function(e,t){if(1&e&&i.Oc(d,!0),2&e){let e;i.uc(e=i.bc())&&(t.nombre=e.first)}},decls:63,vars:24,consts:[[1,"form-desing",3,"formGroup","ngSubmit"],["type","hidden"],["appTamanioVentana","",1,"background-panel","margen","background-ajustar",3,"pixeles"],[1,"form-group","row","margen"],[1,"titulo"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-4"],["formControlName","nombreCuenta","type","text","placeholder","",1,"form-control",3,"ngClass"],["nombre",""],["class","invalid-feedback",4,"ngIf"],[1,"input-group-sm","mb-3","col-12","col-sm-6","col-lg-4",2,"position","relative"],[1,"ocultar",3,"ngClass"],["href","wwww.google.com"],[1,"far","fa-times-circle"],["formControlName","numeroCuenta","appSolonumeros","","type","text","maxlength","10","placeholder","",1,"form-control",3,"ngClass"],["for","exampleFormControlSelect1"],["formControlName","idbanco",1,"form-control",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["formControlName","descripcion","type","text","placeholder","",1,"form-control"],["appSolonumeros","","formControlName","num_informacion","type","text","placeholder","",1,"form-control"],["maxlength","18","appSolonumeros","","formControlName","clabe","type","text","placeholder","",1,"form-control",3,"ngClass"],["appSolonumeros","","formControlName","num_sucursal","type","text","placeholder","",1,"form-control"],["name","","id","","formControlName","esActivo",1,"form-control"],["value","true"],["value","false"],[1,"text-center","margin",2,"margin-bottom","20px"],["type","button",1,"btn","btn-primary","button-outlet","mr-3",2,"color","red",3,"click"],["type","submit",1,"btn","btn-primary","button-fill","agrandarloading"],[1,"invalid-feedback"],[3,"value"]],template:function(e,t){1&e&&(i.Ob(0,"br"),i.Ob(1,"br"),i.Tb(2,"form",0),i.ac("ngSubmit",function(){return t.enviarPeticion()}),i.Ob(3,"input",1),i.Tb(4,"div",2),i.Ob(5,"br"),i.Tb(6,"div",3),i.Tb(7,"label",4),i.Ic(8,"INFORMACI\xd3N DE CUENTAS BANCARIAS"),i.Sb(),i.Sb(),i.Tb(9,"div",3),i.Tb(10,"div",5),i.Tb(11,"label"),i.Ic(12,"Nombre de cuenta *"),i.Sb(),i.Ob(13,"input",6,7),i.Gc(15,m,2,0,"div",8),i.Sb(),i.Tb(16,"div",9),i.Tb(17,"label"),i.Ic(18,"N\xfamero de cuenta * "),i.Tb(19,"div",10),i.Ic(20,"\xbfNo tienes una cuenta bancar\xeda? "),i.Tb(21,"a",11),i.Ic(22,"Aprende m\xe1s."),i.Sb(),i.Ob(23,"i",12),i.Sb(),i.Sb(),i.Ob(24,"input",13),i.Gc(25,p,2,0,"div",8),i.Sb(),i.Tb(26,"div",5),i.Tb(27,"label",14),i.Ic(28,"Banco *"),i.Sb(),i.Tb(29,"select",15),i.Gc(30,g,2,2,"option",16),i.Sb(),i.Gc(31,h,2,0,"div",8),i.Sb(),i.Tb(32,"div",5),i.Tb(33,"label"),i.Ic(34,"Descripci\xf3n"),i.Sb(),i.Ob(35,"input",17),i.Sb(),i.Tb(36,"div",5),i.Tb(37,"label"),i.Ic(38,"N\xfamero de informaci\xf3n"),i.Sb(),i.Ob(39,"input",18),i.Sb(),i.Tb(40,"div",5),i.Tb(41,"label"),i.Ic(42,"Cuenta CLABE *"),i.Sb(),i.Ob(43,"input",19),i.Gc(44,f,2,0,"div",8),i.Gc(45,v,2,0,"div",8),i.Sb(),i.Tb(46,"div",5),i.Tb(47,"label"),i.Ic(48,"N\xfamero de sucursal"),i.Sb(),i.Ob(49,"input",20),i.Sb(),i.Tb(50,"div",5),i.Tb(51,"label"),i.Ic(52,"Estatus"),i.Sb(),i.Tb(53,"select",21),i.Tb(54,"option",22),i.Ic(55,"Activo"),i.Sb(),i.Tb(56,"option",23),i.Ic(57,"Inactivo"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(58,"div",24),i.Tb(59,"button",25),i.ac("click",function(){return t.cancelar()}),i.Ic(60,"Cancelar"),i.Sb(),i.Tb(61,"button",26),i.Ic(62,"Guardar"),i.Sb(),i.Sb(),i.Sb()),2&e&&(i.zb(2),i.kc("formGroup",t.myForm),i.zb(2),i.kc("pixeles",340),i.zb(9),i.kc("ngClass",i.oc(13,C,t.f.nombreCuenta.errors&&t.submitInvalido)),i.zb(2),i.kc("ngIf",t.submitInvalido&&t.f.nombreCuenta.errors),i.zb(4),i.kc("ngClass",i.pc(15,I,!t.mostrartooltip,t.mostrartooltip)),i.zb(5),i.kc("ngClass",i.oc(18,C,t.f.numeroCuenta.errors&&t.submitInvalido)),i.zb(1),i.kc("ngIf",t.submitInvalido&&t.f.numeroCuenta.errors),i.zb(4),i.kc("ngClass",i.oc(20,C,t.f.idbanco.errors&&t.submitInvalido)),i.zb(1),i.kc("ngForOf",t.cuentasBancarias),i.zb(1),i.kc("ngIf",t.submitInvalido&&t.f.idbanco.errors),i.zb(12),i.kc("ngClass",i.oc(22,C,t.submitInvalido&&(null==t.f.clabe.errors?null:t.f.clabe.errors.required)||(null==t.f.clabe.errors?null:t.f.clabe.errors.pattern)&&t.f.clabe.touched)),i.zb(1),i.kc("ngIf",t.submitInvalido&&(null==t.f.clabe.errors?null:t.f.clabe.errors.required)),i.zb(1),i.kc("ngIf",(null==t.f.clabe.errors?null:t.f.clabe.errors.pattern)&&t.f.clabe.touched))},directives:[r.y,r.m,r.f,b.a,r.b,r.l,r.e,n.k,n.m,u.a,r.h,r.v,n.l,r.p,r.x],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.mostrarTooltip[_ngcontent-%COMP%]{background-color:rgba(2,37,56,.64);width:100%;height:50px;top:-51px;color:#fff;font-size:smaller;border-radius:7px;padding:5px;white-space:nowrap;display:block;position:absolute}.mostrarTooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4cc1b0;text-decoration:underline}.ocultar[_ngcontent-%COMP%]{display:none}"]}),e})();var T=a("DpdX"),P=a("JBW2");const w=[{path:"",children:[{path:"cuentasbancarias",component:(()=>{class e{constructor(e,t,a){this.routerPrd=e,this.activateRouter=t,this.cuentasPrd=a,this.tamanio=0,this.cargando=!1,this.changeIconDown=!1,this.arreglotabla={columnas:[],filas:[]},this.id_empresa=0,this.arreglo=[]}onResize(e){this.tamanio=e.target.innerWidth}ngOnInit(){this.activateRouter.params.subscribe(e=>{this.id_empresa=e.id,this.cargando=!0,this.cuentasPrd.getCuentaBancariaByEmpresa(this.id_empresa).subscribe(e=>{let t=[new T.a("nombreCuenta","Nombre cuenta"),new T.a("numeroCuenta","N\xfamero de cuenta"),new T.a("nombrebanco","Nombre banco"),new T.a("clabe","Cuenta CLABE"),new T.a("esActivo","Estatus")];console.log("datos de cuentas",e),void 0!==e.datos&&e.datos.forEach(e=>{var t;e.nombrebanco=null===(t=e.bancoId)||void 0===t?void 0:t.nombreCorto}),this.arreglotabla.columnas=t,this.arreglotabla.filas=e.datos,this.cargando=!1})})}apagando(e){for(let t=0;t<this.arreglo.length;t++)t!=e&&(this.arreglo[t].seleccionado=!1);this.arreglo[e].seleccionado=!this.arreglo[e].seleccionado}verdetalle(e){null==e?this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"cuentasbancarias","nuevo"]):this.routerPrd.navigate(["empresa/detalle",this.id_empresa,"cuentasbancarias","editar"],{state:{data:e}})}recibirTabla(e){switch(e.type){case"editar":this.verdetalle(e.datos)}}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(o.e),i.Nb(o.a),i.Nb(s.a))},e.\u0275cmp=i.Hb({type:e,selectors:[["app-listascuentasbancarias"]],hostBindings:function(e,t){1&e&&i.ac("resize",function(e){return t.onResize(e)},!1,i.xc)},decls:12,vars:4,consts:[[1,"scrooll-designempresa"],[1,"mt-3"],[1,"row","margen"],[1,"col","titulo"],[1,"col","text-right"],["type","button",1,"btn","btn-light","button-outlet",3,"click"],[1,"fa","fa-plus"],[1,"row","margen","margen-tabla","background-panel","scrooll"],[3,"datos","editar","ver","cargando","salida"]],template:function(e,t){1&e&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"div",2),i.Tb(3,"div",3),i.Tb(4,"label"),i.Ic(5,"RESULTADOS"),i.Sb(),i.Sb(),i.Tb(6,"div",4),i.Tb(7,"button",5),i.ac("click",function(){return t.verdetalle(void 0)}),i.Ob(8,"i",6),i.Ic(9," Agregar cuenta bancaria "),i.Sb(),i.Sb(),i.Sb(),i.Tb(10,"div",7),i.Tb(11,"app-tablapaginado",8),i.ac("salida",function(e){return t.recibirTabla(e)}),i.Sb(),i.Sb(),i.Sb(),i.Sb()),2&e&&(i.zb(11),i.kc("datos",t.arreglotabla)("editar",!0)("ver",!0)("cargando",t.cargando))},directives:[P.a],styles:[".margen[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px;margin-bottom:20px}.button-outlet[_ngcontent-%COMP%]{background-color:initial!important}table[_ngcontent-%COMP%]{border-radius:10px}.margen-tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:15px}td[_ngcontent-%COMP%]{color:#313131}td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0 solid #000;margin-left:2px}.acomodando[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center}.botonmultiseleccion[_ngcontent-%COMP%]{margin:auto;height:59px}.agrandarloading[_ngcontent-%COMP%]{width:7em}.scrooll[_ngcontent-%COMP%]{overflow:auto}.btnPersonalizado[_ngcontent-%COMP%]{background-color:initial}.btnPersonalizado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#00c1af!important}"]}),e})()},{path:"cuentasbancarias/:tipoinsert",component:S}]}];let O=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[o.i.forChild(w)]]}),e})();var _=a("HaJA"),k=a("tk/3");let y=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},providers:[s.a],imports:[[n.c,O,_.a,r.g,r.u,k.c]]}),e})()}}]);