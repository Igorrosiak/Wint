package br.wint.repository;

import br.wint.model.Permission;
import br.wint.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PermissionRepository extends JpaRepository<Permission, Long> {

    public List<Permission> findByUsersIn(User... users);
}