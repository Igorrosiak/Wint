package br.wint.service;

import br.wint.model.Post;
import br.wint.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepository postRepository;

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
            updatePost.get().setFirstName(post.getFirstName());
            return postRepository.save(updatePost.get());
        } else {
            return null;
        }
    }

    @Override
    public Post save(Post post) {
        try {
//            String newPassword = new BCryptPasswordEncoder().encode(user.getPassword());
//            user.setPassword(newPassword);
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
}