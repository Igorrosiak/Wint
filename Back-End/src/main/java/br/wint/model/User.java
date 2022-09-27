package br.wint.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@ToString
@Entity(name = "user_tb")
public class User {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    @Setter
    @Size(max = 25)
    private String firstName;

    @Getter
    @Setter
    @Size(max = 25)
    private String lastName;

    @Getter
    @Setter
    @Column(name = "birth_date")
    private Date birthDate;

    @Getter
    @Setter
    @Size(max = 30)
    @Column(unique = true)
    private String username;

    @Getter
    @Setter
    @Size(max = 100)
    @Column(unique = true)
    private String email;

    @Getter
    @Setter
    @Size(max = 50)
    private String phoneNumber;

    @Getter
    @Setter
    @Size(max = 200)
    private String biography;

    @Getter
    @Setter
    @Size(max = 255)
    private String password;

    @Getter
    @Setter
    private boolean isInative;

    @Getter
    @Setter
    private Date creationDate;

    @Getter
    @OneToMany(mappedBy = "userPosting")
    private List<Post> posts;
}
