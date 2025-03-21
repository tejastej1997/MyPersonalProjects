import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { TourofheroesComponent } from './Pages/tourofheroes/tourofheroes.component';
import { PageNotFoundComponent } from './Pages/Shared/page-not-found/page-not-found.component';
import { EmployeelistComponent } from './Pages/employeelist/employeelist.component';
import { DashboardComponent } from './Pages/tourofheroes/dashboard/dashboard.component';
import { FrontEndMentorComponent } from './Pages/front-end-mentor/front-end-mentor.component';
import { NewbieComponent } from './Pages/front-end-mentor/newbie/newbie.component';
import { ForTestingComponent } from './Pages/front-end-mentor/newbie/for-testing/for-testing.component';
import { ProductListWithcartComponent } from './Pages/front-end-mentor/newbie/product-list-withcart/product-list-withcart.component';
import { ProductListWithcartAppComponent } from './Pages/front-end-mentor/newbie/product-list-withcart/product-list-withcart-app/product-list-withcart-app.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'tourofheroes', loadChildren: () => import('./Pages/tourofheroes/tourofheroes-routing/tourofheroes-routing.module').then(m => m.TourofheroesRoutingModule) },
    { path: 'employeeList', component: EmployeelistComponent },
    { path: 'tourofheroes', component: DashboardComponent },
    {
        path: 'frontendmentor', component: FrontEndMentorComponent, children: [
            {
                path: 'newbie', component: NewbieComponent, children: [
                    // { path: 'fortesting', component: ForTestingComponent },
                ]
            },
            { path: '', component: NewbieComponent, pathMatch: 'full' }
        ]
    },
    // { path: 'fortesting', component: ForTestingComponent,pathMatch:'full' },
    { path: 'productlist', component: ProductListWithcartComponent },
    { path: 'productlistwithcart', component: ProductListWithcartAppComponent },

    { path: '**', component: PageNotFoundComponent },
];



