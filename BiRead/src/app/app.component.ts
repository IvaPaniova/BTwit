import { Component, OnInit } from '@angular/core';
import { PlanEntry } from './plan-entry';
import { versesNT } from './data-nt';
import {versesOT} from './data-ot';
import * as startOfToday from 'date-fns/start_of_today';
import * as startOfTomorrow from 'date-fns/start_of_tomorrow';
import * as startOfYesterday from 'date-fns/start_of_yesterday';
import * as addDays from 'date-fns/add_days';
import * as subDays from 'date-fns/sub_days';
import * as startOfYear from 'date-fns/start_of_year';
import * as getDayOfYear from 'date-fns/get_day_of_year';
import * as endOfYear from 'date-fns/end_of_year';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  titleNT: string = "Change 1";
  titleOT: string = "Change 2";
  date: string = "What's the date?";
  readingPlanNT: PlanEntry[] = [];
  readingPlanOT: PlanEntry[] = [];
  today: Date;
  tomorrow: Date;
  yesterday: Date;
  firstDay: Date;
  day: number;

  constructor() {
    console.log('constructor is called on app.component.ts');
  }

  populateMap() {
    let startDate: Date = startOfYear(new Date(2017, 1, 1, 0, 0, 1));
    let endDate: Date = startOfYear(new Date(2018, 1, 1, 0, 0, 1));

    while (startDate.toDateString() !== endDate.toDateString()) {
      let dateNumber = getDayOfYear(startDate);
      this.readingPlanNT.push(new PlanEntry(dateNumber, versesNT[dateNumber-1]));
      this.readingPlanOT.push(new PlanEntry(dateNumber, versesOT[dateNumber-1]));
      startDate = addDays(startDate, 1);
    }
  }

  ngOnInit() {
    console.log('ngOnInit is called on app.component.ts');
    this.populateMap();
    this.onReadingTodayClick();
  }

  onReadingTodayClick(){
    console.log('onReadingTodayClick is called on app.component.ts');
    this.today = startOfToday();
    this.setValues();
  }

  onReadYesterdayClick(){  
    this.today = subDays(this.today, 1);
    this.setValues();
  }

  onReadingTommorowClick(){
    this.today = addDays(this.today, 1);
    this.setValues();
  }

  setValues() {
    this.titleNT = this.readingPlanNT[getDayOfYear(this.today)].getValue();
    this.titleOT = this.readingPlanOT[getDayOfYear(this.today)].getValue();
    this.date = this.today.toDateString();
  }

}