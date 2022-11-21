package br.wint.controller;

import br.wint.model.Recommendation;
import br.wint.service.RecommendationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("recommendation")
@CrossOrigin("*")
public class RecommendationController {

    @Autowired
    RecommendationServiceImpl recommendationServiceImpl;

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity<Recommendation> create(@RequestBody Recommendation recommendation)
            throws URISyntaxException {
        Recommendation createdRecommendation = recommendationServiceImpl.create(recommendation);
        if (createdRecommendation == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(createdRecommendation.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(createdRecommendation);
        }
    }

    // URI cria url pro Usuario
    // RequestBody é uma requisição do front-end para o servidor
    // ResponseEntity resposta do servidor ao front-end (também é JSON)

    @PutMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Recommendation> update(@RequestBody Recommendation recommendation, @PathVariable Long id) {
        Recommendation updatedRecommendation = recommendationServiceImpl.update(id, recommendation);
        if (updatedRecommendation == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(updatedRecommendation);
        }
    }

    // PathVariable manipula as URI's e define os id's como parâmetros

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Optional<Recommendation>> findById(@PathVariable Long id) {
        Optional<Recommendation> foundRecommendation = recommendationServiceImpl.findById(id);
        if (foundRecommendation.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(foundRecommendation);
        }
    }

    // isEmpty verifica se o tamanho é 0

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<Recommendation>> findAll() {
        List<Recommendation> allRecommendations = recommendationServiceImpl.findAll();
        if (allRecommendations.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(allRecommendations);
        }
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    private ResponseEntity<Object> delete(@PathVariable Long id) {
        if (recommendationServiceImpl.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
