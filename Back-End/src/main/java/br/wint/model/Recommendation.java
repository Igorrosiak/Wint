package br.wint.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Setter
@Entity(name = "recommendation")
public class Recommendation {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    @Size(max = 150)
    private String description;

    @ManyToOne
    @JoinColumn(name = "userRecommended_id")
    private User userRecommended;

}
