package br.wint.service;

import br.wint.model.Skill;
import br.wint.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillServiceImpl implements SkillService{

    @Autowired
    SkillRepository skillRepository;

    @Override
    public List<Skill> findAll() {
        return skillRepository.findAll();
    }

    @Override
    public Skill create(Skill skill) {
        return skillRepository.save(skill);
    }

    @Override
    public Optional<Skill> findById(Long id) {
        return skillRepository.findById(id);
    }

    @Override
    public Skill update(Long id, Skill skill){
        Optional<Skill> updateSkill = skillRepository.findById(id);
        if (!updateSkill.isEmpty()){
            updateSkill.get().setName(skill.getName());
            updateSkill.get().setDescription(skill.getDescription());
            return skillRepository.save(updateSkill.get());
        } else {
            return null;
        }
    }

    @Override
    public Skill save(Skill skill) {
        try {
            return skillRepository.save(skill);
        }
        catch (Exception e){ throw e; }
    }

    @Override
    public boolean delete(Long id) {
        try {
            skillRepository.deleteById(id);
            return skillRepository.findById(id).isEmpty();
        } catch (Exception e) {
            return false;
        }
    }
}