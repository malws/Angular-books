import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  fileData: File = null;

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
}
 
onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('api/books', formData)
      .subscribe(res => {
        console.log(res);
      })
}

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  getBooks(): void {
    this.booksService.getBooks()
      .subscribe(books => this.books = books.sort((a,b) => a.title.localeCompare(b.title)));
  }

  open(): void {
    (document.querySelector('#modal') as HTMLElement).style.display = "block";

  }
  close(): void {
    (document.querySelector('#modal') as HTMLElement).style.display = "none";
  }

  add(title: string, author:string, summary: string): void {
    title = title.trim();
    if (!title) { return; }
    this.booksService.addBook({ title, author, summary } as Book)
      .subscribe(book => {
        this.books.push(book);     
        this.books.sort((a,b) => a.title.localeCompare(b.title));  
        this.router.navigateByUrl('details/' + book.id); 
      });
    (document.querySelector('#modal') as HTMLElement).style.display = "none"; 
  }

  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.booksService.deleteBook(book).subscribe();
  }

  constructor(private booksService: BooksService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getBooks();    
  }

}
