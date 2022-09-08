package br.wint.service;

import br.wint.model.User;
import br.wint.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl{

//    @Autowired
//    UserRepository userRepository;
//
//    @Override
//    public User create(User user) {
//        return userRepository.save(user);
//    }
//
//    @Override
//    public User update(Long id, User user) {
//        Optional<User> updateUser = userRepository.findById(id);
//        if (!updateUser.isEmpty()){
//            updateUser.get().setFirstName(user.getFirstName());
//            updateUser.get().setUsername(user.getUsername());
//            updateUser.get().setPassword(user.getPassword());
//            return userRepository.save(updateUser.get());
//        } else {
//            return null;
//        }
//    }
//
//    @Override
//    public List<User> findAll() {
//        return userRepository.findAll();
//    }
//
//    @Override
//    public User save(User user) {
//        try {
//            String newPassword = new BCryptPasswordEncoder().encode(user.getPassword());
//            user.setPassword(newPassword);
//            return userRepository.save(user);
//        }
//        catch (Exception e){ throw e; }
//    }
//
//    @Override
//    public Optional<User> read(Long id) {
//        return userRepository.findById(id);
//    }
//
//    @Override
//    public boolean delete(Long id) {
//        try {
//            userRepository.deleteById(id);
//            return userRepository.findById(id).isEmpty();
//        } catch (Exception e) {
//            return false;
//        }
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Usuario usuario = usuarioRepository.findByUsername(username);
//        if (usuario == null){
//            throw new UsernameNotFoundException("Usuário não encontrado");
//        }
//
//        UserDetails user = User.withUsername(usuario.getUsername())
//                .password(usuario.getPassword())
//                .authorities(authorities(usuario)).build();
//
//        return user;
//    }
//
//    public Collection<GrantedAuthority> authorities(Usuario usuario){
//
//        Collection<GrantedAuthority> autorizacoes = new ArrayDeque<>();
//        List<Permissao> permissoes = permissaoRepository.findByUsuariosIn(usuario);
//        for (Permissao permissao: permissoes){
//            autorizacoes.add(new SimpleGrantedAuthority(("ROLE_" + permissao.getNome())));
//        }
//
//        return autorizacoes;
//    }
}
