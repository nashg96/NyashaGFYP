import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewnotePage } from './viewnote';

@NgModule({
  declarations: [
    ViewnotePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewnotePage),
  ],
})
export class ViewnotePageModule {}
