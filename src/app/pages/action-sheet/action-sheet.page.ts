import { Component, NgModule, OnInit } from '@angular/core';
import { ComponentesModule } from 'src/app/components/componentes.module';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})

@NgModule({
  imports: [
    ComponentesModule
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
