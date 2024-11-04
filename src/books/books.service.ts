import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { title } from 'process';


@Injectable()
export class BooksService {

  #books = [
      {
          "id": 1,
          "title": "The Quest of the Enchanted Kingdom",
          "author": "Sir Gallahad of Greenfields",
          "isbn": "978-1-2345-6789-0",
          "publishYear": 1325,
          "reserved": false
      },
      {
          "id": 2,
          "title": "Tales of the Moonlit Vale",
          "author": "Lady Eowyn Fair",
          "isbn": "978-0-9876-5432-1",
          "publishYear": 1310,
          "reserved": true
      },
      {
          "id": 3,
          "title": "The Chronicles of Ancient Lore",
          "author": "Merlin the Wise",
          "isbn": "978-0-1111-2222-3",
          "publishYear": 1290,
          "reserved": false
      }
  ]

  #nextId = this.#books.length
  

  create(createBookDto: CreateBookDto) {
    
    this.#books.push({
      id: this.#nextId+1,
      title: createBookDto.title,
      author: createBookDto.author,
      isbn: createBookDto.isbn,
      publishYear: createBookDto.publishYear,
      reserved: createBookDto.reserved ?? false,
    });



    return 'This action adds a new book';
  }

  findAll() {
    return this.#books;
  }

  findOne(id: number) {
    return this.#books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    this.findOne(id).title = updateBookDto.title ?? this.findOne(id).title;
    this.findOne(id).author = updateBookDto.author ?? this.findOne(id).author;
    this.findOne(id).isbn = updateBookDto.isbn ?? this.findOne(id).isbn;
    this.findOne(id).publishYear = updateBookDto.publishYear ?? this.findOne(id).publishYear;
    this.findOne(id).reserved = updateBookDto.reserved ?? this.findOne(id).reserved;
  }

  remove(id: number) {

    this.#books.splice(this.#books.indexOf(this.#books.find((book) => book.id === id)));

    return `This action removes a #${id} book`;
  }
}
