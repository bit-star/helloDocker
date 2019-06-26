import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HelloDockerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [HelloDockerSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HelloDockerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloDockerSharedModule {
  static forRoot() {
    return {
      ngModule: HelloDockerSharedModule
    };
  }
}
