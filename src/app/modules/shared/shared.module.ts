import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SidenavComponent,
    ConfirmComponent
  ],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
