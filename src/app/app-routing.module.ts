import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { IndexComponent } from './componentes/index/index.component';
import { AgregarExperienciaComponent } from './componentes/index/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './componentes/index/experiencia/editar-experiencia/editar-experiencia.component';
import { AgregarEducacionComponent } from './componentes/index/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './componentes/index/educacion/editar-educacion/editar-educacion.component';
import { AgregarHabilidadComponent } from './componentes/index/habilidades/agregar-habilidad/agregar-habilidad.component';
import { EditarHabilidadComponent } from './componentes/index/habilidades/editar-habilidad/editar-habilidad.component';
import { AgregarIdiomaComponent } from './componentes/index/idiomas/agregar-idioma/agregar-idioma.component';
import { EditarIdiomaComponent } from './componentes/index/idiomas/editar-idioma/editar-idioma.component';
import { NuevoUsuarioComponent } from './componentes/index/nuevo-usuario/nuevo-usuario.component';

const routes: Routes =[
  {path: 'index', component:IndexComponent},
  {path: '', redirectTo: '/index', pathMatch:'full'},
  {path: 'addExp', component: AgregarExperienciaComponent},
  {path: 'editExp/:id', component: EditarExperienciaComponent},
  {path: 'addEducacion', component: AgregarEducacionComponent},
  {path: 'editEducacion/:id', component: EditarEducacionComponent},
  {path: 'addHabilidad', component: AgregarHabilidadComponent},
  {path: 'editHabilidad/:id', component: EditarHabilidadComponent},
  {path: 'addIdioma', component: AgregarIdiomaComponent},
  {path: 'editIdioma/:id', component: EditarIdiomaComponent},
  {path: 'newUser', component: NuevoUsuarioComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
