package br.wint.controller;

import br.wint.model.Post;
import br.wint.service.PostServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("post")
public class PostController {

    @Autowired
    PostServiceImpl postServiceImpl;

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity<Post> create(@RequestBody Post post)
            throws URISyntaxException{
        Post createdPost = postServiceImpl.create(post);
        if (createdPost == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(createdPost.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(createdPost);
        }
    }

    // URI cria url pro Usuario
    // RequestBody é uma requisição do front-end para o servidor
    // ResponseEntity resposta do servidor ao front-end (também é JSON)

    @PutMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Post> update(@RequestBody Post post, @PathVariable Long id) {
        Post updatedPost = postServiceImpl.update(id, post);
        if (updatedPost == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(updatedPost);
        }
    }

    // PathVariable manipula as URI's e define os id's como parâmetros

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Optional<Post>> findById(@PathVariable Long id) {
        Optional<Post> foundPost = postServiceImpl.findById(id);
        if (foundPost.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(foundPost);
        }
    }

    // isEmpty verifica se o tamanho é 0

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<Post>> findAll() {
        List<Post> allPosts = postServiceImpl.findAll();
        if (allPosts.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(allPosts);
        }
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    private ResponseEntity<Object> delete(@PathVariable Long id) {
        if (postServiceImpl.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}