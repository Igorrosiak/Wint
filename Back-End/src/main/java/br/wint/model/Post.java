package br.wint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@ToString
@Entity(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Size(max = 300)
    private String contentPost;

    @ManyToOne
    @JoinColumn(name = "userPosting_id" )
    private User userPosting;

//    @OneToMany(mappedBy = "postCommented")
//    private List<Comment> postComments;

//    @Override
//    public String toString() {
//        return "Post{" +
//                "id=" + id +
//                ", contentPost='" + contentPost + '\'' +
//                '}';
//    }
}
