import { Component, NgModule, OnInit } from '@angular/core';
import { ComponentesModule } from 'src/app/components/componentes.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})

@NgModule({
  imports: [
    ComponentesModule
  ],
  declarations: [AlertPage]
})

export class AlertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
