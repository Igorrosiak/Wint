package br.wint.service;

import br.wint.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public User create(User user);
    public User update(Long id, User user);
    public boolean delete(Long id);
    public Optional<User> read(Long id);
    public List<User> findAll();
    public User save(User user);
}
