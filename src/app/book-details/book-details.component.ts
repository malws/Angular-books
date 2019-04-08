import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    this.route.params.subscribe(routeParams => {
      this.booksService.getBook(routeParams.id).subscribe(book => this.book = book);
    });  
  }

  goBack(): void {
    this.router.navigate(['dashboard']);
  }
}
