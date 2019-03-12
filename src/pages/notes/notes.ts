import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../providers/note-service/note-service';

import { AddnotePage } from '../pages/addnote/addnote';
import { ViewnotePage } from '../viewnote/viewnote';
import { Note } from '../../models/note.model'



@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
	private notes: Promise<Note[]>;
	private note: Note;

  constructor( private alertCtrl: AlertController, private navCtrl: NavController, private noteService: NoteService) {
  }

  ionViewWillEnter() {
  this.notes = this.getAllNotes();
  }


 addNote() {
    this.navCtrl.push('AddnotePage');
  }

  getNote(createDate: number){
  	this.noteService.getNote(createDate).then((n) => {
  	this.note = n;
  	this.navCtrl.push('ViewnotePage', { note: this.note })
  })
  }

  getAllNotes(){
  	return this.noteService.getAllNotes();
  }


}
