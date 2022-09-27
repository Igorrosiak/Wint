package br.wint.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Entity(name = "post")
public class Post {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    @Setter
    @Size(max = 300)
    private String contentPost;

    @Setter
    @ManyToOne
    @JoinColumn(name = "userPosting_id")
    private User userPosting;

    @Getter
    @OneToMany(mappedBy = "postCommented")
    private List<Comment> postComments;

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", contentPost='" + contentPost + '\'' +
                ", postComments=" + postComments +
                '}';
    }
}
