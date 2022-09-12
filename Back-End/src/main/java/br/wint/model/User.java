package br.wint.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
@Entity(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    @Column(unique = true)
    private Long id;

    @NotNull
    @Size(max = 25)
    private String firstName;

    @NotNull
    @Size(max = 25)
    private String lastName;

    @NotNull
    @Column(name = "birth_date")
    private Date birthDate;

    @Size(max = 30)
    @NotNull
    @Column(unique = true)
    private String username;

    @Size(max = 100)
    @NotNull
    @Column(unique = true)
    private String email;

    @Size(max = 50)
    @Column(unique = true)
    private String phoneNumber;

    @Size(max = 200)
    private String biography;

    @NotNull
    @Size(max = 255)
    private String password;

    private boolean isDeleted;

    private boolean isInative;

    private Date creationDate;

    @OneToMany(mappedBy = "userPosting")
    private List<Post> posts;
}
