package br.wint.service;

import br.wint.model.Portfolio;
import br.wint.model.Post;

import java.util.List;
import java.util.Optional;

public interface PortfolioService {

    public List<Portfolio> findAll();
    public Portfolio create(Portfolio portfolio);
    public Optional<Portfolio> findById(Long id);
    public Portfolio update(Long id, Portfolio portfolio);
    public boolean delete(Long id);
    public Portfolio save(Portfolio portfolio);
}