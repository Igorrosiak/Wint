package br.wint.service;

import br.wint.model.Post;
import br.wint.model.User;
import br.wint.repository.PostRepository;
import br.wint.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepository postRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Post create(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Optional<Post> findById(Long id) {
        return postRepository.findById(id);
    }

    @Override
    public Post update(Long id, Post post){
        Optional<Post> updatePost = postRepository.findById(id);
        if (!updatePost.isEmpty()){
            updatePost.get().setContentPost(post.getContentPost());
            return postRepository.save(updatePost.get());
        } else {
            return null;
        }
    }

    @Override
    public Post save(Post post) {
        try {
            return postRepository.save(post);
        }
        catch (Exception e){ throw e; }
    }

    @Override
    public boolean delete(Long id) {
        try {
            postRepository.deleteById(id);
            return postRepository.findById(id).isEmpty();
        } catch (Exception e) {
            return false;
        }
    }

//    @Override
//    public List<Post> findByUserPosting(Long userId){
//        Optional<User> userAux = userRepository.findById(userId);
//        return postRepository.findByUserPosting(userAux);
//    }
}