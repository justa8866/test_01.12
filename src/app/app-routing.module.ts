import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponentModule } from './components/list/list.component-module';
import { ListServiceModule } from './services/list.service-module';
import { FormComponentModule } from './components/form/form.component-module';
import { FormServiceModule } from './services/form.service-module';
import { DetailComponentModule } from './components/detail/detail.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list', component: ListComponent }, { path: 'form', component: FormComponent }, { path: 'list/:id', component: DetailComponent }]), ListComponentModule, ListServiceModule, FormComponentModule, FormServiceModule, DetailComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
