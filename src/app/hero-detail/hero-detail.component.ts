import { Location } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroService } from '../hero.service'
import { Hero } from '../heroes/hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private readonly heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack())
  }
}
