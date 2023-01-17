import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamMember } from '../interfaces/team-member';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PokeType } from '../interfaces/poke-type';
import { GlobalConstant } from '../common/global-constants';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]> = new Observable;

  @Output() submit: EventEmitter<TeamMember> = new EventEmitter<TeamMember>();

  autoCompleteValues : string[] = [];

  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/generation/1').subscribe(response => {
      for (let i=0;i<response.pokemon_species.length;i++){
        this.autoCompleteValues.push(response.pokemon_species[i].name)
      }
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.autoCompleteValues.filter(option => option.toLowerCase().includes(filterValue))
  }

  constructor(private http: HttpClient){
    
  }

  submitValue(newPokemon: string): any{
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`).subscribe(response => {
      // create array for pokemon types
      let types : PokeType[] = [];

      // loop through types of response & add to types array
      for (let i=0;i<response.types.length;i++){
        let type = response.types[i].type.name
        // if the current type (from poke api) is in global alltypes, add it to pokemon object type array
        if(GlobalConstant.allTypes.find(ele => ele.name === type)){
          let typeObj: PokeType = GlobalConstant.allTypes.find(ele => ele.name === type)!
          types.push(typeObj)
        }
      }
      
      // create pokemon object from input value & pokemon types
      let poke: TeamMember = {
        name: newPokemon.charAt(0).toUpperCase() + newPokemon.slice(1),
        types: types,
        image: `../../assets/static/images/${response.id}.png`
      }

      // output pokemon object
      this.submit.emit(poke);
      })

  }
}
