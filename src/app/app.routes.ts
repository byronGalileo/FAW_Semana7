import { Routes } from '@angular/router';
import { GradeListComponent } from "./components/grade-list/grade-list.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";


export const routes: Routes = [
    { path: 'GradeList', title:"Grade List", component: GradeListComponent},
    { path: 'Personaje', title:"Personaje", component: PersonajesComponent},
];
