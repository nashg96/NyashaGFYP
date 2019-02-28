import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandrPage } from './randr';

@NgModule({
  declarations: [
    RandrPage,
  ],
  imports: [
    IonicPageModule.forChild(RandrPage),
  ],
})
export class RandrPageModule {}
