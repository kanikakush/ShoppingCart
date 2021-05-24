import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './credentials/landing-page/landing-page.component';
import { LoginUserComponent } from './credentials/login-user/login-user.component';
import { RegisterUserComponent } from './credentials/register-user/register-user.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path:'login', component:LoginUserComponent
  },
  {
    path:'register',component:RegisterUserComponent
  },
  {
    path:'',component:LandingPageComponent
  },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    canLoad:[AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
