import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  data = [
    {
      title: "Bag 1",
      description: "This is a puny bag",
      price: "40",
      image: "bag1.jpg"
    },
    {
      title: "Bag 2",
      description: "This is a medium bag",
      price: "100",
      image: "bag2.jpg"
    },
    {
      title: "Bag 3",
      description: "This is a large ass bag",
      price: "140",
      image: "bag3.jpg"
    }
  ];

  constructor(private toast: ToastController) { }
  async presentToast(message: any){
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'light'

    });
    toast.present();

  }

  submit(item, id){
    let navigationExtras: NavigationExtras = {
      state:{
        item:item
      }
    }

  }

  ngOnInit() {
  }

}
