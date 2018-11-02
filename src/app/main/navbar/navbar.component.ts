import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* Set the width of the side navigation to 250px */
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('la-navbar').style.marginLeft = '250px';
    document.getElementById('main').style.transition = 'all 0.3s ease-in-out';
    document.getElementById('la-navbar').style.transition = 'all 0.3s ease-in-out';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    document.body.style.transition = 'all 0.3s ease-in-out';
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('la-navbar').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
  }

}
