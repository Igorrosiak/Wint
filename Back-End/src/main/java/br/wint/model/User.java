package br.wint.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
@Entity(name = "user_tb")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Size(max = 25)
    private String firstName;

    @Size(max = 25)
    private String lastName;

    @Column(name = "birth_date")
    private Date birthDate;

    @Size(max = 30)
    @Column(unique = true)
    private String username;

    @Size(max = 100)
    @Column(unique = true)
    private String email;

    @Size(max = 50)
    private String phoneNumber;

    @Size(max = 200)
    private String biography;

    @Size(max = 255)
    private String password;

    private boolean isDeleted;

    private boolean isInative;

    private Date creationDate;

    @OneToMany(mappedBy = "userPosting")
    private List<Post> posts;
}
