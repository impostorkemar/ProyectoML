import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearConsultaComponent } from './componentes/crear-consulta/crear-consulta.component';



const routes: Routes = [

  {path: '',pathMatch:'full',redirectTo:'crear-consulta'},  
  {path: 'crear-consulta', component: CrearConsultaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
