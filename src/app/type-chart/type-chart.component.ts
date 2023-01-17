import { Component,  OnInit } from '@angular/core';
import { GlobalConstant } from '../common/global-constants';
import { PokeType } from '../interfaces/poke-type';

@Component({
  selector: 'app-type-chart',
  templateUrl: './type-chart.component.html',
  styleUrls: ['./type-chart.component.css']
})
export class TypeChartComponent {
  allTypes : PokeType[] =  GlobalConstant.allTypes;
}
