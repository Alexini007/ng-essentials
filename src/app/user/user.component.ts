import { Component, signal, computed, Input, Output, input, output, EventEmitter } from '@angular/core';
import { USERS } from '../users'; 
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * USERS.length)

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input({required: true}) id!: string; 
  // @Input({required: true}) avatar!: string; 
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // Signal Inputs
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // selectedUser = signal(USERS[randomIndex]);
  imagePath = computed(() => { 
    return 'assets/users/' + this.user.avatar
  });


  onSelectUser() {
    // console.log('clicked')
    // const randomIndex = Math.floor(Math.random() * USERS.length)
    // this.selectedUser.set(USERS[randomIndex])

    this.select.emit(this.user.id);
  }  
}
