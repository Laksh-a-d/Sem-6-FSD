import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Landing } from './components/layout/landing/landing';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';



@NgModule({
  declarations: [
    Landing,
    Header,
    Footer
  ],
  exports:[Header,Footer,Landing],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
