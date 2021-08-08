import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PaisService } from "../../services/pais.service";

@Component({
    selector: 'app-ver-pais',
    templateUrl: 'ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

    constructor (
        private activatedRoute: ActivatedRoute,
        private paisService: PaisService
    ) {}

    ngOnInit (): void {
        this.activatedRoute.params
        .subscribe(({ id }) => {
            this.paisService.getPaisPorAlpha(id)
            .subscribe(response => {
                console.log(response);
            });
        });
    }
}