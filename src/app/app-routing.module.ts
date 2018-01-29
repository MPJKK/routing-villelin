import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';

const routes: Routes = [
    {
        path: 'setup',
        component: SetupComponent
    },
    {
        path: 'routes',
        component: RoutesComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'setup'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
