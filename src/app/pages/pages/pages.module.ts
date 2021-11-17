import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from '../medicos/medicos.component';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';
import { PacientesComponent } from '../pacientes/pacientes.component';
import { ConsultasComponent } from '../consultas/consultas.component';
import { LaboratoriosComponent } from '../laboratorios/laboratorios.component';
import { HomeComponent } from '../home/home.component';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    MedicosComponent,
    PacientesComponent,
    ConsultasComponent,
    LaboratoriosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    MedicosComponent,
    EspecialidadesComponent,
    PacientesComponent,
    ConsultasComponent,
    LaboratoriosComponent
  ]
})
export class PagesModule { }
