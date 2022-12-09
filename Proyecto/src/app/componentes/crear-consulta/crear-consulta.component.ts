import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { toChildArray } from 'preact';
import { CrudService } from '../../servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-consulta',
  templateUrl: './crear-consulta.component.html',
  styleUrls: ['./crear-consulta.component.css']
})
export class CrearConsultaComponent implements OnInit {
  formularioDeConsulta:FormGroup;
  Consultas:any;
  Consultas2:any;
  Consultas3:any;
  Cabeceras:any;
  Cabeceras2:any;
  Cabeceras3:any;
  Ejecuciones:any;
  Ejecuciones2:any;
  Ejecuciones3:any;
  NTokens:any;
  Tokens:any;
  file:any;
  myValue:boolean;
  opcionSeleccionado: string  = '';
  verSeleccion: string        = '';
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
  ) { 
    this.formularioDeConsulta = this.formulario.group({
      texto:[""]      
    });
    this.myValue=true;
  }

  ngOnInit(): void {
  }

  enviarDatos(): void{    
  //console.log("formConsulta:",this.formularioDeConsulta);   
  let Array: string[]=[];
  let Array3: string[]=[];
  let Array2: string[]=[];
  let Array4: string[]=[];
  this.verSeleccion = this.opcionSeleccionado;
  const data = this.formularioDeConsulta.value;
  console.log("data",data);
  this.crudService.ObtenerConsultaJaccard(this.formularioDeConsulta.value).subscribe(
    respuesta=>{
      console.log("RESPUESTA:",respuesta);
      this.Consultas=respuesta;
      const json = JSON.stringify(respuesta);
      console.log("JASON",json); 
      JSON.parse(json, (key, value) => {  
        if (Array.indexOf(key)==-1 && isNaN(parseInt(key, 10)) && key!=''){
          //console.log('aux:'+aux+'Array:'+Array.indexOf(aux));
          Array.push(key.toString());    
          Array3.push(key.toString());         
        }               
      });      
      this.Cabeceras=Array;
      this.Ejecuciones=Array3; 
      console.log("CABECERAS:",Array);
      console.log("EJECUCIONES:",Array3);
    }
  );
  this.crudService.ObtenerConsultaCoseno(this.formularioDeConsulta.value).subscribe(
    respuesta2=>{
      console.log("RESPUESTA:",respuesta2);
      this.Consultas2=respuesta2;
      const json = JSON.stringify(respuesta2);
      console.log("JASON",json); 
      JSON.parse(json, (key, value) => {  
        if (Array.indexOf(key)==-1 && isNaN(parseInt(key, 10)) && key!=''){
          //console.log('aux:'+aux+'Array:'+Array.indexOf(aux));
          Array.push(key.toString());    
          Array3.push(key.toString());         
        }               
      });      
      this.Cabeceras2=Array;
      this.Ejecuciones2=Array3; 
      console.log("CABECERAS2:",Array);
      console.log("EJECUCIONES2:",Array3);
    }
  );
  
  this.crudService.ObtenerConsultaTokensDiscri(this.formularioDeConsulta.value).subscribe(
    respuesta3=>{
      console.log("RESPUESTA:",respuesta3);
      this.Consultas3=respuesta3;
      const json = JSON.stringify(respuesta3);
      console.log("JASON",json); 
      JSON.parse(json, (key, value) => {  
        if (Array4.indexOf(key)==-1 && isNaN(parseInt(key, 10)) && key!=''){          
          Array2.push(key.toString());    
          Array4.push(key.toString());              
        }               
      });      
      this.Cabeceras3=Array2;
      this.Ejecuciones3=Array4; 
      console.log("CABECERAS3:",Array2);
      console.log("EJECUCIONES3:",Array4);     
    }
  );    
    
  }
  fileChanged(e:any) { 
    this.file = e.target.files[0]; 
    
  }
  uploadDocument() { 
    
    if (this.file !== undefined){
      this.verSeleccion = this.opcionSeleccionado;
      let fileReader = new FileReader(); 
      let Array: string[]=[];
      let Array3: string[]=[];
      let Array2: string[]=[];
      let Array4: string[]=[];      
      var varStr= ""      
      fileReader.onload = (e) => { 
        varStr=fileReader.result as string;
        console.log("F:",varStr);   
        const data = this.formularioDeConsulta.value;
        console.log("data",data);
        this.crudService.ObtenerConsultaJaccard2(varStr).subscribe(
          respuesta=>{
            console.log("RESPUESTA:",respuesta);
            this.Consultas=respuesta;
            const json = JSON.stringify(respuesta);
            console.log("JASON",json); 
            JSON.parse(json, (key, value) => {  
              if (Array.indexOf(key)==-1 && isNaN(parseInt(key, 10)) && key!=''){
                //console.log('aux:'+aux+'Array:'+Array.indexOf(aux));
                Array.push(key.toString());    
                Array3.push(key.toString());         
              }               
            });      
            this.Cabeceras=Array;
            this.Ejecuciones=Array3; 
            console.log("CABECERAS:",Array);
            console.log("EJECUCIONES:",Array3);
          }
        );
        this.crudService.ObtenerConsultaCoseno2(varStr).subscribe(
          respuesta2=>{
            console.log("RESPUESTA:",respuesta2);
            this.Consultas2=respuesta2;
            const json = JSON.stringify(respuesta2);
            console.log("JASON",json); 
            JSON.parse(json, (key, value) => {  
              if (Array.indexOf(key)==-1 && isNaN(parseInt(key, 10)) && key!=''){
                //console.log('aux:'+aux+'Array:'+Array.indexOf(aux));
                Array.push(key.toString());    
                Array3.push(key.toString());         
              }               
            });      
            this.Cabeceras2=Array;
            this.Ejecuciones2=Array3; 
            console.log("CABECERAS2:",Array);
            console.log("EJECUCIONES2:",Array3);
          }
        );
        this.opcionSeleccionado=''
        this.crudService.ObtenerConsultaTokensDiscri2(varStr).subscribe(
          respuesta3=>{
            console.log("RESPUESTA:",respuesta3);
            this.Consultas3=respuesta3;
            const json = JSON.stringify(respuesta3);
            console.log("JASON",json); 
            JSON.parse(json, (key, value) => {  
              if (Array4.indexOf(key)==-1 && isNaN(parseInt(key, 10)) && key!=''){          
                Array2.push(key.toString());    
                Array4.push(key.toString());              
              }               
            });      
            this.Cabeceras3=Array2;
            this.Ejecuciones3=Array4; 
            console.log("CABECERAS3:",Array2);
            console.log("EJECUCIONES3:",Array4);     
          }
        );
      } 
      fileReader.readAsText(this.file);  
          
    }     
    
  } 
  

}
