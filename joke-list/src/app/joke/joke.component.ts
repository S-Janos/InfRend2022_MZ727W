import { Component, Input,  OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  @Input() joke!: Joke;

  upvote() {
    this.joke.upvotes++;
  }

  downvote() {
    this.joke.downvotes++;
  }

  isApproved(): boolean {
    if (this.joke.upvotes - this.joke.downvotes > 50) {
      return true;
    } else {
      return false;
    }
  }

  getDifference(): number {
    return this.joke.upvotes - this.joke.downvotes; 
  }

  isNegative(): boolean {
    if (this.getDifference() < 0) {
      return true;
    } else {
      return false;
    }
  }
}
