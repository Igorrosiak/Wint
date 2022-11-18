package br.wint.service;

import br.wint.model.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {

    public List<Post> findAll();
    public Post create(Post post);
    public Optional<Post> findById(Long id);
    public Post update(Long id, Post post);
    public boolean delete(Long id);
    public Post save(Post post);

//    public List<Post> findByUserPosting(Long userId);
}