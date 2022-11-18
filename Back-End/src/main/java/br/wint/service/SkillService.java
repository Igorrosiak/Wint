package br.wint.service;

import br.wint.model.Skill;

import java.util.List;
import java.util.Optional;

public interface SkillService {

    public List<Skill> findAll();
    public Skill create(Skill skill);
    public Optional<Skill> findById(Long id);
    public Skill update(Long id, Skill skill);
    public boolean delete(Long id);
    public Skill save(Skill skill);
}
