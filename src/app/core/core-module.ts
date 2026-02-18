import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/layout/header/header';
import { Landing } from './components/layout/landing/landing';
import { Footer } from './components/layout/footer/footer';



@NgModule({
  declarations: [
    Header,
    Landing,
    Footer
  ],
  exports:[Header,Landing,Footer],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
