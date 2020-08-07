import { Component, OnInit } from '@angular/core';
import {Tarea} from "../models/tarea.model";

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  listaTareas:Tarea[];

  constructor() {
    this.listaTareas=[];
  }

  ngOnInit() {
  }

}
