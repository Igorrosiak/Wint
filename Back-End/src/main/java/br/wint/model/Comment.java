package br.wint.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity(name = "comment")
public class Comment {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    @Setter
    @Size(max = 100)
    private String contentComment;

    @Setter
    @ManyToOne
    @JoinColumn(name = "userCommenting_id")
    private User userCommenting;

    @Setter
    @ManyToOne
    @JoinColumn(name = "postCommented_id")
    private Post postCommented;

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", contentComment='" + contentComment + '\'' +
                ", userCommenting=" + userCommenting +
                '}';
    }
}
