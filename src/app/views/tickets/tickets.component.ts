import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { TicketI } from '../../models/ticket.interface';

//Constante
const status = "NEW";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  //Variables
  tickets: TicketI[] = []
  solvedTickets:TicketI[] = []
  badgeContent : number;


  constructor(private _servicio: TicketsService) { }

  ngOnInit(): void {

    //Iniciamos la carga de ticket desde el servicio
    this._servicio.getTickets().subscribe(data => {
      this.tickets = data.sort((a,b) => a.status.localeCompare(b.status));
      this.badgeContent = this.getCount(status);
    });
    //Eliminar
  }

  //Contador para el badge, asi saber cuantos ticket nuevos hay
  getCount(status) {
    return this.tickets.filter(obj => obj.status === status).length;
  }

}
