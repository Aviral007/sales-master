import { Component, OnInit } from '@angular/core';
import { TeamListService } from "../../services/team-list.service"; 
import { Router } from '@angular/router';
import { ListViewEventData } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";
import { Team } from "../../../../../Team";


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teamlist: Team[];
  total:any=0;
  

  constructor( private teamService : TeamListService ,private Route:Router,private amount : TeamListService ) { }

  ngOnInit() {
    this.getTeams();
  }


  getTeams() {
    this.teamService.getTeams().subscribe(response => {
     if (response && response.status === 200) {
        this.teamlist=response.data; 
        console.log(this.teamlist); 

        // this.totalAmount = this.teams.reduce((previous, current) => previous + current.amount, this.teams[0].amount);
        // let teamArray = this.teams.map(team => this.fb.group({
        //   name: this.fb.control(team.team_name, [Validators.required]),
        //   amount: this.fb.control(team.amount, [Validators.required, Validators.pattern('[0-9]*')])
        // }));
        // this.teamArray = this.fb.array(teamArray);
        // this.parentFormGroup = this.fb.group({
        //   teamArray: this.teamArray
        // });
        console.log("success");
        for( let i=0;i<this.teamlist.length;i++){
          this.total+=this.teamlist[i].amount;
        }
        this.amount.amount=this.total;
        console.log(this.total);
      } else if (response && response.status === 401) {
        console.log("error");
      }
    });
  }

  add(){
    console.log("add");
    this.Route.navigate(['/private/add-team']);
  }

  Select(args): void { 
    const obj = this.teamlist[args.index];
    console.log("Item Tapped at cell index: " + obj.team_name);
    // this.teamService.team_id = team.team_id; 
    // this.teamService.team_name = team.team_name; 
    // this.teamService.amount = team.amount; 
    // this.flag=true; 
    // console.log(team.team_name);
    //this.route.navigate(['/update']); 
    } 

    update(){
      console.log("change");
      this.Route.navigate(['/private/edit-team']);
    }



    public onCellSwiping(args: ListViewEventData) {
      const swipeLimits = args.data.swipeLimits;
      const currentItemView = args.object;
       if (args.data.x < -200) {
          console.log("Notify perform right action");
      }
  }



    public onSwipeCellStarted(args: ListViewEventData) {
      const swipeLimits = args.data.swipeLimits;
      const swipeView = args['object']; 
      const rightItem = swipeView.getViewById<View>('delete-view');
      swipeLimits.right = rightItem.getMeasuredWidth();
      swipeLimits.threshold = rightItem.getMeasuredWidth()* 1; // 2;
  }

  public onSwipeCellFinished(args: ListViewEventData) {
  }




  public onRightSwipeClick(args) {
    console.log("Right swipe click");

    this.teamlist.splice(this.teamlist.indexOf(args.object.bindingContext), 1);
}



}
