import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SharedModule } from "../shared/header/shared.module";
import { FormularioComponent } from "./formulario/formulario.component";

import { FotoComponent } from "./foto/foto.component";
import { InicioComponent } from "./inicio/inicio.component";

@NgModule({
//Determina quais components o modulo é responsavel
    declarations:[
        FotoComponent,
        InicioComponent,
        FormularioComponent,
    ],
    imports:[
        BrowserModule,
        SharedModule,
    ],
//Permite que outros components acessem esse grupo
    exports: [
        FotoComponent,
    ]
})
export class FotografiaModule{}