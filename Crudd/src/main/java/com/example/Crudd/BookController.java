package com.example.Crudd;



import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookRepository repo;

    public BookController(BookRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return repo.save(book);
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return repo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        Book existing = repo.findById(id).orElse(null);
        if (existing != null) {
            existing.setTitle(book.getTitle());
            existing.setAuthor(book.getAuthor());
            existing.setPrice(book.getPrice());
            return repo.save(existing);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        repo.deleteById(id);
    }
}

