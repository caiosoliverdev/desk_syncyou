import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cds-delay-slider',
  templateUrl: './delay-slider.component.html',
  styleUrls: ['./delay-slider.component.scss']
})
export class CDSDelaySliderComponent implements OnInit {
  
  @Input() delayTime: number;
  @Input() step : number = 0.1;
  @Input() min: number = 0;
  @Input() max: number = 10;
  @Input() control: FormControl = new FormControl();
  @Output() change = new EventEmitter();

  delayOpen: boolean = false;
  focusSlider: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.delayTime = this.control.value
  }


  // EVENTS //
  formatLabel(value: number): string {
    this.delayTime = value;
    return `${value}`+ 's';
  }

  closeDelaySlider(){
    this.delayOpen = false;
    this.change.emit(this.delayTime);
  }


  onFocusOutDelay(){
    if( this.focusSlider === false){
      this.closeDelaySlider();
    }
  }

  onFocusSlider(){
    this.focusSlider = true;
    this.delayOpen = true;
  }

  onFocusOutSlider(){
    this.focusSlider = false;
    this.closeDelaySlider();
  }

  onDelayClick(){
    if(this.delayOpen === true){
      this.closeDelaySlider();
    } else {
      this.delayOpen = true;
    }
  }



}
