import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { ListComponentModule } from './components/list/list.component-module';
import { ListServiceModule } from './services/list.service-module';
import { FormComponentModule } from './components/form/form.component-module';
import { FormServiceModule } from './services/form.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list', component: ListComponent }, { path: 'form', component: FormComponent }]), ListComponentModule, ListServiceModule, FormComponentModule, FormServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
