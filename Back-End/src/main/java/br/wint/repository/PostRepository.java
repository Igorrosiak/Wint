package br.wint.repository;

import br.wint.model.Post;
import br.wint.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {

    public List<Post> findByUserPosting(Optional<User> user);
}
