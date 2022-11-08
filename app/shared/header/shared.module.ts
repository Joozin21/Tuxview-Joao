import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FotografiaModule } from "src/app/fotografia/fotografia.module";
import { HeaderComponent } from "./header.component";


@NgModule({
//Determina quais components o modulo é responsavel
    declarations:[
        HeaderComponent,
    ],
    imports:[
        BrowserModule,
        FotografiaModule,
    ],
//Permite que outros components acessem esse grupo
    exports: [
        HeaderComponent,
    ]
})
export class SharedModule{}