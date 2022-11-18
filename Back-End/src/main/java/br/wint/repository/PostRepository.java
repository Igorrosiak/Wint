package br.wint.repository;

import br.wint.model.Post;
import br.wint.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

//    public List<Post> findByUserPosting(Optional<User> user);
}
