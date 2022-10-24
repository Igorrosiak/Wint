package br.wint.service;

import br.wint.model.Blog;

import java.util.List;
import java.util.Optional;

public interface BlogService {

    public List<Blog> findAll();
    public Blog create(Blog blog);
    public Optional<Blog> findById(Long id);
    public Blog update(Long id, Blog blog);
    public boolean delete(Long id);
    public Blog save(Blog blog);
}
