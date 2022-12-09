import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpPostService } from './HttpPostService';	
import { Consulta } from './Consulta';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
API:string = 'http://192.168.100.81:8000/';
  constructor(private clienteHttp:HttpClient) { }

  private createRequestOptions() {
    let headers = new HttpHeaders({
        "accept": "application/json",
        "Content-Type": "application/json"        
    });
    return headers;
  }
  //ACCIONES
  postData(data: any, route: string): Observable<any> {
    let options = this.createRequestOptions();
    return this.clienteHttp.post(this.API + route, data);
  }
  
  putData(data: any, route: string): Observable<any> {
    let options = this.createRequestOptions();
    return this.clienteHttp.put(this.API + route, data);
  }
  //SERVICIOS USUARIO
  
  ObtenerConsultaJaccard(consulta:Consulta){
    console.log("Consulta:",consulta.texto);
    var urlAPI="consultaJaccard/"+consulta.texto;    
    return this.clienteHttp.get(this.API+urlAPI);
  }
  ObtenerConsultaCoseno(consulta:Consulta){
    console.log("Consulta:",consulta.texto);
    var urlAPI="consultaCoseno/"+consulta.texto;    
    return this.clienteHttp.get(this.API+urlAPI);
  }
  ObtenerConsultaTokensDiscri(consulta:Consulta){
    console.log("Consulta:",consulta.texto);
    var urlAPI="consultaNTokens/"+consulta.texto;    
    return this.clienteHttp.get(this.API+urlAPI);
  }
  ObtenerConsultaJaccard2(consulta:string){
    console.log("Consulta:",consulta);
    var urlAPI="consultaJaccard/"+consulta;    
    return this.clienteHttp.get(this.API+urlAPI);
  }
  ObtenerConsultaCoseno2(consulta:string){
    console.log("Consulta:",consulta);
    var urlAPI="consultaCoseno/"+consulta;    
    return this.clienteHttp.get(this.API+urlAPI);
  }
  ObtenerConsultaTokensDiscri2(consulta:string){
    console.log("Consulta:",consulta);
    var urlAPI="consultaNTokens/"+consulta;    
    return this.clienteHttp.get(this.API+urlAPI);
  }
}
