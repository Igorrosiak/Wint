package br.wint.service;

import br.wint.model.Recommendation;
import br.wint.repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecommendationServiceImpl implements RecommendationService{

    @Autowired
    RecommendationRepository recommendationRepository;

    @Override
    public List<Recommendation> findAll() {
        return recommendationRepository.findAll();
    }

    @Override
    public Recommendation create(Recommendation recommendation) {
        return recommendationRepository.save(recommendation);
    }

    @Override
    public Optional<Recommendation> findById(Long id) {
        return recommendationRepository.findById(id);
    }

    @Override
    public Recommendation update(Long id, Recommendation recommendation){
        Optional<Recommendation> updateRecommendation = recommendationRepository.findById(id);
        if (!updateRecommendation.isEmpty()){
            updateRecommendation.get().setDescription(recommendation.getDescription());
            return recommendationRepository.save(updateRecommendation.get());
        } else {
            return null;
        }
    }
    
    @Override
    public Recommendation save(Recommendation recommendation) {
        try {
            return recommendationRepository.save(recommendation);
        }
        catch (Exception e){ throw e; }
    }

    @Override
    public boolean delete(Long id) {
        try {
            recommendationRepository.deleteById(id);
            return recommendationRepository.findById(id).isEmpty();
        } catch (Exception e) {
            return false;
        }
    }
}
