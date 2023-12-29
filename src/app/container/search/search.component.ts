import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  
  updateSearchText(inputElement : HTMLInputElement) {
    this.searchText = inputElement.value;
    this.searchTextChange.emit(this.searchText.toLowerCase());

  }
}
