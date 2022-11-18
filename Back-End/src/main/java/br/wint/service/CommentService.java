package br.wint.service;

import br.wint.model.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentService {

    public List<Comment> findAll();
    public Comment create(Comment comment);
    public Optional<Comment> findById(Long id);
    public Comment update(Long id, Comment comment);
    public boolean delete(Long id);
    public Comment save(Comment comment);
}