package br.wint.service;

import br.wint.model.Comment;
import br.wint.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    CommentRepository commentRepository;

    @Override
    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    @Override
    public Comment create(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public Optional<Comment> findById(Long id) {
        return commentRepository.findById(id);
    }

    @Override
    public Comment update(Long id, Comment comment) {
        Optional<Comment> updateComment = commentRepository.findById(id);
        if (!updateComment.isEmpty()){
            updateComment.get().setContentComment(comment.getContentComment());
            return commentRepository.save(updateComment.get());
        } else {
            return null;
        }
    }

    @Override
    public boolean delete(Long id) {
        try {
            commentRepository.deleteById(id);
            return commentRepository.findById(id).isEmpty();
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public Comment save(Comment comment) {
        try {
            return commentRepository.save(comment);
        }
        catch (Exception e){
            throw e;
        }
    }
}
