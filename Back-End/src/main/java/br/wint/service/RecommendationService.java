package br.wint.service;

import br.wint.model.Recommendation;

import java.util.List;
import java.util.Optional;

public interface RecommendationService {

    public List<Recommendation> findAll();
    public Recommendation create(Recommendation recommendation);
    public Optional<Recommendation> findById(Long id);
    public Recommendation update(Long id, Recommendation recommendation);
    public boolean delete(Long id);
    public Recommendation save(Recommendation recommendation);
}
