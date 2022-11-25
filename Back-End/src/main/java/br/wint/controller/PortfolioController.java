package br.wint.controller;

import br.wint.model.Portfolio;
import br.wint.service.PortfolioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("portfolio")
@CrossOrigin("*")
public class PortfolioController {

    @Autowired
    PortfolioServiceImpl portfolioServiceImpl;

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity<Portfolio> create(@RequestBody Portfolio portfolio)
            throws URISyntaxException {
        Portfolio createdPortfolio = portfolioServiceImpl.create(portfolio);
        if (createdPortfolio == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(createdPortfolio.getId())
                    .toUri();
            return ResponseEntity.created(uri).body(createdPortfolio);
        }
    }

    // URI cria url pro Usuario
    // RequestBody é uma requisição do front-end para o servidor
    // ResponseEntity resposta do servidor ao front-end (também é JSON)

    @PutMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Portfolio> update(@RequestBody Portfolio portfolio, @PathVariable Long id) {
        Portfolio updatedPortfolio = portfolioServiceImpl.update(id, portfolio);
        if (updatedPortfolio == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(updatedPortfolio);
        }
    }

    // PathVariable manipula as URI's e define os id's como parâmetros

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Optional<Portfolio>> findById(@PathVariable Long id) {
        Optional<Portfolio> foundPortfolio = portfolioServiceImpl.findById(id);
        if (foundPortfolio.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(foundPortfolio);
        }
    }

    // isEmpty verifica se o tamanho é 0

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<Portfolio>> findAll() {
        List<Portfolio> allPortfolios = portfolioServiceImpl.findAll();
        if (allPortfolios.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(allPortfolios);
        }
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    private ResponseEntity<Object> delete(@PathVariable Long id) {
        if (portfolioServiceImpl.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
