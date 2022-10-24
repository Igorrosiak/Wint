package br.wint.service;

import br.wint.model.Comment;
import br.wint.model.Portfolio;
import br.wint.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PortfolioServiceImpl implements PortfolioService{

    @Autowired
    PortfolioRepository portfolioRepository;

    @Override
    public List<Portfolio> findAll() {
        return portfolioRepository.findAll();
    }

    @Override
    public Portfolio create(Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    @Override
    public Optional<Portfolio> findById(Long id) {
        return portfolioRepository.findById(id);
    }

    @Override
    public Portfolio update(Long id, Portfolio portfolio) {
        Optional<Portfolio> updatePortfolio = portfolioRepository.findById(id);
        if (!updatePortfolio.isEmpty()){
            updatePortfolio.get().setDescription(portfolio.getDescription());
            updatePortfolio.get().setName(portfolio.getName());
            return portfolioRepository.save(updatePortfolio.get());
        } else {
            return null;
        }
    }

    @Override
    public boolean delete(Long id) {
        try {
            portfolioRepository.deleteById(id);
            return portfolioRepository.findById(id).isEmpty();
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public Portfolio save(Portfolio portfolio) {
        try {
            return portfolioRepository.save(portfolio);
        }
        catch (Exception e){
            throw e;
        }
    }
}
