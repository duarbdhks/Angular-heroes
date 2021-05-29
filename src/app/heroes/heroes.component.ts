import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'
import { MessageService } from '../messages/message.service'
import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  selectedHero: Hero

  constructor(
    private readonly heroService: HeroService,
    private readonly messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
}
