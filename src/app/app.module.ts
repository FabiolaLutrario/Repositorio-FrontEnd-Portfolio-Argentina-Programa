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
import { IndexComponent } from './componentes/index/index.component';
import { ModalInicioSesionComponent } from './componentes/modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { LogoArgProgComponent } from './componentes/logo-arg-prog/logo-arg-prog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { interceptorProvider } from './servicios/interceptor-service';
import { NuevoUsuarioComponent } from './componentes/index/nuevo-usuario/nuevo-usuario.component';
import { AgregarExperienciaComponent } from './componentes/index/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './componentes/index/experiencia/editar-experiencia/editar-experiencia.component';
import { AgregarEducacionComponent } from './componentes/index/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './componentes/index/educacion/editar-educacion/editar-educacion.component';
import { EditarHabilidadComponent } from './componentes/index/habilidades/editar-habilidad/editar-habilidad.component';
import { AgregarHabilidadComponent } from './componentes/index/habilidades/agregar-habilidad/agregar-habilidad.component';
import { AgregarIdiomaComponent } from './componentes/index/idiomas/agregar-idioma/agregar-idioma.component';
import { EditarIdiomaComponent } from './componentes/index/idiomas/editar-idioma/editar-idioma.component';
import { ModalEditarNombreYApellidoComponent } from './componentes/modals/modal-editar-nombre-y-apellido/modal-editar-nombre-y-apellido.component';
import { ModalEditarTituloComponent } from './componentes/modals/modal-editar-titulo/modal-editar-titulo.component';
import { ModalEditarFotoComponent } from './componentes/modals/modal-editar-foto/modal-editar-foto.component';
import { ModalEditarBannerComponent } from './componentes/modals/modal-editar-banner/modal-editar-banner.component';
import { EditarProyectoComponent } from './componentes/index/proyectos/editar-proyecto/editar-proyecto.component';
import { AgregarProyectoComponent } from './componentes/index/proyectos/agregar-proyecto/agregar-proyecto.component';
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
    IndexComponent,
    ModalInicioSesionComponent,
    RedesComponent,
    LogoArgProgComponent,
    NuevoUsuarioComponent,
    AgregarExperienciaComponent,
    EditarExperienciaComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    EditarHabilidadComponent,
    AgregarHabilidadComponent,
    AgregarIdiomaComponent,
    EditarIdiomaComponent,
    ModalEditarNombreYApellidoComponent,
    ModalEditarTituloComponent,
    ModalEditarFotoComponent,
    ModalEditarBannerComponent,
    EditarProyectoComponent,
    AgregarProyectoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
