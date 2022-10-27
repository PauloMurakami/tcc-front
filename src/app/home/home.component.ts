import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { EventServices } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    eventos: any[];

    constructor(private eventosService: EventServices) { }

    ngOnInit() {
        this.eventosService.getAllOpen().subscribe(eventos => {
            this.loading = false;
            this.eventos = eventos;
        });
    }
}