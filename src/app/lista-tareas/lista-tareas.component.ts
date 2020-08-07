import {Component, HostBinding, OnInit} from '@angular/core';
import {Tarea} from "../models/tarea.model";

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  listaTareas:Tarea[];
  @HostBinding("attr.class") cssClass="container content"
  constructor() {
    //this.listaTareas=[new Tarea("Prueba", "Esta es la primera tarea mock")];
    this.listaTareas=[];
  }

  ngOnInit() {
  }

  CrearTarea(nombre: string, descripcion: string) {
    this.listaTareas.push(new Tarea(nombre,descripcion));
  }
}
