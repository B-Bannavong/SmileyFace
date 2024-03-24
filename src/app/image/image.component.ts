import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  imports:[CommonModule]
})
export class ImageComponent {
  isHidden: boolean = true;
  isClicked: boolean = false;
  cardFrontClicked: boolean = false;
  fadeCardText: boolean = true;
  swapTextColor: boolean = false;
  clickCount = 0;
  doubleClickCount = 0;
  
  textOneList: string[] = [
    "It's impossible to",
    "You're on my",
    "I"
  ];
  textTwoList: string[] = [
    "not smile whenever I",
    "mind every day...",
    "care about you"
  ];
  textThreeList: string[] = [
    "think about you...",
    "",
    "a lot..."
  ];

  textOne: string = "Being around you still";
  textTwo: string = "makes my heart pound";
  textThree: string = "through my chest...";

 

  onClick() {
    this.isClicked = !this.isClicked;
  }
  onClickHeart(){
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
  toggleCardFront(){
    this.cardFrontClicked = !this.cardFrontClicked;
  }


}
