package br.wint.service;

import br.wint.model.ProfessionalExperience;
import br.wint.repository.ProfessionalExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessionalExperienceServiceImpl implements ProfessionalExperienceService{

    @Autowired
    ProfessionalExperienceRepository professionalExperienceRepository;

    @Override
    public List<ProfessionalExperience> findAll() {
        return professionalExperienceRepository.findAll();
    }

    @Override
    public ProfessionalExperience create(ProfessionalExperience professionalExperience) {
        return professionalExperienceRepository.save(professionalExperience);
    }

    @Override
    public Optional<ProfessionalExperience> findById(Long id) {
        return professionalExperienceRepository.findById(id);
    }

    @Override
    public ProfessionalExperience update(Long id, ProfessionalExperience professionalExperience){
        Optional<ProfessionalExperience> updateProfessionalExperience = professionalExperienceRepository.findById(id);
        if (!updateProfessionalExperience.isEmpty()){
            updateProfessionalExperience.get().setCompany(professionalExperience.getCompany());
            updateProfessionalExperience.get().setDescription(professionalExperience.getDescription());
            updateProfessionalExperience.get().setData(professionalExperience.getData());
            updateProfessionalExperience.get().setRole(professionalExperience.getRole());
            updateProfessionalExperience.get().setPlace(professionalExperience.getPlace());
            updateProfessionalExperience.get().setTag(professionalExperience.getTag());
            return professionalExperienceRepository.save(updateProfessionalExperience.get());
        } else {
            return null;
        }
    }
    
    @Override
    public ProfessionalExperience save(ProfessionalExperience professionalExperience) {
        try {
            return professionalExperienceRepository.save(professionalExperience);
        }
        catch (Exception e){ throw e; }
    }

    @Override
    public boolean delete(Long id) {
        try {
            professionalExperienceRepository.deleteById(id);
            return professionalExperienceRepository.findById(id).isEmpty();
        } catch (Exception e) {
            return false;
        }
    }
}
