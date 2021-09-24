import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ModalService } from 'src/app/services/modal.service';
import { Customer } from 'src/app/shared/interfaces/customrer.interface';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() customerList: Customer[] | any = []
  display$!: Observable<'open' | 'close'>

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

}
