package br.wint.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@ToString
@Entity(name = "comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    @Column(unique = true)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userCommenting_id")
    private User userCommenting;

    @ManyToOne
    @JoinColumn(name = "postCommented_id")
    private Post postCommented;
}
