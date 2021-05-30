import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { HeroService } from '../hero.service'
import { Hero } from '../heroes/hero'

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>
  private searchTerms = new Subject<string>()

  constructor(private readonly heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // 연속된 키입력 처리를 위해 300ms 대기
      debounceTime(300),
      // 이전에 입력한 검색어가 같으면 무시
      distinctUntilChanged(),
      // 검색어가 변경되면 새로운 옵저버블 생성
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }

  //사용자가 입력한 검색어를 옵저브블 스트림으로 보냅니다.
  search(term: string): void {
    this.searchTerms.next(term)
  }

}
