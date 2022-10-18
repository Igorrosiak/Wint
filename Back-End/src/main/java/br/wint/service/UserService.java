package br.wint.service;

import br.wint.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public List<User> findAll();
    public User create(User user);
    public Optional<User> findById(Long id);
    public User update(Long id, User user);
    public boolean delete(Long id);
    public User save(User user);
}
