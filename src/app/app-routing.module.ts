import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuscaMultiplaComponent } from "./components/busca-multipla/busca-multipla.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'busca-multipla', component: BuscaMultiplaComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}