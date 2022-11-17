package br.wint.controller;

import br.wint.model.ProfessionalExperience;
import br.wint.service.ProfessionalExperienceServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("professional-experience")
@CrossOrigin("*")
public class ProfessionalExperienceController {

    @Autowired
    ProfessionalExperienceServiceImpl professionalExperienceServiceImpl;

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity<ProfessionalExperience> create(@RequestBody ProfessionalExperience professionalExperience)
            throws URISyntaxException {
        ProfessionalExperience createdProfessionalExperience = professionalExperienceServiceImpl.create(professionalExperience);
        if (professionalExperience == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(professionalExperience.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(professionalExperience);
        }
    }

    // URI cria url pro Usuario
    // RequestBody é uma requisição do front-end para o servidor
    // ResponseEntity resposta do servidor ao front-end (também é JSON)

    @PutMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<ProfessionalExperience> update(@RequestBody ProfessionalExperience professionalExperience, @PathVariable Long id) {
        ProfessionalExperience updatedProfessionalExperience = professionalExperienceServiceImpl.update(id, professionalExperience);
        if (updatedProfessionalExperience == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(updatedProfessionalExperience);
        }
    }

    // PathVariable manipula as URI's e define os id's como parâmetros

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Optional<ProfessionalExperience>> findById(@PathVariable Long id) {
        Optional<ProfessionalExperience> foundProfessionalExperience = professionalExperienceServiceImpl.findById(id);
        if (foundProfessionalExperience.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(foundProfessionalExperience);
        }
    }

    // isEmpty verifica se o tamanho é 0

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<ProfessionalExperience>> findAll() {
        List<ProfessionalExperience> allProfessionalExperiences = professionalExperienceServiceImpl.findAll();
        if (allProfessionalExperiences.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(allProfessionalExperiences);
        }
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    private ResponseEntity<Object> delete(@PathVariable Long id) {
        if (professionalExperienceServiceImpl.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}


