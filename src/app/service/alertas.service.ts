import { Injectable } from '@angular/core';
import{BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private ShowAlerta(message: string, type: string){

    const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = message
  }


  showAlertDanger(mensagemDanger: string  ){
    this.ShowAlerta(mensagemDanger, 'danger')
  }

  showAlertSucess(mensagemSucess: string){
    this.ShowAlerta(mensagemSucess, 'Sucess')
  }

  showAlertInfo(mensagemInfo: string){
    this.ShowAlerta(mensagemInfo, 'Info')
  }



}
