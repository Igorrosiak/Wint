package br.wint.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

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

    @NotNull
    @Size(max = 100)
    private String content;

    @NotNull
    private User userCommenting;

    @ManyToOne
    @JoinColumn(name = "postCommented_id")
    private Post postCommented;
}
