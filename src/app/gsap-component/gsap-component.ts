import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-gsap-component',
  imports: [],
  templateUrl: './gsap-component.html',
  styleUrl: './gsap-component.css'
})
export class GsapComponent implements AfterViewInit {
  @ViewChild('box', { static: false }) box!: ElementRef;

  ngAfterViewInit() {
    gsap.from(this.box.nativeElement, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out"
    });
  }
}
