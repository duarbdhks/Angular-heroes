import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'
import { MessageService } from '../messages/message.service'
import { Hero } from './hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]

  constructor(
    private readonly heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  addHero(name: string): void {
    name = name.trim()
    if (!name) return

    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero))
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero).subscribe()
  }
}
