import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from "./image/image.component";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ImageComponent, CommonModule]
})
export class AppComponent {
  title = 'SmileyFace';
}
