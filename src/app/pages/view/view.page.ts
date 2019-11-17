import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  data = [];
  // title:any;
  // image:any;
  // description:any;
  // price:any;


  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log("Data is ",this.data)
        
      }
    });
   }

  ngOnInit() {
  }

 /**ionViewWillEnter(){
    this.viewData();
  }
  viewData(){
    let title;/
  }/** */

}
