package br.wint.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@Entity(name = "permission")
public class Permission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 60)
    private String nome;

    @ManyToMany(mappedBy = "permissions")
    private List<User> users;

    @Override
    public String toString() {
        return "Permission{" +
                "nome='" + nome + '\'' +
                '}';
    }
}