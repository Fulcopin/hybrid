import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Data } from '../interfaces/data';
import { ProviderService } from '../services/provider.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonicModule, 
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule // Necesario para manejar formularios reactivos
  ],
  providers: [ProviderService],
})

export class Tab1Page implements OnInit {
  public data: Data[] = [];

  // Definimos el formulario reactivo
  checkoutForm = this.formBuilder.group({
    texto: ''
  });

  constructor(
    private dataProvider: ProviderService, 
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadData();
  }

  // Cargar los datos desde Firebase
  loadData() {
    this.dataProvider.getResponse().subscribe(response => {
      if (response != null) {
        this.data = Object.values(response) as Data[];
      }
    });
  }

  // Enviar datos a Firebase y actualizar la lista
  onSubmit(): void {
    this.dataProvider.postResponse(this.checkoutForm.value).subscribe(() => {
      this.checkoutForm.reset();
      this.loadData();
    });
  }
}
