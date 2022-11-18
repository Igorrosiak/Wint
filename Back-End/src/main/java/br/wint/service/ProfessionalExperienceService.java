package br.wint.service;

import br.wint.model.ProfessionalExperience;

import java.util.List;
import java.util.Optional;

public interface ProfessionalExperienceService {

    public List<ProfessionalExperience> findAll();
    public ProfessionalExperience create(ProfessionalExperience professionalExperience);
    public Optional<ProfessionalExperience> findById(Long id);
    public ProfessionalExperience update(Long id, ProfessionalExperience professionalExperience);
    public boolean delete(Long id);
    public ProfessionalExperience save(ProfessionalExperience professionalExperience);
}
