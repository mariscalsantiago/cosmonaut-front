(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"04Ps":function(t,e,r){"use strict";r.d(e,"a",function(){return s});var i=r("xIjt"),o=r("fXoL"),n=r("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.url="",this.url=i.a.catalogo}getEsquemaPago(){return this.http.get(this.url+"/esquemaPago/listar/todos")}getMonedas(){return this.http.get(this.url+"/moneda/listar/todos")}getMonedaById(t){return this.http.get(this.url+"/moneda/obtener/id/"+t)}getCuentasBanco(){return this.http.get(this.url+"/csbanco/listar/todos")}getNacinalidades(){return this.http.get(this.url+"/nacionalidad/listar/todos")}getNacinalidadById(t){return this.http.get(`${this.url}/nacionalidad/obtener/id/${t}`)}getPreferencias(){return this.http.get(this.url+"/tipoPreferencia/listar/todos")}getPreferenciasById(t){return this.http.get(`${this.url}/tipoPreferencia/obtener/id/${t}`)}getTipoContratos(){return this.http.get(this.url+"/csTipoContrato/listar/todos")}getCompensacion(){return this.http.get(this.url+"/tipoCompensacion/listar/todos")}getCompensacionById(t){return this.http.get(`${this.url}/tipoCompensacion/obtener/id/${t}`)}getAreasGeograficas(){return this.http.get(this.url+"/areaGeografica/listar/todos")}getAsentamientoByCodigoPostal(t){return this.http.get(`${this.url}/catAsentamiento/obtener/codigo/${t}`)}getTipoRegimencontratacion(){return this.http.get(this.url+"/csTipoRegimenContratacion/listar/todos")}getAllEstados(){return this.http.get(this.url+"/catEstados/listar/todos")}getAllMetodosPago(){return this.http.get(this.url+"/catMetodoPago/listar/todos")}getActividadEconomica(t){return this.http.get(`${this.url}/csActividadEconomica/obtener/todos/true/${t}`)}getRegimenFiscal(){return this.http.get(this.url+"/csRegimenFiscal/listar/todos")}getPeriocidadPago(){return this.http.get(this.url+"/csPeriodicidadPago/listar/todos")}getBasePeriodos(){return this.http.get(this.url+"/catBasePeriodo/listar/todos")}getCatPeriodoAguinaldo(){return this.http.get(this.url+"/catPeriodoAguinaldo/listar/todos")}getTipoJornadas(){return this.http.get(this.url+"/csTipoJornada/listar/todos")}getMotivoBajaEmpleado(t){return this.http.get(`${this.url}/catMotivoBaja/listar/todosActivo/${t}`)}getTipoBajaEmpleado(t){return this.http.get(`${this.url}/tipoBaja/listar/todosActivo/${t}`)}getTipoPercepcion(t){return this.http.get(`${this.url}/csTipoPercepcion/listar/todosActivo/${t}`)}getTipoDeduccion(t){return this.http.get(`${this.url}/csTipoDeduccion/listar/todosActivo/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(o.Xb(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"9GDa":function(t,e,r){"use strict";r.d(e,"a",function(){return s});var i=r("tk/3"),o=r("xIjt"),n=r("fXoL");let s=(()=>{class t{constructor(t){this.http=t,this.url="",this.url=o.a.gruponomina}getAll(t){return console.log(this.url+"/lista/id/compania/"+t),this.http.get(this.url+"/lista/id/compania/"+t)}getGroupNomina(t){return this.http.get(this.url+"/obtener/id/"+t)}save(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log("Esto mando"),console.log(r),this.http.put(this.url+"/guardar",r,e)}modificar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log("json de modificar grupo de nomina",r),this.http.post(this.url+"/modificar",r,e)}eliminar(t){return this.http.post(`${this.url}/eliminar/id/${t}`,{})}getGroupNominaEmpleado(t){return this.http.get(o.a.contratoColaborador+"/obtener/grupoNomina/id/"+t)}filtrar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log("dato enviado grupo de nomina filtrado",r),this.http.post(this.url+"/lista/dinamica",r,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Xb(i.b))},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},DlAn:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var i=r("tk/3"),o=r("xIjt"),n=r("fXoL");let s=(()=>{class t{constructor(t){this.http=t,this.url="",this.url=o.a.usuarios}getAllUsers(){return this.http.get(this.url+"/lista/todo/3")}getByCompany(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return this.http.post(this.url+"/lista/compania/tipoPersona",r,e)}getById(t){return this.http.get(`${this.url}/obtener/id/${t}`)}filtrar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log("peticion filtro dinamico"),console.log(r),this.http.post(this.url+"/lista/dinamica",r,e)}save(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log(this.url+"/guardar/usuario"),console.log(r),this.http.put(this.url+"/guardar/usuario",r,e)}modificar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log(r),this.http.post(this.url+"/modificar/usuario",r,e)}modificarListaActivos(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return this.http.post(this.url+"/modificar/lista",r,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Xb(i.b))},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},XIhe:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var i=r("tk/3"),o=r("xIjt"),n=r("fXoL");let s=(()=>{class t{constructor(t){this.http=t,this.url="",this.url=o.a.jornada}getAllJornada(t){return this.http.get(`${this.url}/listar/jornada/${t}`)}getdetalleJornada(t,e){return this.http.get(`${this.url}/listar/${t}/${e}`)}eliminar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log("eliminar",r),this.http.put(this.url+"/eliminar",r,e)}save(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log(r),this.http.put(this.url+"/guardar",r,e)}modificar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log("Modificar",r),this.http.put(this.url+"/modificar",r,e)}jornadasByEmpresa(t){return console.log(`${this.url}/listar/jornada/${t}`),this.http.get(`${this.url}/listar/jornada/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(n.Xb(i.b))},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},gYgu:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var i=r("fXoL");let o=(()=>{class t{constructor(t,e){this.el=t,this.render=e,this.minusculas=!1}onKeyDown(t){this.minusculas&&(this.el.nativeElement.value=(""+this.el.nativeElement.value).toLowerCase())}onFocusout(t){if(this.minusculas)this.el.nativeElement.value=(""+this.el.nativeElement.value).toLowerCase();else{const t=this.el.nativeElement.value.split(" "),e=/^(la|el|los|de|del|al|la)$/g;let r="";t.forEach((i,o)=>{const n=o===t.length-1?"":" ";e.test(i)?r+=i+n:r+=i.substring(0,1).toUpperCase()+i.substring(1,i.length).toLowerCase()+n,console.log(r)}),this.render.setProperty(this.el.nativeElement,"value",r)}}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(i.l),i.Nb(i.E))},t.\u0275dir=i.Ib({type:t,selectors:[["","appMayusculas",""]],hostBindings:function(t,e){1&t&&i.ac("input",function(t){return e.onKeyDown(t)})("focusout",function(t){return e.onFocusout(t.target)})},inputs:{minusculas:"minusculas"}}),t})()},juEs:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var i=r("tk/3"),o=r("xIjt"),n=r("fXoL");let s=(()=>{class t{constructor(t){this.http=t,this.url="",this.url=o.a.cuentasbancarias}getListaCuentaBancaria(){return this.http.get(this.url+"/listar/todos")}save(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log("guardar"),console.log(r),this.http.put(this.url+"/guardar",r,e)}modificar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log(r),this.http.post(this.url+"/modificar",r,e)}eliminar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return this.http.post(this.url+"/eliminar",r,e)}getCuentaBancariaByEmpresa(t){return this.http.get(`${this.url}/obtener/cliente/${t}`)}getByEmpleado(t){return this.http.get(`${o.a.cuentasbancarias}/obtener/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(n.Xb(i.b))},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},tLQd:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var i=r("tk/3"),o=r("xIjt"),n=r("fXoL");let s=(()=>{class t{constructor(t){this.http=t,this.url="",this.url=o.a.area}getAllArea(t){return this.http.get(`${this.url}/listar/areas/${t}`)}getAreaID(t){return this.http.get(`${this.url}/obtener/idArea/${t}`)}getListPues(t,e){return this.http.get(`${this.url}/obtener/cliente/area/id/${t}?idArea=${e}`)}getdetalleArea(t,e){return this.http.get(`${this.url}/obtener/empleado/idCliente/${t}?idArea=${e}`)}filtrar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return this.http.post(this.url+"/lista/dinamica",r,e)}save(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log(r),this.http.put(this.url+"/guardar",r,e)}savepuest(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log(r),this.http.put(this.url+"/agregarPuesto",r,e)}eliminar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return this.http.post(this.url+"/eliminar",r,e)}modificar(t){const e={headers:new i.d({"Content-Type":"application/json"})};let r=JSON.stringify(t);return console.log("JSonpuesto",r),this.http.post(this.url+"/modificar",r,e)}getAllCompany(t){return this.http.get(`${o.a.centroCostosCliente}/obtener/id/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(n.Xb(i.b))},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);