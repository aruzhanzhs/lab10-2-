import { Component, OnInit } from '@angular/core';
import {Vacancy} from '../vacancy';
import {ActivatedRoute} from '@angular/router';
import {VacancyService} from '../vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService,
  ) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacancyService.getVacancies(id)
      .subscribe(vacancies => this.vacancies = vacancies );
  }
}
