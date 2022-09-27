package br.wint.controller;

import br.wint.model.Comment;
import br.wint.service.CommentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("comment")
public class CommentController {

    @Autowired
    CommentServiceImpl commentServiceImpl;

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity<Comment> create(@RequestBody Comment comment)
            throws URISyntaxException{
        Comment createdComment = commentServiceImpl.create(comment);
        if (createdComment == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(createdComment.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(createdComment);
        }
    }

    // URI cria url pro Usuario
    // RequestBody é uma requisição do front-end para o servidor
    // ResponseEntity resposta do servidor ao front-end (também é JSON)

    @PutMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Comment> update(@RequestBody Comment comment, @PathVariable Long id) {
        Comment updatedComment = commentServiceImpl.update(id, comment);
        if (updatedComment == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(updatedComment);
        }
    }

    // PathVariable manipula as URI's e define os id's como parâmetros

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Optional<Comment>> findById(@PathVariable Long id) {
        Optional<Comment> foundComment = commentServiceImpl.findById(id);
        if (foundComment.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(foundComment);
        }
    }

    // isEmpty verifica se o tamanho é 0

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<Comment>> findAll() {
        List<Comment> allComments = commentServiceImpl.findAll();
        if (allComments.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(allComments);
        }
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    private ResponseEntity<Object> delete(@PathVariable Long id) {
        if (commentServiceImpl.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}