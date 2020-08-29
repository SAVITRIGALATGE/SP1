import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-launch-info',
  templateUrl: './launch-info.component.html',
  styleUrls: ['./launch-info.component.css']
})
export class LaunchInfoComponent implements OnInit {
  arry=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  DATA;
  year;
  launch_success;
  land_success;
  launch_year;
  constructor( private ser:ServiceService) { }

  ngOnInit(): void {
    this.ser.GetAllData().subscribe(res=>{
      console.log("this is data",res)
      this.DATA=res;
    })

 
  }
  btnClk(data){
   console.log("btttn") 
   this.launch_year=data
   this.ser.FillterByYear(this.launch_success,this.land_success,this.launch_year).subscribe(res=>{
     console.log("hiii",res)
     this.DATA=res
   })  
  }

  land(data){
    this.land_success=data;
    this.ser.LandSucc(this.launch_success,this.land_success).subscribe(res=>{
      console.log("hiii",res)
      this.DATA=res
    })    
  }

  launch(data){
    this.launch_success=data
    this.ser.LaunchSucc(this.launch_success).subscribe(res=>{
      console.log("hiii",res)
      this.DATA=res
    }) 
  }
 

}
