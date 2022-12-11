import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/index/encabezado/encabezado.component';
import { BannerComponent } from './componentes/index/banner/banner.component';
import { SobreMiComponent } from './componentes/index/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/index/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/index/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/index/habilidades/habilidades.component';
import { IdiomasComponent } from './componentes/index/idiomas/idiomas.component';
import { ProyectosComponent } from './componentes/index/proyectos/proyectos.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './componentes/error/error.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';
import { BannerDashboardComponent } from './componentes/dashboard/banner-dashboard/banner-dashboard.component';
import { EducacionDashboardComponent } from './componentes/dashboard/educacion-dashboard/educacion-dashboard.component';
import { EncabezadoDashboardComponent } from './componentes/dashboard/encabezado-dashboard/encabezado-dashboard.component';
import { ExperienciaDashboardComponent } from './componentes/dashboard/experiencia-dashboard/experiencia-dashboard.component';
import { HabilidadesDashboardComponent } from './componentes/dashboard/habilidades-dashboard/habilidades-dashboard.component';
import { IdiomasDashboardComponent } from './componentes/dashboard/idiomas-dashboard/idiomas-dashboard.component';
import { ProyectosDashboardComponent } from './componentes/dashboard/proyectos-dashboard/proyectos-dashboard.component';
import { SobreMiDashboardComponent } from './componentes/dashboard/sobre-mi-dashboard/sobre-mi-dashboard.component';
import { ModalEditarBannerComponent } from './componentes/modals/modal-editar-banner/modal-editar-banner.component';
import { ModalEditarFotoPerfilComponent } from './componentes/modals/modal-editar-foto-perfil/modal-editar-foto-perfil.component';
import { ModalEditarNombreYApellidoComponent } from './componentes/modals/modal-editar-nombre-y-apellido/modal-editar-nombre-y-apellido.component';
import { ModalEditarTituloComponent } from './componentes/modals/modal-editar-titulo/modal-editar-titulo.component';
import { ModalAgregarExperienciaComponent } from './componentes/modals/modal-agregar-experiencia/modal-agregar-experiencia.component';
import { ModalEditarExperienciaComponent } from './componentes/modals/modal-editar-experiencia/modal-editar-experiencia.component';
import { ModalEliminarExperienciaComponent } from './componentes/modals/modal-eliminar-experiencia/modal-eliminar-experiencia.component';
import { ModalAgregarEducacionComponent } from './componentes/modals/modal-agregar-educacion/modal-agregar-educacion.component';
import { ModalEditarEducacionComponent } from './componentes/modals/modal-editar-educacion/modal-editar-educacion.component';
import { ModalEliminarEducacionComponent } from './componentes/modals/modal-eliminar-educacion/modal-eliminar-educacion.component';
import { ModalAgregarHabilidadComponent } from './componentes/modals/modal-agregar-habilidad/modal-agregar-habilidad.component';
import { ModalAgregarIdiomaComponent } from './componentes/modals/modal-agregar-idioma/modal-agregar-idioma.component';
import { ModalAgregarProyectoComponent } from './componentes/modals/modal-agregar-proyecto/modal-agregar-proyecto.component';
import { ModalEditarHabilidadComponent } from './componentes/modals/modal-editar-habilidad/modal-editar-habilidad.component';
import { ModalEditarIdiomaComponent } from './componentes/modals/modal-editar-idioma/modal-editar-idioma.component';
import { ModalEditarProyectoComponent } from './componentes/modals/modal-editar-proyecto/modal-editar-proyecto.component';
import { ModalEliminarHabilidadComponent } from './componentes/modals/modal-eliminar-habilidad/modal-eliminar-habilidad.component';
import { ModalEliminarIdiomaComponent } from './componentes/modals/modal-eliminar-idioma/modal-eliminar-idioma.component';
import { ModalEliminarProyectoComponent } from './componentes/modals/modal-eliminar-proyecto/modal-eliminar-proyecto.component';
import { ModalInicioSesionComponent } from './componentes/modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { LogoArgProgComponent } from './componentes/logo-arg-prog/logo-arg-prog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    IdiomasComponent,
    ProyectosComponent,
    ErrorComponent,
    DashboardComponent,
    IndexComponent,
    BannerDashboardComponent,
    EducacionDashboardComponent,
    EncabezadoDashboardComponent,
    ExperienciaDashboardComponent,
    HabilidadesDashboardComponent,
    IdiomasDashboardComponent,
    ProyectosDashboardComponent,
    SobreMiDashboardComponent,
    ModalEditarBannerComponent,
    ModalEditarFotoPerfilComponent,
    ModalEditarNombreYApellidoComponent,
    ModalEditarTituloComponent,
    ModalAgregarExperienciaComponent,
    ModalEditarExperienciaComponent,
    ModalEliminarExperienciaComponent,
    ModalAgregarEducacionComponent,
    ModalEditarEducacionComponent,
    ModalEliminarEducacionComponent,
    ModalAgregarHabilidadComponent,
    ModalAgregarIdiomaComponent,
    ModalAgregarProyectoComponent,
    ModalEditarHabilidadComponent,
    ModalEditarIdiomaComponent,
    ModalEditarProyectoComponent,
    ModalEliminarHabilidadComponent,
    ModalEliminarIdiomaComponent,
    ModalEliminarProyectoComponent,
    ModalInicioSesionComponent,
    RedesComponent,
    LogoArgProgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
