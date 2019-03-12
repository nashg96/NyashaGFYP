import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-addnote',
  templateUrl: 'addnote.html',
})
export class AddnotePage {
	formGroup: FormGroup;
	note: Note;
	date: Date = new Date();
	title: string = '';
	content: string = '';

  constructor(public navCtrl: NavController, private NoteService: NoteService) {
  	this.formGroup = new FormGroup({
  	title: new FormControl(),
  	content: new FormControl(),
  	date: new FormControl(),
  	})
  }

  saveNote(note: Note){
  	this.NoteService.saveNote(note);
  	this.navCtrl.pop();
  }

}
