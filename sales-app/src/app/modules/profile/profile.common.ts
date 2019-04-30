import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent}
];
