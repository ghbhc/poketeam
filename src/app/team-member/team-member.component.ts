import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeamMember } from '../interfaces/team-member';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent {
  @Input() member!: TeamMember;
  @Output() remove: EventEmitter<TeamMember> = new EventEmitter<TeamMember>();
  removeItem(): void {
    this.remove.emit(this.member);
  }

}