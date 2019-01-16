import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HelloWorldRoutingModule } from './hello-world-routing.module';
import { Components } from './components';

@NgModule({
  declarations: [
    ...Components,
  ],
  imports: [
    SharedModule,
    HelloWorldRoutingModule
  ]
})
export class HelloWorldModule { }
