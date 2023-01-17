import { Component } from '@angular/core';
import { TeamMember } from '../interfaces/team-member';
import { GlobalConstant } from '../common/global-constants';

@Component({
  selector: 'app-team-mgr',
  templateUrl: './team-mgr.component.html',
  styleUrls: ['./team-mgr.component.css']
})
export class TeamMgrComponent{

  title = 'todo';
  teamList: TeamMember[] = [];

  addItem(title: TeamMember) {
    this.teamList.push(title);
    this.updateTypeChart();
  }
  removeItem(item: TeamMember): void {
    console.log('we removing baby')
    this.teamList.splice(this.teamList.indexOf(item), 1)
    this.updateTypeChart();
  }
  updateTypeChart(): void {
    // reset all to .2 opacity
    for (let i=0;i<GlobalConstant.allTypes.length;i++){
      let ele = document.getElementById(GlobalConstant.allTypes[i].name);
      ele!.style.opacity ='.2';
    } 
    // make sure non-opaque types are current
    // loop through current team
    for (let i=0;i<this.teamList.length;i++){
      let currentPoke = this.teamList[i];
      // loop through types of current pokemon
      for (let j=0;j<currentPoke.types.length;j++){
        let currenType = currentPoke.types[j];
        // loop through advantages of current type
        if(currenType.advantages) {
        for (let k=0;k<this.teamList[i].types[j].advantages!.length;k++){
            let currentAdvantage = currenType.advantages[k];
            let ele = document.getElementById(currentAdvantage);
            ele!.style.opacity = '1';
          }
        }
      }
    }
  }
}
