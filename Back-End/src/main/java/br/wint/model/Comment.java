package br.wint.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@Entity(name = "comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Size(max = 100)
    private String contentComment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userCommenting;

    @ManyToOne
    @JoinColumn(name = "postCommented_id")
    private Post postCommented;

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", contentComment='" + contentComment + '\'' +
                '}';
    }
}
