package br.wint.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Setter
@Entity(name = "blog")
public class Blog {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    @Size(max = 300)
    private String name;

    @Getter
    @Size(max = 150)
    private String description;

    @Getter
    private Date data;

    @Getter
    private String content;

    @ManyToOne
    @JoinColumn(name = "userFromBlog_id")
    private User userFromBlog;
}
