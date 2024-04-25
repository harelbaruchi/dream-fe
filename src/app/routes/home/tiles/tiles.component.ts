import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Tile } from 'src/app/models/tile';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
})
export class TilesComponent implements OnInit {
  numOfTiles: number = 0;
  tiles: Tile[] = [];

  constructor() {
    this.numOfTiles = this.randomIntFromInterval(1, 10);
    while (this.tiles.length < this.numOfTiles) {
      const tile = {
        w: this.getWidth(),
        l: this.getHeight(),
        y: this.getTransformHeight(),
        x: this.getTransformWidth(),
      };
      this.tiles.push(tile);
    }
    console.log(this.tiles);
  }

  randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getWidth() {
    return this.randomIntFromInterval(150, 250);
  }
  getHeight() {
    return this.randomIntFromInterval(150, 250);
  }

  getTransformWidth() {
    const min = window.innerWidth - 1000;
    const max = window.innerWidth;
    return this.randomIntFromInterval(min, max);
  }
  getTransformHeight() {
    const min = window.innerHeight - 500;
    const max = window.innerHeight;
    return this.randomIntFromInterval(min, max);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.tiles.forEach((tile) => {
        tile.l = this.getWidth();
        tile.w = this.getHeight();
        tile.x = this.getTransformWidth();
        tile.y = this.getTransformHeight();
      });
    }, 10000);
  }
}
