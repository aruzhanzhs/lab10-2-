import {Component, OnInit} from '@angular/core';
import {CompanyService} from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authorized = false;
  mail = '';
  password = '';

  constructor(
    private companiesService: CompanyService,
  ) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.authorized = true;
    }
  }
  logout() {
    localStorage.clear();
    this.authorized = false;
  }

  login() {
    this.companiesService.login(this.mail, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        this.authorized = true;
        this.mail = '';
        this.password = '';
      });
  }
}
