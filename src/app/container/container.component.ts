import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Mary', 'John', 'Bob']
}