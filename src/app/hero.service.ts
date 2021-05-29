import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Hero } from './heroes/hero'
import { HEROES } from './heroes/mock-heroes'
import { MessageService } from './messages/message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    //TODO: 이 메시지는 서버에서 히어로 정보를 가져온 _후에_ 보내야 합니다.
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES)
  }

  getHero(id: number): Observable<Hero> {
    //TODO: 이 메시지는 서버에서 히어로 정보를 가져온 _후에_ 보내야 합니다.
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(HEROES.find(hero => hero.id === id))
  }
}
