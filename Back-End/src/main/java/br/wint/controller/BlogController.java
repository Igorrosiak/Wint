package br.wint.controller;

import br.wint.model.Blog;
import br.wint.service.BlogServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("blog")
@CrossOrigin("*")
public class BlogController {

    @Autowired
    BlogServiceImpl blogServiceImpl;

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity<Blog> create(@RequestBody Blog blog)
            throws URISyntaxException {
        Blog createdBlog = blogServiceImpl.create(blog);
        if (createdBlog == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(createdBlog.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(createdBlog);
        }
    }

    // URI cria url pro Usuario
    // RequestBody é uma requisição do front-end para o servidor
    // ResponseEntity resposta do servidor ao front-end (também é JSON)

    @PutMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Blog> update(@RequestBody Blog blog, @PathVariable Long id) {
        Blog updatedBlog = blogServiceImpl.update(id, blog);
        if (updatedBlog == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(updatedBlog);
        }
    }

    // PathVariable manipula as URI's e define os id's como parâmetros

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Optional<Blog>> findById(@PathVariable Long id) {
        Optional<Blog> foundBlog = blogServiceImpl.findById(id);
        if (foundBlog.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(foundBlog);
        }
    }

    // isEmpty verifica se o tamanho é 0

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<Blog>> findAll() {
        List<Blog> allBlogs = blogServiceImpl.findAll();
        if (allBlogs.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(allBlogs);
        }
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    private ResponseEntity<Object> delete(@PathVariable Long id) {
        if (blogServiceImpl.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
