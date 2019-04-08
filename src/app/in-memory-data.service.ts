import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 11, author: 'Andrzej Sapkowski', title: 'The Witcher', img:'assets/witcherhunt.jpg', summary: 'The Witcher (Polish: Wiedźmin), by Polish writer Andrzej Sapkowski, is a fantasy series of short stories and novels about the witcher Geralt of Rivia. In Sapkowskis books, "witchers" are monster hunters who (with training and body modification) develop supernatural abilities at a young age to battle deadly beasts. The books have been adapted into a film, a television series, video games, and a graphic novel series. The series of novels is known as the Witcher Saga. The short stories and novels have been translated into numerous languages, including English.' },
      { id: 12, author: 'Michael Crichton', title: 'Jurassic Park', img:'assets/jurassic-park.jpg', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum eros at odio sollicitudin fermentum. Pellentesque eget ante in felis volutpat convallis. Phasellus mi est, dictum eu tincidunt et, ultrices eu sem. Sed sit amet nunc aliquam elit laoreet tempus a eu tellus. Donec lacinia leo nec velit pellentesque tempor eu vitae ante. Nunc eu lorem ac nulla sodales tempor sed nec ante. Donec sit amet luctus mauris. Nulla bibendum ante sit amet ligula maximus, ut euismod massa fermentum. Fusce consequat dignissim feugiat. Curabitur lacinia, risus sit amet feugiat bibendum, nisi tellus iaculis justo, quis iaculis nunc ante quis magna. Nulla arcu massa, aliquet non nunc non, auctor facilisis nibh. Mauris et fermentum quam. '},
      { id: 13, author: 'J. K. Rowling', title: 'Harry Potter', img:'assets/Harry-Potter.jpg', summary: 'Pellentesque quis elit eu lectus finibus rhoncus id a urna. Curabitur facilisis elit lectus, ut dictum lectus sodales eu. Morbi sed libero tortor. Mauris varius lacus eget dictum ornare. Vestibulum a sapien lobortis, condimentum justo a, lobortis libero. Nam ac ex sagittis, laoreet augue eget, lobortis quam. Cras eu nibh semper, ultricies ex vel, elementum dolor. ' },
      { id: 14, author: 'A. A. Milne', title: 'Winnie the Pooh', img:'assets/winniethepooh.jpg', summary: 'Mauris ac quam tellus. Duis nec massa turpis. Sed id risus lobortis metus lobortis dignissim at quis libero. Integer vitae erat erat. Nullam et lectus vitae quam sodales efficitur sit amet eget lorem. Quisque fringilla pulvinar cursus. Nunc mi ligula, lacinia sed est a, consectetur iaculis lorem. Maecenas elementum mollis ipsum, quis maximus risus faucibus id. Vestibulum lobortis dapibus hendrerit. Integer quis dui maximus dolor ornare gravida. ' },
      { id: 15, author: 'Terry Prattchet', title: 'Long Earth', img:'assets/Long-Earth.jpg', summary: 'Phasellus condimentum tristique mauris egestas rhoncus. Etiam varius at libero id ultrices. Curabitur convallis lectus nibh, id volutpat tortor pellentesque ac. Etiam placerat feugiat convallis. Pellentesque eu augue in turpis efficitur malesuada. Vivamus quis sagittis lectus. ' },
      { id: 16, author: 'Henryk Sienkiewicz', title: 'Quo Vadis', img:'assets/quovadis.jpg', summary: 'Fusce viverra bibendum fringilla. Sed ipsum quam, maximus semper tellus sed, condimentum pellentesque arcu. Quisque varius dignissim turpis dignissim dictum. Integer ut volutpat neque. Donec justo felis, sollicitudin in tincidunt sed, elementum volutpat libero. In sed commodo magna. Mauris pretium blandit sapien at interdum. Duis tincidunt neque id ex blandit viverra. Quisque nec rutrum ante, in pharetra mi. Etiam bibendum bibendum lorem rutrum pellentesque. Sed dapibus tincidunt orci vel auctor. Praesent fringilla efficitur interdum. ' },
      { id: 17, author: 'Andy Weir', title: 'The Martian', img:'assets/martian.jpg', summary: 'Nulla ultricies ultrices elementum. Mauris mi quam, feugiat vitae leo in, finibus ultricies erat. Nunc facilisis egestas lorem, sed rhoncus justo congue vel. Maecenas sagittis magna eget lectus facilisis varius. Mauris iaculis rutrum mi, quis dapibus sapien molestie nec. Phasellus convallis enim sit amet orci dictum, vitae suscipit nisi laoreet. Donec vel luctus massa, vitae ultrices eros. ' },
      { id: 18, author: 'Lewis Wallace', title: 'Ben Hur', img:'assets/ben_hur_news.jpg', summary: 'Vivamus molestie tempor leo, ac volutpat purus sollicitudin vitae. Nullam non mattis mi. Praesent ac est sed diam volutpat fermentum. In at accumsan justo, quis aliquam est. In vehicula viverra ipsum non vulputate. Nullam fermentum maximus tellus, viverra lobortis felis maximus aliquet. Phasellus facilisis magna sed ipsum mattis, nec vehicula mi feugiat. Sed consectetur, nulla quis rhoncus aliquam, ex tortor eleifend diam, sed fermentum augue eros quis lorem. Quisque at tellus sollicitudin, laoreet elit et, cursus augue. ' },
      { id: 19, author: 'Agata Ostaszewska', title: 'Jonan Mond', img:'assets/jonan.jpg', summary: 'Etiam ligula felis, pretium eget placerat ut, scelerisque in odio. Praesent eget elit nibh. Morbi et dignissim tortor, at molestie dolor. Nulla hendrerit convallis nibh id consectetur. Mauris eu arcu sit amet nulla laoreet suscipit. Nam feugiat consectetur erat et dictum. Mauris et dolor quis arcu interdum feugiat ac quis mi. Sed magna eros, egestas vitae eros vel, elementum tincidunt ante. ' },
      { id: 20, author: 'Osho', title: 'Tantra: the way of acceptance', img:'assets/tantra.jpg', summary: 'Proin consequat dolor at gravida ultricies. Maecenas vitae elit efficitur, dictum mauris at, placerat purus. Maecenas porta finibus velit, ac semper tortor lacinia non. Ut venenatis ultricies augue, non ullamcorper ipsum rhoncus non. Maecenas rutrum eros et ligula volutpat faucibus. Vestibulum eleifend faucibus risus, a facilisis massa. Duis imperdiet blandit odio, ut sollicitudin libero pulvinar sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eget mollis mauris, id finibus libero. Nunc quis pharetra nunc. ' }
    ];
    return {books};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}