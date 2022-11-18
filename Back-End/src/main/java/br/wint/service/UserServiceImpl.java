package br.wint.service;

import br.wint.model.Permission;
import br.wint.model.User;
import br.wint.repository.PermissionRepository;
import br.wint.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayDeque;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PermissionRepository permissionRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User create(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User update(Long id, User user){
        Optional<User> updateUser = userRepository.findById(id);
        if (!updateUser.isEmpty()){
            updateUser.get().setFirstName(user.getFirstName());
            updateUser.get().setLastName(user.getLastName());
            updateUser.get().setBirthDate(user.getBirthDate());
            updateUser.get().setUsername(user.getUsername());
            updateUser.get().setEmail(user.getEmail());
            updateUser.get().setPhoneNumber(user.getPhoneNumber());
            updateUser.get().setBiography(user.getBiography());
            updateUser.get().setPassword(user.getPassword());
            return userRepository.save(updateUser.get());
        } else {
            return null;
        }
    }

    @Override
    public User save(User user) {
        try {
            String newPassword = new BCryptPasswordEncoder().encode(user.getPassword());
            user.setPassword(newPassword);
            return userRepository.save(user);
        }
        catch (Exception e){ throw e; }
    }


    @Override
    public boolean delete(Long id) {
        try {
            userRepository.deleteById(id);
            return userRepository.findById(id).isEmpty();
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User userAux = userRepository.findByUsername(username);
        if (userAux == null){
            throw new UsernameNotFoundException("Usuário não encontrado");
        }

        UserDetails user = org.springframework.security.core.userdetails.User.withUsername(userAux.getUsername())
                .password(userAux.getPassword())
                .authorities(authorities(userAux)).build();

        return user;
    }

    public Collection<GrantedAuthority> authorities(User user){

        Collection<GrantedAuthority> autorizacoes = new ArrayDeque<>();
        List<Permission> permissions = permissionRepository.findByUsersIn(user);
        for (Permission permission: permissions){
            autorizacoes.add(new SimpleGrantedAuthority(("ROLE_" + permission.getNome())));
        }

        return autorizacoes;
    }
}
