package br.wint.controller;

import br.wint.model.User;
import br.wint.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    UserServiceImpl userServiceImpl;

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity<User> create(@RequestBody User user)
            throws URISyntaxException{
        User createdUser = userServiceImpl.create(user);
        if (createdUser == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(createdUser.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(createdUser);
        }
    }

    @PutMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<User> update(@RequestBody User user, @PathVariable Long id) {
        User updatedUser = userServiceImpl.update(id, user);
        if (updatedUser == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(updatedUser);
        }
    }

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Optional<User>> read(@PathVariable Long id) {
        Optional<User> foundUser = userServiceImpl.read(id);
        if (foundUser.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(foundUser);
        }
    }

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<User>> findAll() {
        List<User> allUsers = userServiceImpl.findAll();
        if (allUsers.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(allUsers);
        }
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    private ResponseEntity<Object> delete(@PathVariable Long id) {
        if (userServiceImpl.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
