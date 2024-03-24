import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  imports:[CommonModule],
  providers:[Window]
})
export class ImageComponent {
  isHidden: boolean = true;
  isClicked: boolean = false;
  cardOpenClicked: boolean = false;
  cardFrontClicked: boolean = false;
  fadeCardText: boolean = true;
  swapTextColor: boolean = false;
  clickCount = 0;
  clickCountLoop = 0;
  doubleClickCount = 0;
  
  textOneList: string[] = [
    "You make me smile",
    "I",
    "And it's really fun to",
    "Sorry if this is",
  ];
  textTwoList: string[] = [
    "so much my face",
    "care about you",
    "absolutely smoke you",
    "really cringe...",

  ];
  textThreeList: string[] = [
    "hurts...",
    "a lot...",
    "at pool...",
    ""
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
    }
  }
  onClickHeart(){
    if(this.clickCount > 6){
      this.toggleCardOpen();
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
        console.log(this.swapTextColor);
      }
    }, 50);
  }
  toggleCardOpen(){
    this.cardOpenClicked = !this.cardOpenClicked;
    this.textOne = "Sometimes just thinking";
    this.textTwo = "about you makes my heart ";
    this.textThree = "pound through my chest...";
  }
  toggleCardFront(){
    if(this.clickCount == 8){
      if(this.clickCountLoop < 3){
        this.cardFrontClicked = !this.cardFrontClicked;
        this.isHidden = !this.isHidden;
        this.toggleCardOpen();
      }

    }
  }


}
