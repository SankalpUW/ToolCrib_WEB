// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-app';
// }

import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="center-div">
      <div class="canvas-container">
        <canvas #myCanvas height="512px" width="812px"></canvas>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    
    // Draw buttons on the canvas
    const buttonWidth = 80;
    const buttonHeight = 40;
    const numRows = 5;
    const numCols = 10;
    
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const x = j * (buttonWidth + 10); // 10px spacing between buttons
        const y = i * (buttonHeight + 10); // 10px spacing between buttons
        
        // Draw a button
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, buttonWidth, buttonHeight);
        
        // Draw text inside the button (optional)
        ctx.fillStyle = 'white';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`Button ${i * numCols + j + 1}`, x + buttonWidth / 2, y + buttonHeight / 2);
      }
    }
  }
}
