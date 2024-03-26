import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  imports:[CommonModule, FormsModule],
  providers:[Window]
})
export class ImageComponent {
  isHidden: boolean = true;
  isClicked: boolean = false;
  cardOpenClicked: boolean = false;
  cardFrontClicked: boolean = false;
  fadeCardText: boolean = true;
  swapTextColor: boolean = false;
  isChecked: boolean = false;
  clickCount = 0;
  clickCountLoop = 0;
  doubleClickCount = 0;
  
  textOneList: string[] = [
    "You make me smile",
    "I'm constantly",
    "I can't get enough",
    "And it's really fun to",
    "Sorry if this is",
  ];
  textTwoList: string[] = [
    "so much my face",
    "looking forward to the",
    "of you...",
    "absolutely smoke you",
    "really cringe",

  ];
  textThreeList: string[] = [
    "hurts...",
    "next time I can see you...",
    "",
    "at pool...",
    "but..."
  ];

  textOne: string = "Sometimes just thinking";
  textTwo: string = "about you makes my heart ";
  textThree: string = "pound through my chest...";

 

  constructor() { }

  onClick() {
    this.clickCountLoop++;
    if(this.clickCountLoop <= 2){
      this.isClicked = !this.isClicked;
    }
    if(this.clickCountLoop > 2){
      this.cardFrontClicked = !this.cardFrontClicked;
      this.isHidden = !this.isHidden;
      this.clickCount = 0;
      this.doubleClickCount = 0;
      this.clickCountLoop = 0;
      this.fadeCardText = !this.fadeCardText;
      this.isChecked = false;
      this.cardOpenClicked = !this.cardOpenClicked;
      this.textOne = "Sometimes just thinking";
      this.textTwo = "about you makes my heart ";
      this.textThree = "pound through my chest...";

    }
  }
  onClickHeart(){
    if(this.clickCount == 10){
      this.toggleCardFront();
    }
    this.fadeCardText = !this.fadeCardText;
    this.clickCount++;
    setTimeout(() => {
      if(this.clickCount % 2 == 0){
        this.textOne = this.textOneList[this.doubleClickCount];
        this.textTwo = this.textTwoList[this.doubleClickCount];
        this.textThree = this.textThreeList[this.doubleClickCount];
        this.doubleClickCount++;
        this.swapTextColor = !this.swapTextColor;
      }
    }, 50);
  }
  toggleCardOpen(){
    this.cardOpenClicked = !this.cardOpenClicked;
  }
  toggleCardFront(){
    if(this.clickCount == 10){
      if(this.clickCountLoop < 3){
        this.cardFrontClicked = !this.cardFrontClicked;
        this.isHidden = !this.isHidden;
        
      }

    }
  }


}
