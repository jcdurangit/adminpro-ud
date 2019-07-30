import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTES } from './app.routes';

//MODULOS
import { PagesModule } from './pages/pages.module';

//SERVICIOS
//import { SettingsService } from './services/service.index';
import { ServiceModule } from './services/service.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
//import { IncrementadorComponent } from './components/incrementador/incrementador.component';

//TEMPORAL
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    //IncrementadorComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
