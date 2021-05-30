import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './heroes/hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bobasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Battmen' },
      { id: 18, name: 'DR IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ]
    return { heroes };
  }

  //히어로 객체가 항상 id 프로퍼티를 갖도록 getId 메소드를 오버라이드
  //히어로 목록이 비어있다면 이 메소드는 초기값(11)을 반환
  //히어로 목록이 비어있지 앟ㄴ다면 히어올 id의 최대값 +1 을 반환
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
