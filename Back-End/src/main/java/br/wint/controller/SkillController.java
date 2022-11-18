package br.wint.controller;

import br.wint.model.Skill;
import br.wint.service.SkillServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("skill")
@CrossOrigin("*")
public class SkillController {

    @Autowired
    SkillServiceImpl skillServiceImpl;

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity<Skill> create(@RequestBody Skill skill)
            throws URISyntaxException {
        Skill createdSkill = skillServiceImpl.create(skill);
        if (createdSkill == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(createdSkill.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(createdSkill);
        }
    }

    // URI cria url pro Usuario
    // RequestBody é uma requisição do front-end para o servidor
    // ResponseEntity resposta do servidor ao front-end (também é JSON)

    @PutMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Skill> update(@RequestBody Skill skill, @PathVariable Long id) {
        Skill updatedSkill = skillServiceImpl.update(id, skill);
        if (updatedSkill == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(updatedSkill);
        }
    }

    // PathVariable manipula as URI's e define os id's como parâmetros

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Optional<Skill>> findById(@PathVariable Long id) {
        Optional<Skill> foundSkill = skillServiceImpl.findById(id);
        if (foundSkill.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(foundSkill);
        }
    }

    // isEmpty verifica se o tamanho é 0

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<Skill>> findAll() {
        List<Skill> allSkills = skillServiceImpl.findAll();
        if (allSkills.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(allSkills);
        }
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    private ResponseEntity<Object> delete(@PathVariable Long id) {
        if (skillServiceImpl.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}