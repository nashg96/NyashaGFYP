import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiponePage } from './tipone';

@NgModule({
  declarations: [
    TiponePage,
  ],
  imports: [
    IonicPageModule.forChild(TiponePage),
  ],
})
export class TiponePageModule {}
