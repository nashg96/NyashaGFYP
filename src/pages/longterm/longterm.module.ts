import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LongtermPage } from './longterm';

@NgModule({
  declarations: [
    LongtermPage,
  ],
  imports: [
    IonicPageModule.forChild(LongtermPage),
  ],
})
export class LongtermPageModule {}
