package br.wint.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity(name = "comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    @Column(unique = true)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "postCommented_id")
    private Post postCommented;

    @ManyToOne
    @JoinColumn(name = "userCommenting_id")
    private User userCommenting;


}
